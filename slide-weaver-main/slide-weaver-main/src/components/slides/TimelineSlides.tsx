import { SlideContent } from '@/types/presentation';
import { BaseSlide } from './SlideBase';
import { parseBulletItems } from './utils';

interface TimelineFactsSlideProps {
  content: SlideContent;
  logo?: string;
}

export const TimelineFactsSlide = ({ content, logo }: TimelineFactsSlideProps) => {
  const title = content.title as string || 'Key Facts';
  const items = parseBulletItems(content.items);

  return (
    <BaseSlide content={content} logo={logo} title={title}>
      <div className="flex w-full gap-12 pt-0 items-center">
        {/* Left Side - Timeline Content */}
        <div className="w-[60%] flex flex-col">
          <div className="space-y-2 relative pl-8 mt-0">
            {/* Thicker, more prominent vertical line */}
            <div className="absolute left-[39px] top-6 bottom-6 w-[2px] bg-[#007AFF] opacity-10"></div>

            {items.slice(0, 4).map((item, index) => (
              <div key={index} className="flex items-start gap-8 py-2 relative group hover:bg-blue-50/40 rounded-2xl px-3 transition-all -ml-3">
                {/* Precision aligned dot */}
                <div className="w-5 h-5 rounded-full bg-white border-[3px] border-[#007AFF] shadow-md mt-1 z-10 flex-shrink-0 relative ring-4 ring-blue-50/30 group-hover:scale-110 transition-transform"></div>
                <span className="text-xl text-slate-700 leading-snug font-semibold tracking-tight">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Visual Illustration */}
        <div className="w-[40%] flex items-center justify-center pt-4">
          <div className="w-full relative flex items-center justify-center">
            <img
              src="/illustrations/key_facts.png"
              alt="Key Facts Illustration"
              className="w-full h-auto max-h-[90%] object-contain drop-shadow-2xl z-10"
            />
          </div>
        </div>
      </div>
    </BaseSlide>
  );
};

interface ConclusionTimelineSlideProps {
  content: SlideContent;
  logo?: string;
}

export const ConclusionTimelineSlide = ({ content, logo }: ConclusionTimelineSlideProps) => {
  const title = content.title as string || 'Conclusion';
  const items = parseBulletItems(content.items);

  // We need to import trophyImage or use a public path if available. 
  // For consistency with previous working state, we'll try to use the public image if possible or just remove the backgroundImage reference if it causes issues.
  // Previous working code used 'trophyImage' but I removed the import in a previous step (442).
  // To be safe and avoid "trophyImage not found", I will use public path or just BaseSlide without it if I can't guarantee the import.
  // Actually, I can just use BaseSlide without backgroundImage for now to match the "clean" request or try to restore the import.
  // Step 463 Restore had 'trophyImage' imported. Let's start with that assuming the file exists.

  return (
    <BaseSlide content={content} logo={logo} title={title}>
      <div className="flex w-full gap-12 items-center">
        <div className="w-[60%] flex flex-col justify-center space-y-6">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-6 group">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold transition-all shadow-sm ${index === 0 ? 'bg-[#007AFF] text-white shadow-blue-500/30' : 'bg-white border-2 border-slate-100 text-slate-400'
                }`}>
                {index + 1}
              </div>
              <p className="text-xl text-slate-700 font-semibold tracking-tight">{item}</p>
            </div>
          ))}
        </div>

        {/* Right Side Illustration */}
        <div className="w-[40%] flex items-center justify-center">
          <img
            src={`${(content.image as string) || "/illustrations/slide1_hero.png"}?t=${Date.now()}`}
            alt="Conclusion"
            className="w-full h-auto max-h-[70%] object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </BaseSlide>
  );
};

interface SummaryBulletsSlideProps {
  content: SlideContent;
  logo?: string;
}

export const SummaryBulletsSlide = ({ content, logo }: SummaryBulletsSlideProps) => {
  const title = content.title as string || 'Summary';
  const items = parseBulletItems(content.items);

  return (
    <BaseSlide content={content} logo={logo} title={title}>
      <ul className={items.length > 5 ? "space-y-2 mt-2" : "space-y-4 mt-4"}>
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="w-2 h-2 bg-primary rounded-full mt-2.5 flex-shrink-0" />
            <span className="text-lg text-slate-700 font-semibold tracking-tight">{item}</span>
          </li>
        ))}
      </ul>
    </BaseSlide>
  );
};
