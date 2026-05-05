import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Crypto Trading | Trade Popular Digital Assets',
  description: 'Trade Bitcoin, Ethereum, and other leading cryptocurrencies with tight spreads and 24/7 market access. Leverage the volatility of the digital economy.',
};

export default function CryptoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
