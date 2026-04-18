import { Button } from "../components/ui/Button";
import { Link } from "react-router-dom";
import { Star, MapPin, Coffee, ChefHat, Calendar, Wine } from "lucide-react";
import { FadeIn, ScaleIn, StaggerContainer, StaggerItem } from "../components/ui/AnimatedSection";

export function Home() {
  return (
    <div className="w-full">
      <section className="relative h-screen flex items-center bg-brand-bg overflow-hidden border-b border-brand-border">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-bg/60 dark:bg-brand-bg/80 z-10 backdrop-blur-[2px]"></div>
          <img 
            src="https://images.unsplash.com/photo-1544025162-811c75dbb158?q=80&w=2940&auto=format&fit=crop" 
            alt="The Barn at Berryfields" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="container mx-auto max-w-7xl px-8 relative z-20 text-center">
          <div className="max-w-4xl mx-auto pt-16">
            <FadeIn>
              <div className="flex justify-center mb-8">
                <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-brand-accent/20 text-brand-text font-bold text-[12px] uppercase tracking-[0.2em] border border-brand-accent/30 backdrop-blur-md">
                  <Star className="w-3.5 h-3.5 text-brand-accent" fill="currentColor" /> 2 AA Rosette Awarded
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h1 className="font-serif text-[64px] md:text-[88px] lg:text-[110px] font-bold tracking-tight text-brand-text mb-6 leading-[0.95]">
                Eat, Sleep <span className="text-brand-accent italic font-light">& Celebrate.</span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-[20px] md:text-[24px] text-brand-text mb-12 leading-[1.6] max-w-2xl mx-auto font-light">
                A 4th-generation, family-run, multi-award-winning independent destination in rolling countryside near the NEC.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.3} className="flex flex-col sm:flex-row justify-center gap-6">
              <Button asChild size="lg" className="bg-brand-primary text-white hover:bg-brand-accent text-lg px-10 h-14 rounded-full">
                <Link to="/dining">Explore Dining</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-brand-text text-brand-text hover:bg-brand-text hover:text-brand-bg text-lg px-10 h-14 rounded-full backdrop-blur-sm">
                <Link to="/hotel">Discover The Hotel</Link>
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-brand-primary text-[#FDFCF8] py-24 sm:py-32 relative overflow-hidden">
        <StaggerContainer className="container mx-auto max-w-7xl px-8 grid md:grid-cols-4 gap-12 text-center relative z-10">
          <StaggerItem className="flex flex-col items-center">
            <ChefHat className="h-10 w-10 text-brand-accent mb-6" />
            <h3 className="font-serif text-[24px] mb-2 font-bold">2 AA Rosette</h3>
            <p className="text-[#FDFCF8]/70 text-[15px] font-light">A La Carte Restaurant</p>
          </StaggerItem>
          <StaggerItem className="flex flex-col items-center">
            <MapPin className="h-10 w-10 text-brand-accent mb-6" />
            <h3 className="font-serif text-[24px] mb-2 font-bold">33 Bedrooms</h3>
            <p className="text-[#FDFCF8]/70 text-[15px] font-light">Brand New 4-Star Hotel</p>
          </StaggerItem>
          <StaggerItem className="flex flex-col items-center">
            <Coffee className="h-10 w-10 text-brand-accent mb-6" />
            <h3 className="font-serif text-[24px] mb-2 font-bold">Bakery & Café</h3>
            <p className="text-[#FDFCF8]/70 text-[15px] font-light">Artisan Pastries & Coffee</p>
          </StaggerItem>
          <StaggerItem className="flex flex-col items-center">
            <Calendar className="h-10 w-10 text-brand-accent mb-6" />
            <h3 className="font-serif text-[24px] mb-2 font-bold">Private Events</h3>
            <p className="text-[#FDFCF8]/70 text-[15px] font-light">Bespoke Functions & Weddings</p>
          </StaggerItem>
        </StaggerContainer>
      </section>

      <section className="py-32 bg-brand-bg border-b border-brand-border">
        <div className="container mx-auto max-w-7xl px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <FadeIn>
              <div className="grid grid-cols-2 gap-6 relative">
                 <img src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2600&auto=format&fit=crop" alt="Steak" className="rounded-2xl rounded-tr-[4rem] shadow-xl w-full h-[300px] object-cover" />
                 <img src="https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2600&auto=format&fit=crop" alt="Pizza" className="rounded-2xl rounded-bl-[4rem] shadow-xl w-full h-[300px] object-cover mt-12" />
              </div>
            </FadeIn>
            
            <div>
              <FadeIn delay={0.2}>
                <h4 className="font-sans font-bold uppercase tracking-[0.2em] text-[13px] text-brand-accent mb-4">A Taste of the Countryside</h4>
                <h2 className="font-serif text-[48px] md:text-[60px] font-bold text-brand-text mb-8 leading-[1.1]">
                  Home-reared <br/><span className="text-brand-muted italic font-light">& locally sourced.</span>
                </h2>
                
                <p className="text-[18px] text-brand-muted leading-[1.8] font-light mb-8">
                  From our multi-award-winning A La Carte restaurant to The Barn Social's handmade wood-fired Neapolitan pizza, we offer a culinary experience crafted with passion. Open 7 days a week for breakfast, lunch, and dinner.
                </p>

                <div className="pt-8 border-t border-brand-border">
                  <Button asChild variant="outline" className="border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white rounded-full">
                    <Link to="/dining">View Menus</Link>
                  </Button>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-brand-card relative">
        <ScaleIn className="container mx-auto max-w-5xl px-8 relative z-10 text-center">
          <Wine className="w-16 h-16 text-brand-accent mx-auto mb-8" />
          <h2 className="font-serif text-[40px] md:text-[56px] font-bold text-brand-text mb-8">Host Your Next Event With Us</h2>
          <p className="text-[20px] text-brand-muted max-w-2xl mx-auto leading-[1.8] font-light mb-12">
            Exclusively hire our private function room, The Loft, for all private and corporate occasions. From parties to business meetings to weddings, fully catered by our 2 AA Rosette restaurant.
          </p>
          <Button asChild size="lg" className="bg-brand-primary text-white hover:bg-brand-accent rounded-full px-12">
             <Link to="/events">Discover The Loft</Link>
          </Button>
        </ScaleIn>
      </section>
    </div>
  );
}
