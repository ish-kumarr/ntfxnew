import { Metadata } from 'next';
import { PagePlaceholder } from '@/components/page-placeholder';

export const metadata: Metadata = {
  title: 'Trading Academy | Learn to Trade | New Trade FX Services',
  description: 'Improve your trading knowledge with the New Trade FX Services Academy. Access beginner guides, trading strategy articles, and market analysis resources for all experience levels.',
};

export default function TradingAcademyPage() {
  return (
    <PagePlaceholder
      title="Learn the Fundamentals of Trading"
      message="Developing a solid understanding of financial markets through our comprehensive Academy."
      devNotes="Academy hub: Beginner guides, strategy articles, and market analysis resources."
    />
  );
}
