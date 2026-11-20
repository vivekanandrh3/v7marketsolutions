import { pageMeta, pages } from '@/lib/site-meta';
export const metadata = pageMeta('/disclaimer', pages['/disclaimer'][0], pages['/disclaimer'][1]);
export default function DisclaimerPage() {
  return (
    <div className="container max-w-4xl mx-auto py-16 md:py-24">
      <h1 className="text-4xl font-bold tracking-tight font-headline sm:text-5xl mb-8">Disclaimer</h1>
      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <p className="text-lg font-semibold text-foreground">
          All content provided on this website, V7 MARKET SOLUTIONS, is for informational and educational purposes only.
        </p>
        <p>
          The information and materials presented here are not, and should not be construed as, financial advice, investment advice, a recommendation to buy or sell any security, or an offer to provide investment advisory services. Trading and investing in financial markets, including but not limited to Forex, Commodities, Indices, Stocks, Futures, Options, and Cryptocurrencies, involves substantial risk of loss and is not suitable for every investor.
        </p>
        <p>
          I use my experience and hypothetical examples to teach market concepts. Past performance is not indicative of future results. The strategies and concepts discussed may not be suitable for your personal financial situation, risk tolerance, or investment objectives.
        </p>
        <p>
          I help learners choose educational topics. Questions about specific investments, portfolio allocation, tax treatment or personal eligibility to trade require an appropriately qualified professional. For market advice in India, you can check SEBI’s investor guidance.
        </p>
        <p><a href="https://investor.sebi.gov.in/investment_advisor.html" className="underline text-primary">SEBI · Understanding investment advisers</a>
        </p>
      </div>
    </div>
  );
}
