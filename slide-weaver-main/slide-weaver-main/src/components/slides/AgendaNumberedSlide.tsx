import { SlideContent } from '@/types/presentation';
import { BaseSlide } from './SlideBase';
import { parseBulletItems } from './utils';

interface AgendaNumberedSlideProps {
  content: SlideContent;
  logo?: string;
}

export const AgendaNumberedSlide = ({ content, logo }: AgendaNumberedSlideProps) => {
  const title = content.title as string || 'Agenda';
  const items = parseBulletItems(content.items);

  return (
    <BaseSlide content={content} logo={logo} title={title}>
      <div className="space-y-4 mt-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 py-2 border-b border-dashed border-primary/30"
          >
            <span className="text-lg text-slate-700 font-semibold tracking-tight flex-1">{item}</span>
            <span className="text-2xl font-bold text-primary">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
        ))}
      </div>
    </BaseSlide>
  );
};
