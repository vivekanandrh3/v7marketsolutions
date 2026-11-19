import { pageMeta, pages } from '@/lib/site-meta';
export const metadata = pageMeta('/learning-modules', pages['/learning-modules'][0], pages['/learning-modules'][1]);
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { insights } from '@/lib/data';
const stages = [
  {
    "title": "Financial Market Foundations",
    "objective": "Start with the unit you hold. An owner, a lender and a fund investor have different claims on cash flows.",
    "exercise": "Reconcile a share purchase, sale and dividend. Then show how reinvestment changes the next period’s starting balance.",
    "lessons": [
      "what-are-stocks",
      "bond-markets-explained",
      "power-of-compounding"
    ]
  },
  {
    "title": "Price Action, Risk & Market Mechanics",
    "objective": "Read a candle in its surrounding range. Separate an observed move from an explanation and translate price distance into modelled loss.",
    "exercise": "Mark a range on a fictional chart, write two competing interpretations and size one paper scenario including costs.",
    "lessons": [
      "liquidity-sweeps-and-invalidation",
      "risk-and-position-sizing",
      "market-volatility-explained"
    ]
  },
  {
    "title": "Global Markets, Derivatives & Macro Context",
    "objective": "Connect a currency quote, a contract multiplier and an economic surprise. Ask which units and expectations changed.",
    "exercise": "Calculate the rupee cost of a US$100 invoice at two rates. Then compare a fictional ten-unit futures contract with ten units of cash exposure and record what margin and expiry change.",
    "lessons": [
      "understanding-forex-markets",
      "economic-events-rates-and-currencies",
      "what-bond-yields-tell-us",
      "crude-oil-and-global-tensions"
    ]
  },
  {
    "title": "Advanced Analysis, VWAP, Order Flow & Trading Process",
    "objective": "Compare the distribution of executed volume across prices with the sequence of signed volume through time. Document the venue and anchor.",
    "exercise": "Rebuild session VWAP and two intervals of CVD by hand. Hide subsequent prices, record a hypothesis and its invalidation, and score your reasoning after the reveal.",
    "lessons": [
      "vwap-intraday-context",
      "order-flow-delta-and-feed-limits",
      "market-psychology-behavioral-finance"
    ]
  }
];
const core = new Set(stages.flatMap(s=>s.lessons));
export default function LearningModulesPage() {
  return <div className="container max-w-4xl py-16 md:py-24"><header className="reading-intro"><h1>Financial Trading Ladder</h1>
    <p>I use these four stages as a free study guide. Start with a question you cannot yet explain. In a paid consultation-led program, we agree separately on the topics and pace that fit your learning gaps.</p></header>
    <Accordion type="single" collapsible defaultValue="stage-0">{stages.map((s,i)=><AccordionItem value={'stage-'+i} key={s.title}>
      <AccordionTrigger className="text-left py-5 text-xl">Step {i+1} · {s.title}</AccordionTrigger><AccordionContent className="space-y-4 text-base">
      <p>{s.objective}</p><ol className="list-decimal pl-5 space-y-2">{s.lessons.map(slug=><li key={slug}><Link className="text-primary underline" href={'/insights/'+slug}>{insights.find(p=>p.slug===slug)?.title}</Link></li>)}</ol><p><strong>Completion exercise</strong> · {s.exercise}</p>
    </AccordionContent></AccordionItem>)}</Accordion>
    <section className="reading-strip"><h2>Optional further reading</h2><p>Choose these when they answer a question you have. You can continue with intraday analysis independently of these topics.</p><ul className="list-disc pl-5 space-y-2">{insights.filter(p=>!core.has(p.slug)).map(p=><li key={p.slug}><Link href={'/insights/'+p.slug}>{p.title}</Link></li>)}</ul></section>
    <section className="reading-strip"><h2>Plan a learning pathway with me</h2><p>Bring one exercise you found difficult. We can use it to decide where personal tuition would help.</p><Link href="/contact">Ask about a consultation</Link></section>
  </div>;
}
