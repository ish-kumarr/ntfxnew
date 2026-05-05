'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

// ─── Route-specific teasers ─────────────────────────────────────
const pageTeasers: Record<string, { title: string; subtitle: string; accent: string }> = {
  '/': { title: 'Home', subtitle: 'Your gateway to global markets', accent: 'Trade Without Limits' },
  '/markets': { title: 'Markets', subtitle: 'Explore every asset class', accent: 'Global Access' },
  '/markets/forex': { title: 'Forex', subtitle: '70+ currency pairs · 0.0 pip spreads', accent: 'The Largest Market' },
  '/markets/commodities': { title: 'Commodities', subtitle: 'Gold, Oil & Agricultural futures', accent: 'Raw Power' },
  '/markets/indices': { title: 'Indices', subtitle: 'S&P 500, NASDAQ, FTSE & more', accent: 'Market Pulse' },
  '/markets/shares': { title: 'Shares', subtitle: 'Access global equities', accent: 'Ownership' },
  '/markets/crypto': { title: 'Crypto', subtitle: 'Bitcoin, Ethereum & beyond', accent: 'Digital Frontier' },
  '/markets/metals': { title: 'Metals', subtitle: 'Precious & industrial metals', accent: 'Safe Haven' },
  '/accounts': { title: 'Accounts', subtitle: 'Professional-grade structures', accent: 'Elite Access' },
  '/platforms': { title: 'Platforms', subtitle: 'MetaTrader 5 ecosystem', accent: 'Precision Tools' },
  '/about': { title: 'Our Vision', subtitle: 'The New TradeFX story', accent: 'Who We Are' },
  '/contact': { title: 'Contact', subtitle: 'Get in touch with our team', accent: 'Let\'s Talk' },
  '/education': { title: 'Academy', subtitle: 'Coming Soon: Elite Knowledge Hub', accent: 'Restricted Access' },
  '/partners': { title: 'Partners', subtitle: 'Institutional partnerships', accent: 'Grow Together' },
  '/deposit-withdrawal': { title: 'Funding', subtitle: 'Deposit & withdrawal options', accent: 'Seamless Flow' },
  '/faq': { title: 'FAQ', subtitle: 'Answers to common questions', accent: 'Quick Answers' },
  '/tools': { title: 'Tools', subtitle: 'Professional trading toolkit', accent: 'Empower Yourself' },
  '/copy-trading': { title: 'Copy Trading', subtitle: 'Mirror the best strategies', accent: 'Smart Money' },
  '/why-choose-us': { title: 'Why Us', subtitle: 'The New TradeFX difference', accent: 'Unfair Advantage' },
  '/economic-calendar': { title: 'Calendar', subtitle: 'Track market-moving events', accent: 'Stay Ahead' },
  '/blog': { title: 'Insights', subtitle: 'Market analysis & updates', accent: 'Stay Informed' },
  '/register': { title: 'Register', subtitle: 'Start your trading journey', accent: 'Join Us' },
  '/privacy': { title: 'Privacy', subtitle: 'Your data, your rights', accent: 'Transparency' },
  '/terms': { title: 'Terms', subtitle: 'Terms of service', accent: 'Legal' },
  '/risk-disclaimer': { title: 'Risk', subtitle: 'Important risk information', accent: 'Disclaimer' },
  '/deposit-bonus-terms': { title: 'Bonus Terms', subtitle: 'Deposit bonus conditions', accent: 'Promotions' },
};

const defaultTeaser = { title: 'Loading', subtitle: 'Preparing your experience', accent: 'New TradeFX' };

