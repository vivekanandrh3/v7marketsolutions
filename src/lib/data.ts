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
    slug: 'interest-rates-and-inflation-101',
    title: "Interest Rates and Inflation: The Market's Push and Pull",
    description: "A simple guide to understanding why everyone talks about interest rates and inflation, and how they affect the economy.",
    date: '2024-07-22',
    imageId: 'interest-rates-inflation-101',
    content: `
      <h2 class="text-2xl font-headline font-bold mb-4">What's the Big Deal?</h2>
      <p class="mb-4">Imagine the economy is a car. Inflation is how fast it's going, and interest rates are the brakes. <strong>Inflation</strong> is the rate at which the general level of prices for goods and services is rising, and subsequently, purchasing power is falling. A little bit is normal, but too much means the car is going too fast and might crash.</p>
      <p class="mb-4"><strong>Interest rates</strong>, set by central banks (like the Fed in the U.S. or the RBI in India), are the cost of borrowing money. When they 'hike rates', they're hitting the brakes. It becomes more expensive for people and companies to borrow money for big purchases like houses, cars, or new factories. This slows down spending, cools the economy, and helps bring inflation back under control.</p>
      <h2 class="text-2xl font-headline font-bold mt-6 mb-4">Why Traders Care</h2>
      <p>When interest rates go up, safer investments like government bonds become more attractive because they pay more. This can pull money out of riskier assets like stocks. When rates go down, it's the opposite: borrowing is cheap, companies can grow faster, and stocks often look more appealing. Watching these two numbers gives traders a clue about which way the economic 'car' is being steered.</p>
    `,
    tags: ['Interest Rates', 'Inflation', 'Economics 101'],
  },
  {
    slug: 'geopolitics-and-markets',
    title: 'From Headlines to Your Portfolio: Geopolitics Explained',
    description: 'How events like wars, trade policies, and global tensions can send shockwaves through financial markets.',
    date: '2024-07-20',
    imageId: 'geopolitics-and-markets',
    content: `
      <h2 class="text-2xl font-headline font-bold mb-4">The World is Connected</h2>
      <p class="mb-4">Financial markets don't exist in a bubble. Events happening thousands of miles away, like wars, political instability, or new trade tariffs, can have a direct impact. Why? Because these events create <strong>uncertainty</strong>, and markets hate uncertainty. This is often called <strong>Geopolitical Risk</strong>.</p>
      <p class="mb-4">For example, a conflict in a major oil-producing region can disrupt supply, causing oil prices to skyrocket. This increases costs for everyone, from airlines to shipping companies, and can fuel inflation. Similarly, when two countries start a 'trade war' by imposing <strong>tariffs</strong> (taxes on imported goods), it can make products more expensive and hurt the profits of international companies.</p>
      <h2 class="text-2xl font-headline font-bold mt-6 mb-4">Risk-On vs. Risk-Off</h2>
      <p>When global tensions are high, you'll often hear the term <strong>'Risk-Off'</strong>. This means investors get scared and sell risky assets (like stocks) and rush to buy 'safe-haven' assets, such as gold, U.S. dollars, or government bonds. When tensions ease and confidence returns, it's <strong>'Risk-On'</strong>, and money flows back into those riskier assets. Understanding the global mood helps you understand why the market might be moving up or down, even if there's no company-specific news.</p>
    `,
    tags: ['Geopolitics', 'Risk', 'Trade Policy'],
  },
  {
    slug: 'bond-yields-unemployment-connection',
    title: "Bond Yields and Job Reports: The Market's Health Check",
    description: "Learn what bond yields and unemployment numbers can tell you about the overall health of the economy.",
    date: '2024-07-18',
    imageId: 'bond-yields-unemployment',
    content: `
      <h2 class="text-2xl font-headline font-bold mb-4">The Economy's Report Card</h2>
      <p class="mb-4">Two key numbers that act like a health check for the economy are <strong>unemployment rates</strong> and <strong>bond yields</strong>. A low unemployment rate is generally good—it means most people have jobs and are spending money, which drives economic growth. However, if it gets too low, companies may have to pay higher wages to attract workers, which can contribute to inflation.</p>
      <p class="mb-4">A <strong>bond yield</strong> is the return an investor gets on a government or corporate bond. Think of it as the 'interest rate' on that bond. The yield on government bonds (like the U.S. 10-Year Treasury) is often seen as a benchmark for the entire market. If investors are worried about the economy, they might rush to buy these safe bonds, which pushes the price up and the yield down. A falling yield can be a sign of economic anxiety.</p>
      <h2 class="text-2xl font-headline font-bold mt-6 mb-4">The Inverted Yield Curve</h2>
      <p>You might hear about an 'inverted yield curve'. Normally, long-term bonds have higher yields than short-term bonds to compensate for locking up money longer. When short-term yields become higher than long-term yields, the curve 'inverts'. This is a rare event that has historically been a reliable predictor of an upcoming recession, as it suggests investors expect rates to be lower in the future due to a weaker economy.</p>
    `,
    tags: ['Bond Yields', 'Unemployment', 'Recession'],
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
