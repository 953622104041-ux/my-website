import { SlideContent } from '@/types/presentation';

interface SlideHeaderProps {
  title?: string;
  subtitle?: string;
  moduleTag?: string;
  topicTag?: string;
  logo?: string;
}

export const SlideHeader = ({ title, subtitle, moduleTag, topicTag }: SlideHeaderProps) => {
  return (
    <div className="flex flex-col mb-6 relative z-20">
      {title && (
        <div className="mb-4">
          <h2 className="text-4xl font-black text-[#007AFF] tracking-tighter leading-none">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg font-semibold text-slate-500 mt-2 tracking-tight">
              {subtitle}
            </p>
          )}
          <div className="w-20 h-1 bg-[#007AFF] mt-4 rounded-full" />
        </div>
      )}

      <div className="flex items-center gap-3 mt-1">
        {moduleTag && (
          <div className="px-5 py-1.5 rounded-full bg-[#007AFF] text-white text-sm font-bold shadow-lg shadow-blue-500/20 whitespace-nowrap">
            {moduleTag}
          </div>
        )}
        {topicTag && (
          <div className="px-6 py-1.5 rounded-full bg-white border-2 border-[#007AFF] text-slate-800 text-sm font-bold shadow-[0_4px_15px_-3px_rgba(0,122,255,0.4)] whitespace-nowrap">
            {topicTag}
          </div>
        )}
      </div>
    </div>
  );
};

interface BaseSlideProps {
  content: any;
  title?: string;
  subtitle?: string;
  moduleTag?: string;
  topicTag?: string;
  logo?: string;
  children: React.ReactNode;
  overlayOpacity?: number;
  showHeaderTitle?: boolean;
}

export const BaseSlide = ({
  content,
  title,
  subtitle,
  moduleTag,
  topicTag,
  children,
  overlayOpacity,
  showHeaderTitle = true
}: BaseSlideProps) => {
  const resolvedModuleTag = (content.moduleTag as string) || moduleTag || 'Module 1';
  const resolvedTopicTag = (content.topicTag as string) || topicTag || 'ai';
  const displayTitle = showHeaderTitle ? (title || content.title) : undefined;
  const displaySubtitle = showHeaderTitle ? (subtitle || content.subtitle) : undefined;

  return (
    <div className="w-full h-full flex flex-col relative overflow-hidden bg-white px-12 md:px-16 pt-8 pb-12 md:pb-16">
      {/* Background Overlay if specified */}
      {overlayOpacity !== undefined && (
        <div
          className="absolute inset-0 z-[5] bg-slate-900"
          style={{ opacity: overlayOpacity }}
        />
      )}
      {/* Blue Grid Background - Consistent for all slides */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(#007AFF 1px, transparent 1px), linear-gradient(90deg, #007AFF 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Career 247 Branding - Top Right */}
      <div className="absolute top-12 right-12 z-30">
        <div className="flex items-center gap-1 font-sans">
          <span className="text-3xl font-black text-[#1d1d1f] tracking-tighter">Career</span>
          <div className="bg-[#007AFF] text-white px-1.5 rounded-sm text-2xl font-bold">247</div>
        </div>
      </div>

      <SlideHeader
        title={displayTitle}
        subtitle={displaySubtitle}
        moduleTag={resolvedModuleTag}
        topicTag={resolvedTopicTag}
      />

      <div className="flex-1 flex flex-col relative z-10 w-full">
        {children}
      </div>
    </div>
  );
};


