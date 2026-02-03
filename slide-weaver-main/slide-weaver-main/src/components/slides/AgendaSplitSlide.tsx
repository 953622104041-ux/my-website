import { SlideContent } from '@/types/presentation';
import { BaseSlide } from './SlideBase';
import { parseBulletItems } from './utils';

interface AgendaSplitSlideProps {
  content: SlideContent;
}

export const AgendaSplitSlide = ({ content }: AgendaSplitSlideProps) => {
  const title = content.title as string || 'Agenda';
  const items = parseBulletItems(content.items);

  return (
    <BaseSlide content={content} showHeaderTitle={false}>
      <div className="flex w-full h-full rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
        {/* Left Blue Panel */}
        <div className="w-[45%] bg-[#007AFF] p-12 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-white/10 opacity-30" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '24px 24px'
          }}></div>

          <h1 className="text-6xl font-black text-white tracking-tighter leading-tight relative z-10">
            {title}
          </h1>
          <div className="w-20 h-2 bg-white mt-6 rounded-full opacity-50"></div>
        </div>

        {/* Right Content Panel */}
        <div className="w-[55%] bg-white p-12 flex flex-col justify-center">
          <ul className="space-y-6">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-4 group">
                <span className="w-2 h-2 rounded-full bg-[#007AFF] mt-3 group-hover:scale-150 transition-transform"></span>
                <span className="text-xl text-slate-700 font-semibold tracking-tight">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </BaseSlide>
  );
};
