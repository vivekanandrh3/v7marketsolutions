
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { markets, type Market } from '@/lib/data';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');

function MarketCard({ market }: { market: Market }) {
  return (
    <article className="market-panel">
      <market.icon aria-hidden="true" className="h-6 w-6 text-primary" />
      <h3 className="font-headline text-xl font-semibold">{market.name}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{market.description}</p>
    </article>
  );
}


export default function Home() {
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
      icon: MessageSquare,
      title: "WhatsApp",
      content: "Chat on WhatsApp",
      href: "https://wa.me/918317324956"
    },
    {
      icon: MapPin,
      title: "Address",
      content: "Vijayanagar, Bengaluru, Karnataka 560040, India"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="academy-hero relative isolate overflow-hidden">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-background/80" />
        <div className="container relative academy-intro">
          <h1 className="text-4xl font-extrabold tracking-tight font-headline sm:text-5xl md:text-6xl lg:text-7xl">
            Learn to read the market. <em>Build your own process.</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-foreground/80 sm:text-xl">
            Study price action, position sizing and trading psychology with a prop firm trader. Start with a lesson, then put the idea to work on a chart.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="font-bold">
              <Link href="/insights">Explore Insights</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/premium-training">Browse programs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Markets Covered Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold font-headline sm:text-4xl">Markets & Instruments Covered</h2>
            <p className="mt-4 text-muted-foreground">
              Explore what each instrument represents and how it trades.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {markets.map((market) => (
              <MarketCard key={market.name} market={market} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-28 border-t border-border/40">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold font-headline sm:text-4xl">Get in Touch</h2>
            <p className="mt-4 text-muted-foreground">
              Have questions or want to connect? I'm here to help.
            </p>
          </div>
          <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
             {contactDetails.map((detail) => (
              <div key={detail.title} className="flex flex-col items-center gap-2">
                <detail.icon className="h-8 w-8 text-primary" />
                <h3 className="font-semibold text-lg">{detail.title}</h3>
                 {detail.href ? (
                    <a 
                      href={detail.href} 
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors break-words"
                      target={detail.href.startsWith('http') ? "_blank" : undefined}
                      rel={detail.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    >
                      {detail.content}
                    </a>
                  ) : (
                    <p className="text-sm text-muted-foreground break-words">{detail.content}</p>
                  )}
              </div>
            ))}
          </div>
           <div className="mt-12 text-center">
            <Button asChild>
                <Link href="/contact">Send a Message</Link>
            </Button>
           </div>
        </div>
      </section>
    </div>
  );
}
