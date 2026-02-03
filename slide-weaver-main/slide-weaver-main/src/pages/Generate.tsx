import { Button } from "@/components/ui/button";
import {
    ArrowLeft,
    Presentation,
    Globe,
    FileText,
    Smartphone,
    ChevronDown,
    Shuffle,
    Code,
    Users,
    Search,
    BarChart,
    Mountain,
    Sparkles
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Generate = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('presentation');
    const [prompt, setPrompt] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const [slideCount, setSlideCount] = useState(10);

    const handleGenerate = async () => {
        if (!prompt.trim()) return;

        setIsGenerating(true);

        try {
            // Import dynamically to avoid circular dependencies
            const { generatePresentation } = await import('@/services/presentationGenerator');

            const input = {
                topic: prompt,
                audience: 'General',
                slideCount: slideCount,
                tone: 'professional' as const
            };

            const slides = await generatePresentation(input);

            // Save to history
            const newProject = {
                id: Date.now().toString(),
                title: prompt,
                date: new Date().toISOString(),
                slideCount: slides.length,
                slides: slides,
                previewImage: '' // Placeholder for future preview
            };

            const existingProjects = JSON.parse(localStorage.getItem('raphel-projects') || '[]');
            localStorage.setItem('raphel-projects', JSON.stringify([newProject, ...existingProjects]));

            navigate('/editor', { state: { slides, topic: prompt, projectId: newProject.id } });
        } catch (error) {
            console.error("Generation failed", error);
            setIsGenerating(false);
        }
    };

    if (isGenerating) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-background">
                <div className="max-w-lg mx-auto text-center animate-fade-in">
                    <div className="relative w-24 h-24 mx-auto mb-8">
                        <div className="absolute inset-0 bg-blue-100 rounded-full animate-ping opacity-75" />
                        <div className="absolute inset-2 bg-blue-200 rounded-full animate-pulse opacity-75" />
                        <div className="absolute inset-4 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                            <Sparkles className="w-8 h-8 text-white animate-pulse" />
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-3">Generating your presentation...</h2>
                    <p className="text-slate-500 mb-2">Creating {slideCount} slides for "{prompt}"</p>
                    <div className="w-64 h-2 bg-slate-100 rounded-full mx-auto mt-6 overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full animate-[loading_1.5s_ease-in-out_infinite]" style={{ width: '50%' }}></div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex flex-col items-center p-6 relative">
            {/* Back Button */}
            <div className="absolute top-6 left-6">
                <Button
                    variant="outline"
                    className="rounded-full gap-2 bg-white hover:bg-slate-50 border-slate-200 text-slate-700 h-10 px-4"
                    onClick={() => navigate('/create')}
                >
                    <ArrowLeft className="w-4 h-4" /> Back
                </Button>
            </div>

            <div className="max-w-4xl w-full flex flex-col items-center mt-12 md:mt-20 z-10">
                <h1 className="text-4xl font-bold text-slate-800 mb-3">Generate</h1>
                <p className="text-xl text-slate-500 mb-10">What would you like to create today?</p>

                {/* Content Type Tabs */}
                <div className="flex gap-4 mb-8 w-full max-w-2xl justify-center">
                    <button
                        onClick={() => setActiveTab('presentation')}
                        className={`flex-1 h-24 rounded-xl border-2 flex flex-col items-center justify-center gap-2 transition-all ${activeTab === 'presentation' ? 'bg-blue-50 border-blue-500 text-blue-600 shadow-sm' : 'bg-white border-transparent hover:border-slate-200 text-slate-500'}`}
                    >
                        <Presentation className="w-6 h-6" />
                        <span className="font-semibold text-sm">Presentation</span>
                    </button>
                    <button
                        onClick={() => setActiveTab('webpage')}
                        className={`flex-1 h-24 rounded-xl border-2 flex flex-col items-center justify-center gap-2 transition-all ${activeTab === 'webpage' ? 'bg-blue-50 border-blue-500 text-blue-600 shadow-sm' : 'bg-white border-transparent hover:border-slate-200 text-slate-500'}`}
                    >
                        <Globe className="w-6 h-6" />
                        <span className="font-semibold text-sm">Webpage</span>
                    </button>
                    <button
                        onClick={() => setActiveTab('document')}
                        className={`flex-1 h-24 rounded-xl border-2 flex flex-col items-center justify-center gap-2 transition-all ${activeTab === 'document' ? 'bg-blue-50 border-blue-500 text-blue-600 shadow-sm' : 'bg-white border-transparent hover:border-slate-200 text-slate-500'}`}
                    >
                        <FileText className="w-6 h-6" />
                        <span className="font-semibold text-sm">Document</span>
                    </button>
                    <button
                        onClick={() => setActiveTab('social')}
                        className={`flex-1 h-24 rounded-xl border-2 flex flex-col items-center justify-center gap-2 transition-all ${activeTab === 'social' ? 'bg-blue-50 border-blue-500 text-blue-600 shadow-sm' : 'bg-white border-transparent hover:border-slate-200 text-slate-500'}`}
                    >
                        <Smartphone className="w-6 h-6" />
                        <span className="font-semibold text-sm">Social</span>
                    </button>
                </div>

                {/* Options Bar */}
                <div className="flex flex-wrap gap-2 mb-4 w-full justify-center">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="rounded-full bg-white border-slate-200 text-slate-700 h-9 text-xs font-medium gap-2 min-w-[100px]">
                                {slideCount} slides <ChevronDown className="w-3 h-3 opacity-50" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="min-w-[100px]">
                            {[8, 10, 15, 20, 30, 40, 50].map((count) => (
                                <DropdownMenuItem key={count} onClick={() => setSlideCount(count)}>
                                    {count} slides
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <Button variant="outline" className="rounded-full bg-white border-slate-200 text-slate-700 h-9 text-xs font-medium gap-2">
                        Classic <ChevronDown className="w-3 h-3 opacity-50" />
                    </Button>
                    <Button variant="outline" className="rounded-full bg-white border-slate-200 text-slate-700 h-9 text-xs font-medium gap-2">
                        Default <ChevronDown className="w-3 h-3 opacity-50" />
                    </Button>
                    <Button variant="outline" className="rounded-full bg-white border-slate-200 text-slate-700 h-9 text-xs font-medium gap-2">
                        English (US) <ChevronDown className="w-3 h-3 opacity-50" />
                    </Button>
                </div>

                {/* Input Area */}
                <div className="w-full bg-white rounded-xl shadow-lg border border-slate-200 p-2 mb-12 transform hover:scale-[1.01] transition-transform duration-300">
                    <textarea
                        className="w-full h-24 p-4 text-lg outline-none resize-none placeholder:text-slate-400 rounded-lg text-slate-800"
                        placeholder="Describe what you'd like to make"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                                e.preventDefault();
                                handleGenerate();
                            }
                        }}
                    ></textarea>
                    <div className="flex justify-between items-center px-2 pb-1">
                        <span className="text-xs text-slate-400">{prompt.length} / 3000</span>
                        <Button
                            className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-6"
                            onClick={handleGenerate}
                            disabled={isGenerating || !prompt.trim()}
                        >
                            {isGenerating ? 'Generating...' : 'Generate outline'}
                        </Button>
                    </div>
                </div>

                {/* Example Prompts */}
                <div className="w-full">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-px bg-slate-200 flex-1"></div>
                        <span className="text-slate-400 text-sm font-medium uppercase tracking-wider">Example prompts</span>
                        <div className="h-px bg-slate-200 flex-1"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-md cursor-pointer transition-all flex items-start gap-3">
                            <div className="p-2 bg-blue-50 rounded-lg text-blue-600 shrink-0">
                                <Code className="w-5 h-5" />
                            </div>
                            <div className="flex-1">
                                <p className="text-slate-700 text-sm font-medium">How to learn web development</p>
                            </div>
                            <PlusIcon />
                        </div>

                        <div className="bg-white p-4 rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-md cursor-pointer transition-all flex items-start gap-3">
                            <div className="p-2 bg-purple-50 rounded-lg text-purple-600 shrink-0">
                                <Users className="w-5 h-5" />
                            </div>
                            <div className="flex-1">
                                <p className="text-slate-700 text-sm font-medium">Conducting a focus group for a new product</p>
                            </div>
                            <PlusIcon />
                        </div>

                        <div className="bg-white p-4 rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-md cursor-pointer transition-all flex items-start gap-3">
                            <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600 shrink-0">
                                <Globe className="w-5 h-5" />
                            </div>
                            <div className="flex-1">
                                <p className="text-slate-700 text-sm font-medium">Uncovering the mysteries of ancient civilizations</p>
                            </div>
                            <PlusIcon />
                        </div>

                        <div className="bg-white p-4 rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-md cursor-pointer transition-all flex items-start gap-3">
                            <div className="p-2 bg-orange-50 rounded-lg text-orange-600 shrink-0">
                                <BarChart className="w-5 h-5" />
                            </div>
                            <div className="flex-1">
                                <p className="text-slate-700 text-sm font-medium">Marketing performance metrics</p>
                            </div>
                            <PlusIcon />
                        </div>

                        <div className="bg-white p-4 rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-md cursor-pointer transition-all flex items-start gap-3">
                            <div className="p-2 bg-green-50 rounded-lg text-green-600 shrink-0">
                                <Mountain className="w-5 h-5" />
                            </div>
                            <div className="flex-1">
                                <p className="text-slate-700 text-sm font-medium">The most beautiful day hikes in the world</p>
                            </div>
                            <PlusIcon />
                        </div>
                    </div>

                    <div className="flex justify-center mt-8">
                        <Button variant="ghost" className="gap-2 text-slate-500 hover:text-slate-700">
                            <Shuffle className="w-4 h-4" /> Shuffle
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const PlusIcon = () => (
    <div className="text-slate-300 hover:text-blue-500 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
    </div>
);

export default Generate;
