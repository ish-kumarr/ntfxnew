import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Deposit & Withdrawal | Secure Funding | New Trade FX Services',
  description: 'Fund your trading account quickly and securely at New Trade FX Services. Learn about our deposit and withdrawal processes, payment methods, and client fund protection measures.',
};

export default function FundingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
