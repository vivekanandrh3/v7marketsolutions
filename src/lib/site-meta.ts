import type { Metadata } from 'next';
export const origin = 'https://www.v7marketsolutions.org';
export const pages = {
  "/": [
    "Financial education shaped around your questions",
    "Explore practical market lessons and plan a learning pathway with V7 Market Solutions."
  ],
  "/about": [
    "How I teach",
    "How I use worked examples and learning consultations to plan personal tuition."
  ],
  "/insights": [
    "Research & Insights",
    "Study market mechanics through fictional examples, charts, exercises and source notes."
  ],
  "/premium-training": [
    "Personal learning pathways",
    "Compare four flexible financial education pathways and their regular fees."
  ],
  "/contact": [
    "Contact and consultations",
    "Ask about a learning pathway or free masterclass through the existing contact channels."
  ],
  "/learning-modules": [
    "Financial Trading Ladder",
    "Follow four public study stages from ownership and risk to VWAP and order flow."
  ],
  "/compounding": [
    "Hypothetical compounding calculator",
    "Compare hypothetical returns, contributions and currencies under stated assumptions."
  ],
  "/risk-disclosure": [
    "Risk and transparency",
    "Read the educational scope and limitations of market examples."
  ],
  "/disclaimer": [
    "Educational disclaimer",
    "Read the scope of V7 educational material and responsibility for financial decisions."
  ]
};
export function pageMeta(path:string,title:string,description:string):Metadata {
  const url=origin+path;
  return {title,description,alternates:{canonical:url},openGraph:{title,description,url,siteName:'V7 Market Solutions',type:'website',images:[origin+'/images/market-screen.jpg']},twitter:{card:'summary_large_image',title,description,images:[origin+'/images/market-screen.jpg']}};
}
