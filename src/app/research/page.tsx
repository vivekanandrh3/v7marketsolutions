import { ResearchGenerator } from './research-client';

export default function ResearchPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight font-headline sm:text-5xl">Research &amp; Market Thoughts</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Use our AI tool to generate educational commentary on various market topics.
        </p>
      </div>
      <ResearchGenerator />
    </div>
  );
}
