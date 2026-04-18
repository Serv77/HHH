import { Calendar, Users, Briefcase, ChevronRight } from "lucide-react";
import { FadeIn, ScaleIn, StaggerContainer, StaggerItem } from "../components/ui/AnimatedSection";
import { Button } from "../components/ui/Button";

export function Events() {
  return (
    <div className="w-full bg-brand-bg min-h-screen">
      <section className="bg-brand-primary pt-32 pb-32 border-b border-brand-border relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2938&auto=format&fit=crop')] opacity-20 dark:opacity-10 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg to-brand-primary/80 mix-blend-multiply"></div>
        <FadeIn className="container mx-auto max-w-5xl px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-accent/50 text-brand-accent font-bold text-[11px] uppercase tracking-[0.15em] mb-8 backdrop-blur-md">
            Celebrate & Connect
          </div>
          <h1 className="font-serif text-[56px] md:text-[80px] font-bold tracking-tight text-brand-text mb-6 leading-[1.1]">
            Events & Private Functions
          </h1>
          <p className="text-[20px] text-brand-muted max-w-3xl mx-auto leading-[1.6] font-light">
            Exclusively hire our private function room, The Loft, for all private and corporate occasions. Fully catered for by our award-winning A La Carte restaurant.
          </p>
        </FadeIn>
      </section>

      <section className="py-24 md:py-32 relative text-center">
        <ScaleIn className="container mx-auto max-w-4xl px-8">
          <h2 className="font-serif text-[40px] md:text-[56px] font-bold text-brand-text mb-6">Seasonal Events</h2>
          <p className="text-[18px] text-brand-muted leading-[1.8] font-light mb-12">
            Every year we hold family-friendly seasonal events in our giant Events Barn. Lambing Live, Halloween and Christmas are all seasonal favourites to keep the little ones entertained during the holidays.
          </p>
          <Button size="lg" variant="default" className="bg-brand-accent hover:bg-brand-primary text-white border-0">
            View Upcoming Events <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </ScaleIn>
      </section>
    </div>
  );
}
