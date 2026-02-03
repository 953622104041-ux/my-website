import { useLocation, useNavigate } from 'react-router-dom';
import { SlidePreview } from '@/components/SlidePreview';
import { Slide } from '@/types/presentation';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Download, Share2, Play } from 'lucide-react';
import { useState } from 'react';
import { PresentationMode } from '@/components/PresentationMode';

const Editor = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { slides, topic } = location.state as { slides: Slide[]; topic: string } || { slides: [], topic: '' };
    const [isPresenting, setIsPresenting] = useState(false);

    const handleExport = async () => {
        try {
            const { exportToPptx } = await import('@/utils/pptxExport');
            await exportToPptx(slides, topic);
        } catch (error) {
            console.error("Export failed:", error);
            // Fallback to simple print if PPTX generation fails
            window.print();
        }
    };

    if (!slides.length) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-4">
                <h2 className="text-xl font-bold mb-4">No presentation data found</h2>
                <Button onClick={() => navigate('/create')}>Create New</Button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background flex flex-col">
            {isPresenting && (
                <PresentationMode
                    slides={slides}
                    onExit={() => setIsPresenting(false)}
                />
            )}

            {/* Editor Header */}
            <header className="sticky top-0 z-40 bg-white border-b border-border p-4 flex justify-between items-center shadow-sm print:hidden">
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" onClick={() => navigate('/dashboard')}>
                        <ArrowLeft className="w-4 h-4" />
                    </Button>
                    <div>
                        <h1 className="font-bold text-lg">{topic || 'Untitled Presentation'}</h1>
                        <p className="text-xs text-muted-foreground">{slides.length} slides</p>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="gap-2">
                        <Share2 className="w-4 h-4" /> Share
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2" onClick={handleExport}>
                        <Download className="w-4 h-4" /> Export
                    </Button>
                    <Button
                        size="sm"
                        className="gap-2 bg-indigo-600 hover:bg-indigo-700"
                        onClick={() => setIsPresenting(true)}
                    >
                        <Play className="w-4 h-4" /> Present
                    </Button>
                </div>
            </header>

            <main className="flex-1 container mx-auto px-4 py-8 overflow-y-auto">
                <SlidePreview slides={slides} />
            </main>
        </div>
    );
};

export default Editor;
