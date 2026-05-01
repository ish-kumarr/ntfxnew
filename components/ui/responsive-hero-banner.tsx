"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ShinyButton } from './shiny-button';

interface NavLink {
    label: string;
    href: string;
    isActive?: boolean;
}

interface Partner {
    logoUrl: string;
    href: string;
}

interface ResponsiveHeroBannerProps {
    logoUrl?: string;
    backgroundImageUrl?: string;
    navLinks?: NavLink[];
    ctaButtonText?: string;
    ctaButtonHref?: string;
    badgeText?: string;
    badgeLabel?: string;
    title?: React.ReactNode | string;
    titleLine2?: React.ReactNode | string;
    description?: React.ReactNode | string;
    primaryButtonText?: string;
    primaryButtonHref?: string;
    secondaryButtonText?: string;
    secondaryButtonHref?: string;
    partnersTitle?: string;
    partners?: Partner[];
}

const ResponsiveHeroBanner: React.FC<ResponsiveHeroBannerProps> = ({
    logoUrl,
    backgroundImageUrl = "",
    navLinks = [
        { label: "Home", href: "#", isActive: true },
        { label: "Missions", href: "#" },
        { label: "Destinations", href: "#" },
        { label: "Technology", href: "#" },
        { label: "Book Flight", href: "#" }
    ],
    ctaButtonText = "Reserve Seat",
    ctaButtonHref = "#",
    badgeLabel = "New",
    badgeText = "First Commercial Flight to Mars 2026",
    title = "Journey Beyond Earth",
    titleLine2 = "Into the Cosmos",
    description = "Experience the cosmos like never before. Our advanced spacecraft and cutting-edge technology make interplanetary travel accessible, safe, and unforgettable.",
    primaryButtonText = "Book Your Journey",
    primaryButtonHref = "#",
    secondaryButtonText = "Watch Launch",
    secondaryButtonHref = "#",
    partnersTitle = "Partnering with leading space agencies worldwide",
    partners = [
        { logoUrl: "/assets/depositwith/tab-visa.png", href: "#" },
        { logoUrl: "/assets/depositwith/tab-mastercard.png", href: "#" },
        { logoUrl: "/assets/depositwith/tab-neteller.png", href: "#" },
        { logoUrl: "/assets/depositwith/tab-skrill.png", href: "#" },
        { logoUrl: "/assets/depositwith/tab-webmoney.png", href: "#" },
        { logoUrl: "/assets/depositwith/pm-04.svg", href: "#" }
    ]
}) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <section className="w-full isolate min-h-screen overflow-hidden relative flex flex-col justify-center items-center bg-[#060B1F]">
            {backgroundImageUrl ? (
                <>
                    <img
                        src={backgroundImageUrl}
                        alt=""
                        className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0"
                    />
                    {/* Beautiful strong gradient mask at the bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060B1F] via-[#060B1F]/80 via-30% to-transparent pointer-events-none" />
                </>
            ) : (
                /* New Trade FX Brand Blue Background */
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-[#2E62FF]/[0.12] rounded-full blur-[150px]" />
                    <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#4a6cf7]/[0.08] rounded-full blur-[120px]" />
                    <div className="absolute inset-0 opacity-[0.04]" style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: '60px 60px'
                    }} />
                    <div className="absolute inset-0 opacity-[0.02]" style={{
                        backgroundImage: `conic-gradient(from 0deg at 50% 30%, transparent 0deg, rgba(255,255,255,0.15) 1deg, transparent 2deg, transparent 10deg, rgba(255,255,255,0.1) 11deg, transparent 12deg, transparent 20deg)`
                    }} />
                </div>
            )}
            <div className="pointer-events-none absolute inset-0 ring-1 ring-black/30" />

            <header className="z-10 xl:top-4 relative hidden">
                <div className="mx-6">
                    <div className="flex items-center justify-between pt-4">
                        <a
                            href="#"
                            className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-cover rounded"
                            style={{ backgroundImage: `url(${logoUrl})` }}
                        />

                        <nav className="hidden md:flex items-center gap-2">
                            <div className="flex items-center gap-1 rounded-full bg-white/5 px-1 py-1 ring-1 ring-white/10 backdrop-blur">
                                {navLinks.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.href}
                                        className={`px-3 py-2 text-sm font-medium hover:text-white font-sans transition-colors ${link.isActive ? 'text-white/90' : 'text-white/80'
                                            }`}
                                    >
                                        {link.label}
                                    </a>
                                ))}
                                <a
                                    href={ctaButtonHref}
                                    className="ml-1 inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-2 text-sm font-medium text-neutral-900 hover:bg-white/90 font-sans transition-colors"
                                >
                                    {ctaButtonText}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                                        <path d="M7 7h10v10" />
                                        <path d="M7 17 17 7" />
                                    </svg>
                                </a>
                            </div>
                        </nav>

                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 backdrop-blur"
                            aria-expanded={mobileMenuOpen}
                            aria-label="Toggle menu"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-white/90">
                                <path d="M4 5h16" />
                                <path d="M4 12h16" />
                                <path d="M4 19h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            <div className="z-10 relative w-full flex flex-col items-center justify-center">
                <div className="max-w-7xl mx-auto pt-36 px-6 pb-16">
                    <div className="mx-auto max-w-3xl text-center">
                        <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-white/10 px-2.5 py-2 ring-1 ring-white/15 backdrop-blur animate-fade-slide-in-1" style={{ animationDelay: '0ms', animationFillMode: 'both' }}>
                            <span className="inline-flex items-center text-xs font-medium text-neutral-900 bg-white/90 rounded-full py-0.5 px-2 font-sans">
                                {badgeLabel}
                            </span>
                            <span className="text-sm font-medium text-white/90 font-sans">
                                {badgeText}
                            </span>
                        </div>

                        <h1 className="sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-4xl text-white tracking-tight font-sans font-bold animate-fade-slide-in-2" style={{ animationDelay: '100ms', animationFillMode: 'both' }}>
                            {title}
                            <br className="hidden sm:block" />
                            {titleLine2}
                        </h1>

                        <p className="sm:text-lg animate-fade-slide-in-3 text-base text-white/80 max-w-2xl mt-6 mx-auto" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
                            {description}
                        </p>

                        <div className="flex flex-col sm:flex-row sm:gap-4 mt-10 gap-3 items-center justify-center animate-fade-slide-in-4" style={{ animationDelay: '300ms', animationFillMode: 'both' }}>
                            <Link href={primaryButtonHref} target="_blank">
                                <ShinyButton>
                                    {primaryButtonText}
                                </ShinyButton>
                            </Link>
                            <a
                                href={secondaryButtonHref}
                                className="inline-flex items-center gap-2 rounded-full bg-transparent px-5 py-3 text-sm font-medium text-white/90 hover:text-white font-sans transition-colors"
                            >
                                {secondaryButtonText}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                    <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="mx-auto mt-28 max-w-5xl">
                        <p className="animate-fade-slide-in-1 text-sm text-white/70 text-center" style={{ animationDelay: '400ms', animationFillMode: 'both' }}>
                            {partnersTitle}
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 animate-fade-slide-in-2 text-white/70 mt-6 items-center justify-items-center gap-4" style={{ animationDelay: '500ms', animationFillMode: 'both' }}>
                            {partners.map((partner, index) => (
                                <div
                                    key={index}
                                    className="inline-flex items-center justify-center bg-center w-[110px] h-[44px] bg-contain bg-no-repeat bg-white rounded-full opacity-80 shadow-[0_4px_12px_rgba(255,255,255,0.05)] border border-white/20 p-0.5"
                                    style={{ 
                                        backgroundImage: `url(${partner.logoUrl})`,
                                        backgroundOrigin: 'content-box'
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResponsiveHeroBanner;
