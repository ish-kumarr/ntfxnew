import Image from 'next/image';

export function TradeFXLogo({ className = "w-auto h-12" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src="/new tradefx logo wide rectangle.png"
        alt="TradeFX Logo"
        width={600}
        height={160}
        className="object-contain w-auto h-full"
        priority
      />
    </div>
  );
}

export function TradeFXIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <div className={`relative ${className} transition-opacity duration-300 hover:opacity-90`}>
      <Image
        src="/icon new tradefx (1000px x 1000px).png"
        alt="TradeFX Icon"
        width={100}
        height={100}
        className="object-contain"
        priority
      />
    </div>
  );
}
