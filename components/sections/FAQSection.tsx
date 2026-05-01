'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageSquare, HelpCircle } from 'lucide-react';
import ColorBends from '@/components/ui/ColorBends';

interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
    return (
        <div className={`border-b border-slate-200/60 last:border-0 transition-all duration-300 ${isOpen ? 'bg-slate-50/50' : ''}`}>
            <button
                onClick={onClick}
                className="w-full py-6 flex items-center justify-between text-left group hover:px-2 transition-all duration-300"
            >
                <span className={`text-lg md:text-xl font-bold tracking-tight transition-colors duration-300 ${isOpen ? 'text-blue-600' : 'text-slate-900 group-hover:text-blue-500'}`}>
                    {question}
                </span>
                <div className={`shrink-0 ml-4 p-1.5 rounded-full border transition-all duration-300 ${isOpen ? 'bg-blue-600 border-blue-600 text-white scan-z' : 'bg-transparent border-slate-200 text-slate-400 group-hover:border-blue-300 group-hover:text-blue-500'}`}>
                    {isOpen ? <Minus size={20} strokeWidth={2.5} /> : <Plus size={20} strokeWidth={2.5} />}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                    >
                        <div className="pb-6 px-2">
                            <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-[90%]">
                                {answer}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "What is online trading?",
            answer: "Online trading refers to the process of buying and selling financial instruments such as currencies, commodities, stock indices, or cryptocurrencies through an internet-based trading platform. Trades are executed electronically in real time, giving traders access to global markets from anywhere in the world."
        },
        {
            question: "What markets can I trade on New Trade FX Services?",
            answer: "Our platform provides access to four major financial market categories: Forex (foreign exchange currency pairs), Commodities (gold, silver, crude oil), Indices (global stock market indices), and Cryptocurrencies (Bitcoin, Ethereum, and other digital assets)."
        },
        {
            question: "How do I open a trading account?",
            answer: "Opening an account is simple. Visit our website and complete the online registration form, provide the required identity verification documents, fund your account using one of our supported payment methods, and you can begin trading within minutes of approval."
        },
        {
            question: "Is trading suitable for beginners?",
            answer: "Financial trading can be complex and carries risk, but beginners can start building knowledge through our Academy, which provides guides, strategy articles, and market analysis resources. Starting with smaller position sizes and practicing disciplined risk management is recommended for new traders."
        },
        {
            question: "Are financial markets risky?",
            answer: "Yes. Trading financial markets involves significant risk, and traders may experience losses as well as profits. The prices of financial instruments can fluctuate rapidly. It is important to fully understand the risks involved and only trade with capital you can afford to lose. New Trade FX Services provides risk management tools and educational resources to help traders manage these risks."
        },
        {
            question: "What trading tools are available on the platform?",
            answer: "Our platform provides a comprehensive range of tools including advanced charting with multiple chart types and timeframes, technical indicators, price alerts, stop-loss and take-profit orders, an economic calendar, and automated trading capabilities."
        },
        {
            question: "How do I deposit or withdraw funds?",
            answer: "Deposits and withdrawals are managed through your account dashboard. We support multiple payment methods and process transactions using secure, encrypted payment gateways. Processing times may vary based on the selected method and identity verification requirements."
        },
        {
            question: "Is my personal and financial information secure?",
            answer: "Yes. New Trade FX Services uses modern encryption technologies and secure data management systems to protect all client information and financial transactions. We continuously monitor our systems to ensure the highest level of security for all users."
        }
    ];

    return (
        <section id="faq" className="relative px-4 sm:px-6 lg:px-8 py-20 md:py-32 bg-white flex justify-center">
            <div className="max-w-4xl w-full">
                {/* Header Section */}
                <div className="mb-16 md:mb-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/20 mb-6"
                    >
                        <HelpCircle className="text-[#22C55E]" size={14} />
                        <span className="text-[10px] font-black uppercase tracking-widest text-[#22C55E]">
                            Support center
                        </span>
                    </motion.div>
                    
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-6"
                    >
                        Commonly Asked <span className="text-blue-600">Questions.</span>
                    </motion.h2>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-medium"
                    >
                        Everything you need to know about New TradeFX professional services. Can't find an answer? Our support team is here to help.
                    </motion.p>
                </div>

                {/* Accordion List */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="border-t border-slate-200"
                >
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    ))}
                </motion.div>

                {/* Footer CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-20 p-8 md:p-10 rounded-[2rem] bg-slate-900 text-white relative overflow-hidden group"
                >
                    {/* Background Animation */}
                    <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
                        <ColorBends 
                            colors={['#2563EB', '#6366F1', '#4F46E5', '#3B82F6', '#1E40AF']}
                            speed={0.65}
                            scale={0.9}
                            rotation={15}
                            autoRotate={5}
                            warpStrength={0.8}
                            frequency={0.55}
                            mouseInfluence={0.8}
                            parallax={0.6}
                            noise={0.15}
                        />
                        {/* Blur Layer to soften rings */}
                        <div className="absolute inset-0 backdrop-blur-[12px] z-[1]" />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent z-[2]" />
                    </div>
                    
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl md:text-3xl font-bold mb-2">Still have more questions?</h3>
                            <p className="text-slate-400 font-medium">Contact our expert support team for professional assistance.</p>
                        </div>
                        <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all duration-300 flex items-center gap-3 shadow-[0_10px_30px_rgba(37,99,235,0.3)] hover:-translate-y-1 active:scale-95">
                            <MessageSquare size={20} />
                            Contact Support
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
