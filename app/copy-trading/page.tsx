import { Metadata } from 'next';
import { PagePlaceholder } from '@/components/page-placeholder';

export const metadata: Metadata = {
  title: 'Copy Trading | Follow Expert Traders | New Trade FX Services',
  description: 'Use copy trading on New Trade FX Services to automatically replicate the trades of experienced investors. Learn from expert strategies while participating in global financial markets.',
};

export default function CopyTradingPage() {
  return (
    <PagePlaceholder
      title="Follow Experienced Traders with Copy Trading"
      message="Automatically replicate the trades of expert investors and learn from their strategies."
      devNotes="Connect account and begin automatically replicating expert trades."
    />
  );
}
