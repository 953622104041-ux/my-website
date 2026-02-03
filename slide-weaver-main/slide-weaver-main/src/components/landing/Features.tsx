import { Zap, FileText, Globe } from "lucide-react";

export const Features = () => {
    const features = [
        {
            icon: <Zap className="w-8 h-8 text-blue-500" />,
            color: "bg-blue-50 text-blue-500",
            title: "Presentations",
            description: "Stunning slides with consistent branding in minutes. Export to PPT, Google Slides, and more.",
            image: "linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)",
            imgSrc: "/illustrations/gamma_presentation_preview.png"
        },
        {
            icon: <FileText className="w-8 h-8 text-indigo-500" />,
            color: "bg-indigo-50 text-indigo-500",
            title: "Documents",
            description: "Show-stopping proposals, PDFs, visual aids and more, lightning-fast on any topic.",
            image: "linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)",
            imgSrc: "/illustrations/gamma_document_preview.png"
        },
        {
            icon: <Globe className="w-8 h-8 text-sky-500" />,
            color: "bg-sky-50 text-sky-500",
            title: "Websites",
            description: "Business sites, landing pages, portfolios and more. Faster than you can blink. No coding required.",
            image: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)",
            imgSrc: "/illustrations/gamma_website_preview.png"
        }
    ];

    return (
        <section className="container mx-auto px-4 py-20 bg-secondary/20">
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
                {/* Main large feature card or intro text could go here if copying exact layout, 
                 but screenshots show a grid intro or just grid. 
                 Gamma actually has a grid. Let's do the grid shown in screenshot 2.
              */}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                {features.map((feature, idx) => (
                    <div key={idx} className={`group relative bg-card hover:shadow-xl transition-all duration-300 rounded-3xl overflow-hidden border border-border/50 ${idx === 0 ? 'lg:col-span-1' : ''}`}>
                        <div className="p-8">
                            <div className="flex flex-col gap-4">
                                <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-2`}>
                                    {feature.icon}
                                </div>
                                <h3 className="text-3xl font-display font-bold text-foreground">{feature.title}</h3>
                                <p className="text-muted-foreground text-lg leading-relaxed max-w-sm">{feature.description}</p>
                            </div>
                        </div>
                        <div className="h-64 mt-4 mx-4 bg-muted/30 rounded-t-xl relative overflow-hidden group-hover:scale-[1.02] transition-transform origin-bottom">
                            <div className="absolute inset-0" style={{ background: feature.image }}></div>
                            <img
                                src={feature.imgSrc}
                                alt={feature.title}
                                className="absolute inset-0 w-full h-full object-contain p-4 drop-shadow-lg transform group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
