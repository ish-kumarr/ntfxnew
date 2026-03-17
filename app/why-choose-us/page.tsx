import { Metadata } from 'next';
import { PagePlaceholder } from '@/components/page-placeholder';

export const metadata: Metadata = {
  title: 'Why Choose New Trade FX Services | Trusted Trading Platform',
  description: 'Discover why traders choose New Trade FX Services. Explore our reliable infrastructure, competitive trading conditions, professional tools, and dedicated customer support.',
};

export default function WhyChooseUsPage() {
  return (
    <PagePlaceholder
      title="Why Traders Choose New Trade FX Services"
      message="Experience professional-grade trading infrastructure, transparent conditions, and dedicated support."
      devNotes="Key differentiators: technology, transparency, support, tools."
    />
  );
}
