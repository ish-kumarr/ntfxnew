import { Metadata } from 'next';
import { PagePlaceholder } from '@/components/page-placeholder';

export const metadata: Metadata = {
  title: 'Metals Trading | Gold, Silver & Platinum | New Trade FX Services',
  description: 'Trade precious metals with New Trade FX Services. Access Gold, Silver, and Platinum with competitive spreads and professional execution.',
};

export default function MetalsTradingPage() {
  return (
    <PagePlaceholder
      title="Precious Metals Trading"
      message="Institutional-grade liquidity on Gold, Silver, and Platinum with ultra-low spreads."
      devNotes="Real-time metal price charts and seasonal volatility indicators."
    />
  );
}
