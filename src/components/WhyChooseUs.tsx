import { Trophy, ShieldCheck, Ruler, MessageSquare, Hand, HardHat, Sparkles } from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    {
      icon: Trophy,
      title: "Professional Project Execution",
      desc: "Our project managers align schedules, coordinate team assignments on active sites, and manage material purchases to assure zero delivery delay bounds."
    },
    {
      icon: HardHat,
      title: "Modern Construction Standards",
      desc: "We build strictly matching up-to-date regional by-laws, engineering requirements, and modern structural codes to secure lifetime property investment validation."
    },
    {
      icon: Ruler,
      title: "Strong Architectural Vision",
      desc: "We look beyond standard bricks. Our studio shapes layouts that utilize natural light patterns, Harare climate profiles, and modern open-plan functionality."
    },
    {
      icon: MessageSquare,
      title: "Reliable Communication",
      desc: "No developer likes being left in the dark. We send scheduled progress snapshots, concrete testing outcomes, and instant Whatsapp status files daily."
    },
    {
      icon: ShieldCheck,
      title: "Quality-Focused Approach",
      desc: "We purchase raw materials exclusively from certified Zimbabwean vendors (high-grade river sand, high-mesh density steel wire, 42.5N grade structural cements)."
    },
    {
      icon: Hand,
      title: "Skilled Workmanship",
      desc: "Our on-site concrete pourers, bricklayers, timber shuttering carpenters, and steel-fixing artisans are highly-vetted craftsmen with years of regional builds."
    },
    {
      icon: Sparkles,
      title: "Residential & Commercial Expertise",
      desc: "From single-family high-end gated community villas to commercial structures, we customize design-to-build frameworks for any local developer."
    }
  ];

  return (
    <section className="py-20 bg-neutral-900 text-white relative overflow-hidden" id="why-choose-us">
      {/* Decorative Grid Pattern mimicking surveyor maps */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      {/* Structural golden light splash in corner */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-accent-gold/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-7">
            <span className="text-xs font-mono tracking-[0.25em] text-[#D4A373] uppercase font-bold block mb-2">
              WHY PARTNER WITH MIHI
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display uppercase tracking-wide leading-none">
              Rigid Standards. <br />
              <span className="text-[#D4A373]">Smarter Design.</span>
            </h2>
            <div className="w-16 h-1 bg-accent-brand mt-6" />
          </div>
          <div className="lg:col-span-5">
            <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed">
              We translate architectural design concepts into permanent, structurally-approved luxury properties throughout Zimbabwe. Here is the engineering baseline we promise.
            </p>
          </div>
        </div>

        {/* 7 Points Custom Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((point, index) => {
            const IconComp = point.icon;
            
            // Highlight specific cards (e.g., the first or standard-setting ones) to make layout "brave" and dynamic
            const isHighlighted = index === 2 || index === 4;

            return (
              <div
                key={index}
                className={`p-6 sm:p-8 rounded-lg transition-all duration-300 border flex flex-col justify-between ${
                  isHighlighted
                    ? "bg-neutral-800 border-accent-brand/40 shadow-xl shadow-black/30"
                    : "bg-neutral-950/40 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-950/60"
                }`}
              >
                <div className="space-y-4">
                  <div className={`w-10 h-10 rounded-sm flex items-center justify-center ${
                    isHighlighted ? "bg-accent-brand text-white" : "bg-neutral-800 text-accent-gold"
                  }`}>
                    <IconComp className="w-5 h-5 flex-shrink-0" />
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold tracking-wider text-white uppercase font-display">
                      {point.title}
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed font-light">
                      {point.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-800/60 text-right">
                  <span className="text-[10px] font-mono text-neutral-600">
                    S-C SYSTEM / 0{index + 1}
                  </span>
                </div>
              </div>
            );
          })}

          {/* Quick Contact Promo inside the Why Choose Us Section */}
          <div className="p-6 sm:p-8 rounded-lg bg-gradient-to-tr from-accent-brand/40 via-neutral-950/80 to-neutral-950 border border-accent-brand/30 flex flex-col justify-between shadow-xl">
            <div className="space-y-3">
              <span className="text-[10px] font-mono tracking-widest text-[#D4A373] uppercase block font-semibold">
                DIRECT TO SITE SUPERINTENDENT
              </span>
              <h4 className="text-base font-display font-bold uppercase text-white tracking-wide">
                Need to discuss physical designs?
              </h4>
              <p className="text-xs text-neutral-300 font-light leading-relaxed">
                Connect directly with our construction representative on-site. We can evaluate your soil profiles, design concepts, or existing council blueprints.
              </p>
            </div>

            <div className="pt-6">
              <a
                href="https://wa.me/263778344117?text=Hi%20Mihi%20Design.%20I'd%20like%20to%20discuss%20a%20site%20assessment%20and%20design%20plan."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center space-x-2 bg-white hover:bg-amber-500 hover:text-white text-neutral-900 transition-colors py-3 rounded text-xs font-display font-bold uppercase tracking-widest"
              >
                <span>WhatsApp: 0778 344 117</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
