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
    description: 'Study contracts whose payoff depends on an underlying asset. Risk differs substantially between buyers and sellers.',
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
    description: 'Study how event contracts express a market price for a precisely defined outcome.',
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
    description: 'See how discount rates and earnings expectations interact.',
    date: '2023-01-25',
    imageId: 'insight-interest-rates-chart',
    content: "<h2>Discounting a future payment</h2><p>If a business pays ₹110 in one year, divide by 1.05 to value it at a hypothetical 5% discount rate. Raise the rate to 10% and the same cash flow is worth ₹100 today. A share includes many uncertain cash flows, so this calculation isolates just one input.</p><h3>Try it yourself</h3><p>Now raise the expected payment to ₹121 at 10%. Can a stronger earnings forecast offset the higher discount rate? Explain why an interest-rate headline alone cannot determine a share price.</p>",
    category: 'Market Mechanics',
  },
  {
    slug: 'what-bond-yields-tell-us',
    title: 'What Bond Yields Tell Us About the Economy',
    description: 'An analysis of the bond market as a forward-looking indicator for economic health, focusing on the yield curve.',
    date: '2023-10-03',
    imageId: 'insight-yield-curve',
    content: "<h2>Read a curve in basis points</h2><p>A yield curve places the same issuer’s borrowing rates side by side across maturities. In this example the ten-year rate minus the two-year rate is −0.50 percentage points, or −50 basis points. Investors may expect lower future short rates. Demand for longer bonds can also affect the spread.</p><h3>Try it yourself</h3><p>Keep the two-year yield at 5% and change the ten-year yield to 5.25%. Calculate the new spread. Label the two curves and write down one question about inflation expectations before interpreting either.</p>",
    category: 'Market Mechanics',
  },
    {
    slug: 'central-bank-decisions',
    title: 'How Central Bank Decisions Move Markets',
    description: 'An inside look at how monetary policy announcements from institutions like the Federal Reserve create market volatility.',
    date: '2025-03-20',
    imageId: 'insight-central-bank',
    content: "<h2>Separate a decision from its surprise</h2><p>A move from 5% to 5.25% is a 25-basis-point increase. If markets had already anticipated the full change, the announcement supplies little new information about today’s rate. A statement about future decisions can still change expectations.</p><h3>Try it yourself</h3><p>Compare a second meeting where the expected rate is 5% and the outcome is 5.25%. Record the same actual increase and the two different surprises. Compare short-term yields before attributing a currency move to the announcement.</p>",
    category: 'Market Mechanics',
  },
  {
    slug: 'market-volatility-explained',
    title: 'Market Volatility Explained',
    description: 'A look at what causes market volatility, how it\'s measured (e.g., VIX), and how it impacts trading strategies.',
    date: '2025-01-15',
    imageId: 'insight-volatility-index',
    content: "<h2>Look between the endpoints</h2><p>Two prices can start at 100 and end at 102 while taking very different paths. A detour to 110 creates a larger rise and subsequent fall. Realised volatility looks at a series of returns. The VIX uses option prices to estimate expected S&P 500 volatility over 30 days.</p><h3>Try it yourself</h3><p>Compute the second move on each path as finish divided by midpoint minus one. Which journey had a bigger reversal? A volatility estimate describes possible variation without specifying the sign of the next move.</p>",
    category: 'Market Mechanics',
  },
  // Section 3: Global Markets
  {
    slug: 'geopolitical-tensions-affect-markets',
    title: 'How Wars and Geopolitical Tensions Affect Markets',
    description: 'An examination of how global conflicts introduce uncertainty and trigger "risk-off" sentiment among investors.',
    date: '2022-03-10',
    imageId: 'insight-geopolitics',
    content: "<h2>Trace the exposure</h2><p>A route closure can delay deliveries even if production stays constant. A buyer with inventory can wait. A buyer with limited stock may compete for faster delivery. The same event can affect freight, fuel and company margins through different channels.</p><h3>Try it yourself</h3><p>Assume a buyer uses one unit per day and holds 15 units. Would inventory last for each route? Compare that physical shortfall with a headline that reports only a rise in uncertainty.</p>",
    category: 'Global Markets',
  },
    {
    slug: 'crude-oil-and-global-tensions',
    title: 'Global Tensions and Crude Oil Prices',
    description: 'An analysis of how recent conflicts have disrupted oil supply chains, fueling inflation and impacting global markets.',
    date: '2025-04-05',
    imageId: 'insight-oil-price-graph',
    content: "<h2>Build an inventory balance</h2><p>Suppose deliveries add 8 million barrels a week while users withdraw 10 million. Stocks fall by 2 million each week. This is a possible mechanism behind a tighter market. A price rise alone cannot tell you whether supply fell or demand rose.</p><h3>Try it yourself</h3><p>Starting at 50 million barrels, raise deliveries to 11 million in week two. Recalculate the ending stock. Identify the additional information you would need before connecting the inventory change to inflation.</p>",
    category: 'Global Markets',
  },
  {
    slug: 'understanding-forex-markets',
    title: 'Understanding Forex Markets and Currency Strength',
    description: 'A primer on the foreign exchange market, the world\'s largest financial market, and what drives currency values.',
    date: '2023-07-18',
    imageId: 'forex-market',
    content: "<h2>Read the units first</h2><p>USD/INR quotes rupees per US dollar. At 80, a US$100 invoice costs ₹8,000. At 82 it costs ₹8,200 before charges. The same move increases the rupee proceeds for someone receiving US dollars.</p><h3>Try it yourself</h3><p>Reverse the perspective. If you hold ₹8,200, divide by each rate to find how many dollars you receive. State which currency strengthened and identify the base currency before describing the move.</p>",
    category: 'Global Markets',
  },
  {
    slug: 'why-gold-rises-during-uncertainty',
    title: 'How uncertainty and currency moves affect gold',
    description: 'An exploration of gold\'s historical role as a "safe-haven" asset during times of economic or political turmoil.',
    date: '2024-01-30',
    imageId: 'insight-gold-chart',
    content: "<h2>Separate metal price and currency</h2><p>Gold can attract demand during uncertainty, but it also competes with interest-bearing assets. A change in the exchange rate can move the rupee price even if the dollar gold price stays flat. Local premiums and costs can further change the result.</p><h3>Try it yourself</h3><p>Keep the exchange rate at 82 and reduce the dollar price from 100 to 98. Does the rupee value still exceed the original ₹8,000? Explain which input offset part of the currency move.</p>",
    category: 'Global Markets',
  },
  // Section 4: Advanced Systems
  {
    slug: 'prediction-markets-polymarkets',
    title: 'Prediction Markets and Polymarkets Explained',
    description: 'An introduction to decentralized platforms where users can bet on the outcomes of real-world events.',
    date: '2024-10-15',
    imageId: 'insight-polymarket-chart',
    content: "<h2>Read the settlement condition</h2><p>A classroom contract pays one unit if an event occurs and zero otherwise. At a cost of 0.60, the net result is +0.40 or −0.60 before fees. Treating the price as a probability assumes a great deal about liquidity and participants.</p><h3>Try it yourself</h3><p>Write a precise definition of rain tomorrow including station, measurement threshold and observation time. Compare it with an ambiguous definition. Settlement wording can matter even when participants agree on the weather.</p>",
    category: 'Advanced Systems',
  },
  {
    slug: 'rise-of-cryptocurrency-markets',
    title: 'The Rise of Cryptocurrency Markets',
    description: 'A look at how cryptocurrencies like Bitcoin act as a barometer for investor risk appetite in the broader market.',
    date: '2023-04-02',
    imageId: 'insight-crypto',
    content: "<h2>Separate a price loss from custody risk</h2><p>From 100 to 60 is a 40% loss. A subsequent 40% gain applies to 60, producing 84. A further risk is whether the holder can access or transfer the asset. A price chart alone cannot establish access.</p><h3>Try it yourself</h3><p>Calculate the percentage gain needed to return from 60 to 100. In a separate column, list what evidence would establish custody and withdrawal availability. Keep those questions separate from price performance.</p>",
    category: 'Advanced Systems',
  },
  {
    slug: 'market-psychology-behavioral-finance',
    title: 'Market Psychology and Behavioral Finance',
    description: 'An exploration of how collective emotions of fear and greed drive market bubbles and crashes.',
    date: '2024-12-30',
    imageId: 'insight-psychology',
    content: "<h2>Review the decision with the future hidden</h2><p>Suppose a paper trade plans to risk one unit and has a written exit condition. After a one-unit gain, a small pullback triggers an early exit. The next candle cannot tell you whether the exit followed the original rule.</p><h3>Try it yourself</h3><p>Hide the future bars and write the precise exit condition. Reveal them one at a time. Record a rule-following exit separately from a profitable exit, then repeat on a losing example to avoid selecting only memorable winners.</p>",
    category: 'Advanced Systems',
  },
  {
    slug: 'taxation-basics-for-traders',
    title: 'Taxation Basics for Stocks, Derivatives, and Crypto',
    description: 'A general overview of the tax implications for different types of trading and investing activities.',
    date: '2025-02-14',
    imageId: 'insight-tax-flowchart',
    content: "<h2>Reconcile the records first</h2><p>A purchase for ₹1,000 and a sale for ₹1,150 give a ₹150 difference before recorded charges. That arithmetic alone does not establish taxable income. Instrument type, dates, residency and applicable rules can change the treatment.</p><h3>Try it yourself</h3><p>Create a row for transaction date, instrument, quantity, currency, proceeds and charges. Compare records against statements where applicable. Ask a qualified tax professional about classification and deductions before using the figures in a return.</p>",
    category: 'Advanced Systems',
  },
];
