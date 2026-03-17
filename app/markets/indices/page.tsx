import { Metadata } from 'next';
import { PagePlaceholder } from '@/components/page-placeholder';

export const metadata: Metadata = {
  title: 'Indices Trading | Trade Global Stock Indices | New Trade FX Services',
  description: 'Trade global stock market indices with New Trade FX Services. Gain exposure to the performance of major stock markets across Europe, Asia, and North America.',
};

export default function IndicesPage() {
  return (
    <PagePlaceholder
      title="Trade Global Stock Market Indices"
      message="Benchmark performance tracking across the world's leading equity markets."
      devNotes="Global index heatmaps and performance trackers for major global indices."
    />
  );
}
