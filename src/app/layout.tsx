import type {Metadata} from 'next';
import './globals.css';
import { SeasonalOffer } from '@/components/seasonal-offer';
import { MessageCircle } from 'lucide-react';
import {cn} from '@/lib/utils';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'V7 MARKET SOLUTIONS',
  description: 'Professional trading education by a prop firm trader and market educator.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('min-h-screen bg-background font-body antialiased')}>
        <div className="relative flex min-h-dvh flex-col bg-background">
          <Header />
          <SeasonalOffer />
          <main className="flex-1">{children}</main>
          <Footer />
          <a className="whatsapp-contact" href="https://wa.me/918317324956" target="_blank" rel="noopener noreferrer" aria-label="Contact V7 on WhatsApp (opens in a new tab)">
            <MessageCircle size={21} aria-hidden="true" /><span>WhatsApp</span>
          </a>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
