import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
    Home,
    Presentation,
    LayoutTemplate,
    Globe,
    Settings,
    MoreHorizontal,
    Folder,
    Trash,
    Search,
    Bell,
    Plus,
    LogOut,
    ChevronDown,
    LayoutGrid,
    List,
    Clock,
    User,
    Star,
    FileText,
    Sparkles,
    Import,
    Zap,
    Filter
} from "lucide-react";
import logo from "@/assets/raphael-logo-new.png";

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('home');
    const navigate = useNavigate();
    const location = useLocation();
    const [projects, setProjects] = useState<any[]>([]);

    useEffect(() => {
        if (location.state && (location.state as any).tab) {
            setActiveTab((location.state as any).tab);
        }
    }, [location.state]);

    useEffect(() => {
        const saved = localStorage.getItem('raphel-projects');
        if (saved) {
            try {
                setProjects(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to load projects", e);
            }
        }
    }, []);

    const handleCreateNew = () => {
        navigate('/create');
    };

    const handleDeleteProject = (e: React.MouseEvent, id: string) => {
        e.stopPropagation();
        const updated = projects.filter(p => p.id !== id);
        setProjects(updated);
        localStorage.setItem('raphel-projects', JSON.stringify(updated));
    };

    const handleOpenProject = (project: any) => {
        navigate('/editor', { state: { slides: project.slides, topic: project.title, projectId: project.id } });
    };

    const handleOpenMockProject = async (topic: string) => {
        // Dynamic import for performance
        const { generatePresentation } = await import('@/services/presentationGenerator');

        // Mock loading - usually would be state, but we want fast feedback
        const input = {
            topic,
            audience: 'General',
            slideCount: 6,
            tone: 'professional' as const
        };

        const slides = await generatePresentation(input);

        // Ensure consistent images are used based on topic keywords
        navigate('/editor', { state: { slides, topic } });
    };

    // Helper to determine tab styles
    const getTabClass = (id: string) => {
        const base = "flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer w-full text-left";
        if (activeTab === id) {
            return `${base} bg-blue-50 text-blue-600 font-semibold`;
        }
        return `${base} text-slate-600 hover:bg-slate-50`;
    };

    return (
        <div className="flex h-screen bg-[#Fcfcfc] font-sans text-slate-900">
            {/* Sidebar */}
            <aside className="w-[260px] bg-white flex flex-col hidden md:flex border-r border-slate-100">
                <div className="p-4 mb-2">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
                            RC
                        </div>
                        <div className="flex-1">
                            <div className="text-sm font-bold flex items-center gap-1 cursor-pointer hover:bg-slate-50 p-1 -ml-1 rounded">
                                Raphael Workspace <ChevronDown className="w-3 h-3 text-slate-400" />
                            </div>
                            <div className="flex items-center gap-1.5 px-0.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                <span className="text-[11px] text-slate-500 font-medium">Pro Plan</span>
                            </div>
                        </div>
                    </div>

                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium h-10 rounded-lg justify-start px-3 gap-2 shadow-sm mb-1" onClick={handleCreateNew}>
                        <Plus className="w-5 h-5" /> New Project
                    </Button>
                </div>

                <nav className="flex-1 overflow-y-auto px-2 space-y-0.5">
                    <button onClick={() => setActiveTab('home')} className={getTabClass('home')}>
                        <Home className="w-4 h-4" /> Home
                    </button>
                    <button onClick={() => setActiveTab('templates')} className={getTabClass('templates')}>
                        <LayoutTemplate className="w-4 h-4" /> Templates
                    </button>
                    <button onClick={() => setActiveTab('themes')} className={getTabClass('themes')}>
                        <Sparkles className="w-4 h-4" /> Themes
                    </button>

                    <div className="pt-8 px-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Library
                    </div>

                    <button onClick={() => setActiveTab('shared')} className={getTabClass('shared')}>
                        <User className="w-4 h-4" /> Shared with me
                    </button>
                    <button onClick={() => setActiveTab('recent')} className={getTabClass('recent')}>
                        <Clock className="w-4 h-4" /> Recent
                    </button>
                    <button onClick={() => setActiveTab('favorites')} className={getTabClass('favorites')}>
                        <Star className="w-4 h-4" /> Favorites
                    </button>

                    <div className="pt-8 px-3 text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Tags
                    </div>

                    <div className="px-3 flex flex-wrap gap-2">
                        <span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold cursor-pointer hover:bg-blue-100">#work</span>
                        <span className="px-2.5 py-1 rounded-full bg-purple-50 text-purple-600 text-xs font-semibold cursor-pointer hover:bg-purple-100">#design</span>
                        <button className="px-2 py-1 rounded-full hover:bg-slate-100 text-slate-400 text-xs border border-transparent hover:border-slate-200 transition-colors flex items-center justify-center">
                            <Plus className="w-3 h-3" />
                        </button>
                    </div>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col overflow-hidden bg-white">
                <header className="h-16 flex items-center justify-between px-8 bg-white sticky top-0 z-20">
                    <div className="flex items-center gap-2 text-sm">
                        <span className="font-semibold text-blue-600 cursor-pointer hover:underline">Raphael</span>
                        <span className="text-slate-300">/</span>
                        <span className="font-semibold text-slate-900 capitalize">{activeTab}</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="hidden md:flex relative w-64 group">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                            <input
                                type="text"
                                placeholder="Search presentations..."
                                className="w-full bg-slate-50 border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all outline-none placeholder:text-slate-400"
                            />
                        </div>

                        <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors relative">
                            <Bell className="w-5 h-5" />
                            <span className="absolute top-2 right-2.5 w-1.5 h-1.5 bg-red-500 rounded-full border border-white"></span>
                        </button>

                        <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold cursor-pointer hover:ring-4 hover:ring-blue-50 transition-all">
                            RC
                        </div>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto px-8 py-6">
                    {/* --- HOME VIEW --- */}
                    {activeTab === 'home' && (
                        <>
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
                                <div>
                                    <h1 className="text-3xl font-bold text-slate-900 mb-1">Good afternoon, There</h1>
                                    <p className="text-slate-500">Here's what's happening with your projects</p>
                                </div>
                                <div className="flex gap-3">
                                    <Button variant="outline" className="rounded-lg h-9 px-4 gap-2 bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900 font-medium text-sm shadow-sm">
                                        <Filter className="w-4 h-4" /> Filter
                                    </Button>
                                    <Button className="rounded-lg h-9 px-4 gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm shadow-sm" onClick={handleCreateNew}>
                                        <Zap className="w-4 h-4 fill-white" /> Quick Create
                                    </Button>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {/* Create New Card */}
                                <div
                                    onClick={handleCreateNew}
                                    className="group bg-white rounded-xl border-2 border-dashed border-slate-200 hover:border-blue-400 p-6 flex flex-col items-center justify-center cursor-pointer transition-all h-[260px]"
                                >
                                    <div className="h-14 w-14 rounded-full bg-blue-50 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-blue-100 transition-all">
                                        <Plus className="w-7 h-7 text-blue-600" />
                                    </div>
                                    <span className="font-semibold text-slate-700">Create new project</span>
                                </div>

                                {/* Dynamic User Projects */}
                                {projects.map((project) => (
                                    <div
                                        key={project.id}
                                        onClick={() => handleOpenProject(project)}
                                        className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all cursor-pointer h-[260px] flex flex-col relative"
                                    >
                                        <div className="flex-1 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 relative flex flex-col justify-center items-center text-center">
                                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-3 text-blue-600">
                                                <Presentation className="w-6 h-6 fill-blue-600" />
                                            </div>
                                            <h3 className="font-bold text-lg text-slate-800 line-clamp-2">{project.title}</h3>
                                            <span className="text-xs text-slate-500 mt-2 font-medium">{project.slideCount} slides</span>
                                        </div>
                                        <div className="p-4 border-t border-slate-100 bg-white flex justify-between items-center">
                                            <div>
                                                <h4 className="font-bold text-slate-900 text-sm mb-0.5 truncate max-w-[120px]">{project.title}</h4>
                                                <p className="text-[10px] text-slate-500 font-medium">
                                                    {new Date(project.date).toLocaleDateString()}
                                                </p>
                                            </div>

                                            <button
                                                onClick={(e) => handleDeleteProject(e, project.id)}
                                                className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors"
                                                title="Delete Project"
                                            >
                                                <Trash className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                ))}

                                {/* Example/Mock Projects (Static) */}
                                <div
                                    onClick={() => handleOpenMockProject('Q1 Marketing Strategy')}
                                    className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all cursor-pointer h-[260px] flex flex-col opacity-60 hover:opacity-100"
                                >
                                    <div className="flex-1 bg-[#ffebe6] p-6 relative">
                                        <h3 className="font-bold text-xl text-[#9f3a3a]">Q1 Marketing Strategy</h3>
                                        <div className="absolute bottom-5 left-6 flex gap-1.5">
                                            <span className="w-2.5 h-2.5 rounded-full bg-[#ff8f7e]"></span>
                                            <span className="w-2.5 h-2.5 rounded-full bg-[#ffb97e]"></span>
                                        </div>
                                    </div>
                                    <div className="p-4 border-t border-slate-100 bg-white">
                                        <h4 className="font-bold text-slate-900 text-sm mb-1 truncate">Q1 Marketing Example</h4>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                    {/* --- TEMPLATES VIEW --- */}
                    {activeTab === 'templates' && (
                        <div>
                            <div className="flex justify-between items-end mb-6">
                                <div>
                                    <h1 className="text-3xl font-bold text-slate-900 mb-1">Templates</h1>
                                    <p className="text-slate-500">Start with a professionally designed layout</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    {
                                        name: "Corporate Blue Sync",
                                        img: "/templates/blue_deck.png",
                                        tag: "Business",
                                        features: ["Professional Grids", "Data Visualization", "Team Bios"]
                                    },
                                    {
                                        name: "Creative Brand Portfolio",
                                        img: "/templates/portfolio.png",
                                        tag: "Creative",
                                        features: ["Gallery Layouts", "Minimal Typography", "Editorial Style"]
                                    },
                                    {
                                        name: "New Product Launch",
                                        img: "/templates/tech_product.png",
                                        tag: "Innovation",
                                        features: ["Feature Highlights", "Tech Specs", "Launch Roadmap"]
                                    },
                                    {
                                        name: "Executive Summary 2024",
                                        img: "/templates/exec_summary.png",
                                        tag: "Corporate",
                                        features: ["Growth Metrics", "Isometric Illustrations", "Strategy Maps"]
                                    },
                                    {
                                        name: "Annual Review 2023",
                                        img: "/templates/review.png",
                                        tag: "Finance",
                                        features: ["Yearly KPI Cards", "Financial Charts", "Future Outlook"]
                                    }
                                ].map((template, i) => (
                                    <div
                                        key={i}
                                        onClick={handleCreateNew}
                                        className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all cursor-pointer h-[320px] flex flex-col relative">
                                        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-[10px] font-bold text-slate-600 uppercase tracking-wide z-10">
                                            {template.tag}
                                        </div>
                                        <div className="flex-1 bg-slate-100 overflow-hidden relative">
                                            {/* Creative Image Display */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-[1]" />
                                            <img
                                                src={template.img}
                                                alt={template.name}
                                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                            />
                                        </div>
                                        <div className="p-4 border-t border-slate-100 bg-white z-10 relative flex flex-col gap-3">
                                            <div className="flex justify-between items-start">
                                                <h4 className="font-bold text-slate-900 text-sm">{template.name}</h4>
                                                <button className="h-6 w-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <Plus className="w-3 h-3" />
                                                </button>
                                            </div>

                                            <div className="flex flex-wrap gap-1.5">
                                                {template.features.map((feature, idx) => (
                                                    <span key={idx} className="px-2 py-0.5 bg-slate-50 text-slate-500 rounded text-[10px] border border-slate-100 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-100 transition-colors">
                                                        {feature}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* --- THEMES VIEW --- */}
                    {activeTab === 'themes' && (
                        <div>
                            <h1 className="text-3xl font-bold text-slate-900 mb-6">Custom Themes</h1>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                <div className="p-6 bg-blue-50 rounded-xl border border-blue-100 cursor-pointer hover:shadow-md transition-all group">
                                    <div className="flex gap-2 mb-4">
                                        <div className="w-8 h-8 rounded-full bg-blue-600 shadow-sm group-hover:scale-110 transition-transform"></div>
                                        <div className="w-8 h-8 rounded-full bg-indigo-500 shadow-sm"></div>
                                        <div className="w-8 h-8 rounded-full bg-white border border-slate-200 shadow-sm"></div>
                                    </div>
                                    <h3 className="font-bold text-slate-900">Corporate Blue</h3>
                                </div>
                                <div className="p-6 bg-purple-50 rounded-xl border border-purple-100 cursor-pointer hover:shadow-md transition-all group">
                                    <div className="flex gap-2 mb-4">
                                        <div className="w-8 h-8 rounded-full bg-purple-600 shadow-sm group-hover:scale-110 transition-transform"></div>
                                        <div className="w-8 h-8 rounded-full bg-pink-500 shadow-sm"></div>
                                        <div className="w-8 h-8 rounded-full bg-white border border-slate-200 shadow-sm"></div>
                                    </div>
                                    <h3 className="font-bold text-slate-900">Creative Studio</h3>
                                </div>
                                <div className="p-6 bg-slate-900 rounded-xl border border-slate-800 cursor-pointer hover:shadow-md transition-all group">
                                    <div className="flex gap-2 mb-4">
                                        <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 shadow-sm group-hover:scale-110 transition-transform"></div>
                                        <div className="w-8 h-8 rounded-full bg-slate-600 shadow-sm"></div>
                                        <div className="w-8 h-8 rounded-full bg-white shadow-sm"></div>
                                    </div>
                                    <h3 className="font-bold text-white">Dark Mode</h3>
                                </div>
                                {/* New Themes */}
                                <div className="p-6 bg-emerald-50 rounded-xl border border-emerald-100 cursor-pointer hover:shadow-md transition-all group">
                                    <div className="flex gap-2 mb-4">
                                        <div className="w-8 h-8 rounded-full bg-emerald-600 shadow-sm group-hover:scale-110 transition-transform"></div>
                                        <div className="w-8 h-8 rounded-full bg-teal-500 shadow-sm"></div>
                                        <div className="w-8 h-8 rounded-full bg-[#fcfcFc] border border-emerald-200 shadow-sm"></div>
                                    </div>
                                    <h3 className="font-bold text-slate-900">Forest Serenity</h3>
                                </div>
                                <div className="p-6 bg-orange-50 rounded-xl border border-orange-100 cursor-pointer hover:shadow-md transition-all group">
                                    <div className="flex gap-2 mb-4">
                                        <div className="w-8 h-8 rounded-full bg-orange-500 shadow-sm group-hover:scale-110 transition-transform"></div>
                                        <div className="w-8 h-8 rounded-full bg-rose-500 shadow-sm"></div>
                                        <div className="w-8 h-8 rounded-full bg-amber-200 shadow-sm"></div>
                                    </div>
                                    <h3 className="font-bold text-slate-900">Sunset Horizon</h3>
                                </div>
                                <div className="p-6 bg-fuchsia-50 rounded-xl border border-fuchsia-100 cursor-pointer hover:shadow-md transition-all group">
                                    <div className="flex gap-2 mb-4">
                                        <div className="w-8 h-8 rounded-full bg-fuchsia-600 shadow-sm group-hover:scale-110 transition-transform"></div>
                                        <div className="w-8 h-8 rounded-full bg-violet-500 shadow-sm"></div>
                                        <div className="w-8 h-8 rounded-full bg-pink-300 shadow-sm"></div>
                                    </div>
                                    <h3 className="font-bold text-slate-900">Berry Blast</h3>
                                </div>
                                <div className="p-6 bg-cyan-50 rounded-xl border border-cyan-100 cursor-pointer hover:shadow-md transition-all group">
                                    <div className="flex gap-2 mb-4">
                                        <div className="w-8 h-8 rounded-full bg-cyan-600 shadow-sm group-hover:scale-110 transition-transform"></div>
                                        <div className="w-8 h-8 rounded-full bg-blue-500 shadow-sm"></div>
                                        <div className="w-8 h-8 rounded-full bg-sky-300 shadow-sm"></div>
                                    </div>
                                    <h3 className="font-bold text-slate-900">Ocean Depth</h3>
                                </div>
                                <div className="p-6 bg-slate-100 rounded-xl border border-slate-200 cursor-pointer hover:shadow-md transition-all group">
                                    <div className="flex gap-2 mb-4">
                                        <div className="w-8 h-8 rounded-full bg-slate-500 shadow-sm group-hover:scale-110 transition-transform"></div>
                                        <div className="w-8 h-8 rounded-full bg-gray-400 shadow-sm"></div>
                                        <div className="w-8 h-8 rounded-full bg-white border border-gray-300 shadow-sm"></div>
                                    </div>
                                    <h3 className="font-bold text-slate-900">Slate Minimal</h3>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* --- SHARED / RECENT / FAVORITES PLACEHOLDERS --- */}
                    {(activeTab === 'shared' || activeTab === 'recent' || activeTab === 'favorites') && (
                        <div className="flex flex-col items-center justify-center p-12 text-center h-[50vh]">
                            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                                {activeTab === 'shared' && <User className="w-8 h-8 text-slate-300" />}
                                {activeTab === 'recent' && <Clock className="w-8 h-8 text-slate-300" />}
                                {activeTab === 'favorites' && <Star className="w-8 h-8 text-slate-300" />}
                            </div>
                            <h2 className="text-xl font-bold text-slate-900 mb-2 capitalize">No {activeTab} items</h2>
                            <p className="text-slate-500 max-w-xs">Items {activeTab === 'shared' ? 'shared with you' : activeTab === 'recent' ? 'you viewed recently' : 'you starred'} will appear here.</p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
