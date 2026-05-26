import React, { useState } from "react";
import { Phone, MapPin, Instagram, Facebook, Clock, Send, ShieldCheck, Mail, MessageSquare } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    district: "Harare Highlands",
    stage: "needs-design",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.contact.trim() || !formData.message.trim()) {
      setErrorMsg("Please fill in your Name, Contact coordinates, and Message draft.");
      return;
    }
    setErrorMsg("");
    setSubmitted(true);
  };

  const stageLabels: Record<string, string> = {
    "needs-design": "Needs custom architectural blueprints & design plans",
    "has-plans": "Have municipal plans - Need site foundation Earthworks",
    "full-build": "Need heavy concrete columns, brickwork masonry & complete build",
    "fixing-only": "Need customized steel fixing and cage fabrication layouts"
  };

  const getDirectMessageLink = () => {
    const text = `*MIHI DESIGN & BUILD - CONSULTING INQUIRY*
----------------------------------------
*From:* ${formData.name}
*Contact Phone/Email:* ${formData.contact}
*Site Location:* ${formData.district}
*Project Stage:* ${stageLabels[formData.stage] || formData.stage}

*Client Message:*
${formData.message}

_Please contact me for an initial plan review and site assessment scheduling._`;

    return `https://wa.me/263778344117?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="py-20 bg-neutral-900 border-t border-neutral-800 text-white relative" id="contact">
      
      {/* Background blueprint decorative lines */}
      <div className="absolute inset-0 opacity-[0.012] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="contact-wrapper">
          
          {/* LEFT COLUMN: CONTACT DETAILS & IDENTITY CARDS */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div>
              <span className="text-xs font-mono tracking-[0.25em] text-[#D4A373] uppercase font-bold block mb-2">
                GET IN TOUCH
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display uppercase tracking-wide">
                Start Your Build
              </h2>
              <div className="w-16 h-1 bg-accent-brand mt-4" />
            </div>

            <p className="text-neutral-405 text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
              Connect with <strong>Mihi Design Studio & Construction</strong> to review existing site plans, design modern custom homes, or secure concrete and steel-fixing quotations in Zimbabwe.
            </p>

            {/* List coordinates cards */}
            <div className="space-y-4">
              
              {/* Location Card */}
              <div className="p-4 rounded bg-neutral-950/55 border border-neutral-800/80 flex items-start space-x-3.5 shadow-sm">
                <div className="p-2.5 rounded bg-neutral-900 text-accent-brand mt-0.5">
                  <MapPin className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-neutral-500 uppercase font-bold">OPERATING AREA</span>
                  <span className="block text-sm font-semibold text-white">Zimbabwe (National builds coverage)</span>
                  <p className="text-xs text-neutral-400 font-light mt-0.5">Harare suburbs, Borrowdale, Highlands, Mt Pleasant, Bulawayo & regional properties.</p>
                </div>
              </div>

              {/* Call/Whatsapp Card */}
              <div className="p-4 rounded bg-neutral-950/55 border border-neutral-800/80 flex items-start space-x-3.5 shadow-sm">
                <div className="p-2.5 rounded bg-neutral-900 text-green-500 mt-0.5">
                  <Phone className="w-4.5 h-4.5 animate-pulse" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-neutral-500 uppercase font-bold">PHONE & WHATSAPP</span>
                  <a href="tel:+263778344117" className="block text-sm font-semibold text-white hover:text-amber-400 transition-colors">
                    (+263) 778 344 117
                  </a>
                  <p className="text-[11px] text-[#25D366] font-mono mt-0.5">Active on WhatsApp chat daily for plan uploads.</p>
                </div>
              </div>

              {/* Operating Hours card */}
              <div className="p-4 rounded bg-neutral-950/55 border border-neutral-800/80 flex items-start space-x-3.5 shadow-sm">
                <div className="p-2.5 rounded bg-neutral-900 text-accent-gold mt-0.5">
                  <Clock className="w-4.5 h-4.5" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-neutral-500 uppercase font-bold">BUSINESS HOURS</span>
                  <span className="block text-xs font-semibold text-white">Monday — Saturday: 07:30 to 17:30</span>
                  <p className="text-[10px] text-neutral-400 font-light mt-0.5">On-site pouring schedules and safety testing conform to standard weekend slots.</p>
                </div>
              </div>

            </div>

            {/* Social Coordinates row */}
            <div className="space-y-3 pt-4 border-t border-neutral-800">
              <span className="block text-[10px] font-mono text-neutral-500 uppercase tracking-widest font-bold">
                SOCIAL CORRESPONDENCES
              </span>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://www.instagram.com/mihigroupconstruction"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 px-3 py-1.5 rounded bg-neutral-950 border border-neutral-800 text-xs text-neutral-300 hover:text-white hover:border-accent-brand transition-all"
                >
                  <Instagram className="w-4 h-4 text-[#D4A373]" />
                  <span>@mihigroupconstruction</span>
                </a>

                <a
                  href="https://www.facebook.com/profile.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 px-3 py-1.5 rounded bg-neutral-950 border border-neutral-800 text-xs text-neutral-300 hover:text-white hover:border-blue-600 transition-all"
                >
                  <Facebook className="w-4 h-4 text-blue-500" />
                  <span>Mihi Design Studio & Construction</span>
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: INTERACTIVE FORM TICKET CONTAINER */}
          <div className="lg:col-span-7 bg-neutral-950 rounded-xl border border-neutral-800 shadow-2xl p-6 sm:p-8 md:p-10 relative overflow-hidden">
            
            {submitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 bg-green-950/50 text-green-400 border border-green-800 rounded-full flex items-center justify-center mx-auto shadow-lg animate-bounce">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white uppercase tracking-wide">
                    Consulatation Ticket Captured!
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 max-w-md mx-auto leading-relaxed font-light">
                    Thank you for contacting Mihi Design Studio & Construction. We have simulated your review pipeline setup.
                  </p>
                </div>

                <div className="p-4 rounded bg-neutral-900 border border-neutral-800 max-w-md mx-auto text-left space-y-3">
                  <span className="block text-[9px] font-mono text-amber-500 tracking-wider uppercase font-bold text-center">
                    RECOMMENDED NEXT LOGICAL ACTION (FAST PASS)
                  </span>
                  <p className="text-[11px] text-neutral-300 leading-normal text-center">
                    To bypass queue delay bounds entirely, dispatch your design requirements and blueprint specifications directly to our engineering coordinators on WhatsApp.
                  </p>
                  <a
                    href={getDirectMessageLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-display font-semibold uppercase tracking-widest py-3 rounded text-center block transition-all flex items-center justify-center space-x-2"
                  >
                    <MessageSquare className="w-4 h-4 fill-white text-green-500" />
                    <span>Send directly on WhatsApp</span>
                  </a>
                </div>

                <button
                  onClick={() => setSubmitted(false)}
                  className="cursor-pointer text-xs font-mono text-[#D4A373] hover:underline"
                >
                  ← Edit ticket details
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5 text-left">
                
                <div className="border-b border-neutral-800 pb-3 flex items-center justify-between">
                  <h3 className="text-base font-display font-bold uppercase tracking-wider text-white">
                    Submit Inquiry Form
                  </h3>
                  <span className="text-[9px] font-mono text-[#D4A373] bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded font-bold uppercase">
                    Site Ticket v4
                  </span>
                </div>

                {errorMsg && (
                  <div className="p-3 rounded bg-red-950/20 border border-red-900 text-xs text-red-200">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider font-semibold">
                      Your First & Last Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="e.g. Tendai Moyo"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded p-3 text-xs text-white focus:outline-none focus:border-accent-gold transition-colors font-sans"
                    />
                  </div>

                  {/* Contact coordinates */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider font-semibold">
                      Contact Phone / WhatsApp
                    </label>
                    <input
                      type="text"
                      name="contact"
                      placeholder="e.g. (+263) 778 344 117"
                      value={formData.contact}
                      onChange={handleInputChange}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded p-3 text-xs text-white focus:outline-none focus:border-accent-gold transition-colors font-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Plot location */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider font-semibold">
                      Zimbabwe Plot Location / District
                    </label>
                    <input
                      type="text"
                      name="district"
                      placeholder="e.g. Borrowdale Brooke, Harare"
                      value={formData.district}
                      onChange={handleInputChange}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded p-3 text-xs text-white focus:outline-none focus:border-accent-gold transition-colors font-sans"
                    />
                  </div>

                  {/* Project Stage Selection */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider font-semibold">
                      Architectural / Build Stage
                    </label>
                    <select
                      name="stage"
                      value={formData.stage}
                      onChange={handleInputChange}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded p-3 text-xs text-white focus:outline-none focus:border-accent-gold transition-colors font-display text-xs tracking-wider uppercase cursor-pointer"
                    >
                      <option value="needs-design">Needs Architectural Blueprints</option>
                      <option value="has-plans">Have Council Plans - Needs Slabs</option>
                      <option value="full-build">Needs Complete Masonry & Build</option>
                      <option value="fixing-only">Needs Structural Steel Tying</option>
                    </select>
                  </div>
                </div>

                {/* Message notes field */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider font-semibold">
                    Inquiry Brief / Materials Requested
                    <span className="text-[10px] text-neutral-500 block lowercase tracking-normal">Please specify details like estimated floor area (sqm), boundary wall lengths (m), etc.</span>
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Provide a short brief. e.g. I have a 300 sqm plot in Highlands, Harare. I need standard clay-conforming earthworks followed by structural columns casting and face-brick masonry construction."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded p-3 text-xs text-white focus:outline-none focus:border-accent-gold transition-colors font-sans leading-relaxed"
                  />
                </div>

                {/* Form Action Submit or WhatsApp dispatch triggers */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
                  <button
                    type="submit"
                    className="cursor-pointer flex-1 bg-white hover:bg-amber-500 hover:text-white text-neutral-950 font-display text-xs font-bold uppercase tracking-widest py-3.5 px-6 rounded transition-all shadow-lg flex items-center justify-center space-x-2"
                  >
                    <span>Submit Civil Ticket</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={getDirectMessageLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer flex-1 bg-[#25D366] hover:bg-[#20ba5a] text-white font-display text-xs font-semibold uppercase tracking-widest py-3.5 px-6 rounded text-center block transition-all shadow-lg flex items-center justify-center space-x-1.5"
                  >
                    <MessageSquare className="w-4 h-4 fill-white text-green-500" />
                    <span>Inquire via WhatsApp</span>
                  </a>
                </div>

                <div className="flex items-center justify-center space-x-1.5 text-neutral-500 text-[10px] font-mono pt-3 border-t border-neutral-900 leading-none">
                  <ShieldCheck className="w-4 h-4 text-accent-gold" />
                  <span>Secure client connection • Under 24 hour turnaround guarantee</span>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
