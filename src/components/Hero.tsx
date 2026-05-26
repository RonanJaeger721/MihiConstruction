import React from "react";
import { Compass, HelpCircle, LayoutGrid, MessageSquareDot, ShieldCheck, Star } from "lucide-react";
import heroImage from "../assets/images/mihi_hero_banner_1779782129326.png";

export default function Hero() {
  const handleScrollTo = (id: string) => {
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

  const whatsappMessage = "Hello Mihi Design Studio & Construction. I am interested in your architectural and construction services for my project. Please get in touch.";
  const whatsappUrl = `https://wa.me/263778344117?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="relative min-h-screen bg-charcoal-deep flex items-center justify-center pt-24 pb-16 overflow-hidden md:py-32" id="hero">
      {/* Immersive Photo Background with parallax tendency */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern Architectural Villa in Zimbabwe"
          className="w-full h-full object-cover scale-105 filter brightness-45 contrast-105"
          referrerPolicy="no-referrer"
        />
        {/* Modern multi-layer gradient mask for ultimate text contrast and high architectural depth */}
        <div className="absolute inset-0 bg-gradient-to-tr from-charcoal-deep via-charcoal-deep/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-deep/30 via-transparent to-charcoal-deep z-10" />
        
        {/* Accent Grid Overlay representing structural drafting grids and concrete forms */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px] z-10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 w-full mt-6 md:mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy - Spans 7 columns on large desktop */}
          <div className="lg:col-span-8 space-y-6 text-left" id="hero-content">
            {/* Super Header Badge */}
            <div className="inline-flex items-center space-x-2 bg-accent-brand/20 border border-accent-brand/40 backdrop-blur-md px-3.5 py-1 rounded-sm text-amber-400 font-mono text-[10px] sm:text-xs tracking-[0.25em] uppercase font-semibold">
              <ShieldCheck className="w-4 h-4 text-accent-brand" />
              <span>ZIMBABWE'S PREMIER DESIGN-TO-BUILD STUDIO</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.1] tracking-tight font-display">
              Modern Architectural Design & <br className="hidden md:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-amber-500">
                Professional Construction
              </span>{" "}
              Solutions
            </h1>

            {/* Subheadline description */}
            <p className="text-neutral-300 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-2xl">
              Mihi Design Studio & Construction delivers reliable construction, structural works, and architectural solutions designed for modern residential and commercial projects in Zimbabwe.
            </p>

            {/* Live CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={() => handleScrollTo("services")}
                className="cursor-pointer group bg-white text-neutral-900 hover:bg-amber-500 hover:text-white font-display text-sm font-semibold tracking-wider uppercase px-8 py-4 rounded-md transition-all duration-300 shadow-xl flex items-center justify-center space-x-2"
              >
                <span>View Our Services</span>
                <LayoutGrid className="w-4 h-4 transition-transform group-hover:scale-110" />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer bg-neutral-900 text-white hover:bg-neutral-800 border border-neutral-700/80 font-display text-sm font-semibold tracking-wider uppercase px-8 py-4 rounded-md transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <MessageSquareDot className="w-5 h-5 text-green-400 fill-green-400/20" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Quick Metrics Line */}
            <div className="grid grid-cols-3 gap-4 pt-10 border-t border-white/10 max-w-xl">
              <div>
                <span className="block text-2xl md:text-3xl font-display font-bold text-white tracking-tight">100%</span>
                <span className="block text-neutral-400 font-mono text-[9px] md:text-[10px] tracking-wider uppercase mt-1">Zimbabwean Owned</span>
              </div>
              <div className="border-l border-white/10 pl-4">
                <span className="block text-2xl md:text-3xl font-display font-bold text-amber-400 tracking-tight">Structural</span>
                <span className="block text-neutral-400 font-mono text-[9px] md:text-[10px] tracking-wider uppercase mt-1">Quality Guaranteed</span>
              </div>
              <div className="border-l border-white/10 pl-4">
                <span className="block text-2xl md:text-3xl font-display font-bold text-white tracking-tight">Precise</span>
                <span className="block text-neutral-400 font-mono text-[9px] md:text-[10px] tracking-wider uppercase mt-1">Concrete & Steel Specs</span>
              </div>
            </div>
          </div>

          {/* Floated Sidebar Prompt for Interactive Quote - Leads Generator */}
          <div className="lg:col-span-4 bg-charcoal-medium/90 border border-white/10 rounded-lg p-5 sm:p-6 backdrop-blur-md shadow-2xl space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-mono tracking-wider text-amber-500 uppercase font-semibold">
                  PROJECT FEASIBILITY TOOL
                </span>
                <h3 className="text-lg font-display font-semibold text-white mt-1">
                  Need a Quick Budget?
                </h3>
              </div>
              <div className="p-1.5 rounded-full bg-amber-500/10 text-amber-400">
                <Compass className="w-5 h-5" />
              </div>
            </div>
            
            <p className="text-neutral-300 text-xs font-light leading-relaxed">
              Answer 3 swift questions to estimate the foundational or architectural delivery rate for your residential development in Harare, Bulawayo, or wider Zimbabwe.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center space-x-2 text-white/90 text-xs font-mono">
                <span className="w-5 h-5 bg-neutral-800 rounded-full flex items-center justify-center text-amber-500 font-semibold border border-neutral-700">1</span>
                <span>Estimate Earthworks & Foundation</span>
              </div>
              <div className="flex items-center space-x-2 text-white/90 text-xs font-mono">
                <span className="w-5 h-5 bg-neutral-800 rounded-full flex items-center justify-center text-amber-500 font-semibold border border-neutral-700">2</span>
                <span>Brickwork & Concrete Slabs</span>
              </div>
              <div className="flex items-center space-x-2 text-white/90 text-xs font-mono">
                <span className="w-5 h-5 bg-neutral-800 rounded-full flex items-center justify-center text-amber-500 font-semibold border border-neutral-700">3</span>
                <span>Steel Fixing Reinforcements</span>
              </div>
            </div>

            <button
              onClick={() => handleScrollTo("estimator")}
              className="cursor-pointer w-full bg-accent-brand hover:bg-accent-brand/90 text-white font-display text-xs font-bold uppercase tracking-widest py-3 px-4 rounded transition-all flex items-center justify-center space-x-2 group mt-2"
            >
              <span>Launch Calculator</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <div className="flex items-center justify-center space-x-1.5 text-neutral-400 text-[10px] font-mono">
              <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
              <span>Complies with Zimbabwean Building Standards</span>
            </div>
          </div>

        </div>
      </div>

      {/* Aesthetic Section Transition Trim representing structural concrete casting line */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-neutral-50 to-transparent z-25 pointer-events-none" />
    </section>
  );
}

// Arrow icon used in headers
function ArrowRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
