'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Zap, 
  Globe2, 
  ArrowRight, 
  Monitor, 
  Search, 
  Lock, 
  CheckCircle2, 
  Server, 
  Cpu,
  Mail,
  Phone,
  LayoutGrid,
  Smartphone,
  Laptop,
  Terminal,
  Activity,
  MapPin,
  TrendingUp
} from 'lucide-react';
import { TradeFXLogo } from './tradefx-logo';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui/tooltip';

const navSections = [
  {
    serial: '01',
    title: 'Market Access',
    links: [
      { name: 'Forex Spot', href: '/markets/forex' },
      { name: 'Energy & Oils', href: '/markets/commodities' },
      { name: 'Major Indices', href: '/markets/indices' },
      { name: 'Digital Assets', href: '/markets/crypto' },
      { name: 'Precious Metals', href: '/markets/commodities' },
    ],
  },
  {
    serial: '02',
    title: 'Trading Hub',
    links: [
      { name: 'MetaTrader 5', href: '/platforms' },
      { name: 'Account Models', href: '/accounts' },
      { name: 'Funding Gateways', href: '/deposit-withdrawal' },
      { name: 'Smart Trading', href: '/tools' },
      { name: 'Platform Status', href: '#' },
    ],
  },
  {
    serial: '03',
    title: 'Academy',
    isComingSoon: true,
    links: [
      { name: 'Technical Analysis', href: '/education' },
      { name: 'Economic Trends', href: '/economic-calendar' },
      { name: 'Market Insights', href: '/blog' },
      { name: 'Support Central', href: '/faq' },
      { name: 'Trading Guides', href: '/education' },
    ],
  },
  {
    serial: '04',
    title: 'Institution',
    links: [
      { name: 'Corporate Mission', href: '/about' },
      { name: 'Global Presence', href: '/about' },
      { name: 'Partner Program', href: '/partners' },
      { name: 'Client Protection', href: '/legal' },
      { name: 'Contact Desk', href: '/contact' },
    ],
  },
];

const downloads = [
  { 
    name: 'Download for Windows', 
    info: 'Full Desktop Suite',
    href: 'https://download.mql5.com/cdn/web/new.tradefx.services/mt5/newtradefxservices5setup.exe', 
    isSvg: true,
    svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48" className="fill-current w-7 h-7">
            <path d="M6,6h17v17H6V6z"></path><path d="M25.042,22.958V6H42v16.958H25.042z"></path><path d="M6,25h17v17H6V25z"></path><path d="M25,42V25h17v17H25z"></path>
        </svg>
    ),
    accent: 'bg-[#0078D7]/10 text-[#0078D7]'
  },
  { 
    name: 'App Store (iOS)', 
    info: 'Mobile Trading App',
    href: 'https://download.mql5.com/cdn/mobile/mt5/ios?server=NewTradeFxServices-Server', 
    isSvg: true,
    svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 50 50" className="fill-current w-6 h-6">
            <path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"></path>
        </svg>
    ),
    accent: 'bg-slate-900 text-white'
  },
  { 
    name: 'Play Store (Android)', 
    info: 'Mobile Trading App',
    href: 'https://download.mql5.com/cdn/mobile/mt5/android?server=NewTradeFxServices-Server', 
    isSvg: true,
    svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48" className="fill-current w-8 h-8">
            <path d="M12 29c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V29zM40 29c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V29zM22 40c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V40zM30 40c0 1.1-.9 2-2 2s-2-.9-2-2v-9c0-1.1.9-2 2-2s2 .9 2 2V40z"></path><path d="M14 18v15c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V18H14zM24 8c-6 0-9.7 3.6-10 8h20C33.7 11.6 30 8 24 8zM20 13.6c-.6 0-1-.4-1-1 0-.6.4-1 1-1s1 .4 1 1C21 13.1 20.6 13.6 20 13.6zM28 13.6c-.6 0-1-.4-1-1 0-.6.4-1 1-1s1 .4 1 1C29 13.1 28.6 13.6 28 13.6z"></path><path d="M28.3 10.5c-.2 0-.4-.1-.6-.2-.5-.3-.6-.9-.3-1.4l1.7-2.5c.3-.5.9-.6 1.4-.3.5.3.6.9.3 1.4l-1.7 2.5C29 10.3 28.7 10.5 28.3 10.5zM19.3 10.1c-.3 0-.7-.2-.8-.5l-1.3-2.1c-.3-.5-.2-1.1.3-1.4.5-.3 1.1-.2 1.4.3l1.3 2.1c.3.5.2 1.1-.3 1.4C19.7 10 19.5 10.1 19.3 10.1z"></path>
        </svg>
    ),
    accent: 'bg-[#3DDC84]/15 text-[#2db368]'
  },
];

