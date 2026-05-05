import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Forex Trading | Major, Minor & Exotic Pairs',
  description: 'Trade the global Forex market with ultra-low spreads and fast execution. Access 60+ currency pairs with institutional-grade liquidity.',
};

export default function ForexLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
