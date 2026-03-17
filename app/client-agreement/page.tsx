import { Metadata } from 'next';
import { PagePlaceholder } from '@/components/page-placeholder';

export const metadata: Metadata = {
  title: 'Client Agreement | New Trade FX Services',
  description: 'Trading policies and operational guidelines.',
};

export default function ClientAgreementPage() {
  return (
    <PagePlaceholder
      title="Client Agreement"
      message="Trading policies and operational guidelines for all registered clients."
      devNotes="Core agreement document governing platform usage and trading rules."
    />
  );
}
