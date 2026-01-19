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
  {
    name: 'Polymarkets',
    description: 'Polymarket is the world\'s largest prediction market, allowing you to stay informed and profit from your knowledge by betting on future events across various topics like politics, crypto, culture, sports, and global news, using blockchain for transparent, decentralized wagering on outcomes',
    icon: Layers,
    imageId: 'indices-market',
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
    slug: 'central-bank-interest-rates',
    title: 'Central Bank & Interest Rate Topics',
    description: 'Understand how central banks use interest rates as a primary tool to manage economic growth and control inflation.',
    date: '2026-01-15',
    imageId: 'insight-central-bank',
    content: `
      <p>Central banks, like the Federal Reserve in the U.S., act as the economy's primary regulator. Their main tool is the 'policy interest rate,' which dictates the cost of borrowing for commercial banks. When they 'hike' rates, borrowing becomes more expensive, slowing down spending and investment to cool off an overheating economy and fight inflation. Conversely, 'cutting' rates makes borrowing cheaper, encouraging economic activity during a slowdown.</p>
    `,
    tags: ['Central Banks', 'Interest Rates', 'Monetary Policy'],
  },
  {
    slug: 'inflation-cost-of-living',
    title: 'Inflation & Cost of Living',
    description: 'Explore how inflation erodes purchasing power and directly impacts everyday expenses for households.',
    date: '2025-11-20',
    imageId: 'insight-inflation',
    content: `
      <p>Inflation is the rate at which the general level of prices for goods and services is rising, and subsequently, your money's purchasing power is falling. High inflation means your dollar buys less than it did before, affecting everything from groceries to gas. It's a key indicator of economic health and a major focus for both central banks and consumers.</p>
    `,
    tags: ['Inflation', 'Economics', 'Cost of Living'],
  },
  {
    slug: 'employment-economic-health',
    title: 'Employment & Economic Health',
    description: 'Learn why low unemployment is a sign of a strong economy, but also how it can signal future inflation.',
    date: '2025-09-05',
    imageId: 'insight-employment',
    content: `
      <p>Employment data, such as the unemployment rate and job creation numbers, are a direct pulse check on the economy. Low unemployment signifies a strong economy where businesses are hiring and consumers are confident. However, a very tight labor market can lead to wage growth that outpaces productivity, which can in turn fuel inflation, creating a complex challenge for policymakers.</p>
    `,
    tags: ['Employment', 'Jobs Report', 'Economic Health'],
  },
  {
    slug: 'war-geopolitics-global-tensions',
    title: 'War, Geopolitics & Global Tensions',
    description: 'See how international conflicts and political instability create market uncertainty and trigger risk-off sentiment.',
    date: '2025-06-18',
    imageId: 'insight-geopolitics',
    content: `
      <p>Financial markets crave stability. Geopolitical events, such as wars or significant political disputes, introduce profound uncertainty. This "geopolitical risk" can disrupt supply chains (e.g., oil), spook investors, and cause a flight to safety. During these times, market participants often sell riskier assets like stocks and flock to 'safe havens' like gold or the U.S. dollar.</p>
    `,
    tags: ['Geopolitics', 'Risk', 'Global Markets'],
  },
  {
    slug: 'trade-tariffs-global-politics',
    title: 'Trade, Tariffs & Global Politics',
    description: 'Understand how trade policies and tariffs can impact corporate profits and international market dynamics.',
    date: '2025-03-22',
    imageId: 'insight-trade',
    content: `
      <p>Trade agreements and tariffs (taxes on imported goods) are powerful political tools that have significant economic consequences. Open trade can boost profits for multinational corporations, while trade wars and protectionist tariffs can increase costs, reduce sales, and create volatility. These policies are a key factor in the performance of global stock market indices.</p>
    `,
    tags: ['Trade', 'Tariffs', 'Globalization'],
  },
  {
    slug: 'bonds-yields-smart-money',
    title: 'Bonds, Yields & "Smart Money" Signals',
    description: 'Discover how the bond market, often called the "smart money," provides clues about future economic health.',
    date: '2024-12-10',
    imageId: 'insight-bonds',
    content: `
      <p>The bond market is often seen as a leading indicator for the broader economy. Bond yields (the return on a bond) reflect expectations for future interest rates and inflation. A phenomenon known as an 'inverted yield curve,' where short-term bonds yield more than long-term ones, has historically been one of the most reliable predictors of an upcoming recession.</p>
    `,
    tags: ['Bonds', 'Yield Curve', 'Smart Money'],
  },
  {
    slug: 'commodities-real-economy',
    title: 'Commodities & Real Economy',
    description: 'How prices of raw materials like oil, copper, and lumber reflect the real-world demand and health of the global economy.',
    date: '2024-10-30',
    imageId: 'insight-commodities',
    content: `
      <p>Commodities are the raw materials that build and power the world. The price of industrial metals like copper (often called Dr. Copper for its economic predictive ability) or energy products like oil reflects global industrial demand. Rising commodity prices can signal a booming economy, but they can also be a major source of inflation for consumers and businesses.</p>
    `,
    tags: ['Commodities', 'Oil', 'Real Economy'],
  },
  {
    slug: 'crypto-risk-sentiment',
    title: 'Crypto & Risk Sentiment',
    description: 'Explore how the cryptocurrency market often acts as a barometer for overall investor appetite for risk.',
    date: '2024-09-12',
    imageId: 'insight-crypto',
    content: `
      <p>As one of the most speculative asset classes, the cryptocurrency market is a useful gauge of broad market risk sentiment. When investors feel confident and have a strong appetite for risk (a 'risk-on' environment), money often flows into crypto. Conversely, in a fearful 'risk-off' environment, assets like Bitcoin can see significant sell-offs as investors move to safer assets.</p>
    `,
    tags: ['Crypto', 'Risk Sentiment', 'Bitcoin'],
  },
  {
    slug: 'market-psychology-behavior',
    title: 'Market Psychology & Behavior',
    description: 'Delve into how collective emotions of fear and greed drive market bubbles and crashes, often defying logic.',
    date: '2024-07-21',
    imageId: 'insight-psychology',
    content: `
      <p>Markets are driven by people, and people are emotional. The collective psychology of investors creates cycles of fear and greed that can lead to speculative bubbles and panicked crashes. Understanding behavioral finance and recognizing common cognitive biases are crucial skills for navigating markets that often seem irrational. Price action is the ultimate reflection of this mass psychology.</p>
    `,
    tags: ['Psychology', 'Behavioral Finance', 'Fear & Greed'],
  }
];
