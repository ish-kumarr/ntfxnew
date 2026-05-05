import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trading Platforms | Professional Infrastructure',
  description: 'Trade on industry-leading platforms including MetaTrader 5 (MT5) and our high-performance mobile app. Experience sub-30ms execution and advanced charting.',
};

export default function PlatformsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
