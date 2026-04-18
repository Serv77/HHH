import { Utensils, Star, Wine, Clock, MapPin, Search } from "lucide-react";
import { FadeIn, ScaleIn, StaggerContainer, StaggerItem } from "../components/ui/AnimatedSection";
import { Button } from "../components/ui/Button";

export function Dining() {
  const menus = [
    {
      title: "2 AA Rosette Restaurant",
      desc: "Our A La Carte restaurant offers an exceptional dining experience overlooking the rolling Meriden countryside. Using home-reared meat and locally sourced ingredients.",
      image: "https://images.unsplash.com/photo-1544025162-811c75dbb158?q=80&w=2940&auto=format&fit=crop",
    },
    {
      title: "The Barn Social & Pizzeria",
      desc: "A relaxed atmosphere serving authentic, handmade wood-fired Neapolitan pizza, small plates, craft beers, and artisan cocktails.",
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=2938&auto=format&fit=crop",
    },
    {
      title: "Artisan Bakery & Café",
      desc: "Open 7 days a week. We produce daily fresh sourdough, pastries, artisan sandwiches, and serve our signature roasted coffee.",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2944&auto=format&fit=crop",
    },
    {
      title: "Garden & Tepee (Seasonal)",
      desc: "During spring and summer, our spectacular outdoor space opens up. Street food, frozen cocktails, and dog-friendly seating.",
      image: "https://images.unsplash.com/photo-1530263625290-7c152a5ba9e0?q=80&w=2940&auto=format&fit=crop",
    }
  ];

  return (
    <div className="w-full bg-brand-bg min-h-screen">
      <section className="bg-brand-primary pt-32 pb-32 border-b border-brand-border relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544025162-811c75dbb158?q=80&w=2940&auto=format&fit=crop')] opacity-20 dark:opacity-10 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg to-brand-primary/80 mix-blend-multiply"></div>
        <FadeIn className="container mx-auto max-w-5xl px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-accent/50 text-brand-accent font-bold text-[11px] uppercase tracking-[0.15em] mb-8 backdrop-blur-md">
            Eat & Drink
          </div>
          <h1 className="font-serif text-[56px] md:text-[80px] font-bold tracking-tight text-brand-text mb-6 leading-[1.1]">
            Exceptional Dining
          </h1>
          <p className="text-[20px] text-brand-muted max-w-3xl mx-auto leading-[1.6] font-light">
            From our multi-award-winning 2 AA Rosette restaurant to our artisan bakery and wood-fired pizzeria, experience the finest locally sourced ingredients prepared with unmatched passion.
          </p>
        </FadeIn>
      </section>

      <section className="py-24 md:py-32 relative">
        <div className="container mx-auto max-w-7xl px-8 relative">
          <StaggerContainer className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {menus.map((item, index) => (
              <StaggerItem key={index} className="group cursor-pointer">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-8 shadow-xl relative">
                  <div className="absolute inset-0 bg-brand-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <h3 className="font-serif text-[32px] font-bold text-brand-text mb-4 transition-colors group-hover:text-brand-accent">{item.title}</h3>
                <p className="text-[18px] text-brand-muted leading-[1.8] font-light">{item.desc}</p>
                <div className="mt-8">
                  <Button variant="outline" className="border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white">View Menu</Button>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
