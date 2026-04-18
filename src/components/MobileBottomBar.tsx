import { PhoneCall, Navigation } from "lucide-react";

export function MobileBottomBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-brand-bg border-t border-brand-border shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-50 flex items-center justify-around h-20 px-2 pb-safe">
      <a 
        href="tel:01676522155" 
        className="flex flex-col items-center justify-center flex-1 h-full font-serif font-bold text-brand-primary"
      >
        <PhoneCall className="h-6 w-6 mb-1 text-brand-accent" />
        <span className="text-[14px]">Call to Book</span>
      </a>
      
      <div className="w-[1px] h-10 bg-brand-border"></div>
      
      <a 
        href="https://maps.app.goo.gl/LtksuiHhiDHWfhu49" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center flex-1 h-full font-serif font-bold text-brand-primary"
      >
        <Navigation className="h-6 w-6 mb-1 text-brand-accent" />
        <span className="text-[14px]">Directions</span>
      </a>
    </div>
  );
}
