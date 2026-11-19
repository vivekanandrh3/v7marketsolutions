'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useIndiaDay } from './seasonal-offer';
import { activeOffers, conditionalFee } from '@/lib/offers';
import prices from '@/lib/course-prices.json';

const money = (value: number) => '₹' + value.toLocaleString('en-IN', {maximumFractionDigits:2});
export function CourseEnquiry({course,message}: {course:keyof typeof prices; message:string}) {
  const offers = activeOffers(useIndiaDay());
  const [code, select] = useState('');
  const campaign = offers.find(c => c.code === code);
  const fee = prices[course];
  const details = campaign ? ' I would like to ask about ' + campaign.code + ' for ' + campaign.group +
    ' (' + campaign.percent + '% off; regular ' + money(fee) + ', conditional fee ' +
    money(conditionalFee(fee,campaign.percent)) + '). Please confirm my eligibility.' : '';
  return <>
    <p className="text-3xl font-bold font-headline">{money(fee)}<span className="block text-sm text-muted-foreground">Regular course fee</span></p>
    {offers.length > 0 && <div className="space-y-2">
      <label htmlFor={'offer-'+course}>Optional offer</label>
      <select id={'offer-'+course} className="block w-full border rounded bg-card p-2" value={campaign?.code || ''} onChange={e=>select(e.target.value)}>
        <option value="">Regular fee</option>
        {offers.map(c=><option key={c.code} value={c.code}>{c.code} · {c.percent}% for {c.group}</option>)}
      </select>
      <p className="text-sm">One code per enrolment. I confirm first-time or referral eligibility before payment. Offers cannot be combined.</p>
      {campaign && <p role="status">If approved, {money(conditionalFee(fee,campaign.percent))}. Valid through {campaign.end} in India.</p>}
    </div>}
    <Button asChild className="w-full font-bold"><a href={'https://wa.me/918317324956?text='+encodeURIComponent(message+details)} target="_blank" rel="noopener noreferrer">Discuss this pathway</a></Button>
  </>;
}
