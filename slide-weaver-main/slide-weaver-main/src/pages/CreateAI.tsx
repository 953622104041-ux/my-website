import { Button } from "@/components/ui/button";
import { Home, Sparkles, Upload, Layout } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const CreateAI = () => {
    const navigate = useNavigate();

    const handleImport = async () => {
        toast.info("Analyzing document...", { duration: 2000 });

        try {
            const { generatePresentation } = await import('@/services/presentationGenerator');
            const slides = await generatePresentation({
                topic: "Q3 Financial Report Analysis",
                audience: "Stakeholders",
                slideCount: 7,
                tone: 'professional'
            });

            toast.success("Document imported successfully!");
            navigate('/editor', { state: { slides, topic: "Q3 Financial Report Analysis" } });
        } catch (e) {
            toast.error("Import failed");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#eef2ff] to-[#f0fdfa] flex flex-col items-center p-6 font-sans">
            {/* Home Button */}
            <div className="absolute top-6 left-6 z-20">
                <Button
                    variant="outline"
                    className="rounded-full gap-2 bg-white/90 backdrop-blur border-slate-200 hover:bg-white text-slate-700 font-semibold h-9 px-4 shadow-sm"
                    onClick={() => navigate('/dashboard')}
                >
                    <Home className="w-4 h-4" /> Home
                </Button>
            </div>

            <div className="max-w-6xl w-full flex flex-col items-center mt-20 z-10">
                <h1 className="text-[36px] md:text-[42px] font-bold text-[#1e293b] mb-3 text-center tracking-tight">
                    Create with AI
                </h1>
                <p className="text-lg text-slate-500 mb-12 font-medium">
                    How would you like to get started?
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-4">
                    {/* Card 1: Generate */}
                    <div
                        onClick={() => navigate('/generate')}
                        className="group bg-white rounded-xl p-4 shadow-sm border-2 border-transparent hover:border-blue-400 hover:shadow-xl transition-all cursor-pointer flex flex-col h-full"
                    >
                        <div className="aspect-[16/10] bg-gradient-to-br from-blue-600 to-sky-400 rounded-lg mb-5 relative overflow-hidden flex items-center justify-center">
                            {/* Scenic vector graphic approximation */}
                            <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-orange-300 to-transparent opacity-80 rounded-[50%_50%_0_0] scale-150 translate-y-4"></div>
                            <Sparkles className="w-12 h-12 text-white fill-white relative z-10" />
                            <div className="absolute top-3 right-3 w-8 h-8 bg-yellow-300 rounded-full blur-sm opacity-80"></div>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-1">Generate</h3>
                        <p className="text-sm text-slate-500 mb-4 flex-grow leading-relaxed">
                            Create from a one-line prompt in a few seconds
                        </p>
                        <div className="mt-auto">
                            <span className="inline-flex items-center px-2 py-1 rounded bg-slate-100 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                                <span className="mr-1">🕒</span> Last Used
                            </span>
                        </div>
                    </div>

                    {/* Card 2: Paste in text */}
                    <div
                        onClick={() => navigate('/generate')}
                        className="group bg-white rounded-xl p-4 shadow-sm border-2 border-transparent hover:border-purple-400 hover:shadow-xl transition-all cursor-pointer flex flex-col h-full"
                    >
                        <div className="aspect-[16/10] bg-zinc-900 rounded-lg mb-5 relative overflow-hidden flex items-center justify-center">
                            <div className="text-5xl font-bold text-white tracking-tighter">Aa</div>
                            {/* Purple hills effect */}
                            <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-tr from-purple-800 to-pink-600 rounded-[100%_0_0_0] scale-[2] translate-y-10"></div>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-1">Paste in text</h3>
                        <p className="text-sm text-slate-500 mb-4 flex-grow leading-relaxed">
                            Create from notes, an outline, or existing content
                        </p>
                    </div>

                    {/* Card 3: Import file or URL */}
                    <div
                        onClick={handleImport}
                        className="group bg-white rounded-xl p-4 shadow-sm border-2 border-transparent hover:border-sky-400 hover:shadow-xl transition-all cursor-pointer flex flex-col h-full"
                    >
                        <div className="aspect-[16/10] bg-gradient-to-b from-sky-400 to-emerald-400 rounded-lg mb-5 relative overflow-hidden flex items-center justify-center">
                            <div className="bg-white rounded-lg p-2 shadow-lg z-10">
                                <Upload className="w-6 h-6 text-sky-600" />
                            </div>
                            <div className="absolute bottom-0 w-full h-1/3 bg-green-500/50 blur-xl"></div>
                            <div className="absolute top-8 right-8 w-12 h-12 bg-pink-300 rounded-full blur-md opacity-60"></div>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-1">Import file or URL</h3>
                        <p className="text-sm text-slate-500 mb-4 flex-grow leading-relaxed">
                            Enhance existing docs, presentations, or webpages
                        </p>
                    </div>

                    {/* Card 4: Generate from template */}
                    <div
                        onClick={() => navigate('/dashboard', { state: { tab: 'templates' } })}
                        className="group bg-white rounded-xl p-4 shadow-sm border-2 border-transparent hover:border-pink-400 hover:shadow-xl transition-all cursor-pointer flex flex-col h-full"
                    >
                        <div className="aspect-[16/10] bg-indigo-900 rounded-lg mb-5 relative overflow-hidden flex items-center justify-center">
                            <Layout className="w-12 h-12 text-white/90 z-10" />
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 via-purple-500 to-orange-400 opacity-80"></div>
                            {/* Layered paper effect */}
                            <div className="absolute w-full h-full opacity-30 bg-white/10 skew-y-12 scale-150"></div>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-1">Generate from template</h3>
                        <p className="text-sm text-slate-500 mb-4 flex-grow leading-relaxed">
                            Fill in and customize a structured template
                        </p>
                        <div className="mt-auto">
                            <span className="inline-flex items-center px-2 py-1 rounded bg-green-100 text-[10px] font-bold text-green-700 uppercase tracking-wider">
                                New
                            </span>
                        </div>
                    </div>
                </div>

                {/* Bottom Banner with Studio Mode */}
                <div className="w-full max-w-[calc(100%-2rem)] md:max-w-6xl mt-12 bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl p-1.5 flex shadow-sm relative overflow-hidden">

                    <div className="bg-white/40 backdrop-blur-md rounded-lg w-full p-4 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 border border-white/50">
                        <div className="flex items-center gap-4">
                            <Sparkles className="w-5 h-5 text-indigo-700 fill-indigo-700" />
                            <div>
                                <div className="flex items-center gap-2 mb-0.5">
                                    <span className="font-bold text-slate-900">Introducing Studio mode</span>
                                    <span className="bg-[#1e40af] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-[4px]">PRO</span>
                                </div>
                                <p className="text-sm text-slate-600">Use images to tell a story, with immersive visuals and text that flow together</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <Button className="bg-[#1d4ed8] hover:bg-[#1e40af] text-white rounded-full px-6 font-semibold h-9 text-sm shadow-lg shadow-blue-500/20">
                                Try Studio mode
                            </Button>
                        </div>
                    </div>

                    <div className="absolute right-0 bottom-0 h-full w-48 bg-gradient-to-l from-pink-200 to-transparent opacity-50 z-0 pointer-events-none"></div>
                </div>
            </div>
        </div>
    );
};

export default CreateAI;
