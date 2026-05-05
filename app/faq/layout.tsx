import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Trading Help',
  description: 'Find answers to common questions about account opening, deposits, withdrawals, trading platforms, and more at New Trade FX Services.',
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
