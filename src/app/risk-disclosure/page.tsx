export default function RiskDisclosurePage() {
  const principles = [
    {
      title: "Trading Involves Risk",
      description: "Every trade carries inherent risk. The market is a dynamic environment, and outcomes are never certain. Successful trading is about managing this risk, not avoiding it."
    },
    {
      title: "Losses Are Part of Markets",
      description: "Even the most experienced traders have losing trades. Losses are a natural and unavoidable part of the process. The key is to ensure they are managed and kept smaller than the wins."
    },
    {
      title: "No Guaranteed Returns",
      description: "We will never promise guaranteed profits. Such claims are unrealistic and misleading. Our focus is on teaching a durable process and a professional mindset."
    },
    {
      title: "Educational Purpose Only",
      description: "All content, from articles to guides, is for educational and informational purposes. We provide a framework for analysis, not a signal to buy or sell."
    },
    {
      title: "Not Investment Advice",
      description: "We are educators, not financial advisors. The information shared is based on our experience and should not be considered personalized investment advice for your specific situation."
    },
    {
      title: "Returns Require Patience",
      description: "Meaningful results in trading are not built overnight. They are the product of consistent discipline, continuous learning, and patience over a significant period of time."
    }
  ];

  return (
    <div className="container max-w-4xl mx-auto py-16 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight font-headline sm:text-5xl">Risk & Transparency</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          An honest and realistic perspective on navigating the financial markets.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {principles.map((principle) => (
          <div key={principle.title} className="bg-card/50 p-6 rounded-lg border transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:shadow-primary/10">
            <h2 className="text-xl font-headline font-semibold text-primary">{principle.title}</h2>
            <p className="mt-2 text-muted-foreground">{principle.description}</p>
          </div>
        ))}
      </div>
       <div className="mt-12 text-center text-sm text-muted-foreground">
        <p>Your trading journey is your own. Our goal is to empower you with the skills and mindset to navigate it responsibly.</p>
      </div>
    </div>
  );
}
