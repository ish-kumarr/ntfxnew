import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Risk Disclaimer | High-Risk Warning',
  description: 'Trading financial instruments carries a high level of risk. Ensure you understand the risks involved before trading with New Trade FX Services.',
};

export default function RiskLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
