import { ContactForm } from "./contact-form";
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  const contactDetails = [
    {
      icon: Phone,
      title: "Phone",
      content: "+91 8317324956",
      href: "tel:+918317324956"
    },
    {
      icon: Mail,
      title: "Email",
      content: "vivek007hiremath@gmail.com",
      href: "mailto:vivek007hiremath@gmail.com"
    },
    {
      icon: MapPin,
      title: "Address",
      content: "Shivalinga Krupa, 121, 19th cross, 8th main road, M.C.Layout, Vijayanagar, Bengaluru - 560040, India"
    }
  ];

  return (
    <div className="container py-16 md:py-24">
       <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight font-headline sm:text-5xl">Contact Us</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          We're here to help and answer any question you might have.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <h2 className="text-2xl font-bold font-headline text-primary">Contact Information</h2>
          <div className="space-y-6">
            {contactDetails.map((detail) => (
              <div key={detail.title} className="flex items-start gap-4">
                <detail.icon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">{detail.title}</h3>
                  {detail.href ? (
                    <a href={detail.href} className="text-muted-foreground hover:text-foreground transition-colors break-words">
                      {detail.content}
                    </a>
                  ) : (
                    <p className="text-muted-foreground break-words">{detail.content}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
