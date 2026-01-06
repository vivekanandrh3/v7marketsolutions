import Image from 'next/image';
import Link from 'next/link';
import { resources, type Resource } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

function ResourceCard({ resource }: { resource: Resource }) {
  const resourceImage = PlaceHolderImages.find((img) => img.id === resource.imageId);

  return (
    <Card className="flex flex-col overflow-hidden bg-card/50">
      {resourceImage && (
        <div className="aspect-[4/5] relative">
          <Image
            src={resourceImage.imageUrl}
            alt={resourceImage.description}
            fill
            className="object-cover"
            data-ai-hint={resourceImage.imageHint}
          />
        </div>
      )}
      <div className="flex flex-col flex-grow p-6">
        <CardHeader className="p-0">
          <CardTitle className="font-headline text-xl">{resource.title}</CardTitle>
          <CardDescription className="pt-2">{resource.description}</CardDescription>
        </CardHeader>
        <CardContent className="p-0 flex-grow mt-4">
        </CardContent>
        <Button asChild className="mt-4 w-full">
          <Link href={resource.fileUrl}>
            <Download className="mr-2 h-4 w-4" />
            Download
          </Link>
        </Button>
      </div>
    </Card>
  );
}


export default function ResourcesPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight font-headline sm:text-5xl">Free Resources</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Downloadable guides, checklists, and templates to accelerate your learning journey.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {resources.map((resource) => (
          <ResourceCard key={resource.title} resource={resource} />
        ))}
      </div>
    </div>
  );
}
