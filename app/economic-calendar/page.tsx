import { Metadata } from 'next';
import { PagePlaceholder } from '@/components/page-placeholder';

export const metadata: Metadata = {
  title: 'Economic Calendar | Global Market Events | New Trade FX Services',
  description: 'Stay informed with the New Trade FX Services Economic Calendar. Track central bank decisions, employment reports, inflation data, and other high-impact global economic events.',
};

export default function EconomicCalendarPage() {
  return (
    <PagePlaceholder
      title="Stay Updated with Global Economic Events"
      message="Track high-impact news and decisions that move the global financial markets."
      devNotes="Real-time economic calendar feed with volatility impact indicators."
    />
  );
}