// ─── Staggered letter animation ─────────────────────────────────
function AnimatedTitle({ text, phase }: { text: string; phase: 'in' | 'out' }) {
  const letters = text.split('');
  const totalLetters = letters.length;

  return (
    <span className="inline-flex overflow-hidden">
      {letters.map((letter, i) => (
        <motion.span
          key={`${phase}-${i}`}
          initial={phase === 'in'
            ? { y: '120%', rotateX: -90, opacity: 0 }
            : { y: '0%', rotateX: 0, opacity: 1 }
          }
          animate={phase === 'in'
            ? { y: '0%', rotateX: 0, opacity: 1 }
            : { y: '-120%', rotateX: 90, opacity: 0 }
          }
          transition={{
            duration: 0.45,
            delay: phase === 'in'
              ? 0.15 + i * 0.035
              : (totalLetters - 1 - i) * 0.025,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block"
          style={{ transformOrigin: phase === 'in' ? 'bottom center' : 'top center' }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </span>
  );
}

// ─── Phases: IDLE → COVERING → NAVIGATING → SHOWING → HIDING → REVEALING → IDLE
type Phase = 'idle' | 'covering' | 'navigating' | 'showing' | 'hiding' | 'revealing';

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [phase, setPhase] = useState<Phase>('idle');
  const [currentTeaser, setCurrentTeaser] = useState(defaultTeaser);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const targetHref = useRef<string | null>(null);
  const isTransitioning = useRef(false);

  // Clean up
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // ─── Intercept all internal <a> clicks globally ───────────────
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // Don't intercept if transition is already running
      if (isTransitioning.current) return;

      // Find the closest <a> element
      const anchor = (e.target as HTMLElement).closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href) return;

      // Only intercept internal links (starting with /)
      if (!href.startsWith('/')) return;

      // Skip if same page
      if (href === pathname || href === pathname + '/') return;

      // Skip if modifier keys are held (new tab, etc.)
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      // Intercept! Prevent the default navigation
      e.preventDefault();
      e.stopPropagation();

      // Start the transition
      const teaser = pageTeasers[href] || defaultTeaser;
      setCurrentTeaser(teaser);
      targetHref.current = href;
      isTransitioning.current = true;
      setPhase('covering');
    };

    // Capture phase to intercept before Next.js Link handlers
    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, [pathname]);

  // ─── Phase state machine ──────────────────────────────────────
  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    switch (phase) {
      case 'covering':
        // Curtains closing — wait for animation to complete fully
        timeoutRef.current = setTimeout(() => {
          setPhase('navigating');
        }, 700);
        break;

      case 'navigating':
        // Curtains are fully closed — NOW navigate
        window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
        if (targetHref.current) {
          router.push(targetHref.current);
          targetHref.current = null;
        }
        // Small delay for React to process the new route
        timeoutRef.current = setTimeout(() => {
          setPhase('showing');
        }, 150);
        break;

      case 'showing':
        // Teaser is visible, letters animating in
        const showDuration = 1300 + Math.random() * 500;
        timeoutRef.current = setTimeout(() => {
          setPhase('hiding');
        }, showDuration);
        break;

      case 'hiding':
        // Letters animating OUT
        timeoutRef.current = setTimeout(() => {
          setPhase('revealing');
        }, 600);
        break;

      case 'revealing':
        // Curtains splitting open
        timeoutRef.current = setTimeout(() => {
          isTransitioning.current = false;
          setPhase('idle');
        }, 750);
        break;
    }
  }, [phase]);

  const isVisible = phase !== 'idle';
  const curtainsClosed = phase === 'covering' || phase === 'navigating' || phase === 'showing' || phase === 'hiding';
  const showContent = phase === 'showing' || phase === 'hiding';
  const contentPhase = phase === 'hiding' ? 'out' : 'in';

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            key="page-transition"
            className="fixed inset-0 z-[99999] pointer-events-auto"
          >
            {/* ── Top Curtain ── */}
            <motion.div
              initial={{ y: '-100%' }}
              animate={{ y: phase === 'revealing' ? '-100%' : '0%' }}
              transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
              className="absolute top-0 left-0 w-full h-1/2 bg-white z-10"
            />

            {/* ── Bottom Curtain ── */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: phase === 'revealing' ? '100%' : '0%' }}
              transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
              className="absolute bottom-0 left-0 w-full h-1/2 bg-white z-10"
            />

            {/* ── Horizon line at seam ── */}
            <motion.div
              animate={{
                scaleX: showContent ? 1 : 0,
                opacity: showContent ? 1 : 0,
              }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-1/2 left-[10%] w-[80%] h-[1px] bg-neutral-100 z-30 origin-center -translate-y-1/2"
            />

            {/* ── Main Teaser Content ── */}
            {showContent && (
              <div className="relative z-20 w-full h-full flex flex-col items-center justify-center bg-white">
                {/* Dot pattern */}
                <div
                  className="absolute inset-0 opacity-[0.012]"
                  style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #2E62FF 0.5px, transparent 0.5px)`,
                    backgroundSize: '32px 32px',
                  }}
                />

                <div className="relative flex flex-col items-center text-center px-6">
                  {/* Accent label */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={contentPhase === 'in' ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                    transition={{
                      duration: 0.35,
                      delay: contentPhase === 'in' ? 0.1 : 0,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mb-5"
                  >
                    <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.4em] text-[#2E62FF]/40">
                      {currentTeaser.accent}
                    </span>
                  </motion.div>

                  {/* Title — staggered letters */}
                  <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-[#0a0a0a] leading-[0.85] mb-4">
                    <AnimatedTitle text={currentTeaser.title} phase={contentPhase} />
                  </h1>

                  {/* Divider */}
                  <motion.div
                    animate={contentPhase === 'in' ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: contentPhase === 'in' ? 0.3 : 0,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#2E62FF]/30 to-transparent origin-center my-5"
                  />

                  {/* Subtitle */}
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={contentPhase === 'in' ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
                    transition={{
                      duration: 0.35,
                      delay: contentPhase === 'in' ? 0.45 : 0.05,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="text-[11px] md:text-[13px] font-medium text-neutral-300 tracking-wide"
                  >
                    {currentTeaser.subtitle}
                  </motion.p>

                  {/* Logo */}
                  <motion.div
                    animate={contentPhase === 'in' ? { opacity: 1 } : { opacity: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: contentPhase === 'in' ? 0.6 : 0,
                    }}
                    className="mt-12"
                  >
                    <Image
                      src="/new tradefx logo wide rectangle.png"
                      alt="TradeFX"
                      width={120}
                      height={32}
                      className="object-contain w-auto h-6 md:h-7 opacity-60"
                      priority
                    />
                  </motion.div>
                </div>

                {/* Corner brackets */}
                <motion.div
                  animate={contentPhase === 'in' ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: contentPhase === 'in' ? 0.15 : 0, duration: 0.3 }}
                >
                  <div className="absolute top-6 left-6 md:top-10 md:left-10 w-5 h-5 border-l-[1.5px] border-t-[1.5px] border-neutral-200" />
                  <div className="absolute top-6 right-6 md:top-10 md:right-10 w-5 h-5 border-r-[1.5px] border-t-[1.5px] border-neutral-200" />
                  <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 w-5 h-5 border-l-[1.5px] border-b-[1.5px] border-neutral-200" />
                  <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 w-5 h-5 border-r-[1.5px] border-b-[1.5px] border-neutral-200" />
                </motion.div>

                {/* Watermark */}
                <motion.div
                  animate={contentPhase === 'in' ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.3, delay: contentPhase === 'in' ? 0.5 : 0 }}
                  className="absolute bottom-6 md:bottom-10 left-0 w-full flex justify-center"
                >
                  <span className="text-[7px] font-bold text-neutral-200/80 uppercase tracking-[0.5em]">
                    New Trade FX Services
                  </span>
                </motion.div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {children}
    </>
  );
}
