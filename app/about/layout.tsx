import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Our Mission & Values',
  description: 'Learn about New Trade FX Services, our commitment to transparency, and how we provide traders with the best possible trading environment.',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
