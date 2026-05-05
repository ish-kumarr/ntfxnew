import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shares Trading | Institutional Access to Global Stocks',
  description: 'Trade thousands of global shares with fast execution and competitive commissions. Access the world\'s largest companies from a single platform.',
};

export default function SharesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
