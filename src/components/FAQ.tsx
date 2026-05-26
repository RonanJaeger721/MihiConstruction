import { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp, Landmark, Compass, ShieldCheck } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
  sub: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      q: "What is the difference between custom architectural design only and your unified Plan-to-Build system?",
      a: "Architects typically deliver 3D designs but leave municipal coordination and manual construction to third-party laborers, causing layout gaps. With Mihi's unified system, our in-house designers team directly with our structural pourers, steel fixers, and masons. Your physical building stays 100% faithful to the APPROVED blueprints.",
      sub: "PREVENT CONFLICTING PLANS"
    },
    {
      q: "Does Mihi assist with municipal building approvals and city council permits in Harare and Bulawayo?",
      a: "Yes! Preparing architectural concepts for submission is half the battle. We coordinate complete plan submissions and architectural alignment with Harare City Council, Bulawayo City Council, and other regional town structures. We represent you from drafting up to signed certifications.",
      sub: "MUNICIPAL CLEARANCE SUPPORT"
    },
    {
      q: "What concrete mix (MPa) and steel grades do you specify for structural columns and suspended slabs?",
      a: "We never take shortcuts. For simple strip foundations and ground slabs, we specify a minimum of 20MPa concrete. For commercial lintels, portal frames, and first-floor suspended rib-and-block slabs, we utilize 25MPa или 30MPa concrete levels, completely reinforced with SABS-standard Y12 & Y16 high-tensile steel bars and wire mesh grids (Ref 193).",
      sub: "CIVIL ENGINEERING BASELINES"
    },
    {
      q: "Can I manage material purchases (cements, bricks, aggregates) directly, or does Mihi handle procurement?",
      a: "We offer complete flexibility on material purchases. Local and international diaspora clients can choose to procure materials directly matching our detailed structural schedules, or they can appoint Mihi to manage certified procurement. Every material receipt is fully logged and reported in USD indexes.",
      sub: "PROCUREMENT TRANSPARENCY"
    },
    {
      q: "Do you perform physical site assessments and soil profiling outside Harare?",
      a: "Yes. While our primary studio base is in Zimbabwe, we regularly mobilize our specialized earthworks assessment tools to sites in Bulawayo, Gweru, Mutare, Masvingo, and Victoria Falls. We verify slopes, check soil profiling (clay vs. red soil), and execute precise optical levels anywhere.",
      sub: "NATIONAL MOBILIZATION RANGE"
    },
    {
      q: "What warranties do you issue upon handover of a completed property?",
      a: "Because our civil foundation and steel structural systems are engineered with maximum load tolerance, we back all finished structural works with a comprehensive warranty covering structural brickwork masonry alignment, slab settling, column anchors, and damp-proofing lines.",
      sub: "LIFETIME VALUE GUARANTEE"
    }
  ];

  const handleToggle = (ind: number) => {
    if (openIndex === ind) {
      setOpenIndex(null);
    } else {
      setOpenIndex(ind);
    }
  };

  return (
    <section className="py-20 bg-white border-b border-neutral-100" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="text-xs font-mono tracking-[0.25em] text-accent-brand uppercase font-bold block mb-2">
            HAVE QUESTIONS FOR US?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] font-display">
            Frequently Asked Questions
          </h2>
          <p className="text-neutral-500 text-sm mt-3 font-light leading-relaxed max-w-xl mx-auto">
            Clear answers on structural engineering standards, procurement methods, municipal building laws, and warranties for property owners in Zimbabwe.
          </p>
          <div className="w-12 h-1 bg-accent-brand mx-auto mt-6" />
        </div>

        {/* Accordions Stack */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-lg border transition-all duration-300 ${
                  isOpen
                    ? "bg-neutral-50/70 border-accent-gold shadow-xs"
                    : "bg-white border-neutral-200/80 hover:border-neutral-300"
                }`}
              >
                {/* Accordion Trigger Button */}
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer focus:outline-none select-none"
                >
                  <div className="space-y-1">
                    <span className="inline-block text-[9px] font-mono font-bold tracking-widest text-[#D4A373] uppercase">
                      {faq.sub}
                    </span>
                    <h4 className="text-sm sm:text-base font-display font-bold text-neutral-900 tracking-wide pr-5">
                      {faq.q}
                    </h4>
                  </div>
                  <div className={`p-1.5 rounded-full mt-1 flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? "bg-accent-brand text-white rotate-180" : "bg-neutral-100 text-neutral-500"
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Accordion Body Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-[300px] border-t border-neutral-100 p-5 sm:p-6" : "max-h-0"
                  }`}
                >
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Contact Box */}
        <div className="mt-12 bg-neutral-900 text-neutral-200 p-6 rounded-lg border border-neutral-800 text-center space-y-4 shadow-md">
          <div className="flex justify-center">
            <div className="p-3 bg-neutral-800 rounded-full text-accent-brand">
              <HelpCircle className="w-6 h-6" />
            </div>
          </div>
          <div>
            <h4 className="text-base font-display font-semibold text-white uppercase tracking-wider">
              Still have a unique design or site query?
            </h4>
            <p className="text-xs text-neutral-400 font-light mt-1 max-w-lg mx-auto">
              Our estimators are available to review original municipal plans, perform clay soil calculations, and draft layout estimates. Contact us now.
            </p>
          </div>
          <div className="pt-2">
            <a
              href="https://wa.me/263778344117?text=Hi%20Mihi%20Construction.%20I%20checked%20your%20FAQ%20page%20but%20have%20an%20additional%20structural%20query%20about%20my%20plot%20build..."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 bg-accent-brand text-white text-xs font-display font-bold tracking-widest uppercase px-6 py-3 rounded-md hover:bg-accent-brand/90 transition-colors"
            >
              <span>Connect with an Engineer</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
