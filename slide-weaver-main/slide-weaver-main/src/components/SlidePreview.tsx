import { useState } from 'react';
import { Slide } from '@/types/presentation';
import { SlideRenderer } from './slides/SlideRenderer';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Play, Download, Edit, Eye } from 'lucide-react';
import { getLayoutName } from '@/data/layouts';
import logo from '@/assets/raphael-logo.jpg';

interface SlidePreviewProps {
  slides: Slide[];
  onSlideChange?: (slide: Slide) => void;
}

export const SlidePreview = ({ slides, onSlideChange }: SlidePreviewProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPresenting, setIsPresenting] = useState(false);

  const currentSlide = slides[currentIndex];

  const goToSlide = (index: number) => {
    if (index >= 0 && index < slides.length) {
      setCurrentIndex(index);
    }
  };

  const nextSlide = () => goToSlide(currentIndex + 1);
  const prevSlide = () => goToSlide(currentIndex - 1);

  if (slides.length === 0) {
    return (
      <div className="flex items-center justify-center h-96 bg-muted/50 rounded-xl border border-dashed border-border">
        <p className="text-muted-foreground">No slides to preview</p>
      </div>
    );
  }

  if (isPresenting) {
    return (
      <div className="fixed inset-0 bg-background z-50 flex flex-col">
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-6xl aspect-video">
            <SlideRenderer slide={currentSlide} logo={logo} />
          </div>
        </div>
        
        {/* Presentation Controls */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-card/90 backdrop-blur-sm px-6 py-3 rounded-full border border-border shadow-lg">
          <Button variant="ghost" size="icon" onClick={prevSlide} disabled={currentIndex === 0}>
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <span className="text-sm font-medium min-w-[80px] text-center">
            {currentIndex + 1} / {slides.length}
          </span>
          <Button variant="ghost" size="icon" onClick={nextSlide} disabled={currentIndex === slides.length - 1}>
            <ChevronRight className="w-5 h-5" />
          </Button>
          <div className="w-px h-6 bg-border" />
          <Button variant="ghost" size="sm" onClick={() => setIsPresenting(false)}>
            Exit
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Toolbar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={prevSlide} disabled={currentIndex === 0}>
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <span className="text-sm font-medium px-3">
            Slide {currentIndex + 1} of {slides.length}
          </span>
          <Button variant="outline" size="sm" onClick={nextSlide} disabled={currentIndex === slides.length - 1}>
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2" onClick={() => setIsPresenting(true)}>
            <Play className="w-4 h-4" />
            Present
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <Download className="w-4 h-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Main Preview */}
      <div className="bg-muted/30 rounded-xl p-6 border border-border">
        <div className="aspect-video max-w-4xl mx-auto">
          <SlideRenderer slide={currentSlide} logo={logo} />
        </div>
      </div>

      {/* Slide Info */}
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">
          Layout: <span className="text-foreground font-medium">{getLayoutName(currentSlide.layoutId)}</span>
        </span>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={`relative flex-shrink-0 w-32 aspect-video rounded-lg border-2 overflow-hidden transition-all ${
              index === currentIndex 
                ? 'border-primary shadow-glow' 
                : 'border-border hover:border-primary/50'
            }`}
          >
            <div className="absolute inset-0 scale-[0.25] origin-top-left w-[400%] h-[400%]">
              <SlideRenderer slide={slide} logo={logo} />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-1">
              <span className="text-xs text-primary-foreground font-medium">{index + 1}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SlidePreview;
