import { Lightbulb, LandPlot, Hammer, GraduationCap, CheckCircle2 } from "lucide-react";

export default function Process() {
  const steps = [
    {
      num: "01",
      icon: Lightbulb,
      title: "Consultation & Planning",
      subtitle: "Architectural alignment & feasibility limits",
      desc: "Our structural draftsmen examine your design goals, budget limits, and site plans. We model building flows, verify sizing dimensions, and establish rigid material formulas (including cement bags, steel rebar sizes, compaction thickness, and sand grades) before any ground is broken."
    },
    {
      num: "02",
      icon: LandPlot,
      title: "Site Assessment",
      subtitle: "Subgrade soil profiling & digital leveling",
      desc: "We send experienced surveyors to your plot location in Harare, Bulawayo, or wider Zimbabwe. We inspect the subgrade profile (clay, red soil, or granite), map out precise grading slopes with electronic equipment, and finalize earthwork structural specifications to prevent foundation shifting."
    },
    {
      num: "03",
      icon: Hammer,
      title: "Construction & Structural Work",
      subtitle: "Reinforcements, masonry, and casting",
      desc: "Our on-site crew carries out the dense manual build. We map trenches, perform soil poisioning, compact g5 gravel layers, reinforce steel bar mesh tied explicitly to engineers' structural schedules, erect timber formwork, and lay solid, load-bearing masonry bricks with high-grade bonding cement mortars."
    },
    {
      num: "04",
      icon: GraduationCap,
      title: "Final Delivery & Quality Inspection",
      subtitle: "Municipal standard certifications & handover",
      desc: "We run quality assurance walkthroughs, clean final surfaces, verify that load-bearing columns have cured to correct pressure capacities (e.g. 25MPa+), complete final fine-molded plaster finishes, and execute standard municipal inspector certifications for final occupancy hand-over."
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-neutral-100" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header block */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="text-xs font-mono tracking-[0.25em] text-accent-brand uppercase font-bold block mb-2">
            DESIGN TO BUILD WORKFLOW
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] font-display">
            Our Premium 4-Step Construction Journey
          </h2>
          <p className="text-neutral-500 text-sm mt-4 font-light leading-relaxed max-w-xl mx-auto">
            We operate with complete clarity. Here is how we transform vacant land plots into structural, premium properties.
          </p>
          <div className="w-12 h-1 bg-accent-brand mx-auto mt-6" />
        </div>

        {/* Process Timeline Grid */}
        <div className="relative mt-12">
          {/* Central Structural Connecting Gray Bar - Hidden on mobile screens */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-neutral-200 -translate-x-1/2" />

          {/* Steps wrapper */}
          <div className="space-y-12 lg:space-y-20 relative">
            {steps.map((step, index) => {
              const IconComp = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={step.num} 
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  
                  {/* Left or Right Content Block depending on Even/Odd */}
                  <div className={`lg:col-span-5 ${
                    isEven ? "lg:text-right lg:col-start-1" : "lg:text-left lg:col-start-8"
                  } space-y-3`}>
                    <span className="text-xs font-mono tracking-widest text-accent-gold uppercase font-bold block">
                      STAGE {step.num} / PROCESS
                    </span>
                    <h3 className="text-lg sm:text-xl font-display font-bold text-[#111111] uppercase tracking-wide">
                      {step.title}
                    </h3>
                    <p className="text-xs font-mono text-neutral-400 font-medium">
                      {step.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {/* Central Node Badge */}
                  <div className="lg:col-span-2 flex justify-center items-center z-10">
                    <div className="w-12 h-12 rounded-full bg-neutral-900 border-4 border-white text-white font-mono flex items-center justify-center font-bold text-sm shadow-md group hover:bg-accent-brand hover:scale-105 transition-all">
                      {step.num}
                    </div>
                  </div>

                  {/* Visual Layout Preview Block - Occupies remaining columns */}
                  <div className={`lg:col-span-5 p-6 rounded-lg border border-neutral-100 bg-neutral-50 flex items-start space-x-4 ${
                    isEven ? "lg:col-start-8" : "lg:col-start-1"
                  }`}>
                    <div className="p-3 bg-white shadow-xs text-accent-brand rounded">
                      <IconComp className="w-5 h-5 flex-shrink-0" />
                    </div>
                    <div className="space-y-1 text-left">
                      <h4 className="text-xs font-semibold tracking-wider uppercase text-neutral-800 font-mono">
                        Key Deliverable
                      </h4>
                      <p className="text-xs text-neutral-500 font-light leading-relaxed">
                        Expected outcome of this stage is signed-off engineering calculations and transparent site reporting, with direct material receipt logs.
                      </p>
                      <div className="flex items-center space-x-1.5 text-accent-brand font-mono text-[9px] font-bold uppercase mt-2">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Guaranteed Quality Checkpoint</span>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
