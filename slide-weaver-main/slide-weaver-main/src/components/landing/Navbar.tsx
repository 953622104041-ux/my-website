import { Button } from "@/components/ui/button";
import logo from "@/assets/raphael-logo-new.png";

export const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <div className="flex items-center gap-8">
                    <a href="/" className="flex items-center gap-2">
                        <img src={logo} alt="Raphael Creatives" className="h-10 w-auto object-contain" />
                    </a>
                    <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
                        <a href="#products" className="hover:text-foreground transition-colors">Products</a>
                        <a href="#solutions" className="hover:text-foreground transition-colors">Solutions</a>
                        <a href="#about" className="hover:text-foreground transition-colors">About</a>
                        <a href="#products" className="hover:text-foreground transition-colors">Pricing</a>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <a href="/login" className="hidden sm:block text-sm font-medium text-foreground hover:text-primary transition-colors">
                        Login
                    </a>
                    <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-6">
                        <a href="/create">Start for free</a>
                    </Button>
                </div>
            </div>
        </nav>
    );
};
