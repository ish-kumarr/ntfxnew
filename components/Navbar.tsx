'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { TradeFXLogo } from './tradefx-logo';
import { cn } from '@/lib/utils';
import { ChevronDown, ExternalLink, Globe, LayoutGrid, Menu, TrendingUp, Users, X } from 'lucide-react';

const products = [
    {
        title: 'Markets',
        href: '/markets',
        description: 'Explore our range of global financial markets.',
        icon: <Globe className="w-4 h-4" />,
        items: [
            { name: 'Forex', href: '/markets/forex' },
            { name: 'Commodities', href: '/markets/commodities' },
            { name: 'Indices', href: '/markets/indices' },
            { name: 'Shares', href: '/markets/shares' },
            { name: 'Cryptocurrencies', href: '/markets/crypto' },
        ]
    },
    {
        title: 'Accounts',
        href: '/accounts',
        description: 'Professional-grade account structures.',
        icon: <Users className="w-4 h-4" />,
        items: [
            { name: 'Professional Accounts', href: '/accounts#professional' },
            { name: 'Elite Access', href: '/accounts#elite' },
            { name: 'Account Funding', href: '/funding' },
        ]
    },
    {
        title: 'Platforms',
        href: '/platforms',
        description: 'Elite trading infrastructure and technology.',
        icon: <LayoutGrid className="w-4 h-4" />,
        items: [
            { name: 'Trading Desktop', href: '/platforms#desktop' },
            { name: 'Mobile Elite', href: '/platforms#mobile' },
            { name: 'Advanced API', href: '/platforms#api' },
        ]
    },
    {
        title: 'Academy',
        href: '/education',
        description: 'Elite trading education and market insights.',
        icon: <TrendingUp className="w-4 h-4" />,
        items: [
            { name: 'Education Hub', href: '/education' },
            { name: 'Market Analysis', href: '/tools' },
            { name: 'Economic Calendar', href: '/economic-calendar' },
            { name: 'Blog & Insights', href: '/blog' },
        ]
    }
];

