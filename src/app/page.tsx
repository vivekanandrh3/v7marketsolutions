import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { markets, type Market } from '@/lib/data';

const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');

function MarketCard({ market }: { market: Market }) {
  return (
    <div className="flip-card h-52 transition-transform duration-300 ease-in-out hover:scale-105">
      <div className="flip-card-inner">
        <div className="flip-card-front flex flex-col justify-center items-center p-6">
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <market.icon className="w-8 h-8 text-primary" />
            <CardTitle className="font-headline text-2xl text-center">{market.name}</CardTitle>
          </CardHeader>
        </div>
        <div className="flip-card-back flex flex-col justify-center items-center p-6">
          <p className="text-muted-foreground text-center text-base">{market.description}</p>
        </div>
      </div>
    </div>
  );
}


export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full py-24 md:py-32 lg:py-48 text-center">
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
        <div className="container relative">
          <h1 className="text-4xl font-extrabold tracking-tight font-headline sm:text-5xl md:text-6xl lg:text-7xl">
            A trader who teaches people to take informed, risk-aware market decisions.
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-foreground/80 sm:text-xl">
            Insights from a prop firm trader focused on price action, risk management, and trading psychology. Educational content, not financial advice.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button asChild size="lg" className="font-bold">
              <Link href="/insights">Explore Insights</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/about">My Journey</Link>
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
              My expertise spans across a diverse range of asset classes, each with its unique characteristics and opportunities.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {markets.map((market) => (
              <MarketCard key={market.name} market={market} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
