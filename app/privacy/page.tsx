import { Metadata } from 'next';
import { PagePlaceholder } from '@/components/page-placeholder';

export const metadata: Metadata = {
  title: 'Privacy Policy | New Trade FX Services',
  description: 'Data collection, usage, and protection standards.',
};

export default function PrivacyPage() {
  return (
    <PagePlaceholder
      title="Privacy Policy"
      message="Data collection, usage, and protection standards for all platform users."
      devNotes="Information about data security and client privacy rights."
    />
  );
}
