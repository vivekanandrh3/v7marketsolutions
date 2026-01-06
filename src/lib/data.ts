import {
  Landmark,
  CandlestickChart,
  TrendingUp,
  Briefcase,
  Layers,
  Bitcoin,
  type LucideIcon,
  FileText,
  Copy,
  ReceiptText,
  Shield,
  Building,
  Handshake,
  FileStack,
  FolderKanban,
} from 'lucide-react';

export type Market = {
  name: string;
  description: string;
  icon: LucideIcon;
  imageId: string;
};

export const markets: Market[] = [
  {
    name: 'Stocks (Indian & Global)',
    description: 'Invest in individual companies, both domestic and international, participating in their growth stories.',
    icon: Briefcase,
    imageId: 'stocks-market',
  },
  {
    name: 'Options',
    description: 'Utilize derivatives to hedge positions, generate income, or speculate on price movements with defined risk.',
    icon: FileText,
    imageId: 'stocks-market',
  },
  {
    name: 'Futures',
    description: 'Engage in standardized contracts to buy or sell assets at a future date, for hedging or speculation.',
    icon: Copy,
    imageId: 'commodities-market',
  },
  {
    name: 'CFDs',
    description: 'Trade the difference in value of a financial product between the time the contract opens and closes.',
    icon: ReceiptText,
    imageId: 'forex-market',
  },
  {
    name: 'Mutual Funds',
    description: 'Diversify your portfolio by pooling money with other investors to invest in a collection of stocks and bonds.',
    icon: FolderKanban,
    imageId: 'indices-market',
  },
  {
    name: 'ETFs',
    description: 'Trade a basket of assets like stocks or bonds on an exchange, offering diversification and liquidity.',
    icon: FileStack,
    imageId: 'stocks-market',
  },
  {
    name: 'IPOs',
    description: 'Participate in the initial public offering of a company as it transitions from private to public ownership.',
    icon: Building,
    imageId: 'crypto-market',
  },
  {
    name: 'Government Securities',
    description: 'Invest in debt instruments issued by the government, considered to be low-risk investments.',
    icon: Shield,
    imageId: 'commodities-market',
  },
  {
    name: 'Bonds',
    description: 'Lend money to a corporation or government entity in exchange for periodic interest payments.',
    icon: Landmark,
    imageId: 'forex-market',
  },
  {
    name: 'Corporate Actions & Auctions',
    description: 'Understand and navigate events like stock splits, mergers, and auctions that can impact your investments.',
    icon: Handshake,
    imageId: 'indices-market',
  },
  {
    name: 'Forex',
    description: 'Trade the world\'s largest financial market, with opportunities in major, minor, and exotic currency pairs.',
    icon: CandlestickChart,
    imageId: 'forex-market',
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
  tags: string[];
};

export const insights: InsightPost[] = [
  {
    slug: 'fed-interest-rates-impact',
    title: 'How Fed Interest Rate Decisions Shape the Market',
    description: "An analysis of how the Federal Reserve's monetary policy influences asset prices and market sentiment.",
    date: '2024-07-20',
    imageId: 'fed-event',
    content: `
      <h2 class="text-2xl font-headline font-bold mb-4">The Fed's Dual Mandate</h2>
      <p class="mb-4">The Federal Reserve operates under a dual mandate: to promote maximum employment and stable prices. Its primary tool for achieving this is the federal funds rate, the target interest rate at which commercial banks borrow and lend their excess reserves to each other overnight. Changes to this rate ripple through the entire economy.</p>
      <h2 class="text-2xl font-headline font-bold mt-6 mb-4">Impact on Asset Valuation</h2>
      <p>When the Fed raises rates, borrowing becomes more expensive. This can cool down the economy, reduce corporate earnings, and make "risk-free" assets like government bonds more attractive. Conversely, when the Fed cuts rates, it stimulates the economy, potentially boosting corporate profits and making stocks more appealing than lower-yielding bonds. Understanding this relationship is key to interpreting market context.</p>
    `,
    tags: ['Fed', 'Macro', 'Monetary Policy'],
  },
  {
    slug: 'understanding-cpi-data',
    title: 'Decoding CPI: What Inflation Means for Your Trades',
    description: 'A breakdown of the Consumer Price Index (CPI) and its critical role as a market-moving economic indicator.',
    date: '2024-07-18',
    imageId: 'cpi-data',
    content: `
      <h2 class="text-2xl font-headline font-bold mb-4">What is CPI?</h2>
      <p class="mb-4">The Consumer Price Index (CPI) measures the average change over time in the prices paid by urban consumers for a market basket of consumer goods and services. It is the most widely used measure of inflation. A rising CPI indicates that it costs more to purchase the same goods and services, eroding purchasing power.</p>
      <h2 class="text-2xl font-headline font-bold mt-6 mb-4">Why Traders Watch CPI Closely</h2>
      <p>CPI data is a major input for the Fed's interest rate decisions. Higher-than-expected inflation may prompt the Fed to raise rates to cool the economy, which can be bearish for stocks. Lower-than-expected inflation might allow the Fed to be more accommodative (or even cut rates), which is often bullish. The market's reaction to CPI releases can be volatile, presenting both opportunities and risks.</p>
    `,
    tags: ['CPI', 'Inflation', 'Economics'],
  },
  {
    slug: 'rbi-policy-and-indian-markets',
    title: 'RBI Policy Meetings: A Guide for Indian Market Participants',
    description: 'Exploring how the Reserve Bank of India\'s policy announcements create ripples across Indian equities and bonds.',
    date: '2024-07-12',
    imageId: 'rbi-event',
    content: `
      <h2 class="text-2xl font-headline font-bold mb-4">The Role of the RBI</h2>
      <p class="mb-4">Similar to the Fed, the Reserve Bank of India (RBI) is the central bank of India, responsible for the country's monetary policy. Its key objective is to maintain price stability while keeping in mind the objective of growth. The RBI's repo rate is its key policy rate, analogous to the Fed funds rate.</p>
      <h2 class="text-2xl font-headline font-bold mt-6 mb-4">Event Breakdown: What to Watch For</h2>
      <p>During RBI policy announcements, traders and investors scrutinize the central bank's decision on the repo rate, its future guidance (the tone of the statement), and its assessment of inflation and economic growth. A "hawkish" stance (inclined to raise rates) can be negative for rate-sensitive sectors like banking and real estate, while a "dovish" stance (inclined to cut rates) can be positive.</p>
    `,
    tags: ['RBI', 'India', 'Macro'],
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
