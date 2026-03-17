'use client';

import React from 'react';
import { StickyBanner } from '@/components/ui/sticky-banner';

export function PromoBanner() {
    const handleClose = () => {
        // Dispatch custom event so Navbar can shift up
        window.dispatchEvent(new CustomEvent('banner-closed'));
    };

    return (
        <StickyBanner
            className="bg-gradient-to-r from-[#2E62FF] via-[#4F7BFF] to-[#22C55E]"
            onClose={handleClose}
        >
            <div className="flex items-center gap-2 sm:gap-3 text-white pr-6">
                <span className="text-base sm:text-lg">🎉</span>
                <p className="text-[11px] sm:text-sm font-semibold text-white/95 text-center leading-tight">
                    <span className="font-black">20% Deposit Bonus Offer</span>
                    <span className="hidden sm:inline"> — </span>
                    <br className="sm:hidden" />
                    <span className="text-white/80">Get a tradable bonus of up to $10,000 to support your trading activity.</span>
                    {' '}
                    <a
                        href="https://dashboard.tradefxservices.com/register"
                        target="_blank"
                        className="inline-flex items-center gap-1 font-black text-white underline underline-offset-2 decoration-white/40 hover:decoration-white transition-all"
                    >
                        Claim Now →
                    </a>
                </p>
            </div>
        </StickyBanner>
    );
}
