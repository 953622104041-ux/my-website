import { useState } from 'react';
import { Navbar } from '@/components/landing/Navbar';
import { Hero } from '@/components/landing/Hero';
import { Features } from '@/components/landing/Features';
import { AIGeneration } from '@/components/landing/AIGeneration';
import { Footer } from '@/components/landing/Footer';
import { PresentationInput, Slide } from '@/types/presentation';
import { SlidePreview } from '@/components/SlidePreview';
import { generatePresentation } from '@/services/presentationGenerator';
import { Sparkles } from 'lucide-react';

type AppView = 'home' | 'generating' | 'editor';

const Index = () => {
  const [view, setView] = useState<AppView>('home');
  const [slides, setSlides] = useState<Slide[]>([]);
  const [presentationTopic, setPresentationTopic] = useState('');

  // This function would potentially be passed down to the "Start for free" buttons
  // or a specific input in the future. For now, we are focusing on the landing page visuals.
  // The original functionality is preserved if we decide to re-integrate the form.
  const handleGenerate = async (input: PresentationInput) => {
    setPresentationTopic(input.topic);
    setView('generating');

    try {
      const generatedSlides = await generatePresentation(input);
      setSlides(generatedSlides);
      setView('editor');
    } catch (error) {
      console.error('Generation failed:', error);
      setView('home');
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      {view === 'home' && (
        <>
          <Navbar />
          <main>
            <section id="about">
              <Hero />
            </section>
            <section id="products">
              <Features />
            </section>
            <section id="solutions">
              <AIGeneration />
            </section>
            <section id="pricing">
              {/* Placeholder for pricing, or maybe mapped to future component */}
            </section>
          </main>
          <Footer />
        </>
      )}

      {view === 'generating' && (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-background">
          <div className="max-w-lg mx-auto text-center animate-fade-in">
            <div className="relative w-24 h-24 mx-auto mb-8">
              <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" />
              <div className="absolute inset-2 bg-primary/40 rounded-full animate-pulse" />
              <div className="absolute inset-4 bg-primary rounded-full flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-primary-foreground animate-pulse" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-3">Generating your presentation...</h2>
            <p className="text-muted-foreground mb-2">Creating slide flow and content</p>
            <p className="text-sm text-primary font-medium">{presentationTopic}</p>
          </div>
        </div>
      )}

      {view === 'editor' && (
        <div className="min-h-screen bg-background">
          {/* Simple header for editor view */}
          <header className="sticky top-0 z-40 bg-card/80 backdrop-blur-md border-b border-border p-4 flex justify-between items-center">
            <h1 className="font-bold">Editor</h1>
            <button onClick={() => setView('home')} className="text-sm">Exit</button>
          </header>
          <main className="container mx-auto px-4 py-8 animate-slide-up">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-1">{presentationTopic}</h2>
              <p className="text-muted-foreground">{slides.length} slides generated</p>
            </div>
            <SlidePreview slides={slides} />
          </main>
        </div>
      )}
    </div>
  );
};

export default Index;
