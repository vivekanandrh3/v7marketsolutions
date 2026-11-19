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
  category: 'Foundations' | 'Market Mechanics' | 'Global Markets' | 'Advanced Systems';
};

export const insights: InsightPost[] = [
  // Section 1: Foundations
  {
    slug: 'what-are-stocks',
    title: 'What Are Stocks and How Do They Work?',
    description: 'A foundational look at what it means to own a stock and participate in a company\'s growth.',
    date: '2023-05-10',
    imageId: 'insight-stocks-chart',
    content: "<h2>Follow one share</h2><p>Imagine a company with 1,000 equal ordinary shares. Ten shares represent 1% ownership. If other investors later trade those ten shares at a higher price, the quoted value of your holding rises. The company receives no cash from that secondary-market trade.</p><h3>Try it yourself</h3><p>On paper, buy ten shares at ₹100 and sell at ₹95 after receiving ₹2 per share in dividends. Before costs, the price loss is ₹50 and the dividend is ₹20. Your net result is a ₹30 loss.</p>",
    category: 'Foundations',
  },
  {
    slug: 'understanding-ipos',
    title: 'Understanding IPOs and How Companies Go Public',
    description: 'An overview of the Initial Public Offering (IPO) process, where a private company first offers its shares to the public.',
    date: '2023-08-22',
    imageId: 'insight-ipo-flowchart',
    content: "<h2>Where does the money go?</h2><p>An IPO can include newly issued shares and shares sold by existing owners. The proceeds of the first portion go to the company. The second portion pays the selling owners. The split matters when reading a headline about how much a company raised.</p><h3>Try it yourself</h3><p>Find the use-of-proceeds section in a prospectus. For a hypothetical ₹100 crore issue with ₹40 crore of fresh shares, identify who receives the other ₹60 crore before expenses.</p>",
    category: 'Foundations',
  },
  {
    slug: 'bond-markets-explained',
    title: 'Bond Markets Explained Simply',
    description: 'Learn how bonds work as a form of lending to governments and corporations, and their role in a diversified portfolio.',
    date: '2022-11-15',
    imageId: 'insight-bonds',
    content: "<h2>Separate coupon from price</h2><p>A hypothetical ₹1,000 face-value bond with a fixed 6% annual coupon promises ₹60 a year. If it trades at ₹950, the coupon remains ₹60. That payment is about 6.32% of the purchase price. This current yield leaves out any gain or loss at redemption.</p><h3>Try it yourself</h3><p>Write down the coupon, maturity date and issuer for one example. Then consider two different risks, selling before maturity at a lower price and the issuer missing a payment.</p>",
    category: 'Foundations',
  },
  {
    slug: 'power-of-compounding',
    title: 'The Power of Compounding in Long-Term Investing',
    description: 'A demonstration of how reinvesting your earnings can lead to exponential growth over time.',
    date: '2024-02-28',
    imageId: 'insight-compounding-curve',
    content: "<h2>Compare two balances</h2><p>Start with a hypothetical ₹10,000 earning a fixed 5% annually. Reinvesting gives ₹10,500 after year one and ₹11,025 after year two. The extra ₹25 is the return earned on the first year’s ₹500.</p><h3>Try it yourself</h3><p>Run the same calculation while withdrawing ₹500 each year. Compare total cash plus ending balance. Then change the second year to a loss and see how the next year starts from a smaller base.</p>",
    category: 'Foundations',
  },
  // Section 2: Market Mechanics
  {
    slug: 'how-interest-rates-influence-stocks',
    title: 'How Interest Rates Influence Stock Markets',
    description: 'Explore the inverse relationship between interest rates set by central banks and the valuation of the stock market.',
    date: '2023-01-25',
    imageId: 'insight-interest-rates-chart',
    content: '<p>When central banks raise interest rates to fight inflation, borrowing becomes more expensive for companies and consumers, which can slow down economic growth and hurt corporate profits. This often leads to lower stock prices. Conversely, lower rates can stimulate the economy and boost the market.</p>',
    category: 'Market Mechanics',
  },
  {
    slug: 'what-bond-yields-tell-us',
    title: 'What Bond Yields Tell Us About the Economy',
    description: 'An analysis of the bond market as a forward-looking indicator for economic health, focusing on the yield curve.',
    date: '2023-10-03',
    imageId: 'insight-yield-curve',
    content: '<p>The bond market is often called the "smart money." The yield curve—a graph of bond yields across different maturities—provides powerful clues. An inverted yield curve, where short-term bonds yield more than long-term ones, has historically been a reliable predictor of recessions.</p>',
    category: 'Market Mechanics',
  },
    {
    slug: 'central-bank-decisions',
    title: 'How Central Bank Decisions Move Markets',
    description: 'An inside look at how monetary policy announcements from institutions like the Federal Reserve create market volatility.',
    date: '2025-03-20',
    imageId: 'insight-central-bank',
    content: '<p>Central banks hold immense power over financial markets. Their decisions on interest rates and quantitative easing send powerful signals to investors. This article explains how traders anticipate these decisions and why the accompanying statements can cause significant price swings in stocks, bonds, and currencies.</p>',
    category: 'Market Mechanics',
  },
  {
    slug: 'market-volatility-explained',
    title: 'Market Volatility Explained',
    description: 'A look at what causes market volatility, how it\'s measured (e.g., VIX), and how it impacts trading strategies.',
    date: '2025-01-15',
    imageId: 'insight-volatility-index',
    content: '<p>Volatility refers to the magnitude and speed of price changes in a market. While often seen as a sign of risk, it also creates opportunities for traders. We explore the factors that drive volatility, from economic data releases to geopolitical events, and how traders can adapt.</p>',
    category: 'Market Mechanics',
  },
  // Section 3: Global Markets
  {
    slug: 'geopolitical-tensions-affect-markets',
    title: 'How Wars and Geopolitical Tensions Affect Markets',
    description: 'An examination of how global conflicts introduce uncertainty and trigger "risk-off" sentiment among investors.',
    date: '2022-03-10',
    imageId: 'insight-geopolitics',
    content: '<p>Financial markets thrive on stability. Wars, political turmoil, and other geopolitical shocks disrupt this stability, causing investors to sell riskier assets like stocks and flee to "safe havens" such as gold or the U.S. dollar. This article explores the historical market impact of major global events.</p>',
    category: 'Global Markets',
  },
    {
    slug: 'crude-oil-and-global-tensions',
    title: 'Global Tensions and Crude Oil Prices',
    description: 'An analysis of how recent conflicts have disrupted oil supply chains, fueling inflation and impacting global markets.',
    date: '2025-04-05',
    imageId: 'insight-oil-price-graph',
    content: '<p>Crude oil is the lifeblood of the global economy. Recent geopolitical tensions in key oil-producing regions have created significant supply chain disruptions, leading to a sharp increase in energy prices. This surge directly contributes to higher inflation, forcing central banks to consider aggressive rate hikes. As a result, currencies of oil-importing nations weaken, and stock markets face pressure from higher costs and reduced consumer spending power.</p>',
    category: 'Global Markets',
  },
  {
    slug: 'understanding-forex-markets',
    title: 'Understanding Forex Markets and Currency Strength',
    description: 'A primer on the foreign exchange market, the world\'s largest financial market, and what drives currency values.',
    date: '2023-07-18',
    imageId: 'forex-market',
    content: '<p>The Forex market is where currencies are traded. A currency\'s strength is influenced by a country\'s economic health, interest rates, trade balances, and political stability. We explore how these factors create opportunities for traders in this 24/7 market.</p>',
    category: 'Global Markets',
  },
  {
    slug: 'why-gold-rises-during-uncertainty',
    title: 'Why Gold Rises During Global Uncertainty',
    description: 'An exploration of gold\'s historical role as a "safe-haven" asset during times of economic or political turmoil.',
    date: '2024-01-30',
    imageId: 'insight-gold-chart',
    content: '<p>For centuries, gold has been seen as a store of value. Unlike currencies, it cannot be printed and has limited supply. During crises, when investors lose faith in stocks and bonds, they often turn to gold, driving up its price. This article examines the reasons behind this enduring behavior.</p>',
    category: 'Global Markets',
  },
  // Section 4: Advanced Systems
  {
    slug: 'prediction-markets-polymarkets',
    title: 'Prediction Markets and Polymarkets Explained',
    description: 'An introduction to decentralized platforms where users can bet on the outcomes of real-world events.',
    date: '2024-10-15',
    imageId: 'insight-polymarket-chart',
    content: '<p>Prediction markets like Polymarket leverage the "wisdom of the crowd" to forecast future events, from election results to economic data releases. This article explains how they work, their potential as an information source, and the risks involved.</p>',
    category: 'Advanced Systems',
  },
  {
    slug: 'rise-of-cryptocurrency-markets',
    title: 'The Rise of Cryptocurrency Markets',
    description: 'A look at how cryptocurrencies like Bitcoin act as a barometer for investor risk appetite in the broader market.',
    date: '2023-04-02',
    imageId: 'insight-crypto',
    content: '<p>As a highly speculative asset class, cryptocurrency is often at the forefront of market sentiment shifts. A surge in crypto prices can indicate a "risk-on" environment, while a crash can signal a broader flight to safety. We analyze this relationship and what it tells us about market psychology.</p>',
    category: 'Advanced Systems',
  },
  {
    slug: 'market-psychology-behavioral-finance',
    title: 'Market Psychology and Behavioral Finance',
    description: 'An exploration of how collective emotions of fear and greed drive market bubbles and crashes.',
    date: '2024-12-30',
    imageId: 'insight-psychology',
    content: '<p>Markets are not always rational. Behavioral finance studies how psychological biases—such as herd mentality and confirmation bias—affect investor decisions. Understanding these patterns is key to avoiding common mistakes and navigating emotional market swings.</p>',
    category: 'Advanced Systems',
  },
  {
    slug: 'taxation-basics-for-traders',
    title: 'Taxation Basics for Stocks, Derivatives, and Crypto',
    description: 'A general overview of the tax implications for different types of trading and investing activities.',
    date: '2025-02-14',
    imageId: 'insight-tax-flowchart',
    content: '<p>Profit from trading is often taxable income. This article provides a high-level overview of how gains and losses from stocks, options, futures, and crypto are typically treated for tax purposes. Note: This is not financial advice; always consult a qualified professional.</p>',
    category: 'Advanced Systems',
  },
];
