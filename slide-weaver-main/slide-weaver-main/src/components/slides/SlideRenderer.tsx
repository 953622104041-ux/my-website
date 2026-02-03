import { Slide } from '@/types/presentation';
import { TitleHeroSlide } from './TitleHeroSlide';
import { AgendaNumberedSlide } from './AgendaNumberedSlide';
import { AgendaSplitSlide } from './AgendaSplitSlide';
import { ContentImageSlide, ExecutiveSummarySlide, IntroductionSlide } from './ContentSlides';
import { DosDontsListSlide, DosDontsComparisonSlide } from './DosDontsSlides';
import { TwoColumnCardsSlide, DeepDiveSlide } from './CardSlides';
import { TimelineFactsSlide, ConclusionTimelineSlide, SummaryBulletsSlide } from './TimelineSlides';
import { TableLayoutSlide, QnAFinalSlide, SectionTitleSlide, ThankYouSlide } from './UtilitySlides';
import { CycleSlide } from './CycleSlide';
import { PillLayoutSlide } from './PillLayoutSlide';

interface SlideRendererProps {
  slide: Slide;
  logo?: string;
}

export const SlideRenderer = ({ slide, logo }: SlideRendererProps) => {
  const { layoutId, content, order } = slide;

  const renderSlide = () => {
    const hideFooter = order === 3;

    switch (layoutId) {
      case 'title-hero':
        return <TitleHeroSlide content={content} logo={logo} />;
      case 'agenda-numbered':
        return <AgendaNumberedSlide content={content} logo={logo} />;
      case 'agenda-split':
        return <AgendaSplitSlide content={content} />;
      case 'section-title':
        return <SectionTitleSlide content={content} logo={logo} />;
      case 'introduction-objectives':
        return <IntroductionSlide content={content} logo={logo} />;
      case 'content-image':
        return <ContentImageSlide content={content} logo={logo} />;
      case 'executive-summary':
        return <ExecutiveSummarySlide content={content} logo={logo} />;
      case 'timeline-facts':
        return <TimelineFactsSlide content={content} logo={logo} />;
      case 'dos-donts-list':
        return <DosDontsListSlide content={content} logo={logo} />;
      case 'dos-donts-comparison':
        return <DosDontsComparisonSlide content={content} logo={logo} />;
      case 'two-column-cards':
        return <TwoColumnCardsSlide content={content} logo={logo} />;
      case 'deep-dive':
        return <DeepDiveSlide content={content} logo={logo} />;
      case 'conclusion-timeline':
        return <ConclusionTimelineSlide content={content} logo={logo} />;
      case 'summary-bullets':
        return <SummaryBulletsSlide content={content} logo={logo} />;
      case 'table-layout':
        return <TableLayoutSlide content={content} logo={logo} />;
      case 'qna-final':
        return <QnAFinalSlide content={content} logo={logo} />;
      case 'features-cycle':
        return <CycleSlide content={content} logo={logo} />;
      case 'pill-10-row':
        return <PillLayoutSlide content={content} logo={logo} />;
      case 'thank-you':
        return <ThankYouSlide content={content} logo={logo} />;
      default:
        return <TitleHeroSlide content={content} logo={logo} />;
    }
  };

  return (
    <div className="w-full h-full flex flex-col overflow-hidden bg-white shadow-sm border border-slate-100 rounded-xl">
      {renderSlide()}
    </div>
  );
};
