import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why Choose Us | The Elite Trading Choice',
  description: 'Discover why professional traders choose New Trade FX Services. Institutional-grade technology, transparent conditions, and human-centric support.',
};

export default function WhyChooseUsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
