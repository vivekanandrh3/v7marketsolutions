
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

const modules = [
  {
    value: "module-1",
    title: "Module 1: Foundations – Stocks, IPOs & Bond Markets",
    description: "This module introduces the core building blocks of financial markets and long-term investing.",
    topics: [
      "What are stocks and shares (Indian & global markets)",
      "How stock markets function",
      "Introduction to IPOs and how to evaluate them",
      "Mutual funds and ETFs basics",
      "Bond markets and government securities",
      "Corporate actions (dividends, splits, rights issues)",
      "How to find and study listed companies",
      "Understanding risk and return",
      "Basics of compounding and long-term growth",
      "Market terminology and concepts",
    ],
    targetAudience: "Beginners and long-term investors seeking clarity on core instruments.",
  },
  {
    value: "module-2",
    title: "Module 2: Intermediate – Futures & Options",
    description: "This module introduces derivative markets and the mechanics behind leverage and hedging.",
    topics: [
      "What are futures contracts",
      "What are options contracts",
      "Calls & puts explained simply",
      "Risk and reward in derivatives",
      "Margin and leverage concepts",
      "Hedging vs speculation",
      "Market structure and expiry cycles",
      "Understanding volatility",
      "Position sizing and risk control",
      "Trading psychology and discipline",
    ],
    targetAudience: "Learners who understand basic markets and want to explore derivatives responsibly.",
  },
  {
    value: "module-3",
    title: "Module 3: Advanced – CFDs, Forex & Crypto",
    description: "This module focuses on global and high-volatility markets and their unique risks.",
    topics: [
      "What are CFDs",
      "Forex market structure and currency pairs",
      "Global trading sessions",
      "Macroeconomic influences (interest rates, inflation, central banks)",
      "Cryptocurrency basics",
      "Blockchain concepts",
      "Risk management in volatile markets",
      "Liquidity and volatility differences",
      "Regulatory considerations",
      "Capital preservation principles",
    ],
    targetAudience: "Learners seeking exposure to global and alternative markets with a strong risk framework.",
  },
    {
    value: "module-4",
    title: "Module 4: Specialized – Polymarkets, Taxation & Market Systems",
    description: "This module covers emerging markets, regulatory understanding, and real-world financial responsibility.",
    topics: [
      "Introduction to Polymarkets and prediction markets",
      "Decision-making frameworks",
      "Understanding probabilities and outcomes",
      "Crypto handling and custody",
      "Taxation basics (stocks, derivatives, crypto)",
      "Record keeping and compliance",
      "Ethical trading and market responsibility",
      "Long-term financial discipline",
      "Market behavior and psychology",
    ],
    targetAudience: "Advanced learners interested in modern financial instruments and regulatory awareness.",
  },
]

export default function LearningModulesPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight font-headline sm:text-5xl">Learning Modules</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          A step-by-step educational framework for learning financial markets, designed for informed decision-making, risk management, and long-term thinking.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="w-full" defaultValue="module-1">
          {modules.map((module) => (
            <AccordionItem key={module.value} value={module.value}>
              <AccordionTrigger className="text-left hover:no-underline">
                <div className="text-xl font-headline text-primary">{module.title}</div>
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <p className="italic text-muted-foreground mb-6">{module.description}</p>
                
                <h3 className="font-semibold text-lg mb-3 text-foreground/90">Topics Included:</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mb-6">
                  {module.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">{topic}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4">
                  <h3 className="font-semibold text-lg mb-2 text-foreground/90">Target Audience:</h3>
                  <p className="text-muted-foreground">{module.targetAudience}</p>
                </div>

              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

       <div className="max-w-4xl mx-auto mt-20">
         <Card className="bg-card/50 border-primary/20 shadow-lg shadow-primary/10">
            <CardHeader className="text-center">
              <CardTitle className="font-headline text-2xl">Learn More About These Modules</CardTitle>
              <CardDescription className="max-w-xl mx-auto">
                These learning modules are introduced selectively and are focused on structured education rather than mass enrollment. If you would like to know more about this learning path or future educational initiatives, please reach out through the contact page.
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
