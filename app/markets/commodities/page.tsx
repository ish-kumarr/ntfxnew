import { Metadata } from 'next';
import { PagePlaceholder } from '@/components/page-placeholder';

export const metadata: Metadata = {
  title: 'Commodities Trading | Gold, Silver & Oil | New Trade FX Services',
  description: 'Trade gold, silver, and crude oil through the New Trade FX Services platform. Access the most popular commodity markets with professional-grade tools.',
};

export default function CommoditiesPage() {
  return (
    <PagePlaceholder
      title="Trade Global Commodities"
      message="Strategic exposure to gold, silver, and energy markets with elite professional execution."
      devNotes="Charting for precious metals and energy benchmarks. Spot vs Futures trading."
    />
  );
}
