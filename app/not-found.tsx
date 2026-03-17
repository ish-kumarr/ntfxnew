import Link from 'next/link';
import { TradeFXLogo } from '@/components/tradefx-logo';

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-20">
      {/* Main container */}
      <div className="flex flex-col items-center gap-10 max-w-lg text-center">
        {/* Logo with glow effect */}
        <div className="relative">
          {/* Glow backdrop */}
          <div className="absolute inset-0 blur-2xl opacity-20 -z-10">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-accent"></div>
          </div>

          {/* Logo */}
          <div className="text-primary">
            <TradeFXLogo className="w-20 h-20 md:w-24 md:h-24" />
          </div>
        </div>

        {/* 404 Number */}
        <div className="space-y-4">
          <h1 className="text-7xl md:text-8xl font-bold tracking-tight bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            404
          </h1>

          {/* Decorative line */}
          <div className="h-1 w-16 mx-auto bg-gradient-to-r from-primary via-secondary to-accent rounded-full opacity-60"></div>
        </div>

        {/* Message */}
        <div className="space-y-4">
          <p className="text-lg md:text-xl font-medium text-foreground">
            Page Not Found
          </p>
          <p className="text-base text-muted-foreground font-light leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
          </p>
        </div>

        {/* Return button */}
        <Link
          href="/"
          className="mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-medium hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105 inline-block"
        >
          Return Home
        </Link>

        {/* Subtle accent elements */}
        <div className="pt-4 flex gap-1">
          <span className="w-2 h-2 rounded-full bg-primary opacity-60 animate-pulse"></span>
          <span className="w-2 h-2 rounded-full bg-secondary opacity-40"></span>
          <span className="w-2 h-2 rounded-full bg-accent opacity-30"></span>
        </div>
      </div>

      {/* Floating accent shapes in background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Top right accent */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-secondary/10 to-accent/5 rounded-full blur-3xl opacity-40"></div>

        {/* Bottom left accent */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-primary/10 to-secondary/5 rounded-full blur-3xl opacity-30"></div>
      </div>
    </div>
  );
}
