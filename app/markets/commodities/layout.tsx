import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commodities Trading | Energy & Agriculture',
  description: 'Trade oil, natural gas, and soft commodities with competitive pricing. Diversify your portfolio with essential global resources.',
};

export default function CommoditiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
