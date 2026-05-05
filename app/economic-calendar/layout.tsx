import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Economic Calendar | Key Market Events',
  description: 'Stay updated with the latest economic releases, central bank meetings, and market-moving events with our real-time economic calendar.',
};

export default function CalendarLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
