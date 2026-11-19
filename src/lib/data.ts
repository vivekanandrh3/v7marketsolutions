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
    description: "Ownership shares represent a claim on a company. Compare dividends and changes in the quoted share price.",
    icon: Briefcase,
    imageId: 'stocks-market',
  },
  {
    name: 'Options',
    description: "Study contracts whose payoff depends on an underlying asset. Risk differs between buyers and sellers.",
    icon: FileText,
    imageId: 'stocks-market',
  },
  {
    name: 'Futures',
    description: "Study standardised contracts with a multiplier, settlement terms and expiry.",
    icon: Copy,
    imageId: 'commodities-market',
  },
  {
    name: 'CFDs',
    description: "A contract for difference settles a price change under the provider’s terms. Access depends on jurisdiction.",
    icon: ReceiptText,
    imageId: 'forex-market',
  },
  {
    name: 'Mutual Funds',
    description: "Compare a pooled portfolio’s holdings, mandate, expenses and valuation.",
    icon: FolderKanban,
    imageId: 'indices-market',
  },
  {
    name: 'ETFs',
    description: "Examine how an exchange-traded fund’s market price relates to the assets it tracks.",
    icon: FileStack,
    imageId: 'stocks-market',
  },
  {
    name: 'IPOs',
    description: "Distinguish newly issued shares from shares sold by existing holders.",
    icon: Building,
    imageId: 'crypto-market',
  },
  {
    name: 'Government Securities',
    description: "Compare coupon, maturity and interest-rate exposure in government debt.",
    icon: Shield,
    imageId: 'commodities-market',
  },
  {
    name: 'Bonds',
    description: "Distinguish promised payments from the issuer’s ability to repay.",
    icon: Landmark,
    imageId: 'forex-market',
  },
  {
    name: 'Corporate Actions & Auctions',
    description: "Study how splits, auctions and mergers change contract or ownership records.",
    icon: Handshake,
    imageId: 'indices-market',
  },
  {
    name: 'Forex',
    description: "Read a currency pair in units of the quote currency per unit of the base currency.",
    icon: CandlestickChart,
    imageId: 'forex-market',
  },
  {
    name: 'Crypto',
    description: "Separate quoted token prices from custody, liquidity and access risks.",
    icon: Bitcoin,
    imageId: 'crypto-market',
  },
  {
    name: 'Polymarkets',
    description: "Use fictional event contracts to study probability, wording and settlement.",
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
    content: "<h2>Follow one share</h2><p>Imagine a company with 1,000 equal ordinary shares. Ten shares represent 1% ownership. If other investors later trade those ten shares at a higher price, the quoted value of your holding rises. The company receives no cash from that secondary-market trade.</p><h3>Try it yourself</h3><p>On paper, buy ten shares at ₹100 and sell at ₹95 after receiving ₹2 per share in dividends. Before costs, the price loss is ₹50 and the dividend is ₹20. Your net result is a ₹30 loss.</p><h2>What changes hands?</h2><p>Trace the buyer’s cash to the seller and the share in the opposite direction. Then imagine the company issues a new share. This time the cash goes to the issuer and the ownership denominator changes. Distinguishing these transactions helps when reading the IPO example.</p>",
    category: 'Foundations',
  },
  {
    slug: 'understanding-ipos',
    title: 'Understanding IPOs and How Companies Go Public',
    description: 'An overview of the Initial Public Offering (IPO) process, where a private company first offers its shares to the public.',
    date: '2023-08-22',
    imageId: 'insight-ipo-flowchart',
    content: "<h2>Where does the money go?</h2><p>An IPO can include newly issued shares and shares sold by existing owners. The proceeds of the first portion go to the company. The second portion pays the selling owners. The split matters when reading a headline about how much a company raised.</p><h3>Try it yourself</h3><p>Find the use-of-proceeds section in a prospectus. For a hypothetical ₹100 crore issue with ₹40 crore of fresh shares, identify who receives the other ₹60 crore before expenses.</p><h2>Read the split before the headline</h2><p>In the exercise, ₹60 crore goes to selling holders before expenses. A large issue alone tells you little about cash available for expansion. Look separately at dilution, the stated use of proceeds and the risks described by the issuer.</p>",
    category: 'Foundations',
  },
  {
    slug: 'bond-markets-explained',
    title: 'Bond Markets Explained Simply',
    description: 'Learn how bonds work as a form of lending to governments and corporations, and their role in a diversified portfolio.',
    date: '2022-11-15',
    imageId: 'insight-bonds',
    content: "<h2>Separate coupon from price</h2><p>A hypothetical ₹1,000 face-value bond with a fixed 6% annual coupon promises ₹60 a year. If it trades at ₹950, the coupon remains ₹60. That payment is about 6.32% of the purchase price. This current yield leaves out any gain or loss at redemption.</p><h3>Try it yourself</h3><p>Write down the coupon, maturity date and issuer for one example. Then consider two different risks, selling before maturity at a lower price and the issuer missing a payment.</p><h2>Compare two buyers of the same bond</h2><p>A second buyer paying ₹1,050 receives the same ₹60 coupon, about 5.71% of the purchase price. A buyer who pays above face value may lose some principal relative to the purchase price at redemption. Current yield, yield to maturity and realised return answer different questions.</p>",
    category: 'Foundations',
  },
  {
    slug: 'power-of-compounding',
    title: 'The Power of Compounding in Long-Term Investing',
    description: 'A demonstration of how reinvesting your earnings can lead to exponential growth over time.',
    date: '2024-02-28',
    imageId: 'insight-compounding-curve',
    content: "<h2>Compare two balances</h2><p>Start with a hypothetical ₹10,000 earning a fixed 5% annually. Reinvesting gives ₹10,500 after year one and ₹11,025 after year two. The extra ₹25 is the return earned on the first year’s ₹500.</p><h3>Try it yourself</h3><p>Run the same calculation while withdrawing ₹500 each year. Compare total cash plus ending balance. Then change the second year to a loss and see how the next year starts from a smaller base.</p><h2>Check the base after a loss</h2><p>A fall of 10% takes ₹10,000 to ₹9,000. Recovering ₹1,000 then takes about 11.11%. When comparing illustrations, keep contributions separate from growth, record the compounding interval, and state whether deposits arrive before or after interest.</p>",
    category: 'Foundations',
  },
  // Section 2: Market Mechanics
  {
    slug: 'how-interest-rates-influence-stocks',
    title: 'How Interest Rates Influence Stock Markets',
    description: 'See how discount rates and earnings expectations interact.',
    date: '2023-01-25',
    imageId: 'insight-interest-rates-chart',
    content: "<h2>Discounting a future payment</h2><p>If a business pays ₹110 in one year, divide by 1.05 to value it at a hypothetical 5% discount rate. Raise the rate to 10% and the same cash flow is worth ₹100 today. A share includes many uncertain cash flows, so this calculation isolates just one input.</p><h3>Try it yourself</h3><p>Now raise the expected payment to ₹121 at 10%. Can a stronger earnings forecast offset the higher discount rate? Explain why an interest-rate headline alone cannot determine a share price.</p><h2>Test the counterexample</h2><p>₹121 divided by 1.10 equals ₹110, higher than ₹104.76 in the initial 5% example. A higher discount rate and a higher expected payment pull in different directions. Ask which expectation changed before assigning a cause to a price move.</p>",
    category: 'Market Mechanics',
  },
  {
    slug: 'what-bond-yields-tell-us',
    title: 'What Bond Yields Tell Us About the Economy',
    description: 'An analysis of the bond market as a forward-looking indicator for economic health, focusing on the yield curve.',
    date: '2023-10-03',
    imageId: 'insight-yield-curve',
    content: "<h2>Read a curve in basis points</h2><p>A yield curve places the same issuer’s borrowing rates side by side across maturities. In this example the ten-year rate minus the two-year rate is −0.50 percentage points, or −50 basis points. Investors may expect lower future short rates. Demand for longer bonds can also affect the spread.</p><h3>Try it yourself</h3><p>Keep the two-year yield at 5% and change the ten-year yield to 5.25%. Calculate the new spread. Label the two curves and write down one question about inflation expectations before interpreting either.</p><h2>Compare like with like</h2><p>Use the same issuer, currency and observation time. A 5.25% ten-year yield minus a 5% two-year yield is +25 basis points. Comparing bonds with different credit risks introduces another explanation for the spread.</p>",
    category: 'Market Mechanics',
  },
    {
    slug: 'central-bank-decisions',
    title: 'How Central Bank Decisions Move Markets',
    description: 'An inside look at how monetary policy announcements from institutions like the Federal Reserve create market volatility.',
    date: '2025-03-20',
    imageId: 'insight-central-bank',
    content: "<h2>Separate a decision from its surprise</h2><p>A move from 5% to 5.25% is a 25-basis-point increase. If markets had already anticipated the full change, the announcement supplies little new information about today’s rate. A statement about future decisions can still change expectations.</p><h3>Try it yourself</h3><p>Compare a second meeting where the expected rate is 5% and the outcome is 5.25%. Record the same actual increase and the two different surprises. Compare short-term yields before attributing a currency move to the announcement.</p><h2>Separate the immediate rate from the path</h2><p>If a 25-basis-point rise was fully anticipated, the decision surprise is zero. Future inflation language can still change expectations. In your notes keep the actual announcement, a pre-meeting expectation and your interpretation in separate columns.</p>",
    category: 'Market Mechanics',
  },
  {
    slug: 'market-volatility-explained',
    title: 'Market Volatility Explained',
    description: 'A look at what causes market volatility, how it\'s measured (e.g., VIX), and how it impacts trading strategies.',
    date: '2025-01-15',
    imageId: 'insight-volatility-index',
    content: "<h2>Look between the endpoints</h2><p>Two prices can start at 100 and end at 102 while taking very different paths. A detour to 110 creates a larger rise and subsequent fall. Realised volatility looks at a series of returns. The VIX uses option prices to estimate expected S&P 500 volatility over 30 days.</p><h3>Try it yourself</h3><p>Compute the second move on each path as finish divided by midpoint minus one. Which journey had a bigger reversal? A volatility estimate describes possible variation without specifying the sign of the next move.</p><h2>Calculate the reversals</h2><p>From 101 to 102 the gain is about 0.99%. From 110 to 102 the loss is about 7.27%. Both paths finish at 102. A large reversal cannot be inferred from endpoints alone, and this two-step exercise is not a VIX calculation.</p>",
    category: 'Market Mechanics',
  },
  // Section 3: Global Markets
  {
    slug: 'geopolitical-tensions-affect-markets',
    title: 'How Wars and Geopolitical Tensions Affect Markets',
    description: 'An examination of how global conflicts introduce uncertainty and trigger "risk-off" sentiment among investors.',
    date: '2022-03-10',
    imageId: 'insight-geopolitics',
    content: "<h2>Trace the exposure</h2><p>A route closure can delay deliveries even if production stays constant. A buyer with inventory can wait. A buyer with limited stock may compete for faster delivery. The same event can affect freight, fuel and company margins through different channels.</p><h3>Try it yourself</h3><p>Assume a buyer uses one unit per day and holds 15 units. Would inventory last for each route? Compare that physical shortfall with a headline that reports only a rise in uncertainty.</p><h2>Test the physical constraint</h2><p>A 15-unit buffer covers a 12-day delivery at one unit per day. An 18-day route leaves a three-unit gap absent another supplier. A financial price response depends on expectations about that gap, including whether other buyers already secured stock.</p>",
    category: 'Global Markets',
  },
    {
    slug: 'crude-oil-and-global-tensions',
    title: 'Global Tensions and Crude Oil Prices',
    description: 'An analysis of how recent conflicts have disrupted oil supply chains, fueling inflation and impacting global markets.',
    date: '2025-04-05',
    imageId: 'insight-oil-price-graph',
    content: "<h2>Build an inventory balance</h2><p>Suppose deliveries add 8 million barrels a week while users withdraw 10 million. Stocks fall by 2 million each week. This is a possible mechanism behind a tighter market. A price rise alone cannot tell you whether supply fell or demand rose.</p><h3>Try it yourself</h3><p>Starting at 50 million barrels, raise deliveries to 11 million in week two. Recalculate the ending stock. Identify the additional information you would need before connecting the inventory change to inflation.</p><h2>Reconcile the second week</h2><p>Week one ends at 48 million barrels. Week two with deliveries of 11 and withdrawals of 10 ends at 49. Check whether a headline describes output, deliveries or inventories. A change in one does not establish the other two.</p>",
    category: 'Global Markets',
  },
  {
    slug: 'understanding-forex-markets',
    title: 'Understanding Forex Markets and Currency Strength',
    description: 'A primer on the foreign exchange market, the world\'s largest financial market, and what drives currency values.',
    date: '2023-07-18',
    imageId: 'forex-market',
    content: "<h2>Read the units first</h2><p>USD/INR quotes rupees per US dollar. At 80, a US$100 invoice costs ₹8,000. At 82 it costs ₹8,200 before charges. The same move increases the rupee proceeds for someone receiving US dollars.</p><h3>Try it yourself</h3><p>Reverse the perspective. If you hold ₹8,200, divide by each rate to find how many dollars you receive. State which currency strengthened and identify the base currency before describing the move.</p><h2>Reverse the units</h2><p>At 80 rupees per dollar, ₹8,200 buys US$102.50 before charges. At 82 it buys US$100. A currency strengthens only relative to another currency. A chart from one OTC venue also samples only part of global FX activity.</p>",
    category: 'Global Markets',
  },
  {
    slug: 'why-gold-rises-during-uncertainty',
    title: 'How uncertainty and currency moves affect gold',
    description: 'An exploration of gold\'s historical role as a "safe-haven" asset during times of economic or political turmoil.',
    date: '2024-01-30',
    imageId: 'insight-gold-chart',
    content: "<h2>Separate metal price and currency</h2><p>Gold can attract demand during uncertainty, but it also competes with interest-bearing assets. A change in the exchange rate can move the rupee price even if the dollar gold price stays flat. Local premiums and costs can further change the result.</p><h3>Try it yourself</h3><p>Keep the exchange rate at 82 and reduce the dollar price from 100 to 98. Does the rupee value still exceed the original ₹8,000? Explain which input offset part of the currency move.</p><h2>Check both parts of the quote</h2><p>98 dollars multiplied by 82 rupees gives ₹8,036. The metal fell in dollars while its hypothetical rupee value rose slightly. A local chart can therefore tell a different story from the dollar chart without either chart being wrong.</p>",
    category: 'Global Markets',
  },
  // Section 4: Advanced Systems
  {
    slug: 'prediction-markets-polymarkets',
    title: 'Prediction Markets and Polymarkets Explained',
    description: 'An introduction to decentralized platforms where users can bet on the outcomes of real-world events.',
    date: '2024-10-15',
    imageId: 'insight-polymarket-chart',
    content: "<h2>Read the settlement condition</h2><p>A classroom contract pays one unit if an event occurs and zero otherwise. At a cost of 0.60, the net result is +0.40 or −0.60 before fees. Treating the price as a probability assumes a great deal about liquidity and participants.</p><h3>Try it yourself</h3><p>Write a precise definition of rain tomorrow including station, measurement threshold and observation time. Compare it with an ambiguous definition. Settlement wording can matter even when participants agree on the weather.</p><h2>Check the contract wording</h2><p>A weather station can report a trace of rain while another station records none. A settlement dispute can depend entirely on the named data source. Use the contract here as a probability exercise; access and legal treatment vary by jurisdiction.</p>",
    category: 'Advanced Systems',
  },
  {
    slug: 'rise-of-cryptocurrency-markets',
    title: 'The Rise of Cryptocurrency Markets',
    description: 'A look at how cryptocurrencies like Bitcoin act as a barometer for investor risk appetite in the broader market.',
    date: '2023-04-02',
    imageId: 'insight-crypto',
    content: "<h2>Separate a price loss from custody risk</h2><p>From 100 to 60 is a 40% loss. A subsequent 40% gain applies to 60, producing 84. A further risk is whether the holder can access or transfer the asset. A price chart alone cannot establish access.</p><h3>Try it yourself</h3><p>Calculate the percentage gain needed to return from 60 to 100. In a separate column, list what evidence would establish custody and withdrawal availability. Keep those questions separate from price performance.</p><h2>Work back to the starting balance</h2><p>A move from 60 to 100 requires a gain of 40 ÷ 60, about 66.67%. A percentage rebound uses the reduced base. Treat platform access and custody as separate questions that this arithmetic cannot answer.</p>",
    category: 'Advanced Systems',
  },
  {
    slug: 'market-psychology-behavioral-finance',
    title: 'Market Psychology and Behavioral Finance',
    description: 'An exploration of how collective emotions of fear and greed drive market bubbles and crashes.',
    date: '2024-12-30',
    imageId: 'insight-psychology',
    content: "<h2>Review the decision with the future hidden</h2><p>Suppose a paper trade plans to risk one unit and has a written exit condition. After a one-unit gain, a small pullback triggers an early exit. The next candle cannot tell you whether the exit followed the original rule.</p><h3>Try it yourself</h3><p>Hide the future bars and write the precise exit condition. Reveal them one at a time. Record a rule-following exit separately from a profitable exit, then repeat on a losing example to avoid selecting only memorable winners.</p><h2>Avoid selecting only spectacular exits</h2><p>Choose a consecutive sample before looking at results. For each replay, record whether the original exit condition occurred. Compare early exits that helped with early exits that hurt. A single missed winner cannot establish that holding longer is a better rule.</p>",
    category: 'Advanced Systems',
  },
  {
    slug: 'taxation-basics-for-traders',
    title: 'Taxation Basics for Stocks, Derivatives, and Crypto',
    description: 'A general overview of the tax implications for different types of trading and investing activities.',
    date: '2025-02-14',
    imageId: 'insight-tax-flowchart',
    content: "<h2>Reconcile the records first</h2><p>A purchase for ₹1,000 and a sale for ₹1,150 give a ₹150 difference before recorded charges. That arithmetic alone does not establish taxable income. Instrument type, dates, residency and applicable rules can change the treatment.</p><h3>Try it yourself</h3><p>Create a row for transaction date, instrument, quantity, currency, proceeds and charges. Compare records against statements where applicable. Ask a qualified tax professional about classification and deductions before using the figures in a return.</p><h2>Prepare the question for a tax professional</h2><p>The ₹150 difference becomes ₹140 after ₹10 of cash charges in this worksheet. This is a cash reconciliation, not a determination that a charge is deductible. Retain the transaction records, check the tax year and use current official guidance for the applicable instrument.</p>",
    category: 'Advanced Systems',
  },
  {"slug":"vwap-intraday-context","title":"Reading a session VWAP","description":"Compare a session average with an event anchor and see how volume changes the answer.","category":"Advanced Systems","date":"2026-11-19","imageId":"","content":"<h2>What the line measures</h2><p>A volume-weighted average price divides the sum of price times traded quantity by total quantity. I use it to ask where the activity in a sample took place. A session VWAP begins again at a defined session boundary. An anchored VWAP instead begins at a chosen event. Write the session, timezone, anchor and data feed in the margin before comparing two charts.</p><h2>Work through the three prints</h2><p>1. Multiply each price by its contracts. The contributions are 1,000, 3,060 and 2,020. 2. Divide 6,080 by 60 to get 101.33, rounded. 3. Anchor at the second print instead. The result is 5,080 divided by 50, or 101.60. The final print is 101 in both cases. Only the observations included in the average changed.</p><h2>Where it can mislead</h2><p>A deviation band describes dispersion under the chart platform’s chosen convention. Touching a band does not establish a reversal probability. A trend can keep printing near an outer band. Bar-based tools may use a representative bar price, so their result can differ from a trade-by-trade calculation.</p><h2>Practise on paper</h2><p>Double only the first print’s quantity. Before recalculating, predict which average will move. The session result becomes 7,080 ÷ 70 ≈ 101.14. The later anchor stays at 101.60. Explain why a dealer’s tick-weighted reading on spot FX would answer a different question.</p>"},
  {"slug":"order-flow-delta-and-feed-limits","title":"What delta can tell you about an auction","description":"Read a small footprint, accumulate delta and identify what the data cannot establish.","category":"Advanced Systems","date":"2026-11-19","imageId":"","content":"<h2>Choose a feed before interpreting colour</h2><p>Every matched trade has a buyer and a seller. Bid/ask delta classifies the initiating side of executed trades. Positive delta means more quantity classified as lifting the ask than hitting the bid. A footprint groups those executions by price. A volume profile adds quantity at each price over a selected period. Resting orders are a separate dataset.</p><h2>Reconstruct the sequence</h2><p>Start cumulative volume delta at zero. In A, 70 − 30 = +40. In B, 25 − 55 = −30. Cumulative delta finishes at +10 for 180 contracts traded. A later start at B alone would finish at −30. Write the reset point next to a CVD chart.</p><h2>Read effort alongside price</h2><p>Suppose A repeatedly trades at an upper price without advancing. Passive selling absorbing aggressive buying is one possible explanation. Fading aggressive buying on a later approach is more consistent with exhaustion. Aggregation can hide a quick reversal inside a bar. Neither observation identifies a participant or proves intent.</p><h2>Practise with a feed label</h2><p>Compare a centralised currency future, an index future or exchange-traded gold with a retail FX feed. Contracts on the exchange are executed quantity on that venue. Spot-FX ticks count activity on the sampled feed. Some tools infer trade side from smaller bars. Record the venue, contract, classification and reset before comparing two CVD lines. A CFD feed cannot reveal the complete institutional order book.</p>"},
  {"slug":"liquidity-sweeps-and-invalidation","title":"A range break, a reclaim and an invalidation","description":"Separate the printed prices from your interpretation of a move beyond a previous high.","category":"Market Mechanics","date":"2026-11-19","imageId":"","content":"<h2>Mark the boundary before revealing the bar</h2><p>In a fictional market with a 0.50 tick, a range ends at 100.00. A later bar trades at 101.00 and closes at 99.00. Traders sometimes call this a sweep and reclaim. The observable facts are the prior boundary, the excursion and the return inside. A candle does not show whose stops triggered.</p><h2>Compare two interpretations</h2><p>First draw the old range. Then mark the high separately from the close. Finally test an alternative bar that closes at 101.50. For this exercise, define acceptance in advance as two completed closes above 100. A single excursion meets neither that definition nor a promise of reversal.</p><h2>Write down what would change your reading</h2><p>If subsequent bars repeatedly close above the boundary, the failed-break interpretation weakens. A wider timeframe may still show a range while a short chart shows a trend. Illiquidity and wide spreads can make one print appear more meaningful than it is.</p><h2>Replay exercise</h2><p>Hide the next three bars and write a sentence describing each hypothesis and its invalidation. Reveal the closes one at a time. Score whether your rule was observable at the time. The fourth chart bar is a counterfactual, separate from the first path.</p>"},
  {"slug":"risk-and-position-sizing","title":"Sizing a hypothetical position from its risk","description":"Convert invalidation distance into ticks, contract risk and a whole-number position.","category":"Market Mechanics","date":"2026-11-19","imageId":"","content":"<h2>Keep distance, tick value and quantity separate</h2><p>An invalidation describes evidence that challenges an idea. A modelled exit price turns that distance into arithmetic. For a fictional contract, assume a 0.25-point tick, $2.50 per tick, and 3 points between the reference and exit. No real instrument or recommended allocation is implied.</p><h2>Calculate before rounding</h2><p>1. Three points divided by 0.25 gives 12 ticks. 2. Twelve ticks at $2.50 give $30 per contract. Add $2 in assumed round-trip costs. 3. Divide the fictional $100 budget by $32 and round down. Three contracts model $96. Four would model $128.</p><h2>Why actual loss can be larger</h2><p>A stop can execute beyond its trigger. A margin requirement is a deposit requirement and does not measure the loss at your chosen exit. Two correlated positions can expose the same account to one event. A prop evaluation may also define daily loss or trailing drawdown differently from a journal.</p><h2>Change one assumption</h2><p>Add a two-tick adverse fill per contract. The model becomes $37 per contract, so only two whole contracts fit the $100 budget. If the smallest contract exceeds a budget, record zero. Keep the original invalidation in the worksheet and explain what changed.</p>"},
  {"slug":"economic-events-rates-and-currencies","title":"From an economic release to a currency quote","description":"Follow expectations, rate repricing and the units in an exchange rate through one fictional event.","category":"Global Markets","date":"2026-11-19","imageId":"","content":"<h2>Start with the expectation</h2><p>A policy rate can rise and still fall short of expectations. Begin with the announced figure, the prior figure and a separately documented expectation. A currency quote also has two sides. Developments in either economy can affect the same price.</p><h2>Trace the fictional surprise</h2><p>The rate goes from 4.00% to 4.25%, a rise of 25 basis points. Relative to a 4.50% expectation it is a negative 25-basis-point surprise. Traders might revise their expected path for future rates downward while the current rate has increased. Check short yields and the statement before attributing a currency move to that channel.</p><h2>Translate a quote into an invoice</h2><p>If USD/INR moves from 82 to 81 in a separate example, an importer’s US$100 invoice falls from ₹8,200 to ₹8,100 before charges. The quote alone cannot tell you whether the driver was domestic policy, dollar demand or risk sentiment. The example is not a directional prediction.</p><h2>Make an event worksheet</h2><p>Create columns for expected, actual, surprise, two-year yield change and exchange-rate units. Add an alternative explanation and record what data is missing. Re-run the worksheet with the actual rate equal to expectations but the policy statement weaker than expected.</p>"},
];