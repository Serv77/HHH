import { BedDouble, Coffee, Wifi, Car, CreditCard } from "lucide-react";
import { FadeIn, ScaleIn, StaggerContainer, StaggerItem } from "../components/ui/AnimatedSection";
import { Button } from "../components/ui/Button";

export function Hotel() {
  return (
    <div className="w-full bg-brand-bg min-h-screen">
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2874&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-brand-bg/60 backdrop-blur-[2px]"></div>
        
        <div className="container mx-auto max-w-4xl px-8 relative z-10 text-center">
          <FadeIn>
            <div className="flex justify-center mb-6">
               <span className="flex items-center gap-1 text-brand-accent">
                 {[1, 2, 3, 4].map((i) => <Star key={i} className="w-6 h-6 fill-current" />)}
               </span>
            </div>
            <h1 className="font-serif text-[56px] md:text-[88px] font-bold tracking-tight text-brand-text mb-6 leading-[1]">
              The Barn Hotel
            </h1>
            <p className="text-[20px] md:text-[24px] text-brand-text mb-12 max-w-2xl mx-auto font-light leading-[1.6]">
              A brand-new 33-bedroom independent hotel offering countryside elegance combined with ultimate convenience.
            </p>
            <Button size="lg" className="bg-brand-accent hover:bg-brand-primary text-white border-0">
              Book a Room
            </Button>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-brand-card border-y border-brand-border">
        <div className="container mx-auto max-w-7xl px-8">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeIn>
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                   <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2940&auto=format&fit=crop" alt="Hotel room interior" className="w-full h-full object-cover" />
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <h2 className="font-serif text-[40px] md:text-[48px] font-bold text-brand-text mb-8 leading-[1.2]">
                  Unwind in luxury, right next to the NEC.
                </h2>
                <p className="text-[18px] text-brand-muted leading-[1.8] font-light mb-8">
                  Designed for both corporate and leisure guests, our rooms blend a contemporary rustic aesthetic with premium comfort. Wake up to panoramic views of rolling Warwickshire countryside before heading down to our award-winning breakfast.
                </p>
                <div className="grid grid-cols-2 gap-6">
                   <div className="flex items-center gap-3 text-[16px] text-brand-text font-medium">
                     <BedDouble className="w-6 h-6 text-brand-accent" /> Premium Bedding
                   </div>
                   <div className="flex items-center gap-3 text-[16px] text-brand-text font-medium">
                     <Wifi className="w-6 h-6 text-brand-accent" /> Free High-Speed WiFi
                   </div>
                   <div className="flex items-center gap-3 text-[16px] text-brand-text font-medium">
                     <Car className="w-6 h-6 text-brand-accent" /> Complimentary Parking
                   </div>
                   <div className="flex items-center gap-3 text-[16px] text-brand-text font-medium">
                     <Coffee className="w-6 h-6 text-brand-accent" /> Artisan Breakfast
                   </div>
                </div>
              </FadeIn>
           </div>
        </div>
      </section>
    </div>
  );
}

function Star({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
