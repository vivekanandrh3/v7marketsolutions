import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const aboutImage = PlaceHolderImages.find((p) => p.id === 'about-me');

const philosophyPoints = [
  "Discipline over Emotion: Trading is a mental game. A structured, rule-based approach is non-negotiable.",
  "Process, Not Profits: Focus on flawless execution of your strategy. The profits will follow as a byproduct.",
  "Risk Management is Job #1: Capital preservation is the foundation upon which all trading success is built.",
  "Continuous Learning: The market is a dynamic teacher. Stay humble, stay curious, and never stop learning.",
  "Simplicity is Key: Complex strategies don't equal better results. I focus on clean price action and market structure."
];

export default function AboutPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight font-headline sm:text-5xl">My Journey &amp; Philosophy</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          From a curious beginner to a funded proprietary trader.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
        <div className="lg:col-span-3 space-y-6 text-foreground/90">
          <h2 className="text-2xl font-bold font-headline">The Path to Consistency</h2>
          <p>
            My journey into the world of trading wasn't a straight line to success. It was a path forged through years of relentless study, countless hours of screen time, and the painful but necessary lessons that only the market can teach. I started like many, drawn by the allure of financial freedom, but soon discovered that true success in this field is built on a foundation of discipline, process, and an unwavering respect for risk.
          </p>
          <p>
            After navigating the retail trading landscape, I set my sights on the proprietary trading world. Becoming a funded prop firm trader was a pivotal moment. It validated my strategies and, more importantly, reinforced the institutional-level discipline required to manage significant capital. This experience taught me to think in terms of probabilities, to manage risk like a business, and to separate my ego from my trading decisions.
          </p>
          <h2 className="text-2xl font-bold font-headline mt-8">Why I Started AlphaEdge Academy</h2>
          <p>
            I created AlphaEdge Academy to demystify the markets for aspiring traders. There's a sea of misinformation online, often promising easy riches. My goal is to cut through that noise and provide a clear, professional, and realistic perspective on what it takes to succeed. This platform is my way of sharing the hard-won lessons from my journey, focusing on the institutional concepts, psychological fortitude, and robust risk management that form the bedrock of my own trading. This is not about signals or hot tips; it's about empowering you with a durable skillset to navigate the markets on your own terms.
          </p>
        </div>
        
        <div className="lg:col-span-2">
           <Card className="bg-card/50">
            <CardContent className="p-6">
              {aboutImage && (
                <div className="aspect-square relative mb-6">
                  <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    fill
                    className="rounded-md object-cover"
                    data-ai-hint={aboutImage.imageHint}
                  />
                </div>
              )}
              <h3 className="text-xl font-bold font-headline mb-4">Core Philosophy</h3>
              <ul className="space-y-3">
                {philosophyPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
