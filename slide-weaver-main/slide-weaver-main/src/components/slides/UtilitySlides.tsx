import { SlideContent } from '@/types/presentation';
import { BaseSlide } from './SlideBase';
import { parseBulletItems } from './utils';
import illustration from '@/assets/slides/illustration.png';
import { Sparkles, Globe } from 'lucide-react';

interface TableLayoutSlideProps {
  content: SlideContent;
  logo?: string;
}

export const TableLayoutSlide = ({ content, logo }: TableLayoutSlideProps) => {
  const title = content.title as string || 'Data Table';
  const subtitle = content.subtitle as string || '';
  const headers = parseBulletItems(content.headers);
  const row1 = parseBulletItems(content.row1);
  const row2 = parseBulletItems(content.row2);
  const row3 = parseBulletItems(content.row3);

  const rows = [row1, row2, row3].filter(row => row.length > 0);

  return (
    <BaseSlide content={content} logo={logo} title={title} subtitle={subtitle}>
      <div className="overflow-hidden rounded-xl border border-slate-200 mt-4 shadow-sm">
        <table className="w-full">
          <thead>
            <tr className="bg-primary text-primary-foreground">
              {headers.map((header, index) => (
                <th key={index} className="px-4 py-3 text-left font-semibold">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`border-b border-border last:border-0 ${rowIndex % 2 === 0 ? 'bg-card' : 'bg-secondary/30'
                  }`}
              >
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="px-4 py-3 text-foreground">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </BaseSlide>
  );
};

interface QnAFinalSlideProps {
  content: SlideContent;
  logo?: string;
}

export const QnAFinalSlide = ({ content, logo }: QnAFinalSlideProps) => {
  const title = content.title as string || 'Q&A and Workshop Wrap-up';
  const subtitle = content.subtitle as string || '';
  const reflectionQuestion = content.reflectionQuestion as string || '';
  const callToAction = content.callToAction as string || '';

  return (
    <BaseSlide content={content} logo={logo} title={title} subtitle={subtitle}>
      <div className="flex flex-col items-center justify-center h-full text-center">

        {reflectionQuestion && (
          <div className="bg-secondary/50 rounded-xl p-6 max-w-2xl mb-6">
            <p className="text-lg text-foreground italic">{reflectionQuestion}</p>
          </div>
        )}

        {callToAction && (
          <p className="text-muted-foreground">{callToAction}</p>
        )}

        <div className="mt-8 flex items-center gap-4">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>
    </BaseSlide>
  );
};

interface SectionTitleSlideProps {
  content: SlideContent;
  logo?: string;
}

export const SectionTitleSlide = ({ content, logo }: SectionTitleSlideProps) => {
  const title = content.title as string || 'Section Title';

  return (
    <BaseSlide content={content} logo={logo} title={title}>
      <div className="flex gap-8 h-full items-center">
        <div className="flex-1 flex flex-col justify-center">
          <p className="text-xl text-slate-600 font-medium leading-relaxed">
            {content.body || content.subtitle || 'Explore the key takeaways and critical insights that define this topic.'}
          </p>
        </div>
        <div className="flex-1 pl-4 flex items-center justify-center">
          <img
            src="/illustrations/thinking_girl.png"
            alt="Illustration"
            className="w-full h-auto max-h-80 object-contain drop-shadow-xl"
          />
        </div>
      </div>
    </BaseSlide>
  );
};
interface ThankYouSlideProps {
  content: SlideContent;
  logo?: string;
}

export const ThankYouSlide = ({ content, logo }: ThankYouSlideProps) => {
  const title = content.title as string || 'Thank You!';
  const subtitle = content.subtitle as string || 'We look forward to working with you.';

  return (
    <BaseSlide content={content} logo={logo} title={title} showHeaderTitle={false}>
      <div className="flex flex-col items-center justify-center h-full text-center">
        <div className="relative mb-12">
          <div className="absolute inset-0 bg-[#007AFF] opacity-10 rounded-full blur-[60px] transform scale-150"></div>
          <div className="w-48 h-48 bg-white border-2 border-blue-50 rounded-[40px] flex items-center justify-center shadow-2xl relative z-10 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <Sparkles className="w-24 h-24 text-[#007AFF] animate-[pulse_3s_ease-in-out_infinite]" />
          </div>
        </div>

        <h1 className="text-7xl font-black text-slate-800 mb-6 tracking-tighter">
          {title}
        </h1>
        <p className="text-2xl text-slate-500 max-w-2xl font-medium tracking-tight">
          {subtitle}
        </p>

        <div className="mt-16 flex items-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-[#007AFF]">
              <Globe className="w-6 h-6" />
            </div>
            <span className="text-sm font-bold text-slate-400">career247.ai</span>
          </div>
        </div>
      </div>
    </BaseSlide>
  );
};
