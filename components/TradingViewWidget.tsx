'use client';

import React, { useEffect, useRef } from 'react';

type WidgetType = 'market-overview' | 'technical-analysis' | 'ticker-tape' | 'mini-chart';

const WIDGET_SCRIPTS: Record<WidgetType, string> = {
    'market-overview': 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js',
    'technical-analysis': 'https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js',
    'ticker-tape': 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js',
    'mini-chart': 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js',
};

interface TradingViewWidgetProps {
    widgetType: WidgetType;
    config: Record<string, any>;
}

export function TradingViewWidget({ widgetType, config }: TradingViewWidgetProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Clear any existing content
        container.innerHTML = '';

        // Create the inner widget container
        const widgetDiv = document.createElement('div');
        widgetDiv.className = 'tradingview-widget-container__widget';
        container.appendChild(widgetDiv);

        // Create and inject the script
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = WIDGET_SCRIPTS[widgetType];
        script.async = true;
        script.textContent = JSON.stringify(config);
        container.appendChild(script);

        return () => {
            if (container) {
                container.innerHTML = '';
            }
        };
    }, [widgetType, JSON.stringify(config)]);

    return (
        <div
            ref={containerRef}
            className="tradingview-widget-container w-full"
            style={{ minHeight: config.height ? `${config.height}px` : '400px' }}
        />
    );
}
