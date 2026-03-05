import { CheckoutForm } from './checkout-form';

export default function CheckoutPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight font-headline sm:text-5xl">Complete Your Enrollment</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Please provide your details below to proceed with the payment.
        </p>
      </div>
      <CheckoutForm />
    </div>
  );
}
