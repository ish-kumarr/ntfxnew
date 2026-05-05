import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | 24/5 Expert Support',
  description: 'Have questions? Our support team is here to help. Contact us via email, phone, or live chat for immediate assistance with your trading account.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
