'use client';

import { useActionState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { useToast } from "@/hooks/use-toast";
import { submitCheckoutForm, type CheckoutFormState } from '@/app/actions/checkout';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';

const initialState: CheckoutFormState = {
  message: '',
  status: 'idle',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      Proceed to Payment
    </Button>
  );
}

export function CheckoutForm() {
  const [state, formAction] = useActionState(submitCheckoutForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === 'success') {
      toast({
        title: "Details Submitted",
        description: state.message,
      });
      formRef.current?.reset();
      // In a real app, you would redirect to a payment gateway here.
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
        <CardTitle className="font-headline text-2xl">Billing Information</CardTitle>
        <CardDescription>
          This information will be used for your invoice.
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
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 123-4567" required/>
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Full Address</Label>
            <Textarea id="address" name="address" placeholder="123 Main St, Anytown, USA 12345" required rows={3} />
          </div>
          <SubmitButton />
        </form>
      </CardContent>
    </Card>
  );
}
