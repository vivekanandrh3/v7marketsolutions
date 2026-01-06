import { CompoundingCalculator } from './compounding-calculator';

export default function CompoundingPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight font-headline sm:text-5xl">The Power of Compounding</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Often called the "eighth wonder of the world," consistent compounding is a cornerstone of long-term wealth generation. Explore how small, consistent gains can lead to exponential growth over time.
        </p>
      </div>
      <CompoundingCalculator />
    </div>
  );
}
