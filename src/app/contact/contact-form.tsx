'use client';

import { useState, useRef, type FormEvent } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import { pathways } from '@/lib/pathways';

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
    if (!String(data.get('name') ?? '').trim()) {
      setFeedback('Enter your full name.');
      return;
    }
    const phone = String(data.get('phone') ?? '').trim();
    if (!/^\+?[\d ()-]+$/.test(phone) || !/^\d{7,15}$/.test(phone.replace(/\D/g, ''))) {
      setFeedback('Enter a contact number with 7 to 15 digits, including the country code if applicable.');
      form.querySelector<HTMLInputElement>('#phone')?.focus();
      return;
    }
    busy.current = true;
    setPending(true);
    setFeedback('');
    try {
      const result = await fetch(endpoint, { method: 'POST', body: data, headers: { Accept:'application/json' }, signal: AbortSignal.timeout(15000) });
      const receipt = await result.json();
      if (!result.ok || receipt.error || receipt.errors?.length) throw new Error();
      setFeedback('Your enquiry was accepted by the form service. I’ll contact you to discuss your training plan, fee and manual payment instructions. Your place is confirmed only after I verify bank credit and send your receipt and enrolment confirmation.');
      form.reset();
    } catch {
      setFeedback('Delivery could not be confirmed. Your entries are still here. You can retry or use the WhatsApp contact.');
    } finally { busy.current = false; setPending(false); }
  }
  return (
    <Card className="max-w-xl mx-auto bg-card/50">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">Training enquiry</CardTitle>
        <CardDescription>
          I use your contact details to reply and arrange a consultation. You can share a topic or learning goal if you wish. Please leave out financial details and identity documents.
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
            <Label htmlFor="phone">WhatsApp or contact number</Label>
            <Input id="phone" name="phone" maxLength={30} autoComplete="tel" type="tel" required placeholder="Include your country code" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="course">Course interest (optional)</Label>
            <select className="w-full rounded-md border border-input bg-background p-2" id="course" name="course" defaultValue="">
              <option value="">I’m still deciding</option>
              {pathways.map(pathway => <option key={pathway.id} value={pathway.title}>{pathway.title}</option>)}
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Previous learning experience and educational goals (optional)</Label>
            <Textarea id="message" name="message" placeholder="What have you tried, and what would you like to understand?" maxLength={3000} rows={4} />
          </div>
          <p className="text-sm" id="privacy-notice">Formspree processes this form and forwards the enquiry to me. I use it to discuss your training request. For questions about your details, use the email on this page. <a className="underline" href="https://formspree.io/legal/privacy-policy/" target="_blank" rel="noreferrer">Read Formspree’s privacy policy (opens a new tab)</a>.</p>
          <label className="flex items-start gap-3 py-2" htmlFor="privacy">
            <input className="mt-1 h-5 w-5 shrink-0" id="privacy" name="privacy" type="checkbox" value="acknowledged" required aria-describedby="privacy-notice" />
            <span>I have read the privacy notice and agree to be contacted about this enquiry.</span>
          </label>
          <Button type="submit" disabled={pending}>{pending ? 'Sending…' : 'Send training enquiry'}</Button>
          <p role="status" aria-live="polite">{feedback}</p>
        </form>
      </CardContent>
    </Card>
  );
}
