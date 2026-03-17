import { Metadata } from 'next';
import { PagePlaceholder } from '@/components/page-placeholder';

export const metadata: Metadata = {
  title: 'Cryptocurrency Trading | Bitcoin & Ethereum | New Trade FX Services',
  description: 'Trade Bitcoin, Ethereum, and other cryptocurrencies on the New Trade FX Services platform. Access digital asset markets through a secure and professional trading environment.',
};

export default function CryptocurrenciesPage() {
  return (
    <PagePlaceholder
      title="Trade Cryptocurrencies Online"
      message="Secure, high-speed access to digital asset markets for the modern professional trader."
      devNotes="Real-time order book visualizations and deep liquidity indicators for digital assets."
    />
  );
}
