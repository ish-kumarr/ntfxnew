import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trading Accounts | Flexible Options for All Traders',
  description: 'Choose the perfect trading account for your strategy. We offer ECN Pro, Standard, and Islamic accounts with competitive spreads and institutional-grade execution.',
};

export default function AccountsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
