import { SlideContent } from '@/types/presentation';
import { BaseSlide } from './SlideBase';

interface TitleHeroSlideProps {
  content: SlideContent;
  logo?: string;
}

export const TitleHeroSlide = ({ content, logo }: TitleHeroSlideProps) => {
  const title = content.title as string || 'Introduction';
  const subtitle = content.subtitle as string || '';
  const moduleTag = content.moduleTag as string || 'Module 1: Statistics and EDA';

  // Function to style the title with a blue "and" or last word if needed
  const renderTitle = (text: string) => {
    const parts = text.split(' ');
    if (parts.length < 3) return text;

    // Find "and" or highlight last two words
    const lastPartIndex = parts.findIndex(p => p.toLowerCase() === 'and');
    if (lastPartIndex !== -1) {
      const before = parts.slice(0, lastPartIndex).join(' ');
      const after = parts.slice(lastPartIndex).join(' ');
      return (
        <>
          {before} <span className="text-[#007AFF]">{after}</span>
        </>
      );
    }

    const head = parts.slice(0, -2).join(' ');
    const tail = parts.slice(-2).join(' ');
    return (
      <>
        {head} <span className="text-[#007AFF]">{tail}</span>
      </>
    );
  };

  return (
    <BaseSlide content={content} moduleTag={moduleTag} showHeaderTitle={false}>
      <div className="flex h-full w-full relative z-10 font-sans items-center">
        {/* Left Content */}
        <div className="w-[45%] flex flex-col justify-center">
          <h1 className={`${title.length > 60 ? 'text-[2rem]' : title.length > 40 ? 'text-[2.5rem]' : title.length > 20 ? 'text-[3.5rem]' : 'text-[4.5rem]'} leading-[1.1] font-bold tracking-tight mb-6 text-[#1d1d1f] break-words`}>
            {renderTitle(title)}
          </h1>
          <p className="text-2xl text-slate-500 font-normal leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Right Visual - Floating Illustration */}
        <div className="w-[55%] flex items-center justify-center pl-4">
          <div className="w-full h-full flex items-center justify-center relative">
            <img
              src={`${(content.image as string) || "/illustrations/slide1_hero.png"}?t=${Date.now()}`}
              alt="Illustration"
              className="w-full h-auto max-h-[95%] object-contain drop-shadow-2xl z-10"
            />
          </div>
        </div>
      </div>
    </BaseSlide>
  );
};
