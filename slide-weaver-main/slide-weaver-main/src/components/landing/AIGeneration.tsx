import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

export const AIGeneration = () => {
    return (
        <section className="container mx-auto px-4 py-24">
            <div className="max-w-5xl mx-auto text-center mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-6">
                    <Sparkles className="w-4 h-4" /> GENERATE
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
                    Skip the blank page, create <br /> brilliance in a flash.
                </h2>

                <div className="grid md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto mt-12">
                    <div className="flex gap-4">
                        <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0 text-blue-600 font-bold">1</div>
                        <p className="text-lg text-muted-foreground">Start with an idea, paste in an outline, or import existing content</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center shrink-0 text-purple-600 font-bold">2</div>
                        <p className="text-lg text-muted-foreground">20+ AI models for highest-quality output</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center shrink-0 text-indigo-600 font-bold">3</div>
                        <p className="text-lg text-muted-foreground">Import your brand or use one of our 100+ themes</p>
                    </div>
                </div>

                <div className="mt-12">
                    <Button size="lg" className="bg-primary hover:bg-blue-600 text-white rounded-full px-10 h-14 text-lg font-bold" asChild>
                        <a href="/create">Start for free</a>
                    </Button>
                </div>
            </div>

            {/* Interactive Mockup */}
            <div className="max-w-4xl mx-auto bg-card border border-border rounded-3xl shadow-2xl overflow-hidden animate-slide-up">
                <div className="bg-muted/30 p-8 md:p-12">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                        <div className="flex-1 w-full relative">
                            <div className="bg-white rounded-xl shadow-sm border border-border p-6 min-h-[200px] flex flex-col justify-center items-center text-center">
                                <Sparkles className="w-12 h-12 text-blue-500 mb-4" />
                                <h3 className="text-xl font-bold mb-2">Generate</h3>
                                <p className="text-muted-foreground mb-4">Begin with a prompt...</p>
                                <div className="w-full max-w-md h-12 bg-muted/20 rounded-lg flex items-center px-4 text-muted-foreground text-sm">
                                    Presentation about space travel...
                                </div>
                            </div>
                        </div>

                        <ArrowRight className="hidden md:block w-8 h-8 text-muted-foreground" />

                        <div className="flex-1 w-full relative">
                            <div className="bg-white rounded-xl shadow-sm border border-border p-2 overflow-hidden">
                                <div className="aspect-video bg-gradient-to-br from-indigo-900 to-purple-900 rounded-lg flex items-center justify-center text-white font-bold">
                                    Preview
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
