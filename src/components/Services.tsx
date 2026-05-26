import { useState } from "react";
import { Layers, Blocks, Building2, Grid, ChevronDown, Check, Compass, ArrowRight } from "lucide-react";

export default function Services() {
  const [activeService, setActiveService] = useState<string>("earthworks");

  const servicesData = [
    {
      id: "earthworks",
      icon: Layers,
      title: "Earthworks",
      summary: "Site preparation, excavation, leveling, and foundational groundwork.",
      detailText: "Before any structure rises, the support below must be flawless. Our earthworks team performs rigid site surveys, soil assessment offsets, compaction checks, excavation, compaction layers, and precise leveling. We prepare standard residential pads and deep strip-foundations tailored directly for Zimbabwean soil clay profiles.",
      features: [
        "Site clearing and vegetation stripping",
        "Excavation for strip and pad foundations",
        "Soil backfilling and compaction (g5 gravel base overlays)",
        "Termite spray treatment (soil poisoning) and damp-proof waterproofing",
        "Topographical site leveling with advanced optical levels"
      ],
      technicalSpec: "Compacted to 98% Mod AASHTO density with multi-layer density certificate logs if required."
    },
    {
      id: "brickwork",
      icon: Blocks,
      title: "Brick Masonry",
      summary: "Professional brickwork for residential and commercial structures.",
      detailText: "Every brick laid represents a permanent pixel of your final build. We master premium load-bearing substructures and beautiful aesthetic superstructure wallings. Executed using high-ratio cement mortars, perfect header/stretcher alignment, and reinforced brick-force layers, our masonry stands strong.",
      features: [
        "Common brick substructures & load-bearing foundation brickwork",
        "Elegant face brickwork patterns (no plastering needed layout)",
        "Brick-force wire reinforcements on every 3rd or 4th course",
        "Internal and external plaster preparation and fine wood-float finishing",
        "Decorative masonry features and robust retaining boundary walls"
      ],
      technicalSpec: "Standard 1:3/1:4 class cement-mortar mix ratio, utilizing Zimbabwean premium face bricks or high-density concrete bricks."
    },
    {
      id: "concrete",
      icon: Building2,
      title: "Concrete Works",
      summary: "Strong and durable concrete solutions for foundations, slabs, and structural systems.",
      detailText: "Concrete is the skeleton of modern architecture. We specialize in precision formwork (shuttering), structural columns, beams, lintels, and massive surface slabs. Our formulas prioritize the correct water-to-cement ratio, exact aggregate size pairings, and specialized curing practices.",
      features: [
        "Foundational steel-reinforced concrete strip footings and column pads",
        "Ground floor concrete surface slabs (reinforced with Mesh Ref 100/193)",
        "First-floor suspended slabs, including modern rib-and-block layout structures",
        "Casting of structural columns, support load beams, and portal frames",
        "Concrete driveways, apron surrounds, and custom architectural finishes"
      ],
      technicalSpec: "Casting strength range: 15MPa (lean footings) to 30MPa / 35MPa (highly engineered commercial load-beams)."
    },
    {
      id: "steelfixing",
      icon: Grid,
      title: "Steel Fixing",
      summary: "Reliable steel reinforcement and structural support installations.",
      detailText: "Concrete has incredible compression strength, but steel provides its tension spine. Our steel-fixing artisans translate structural architectural engineering schedules into reality. We cut, bend, layout, and secure high-yield tensile rebar cages, ensuring the frame resists all seismic tension loads.",
      features: [
        "Bending and assembly of columns, foundations, and slab reinforcement beams",
        "Installation of Y10, Y12, Y16, and Y20 high-yield steel bars on site",
        "Tying of reinforcement steel grids with top-grade binding wire",
        "Precision placement of spacing concrete blocks to guarantee minimum steel cover",
        "Laying of heavy welded steel wire mesh sheets (Ref 100, Ref 193, etc.)"
      ],
      technicalSpec: "Strict compliance with SANS 1200 / SABS-approved structural high-tensile steel reinforcements."
    }
  ];

  const currentServiceObj = servicesData.find(s => s.id === activeService) || servicesData[0];

  const handleScrollToId = (id: string) => {
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
    <section className="py-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Intro Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-[0.25em] text-accent-brand uppercase font-bold block mb-2">
            WHAT WE SPECIALIZE IN
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] font-display">
            A Complete Suite of Structural Craftsmanship
          </h2>
          <p className="text-neutral-500 text-sm mt-4 font-light leading-relaxed max-w-xl mx-auto">
            From site level clearing up to the highest reinforcement masonry course, we provide fully-vetted architectural rendering matching civil build reliability.
          </p>
          <div className="w-12 h-1 bg-accent-brand mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column - Service Selectors (Charcoal/Gold/White UI) */}
          <div className="lg:col-span-5 space-y-4">
            {servicesData.map((service) => {
              const IconComp = service.icon;
              const isActive = service.id === activeService;
              
              return (
                <div
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`group p-6 rounded-lg border transition-all duration-300 cursor-pointer flex items-start space-x-4 ${
                    isActive
                      ? "bg-neutral-900 border-neutral-900 shadow-lg text-white"
                      : "bg-neutral-50/50 border-neutral-200/80 hover:bg-neutral-50 hover:border-neutral-300 text-neutral-800"
                  }`}
                >
                  <div className={`p-3 rounded-md transition-colors ${
                    isActive ? "bg-accent-brand text-white" : "bg-neutral-200/80 text-neutral-700 group-hover:bg-neutral-200 group-hover:text-accent-brand"
                  }`}>
                    <IconComp className="w-5 h-5 flex-shrink-0" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <h4 className="text-base font-display font-semibold uppercase tracking-wide">
                        {service.title}
                      </h4>
                      {isActive && (
                        <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-ping" />
                      )}
                    </div>
                    <p className={`text-xs font-light leading-relaxed ${
                      isActive ? "text-neutral-300" : "text-neutral-500"
                    }`}>
                      {service.summary}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column - Deep Details Interactive Panel with Architectural Blueprint Detail */}
          <div className="lg:col-span-7 bg-neutral-900 text-white rounded-lg p-6 sm:p-8 shadow-xl border border-neutral-800 flex flex-col justify-between min-h-[460px] relative overflow-hidden">
            
            {/* Architectural Grid Accent bg */}
            <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:30px_30px]" />
            
            <div className="relative z-10 space-y-6">
              
              {/* Header inside Panel */}
              <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                <div>
                  <span className="text-[9px] font-mono tracking-widest text-[#D4A373] uppercase block font-semibold">
                    TECHNICAL DATA LOGS
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display font-bold uppercase tracking-wide mt-1 text-white">
                    {currentServiceObj.title} Specifics
                  </h3>
                </div>
                <div className="p-2 rounded bg-neutral-800 text-accent-brand font-mono text-[10px] uppercase font-bold px-3">
                  System 0{servicesData.findIndex(s => s.id === activeService) + 1}
                </div>
              </div>

              {/* Service Detailed text */}
              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed font-light">
                {currentServiceObj.detailText}
              </p>

              {/* Checklist list */}
              <div className="space-y-3 pt-2">
                <h5 className="text-xs font-mono font-semibold tracking-wider text-neutral-400 uppercase">
                  TYPICAL SCOPE OF WORK INCLUDED:
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {currentServiceObj.features.map((feature, ind) => (
                    <div key={ind} className="flex items-start space-x-2 text-xs text-neutral-300 font-light">
                      <Check className="w-4 h-4 text-[#D4A373] flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Spec Banner */}
              <div className="bg-neutral-800/60 border border-neutral-800 rounded p-4 text-xs font-mono text-neutral-300">
                <span className="text-amber-400 font-bold uppercase block text-[9px] tracking-wider mb-1">
                  MUNICIPAL & CIVIL ENGINEER SPEC DETAILS:
                </span>
                {currentServiceObj.technicalSpec}
              </div>

            </div>

            {/* Quote redirect action inside panel footer */}
            <div className="relative z-10 pt-6 mt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-2 text-xs text-neutral-400">
                <Compass className="w-4 h-4 text-accent-brand" />
                <span>Estimate {currentServiceObj.title} materials instantly via calculator.</span>
              </div>
              <button
                onClick={() => handleScrollToId("estimator")}
                className="cursor-pointer group text-xs text-amber-400 font-display font-bold tracking-wider uppercase flex items-center justify-center space-x-1 hover:text-amber-300"
              >
                <span>Add to Estimate Workspace</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
