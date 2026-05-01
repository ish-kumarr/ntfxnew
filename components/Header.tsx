'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PromoBanner } from './sections/PromoBanner';
import { Navbar } from './Navbar';

export function Header() {
    const [isBannerVisible, setIsBannerVisible] = useState(false);
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
        setIsBannerVisible(true);
    }, []);

    const handleBannerClose = () => {
        setIsBannerVisible(false);
    };

    if (!hasMounted) {
        return (
            <header className="fixed top-0 left-0 right-0 z-[100] w-full pointer-events-none" suppressHydrationWarning>
                <div className="pointer-events-none" suppressHydrationWarning>
                    <Navbar bannerVisible={false} />
                </div>
            </header>
        );
    }

    return (
        <motion.header 
            layout
            className="fixed top-0 left-0 right-0 z-[100] w-full pointer-events-none"
            suppressHydrationWarning
        >
            <AnimatePresence mode="popLayout">
                {isBannerVisible && (
                    <motion.div
                        key="promo-banner"
                        layout
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -100, opacity: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="pointer-events-auto"
                        suppressHydrationWarning
                    >
                        <PromoBanner onBannerClose={handleBannerClose} />
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div 
                layout
                className="pointer-events-none"
                transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                }}
                suppressHydrationWarning
            >
                <Navbar bannerVisible={isBannerVisible} />
            </motion.div>
        </motion.header>
    );
}