export function Footer() {
  return (
    <TooltipProvider>
    <footer className="relative bg-[#FAFAFA] border-t border-slate-200 overflow-hidden pt-24 pb-12">
      {/* 
        Awwwards Texture Overlay 
        Subtle grain and architectural grid for premium "engineered" feel
      */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.015] grayscale" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3BaseFilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/baseFilter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
      
      <div className="max-w-[1536px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* HERO SECTION: Large Branding & Integrated Platform Hub */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-slate-200 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
          
          {/* Identity Block */}
          <div className="lg:col-span-7 py-12 lg:py-16 pr-0 lg:pr-20 space-y-8 lg:space-y-12">
            <Link href="/" className="inline-block">
              <TradeFXLogo className="h-16 md:h-20 w-auto transition-transform hover:scale-[1.01]" />
            </Link>
            <div className="max-w-xl">
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-slate-800 leading-relaxed tracking-tight antialiased">
                New Trade Fx Services was founded by a group of professional traders with a shared vision of improving the online trading environment. Frustrated with high costs, slow executions, and poor client service, we set out to deliver cutting-edge technology to traders worldwide.
              </h2>
            </div>
            
            {/* Social Cluster */}
            <div className="flex items-center gap-3">
              {['ri-twitter-x-line', 'ri-linkedin-fill', 'ri-facebook-fill', 'ri-instagram-line'].map((icon, idx) => (
                <Link key={idx} href="#" className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/30 hover:bg-white transition-all">
                  <i className={`${icon} text-lg`}></i>
                </Link>
              ))}
            </div>
          </div>

          {/* Platform Hub Block: Integrated into the Bento Logic */}
          <div className="lg:col-span-5 py-12 lg:py-16 pl-0 lg:pl-16 space-y-8 lg:space-y-12">
            <div className="space-y-4">
               <div className="flex items-center gap-3">
                  <span className="text-[10px] font-black text-slate-300 tracking-[0.3em]">00</span>
                  <div className="h-px w-8 bg-slate-200" />
                  <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-widest">Trading Infrastructure</h4>
               </div>
               <h3 className="text-3xl font-black text-slate-900 tracking-tight leading-tight">Trade From Anywhere,<br className="hidden sm:block" /> On Any Device.</h3>
            </div>

            <div className="grid grid-cols-1 gap-4">
               {downloads.map((item) => (
                 <a 
                   key={item.name}
                   href={item.href}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="group flex items-center justify-between p-5 rounded-2xl bg-white border border-slate-100 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all"
                 >
                   <div className="flex items-center gap-5">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.accent} group-hover:scale-110 transition-transform`}>
                         {item.isSvg ? item.svg : <Monitor className="w-6 h-6" />}
                      </div>
                      <div>
                        <p className="text-sm font-black text-slate-900 mb-0.5">{item.name}</p>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.info}</p>
                      </div>
                   </div>
                   <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                 </a>
               ))}
            </div>

            <Link 
              href="https://dashboard.tradefxservices.com/register" 
              target="_blank"
              className="flex items-center justify-center gap-3 premium-gradient text-white text-xs font-black px-8 py-5 rounded-2xl transition-all shadow-xl shadow-primary/20 active:scale-95 group/btn uppercase tracking-widest w-full"
            >
              <TrendingUp className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
              Start Trading Now
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* BENTO NAV GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-4 border-b border-slate-200 divide-x lg:divide-x divide-slate-200">
          {navSections.map((section) => (
            <div key={section.serial} className="py-12 lg:py-20 px-4 lg:px-12 first:pl-0 last:pr-0 space-y-8 lg:space-y-12 border-b lg:border-b-0 border-slate-200">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <span className="text-[10px] font-black text-slate-300 tracking-[0.3em]">{section.serial}</span>
                <div className="flex items-center gap-2">
                  <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-widest">{section.title}</h4>
                  {(section as any).isComingSoon && (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Lock className="w-3 h-3 text-primary" />
                      </TooltipTrigger>
                      <TooltipContent>Coming soon</TooltipContent>
                    </Tooltip>
                  )}
                </div>
              </div>
              <ul className="space-y-4 lg:space-y-5">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {(section as any).isComingSoon ? (
                      <div 
                        className="text-[14px] lg:text-[15px] font-bold text-slate-300 cursor-not-allowed flex items-center justify-between group/link"
                      >
                        <span className="flex items-center gap-2">
                          {link.name}
                          <Lock className="w-2.5 h-2.5 opacity-40" />
                        </span>
                        <span className="w-5 h-px bg-slate-200 scale-x-0 group-hover/link:scale-x-full origin-left transition-transform" />
                      </div>
                    ) : (
                      <Link 
                        href={link.href} 
                        className="text-[14px] lg:text-[15px] font-bold text-slate-500 hover:text-primary transition-all flex items-center justify-between group/link"
                      >
                        {link.name}
                        <span className="w-5 h-px bg-slate-200 scale-x-0 group-hover/link:scale-x-full origin-left transition-transform" />
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* COMPLIANCE & CONTACT */}
        <div className="pt-16 lg:pt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-8 flex flex-col md:flex-row gap-10 lg:gap-12">
            <div className="flex-1 space-y-6">
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 lg:w-8 lg:h-8 rounded-full bg-red-100/50 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4 text-red-600" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">Risk Disclosure</span>
               </div>
               <p className="text-[12px] leading-[1.8] text-slate-400 font-medium text-justify antialiased">
                Trading financial instruments involves significant risk. The possibility exists that you could sustain a loss of some or all of your initial investment. You should not invest or trade with money which you cannot afford to lose. New TradeFX is not responsible for any losses incurred as a result of using our services.
               </p>
            </div>
             <div className="flex-1 space-y-6">
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 lg:w-8 lg:h-8 rounded-full bg-blue-100/50 flex items-center justify-center">
                    <Globe2 className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">Regional Policy</span>
               </div>
               <p className="text-[12px] leading-[1.8] text-slate-400 font-medium text-justify antialiased">
                Our services are restricted in certain jurisdictions including the USA, Cuba, Iraq, North Korea, Sudan, UAE, India, and countries listed on international sanction lists. Ensuring compliance with local laws remains the sole responsibility of the user.
               </p>
            </div>
          </div>

          <div className="lg:col-span-4 lg:pl-16 lg:border-l border-slate-200 flex flex-col justify-between gap-10">
            <div className="space-y-8">
               <div className="space-y-3 lg:space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 lg:w-8 lg:h-8 rounded-full bg-emerald-100/50 flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">Corporate Registry</span>
                  </div>
                  <p className="text-[13px] font-bold text-slate-700 leading-relaxed uppercase">
                    Sotheby Bldg, Rodney Bay, Saint Lucia | No. 202500717
                  </p>
               </div>
               <div className="flex flex-col gap-6 lg:gap-8">
                  <div className="space-y-2">
                    <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Support Node</p>
                    <p className="text-[13px] font-bold text-slate-900 underline decoration-slate-200 decoration-2 underline-offset-8 break-all sm:break-normal">support@newtradefxservices.com</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Global Line</p>
                    <p className="text-[13px] font-bold text-slate-900">+1 (758) 452-9850</p>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* FINAL FOOTER STRIP */}
        <div className="mt-16 lg:mt-24 pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-8 text-[11px] font-black text-slate-400 tracking-widest uppercase text-center lg:text-left">
            <span>© {new Date().getFullYear()} NEW TRADE FX SERVICES LTD</span>
            <div className="hidden md:block w-px h-3 bg-slate-200" />
            <div className="flex items-center flex-wrap justify-center gap-6 lg:gap-8">
              <Link href="/terms" className="hover:text-primary transition-colors">Broker Agreement</Link>
              <Link href="/privacy" className="hover:text-primary transition-colors">Data Privacy</Link>
              <Link href="/aml" className="hover:text-primary transition-colors">AML Protocol</Link>
            </div>
          </div>
          
          <div className="flex items-center gap-2 group cursor-help">
             <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
             <span className="text-[10px] font-black tracking-[0.2em] text-slate-300 uppercase">All Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
    </TooltipProvider>
  );
}
