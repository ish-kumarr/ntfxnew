import { Hero } from '@/components/sections/Hero';
import { Markets } from '@/components/sections/Markets';
import { Marquee } from '@/components/sections/Marquee';
import { PromoBanner } from '@/components/sections/PromoBanner';
import { BonusSection } from '@/components/sections/BonusSection';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Journey } from '@/components/sections/Journey';
import { PlatformFeatures } from '@/components/sections/PlatformFeatures';
import { TradingPackages } from '@/components/sections/TradingPackages';
import { DownloadSection } from '@/components/sections/DownloadSection';
import { FAQSection } from '@/components/sections/FAQSection';

export default function Home() {
  return (
    <main className="relative bg-white min-h-screen">
      <PromoBanner />
      <Hero />
      <Marquee />
      <Markets />
      <BonusSection />
      <WhyChooseUs />
      <Journey />
      <PlatformFeatures />
      <TradingPackages />
      <DownloadSection />
      <FAQSection />
    </main>
  );
}
