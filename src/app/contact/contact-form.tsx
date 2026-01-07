'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { useEffect, useRef } from 'react';
import { useToast } from "@/hooks/use-toast";
import { submitContactForm, type ContactFormState } from '@/app/actions/contact';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const initialState: ContactFormState = {
  message: '',
  status: 'idle',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      Send Message
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === 'success') {
      toast({
        title: "Message Sent",
        description: state.message,
      });
      formRef.current?.reset();
    } else if (state.status === 'error') {
      toast({
        variant: "destructive",
        title: "An Error Occurred",
        description: state.message,
      });
    }
  }, [state, toast]);

  return (
    <Card className="max-w-xl mx-auto bg-card/50">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">Get in Touch</CardTitle>
        <CardDescription>
          Have questions about the material or feedback for us? Fill out the form below.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form ref={formRef} action={formAction} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" name="name" placeholder="John Doe" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" name="email" type="email" placeholder="you@example.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Your Message</Label>
            <Textarea id="message" name="message" placeholder="Your question or feedback..." required minLength={10} rows={5} />
          </div>
          <SubmitButton />
        </form>
      </CardContent>
    </Card>
  );
}
