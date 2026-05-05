import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Market Insights & News | NTFx Blog',
  description: 'Stay ahead of the markets with our latest analysis, expert insights, and platform updates from the New Trade FX Services team.',
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
