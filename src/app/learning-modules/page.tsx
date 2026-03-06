
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Library, GitMerge, Globe, ShieldCheck } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import Link from "next/link"

const steps: {
  value: string;
  title: string;
  description: string;
  topics: string[];
  targetAudience: string;
  icon: LucideIcon;
}[] = [
  {
    value: "step-1",
    title: "Step 1: Foundations",
    icon: Library,
    description: "Build your base with the essential building blocks of financial markets.",
    topics: [
      "Stocks",
      "IPOs",
      "Mutual Funds",
      "ETFs",
      "Bonds",
      "Compounding",
      "Corporate Actions",
    ],
    targetAudience: "Beginners and long-term investors starting their journey.",
  },
  {
    value: "step-2",
    title: "Step 2: Market Mechanics",
    icon: GitMerge,
    description: "Understand the machinery of trading, from derivatives to discipline.",
    topics: [
      "Futures",
      "Options",
      "Risk management",
      "Position sizing",
      "Market psychology",
    ],
    targetAudience: "Traders looking to understand leverage, risk, and market psychology.",
  },
  {
    value: "step-3",
    title: "Step 3: Global Markets",
    icon: Globe,
    description: "Expand your scope to international and high-volatility asset classes.",
    topics: [
      "CFDs",
      "Forex",
      "Crypto",
      "Macroeconomics",
    ],
    targetAudience: "Investors ready to explore international and high-volatility markets.",
  },
    {
    value: "step-4",
    title: "Step 4: Advanced Market Systems",
    icon: ShieldCheck,
    description: "Engage with modern financial ecosystems, from prediction markets to compliance.",
    topics: [
      "Prediction markets (Polymarket)",
      "Crypto handling",
      "Taxation",
      "Market frameworks",
    ],
    targetAudience: "Advanced users focusing on modern financial ecosystems and compliance.",
  },
]

export default function LearningModulesPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight font-headline sm:text-5xl">Financial Trading Ladder</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          A structured, step-by-step guide to mastering the financial markets, from foundational concepts to advanced systems.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="w-full space-y-6" defaultValue="step-1">
          {steps.map((step) => (
            <AccordionItem 
              key={step.value} 
              value={step.value} 
              className="border-b-0 rounded-lg bg-card/50 shadow-sm transition-all data-[state=open]:shadow-xl data-[state=open]:shadow-primary/10"
            >
              <AccordionTrigger className="p-6 text-left hover:no-underline group">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-muted transition-colors group-hover:bg-primary/10 group-data-[state=open]:bg-primary/10">
                     <step.icon className="w-6 h-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <span className="text-xl font-headline text-primary">{step.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-6 pt-0">
                <p className="italic text-muted-foreground mb-6 pl-16">{step.description}</p>
                
                <div className="pl-16">
                  <h3 className="font-semibold text-lg mb-3 text-foreground/90">Topics Covered:</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mb-6">
                    {step.topics.map((topic) => (
                      <li key={topic} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <span className="text-muted-foreground font-semibold text-base">{topic}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4">
                    <h3 className="font-semibold text-lg mb-2 text-foreground/90">Target Audience:</h3>
                    <p className="text-muted-foreground font-bold italic">{step.targetAudience}</p>
                  </div>
                </div>

              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

       <div className="max-w-4xl mx-auto mt-20">
         <Card className="bg-card/50 border-primary/20 shadow-lg shadow-primary/10">
            <CardHeader className="text-center">
              <CardTitle className="font-headline text-2xl">Ready to Climb the Ladder?</CardTitle>
              <CardDescription className="max-w-xl mx-auto">
                These steps form the basis of our structured learning programs. If you're interested in a guided educational journey, please reach out to learn more.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
                <Button asChild size="lg">
                    <Link href="/contact">Contact V7 Market Solutions</Link>
                </Button>
            </CardContent>
         </Card>
       </div>

    </div>
  )
}
