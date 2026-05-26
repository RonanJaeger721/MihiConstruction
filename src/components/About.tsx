import { CheckCircle2, Trophy, Landmark, Users2, ShieldAlert } from "lucide-react";
import blueprintImg from "../assets/images/mihi_blueprint_1779782149239.png";

export default function About() {
  const stats = [
    { value: "140+", label: "Structures Built", desc: "Residential, commercial, and structural system foundations." },
    { value: "24+", label: "Architectural Plans", desc: "Original modern architectural concepts custom-drafted." },
    { value: "100%", label: "Structural Approvals", desc: "Harare, Bulawayo and regional municipal building approvals." },
    { value: "15+", label: "Skilled Engineers", desc: "Experienced brick masons, concrete pourers, and steel fixers." }
  ];

  const pillars = [
    {
      title: "Architectural Vision",
      text: "Every project starts with comprehensive structural planning and modern design thinking that maximizes space, natural light, and structural layout."
    },
    {
      title: "Practical Civil Expertise",
      text: "We transition seamlessly from beautiful layout drafts onto the job site with precise site leveling, brick layout patterns, and dense structural concrete mixes."
    },
    {
      title: "Uncompromising Detail",
      text: "From foundation soil testing to exact steel reinforcement layouts (fixing), we maintain strict compliance with Zimbabwean building regulations."
    }
  ];

  return (
    <section className="py-20 bg-neutral-50 border-b border-neutral-100" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono tracking-[0.25em] text-accent-brand uppercase font-bold block mb-2">
            WHO WE ARE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] font-display leading-[1.15]">
            Combining Elite Architectural Thinking With Masterful Practical Construction.
          </h2>
          <div className="w-16 h-1 bg-accent-brand mt-6" />
        </div>

        {/* Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Narrative Block */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-neutral-700 text-base leading-relaxed font-light">
              At <strong className="font-semibold text-neutral-900">Mihi Design Studio & Construction</strong>, we break down the wall between abstract design and manual execution. Operating locally in Zimbabwe, our dual approach means we possess both the engineering foresight of technical designers and the muscle of professional masons, concrete specialists, and steel fixers.
            </p>
            
            <p className="text-neutral-700 text-sm leading-relaxed font-light">
              We stand apart through our devotion to <strong className="font-semibold text-neutral-900">structural quality</strong> and <strong className="font-semibold text-neutral-900">project reliability</strong>. We understand that building a home or commercial node is one of regional investors' greatest lifetime expenditures. Hence, we execute earthworks, masonry, concrete casting, and steel reinforcements with pristine precision, guaranteeing peace of mind.
            </p>

            {/* Core Values / Professionalism Checklist */}
            <div className="space-y-4 pt-4 border-t border-neutral-200">
              <h4 className="text-sm font-mono tracking-wider text-neutral-800 uppercase font-bold">
                OUR STRUCTURAL COMMITMENTS:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  "Seismic steel fixing durability",
                  "Precisely calculated level site leveling",
                  "Elite bricklaying bonding structures",
                  "Standardized cement curing periods",
                  "Complete plan-to-build continuity",
                  "Transparent material procurement reporting"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-accent-brand flex-shrink-0" />
                    <span className="text-xs font-medium text-neutral-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Visual Image Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl bg-neutral-900 border border-neutral-100 group">
              <img
                src={blueprintImg}
                alt="Mihi Architectural Blueprint and Construction Planning"
                className="w-full h-auto object-cover filter brightness-95 group-hover:scale-102 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              {/* Overlay highlight badge */}
              <div className="absolute bottom-5 left-5 right-5 bg-charcoal-deep/90 text-white p-4 rounded backdrop-blur-md border border-white/10 shadow-lg">
                <span className="text-[10px] font-mono tracking-widest text-amber-500 uppercase font-bold block">
                  BUILDING IN ZIMBABWE
                </span>
                <p className="text-xs text-neutral-200 mt-1 font-light leading-relaxed">
                  Our structures comply fully with the Zimbabwe Model Building By-Laws (Chapter 2) ensuring permanent structural durability, structural steel soundness, and soil-engineered concrete foundations.
                </p>
              </div>
            </div>
            
            {/* Subtle decorative geometry mimicking site survey markers */}
            <div className="absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-accent-gold pointer-events-none opacity-40 hidden sm:block" />
            <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b-2 border-l-2 border-accent-brand pointer-events-none opacity-40 hidden sm:block" />
          </div>

        </div>

        {/* Bento Grid Stats Display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-neutral-200">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white border border-neutral-200 shadow-sm rounded-lg p-6 hover:shadow-md hover:border-accent-gold transition-all duration-300"
            >
              <span className="block text-4xl font-extrabold text-[#111111] tracking-tight font-display text-accent-brand">
                {stat.value}
              </span>
              <span className="block font-display text-sm font-semibold tracking-wide text-neutral-800 uppercase mt-2">
                {stat.label}
              </span>
              <span className="block text-xs text-neutral-500 mt-1 leading-relaxed font-light">
                {stat.desc}
              </span>
            </div>
          ))}
        </div>

        {/* Three Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 bg-neutral-900 text-white rounded-lg p-6 sm:p-10 shadow-xl">
          {pillars.map((pillar, index) => (
            <div key={index} className="space-y-3">
              <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-accent-gold uppercase block">
                0{index + 1} / CORE STRATEGY
              </span>
              <h3 className="text-lg font-display font-semibold text-white">
                {pillar.title}
              </h3>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                {pillar.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
