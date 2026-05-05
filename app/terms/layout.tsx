import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Service Agreement',
  description: 'Read the terms and conditions governing the use of New Trade FX Services platforms and our trading services.',
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
