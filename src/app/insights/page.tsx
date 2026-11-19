import { insights, type InsightPost } from '@/lib/data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { LessonChart } from '@/components/lesson-chart';
import Link from 'next/link';
import { Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

function InsightPostCard({ post }: { post: InsightPost }) {

  return (
    <Link href={`/insights/${post.slug}`} className="group block">
      <Card className="flex flex-col h-full overflow-hidden transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/20 bg-card/50">
        <div className="px-4 pt-4"><LessonChart slug={post.slug} /></div>
        <CardHeader>
          <Badge variant="secondary" className="w-fit mb-2">{post.category}</Badge>
          <CardTitle className="font-headline text-xl group-hover:text-primary">{post.title}</CardTitle>
          <CardDescription className="pt-1">{post.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow"></CardContent>
        <CardFooter>
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="mr-2 h-4 w-4" />
            <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}

export default function InsightsPage() {
  const insightsByCategory = insights.reduce((acc, post) => {
    const category = post.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(post);
    return acc;
  }, {} as Record<InsightPost['category'], InsightPost[]>);

  const categoryOrder: InsightPost['category'][] = ['Foundations', 'Market Mechanics', 'Global Markets', 'Advanced Systems'];

  const categoryHeadings: Record<InsightPost['category'], string> = {
    'Foundations': 'Foundations of Markets',
    'Market Mechanics': 'Market Mechanics',
    'Global Markets': 'Global Markets & Macro Forces',
    'Advanced Systems': 'Advanced Market Systems'
  };

  return (
    <div>
      <div className="container py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight font-headline sm:text-5xl">Research &amp; Insights</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            I pair each concept with a worked example, a short exercise and a source you can follow.
          </p>
        </div>

        <div className="space-y-20">
          {categoryOrder.map((category) => (
            insightsByCategory[category] && (
              <section key={category}>
                <h2 className="text-3xl font-bold font-headline mb-8 border-b-2 border-primary/20 pb-4">{categoryHeadings[category]}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {insightsByCategory[category]
                    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                    .map((post) => (
                      <InsightPostCard key={post.slug} post={post} />
                  ))}
                </div>
              </section>
            )
          ))}
        </div>
      </div>
    </div>
  );
}
