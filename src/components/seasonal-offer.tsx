'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import offer from '@/lib/promotions.json';

// Inclusive local calendar dates in India, independent of the visitor's timezone.
const calendar = new Intl.DateTimeFormat('sv-SE', {
  timeZone: 'Asia/Kolkata', year: 'numeric', month: '2-digit', day: '2-digit',
});

export function SeasonalOffer() {
  const [day, setDay] = useState('');
  useEffect(() => {
    const refresh = () => {
      const date = calendar.format(new Date());
      const month = Number(date.slice(5, 7));
      document.documentElement.dataset.season = month <= 2 || month === 12 ? 'winter'
        : month <= 5 ? 'summer' : month <= 9 ? 'monsoon' : 'autumn';
      setDay(date);
    };
    refresh();
    const timer = window.setInterval(refresh, 60000);
    return () => window.clearInterval(timer);
  }, []);
  if (!offer.enabled || !offer.message.trim() || !offer.startDate || !offer.endDate ||
      day < offer.startDate || day > offer.endDate) return null;
  const path = ['/premium-training', '/learning-modules', '/contact'].includes(offer.coursePath)
    ? offer.coursePath : '/premium-training';
  return <aside className="offer-banner"><span>{offer.message}</span> <Link href={path}>View details →</Link></aside>;
}
