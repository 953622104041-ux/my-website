import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import heroImage from "@/assets/hero-mushrooms.png";

export const Hero = () => {
    return (
        <section className="container mx-auto px-4 pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="max-w-2xl animate-slide-up">
                    <div className="mb-6 inline-block">
                        <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center -rotate-6">
                            <span className="text-2xl font-bold text-primary">R</span>
                        </div>
                        <div className="h-2 w-8 bg-primary/20 rounded-full mt-2 mx-auto"></div>
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-foreground leading-[1.1] mb-6">
                        Effortless AI design for presentations, websites, and more
                    </h1>

                    <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
                        Your ideas are brilliant. The universe deserves to see them. A captivating pitch deck? Easy. A stunning website? Done. Make anything you can imagine almost as quickly as you can think it up.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 items-center">
                        <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-blue-600 text-white rounded-full px-8 h-14 text-lg font-semibold shadow-lg shadow-primary/25" asChild>
                            <a href="/create">Start for free</a>
                        </Button>
                        <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full px-8 h-14 text-lg border-2 hover:bg-muted/50 gap-2 font-medium">
                            Watch video <Play className="w-4 h-4 fill-current" />
                        </Button>
                    </div>
                </div>

                <div className="relative animate-fade-in delay-100 hidden md:block">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border/50 bg-secondary/30 aspect-[4/3] group">
                        <img
                            src={heroImage}
                            alt="Gamma AI Hero"
                            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl"></div>

                        {/* Floating UI Elements Mockup */}
                        <div className="absolute top-8 right-8 bg-white/90 backdrop-blur shadow-lg rounded-xl p-4 max-w-xs animate-slide-up delay-300">
                            <h3 className="text-lg font-bold text-primary mb-1">Q1 2025</h3>
                            <p className="text-2xl font-display font-black text-foreground">Growth Report</p>
                        </div>

                        <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur shadow-lg rounded-xl p-3 flex items-center gap-3 animate-slide-up delay-500">
                            <Button size="sm" variant="secondary" className="bg-blue-50 text-blue-600 hover:bg-blue-100">
                                Suggest images ✨
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
