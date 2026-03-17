import { Metadata } from 'next';
import { PagePlaceholder } from '@/components/page-placeholder';

export const metadata: Metadata = {
  title: 'Risk Disclaimer & Legal Information | New Trade FX Services',
  description: 'Read the full risk disclaimer and legal information for New Trade FX Services. Understand the risks involved in financial trading, our terms, privacy policy, and AML compliance.',
};

export default function RiskDisclaimerPage() {
  return (
    <PagePlaceholder
      title="Risk Disclaimer & Legal Information"
      message="Important legal and regulatory information governing the use of the trading platform."
      devNotes="Full risk disclaimer and compliance operational guidelines."
    />
  );
}
