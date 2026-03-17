'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronLeft, ShieldCheck, Clock, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TermsAndConditions() {
    return (
        <main className="min-h-screen bg-white pb-32 text-[#1E293B] selection:bg-[#2E62FF]/10 selection:text-[#2E62FF]">
            {/* Professional Navigation */}
            <nav className="border-b border-[#F1F5F9] bg-white/80 backdrop-blur-xl sticky top-0 z-50">
                <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-[10px] font-black text-[#64748B] hover:text-[#0F172A] transition-all uppercase tracking-[0.2em] group"
                    >
                        <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        Platform Home
                    </Link>
                    <div className="flex items-center gap-3">
                        <div className="px-2 py-0.5 rounded bg-[#2E62FF]/5 border border-[#2E62FF]/10">
                            <span className="text-[9px] font-black uppercase tracking-widest text-[#2E62FF]">Promotion Policy</span>
                        </div>
                        <div className="w-px h-3 bg-[#E2E8F0]"></div>
                        <span className="text-[9px] font-medium text-[#94A3B8] uppercase tracking-widest">ID: TFX-DB20-2024</span>
                    </div>
                </div>
            </nav>

            {/* Main Content with Navbar Offset */}
            <div className="max-w-4xl mx-auto px-6 pt-32 md:pt-40">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    {/* Formal Document Header */}
                    <div className="mb-24 border-b border-[#F1F5F9] pb-12">
                        <h1 className="text-4xl md:text-5xl font-black text-[#0F172A] tracking-tight leading-tight mb-6">
                            20% Deposit Bonus <br />
                            <span className="text-[#94A3B8]">Policy Conditions</span>
                        </h1>
                        <div className="flex flex-wrap items-center gap-6">
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="w-4 h-4 text-[#2E62FF]" />
                                <span className="text-xs font-bold text-[#64748B] uppercase tracking-wider">Verified Program</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-[#64748B]" />
                                <span className="text-xs font-bold text-[#64748B] uppercase tracking-wider">Effective: March 2024</span>
                            </div>
                        </div>
                    </div>

                    {/* Policy Clauses - Ledger Style */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-32">
                        <div className="md:col-span-1">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#2E62FF] sticky top-40">
                                Execution Summary
                            </h2>
                        </div>
                        <div className="md:col-span-3 space-y-16">
                            <PolicyPoint
                                id="01"
                                title="Incentive Allocation"
                                description="Qualified participants receive a 20% credit allocation on their initial deposit. The aggregate cap per individual client profile is established at $10,000 USD."
                            />

                            <PolicyPoint
                                id="02"
                                title="Credit Classification"
                                description="Allocated funds are classified as trading credits intended for margin support. These funds are distinct from secondary withdrawable equity and cannot be realized as cash upon issuance."
                            />

                            <PolicyPoint
                                id="03"
                                title="Liquidity Conversion"
                                description="Bonus credits transition to withdrawable capital at a rate of $100 per 50 lots round-turn. Qualifying volume is restricted to Forex and Metal asset classes."
                            />

                            <PolicyPoint
                                id="04"
                                title="Capital Withdrawal Impact"
                                description="Withdrawal of the principal deposit results in the immediate revocation of all unearned credits. Realized profits may be withdrawn independently, subject to minimum equity requirements."
                            />

                            <PolicyPoint
                                id="05"
                                title="Program Duration"
                                description="Participants have a 90-calendar-day window from the credit date to achieve volume requirements. Credits not converted within this timeframe will be retired from the account."
                            />

                            <PolicyPoint
                                id="06"
                                title="Negative Equity Buffer"
                                description="In scenarios involving negative balance adjustments, bonus credits serve as the primary buffer before corporate negative balance protection protocols are engaged."
                            />

                            <PolicyPoint
                                id="07"
                                title="Account Constraints"
                                description="Availability is limited to Standard and Pro account tiers. Direct market feeds, including MAM and PAMM structures, are excluded from participation."
                            />

                            <PolicyPoint
                                id="08"
                                title="Verification Timeline"
                                description="Bonus requests must be formalized via the client portal within 48 hours of original deposit settlement."
                            />

                            <PolicyPoint
                                id="09"
                                title="Compliance & Ethics"
                                description="Systematic abuse or deployment of irregular trading strategies will lead to immediate credit revocation and account review by our compliance department."
                            />

                            <PolicyPoint
                                id="10"
                                title="Jurisdictional Restrictions"
                                description="Program eligibility is governed by regional regulatory frameworks and may be restricted in specific jurisdictions without prior notice."
                            />
                        </div>
                    </div>

                    {/* Formal Footer Disclaimer */}
                    <div className="bg-[#0F172A] rounded-3xl p-10 md:p-16 text-white overflow-hidden relative">
                        <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12">
                            <ShieldCheck className="w-64 h-64" />
                        </div>

                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-white/10 border border-white/10 mb-8">
                                <div className="w-1 h-1 rounded-full bg-[#2E62FF]"></div>
                                <span className="text-[10px] font-black uppercase tracking-widest opacity-80">Risk Disclosure</span>
                            </div>

                            <p className="text-xl md:text-2xl font-medium text-[#94A3B8] leading-relaxed max-w-2xl mb-12">
                                Leveraged financial instruments carry a high level of capital risk. Bonus programs increase market exposure and must be managed with professional risk protocols.
                            </p>

                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-white/10 pt-12">
                                <p className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-40">
                                    © 2024 NEW TRADEFX SERVICES // REGULATORY COMPLIANCE
                                </p>
                                <Link
                                    href="https://dashboard.tradefxservices.com/register"
                                    className="inline-flex items-center gap-2 text-xs font-black text-[#2E62FF] uppercase tracking-widest hover:text-white transition-colors"
                                >
                                    Activate Program <ArrowUpRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <footer className="mt-40 text-center opacity-30">
                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#0F172A]">
                    Intelligent Trading Powered by Innovation
                </p>
            </footer>
        </main>
    );
}

function PolicyPoint({ id, title, description }: { id: string; title: string; description: string }) {
    return (
        <div className="group border-l-2 border-[#F1F5F9] hover:border-[#2E62FF] pl-8 transition-colors duration-500">
            <span className="text-[10px] font-mono text-[#94A3B8] group-hover:text-[#2E62FF] transition-colors mb-2 block tracking-tight">
                Section_{id}
            </span>
            <h3 className="text-lg font-black text-[#0F172A] tracking-tight mb-4 flex items-center gap-3">
                {title}
            </h3>
            <p className="text-[#64748B] text-base leading-relaxed max-w-2xl">
                {description}
            </p>
        </div>
    );
}
