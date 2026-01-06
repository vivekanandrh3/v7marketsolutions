import { ContactForm } from "./contact-form";

export default function ContactPage() {
  return (
    <div className="container py-16 md:py-24">
       <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight font-headline sm:text-5xl">Contact Us</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          We're here to help and answer any question you might have.
        </p>
      </div>
      <ContactForm />
    </div>
  );
}
