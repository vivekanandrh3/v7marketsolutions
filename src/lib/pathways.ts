export const pathways = [
  {
    "id": "foundations",
    "title": "Market Foundations & Risk",
    "level": "If the terms on a chart are new to you, begin with what you own or owe. No chart-reading experience is assumed.",
    "example": "Compare buying ten fictional shares with lending the same amount through a bond. Separate the cash received from a change in the quoted price.",
    "topics": [
      "Ownership, lending and market orders",
      "Bid, ask, spread and transaction costs",
      "Recording risk in rupees before a paper exercise"
    ],
    "message": "I needed to know more about foundations and money management."
  },
  {
    "id": "patterns",
    "title": "Price Action & Technical Analysis",
    "level": "A useful starting point if you can read OHLC candles but find that the same pattern behaves differently across charts.",
    "example": "Mark yesterday’s range before revealing the next bars. Compare a close back inside the range with two closes outside. Record what would contradict each interpretation.",
    "topics": [
      "Candles in context and multi-timeframe structure",
      "Ranges, sweeps and alternative explanations",
      "Invalidation and journal-based review"
    ],
    "message": "I needed to know more about precision trading, patterns, and candlesticks."
  },
  {
    "id": "derivatives",
    "title": "Derivatives & Risk Strategies",
    "level": "If you understand spot price and percentage change, explore what changes when a contract has a multiplier or an expiry.",
    "example": "Draw the expiry payoff of a fictional protective put. Account for its premium, then distinguish the expiry diagram from the price of the option before expiry.",
    "topics": [
      "Contract size, margin and expiry",
      "Option payoffs, volatility and time value",
      "Hedging trade-offs and residual exposure"
    ],
    "message": "I needed to know more about futures & options strategy."
  },
  {
    "id": "global",
    "title": "Elite Global Trading: Forex, CFDs & Order Flow",
    "level": "For learners familiar with chart structure, contract size and basic risk arithmetic who want to interpret intraday participation.",
    "example": "Compare a session VWAP on an exchange-traded currency future with a dealer’s spot-FX tick chart. Describe what each feed counts before interpreting a move.",
    "topics": [
      "Spot FX and CFD structure, trading sessions and higher-timeframe context",
      "Session and anchored VWAP, deviation bands and anchor choice",
      "Liquidity, volume profile and participation by price",
      "Bid/ask volume, delta, cumulative delta and footprints",
      "Absorption versus exhaustion and limits of inference",
      "Intraday invalidation, trade management, evaluation rules and trading psychology"
    ],
    "message": "I needed to know more about elite global trading."
  }
] as const;
