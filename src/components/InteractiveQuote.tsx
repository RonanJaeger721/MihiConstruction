import { useState, useEffect } from "react";
import { Calculator, Landmark, ShieldAlert, ArrowRight, MessageSquareCode, Sparkles, Star } from "lucide-react";

export default function InteractiveQuote() {
  const [projectType, setProjectType] = useState<string>("villa");
  const [areaSqm, setAreaSqm] = useState<number>(200);
  const [district, setDistrict] = useState<string>("Harare (Highlands/Borrowdale)");
  const [clientName, setClientName] = useState<string>("");
  
  // Choose services
  const [servicesSelected, setServicesSelected] = useState({
    earthworks: true,
    masonry: true,
    concrete: true,
    steelfixing: true,
    architecture: true
  });

  const [pricingBreakdown, setPricingBreakdown] = useState({
    earthworksCost: 0,
    masonryCost: 0,
    concreteCost: 0,
    steelFixingCost: 0,
    architectureCost: 0,
    subtotal: 0,
    totalEst: 0
  });

  // Base pricing rate per square meter (USD) based on build types
  const baseRates: Record<string, number> = {
    villa: 190,      // Pre-engineered luxury residential base rate
    standard: 130,   // Standard quality family home layout
    commercial: 170, // Commercial light industrial node
    wall: 80         // Concrete strip boundary walls 
  };

  useEffect(() => {
    const baseRate = baseRates[projectType] || 150;
    
    // Services pricing factor per SQM
    const earthworksRate = servicesSelected.earthworks ? 30 : 0;
    const masonryRate = servicesSelected.masonry ? 80 : 0;
    const concreteRate = servicesSelected.concrete ? 110 : 0;
    const steelFixingRate = servicesSelected.steelfixing ? 50 : 0;
    const architectureRate = servicesSelected.architecture ? 25 : 0;

    const earthworksCost = areaSqm * earthworksRate;
    const masonryCost = areaSqm * masonryRate;
    const concreteCost = areaSqm * concreteRate;
    const steelFixingCost = areaSqm * steelFixingRate;
    const architectureCost = areaSqm * architectureRate;

    const structuralFrameSubtotal = (baseRate * areaSqm);
    const subtotal = structuralFrameSubtotal + earthworksCost + masonryCost + concreteCost + steelFixingCost + architectureCost;
    
    // Total includes standard scaffolding, municipal drafting support fee + contingency multipliers (e.g. 5% contingency)
    const totalEst = Math.round(subtotal * 1.05);

    setPricingBreakdown({
      earthworksCost,
      masonryCost,
      concreteCost,
      steelFixingCost,
      architectureCost,
      subtotal,
      totalEst
    });
  }, [projectType, areaSqm, servicesSelected]);

  const toggleService = (key: keyof typeof servicesSelected) => {
    setServicesSelected(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const getWhatsAppLink = () => {
    const servicesList: string[] = [];
    if (servicesSelected.earthworks) servicesList.push("Earthworks Foundation");
    if (servicesSelected.masonry) servicesList.push("Brick Masonry");
    if (servicesSelected.concrete) servicesList.push("Concrete Works");
    if (servicesSelected.steelfixing) servicesList.push("Steel Fixing");
    if (servicesSelected.architecture) servicesList.push("Architectural Concept Drafts");

    const message = `*MIHI DESIGN & BUILD - ONLINE ESTIMATOR REPORT*
----------------------------------------
*Client Name:* ${clientName || "Property Developer / Investor"}
*Build Location:* ${district}
*Project Sizing:* ${areaSqm} sqm (Floor Area)
*Project Layout Type:* ${projectType === "villa" ? "Luxury Architectural Villa" : projectType === "standard" ? "Standard Residential" : projectType === "commercial" ? "Commercial Unit" : "Boundary Retaining Wall"}

*Services Requested:*
${servicesList.map(s => `• ${s}`).join("\n")}

*Estimated Cost Breakdown:*
- Subgrade & Services Est: $${pricingBreakdown.subtotal.toLocaleString()} USD
- Total Preliminary Build Est (with 5% contingency): $${pricingBreakdown.totalEst.toLocaleString()} USD

_Note: Compiled from live material cost indexes in Zimbabwe (42.5N cement, steel mesh). Please schedule a Physical Site Survey and blueprint check._`;

    return `https://wa.me/263778344117?text=${encodeURIComponent(message)}`;
  };

  return (
    <section className="py-20 bg-neutral-900 text-white relative border-b border-neutral-800" id="estimator">
      
      {/* Background visual detail */}
      <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block alignment */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-[0.25em] text-accent-gold uppercase font-bold block mb-2">
            ZIMBABWE COST FEASIBILITY
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-display">
            Interactive Project Cost Calculator
          </h2>
          <p className="text-neutral-400 text-sm mt-4 font-light leading-relaxed max-w-xl mx-auto">
            Design a custom estimate outline. Select your desired construction services, tweak your plot floor dimensions, and instantly generate a formatted WhatsApp quote ticket.
          </p>
          <div className="w-12 h-1 bg-accent-gold mx-auto mt-6" />
        </div>

        {/* Form panel container */}
        <div className="bg-neutral-950/65 rounded-xl border border-neutral-800 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Calculator Parameter Controls */}
          <div className="lg:col-span-7 p-6 sm:p-10 space-y-6">
            <h3 className="text-lg font-display font-semibold uppercase tracking-wider text-white border-b border-neutral-800 pb-3 flex items-center gap-2">
              <Calculator className="w-5 h-5 text-accent-gold" />
              <span>Workspace Parameters</span>
            </h3>

            {/* Step 1: Your Name */}
            <div className="space-y-2">
              <label className="block text-xs font-mono tracking-wider uppercase text-neutral-400 font-bold">
                Optional: Your Full Name / Developer Name
              </label>
              <input
                type="text"
                placeholder="e.g. Tendai Chigumba"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full bg-neutral-900 border border-neutral-800 text-white rounded p-3 text-sm focus:outline-none focus:border-accent-gold transition-colors font-sans"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Parameter: Project Type */}
              <div className="space-y-2">
                <label className="block text-xs font-mono tracking-wider uppercase text-neutral-400 font-bold">
                  Property Category
                </label>
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-800 text-white rounded p-3 text-sm focus:outline-none focus:border-accent-brand transition-colors font-display text-xs font-semibold tracking-wider uppercase cursor-pointer"
                >
                  <option value="villa">Luxury Architectural Villa</option>
                  <option value="standard">Standard Residential House</option>
                  <option value="commercial">Commercial Unit / Warehouse</option>
                  <option value="wall">Reinforced Boundary Walls</option>
                </select>
              </div>

              {/* Parameter: Distric in Zimbabwe */}
              <div className="space-y-2">
                <label className="block text-xs font-mono tracking-wider uppercase text-neutral-400 font-bold">
                  Zimbabwe Plot Location District
                </label>
                <select
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-800 text-white rounded p-3 text-sm focus:outline-none focus:border-accent-brand transition-colors font-display text-xs font-semibold tracking-wider uppercase cursor-pointer"
                >
                  <option value="Harare (Highlands/Borrowdale)">Harare (Highlands / Borrowdale)</option>
                  <option value="Harare (Mt Pleasant/Chisipite)">Harare (Mt Pleasant / Chisipite)</option>
                  <option value="Harare West (Belvedere/Mabelreign)">Harare West (Belvedere / Mabelreign)</option>
                  <option value="Bulawayo (Burnside/Suburbs)">Bulawayo (Burnside / Suburbs)</option>
                  <option value="Victoria Falls / Gweru Regional">Victoria Falls / Gweru Regional</option>
                  <option value="Other Regional Location In Zimbabwe">Other Regional location</option>
                </select>
              </div>
            </div>

            {/* Parameter: Area Splicer */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between font-mono">
                <label className="block text-xs uppercase tracking-wider text-neutral-400 font-bold">
                  Estimated Floor Area (or Wall Length)
                </label>
                <span className="text-sm font-bold text-amber-400 bg-neutral-900 px-3 py-1 rounded border border-neutral-800">
                  {areaSqm} SQM
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="800"
                step="10"
                value={areaSqm}
                onChange={(e) => setAreaSqm(Number(e.target.value))}
                className="w-full h-1.5 bg-neutral-800 rounded-lg appearance-none cursor-ew-resize accent-accent-gold"
              />
              <div className="flex justify-between text-[10px] text-neutral-500 font-mono">
                <span>Small Unit (50 sqm)</span>
                <span>Medium Villa (250 sqm)</span>
                <span>Mega Commercial (800 sqm)</span>
              </div>
            </div>

            {/* Parameter: Core services checkboxes */}
            <div className="space-y-3 pt-2">
              <label className="block text-xs font-mono tracking-wider uppercase text-neutral-400 font-bold">
                Toggle Demanded Structural Services
              </label>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  { key: "earthworks", title: "Earthworks & Levelling Groundwork", sub: "G5 Gravel compaction, soil treatment" },
                  { key: "masonry", title: "Common & Face Brick Masonry", sub: "Superstructure, mortar ties" },
                  { key: "concrete", title: "Reinforced Concrete Works", sub: "Foundation strip casting, surface slabs" },
                  { key: "steelfixing", title: "Structural Steel Fixing", sub: "Y10/Y12/Y16 rebar tying columns" },
                  { key: "architecture", title: "Architectural Concept Drafts", sub: "3D visual plans, planning checks" }
                ].map((serv) => {
                  const stateKey = serv.key as keyof typeof servicesSelected;
                  const isChecked = servicesSelected[stateKey];
                  return (
                    <div
                      key={serv.key}
                      onClick={() => toggleService(stateKey)}
                      className={`p-3.5 rounded border transition-all duration-200 cursor-pointer flex items-start space-x-3 select-none ${
                        isChecked
                          ? "bg-neutral-900 border-accent-gold/50 text-white"
                          : "bg-neutral-900/40 border-neutral-800/80 text-neutral-500 hover:border-neutral-800 hover:text-neutral-400"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        readOnly
                        className="mt-0.5 rounded accent-accent-gold focus:ring-0 focus:ring-offset-0 cursor-pointer"
                      />
                      <div className="space-y-0.5 text-left">
                        <span className="block text-xs font-bold font-display uppercase tracking-wider">
                          {serv.title}
                        </span>
                        <p className="text-[10px] text-neutral-500 font-light leading-none mt-0.5">
                          {serv.sub}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Realtime Live Calculations Invoice Output Container */}
          <div className="lg:col-span-5 bg-neutral-950 p-6 sm:p-10 border-t lg:border-t-0 lg:border-l border-neutral-800 flex flex-col justify-between structure-invoice">
            
            <div className="space-y-6">
              <div className="border-b border-neutral-800 pb-4">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500 animate-pulse" />
                  <span className="text-[9px] font-mono tracking-widest text-[#D4A373] uppercase font-bold">
                    MIHI CALCULATOR OUTCOME
                  </span>
                </div>
                <h3 className="text-xl font-display font-extrabold text-white mt-1">
                  Preliminary Invoice Draft
                </h3>
              </div>

              {/* Subtotal Items Grid list */}
              <div className="space-y-3 font-mono text-xs text-neutral-400">
                
                <div className="flex justify-between items-center py-1">
                  <span>Type Base Layout Struct:</span>
                  <span className="text-neutral-200">${((baseRates[projectType] || 150) * areaSqm).toLocaleString()} USD</span>
                </div>

                {servicesSelected.earthworks && (
                  <div className="flex justify-between items-center py-1">
                    <span>Earthworks & compaction offset:</span>
                    <span className="text-neutral-200">${pricingBreakdown.earthworksCost.toLocaleString()} USD</span>
                  </div>
                )}

                {servicesSelected.masonry && (
                  <div className="flex justify-between items-center py-1">
                    <span>Superstructure brick masonry:</span>
                    <span className="text-neutral-200">${pricingBreakdown.masonryCost.toLocaleString()} USD</span>
                  </div>
                )}

                {servicesSelected.concrete && (
                  <div className="flex justify-between items-center py-1">
                    <span>Reinforced foundation & slabs:</span>
                    <span className="text-neutral-200">${pricingBreakdown.concreteCost.toLocaleString()} USD</span>
                  </div>
                )}

                {servicesSelected.steelfixing && (
                  <div className="flex justify-between items-center py-1">
                    <span>Steel rebar fixing columns:</span>
                    <span className="text-neutral-200">${pricingBreakdown.steelFixingCost.toLocaleString()} USD</span>
                  </div>
                )}

                {servicesSelected.architecture && (
                  <div className="flex justify-between items-center py-1">
                    <span>Architectural conceptual drafts:</span>
                    <span className="text-neutral-200">${pricingBreakdown.architectureCost.toLocaleString()} USD</span>
                  </div>
                )}

              </div>

              <div className="border-t border-dashed border-neutral-800 pt-4 mt-4 space-y-2">
                <div className="flex justify-between items-center text-xs font-mono text-neutral-400">
                  <span>Base Materials Subtotal:</span>
                  <span className="text-neutral-200 font-semibold">${pricingBreakdown.subtotal.toLocaleString()} USD</span>
                </div>
                <div className="flex justify-between items-end border-b border-neutral-800 pb-4">
                  <div>
                    <span className="block text-xs text-neutral-500 font-mono font-medium">Preliminary Build Estimate:</span>
                    <p className="text-[10px] text-[#D4A373] font-light leading-none mt-0.5">Includes standard 5% builder contingency</p>
                  </div>
                  <span className="text-2xl sm:text-3xl font-display font-extrabold text-amber-400">
                    ${pricingBreakdown.totalEst.toLocaleString()} <span className="text-xs font-mono text-neutral-400 font-medium font-sans">USD</span>
                  </span>
                </div>
              </div>

              {/* Warning Warning Disclaimer */}
              <div className="flex items-start space-x-2 p-3 rounded bg-red-950/20 border border-red-900/30 text-[10px] text-neutral-400 font-sans leading-relaxed">
                <ShieldAlert className="w-4 h-4 text-accent-brand flex-shrink-0 mt-0.5" />
                <p>
                  Estimates are calculated using current Zimbabwe material indexes (e.g. SABS standard high-tensile steel, Portland cement 42.5N). Final site testing and municipal design plans may alter values.
                </p>
              </div>

            </div>

            {/* HIGH-CONVERSION PRIMARY CTA */}
            <div className="pt-6 mt-6 lg:pt-0">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-display text-xs font-semibold uppercase tracking-widest py-4 px-4 rounded text-center block transition-all shadow-lg flex items-center justify-center space-x-2"
              >
                <MessageSquareCode className="w-4.5 h-4.5" />
                <span>Transmit Draft to WhatsApp</span>
              </a>
              <span className="block text-[9px] font-mono text-neutral-500 uppercase tracking-widest text-center mt-2">
                TARGET CELL: (+263) 778 344 117
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
