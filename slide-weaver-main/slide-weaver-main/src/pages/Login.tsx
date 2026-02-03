import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Eye } from "lucide-react";
import logo from "@/assets/raphael-logo-new.png";
import loginCollage from "@/assets/login-collage.png";

const GoogleSignInModal = ({ onClose, onLogin }: { onClose: () => void; onLogin: () => void }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="w-[400px] bg-[#202124] rounded-lg shadow-2xl overflow-hidden text-[#e8eaed] font-roboto border border-[#3c4043]" style={{ fontFamily: '"Roboto", arial, sans-serif' }}>
                {/* Header */}
                <div className="px-6 pt-6 pb-2 text-center border-b border-transparent">
                    <div className="flex justify-center mb-2">
                        <svg viewBox="0 0 48 48" className="w-10 h-10 block">
                            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                            <path fill="none" d="M0 0h48v48H0z" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-medium tracking-tight mb-1">Sign in with Google</h2>
                </div>

                {/* Body */}
                <div className="px-6 py-4">
                    <div className="text-center mb-8">
                        <h3 className="text-[22px] font-normal leading-normal">Choose an account</h3>
                        <p className="text-base mt-2 text-[#9aa0a6]">to continue to <span className="text-[#8ab4f8] font-medium">Raphael Creatives</span></p>
                    </div>

                    {/* Account List */}
                    <ul className="space-y-1">
                        {/* Account 1 */}
                        <li
                            className="flex items-center gap-3 p-3 rounded-full hover:bg-[#303134] cursor-pointer transition-colors border-b border-[#3c4043]/50 last:border-0"
                            onClick={onLogin}
                        >
                            <div className="w-8 h-8 rounded-full bg-[#0d652d] flex items-center justify-center text-white text-sm font-medium">k</div>
                            <div className="flex flex-col">
                                <span className="text-sm font-medium text-[#e8eaed]">kalai aram</span>
                                <span className="text-xs text-[#9aa0a6]">kalaiaram26@gmail.com</span>
                            </div>
                        </li>
                        {/* Account 2 */}
                        <li
                            className="flex items-center gap-3 p-3 rounded-full hover:bg-[#303134] cursor-pointer transition-colors border-b border-[#3c4043]/50"
                            onClick={onLogin}
                        >
                            <div className="w-8 h-8 rounded-full overflow-hidden">
                                <img src="https://ui-avatars.com/api/?name=Kalai+Priya&background=random" alt="K" className="w-full h-full object-cover" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-medium text-[#e8eaed]">Kalai Priya.R</span>
                                <span className="text-xs text-[#9aa0a6]">kalaipriyar24@gmail.com</span>
                            </div>
                        </li>
                        {/* Account 3 */}
                        <li
                            className="flex items-center gap-3 p-3 rounded-full hover:bg-[#303134] cursor-pointer transition-colors border-b border-[#3c4043]/50"
                            onClick={onLogin}
                        >
                            <div className="w-8 h-8 rounded-full bg-[#8e24aa] flex items-center justify-center text-white text-sm font-medium">K</div>
                            <div className="flex flex-col">
                                <span className="text-sm font-medium text-[#e8eaed]">Kalai Priya</span>
                                <span className="text-xs text-[#9aa0a6]">kalaiaram06@gmail.com</span>
                            </div>
                        </li>

                        {/* Use another account */}
                        <li
                            className="flex items-center gap-3 p-3 rounded-full hover:bg-[#303134] cursor-pointer transition-colors mt-2"
                            onClick={onLogin}
                        >
                            <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#e8eaed]">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" /></svg>
                            </div>
                            <div className="text-sm font-medium text-[#e8eaed]">Use another account</div>
                        </li>
                    </ul>

                    {/* Footer Text */}
                    <div className="mt-8 text-xs text-[#9aa0a6] leading-relaxed">
                        Before using this app, you can review gamma.app's <a href="#" className="text-[#8ab4f8]">privacy policy</a> and <a href="#" className="text-[#8ab4f8]">Terms of Service</a>.
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="px-6 py-4 flex justify-between items-center bg-[#202124] text-xs text-[#9aa0a6] border-t border-[#3c4043]/30">
                    <div className="flex gap-4">
                        <span>English (United Kingdom)</span>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z" /></svg>
                    </div>
                    <div className="flex gap-4">
                        <a href="#">Help</a>
                        <a href="#">Privacy</a>
                        <a href="#">Terms</a>
                    </div>
                </div>
            </div>
            {/* Click outside to close */}
            <div className="absolute inset-0 -z-10" onClick={onClose} />
        </div>
    );
};

const Login = () => {
    const [showGoogleModal, setShowGoogleModal] = useState(false);

    const handleLoginSuccess = () => {
        window.location.href = '/dashboard';
    };

    return (
        <div className="min-h-screen w-full flex">
            {/* Modal */}
            {showGoogleModal && (
                <GoogleSignInModal
                    onClose={() => setShowGoogleModal(false)}
                    onLogin={handleLoginSuccess}
                />
            )}

            {/* Left Side - Login Form */}
            <div className="w-full lg:w-[45%] p-8 md:p-12 lg:p-16 flex flex-col relative bg-background">
                <div className="absolute top-8 left-8">
                    <a href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
                        <ArrowLeft className="w-4 h-4" /> Back to home
                    </a>
                </div>

                <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full">
                    {/* Logo centered above text */}
                    <div className="flex justify-center mb-8">
                        <img src={logo} alt="Raphael Creatives" className="h-12 w-auto object-contain" />
                    </div>

                    <h1 className="text-4xl font-display font-bold text-center mb-8 text-foreground">Sign in</h1>

                    <Button
                        variant="outline"
                        className="w-full bg-[#1a73e8] hover:bg-[#1557b0] text-white border-none h-12 text-[15px] font-medium rounded-full mb-6 flex items-center justify-center gap-3 transition-colors"
                        onClick={() => setShowGoogleModal(true)}
                    >
                        <svg className="w-5 h-5 bg-white rounded-full p-0.5" viewBox="0 0 24 24">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        Continue with Google
                    </Button>

                    <div className="relative mb-6">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-border" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-2 text-muted-foreground">or</span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground">Email</label>
                            <Input type="email" className="h-11 rounded-lg border-input bg-transparent" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground">Password</label>
                            <div className="relative">
                                <Input type="password" className="h-11 rounded-lg border-input bg-transparent pr-10" />
                                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                                    <Eye className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="text-left mt-4 mb-6">
                        <a href="#" className="text-sm text-blue-500 hover:underline">Forgot password?</a>
                    </div>

                    <Button variant="outline" className="w-full h-12 rounded-full border-border text-muted-foreground font-normal hover:bg-muted/50 hover:text-foreground" onClick={handleLoginSuccess}>
                        Sign in
                    </Button>

                    <div className="text-center mt-8 text-sm text-muted-foreground space-y-4">
                        <p>Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign up</a></p>
                        <p><a href="#" className="text-blue-500 hover:underline">Continue with Single Sign On (SSO)</a></p>
                    </div>

                    <div className="mt-12 flex justify-center">
                        <img src={logo} alt="Gamma" className="h-6 opacity-20 invert grayscale" />
                    </div>
                </div>
            </div>

            {/* Right Side - Image Grid */}
            <div className="hidden lg:block lg:w-[55%] bg-[#f5f7f9] p-8 md:p-12 flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-full max-h-[900px]">
                    <img
                        src={loginCollage}
                        alt="Presentation Templates"
                        className="w-full h-full object-cover rounded-3xl shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-700"
                    />
                </div>
            </div>
        </div>
    );
};

export default Login;
