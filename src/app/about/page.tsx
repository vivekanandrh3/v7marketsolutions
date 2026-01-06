'use client';

import Image from 'next/image';
import { useState, useRef } from 'react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';

const defaultAboutImage = PlaceHolderImages.find((p) => p.id === 'about-me');

const philosophyPoints = [
  "Discipline over Emotion: Trading is a mental game. A structured, rule-based approach is non-negotiable.",
  "Process, Not Profits: Focus on flawless execution of your strategy. The profits will follow as a byproduct.",
  "Risk Management is Job #1: Capital preservation is the foundation upon which all trading success is built.",
  "Continuous Learning: The market is a dynamic teacher. Stay humble, stay curious, and never stop learning.",
  "Simplicity is Key: Complex strategies don't equal better results. I focus on clean price action and market structure."
];

export default function AboutPage() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const imageUrl = uploadedImage || defaultAboutImage?.imageUrl;

  return (
    <div className="container py-16 md:py-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight font-headline sm:text-5xl">My Journey &amp; Philosophy</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          From a curious beginner to a funded proprietary trader.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
        <div className="lg:col-span-3 space-y-6 text-foreground/90">
          <h2 className="text-2xl font-bold font-headline">The Path to Consistency</h2>
          <p>
            My journey into the world of trading wasn't a straight line to success. It was a path forged through years of relentless study, countless hours of screen time, and the painful but necessary lessons that only the market can teach. I started like many, drawn by the allure of financial freedom, but soon discovered that true success in this field is built on a foundation of discipline, process, and an unwavering respect for risk.
          </p>
          <p>
            After navigating the retail trading landscape, I set my sights on the proprietary trading world. Becoming a funded prop firm trader was a pivotal moment. It validated my strategies and, more importantly, reinforced the institutional-level discipline required to manage significant capital. This experience taught me to think in terms of probabilities, to manage risk like a business, and to separate my ego from my trading decisions.
          </p>
          <h2 className="text-2xl font-bold font-headline mt-8">Why I Started V7 MARKET SOLUTIONS</h2>
          <p>
            I created V7 MARKET SOLUTIONS to demystify the markets for aspiring traders. There's a sea of misinformation online, often promising easy riches. My goal is to cut through that noise and provide a clear, professional, and realistic perspective on what it takes to succeed. This platform is my way of sharing the hard-won lessons from my journey, focusing on the institutional concepts, psychological fortitude, and robust risk management that form the bedrock of my own trading. This is not about signals or hot tips; it's about empowering you with a durable skillset to navigate the markets on your own terms.
          </p>
        </div>
        
        <div className="lg:col-span-2">
           <Card className="bg-card/50">
            <CardContent className="p-6">
              {imageUrl && (
                <div className="aspect-square relative mb-6">
                  <Image
                    src={imageUrl}
                    alt={defaultAboutImage?.description || 'Uploaded profile picture'}
                    fill
                    className="rounded-md object-cover"
                    data-ai-hint={defaultAboutImage?.imageHint}
                  />
                </div>
              )}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                accept="image/*"
                className="hidden"
                id="image-upload"
              />
              <Button onClick={() => fileInputRef.current?.click()} className="w-full mb-6">
                <Upload className="mr-2 h-4 w-4" />
                Upload Your Image
              </Button>
              <h3 className="text-xl font-bold font-headline mb-4">Core Philosophy</h3>
              <ul className="space-y-3">
                {philosophyPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
