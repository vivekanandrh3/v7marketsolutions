import {
  Landmark,
  CandlestickChart,
  TrendingUp,
  Briefcase,
  Layers,
  Bitcoin,
  type LucideIcon,
} from 'lucide-react';

export type Market = {
  name: string;
  description: string;
  icon: LucideIcon;
  imageId: string;
};

export const markets: Market[] = [
  {
    name: 'Forex',
    description: 'Trade the world\'s largest financial market, with opportunities in major, minor, and exotic currency pairs.',
    icon: CandlestickChart,
    imageId: 'forex-market',
  },
  {
    name: 'Commodities',
    description: 'Speculate on raw materials like Gold, Silver, and Natural Gas, driven by global supply and demand.',
    icon: Layers,
    imageId: 'commodities-market',
  },
  {
    name: 'Indices',
    description: 'Gain exposure to a whole economy or sector by trading baskets of top-performing stocks.',
    icon: TrendingUp,
    imageId: 'indices-market',
  },
  {
    name: 'Stocks',
    description: 'Invest in individual companies and participate in their growth story. Focus on price action and fundamentals.',
    icon: Briefcase,
    imageId: 'stocks-market',
  },
  {
    name: 'Futures & Options',
    description: 'Utilize derivatives to manage risk or speculate on future price movements with leverage.',
    icon: Landmark,
    imageId: 'stocks-market', // Re-using an image
  },
  {
    name: 'Crypto',
    description: 'Explore the volatile and innovative world of digital currencies like Bitcoin and Ethereum.',
    icon: Bitcoin,
    imageId: 'crypto-market',
  },
];

export type InsightPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  imageId: string;
  content: string;
};

export const insights: InsightPost[] = [
  {
    slug: 'understanding-head-and-shoulders',
    title: 'Mastering the Head &amp; Shoulders Pattern',
    description: 'A deep dive into one of the most reliable trend reversal patterns in technical analysis.',
    date: '2024-07-15',
    imageId: 'head-and-shoulders',
    content: `
      &lt;h2 class="text-2xl font-headline font-bold mb-4"&gt;Introduction to the Pattern&lt;/h2&gt;
      &lt;p class="mb-4"&gt;The Head and Shoulders pattern is a classic chart formation that predicts a bullish-to-bearish trend reversal. It's one of the most reliable patterns and appears across all markets and timeframes. The pattern contains three peaks, with the outer two (the shoulders) being at a similar height and the central peak (the head) being the highest.&lt;/p&gt;
      &lt;h2 class="text-2xl font-headline font-bold mt-6 mb-4"&gt;The "Neckline"&lt;/h2&gt;
      &lt;p&gt;The line connecting the lows of the two troughs between the three peaks is called the "neckline." A break below this neckline with significant volume is the key confirmation of the pattern, signaling that the prior uptrend has ended and a new downtrend is likely beginning.&lt;/p&gt;
    `,
  },
  {
    slug: 'support-and-resistance-basics',
    title: 'The Foundation: Support &amp; Resistance',
    description: 'Learn how to identify key levels where buying and selling pressure historically meet.',
    date: '2024-07-10',
    imageId: 'support-resistance',
    content: `
      &lt;h2 class="text-2xl font-headline font-bold mb-4"&gt;What is Support?&lt;/h2&gt;
      &lt;p class="mb-4"&gt;Support is a price level where a downtrend can be expected to pause due to a concentration of demand or buying interest. As the price of an asset drops, demand for the shares increases, thus forming the support line.&lt;/p&gt;
      &lt;h2 class="text-2xl font-headline font-bold mt-6 mb-4"&gt;What is Resistance?&lt;/h2&gt;
      &lt;p&gt;Resistance is the opposite of support. It is a price level where an uptrend can be expected to pause temporarily, due to a concentration of supply or selling interest. As the price of an asset rises, sellers become more inclined to sell, thus forming the resistance line.&lt;/p&gt;
    `,
  },
  {
    slug: 'break-of-structure-explained',
    title: 'Trading with Trend: The Break of Structure (BOS)',
    description: 'Understand how to confirm a trend\'s continuation or reversal by identifying a Break of Structure.',
    date: '2024-07-05',
    imageId: 'break-of-structure',
    content: `
      &lt;h2 class="text-2xl font-headline font-bold mb-4"&gt;Identifying Market Structure&lt;/h2&gt;
      &lt;p class="mb-4"&gt;In an uptrend, the market makes Higher Highs (HH) and Higher Lows (HL). In a downtrend, it makes Lower Lows (LL) and Lower Highs (LH). This sequence of peaks and troughs defines the current market structure.&lt;/p&gt;
      &lt;h2 class="text-2xl font-headline font-bold mt-6 mb-4"&gt;What is a Break of Structure?&lt;/h2&gt;
      &lt;p&gt;A Break of Structure (BOS) occurs when the price breaks through a previous structure point. In an uptrend, a BOS happens when price creates a new Higher High above the previous one. This confirms the continuation of the uptrend. A reversal is signaled when, for example, an uptrend fails to make a new Higher High and instead breaks below the last Higher Low.&lt;/p&gt;
    `,
  },
];

export type Resource = {
  title: string;
  description: string;
  imageId: string;
  fileUrl: string; // Placeholder for a download link
};

export const resources: Resource[] = [
  {
    title: 'Beginner\'s Guide to Price Action',
    description: 'A comprehensive PDF guide covering the fundamentals of reading candlestick charts and price patterns.',
    imageId: 'resource-guide',
    fileUrl: '#',
  },
  {
    title: 'Risk Management Checklist',
    description: 'A printable checklist to ensure you follow your risk management rules on every single trade.',
    imageId: 'resource-guide',
    fileUrl: '#',
  },
  {
    title: 'Trading Psychology Journal Template',
    description: 'A template to help you track your emotions, identify biases, and improve your mental game.',
    imageId: 'resource-guide',
    fileUrl: '#',
  }
];
