import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Indices Trading | Global Stock Market Access',
  description: 'Trade the world\'s leading stock indices including the S&P 500, NASDAQ, and FTSE 100. Benefit from low commissions and deep liquidity.',
};

export default function IndicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
