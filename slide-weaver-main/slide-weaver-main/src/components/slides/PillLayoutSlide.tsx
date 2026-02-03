import React from 'react';
import { SlideContent } from '@/types/presentation';
import { BaseSlide } from './SlideBase';
import { parseBulletItems } from './utils';

interface PillLayoutSlideProps {
    content: SlideContent;
    logo?: string;
}

export const PillLayoutSlide = ({ content, logo }: PillLayoutSlideProps) => {
    const title = content.title as string || 'Core Principles';
    const subtitle = content.subtitle as string || '';
    const rawItems = parseBulletItems(content.items);

    // Ensure we have exactly 10 items
    const items = rawItems.slice(0, 10);
    while (items.length < 10) {
        items.push(`Principle ${items.length + 1}: Placeholder content for this item.`);
    }

    // Split into two columns of 5
    const leftColumn = items.slice(0, 5);
    const rightColumn = items.slice(5, 10);

    const renderPill = (item: string, index: number) => {
        // Split "Title: Description"
        const parts = item.split(':');
        const itemTitle = parts[0].trim();
        const itemDesc = parts.slice(1).join(':').trim() || '';

        // If no description, use the title as description and generic title? 
        // Or just render title. User ref shows "Encapsulation: Creating focus".

        return (
            <div key={index} className="flex items-center bg-white/80 border border-blue-100 rounded-full p-1.5 pr-4 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                {/* Number Circle */}
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#007AFF] text-white flex flex-col items-center justify-center font-bold leading-none z-10 transition-transform group-hover:scale-105">
                    <span className="text-[8px] opacity-80 mb-[-1px]">0</span>
                    <span className="text-base">{index + 1 > 9 ? index + 1 : (index + 1)}</span>
                </div>

                {/* Text Content */}
                <div className="ml-3 flex flex-col justify-center min-w-0 flex-1">
                    <div className="flex items-baseline gap-2">
                        <span className="text-[#007AFF] font-bold text-sm whitespace-nowrap">{itemTitle}</span>
                        {itemDesc && (
                            <span className="text-slate-600 font-medium text-xs truncate flex-1" title={itemDesc}>
                                : {itemDesc}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <BaseSlide content={content} logo={logo} title={title}>
            <div className="w-full h-full flex flex-col">

                <div className="flex-1 grid grid-cols-2 gap-x-8 gap-y-3 px-4 pb-2 content-center">
                    {/* Left Column */}
                    <div className="flex flex-col justify-center gap-3">
                        {leftColumn.map((item, i) => renderPill(item, i))}
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col justify-center gap-3">
                        {rightColumn.map((item, i) => renderPill(item, i + 5))}
                    </div>
                </div>
            </div>
        </BaseSlide>
    );
};
