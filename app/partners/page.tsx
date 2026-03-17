import { Metadata } from 'next';
import { PagePlaceholder } from '@/components/page-placeholder';

export const metadata: Metadata = {
  title: 'Partnership Program | IB & Affiliate Opportunities | New Trade FX',
  description: 'Join the New Trade FX Services Partnership Program. Earn commissions as an Introducing Broker, Affiliate Partner, or Master Partner by referring traders to our platform.',
};

export default function PartnerEcosystemPage() {
  return (
    <PagePlaceholder
      title="Grow Your Business with Our Partnership Program"
      message="Bespoke professional partnerships and high-performance referral models."
      devNotes="Introducing Broker (IB), Affiliate, and Master partnership portal access."
    />
  );
}
