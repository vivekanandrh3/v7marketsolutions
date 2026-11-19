import Link from 'next/link';
import { CourseEnquiry } from '@/components/course-enquiry';
import { pathways } from '@/lib/pathways';

export default function PremiumTrainingPage() {
  return <div className="container py-16 md:py-24">
    <header className="reading-intro"><h1>Four starting points for personal tuition</h1>
      <p>I start by asking what you can already explain and where the reasoning breaks down. We agree on a program, the subjects that matter to you and their sequence before enrolment. The examples below illustrate possible lessons.</p></header>
    <div className="grid gap-6 md:grid-cols-2">{pathways.map(path=><article id={path.id} key={path.id} className="pathway-panel">
      <h2>{path.title}</h2><p>{path.level}</p><h3>A question we might work through</h3><p>{path.example}</p>
      <h3>Possible subjects</h3><ul className="list-disc pl-5 space-y-1">{path.topics.map(topic=><li key={topic}>{topic}</li>)}</ul>
      {path.id==='global' && <p>Spot-FX tick counts reflect feed activity. Exchange volume counts traded contracts on that venue. A retail CFD feed cannot identify all institutional orders. For Indian residents, permitted transactions and authorised venues depend on applicable rules. <a href="https://www.rbi.org.in/Scripts/FAQDisplay.aspx?Id=146">RBI forex guidance</a></p>}
      <div className="mt-auto pt-6 space-y-4"><CourseEnquiry course={path.id} message={path.message}/></div>
    </article>)}</div>
    <section className="reading-strip"><h2>Free masterclass · The trader’s mindset</h2><p>Ask me about availability and the topic before making plans. One question I like to explore is whether an exit followed the original reasoning, even if the paper trade made money.</p><Link href="/contact">Ask about the free masterclass</Link></section>
    <section className="reading-strip"><h2>Discuss your learning goals</h2><p>Tell me one concept you understand and one you would like to practise. You can leave holdings and account details out of the conversation.</p><a target="_blank" rel="noopener noreferrer" href="https://wa.me/918317324956?text=I'd%20like%20to%20book%20a%20one-on-one%20consultation.">Request a consultation</a></section>
  </div>;
}
