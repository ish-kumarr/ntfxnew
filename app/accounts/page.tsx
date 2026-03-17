import { Metadata } from 'next';
import { PagePlaceholder } from '@/components/page-placeholder';

export const metadata: Metadata = {
  title: 'Trading Account Types | Standard, Pro & VIP | New Trade FX Services',
  description: 'Choose from Standard, Professional, or VIP trading accounts at New Trade FX Services. Compare features, spreads, and tools to find the right account for your trading style.',
};

export default function AccountStructuresPage() {
  return (
    <PagePlaceholder
      title="Flexible Trading Accounts for Every Trader"
      message="Choose from Standard, Professional, or VIP accounts designed for your style."
      devNotes="Tailored models designed for professional capital management."
    />
  );
}
