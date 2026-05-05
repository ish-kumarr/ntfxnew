import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Metals Trading | Gold, Silver & Platinum',
  description: 'Trade precious metals with ultra-tight spreads and fast execution. Safe-haven assets like Gold and Silver available for 24-hour trading.',
};

export default function MetalsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
