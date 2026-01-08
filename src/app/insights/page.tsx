
import { insights, type InsightPost } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

function InsightPostCard({ post }: { post: InsightPost }) {
  const postImage = PlaceHolderImages.find((img) => img.id === post.imageId);
  return (
    <Link href={`/insights/${post.slug}`} className="group block">
      <Card className="flex flex-col h-full overflow-hidden transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/20 bg-card/50">
        {postImage && (
          <div className="overflow-hidden">
            <Image
              src={postImage.imageUrl}
              alt={postImage.description}
              width={800}
              height={500}
              className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={postImage.imageHint}
            />
          </div>
        )}
        <CardHeader>
          <div className="flex flex-wrap gap-2 mb-2">
            {post.tags.map(tag => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
          <CardTitle className="font-headline text-xl group-hover:text-primary">{post.title}</CardTitle>
          <CardDescription>{post.description}</CardDescription>
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
  return (
    <div className="bg-blue-wash">
      <div className="container py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight font-headline sm:text-5xl">Research &amp; Insights</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Deep dives into market context, macro trends, and event breakdowns. All analysis is presented in a neutral, educational tone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((post) => (
            <InsightPostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
