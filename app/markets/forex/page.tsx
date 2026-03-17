import { Metadata } from 'next';
import { PagePlaceholder } from '@/components/page-placeholder';

export const metadata: Metadata = {
  title: 'Forex Trading | Trade Currency Pairs Online | New Trade FX Services',
  description: 'Trade Forex online with New Trade FX Services. Access major, minor, and exotic currency pairs with competitive spreads and professional execution.',
};

export default function ForexTradingPage() {
  return (
    <PagePlaceholder
      title="Forex Trading with New Trade FX Services"
      message="Interbank liquidity and ultra-low spreads on 70+ major and minor pairs."
      devNotes="Live pair listings, spread tracking, and technical analysis widgets."
    />
  );
}
