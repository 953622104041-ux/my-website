import { useState, useEffect, useCallback } from 'react';
import { Slide } from '@/types/presentation';
import { SlideRenderer } from './slides/SlideRenderer';
import { Button } from '@/components/ui/button';
import { X, ChevronLeft, ChevronRight, Maximize, Minimize } from 'lucide-react';

interface PresentationModeProps {
    slides: Slide[];
    onExit: () => void;
    initialSlideIndex?: number;
}

export const PresentationMode = ({ slides, onExit, initialSlideIndex = 0 }: PresentationModeProps) => {
    const [currentIndex, setCurrentIndex] = useState(initialSlideIndex);
    const [isFullscreen, setIsFullscreen] = useState(false);

    // Toggle fullscreen
    const toggleFullscreen = useCallback(() => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch((e) => {
                console.error("Error attempting to enable fullscreen:", e);
            });
            setIsFullscreen(true);
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
                setIsFullscreen(false);
            }
        }
    }, []);

    // Handle navigation
    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
    }, [slides.length]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
    }, []);

    // Keyboard controls
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight' || e.key === 'Space') {
                nextSlide();
            } else if (e.key === 'ArrowLeft') {
                prevSlide();
            } else if (e.key === 'Escape') {
                if (document.fullscreenElement) {
                    document.exitFullscreen();
                    setIsFullscreen(false);
                } else {
                    onExit();
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [nextSlide, prevSlide, onExit]);

    // Initial fullscreen
    useEffect(() => {
        // Optional: Auto-trigger fullscreen on mount
        // toggleFullscreen(); 
        // User gesture requirement might block this in some browsers
    }, []);

    if (!slides.length) return null;

    const currentSlide = slides[currentIndex];
    // Calculate progress
    const progress = ((currentIndex + 1) / slides.length) * 100;

    return (
        <div className="fixed inset-0 z-[100] bg-black text-white flex flex-col h-screen w-screen overflow-hidden">
            {/* Controls Overlay (Bottom) */}
            <div className="absolute bottom-0 left-0 right-0 z-50 p-6 flex justify-between items-end opacity-0 hover:opacity-100 transition-opacity bg-gradient-to-t from-black/50 to-transparent">
                <div className="text-sm font-medium opacity-80">
                    {currentIndex + 1} / {slides.length}
                </div>

                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 rounded-full" onClick={prevSlide} disabled={currentIndex === 0}>
                        <ChevronLeft className="w-6 h-6" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 rounded-full" onClick={nextSlide} disabled={currentIndex === slides.length - 1}>
                        <ChevronRight className="w-6 h-6" />
                    </Button>
                </div>

                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/20" onClick={toggleFullscreen}>
                        {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
                    </Button>
                    <Button variant="ghost" size="icon" className="text-white hover:bg-red-500/80" onClick={onExit}>
                        <X className="w-5 h-5" />
                    </Button>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 h-1 bg-blue-600 transition-all duration-300 z-50" style={{ width: `${progress}%` }} />

            {/* Main Slide Content */}
            <div className="flex-1 w-full h-full flex items-center justify-center p-0 bg-white text-slate-900">
                <SlideRenderer slide={currentSlide} />
            </div>
        </div>
    );
};
