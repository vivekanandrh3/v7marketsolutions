
import { notFound } from 'next/navigation';
import { LessonChart } from '@/components/lesson-chart';
import examples from '@/lib/lesson-charts.json';
import Link from 'next/link';
import { insights } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

export async function generateStaticParams() {
  return insights.map((post) => ({
    slug: post.slug,
  }));
}

export default async function InsightPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const {slug} = await params;
  const post = insights.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const example = examples[slug as keyof typeof examples];
  const related = insights.find(item => item.category === post.category && item.slug !== slug);

  return (
    <div>
      <div className="container max-w-4xl mx-auto py-16 md:py-24">
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/insights"><ArrowLeft className="mr-2 h-4 w-4" />Back to Insights</Link>
        </Button>

        <article>
          <header className="mb-8">
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <Separator orientation="vertical" className="h-4" />
              <Badge variant="secondary">{post.category}</Badge>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight font-headline sm:text-4xl md:text-5xl">{post.title}</h1>
            <p className="mt-4 text-lg text-muted-foreground">{post.description}</p>
          </header>
          
          <LessonChart slug={slug} />

          <div
            className="prose prose-lg dark:prose-invert max-w-none space-y-6 text-foreground/90 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <div className="mt-8 border-t pt-5 flex flex-col gap-3">
            <a className="text-primary underline" href={example.url}>Source · {example.label}</a>
            {related && <Link className="underline" href={'/insights/'+related.slug}>Related lesson · {related.title}</Link>}
            <Link className="underline" href="/learning-modules">Return to the learning ladder</Link>
          </div>
        </article>
      </div>
    </div>
  );
}
