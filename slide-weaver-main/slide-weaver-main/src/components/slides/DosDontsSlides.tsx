import { SlideContent } from '@/types/presentation';
import { BaseSlide } from './SlideBase';
import { parseBulletItems } from './utils';
import { Check, X } from 'lucide-react';

interface DosDontsListSlideProps {
  content: SlideContent;
  logo?: string;
}

export const DosDontsListSlide = ({ content, logo }: DosDontsListSlideProps) => {
  const title = content.title as string || "Dos and Don'ts";
  const listType = content.listType as string || 'do';
  const items = parseBulletItems(content.items);
  const isDo = listType.toLowerCase().includes('do') && !listType.toLowerCase().includes("don't");

  return (
    <BaseSlide content={content} logo={logo} title={title}>
      <h3 className="text-lg font-extrabold mb-6 flex items-center gap-2 text-slate-900">
        {isDo ? (
          <>
            <Check className="w-6 h-6 text-success" />
            <span>Do:</span>
          </>
        ) : (
          <>
            <X className="w-6 h-6 text-error" />
            <span>Don't:</span>
          </>
        )}
      </h3>
      <div className="space-y-5">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className={`w-6 h-6 rounded flex items-center justify-center ${isDo ? 'text-success' : 'text-error'
              }`}>
              {isDo ? <Check className="w-5 h-5" /> : <X className="w-5 h-5" />}
            </div>
            <span className="text-lg text-slate-700 font-semibold tracking-tight">{item}</span>
          </div>
        ))}
      </div>
    </BaseSlide>
  );
};

interface DosDontsComparisonSlideProps {
  content: SlideContent;
  logo?: string;
}

export const DosDontsComparisonSlide = ({ content, logo }: DosDontsComparisonSlideProps) => {
  const title = content.title as string || "Quick Do's & Don'ts";
  const doItems = parseBulletItems(content.doItems);
  const dontItems = parseBulletItems(content.dontItems);

  return (
    <BaseSlide content={content} logo={logo} title={title}>
      <div className="grid grid-cols-2 gap-8 mt-4">
        {/* Do's Column */}
        <div>
          <h3 className="text-xl font-bold text-success mb-4">Do's</h3>
          <div className="space-y-4">
            {doItems.map((item, index) => (
              <div key={index} className="flex items-center gap-3 py-3 border-b border-dashed border-muted">
                <div className="w-8 h-8 rounded-full bg-success flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-success-foreground" />
                </div>
                <span className="text-lg text-slate-700 font-semibold tracking-tight">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Don'ts Column */}
        <div>
          <h3 className="text-xl font-bold text-error mb-4">Don'ts</h3>
          <div className="space-y-4">
            {dontItems.map((item, index) => (
              <div key={index} className="flex items-center gap-3 py-3 border-b border-dashed border-muted">
                <div className="w-8 h-8 rounded-full bg-error flex items-center justify-center flex-shrink-0">
                  <X className="w-5 h-5 text-error-foreground" />
                </div>
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BaseSlide>
  );
};
