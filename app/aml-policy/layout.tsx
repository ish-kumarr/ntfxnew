import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AML Policy | Anti-Money Laundering',
  description: 'Our commitment to preventing money laundering and financial crime. Learn about our AML and KYC procedures at New Trade FX Services.',
};

export default function AMLLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
