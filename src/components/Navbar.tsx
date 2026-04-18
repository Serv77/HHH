import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/Button";
import { useTheme } from "./ThemeProvider";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location.pathname]);

  return (
    <header className="fixed w-full top-0 z-50 flex flex-col transition-all duration-500">
      <div className={`hidden md:block transition-all duration-500 ${scrolled ? 'h-0 opacity-0 overflow-hidden' : 'bg-brand-primary text-brand-bg py-2'}`}>
        <div className="container mx-auto max-w-7xl px-8 flex justify-between items-center text-[11px] uppercase tracking-[0.2em] font-medium">
          <div className="flex gap-8">
            <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand-accent rounded-full animate-pulse"></div> Open 7 Days A Week</span>
            <span>Berkswell Road, Meriden CV7 7LB</span>
          </div>
          <div>
            <span>Bookings: 01676 522155</span>
          </div>
        </div>
      </div>

      <nav className={`w-full transition-all duration-500 backdrop-blur-xl border-b ${scrolled ? 'bg-brand-bg/95 border-brand-border py-4 shadow-sm' : 'bg-brand-bg/90 border-transparent py-6'}`}>
        <div className="container mx-auto max-w-7xl px-6 md:px-8 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-4 group">
            <div className="w-10 h-10 bg-brand-primary text-white rounded-lg flex items-center justify-center font-serif text-2xl group-hover:bg-brand-accent transition-colors duration-500">
              B
            </div>
            <span className="font-serif text-[20px] md:text-[24px] font-bold text-brand-text tracking-tight uppercase">
              The Barn
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            <Link to="/dining" className="text-[12px] uppercase tracking-[0.15em] font-medium text-brand-muted hover:text-brand-accent transition-colors">
              Eat & Drink
            </Link>
            <Link to="/hotel" className="text-[12px] uppercase tracking-[0.15em] font-medium text-brand-muted hover:text-brand-accent transition-colors">
              The Hotel
            </Link>
            <Link to="/events" className="text-[12px] uppercase tracking-[0.15em] font-medium text-brand-muted hover:text-brand-accent transition-colors">
              Events
            </Link>
            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="p-2 text-brand-muted hover:text-brand-accent transition-colors">
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <Button asChild variant="default" size="default" className="bg-brand-primary text-white hover:bg-brand-accent rounded-full px-6">
              <Link to="/hotel">
                Book A Room
              </Link>
            </Button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="p-2 text-brand-muted">
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button className="text-brand-text p-2" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <div className={`md:hidden absolute w-full bg-brand-bg border-b border-brand-border transition-all duration-500 overflow-hidden ${isOpen ? "max-h-[400px] opacity-100 shadow-xl" : "max-h-0 opacity-0"}`}>
          <div className="flex flex-col px-6 py-8 gap-6">
            <Link to="/dining" className="text-[13px] uppercase tracking-[0.1em] font-bold text-brand-text">Eat & Drink</Link>
            <Link to="/hotel" className="text-[13px] uppercase tracking-[0.1em] font-bold text-brand-text">The Hotel</Link>
            <Link to="/events" className="text-[13px] uppercase tracking-[0.1em] font-bold text-brand-text">Events</Link>
            <Button asChild variant="default" className="w-full mt-4 bg-brand-primary hover:bg-brand-accent rounded-full">
              <Link to="/hotel">
                Book A Room
              </Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
