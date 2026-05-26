import React, { useState, useRef, useEffect } from "react";
import { Filter, Calendar, MapPin, Eye, X, HelpCircle, Landmark, Compass, Sliders } from "lucide-react";
import heroImg from "../assets/images/mihi_hero_banner_1779782129326.png";
import blueprintImg from "../assets/images/mihi_blueprint_1779782149239.png";

type ProjectCategory = 'all' | 'residential' | 'progress' | 'structural' | 'concept';

interface PortfolioProject {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  location: string;
  materials: string;
  year: string;
  desc: string;
  imgUrl: string;
}

export default function ProjectShowcase() {
  const [activeTab, setActiveTab] = useState<ProjectCategory>("all");
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [activeProject, setActiveProject] = useState<PortfolioProject | null>(null);
  const sliderContainerRef = useRef<HTMLDivElement>(null);

  const filterTabs: { id: ProjectCategory; label: string }[] = [
    { id: "all", label: "Show All" },
    { id: "residential", label: "Residential Builds" },
    { id: "structural", label: "Structural & Steel" },
    { id: "progress", label: "Active Progress" },
    { id: "concept", label: "Architectural Concepts" }
  ];

  const projects: PortfolioProject[] = [
    {
      id: "proj1",
      title: "The Highlands Modernist Mansion",
      category: "residential",
      categoryLabel: "Residential Build",
      location: "Highlands, Harare",
      materials: "42.5 cement mix, double-reinforcement mesh columns, Y16 structural ties",
      year: "2025",
      desc: "A sprawling contemporary home incorporating raw architectural concrete canopies, face-brick accent entries, and large spans supported by hidden steel columns.",
      imgUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "proj2",
      title: "Suspended Ground Slabs & Foundations",
      category: "structural",
      categoryLabel: "Structural",
      location: "Borrowdale Brooke, Harare",
      materials: "25MPa concrete mix, Ref 193 steel wire reinforcement mesh",
      year: "2026",
      desc: "Comprehensive earthworks, soil compaction leveling, chemical damp proof mapping, heavy timber formwork, followed by casting a massive reinforced double-thick surface slab.",
      imgUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "proj3",
      title: "Commercial Steel Portal Frame Assembly",
      category: "structural",
      categoryLabel: "Structural Steel",
      location: "Workington Industrial, Harare",
      materials: "Pre-fabricated heavy structural portal columns, high tension anchors",
      year: "2025",
      desc: "Rigid steel structural assembly featuring flawless concrete pocket anchoring leveling vectors, satisfying load safety rules for industrial warehouse utilization.",
      imgUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "proj4",
      title: "Eco-Concrete Cluster Units Concept",
      category: "concept",
      categoryLabel: "Architectural Concept",
      location: "Chisipite, Harare",
      materials: "Custom modular structural concrete form lines, recycled steel tie-downs",
      year: "2026 (Concept)",
      desc: "Architectural mockup of modern medium-density cluster duplexes integrating textured raw shuttered concrete, cantilevered master suites, and solar design optimization.",
      imgUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "proj5",
      title: "Premium Load-Bearing Twin Boundary Wals",
      category: "progress",
      categoryLabel: "Active Progress",
      location: "Burnside, Bulawayo",
      materials: "Solid high-density concrete bricks, brick-force steel wire reinforcements",
      year: "Active Site",
      desc: "Currently executing 180 meters of reinforced face-brick retaining walls, leveling undulating subgrades with optical alignment to prevent future soil collapse.",
      imgUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "proj6",
      title: "Modern Steel & Glass Pavilion Office",
      category: "concept",
      categoryLabel: "Architectural Concept",
      location: "Milton Park, Harare",
      materials: "SABS standard I-Beams, column-to-foundation seismic steel anchors",
      year: "Drafting Stage",
      desc: "Concept office layout with steel fixing matrices that eliminate heavy interior supporting pillars, resulting in maximum panoramic glass coverage.",
      imgUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  // Before/after touch or mouse movement calculator
  const handleSliderMove = (clientX: number) => {
    if (!sliderContainerRef.current) return;
    const rect = sliderContainerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const positionPercentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(positionPercentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleSliderMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleSliderMove(e.touches[0].clientX);
    }
  };

  return (
    <section className="py-20 bg-neutral-100 border-b border-neutral-200" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-[0.25em] text-accent-brand uppercase font-bold block mb-2">
            OUR WORKS PORTFOLIO
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] font-display">
            Showcasing Structural Rigidity & Modern Form
          </h2>
          <p className="text-neutral-500 text-sm mt-4 font-light leading-relaxed max-w-xl mx-auto">
            Browse our completed residences, concrete foundation layouts, structural steel frames, and beautiful architectural drafts.
          </p>
          <div className="w-12 h-1 bg-accent-brand mx-auto mt-6" />
        </div>

        {/* --- BEFORE / AFTER EXPERIMENTAL INTERACTIVE SLIDER --- */}
        <div className="mb-20 max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <span className="inline-flex items-center space-x-2 bg-neutral-900 text-amber-400 font-mono text-[9px] uppercase tracking-widest px-3 py-1 rounded-sm border border-neutral-800">
              <Sliders className="w-3.5 h-3.5" />
              <span>Interactive Slider: Plan vs. Completion S-C</span>
            </span>
            <p className="text-xs text-neutral-500 mt-2 font-light">
              Drag the golden central divider below to slide between our <strong>Architectural Blueprint Rendering (Before)</strong> and the <strong>Finished Concrete & Steel Home (After)</strong>.
            </p>
          </div>

          <div 
            ref={sliderContainerRef}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative h-[250px] sm:h-[400px] rounded-lg overflow-hidden shadow-2xl border-4 border-neutral-900 cursor-ew-resize select-none"
          >
            {/* AFTER: Complete Structure Photo */}
            <div className="absolute inset-0">
              <img 
                src={heroImg} 
                alt="After: Mihi Premium Finished Concrete Structure" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 right-4 bg-[#111111]/80 backdrop-blur-sm text-white px-2.5 py-1 rounded text-[10px] font-mono tracking-wider z-10 border border-white/20">
                FINISHED PHYSICAL BUILD (AFTER)
              </div>
            </div>

            {/* BEFORE: Architectural Blueprints */}
            <div 
              className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-amber-500 transition-all z-10"
              style={{ width: `${sliderPosition}%` }}
            >
              {/* Force the inner image to render at the constant scale of the parent width to stay aligned */}
              <div className="absolute inset-0 w-[840px] sm:w-[888px] h-[250px] sm:h-[392px] max-w-none">
                <img 
                  src={blueprintImg} 
                  alt="Before: Mihi Technical Blueprint Plan Draft" 
                  className="w-full h-full object-cover filter contrast-110 saturate-120"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute bottom-4 left-4 bg-accent-brand text-white px-2.5 py-1 rounded text-[10px] font-mono tracking-wider z-20 shadow-lg">
                ENGINEERING BLUEPRINT DESIGN (BEFORE)
              </div>
            </div>

            {/* Slider Center Line Drag Handle */}
            <div 
              className="absolute inset-y-0 z-20 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-amber-500 border-2 border-white flex items-center justify-center text-white shadow-xl">
                <Compass className="w-5 h-5 animate-spin-slow text-neutral-900" />
              </div>
            </div>
          </div>
        </div>

        {/* --- portfolio filter and GRID --- */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded text-xs font-display font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === tab.id
                  ? "bg-[#111111] text-white shadow"
                  : "bg-white text-neutral-500 border border-neutral-200 hover:text-neutral-800 hover:bg-neutral-50/80"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Project Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-lg overflow-hidden border border-neutral-200 shadow-sm hover:shadow-xl hover:border-accent-gold transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 overflow-hidden bg-neutral-900">
                  <img
                    src={project.imgUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Category overlay label */}
                  <div className="absolute top-3 left-3 bg-[#111111]/90 backdrop-blur-sm text-amber-400 border border-neutral-800 font-mono text-[9px] tracking-wider uppercase px-2.5 py-1 rounded">
                    {project.categoryLabel}
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <div className="flex items-center space-x-1 text-neutral-400 font-mono text-[10px]">
                    <MapPin className="w-3.5 h-3.5 text-accent-brand" />
                    <span>{project.location}</span>
                  </div>
                  
                  <h3 className="text-base font-display font-semibold text-[#111111] tracking-wide group-hover:text-accent-brand transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-xs text-neutral-500 font-light leading-relaxed line-clamp-2">
                    {project.desc}
                  </p>
                </div>
              </div>

              {/* Card CTA Footer */}
              <div className="px-6 pb-6 pt-2 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-[10px] font-mono text-neutral-400">
                  Built In: {project.year}
                </span>
                
                <button
                  onClick={() => setActiveProject(project)}
                  className="cursor-pointer text-xs font-mono font-bold text-accent-brand hover:text-[#111111] transition-colors flex items-center space-x-1"
                >
                  <span>Verify Specs</span>
                  <Eye className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* --- Lightbox spec details Modal --- */}
      {activeProject && (
        <div className="fixed inset-0 z-55 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div 
            className="bg-white rounded-lg max-w-2xl w-full shadow-2xl relative overflow-hidden border border-neutral-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header image inside modal */}
            <div className="relative h-64 bg-neutral-950">
              <img
                src={activeProject.imgUrl}
                alt={activeProject.title}
                className="w-full h-full object-cover filter brightness-95"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 bg-black/70 text-white hover:bg-black p-1.5 rounded-full z-10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-4 bg-accent-brand text-white text-xs font-mono px-3 py-1 rounded">
                Verified Architectural Delivery Log
              </div>
            </div>

            {/* Modal Specs Copy */}
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center space-x-4 text-xs font-mono text-neutral-500">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-accent-brand" /> {activeProject.location}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> Delivered: {activeProject.year}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-display font-extrabold text-[#111111]">
                {activeProject.title}
              </h3>

              <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                {activeProject.desc}
              </p>

              {/* Concrete & Materials Checklist */}
              <div className="p-4 rounded bg-neutral-50 border border-neutral-200/80 space-y-1.5">
                <span className="block text-[10px] font-mono text-neutral-400 uppercase tracking-widest font-bold">
                  CIVIL MATERIAL SPECS & REINFORCEMENTS
                </span>
                <p className="text-xs font-mono text-neutral-800 leading-relaxed">
                  {activeProject.materials}
                </p>
              </div>

              {/* CTAs */}
              <div className="pt-4 border-t border-neutral-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <span className="text-[10px] text-neutral-400 font-mono tracking-wider uppercase">
                  Mihi Quality Code Reference: {activeProject.id.toUpperCase()}-S2
                </span>
                <a
                  href={`https://wa.me/263778344117?text=Hi%20Mihi.%20I%20have%20been%20looking%20at%20your%20completed%20portfolio%20project:%20${encodeURIComponent(activeProject.title)}.%20I'd%20like%20to%20request%20a%20quote%20for%20a%20similar%20project.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-display font-bold tracking-widest uppercase py-3 px-5 rounded text-center transition-colors"
                >
                  Request Similar Structural Work
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
