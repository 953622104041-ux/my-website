import { SlideContent } from '@/types/presentation';
import { BaseSlide } from './SlideBase';
import { parseBulletItems } from './utils';

interface TwoColumnCardsSlideProps {
  content: SlideContent;
  logo?: string;
}

export const TwoColumnCardsSlide = ({ content, logo }: TwoColumnCardsSlideProps) => {
  const title = content.title as string || 'Two Perspectives';
  const leftTitle = content.leftTitle as string || 'First Point';
  const leftItems = parseBulletItems(content.leftItems);
  const rightTitle = content.rightTitle as string || 'Second Point';
  const rightItems = parseBulletItems(content.rightItems);

  return (
    <BaseSlide content={content} logo={logo} title={title}>
      <div className="grid grid-cols-2 gap-6 mt-4">
        {/* Left Card */}
        <div className="bg-secondary/30 rounded-xl p-6">
          <div className="bg-primary text-primary-foreground rounded-full px-6 py-2 inline-block mb-4 font-semibold">
            {leftTitle}
          </div>
          <ul className="space-y-3">
            {leftItems.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Card */}
        <div className="bg-secondary/30 rounded-xl p-6">
          <div className="bg-primary text-primary-foreground rounded-full px-6 py-2 inline-block mb-4 font-semibold">
            {rightTitle}
          </div>
          <ul className="space-y-3">
            {rightItems.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </BaseSlide>
  );
};

interface DeepDiveSlideProps {
  content: SlideContent;
  logo?: string;
}

export const DeepDiveSlide = ({ content, logo }: DeepDiveSlideProps) => {
  const title = content.title as string || 'Deep Dive';
  const subtitle = content.subtitle as string || '';
  const leftTitle = content.leftTitle as string || 'Why it matters:';
  const leftContent = content.leftContent as string || '';
  const rightTitle = content.rightTitle as string || 'How to do it:';
  const rightItems = parseBulletItems(content.rightItems);
  const exampleLabel = content.exampleLabel as string || 'Example:';
  const exampleContent = content.exampleContent as string || '';

  return (
    <BaseSlide content={content} logo={logo} title={title} subtitle={subtitle}>
      <div className="grid grid-cols-2 gap-6 mb-6 mt-4">
        {/* Left - Why */}
        <div className="bg-primary/10 rounded-xl p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center">
              <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-lg font-semibold text-primary-foreground bg-primary px-4 py-1 rounded-full">
              {leftTitle}
            </span>
          </div>
          <p className="text-foreground">{leftContent}</p>
        </div>

        {/* Right - How */}
        <div className="bg-primary/10 rounded-xl p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center">
              <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <span className="text-lg font-semibold text-primary-foreground bg-primary px-4 py-1 rounded-full">
              {rightTitle}
            </span>
          </div>
          <ul className="space-y-2">
            {rightItems.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {exampleContent && (
        <div className="bg-primary rounded-xl p-4 flex items-start gap-4">
          <span className="text-lg font-semibold text-primary-foreground whitespace-nowrap">
            {exampleLabel}
          </span>
          <p className="text-primary-foreground">{exampleContent}</p>
        </div>
      )}
    </BaseSlide>
  );
};
