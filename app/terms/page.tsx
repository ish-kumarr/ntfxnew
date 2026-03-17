import { Metadata } from 'next';
import { PagePlaceholder } from '@/components/page-placeholder';

export const metadata: Metadata = {
  title: 'Terms & Conditions | New Trade FX Services',
  description: 'Service usage policies and client responsibilities.',
};

export default function TermsPage() {
  return (
    <PagePlaceholder
      title="Terms and Conditions"
      message="Service usage policies and client responsibilities for all platform users."
      devNotes="Full terms and conditions documentation."
    />
  );
}
