import { Landmark, ArrowUp, Instagram, Facebook, Compass, CheckCircle2, ShieldAlert } from "lucide-react";

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-neutral-950 text-white pt-16 pb-8 border-t border-neutral-900 overflow-hidden relative">
      
      {/* Surveyor Grid visual background decorations */}
      <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:35px_35px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Core footer columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 border-b border-neutral-900 pb-12 items-start text-left">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div 
              className="flex items-center space-x-2.5 cursor-pointer group"
              onClick={handleScrollTop}
            >
              <div className="p-2.5 rounded bg-accent-brand text-white flex items-center justify-center">
                <Landmark className="w-5 h-5 stroke-[2]" />
              </div>
              <div>
                <span className="font-display font-bold text-lg tracking-wider block uppercase">
                  MIHI
                </span>
                <span className="text-[9px] font-mono tracking-[0.2em] text-neutral-500 block uppercase -mt-1 font-semibold">
                  Design & Build
                </span>
              </div>
            </div>

            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              Premium architectural rendering and professional structural engineering execution in Zimbabwe. We bridge the gap between abstract blueprints and physically-superior execution.
            </p>

            <div className="flex items-center space-x-3 text-[10px] font-mono text-neutral-500 uppercase tracking-wider font-semibold">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>Harare Municipal Registered</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-2.5 space-y-4 md:pl-6">
            <h4 className="text-xs font-mono tracking-widest text-[#D4A373] uppercase font-bold">
              STUDIO INDEX
            </h4>
            <div className="flex flex-col space-y-2.5 text-xs text-neutral-400 font-mono">
              <button onClick={() => handleScrollToSection("about")} className="hover:text-white transition-colors cursor-pointer text-left">
                About Narrative
              </button>
              <button onClick={() => handleScrollToSection("services")} className="hover:text-white transition-colors cursor-pointer text-left">
                Main Services
              </button>
              <button onClick={() => handleScrollToSection("why-choose-us")} className="hover:text-white transition-colors cursor-pointer text-left">
                Choose Principle
              </button>
              <button onClick={() => handleScrollToSection("portfolio")} className="hover:text-white transition-colors cursor-pointer text-left">
                Works Portfolio
              </button>
              <button onClick={() => handleScrollToSection("estimator")} className="text-[#D4A373] hover:text-white transition-colors cursor-pointer text-left font-bold flex items-center gap-1">
                <Compass className="w-3.5 h-3.5" /> Project Budgeter
              </button>
            </div>
          </div>

          {/* Column 3: Contact Coordinates links */}
          <div className="lg:col-span-2.5 space-y-4">
            <h4 className="text-xs font-mono tracking-widest text-[#D4A373] uppercase font-bold">
              DIAL SHORTCUTS
            </h4>
            <div className="flex flex-col space-y-2.5 text-xs text-neutral-400 font-mono">
              <a href="tel:+263778344117" className="hover:text-white transition-colors">
                Voice Call: +263 778 344 117
              </a>
              <a href="https://wa.me/263778344117" target="_blank" rel="noopener noreferrer" className="hover:text-white text-green-400 font-medium transition-colors">
                Chat: (+263) 778 344 117
              </a>
              <span className="text-[11px] text-neutral-500 font-sans block leading-relaxed mt-1">
                Headquarters:<br />
                Harare, Zimbabwe
              </span>
            </div>
          </div>

          {/* Column 4: Legal / Compliance Declarations */}
          <div className="lg:col-span-3 space-y-4 p-4 rounded bg-neutral-900 border border-neutral-800">
            <h4 className="text-xs font-mono tracking-widest text-white uppercase font-bold flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-[#D4A373]" />
              <span>REGULATORY CODE</span>
            </h4>
            <p className="text-[10px] text-neutral-400 leading-normal font-sans font-light">
              Mihi Design Studio & Construction designs plans matching Zimbabwe Model Building By-Laws (Cap. 2). All structural concrete pours, steel reinforcement ties and site leveling conform strictly to local Harare & Bulawayo municipal engineering specifications.
            </p>
          </div>

        </div>

        {/* Back to top and copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-500 font-mono gap-4">
          <div className="text-center sm:text-left space-y-0.5">
            <span>© {new Date().getFullYear()} Mihi Design Studio & Construction. All Rights Reserved.</span>
            <span className="block text-[9px] text-neutral-600 font-light">Designed for high-conversions in Zimbabwe & international diaspora.</span>
          </div>

          {/* Back to Top Trigger */}
          <button
            onClick={handleScrollTop}
            className="cursor-pointer group flex items-center space-x-1.5 px-3 py-1.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-accent-brand transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
