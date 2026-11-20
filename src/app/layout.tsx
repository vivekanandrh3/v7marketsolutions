import type {Metadata} from 'next';
import './globals.css';
import { SeasonalOffer } from '@/components/seasonal-offer';
import { MessageCircle } from 'lucide-react';
import {cn} from '@/lib/utils';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.v7marketsolutions.org'),
  title: {default:'V7 Market Solutions',template:'%s | V7 Market Solutions'},
  description: 'Personal financial education through consultation, worked examples and deliberate practice.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
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
