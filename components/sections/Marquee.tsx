'use client';

import React, { useEffect, useRef } from 'react';

interface TickerConfig {
    symbols?: { proName: string; title: string }[];
    showSymbolLogo?: boolean;
    isTransparent?: boolean;
    displayMode?: string;
    colorTheme?: string;
    locale?: string;
    largeChartUrl?: string;
}

const defaultSymbols = [
    { proName: 'FX:EURUSD', title: 'EUR/USD' },
    { proName: 'FX:GBPUSD', title: 'GBP/USD' },
    { proName: 'FX:USDJPY', title: 'USD/JPY' },
    { proName: 'FX:AUDUSD', title: 'AUD/USD' },
    { proName: 'OANDA:XAUUSD', title: 'Gold' },
    { proName: 'OANDA:XAGUSD', title: 'Silver' },
    { proName: 'BITSTAMP:BTCUSD', title: 'Bitcoin' },
    { proName: 'BITSTAMP:ETHUSD', title: 'Ethereum' },
    { proName: 'FOREXCOM:SPXUSD', title: 'S&P 500' },
    { proName: 'FOREXCOM:NSXUSD', title: 'NASDAQ' },
    { proName: 'FOREXCOM:DJI', title: 'Dow Jones' },
    { proName: 'TVC:USOIL', title: 'Crude Oil' },
];

export function Marquee({ symbols, colorTheme = 'dark', displayMode = 'adaptive' }: {
    symbols?: TickerConfig['symbols'];
    colorTheme?: 'dark' | 'light';
    displayMode?: 'adaptive' | 'regular' | 'compact';
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const scriptAppended = useRef(false);

    useEffect(() => {
        if (!containerRef.current || scriptAppended.current) return;
        scriptAppended.current = true;

        const widgetContainer = document.createElement('div');
        widgetContainer.className = 'tradingview-widget-container__widget';
        containerRef.current.appendChild(widgetContainer);

        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
        script.type = 'text/javascript';
        script.async = true;

        const config: TickerConfig = {
            symbols: symbols || defaultSymbols,
            showSymbolLogo: true,
            isTransparent: true,
            displayMode,
            colorTheme,
            locale: 'en',
        };

        script.innerHTML = JSON.stringify(config);
        containerRef.current.appendChild(script);

        return () => {
            scriptAppended.current = false;
        };
    }, [symbols, colorTheme, displayMode]);

    return (
        <section className={`relative overflow-hidden ${colorTheme === 'dark' ? 'bg-[#0A0F1E]' : 'bg-white'
            }`}>
            {/* Top accent line */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#2E62FF]/40 to-transparent z-10" />

            {/* TradingView Widget */}
            <div
                ref={containerRef}
                className="tradingview-widget-container"
                style={{ width: '100%' }}
            />

            {/* Bottom accent line */}
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#2E62FF]/40 to-transparent z-10" />
        </section>
    );
}
