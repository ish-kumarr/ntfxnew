import { Metadata } from 'next';
import { PagePlaceholder } from '@/components/page-placeholder';

export const metadata: Metadata = {
  title: 'Trading Markets | Forex, Commodities, Indices & Crypto | New Trade FX',
  description: 'Access Forex, commodities, global indices, and cryptocurrencies through a single trading account on New Trade FX Services. Explore all tradable markets on our platform.',
};

export default function GlobalMarketsPage() {
  return (
    <PagePlaceholder
      title="Explore Global Financial Markets"
      message="Access the world's most liquid financial markets with professional precision."
      devNotes="Primary landing for market categories: Forex, Commodities, Indices, Crypto."
    />
  );
}
