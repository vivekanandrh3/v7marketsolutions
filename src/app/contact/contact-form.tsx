'use client';

import { useState, useRef, type FormEvent } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const endpoint = 'https://formspree.io/f/mreekydb';

export function ContactForm() {
  const [pending, setPending] = useState(false);
  const busy = useRef(false);
  const [feedback, setFeedback] = useState('');
  async function send(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy.current) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    if (data.get('_gotcha')) { setFeedback('Unable to submit this form.'); return; }
    if (String(data.get('message')).trim().length < 10 || !String(data.get('name')).trim()) {
      setFeedback('Enter your name and a question of at least 10 characters.'); return;
    }
    busy.current = true;
    setPending(true);
    setFeedback('');
    try {
      const result = await fetch(endpoint, { method: 'POST', body: data, headers: { Accept:'application/json' }, signal: AbortSignal.timeout(15000) });
      const receipt = await result.json();
      if (!result.ok || receipt.error || receipt.errors?.length) throw new Error();
      setFeedback('Your enquiry was accepted by the form service.');
      form.reset();
    } catch {
      setFeedback('Delivery could not be confirmed. Your entries are still here. You can retry or use the WhatsApp contact.');
    } finally { busy.current = false; setPending(false); }
  }
  return (
    <Card className="max-w-xl mx-auto bg-card/50">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">Get in Touch</CardTitle>
        <CardDescription>
          Your name, email, optional phone number and message go to Formspree so I can reply. Please omit account numbers, financial records and identity documents.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={endpoint} method="POST" onSubmit={send} className="space-y-6">
          <input type="text" name="_gotcha" hidden tabIndex={-1} autoComplete="off" aria-hidden="true" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" name="name" autoComplete="name" maxLength={100} placeholder="John Doe" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" name="email" autoComplete="email" maxLength={254} type="email" placeholder="you@example.com" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number (Optional)</Label>
            <Input id="phone" name="phone" maxLength={30} autoComplete="tel" type="tel" placeholder="+1 (555) 123-4567" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Your Message</Label>
            <Textarea id="message" name="message" placeholder="Your question or feedback..." required maxLength={3000} minLength={10} rows={5} />
          </div>
          <Button type="submit" disabled={pending}>{pending ? 'Sending…' : 'Send Message'}</Button>
          <p role="status" aria-live="polite">{feedback}</p>
          <a className="text-sm underline" href="https://formspree.io/legal/privacy-policy/">Formspree privacy policy</a>
        </form>
      </CardContent>
    </Card>
  );
}
