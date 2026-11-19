import { CompoundingCalculator } from './compounding-calculator';

export default function CompoundingPage() {
  return (
    <div className="container py-16 md:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight font-headline sm:text-5xl">The Power of Compounding</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          I use this calculator to explore assumptions. Try a flat or negative month alongside a positive one. The figures are illustrations, and actual returns vary.
        </p>
      </div>
      <CompoundingCalculator />
    </div>
  );
}
