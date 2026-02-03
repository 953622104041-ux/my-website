import React from 'react';
import { SlideContent } from '@/types/presentation';
import { BaseSlide } from './SlideBase';
import { parseBulletItems } from './utils';
import { Check, Calendar, BarChart, Users, Target, FileText, Settings, Share2, Layers, Zap, Shield, Globe } from 'lucide-react';

interface CycleSlideProps {
    content: SlideContent;
    logo?: string;
}

export const CycleSlide = ({ content, logo }: CycleSlideProps) => {
    const title = content.title as string || 'Key Features';
    const subtitle = content.subtitle as string || '';
    const rawItems = parseBulletItems(content.items);
    // Ensure exactly 8 items
    const items = rawItems.slice(0, 8);
    while (items.length < 8) {
        items.push(`Feature ${items.length + 1}: Description`);
    }

    const icons = [Calendar, Layers, Share2, Settings, Target, Users, BarChart, Shield];

    return (
        <BaseSlide content={content} logo={logo} title={title}>
            <div className="flex w-full h-full items-center justify-center relative">

                {/* Central Hub Container */}
                <div className="relative w-[280px] h-[280px] flex items-center justify-center -mt-12">

                    {/* Central Decoration & Topic */}
                    <div className="absolute w-[160px] h-[160px] rounded-full border border-slate-100 bg-white shadow-sm flex items-center justify-center z-0">
                        <p className="text-center text-slate-700 font-bold text-base leading-tight px-3">{subtitle}</p>
                    </div>

                    {items.map((item, index) => {
                        // Position calculation (start from top, clockwise)
                        const angle = (index * (360 / 8)) - 90;
                        const radius = 110;
                        const x = Math.cos((angle * Math.PI) / 180) * radius;
                        const y = Math.sin((angle * Math.PI) / 180) * radius;

                        let textClasses = "text-center left-1/2 -translate-x-1/2";

                        // Specific overrides for 8-point cycle (Tight offsets)
                        if (index === 0) textClasses = "text-center left-1/2 -translate-x-1/2 bottom-[120%] pb-1 w-48";
                        if (index === 4) textClasses = "text-center left-1/2 -translate-x-1/2 top-[110%] pt-1 w-48";
                        if (index >= 1 && index <= 3) textClasses = "text-left left-[120%] top-1/2 -translate-y-1/2 w-48";
                        if (index >= 5 && index <= 7) textClasses = "text-right right-[120%] top-1/2 -translate-y-1/2 w-48";

                        const Icon = icons[index % icons.length];
                        const [mainText, subText] = item.split(':').map(s => s.trim());

                        return (
                            <div
                                key={index}
                                className="absolute w-12 h-12 rounded-full flex flex-col items-center justify-center z-10 box-border bg-gradient-to-br from-blue-500 to-blue-600 shadow-md border-[2px] border-white ring-1 ring-blue-50"
                                style={{
                                    transform: `translate(${x}px, ${y}px)`,
                                }}
                            >
                                {/* Number Badge */}
                                <div className="absolute -top-1.5 bg-white text-blue-600 text-[9px] font-bold px-1.5 py-0.5 rounded-full shadow-sm border border-blue-100">
                                    0{index + 1}
                                </div>

                                <Icon className="w-5 h-5 text-white" strokeWidth={2.5} />

                                {/* Text Label */}
                                <div className={`absolute ${textClasses} flex flex-col`}>
                                    <span className="text-sm font-bold text-slate-800 leading-tight block">{mainText}</span>
                                    {subText && <span className="text-[10px] font-medium text-slate-500 mt-0.5 block leading-tight">{subText}</span>}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </BaseSlide>
    );
};
