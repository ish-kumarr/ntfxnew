import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trading Markets | Forex, Commodities, Indices & Crypto | New Trade FX',
  description: 'Access Forex, Metals, Commodities, Global Indices, Shares, and Cryptocurrencies through a single trading account on New Trade FX Services. Explore all tradable markets on our platform.',
};

export default function MarketsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
