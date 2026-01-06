import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { markets, insights, type Market, type InsightPost } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');

function MarketCard({ market }: { market: Market }) {
  const marketImage = PlaceHolderImages.find((img) => img.id === market.imageId);
  return (
    <Card className="flex flex-col overflow-hidden transition-transform transform hover:-translate-y-2 bg-card/50">
      <CardHeader className="flex flex-row items-center gap-4">
        <market.icon className="w-8 h-8 text-primary" />
        <CardTitle className="font-headline text-xl">{market.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{market.description}</p>
      </CardContent>
    </Card>
  );
}

function InsightCard({ post }: { post: InsightPost }) {
  const postImage = PlaceHolderImages.find((img) => img.id === post.imageId);
  return (
    <Link href={`/insights/${post.slug}`} className="group block">
      <Card className="overflow-hidden h-full flex flex-col bg-card/50">
        {postImage && (
          <div className="overflow-hidden">
            <Image
              src={postImage.imageUrl}
              alt={postImage.description}
              width={600}
              height={400}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={postImage.imageHint}
            />
          </div>
        )}
        <CardHeader>
          <CardTitle className="font-headline text-lg group-hover:text-primary">{post.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-muted-foreground text-sm">{post.description}</p>
        </CardContent>
      </Card>
    </Link>
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
            Master the Markets with a Professional Edge
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
            <h2 className="text-3xl font-bold font-headline sm:text-4xl">Markets I Trade &amp; Teach</h2>
            <p className="mt-4 text-muted-foreground">
              My expertise spans across a diverse range of asset classes, each with its unique characteristics and opportunities.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {markets.map((market) => (
              <MarketCard key={market.name} market={market} />
            ))}
          </div>
        </div>
      </section>

      {/* Market Insights Preview */}
      <section className="py-20 md:py-28 bg-card/20">
        <div className="container">
          <div className="flex justify-between items-center mb-12">
             <div className="max-w-2xl">
              <h2 className="text-3xl font-bold font-headline sm:text-4xl">Latest Market Insights</h2>
              <p className="mt-4 text-muted-foreground">
                Deep dives into trading concepts, strategies, and psychology.
              </p>
            </div>
            <Button asChild variant="link" className="hidden md:flex">
              <Link href="/insights">View All <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {insights.slice(0, 3).map((post) => (
              <InsightCard key={post.slug} post={post} />
            ))}
          </div>
           <div className="mt-12 text-center md:hidden">
              <Button asChild variant="outline">
                <Link href="/insights">View All Insights</Link>
              </Button>
            </div>
        </div>
      </section>
    </div>
  );
}
