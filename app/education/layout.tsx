import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trading Education | Learn to Trade',
  description: 'Master the markets with our comprehensive educational resources. From beginner basics to advanced strategies, we help you become a better trader.',
};

export default function EducationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
