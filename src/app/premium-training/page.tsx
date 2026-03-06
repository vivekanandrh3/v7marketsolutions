
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Zap, Target, TrendingUp, Globe, MessageSquare, Calendar, Star } from "lucide-react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";

const programs: {
  title: string;
  icon: LucideIcon;
  description: string;
  price: string;
  topics: string[];
}[] = [
  {
    title: "Market Foundations & Money Management",
    icon: Target,
    description: "Build a rock-solid trading foundation with core market principles and disciplined capital protection.",
    price: "₹5,999",
    topics: [
      "Demand/Supply Dynamics",
      "Core Price Action",
      "Professional Money Management",
      "High-Potential Stock Selection",
      "Core Market Analysis",
      "Trader's Psychology",
      "Key Economic Indicators",
    ],
  },
  {
    title: "Precision Trading: Pattern & Candlestick Mastery",
    icon: Zap,
    description: "Master the art of reading charts with advanced pattern recognition and candlestick analysis for precise entries.",
    price: "₹11,999",
    topics: [
      "Advanced Candlestick Indicators",
      "Dynamic Support/Resistance",
      "Mastering Engulfing Patterns",
      "High-Probability Divergence",
      "Multi-Timeframe Analysis",
    ],
  },
  {
    title: "Futures & Options Strategy: Hedging & Timing",
    icon: TrendingUp,
    description: "Learn to leverage derivatives for hedging, income generation, and strategic market timing in all conditions.",
    price: "₹19,999",
    topics: [
      "When to choose F&O",
      "Trend vs. Sideways Markets",
      "Portfolio Hedging Techniques",
      "Trading Volatility Spikes",
      "Decoding Option Greeks (Delta, Gamma, Theta)",
    ],
  },
  {
    title: "Elite Global Trading: CFDs, Forex & Elliott Mastery",
    icon: Globe,
    description: "Trade global markets like a professional with institutional strategies, advanced wave theory, and a prop firm mindset.",
    price: "₹29,999",
    topics: [
      "Advanced CFD & Forex Strategy",
      "Proprietary Firm Insights",
      "Practical Elliott Wave Theory",
      "Mastering Trading Psychology",
      "Tracking Institutional Order Flow",
    ],
  },
];


export default function PremiumTrainingPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight font-headline sm:text-5xl">Masterclass & Professional Trading Programs</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Structured learning paths designed to elevate your trading from foundational knowledge to professional execution.
        </p>
      </div>

      {/* Free Masterclass Section */}
      <section className="mb-20">
        <Card className="bg-card/50 border-primary/20 shadow-lg shadow-primary/10">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-muted">
                <Star className="w-8 h-8 text-primary" />
              </div>
            </div>
            <CardTitle className="font-headline text-3xl">Free Masterclass: The Trader's Mindset</CardTitle>
            <CardDescription className="max-w-2xl mx-auto text-base">
              A free roadmap designed to help you build a professional trader's mindset. This session covers essential pillars like advanced risk management, aligning with market structure, and building unshakeable trading confidence.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Button size="lg" className="font-bold">
              Join Free Masterclass
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Premium Programs Section */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program) => (
            <Card key={program.title} className="flex flex-col bg-card/50 transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10">
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-3 rounded-full bg-muted">
                    <program.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-xl">{program.title}</CardTitle>
                </div>
                <CardDescription>{program.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <h4 className="font-semibold mb-3 text-foreground/90">Key Topics:</h4>
                <ul className="space-y-2">
                  {program.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{topic}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-4 mt-4">
                <div className="text-3xl font-bold font-headline">{program.price}</div>
                <Button asChild className="w-full font-bold">
                  <Link href="/contact">Enroll Now</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
      
       {/* Consultation Section */}
       <section className="mt-20">
        <Card className="bg-card/50">
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-3xl">Consultation & WhatsApp Connect</CardTitle>
            <CardDescription className="max-w-2xl mx-auto">
              For personalized guidance, portfolio review, or specific trading questions, book a one-on-one consultation. You can also connect directly on WhatsApp for quick inquiries.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button size="lg" variant="outline">
              <Calendar className="mr-2" />
              Book Consultation
            </Button>
            <Button asChild size="lg">
              <Link href="https://wa.me/918317324956" target="_blank" rel="noopener noreferrer">
                <MessageSquare className="mr-2" />
                Chat on WhatsApp
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
