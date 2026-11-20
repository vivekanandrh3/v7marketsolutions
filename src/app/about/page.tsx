import { pageMeta, pages } from '@/lib/site-meta';
export const metadata = pageMeta('/about', pages['/about'][0], pages['/about'][1]);
export default function AboutPage() {
  return <article className="container max-w-3xl py-16 md:py-24 space-y-6 leading-relaxed">
    <h1 className="font-headline text-4xl font-bold">Why I teach at V7 Market Solutions</h1>
    <p>I use charts, examples and a trading journal to make market decisions easier to explain. A chart makes hindsight look simple. Cover the next few candles and the question becomes more interesting. What did you actually know at the time?</p>
    <h2 className="font-headline text-2xl">How I approach a lesson</h2>
    <p>I start with a question you can test. For example, mark where a price range ends, record what would invalidate your reading, then reveal the next bars. Two people can disagree about the setup and still compare their reasoning.</p>
    <h2 className="font-headline text-2xl">What a consultation covers</h2>
    <p>I ask about your experience, the concepts you find difficult and the time you can spend practising. We agree which gap to tackle first and choose examples together. I can change the sequence when an exercise reveals a missing prerequisite. You can discuss a fictional trade without sharing a portfolio or brokerage account.</p>
    <a href="/learning-modules" className="inline-block underline text-primary">Explore the Financial Trading Ladder</a>
  </article>;
}
