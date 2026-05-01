import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export default function FeaturesSectionDemo() {
  const features = [
    {
      title: "Professional Tools",
      description:
        "Get access to the same high-end tools used by the world's biggest banks.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Lightning Fast",
      description:
        "Your trades happen in the blink of an eye, ensuring you never miss a move.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Best Prices",
      description:
        "We offer the lowest trading costs in the market so you keep more of your profit.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Always Online",
      description: "Our systems never sleep, so you can trade whenever you want, 24/7.",
      icon: <IconCloud />,
    },
    {
      title: "Trade Everything",
      description: "Access Forex, Crypto, Stocks, and more all from one simple account.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Real Support",
      description:
        "Friendly experts are ready to help you anytime, day or night, via live chat.",
      icon: <IconHelp />,
    },
    {
      title: "Instant Trading",
      description:
        "Buy or sell any amount instantly with zero delays and no hidden catches.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Smart Charts",
      description: "Easy-to-use professional charts and tools to help you trade like a pro.",
      icon: <IconHeart />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
