import { SlideContent } from '@/types/presentation';
import { BaseSlide } from './SlideBase';
import { parseBulletItems } from './utils';


interface ContentImageSlideProps {
  content: SlideContent;
  logo?: string;
}

export const ContentImageSlide = ({ content, logo }: ContentImageSlideProps) => {
  const title = content.title as string || 'Introduction';
  const body = content.body as string || '';
  const callout = content.callout as string || '';

  return (
    <BaseSlide content={content} logo={logo} title={title}>
      <div className="flex h-full w-full gap-12 items-center">
        {/* Left Side - Text Content */}
        <div className="w-1/2 flex flex-col justify-center">
          <div className="space-y-4">
            {body.split('\n\n').map((p, i) => (
              <p key={i} className="text-lg text-slate-700 leading-relaxed font-semibold tracking-tight">{p}</p>
            ))}
          </div>

          {/* Callout Banner at bottom of left column */}
          {callout && (
            <div className="mt-6 bg-[#D6E9FF]/50 rounded-xl p-4 border border-blue-100 shadow-sm w-fit max-w-[90%]">
              <p className="text-sm font-bold text-slate-800 leading-tight">
                {callout}
              </p>
            </div>
          )}
        </div>

        {/* Right Side - Visual Illustration */}
        <div className={title.toLowerCase().includes('introduction') ? "w-[30%] flex items-center justify-center" : "w-1/2 flex items-center justify-center"}>
          <div className="w-full relative flex items-center justify-center">
            <img
              src={`${(content.image as string) || "/illustrations/illustration5.png"}?t=${Date.now()}`}
              alt="Illustration"
              className={title.toLowerCase().includes('introduction')
                ? "w-full h-auto max-h-[60%] object-contain drop-shadow-2xl z-10"
                : "w-full h-auto max-h-[85%] object-contain drop-shadow-2xl z-10"}
            />
          </div>
        </div>
      </div>
    </BaseSlide>
  );
};

interface ExecutiveSummarySlideProps {
  content: SlideContent;
  logo?: string;
}

export const ExecutiveSummarySlide = ({ content, logo }: ExecutiveSummarySlideProps) => {
  const title = content.title as string || 'Executive Summary';
  const items = parseBulletItems(content.items);

  return (
    <BaseSlide content={content} logo={logo} title={title}>
      <div className="flex w-full gap-12 pt-4">
        {/* Left Side - Bullet Items */}
        <div className="w-[65%] flex flex-col">
          <ul className={items.length > 5 ? "space-y-2" : "space-y-4"}>
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-4">
                <span className="w-3 h-3 bg-[#007AFF] rounded-full mt-2 flex-shrink-0 shadow-md shadow-blue-500/20" />
                <span className="text-lg text-slate-700 leading-relaxed font-semibold tracking-tight">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side - Illustration */}
        <div className="w-[40%] flex items-center justify-center">
          <div className="w-full relative flex items-center justify-center">
            <img
              src={`${(content.image as string) || "/illustrations/executive_summary.png"}?t=${Date.now()}`}
              alt="Illustration"
              className="w-full h-auto max-h-[85%] object-contain drop-shadow-2xl z-10"
            />
          </div>
        </div>
      </div>
    </BaseSlide>
  );
};

interface IntroductionSlideProps {
  content: SlideContent;
  logo?: string;
}

export const IntroductionSlide = ({ content, logo }: IntroductionSlideProps) => {
  const title = content.title as string || 'Introduction';
  const items = parseBulletItems(content.items);

  return (
    <BaseSlide content={content} logo={logo} title={title}>
      <div className="flex w-full gap-8 pt-4">
        {/* Left Side - Objectives list */}
        <div className="w-[60%] flex flex-col">
          {content.body && (
            <div className="mb-6">
              <p className="text-xl text-slate-700 leading-relaxed font-medium">
                {content.body}
              </p>
            </div>
          )}
          <h3 className="text-lg font-bold text-slate-500 uppercase tracking-widest mb-4">Learning objectives:</h3>

          <div className="space-y-3">
            {items.map((item, index) => (
              <div key={index} className="flex flex-col w-full">
                <div className="flex items-center gap-4 py-2">
                  <div className="w-10 h-10 shrink-0 border border-blue-100 rounded-xl flex items-center justify-center bg-white shadow-sm relative overflow-hidden">
                    <div className="absolute -bottom-1 -left-1 w-5 h-5 bg-[#007AFF] rounded-full opacity-10"></div>
                    <div className="w-5 h-5 bg-[#007AFF] rounded-full flex items-center justify-center shadow-md shadow-blue-500/30">
                      <div className="w-2.5 h-2.5 border-b border-r border-white rotate-45 -mt-0.5 ml-0.2" />
                    </div>
                  </div>
                  <p className="text-lg text-slate-700 font-semibold tracking-tight leading-snug">
                    {item}
                  </p>
                </div>
                {index < items.length - 1 && (
                  <div className="w-full border-b border-dotted border-slate-200" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - New Person Illustration */}
        <div className="w-[30%] flex items-center justify-center pt-4">
          <div className="w-full relative flex items-center justify-center">
            <img
              src={(content.image as string) || "/illustrations/introduction_person.png"}
              alt="Introduction"
              className="w-full h-auto max-h-[65%] object-contain drop-shadow-2xl z-10"
            />
          </div>
        </div>
      </div>
    </BaseSlide>
  );
};
