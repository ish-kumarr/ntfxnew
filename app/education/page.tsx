import { Metadata } from 'next';
import { ComingSoon } from '@/components/ui/coming-soon';

export const metadata: Metadata = {
  title: 'Trading Academy | Coming Soon | New Trade FX Services',
  description: 'Our Trading Academy is currently under development. Stay tuned for institutional-grade educational content, market analysis, and trading strategies.',
};

export default function TradingAcademyPage() {
  return <ComingSoon />;
}
