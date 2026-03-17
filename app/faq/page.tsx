import { Metadata } from 'next';
import { PagePlaceholder } from '@/components/page-placeholder';

export const metadata: Metadata = {
  title: 'FAQ | Common Trading Questions | New Trade FX Services',
  description: 'Find answers to the most common questions about trading on New Trade FX Services. Learn about account setup, available markets, platform tools, risk, and more.',
};

export default function KnowledgeBasePage() {
  return (
    <PagePlaceholder
      title="Frequently Asked Questions"
      message="Find answers to common questions about our platform, services, and trading rules."
      devNotes="Common questions about account setup, markets, platform tools, and risk."
    />
  );
}
