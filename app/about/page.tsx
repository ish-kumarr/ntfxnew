import { Metadata } from 'next';
import { PagePlaceholder } from '@/components/page-placeholder';

export const metadata: Metadata = {
  title: 'About New Trade FX Services | Our Mission & Vision',
  description: 'Learn about New Trade FX Services — a dedicated online trading platform empowering traders with advanced tools, transparent pricing, and secure infrastructure to access global financial markets.',
};

export default function OurPhilosophyPage() {
  return (
    <PagePlaceholder
      title="About New Trade FX Services"
      message="Empowering traders with advanced tools, transparent pricing, and secure infrastructure."
      devNotes="Company mission, vision, and team values. Merging trust with fintech innovation."
    />
  );
}
