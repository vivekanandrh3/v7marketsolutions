import { pageMeta, pages } from '@/lib/site-meta';
export const metadata = pageMeta('/', pages['/'][0], pages['/'][1]);

import { pathways } from '@/lib/pathways';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { markets, type Market } from '@/lib/data';
import { Mail, Phone, MessageSquare } from 'lucide-react';

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
            Learn to read markets. <em>Start where you are.</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-foreground/80 sm:text-xl">
            I teach market structure, chart reading and risk through worked examples. Tell me where you get stuck, and together we choose the topics and sequence that fit your learning goals.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="font-bold">
              <Link href="/insights">Explore Insights</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Request a consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="container">
        <section className="reading-strip"><h2>How I plan a lesson with you</h2>
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 list-decimal pl-5"><li>Explore a free lesson.</li><li>Identify what you know and the step that feels unclear.</li><li>Discuss your learning goals with me.</li><li>Agree on a pathway and sequence.</li><li>Practise with charts, exercises and a decision journal.</li></ol>
        </section>
        <section className="reading-strip"><h2>Flexible learning pathways</h2>
          <div className="grid gap-4 md:grid-cols-2">{pathways.map(p=><Link className="pathway-link" href={'/premium-training#'+p.id} key={p.id}><strong>{p.title}</strong><span>{p.level}</span></Link>)}</div>
        </section>
        <section className="reading-strip"><h2>Which price did most volume trade near?</h2><p>Imagine 10 contracts trade at 100 and 30 trade at 102. The simple average is 101. Weighting each price by contracts gives 101.50. That difference is the starting point for understanding VWAP.</p><Link href="/insights/vwap-intraday-context">Work through the VWAP lesson</Link></section>
      </div>
      {/* Markets Covered Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold font-headline sm:text-4xl">Markets & Instruments Covered</h2>
            <p className="mt-4 text-muted-foreground">
              These examples introduce instruments you may encounter. Use the learning ladder to choose a concept to study.
            </p>
          </div>
          {[
            ['Ownership and lending',[0,4,5,6,7,8,9]],
            ['Contracts and currencies',[1,2,3,10]],
            ['Digital and event markets',[11,12]],
          ].map(([label, indices])=><section key={String(label)} className="mt-10"><h3 className="mb-4 font-headline text-xl">{label}</h3><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{(indices as number[]).map(i=><MarketCard key={markets[i].name} market={markets[i]}/>)}</div></section>)}
        </div>
      </section>

      <section className="container reading-strip"><h2>Study at your own pace</h2><p>Choose a stage in the public ladder, try a worked example and compare your reasoning with the exercise.</p><Link href="/learning-modules">Open the learning ladder</Link> · <Link href="/risk-disclosure">Read about risk and the limits of these examples</Link></section>
      {/* Contact Section */}
      <section className="py-20 md:py-28 border-t border-border/40">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold font-headline sm:text-4xl">Get in Touch</h2>
            <p className="mt-4 text-muted-foreground">
              Have questions or want to connect? I'm here to help.
            </p>
          </div>
          <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
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
