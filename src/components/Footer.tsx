export function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-light-gold pt-24 pb-32 md:pb-16 selection:bg-brand-gold selection:text-brand-dark">
      <div className="container mx-auto max-w-7xl px-8 grid grid-cols-1 md:grid-cols-12 gap-16 border-b border-white/10 pb-16 mb-8">
        <div className="md:col-span-5">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-10 bg-brand-light-gold rounded-lg flex items-center justify-center text-brand-dark font-serif text-2xl font-bold">+</div>
            <h2 className="font-serif text-[32px] font-bold tracking-tight text-white">SF Free Clinic</h2>
          </div>
          <p className="text-white/60 mb-10 text-[18px] leading-[1.8] max-w-md font-light">
            Providing compassionate, free medical care to uninsured working individuals and their families. Excellence in healthcare, unconditionally free.
          </p>
          <div className="bg-white/5 p-8 rounded-2xl border border-white/10 inline-block backdrop-blur-sm">
            <p className="font-sans font-bold uppercase tracking-[0.15em] text-brand-gold text-[11px] mb-3">Clinic Hours (Walk-in)</p>
            <p className="text-[18px] text-white">Mon - Fri: 8:00 AM - 4:00 PM</p>
            <p className="text-[14px] text-white/50 mt-2 font-medium">First come, first served. Arrive early.</p>
          </div>
        </div>

        <div className="md:col-span-3">
          <h3 className="font-sans font-bold uppercase tracking-[0.15em] text-brand-gold text-[11px] mb-8">Important Links</h3>
          <ul className="space-y-5 text-[15px] font-light text-white/70">
            <li><a href="/#/before-you-visit" className="hover:text-white transition-colors duration-300">Before You Visit</a></li>
            <li><a href="/#/services" className="hover:text-white transition-colors duration-300">Our Services</a></li>
            <li><a href="/#/faq" className="hover:text-white transition-colors duration-300">Frequently Asked Questions</a></li>
            <li><a href="https://maps.google.com/?q=4900+California+St,+San+Francisco,+CA" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">Get Directions</a></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h3 className="font-sans font-bold uppercase tracking-[0.15em] text-brand-gold text-[11px] mb-8">Location & Contact</h3>
          <p className="text-[15px] text-white/70 leading-[1.8] font-light mb-6">
            San Francisco Free Clinic<br />
            4900 California Street<br />
            San Francisco, CA 94118
          </p>
          <p className="text-[15px] text-brand-gold font-medium mb-6">Entrance on 11th Ave</p>
          <p className="text-[15px] text-white/70 leading-[1.8] font-light">
            Phone: (415) 555-0198<br />
            Fax: (415) 555-0199
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-8 flex flex-col md:flex-row justify-between items-center text-white/40 text-[13px] font-light">
        <p>© {new Date().getFullYear()} San Francisco Free Clinic. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <span className="hover:text-white cursor-pointer transition-colors duration-300">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer transition-colors duration-300">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}
