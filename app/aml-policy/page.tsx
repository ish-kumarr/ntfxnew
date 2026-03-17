import { Metadata } from 'next';
import { PagePlaceholder } from '@/components/page-placeholder';

export const metadata: Metadata = {
  title: 'AML Policy | New Trade FX Services',
  description: 'Anti-money laundering compliance procedures.',
};

export default function AmlPolicyPage() {
  return (
    <PagePlaceholder
      title="AML Policy"
      message="Anti-money laundering compliance procedures and documentation requirements."
      devNotes="Anti-money laundering compliance procedures and standards."
    />
  );
}
