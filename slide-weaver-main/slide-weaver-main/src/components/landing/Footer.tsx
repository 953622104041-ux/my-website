export const Footer = () => {
    return (
        <footer className="bg-[#0f172a] text-white pt-20 pb-10 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[120%] h-[60%] bg-gradient-to-b from-blue-500 to-transparent blur-3xl opacity-20"></div>
                {/* Big GAMMA Text Background */}
                <div className="absolute top-10 left-0 w-full flex justify-center">
                    <span className="text-[15vw] font-black tracking-tighter text-white opacity-5 select-none">RAPHAEL</span>
                </div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20 text-sm">
                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-lg mb-2">Product</h4>
                        <a href="#" className="text-slate-400 hover:text-white transition-colors">Pricing</a>
                        <a href="#" className="text-slate-400 hover:text-white transition-colors">Inspiration</a>
                        <a href="#" className="text-slate-400 hover:text-white transition-colors">Education</a>
                        <a href="#" className="text-slate-400 hover:text-white transition-colors">Prompt guide</a>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-lg mb-2">Company</h4>
                        <a href="#" className="text-slate-400 hover:text-white transition-colors">About</a>
                        <a href="#" className="text-slate-400 hover:text-white transition-colors">Careers</a>
                        <a href="#" className="text-slate-400 hover:text-white transition-colors">Team</a>
                        <a href="#" className="text-slate-400 hover:text-white transition-colors">Help</a>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-lg mb-2">Social</h4>
                        <a href="#" className="text-slate-400 hover:text-white transition-colors">Instagram</a>
                        <a href="#" className="text-slate-400 hover:text-white transition-colors">LinkedIn</a>
                        <a href="#" className="text-slate-400 hover:text-white transition-colors">TikTok</a>
                        <a href="#" className="text-slate-400 hover:text-white transition-colors">Twitter (X)</a>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-lg mb-2">Legal</h4>
                        <a href="#" className="text-slate-400 hover:text-white transition-colors">Acceptable Use Policy</a>
                        <a href="#" className="text-slate-400 hover:text-white transition-colors">Cookie Notice</a>
                        <a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
                    <p>© {new Date().getFullYear()} Raphael Creatives. All rights reserved.</p>
                    <div className="flex gap-4">
                        <span>English</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
