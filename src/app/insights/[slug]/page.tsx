
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { insights } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

export async function generateStaticParams() {
  return insights.map((post) => ({
    slug: post.slug,
  }));
}

export default function InsightPostPage({ params }: { params: { slug: string } }) {
  const post = insights.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const postImage = PlaceHolderImages.find((img) => img.id === post.imageId);

  return (
    <div className="bg-blue-wash">
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
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight font-headline sm:text-4xl md:text-5xl">{post.title}</h1>
            <p className="mt-4 text-lg text-muted-foreground">{post.description}</p>
          </header>
          
          {postImage && (
            <div className="relative aspect-video w-full mb-8 rounded-lg overflow-hidden border">
              <Image
                src={postImage.imageUrl}
                alt={postImage.description}
                fill
                className="object-cover"
                data-ai-hint={postImage.imageHint}
              />
            </div>
          )}

          <div
            className="space-y-6 text-lg text-foreground/90 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </div>
  );
}
