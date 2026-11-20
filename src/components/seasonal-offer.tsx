'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { activeOffers, indiaDay } from '@/lib/offers';

export function useIndiaDay() {
  const [day, setDay] = useState('');
  useEffect(() => {
    let timer: number;
    const refresh = () => {
      window.clearTimeout(timer);
      const now = new Date();
      const today = indiaDay(now);
      setDay(today);
      const midnight = Date.parse(today + 'T00:00:00+05:30') + 86400000;
      timer = window.setTimeout(refresh, Math.max(1, midnight - now.getTime()));
    };
    refresh();
    document.addEventListener('visibilitychange', refresh);
    return () => { window.clearTimeout(timer); document.removeEventListener('visibilitychange', refresh); };
  }, []);
  return day;
}

export function SeasonalOffer() {
  const day = useIndiaDay();
  useEffect(() => {
    if (!day) return;
    const m = Number(day.slice(5,7));
    document.documentElement.dataset.season = m <= 2 || m === 12 ? 'winter'
      : m <= 5 ? 'summer' : m <= 9 ? 'monsoon' : 'autumn';
  }, [day]);
  if (!activeOffers(day).length) return null;
  return <aside className="offer-banner"><Link href="/premium-training">View current course offers and eligibility</Link></aside>;
}