export function Navbar() {
    const [activeItem, setActiveItem] = useState<number | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [bannerVisible, setBannerVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        const handleBannerClose = () => {
            setBannerVisible(false);
        };
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('banner-closed', handleBannerClose);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('banner-closed', handleBannerClose);
        };
    }, []);

    return (
        <div className={cn(
            "fixed left-0 right-0 z-[100] px-6 pointer-events-none transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
            bannerVisible ? "top-16" : "top-6"
        )}>
            <div className="flex justify-center max-w-7xl mx-auto">
                <nav className={cn(
                    "bg-white border border-white/20 px-6 py-2.5 rounded-full pointer-events-auto flex items-center justify-between lg:justify-start w-full lg:w-auto lg:gap-12 transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)]",
                    isScrolled && "bg-white border-primary/5 py-2 shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
                )}>
                    {/* Logo Section */}
                    <Link href="/" className="shrink-0 flex items-center transition-opacity hover:opacity-90">
                        <TradeFXLogo className="h-9 md:h-12 w-auto" />
                    </Link>

                    {/* Desktop Links (Hidden on Mobile) */}
                    <div className="hidden lg:flex items-center gap-1">
                        {products.map((product, idx) => (
                            <div
                                key={product.title}
                                onMouseEnter={() => setActiveItem(idx)}
                                onMouseLeave={() => setActiveItem(null)}
                                className="relative py-2 px-4 cursor-pointer"
                            >
                                <Link href={product.href} className="flex items-center gap-1.5 group/item">
                                    <span className="text-[13px] font-bold tracking-tight text-foreground/80 group-hover/item:text-primary transition-colors">
                                        {product.title}
                                    </span>
                                    <ChevronDown className={cn(
                                        "w-3.5 h-3.5 text-foreground/30 transition-transform duration-300",
                                        activeItem === idx && "rotate-180 text-primary"
                                    )} />
                                </Link>

                                <AnimatePresence>
                                    {activeItem === idx && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                            transition={{ duration: 0.2, ease: "easeOut" }}
                                            className="absolute top-full left-1/2 -translate-x-1/2 pt-6"
                                        >
                                            <div className="bg-white/98 backdrop-blur-2xl p-2 min-w-[280px] rounded-[2rem] border border-primary/5 shadow-2xl">
                                                <div className="p-4 border-b border-primary/5 mb-2">
                                                    <div className="flex items-center gap-2 text-primary font-black mb-1">
                                                        {product.icon}
                                                        <span className="text-[10px] uppercase tracking-widest">{product.title}</span>
                                                    </div>
                                                    <p className="text-[11px] text-muted-foreground leading-tight">
                                                        {product.description}
                                                    </p>
                                                </div>
                                                <div className="grid gap-0.5">
                                                    {product.items.map((item) => (
                                                        <Link
                                                            key={item.href}
                                                            href={item.href}
                                                            className="px-4 py-3 rounded-2xl text-[13px] font-bold hover:bg-primary/5 hover:text-primary transition-all flex items-center justify-between group/link"
                                                        >
                                                            {item.name}
                                                            <ChevronDown className="w-3 h-3 rotate-[270deg] opacity-0 group-hover/link:opacity-40 transition-opacity" />
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}

                        <Link
                            href="/why-choose-us"
                            className="py-2 px-4 transition-colors text-[13px] font-bold text-foreground/80 hover:text-primary"
                        >
                            Our Vision
                        </Link>
                    </div>

                    {/* Action Buttons & Mobile Toggle */}
                    <div className="flex items-center gap-2">
                        <Link
                            href="https://dashboard.tradefxservices.com/"
                            target="_blank"
                            className="hidden lg:flex text-[13px] font-black px-5 py-2 rounded-full hover:bg-primary/5 transition-colors text-foreground/80"
                        >
                            Client Login
                        </Link>
                        <Link
                            href="https://dashboard.tradefxservices.com/register"
                            target="_blank"
                            className="hidden lg:flex premium-gradient text-white text-[13px] font-black px-6 py-2.5 rounded-full items-center gap-2 shadow-lg shadow-primary/10 hover:shadow-primary/20 hover:-translate-y-0.5 active:translate-y-0 transition-all shrink-0 shimmer-button"
                        >
                            Open Account
                            <ExternalLink className="w-3.5 h-3.5" />
                        </Link>

                        {/* Mobile Menu Toggle (Always accessible on mobile) */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-3 rounded-full bg-primary/5 text-primary hover:bg-primary/10 transition-all active:scale-95 ml-2"
                        >
                            {isMobileMenuOpen ? <X className="w-5 h-5 md:w-6 md:h-6" /> : <Menu className="w-5 h-5 md:w-6 md:h-6" />}
                        </button>
                    </div>
                </nav>
            </div>

            {/* Reimagined Mobile Menu Overlay - Full Screen Impact */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-white z-[90] lg:hidden pointer-events-auto flex flex-col"
                    >
                        {/* Dedicated Mobile Header inside Menu */}
                        <div className="flex items-center justify-between px-8 pt-8 pb-4 bg-white/95 backdrop-blur-xl sticky top-0 z-[100]">
                            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                                <TradeFXLogo className="h-12 w-auto" />
                            </Link>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="p-3 rounded-full bg-primary/5 text-primary active:scale-90 transition-transform shadow-sm"
                            >
                                <X className="w-8 h-8" />
                            </button>
                        </div>

                        {/* Scrollable Content Area */}
                        <div className="flex-1 overflow-y-auto px-8 relative custom-scrollbar">
                            {/* Background elements */}
                            <div className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 -z-10"></div>

                            <div className="space-y-10 pt-6 pb-48">
                                {products.map((product) => (
                                    <div key={product.title} className="space-y-4">
                                        <Link
                                            href={product.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="flex items-center gap-3 active:opacity-70 transition-opacity"
                                        >
                                            <div className="w-8 h-8 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
                                                {product.icon}
                                            </div>
                                            <span className="text-xs uppercase tracking-[0.3em] font-black text-primary/60">{product.title}</span>
                                        </Link>
                                        <div className="grid gap-2">
                                            {product.items.map((item) => (
                                                <Link
                                                    key={item.href}
                                                    href={item.href}
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                    className="px-6 py-4 rounded-3xl text-lg font-black bg-primary/[0.03] active:bg-primary/10 transition-colors flex items-center justify-between group"
                                                >
                                                    {item.name}
                                                    <ChevronDown className="w-5 h-5 rotate-[270deg] opacity-20 group-active:opacity-100 transition-opacity" />
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ))}

                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
                                            <TrendingUp className="w-4 h-4" />
                                        </div>
                                        <span className="text-xs uppercase tracking-[0.3em] font-black text-primary/60">Company</span>
                                    </div>
                                    <Link
                                        href="/why-choose-us"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="px-6 py-4 rounded-3xl text-lg font-black bg-primary/[0.03] active:bg-primary/10 transition-colors flex items-center justify-between group"
                                    >
                                        Our Philosophy
                                        <ChevronDown className="w-5 h-5 rotate-[270deg] opacity-20 group-active:opacity-100 transition-opacity" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Fixed Action Center with Progressive Blur Backdrop */}
                        <div className="absolute bottom-0 left-0 right-0 z-[100] px-8 pb-10 pt-32 pointer-events-none">
                            {/* Skiper-style Progressive Blur Layers - Intensified */}
                            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/98 to-transparent -z-10 h-full"></div>
                            <div className="absolute inset-0 backdrop-blur-[4px] [mask-image:linear-gradient(to_top,black,transparent)] -z-10 h-full"></div>
                            <div className="absolute inset-0 backdrop-blur-[12px] [mask-image:linear-gradient(to_top,black_50%,transparent_90%)] -z-10 h-full"></div>
                            <div className="absolute inset-0 backdrop-blur-[24px] [mask-image:linear-gradient(to_top,black_30%,transparent_80%)] -z-10 h-full"></div>

                            <div className="space-y-4 pointer-events-auto">
                                <Link
                                    href="https://dashboard.tradefxservices.com/register"
                                    target="_blank"
                                    className="w-full premium-gradient text-white py-5 rounded-[2rem] font-black text-center flex items-center justify-center gap-3 shadow-[0_10px_40px_-10px_rgba(46,98,255,0.5)] active:scale-[0.98] transition-all text-lg shimmer-button"
                                >
                                    Start Trading Now
                                    <ExternalLink className="w-5 h-5" />
                                </Link>
                                <Link
                                    href="https://dashboard.tradefxservices.com/"
                                    target="_blank"
                                    className="w-full bg-white border border-primary/10 text-primary py-5 rounded-[2rem] font-black text-center flex items-center justify-center gap-3 shadow-xl shadow-primary/5 active:bg-primary/5 transition-all text-lg"
                                >
                                    Access Client Portal
                                    <TrendingUp className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
