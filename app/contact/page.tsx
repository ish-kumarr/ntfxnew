import { Metadata } from 'next';
import { PagePlaceholder } from '@/components/page-placeholder';

export const metadata: Metadata = {
  title: 'Contact New Trade FX Services | Customer Support',
  description: "Get in touch with the New Trade FX Services support team. We're available Monday to Friday to assist with account setup, platform questions, deposits, withdrawals, and general inquiries.",
};

export default function PrivateConciergePage() {
  return (
    <PagePlaceholder
      title="Get in Touch with New Trade FX Services"
      message="Professional support available Monday to Friday for all your trading inquiries."
      devNotes="Customer support contact details and business hours."
    />
  );
}
