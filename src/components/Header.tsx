import { useState, useEffect } from "react";
import { Phone, ArrowRight, Menu, X, Landmark, Compass } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
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
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 text-neutral-900 shadow-md backdrop-blur-md py-3 border-b border-neutral-100"
          : "bg-transparent text-white py-5"
      }`}
      id="main-nav"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <div 
            className="flex items-center space-x-2.5 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className={`p-2 rounded-lg transition-transform duration-300 group-hover:scale-105 flex items-center justify-center ${
              isScrolled ? "bg-accent-brand text-white" : "bg-white text-accent-brand"
            }`}>
              <Landmark className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <span className="font-display font-bold text-lg tracking-wider block uppercase">
                MIHI
              </span>
              <span className={`text-[9px] font-mono tracking-[0.2em] block uppercase -mt-1 font-semibold ${
                isScrolled ? "text-neutral-500" : "text-amber-300"
              }`}>
                Design & Build
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7" id="desktop-menu">
            <button 
              onClick={() => scrollToSection("about")} 
              className={`text-sm font-medium tracking-wide transition-colors hover:text-accent-brand cursor-pointer ${
                isScrolled ? "text-neutral-600" : "text-neutral-200"
              }`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("services")} 
              className={`text-sm font-medium tracking-wide transition-colors hover:text-accent-brand cursor-pointer ${
                isScrolled ? "text-neutral-600" : "text-neutral-200"
              }`}
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("why-choose-us")} 
              className={`text-sm font-medium tracking-wide transition-colors hover:text-accent-brand cursor-pointer ${
                isScrolled ? "text-neutral-600" : "text-neutral-200"
              }`}
            >
              Values
            </button>
            <button 
              onClick={() => scrollToSection("portfolio")} 
              className={`text-sm font-medium tracking-wide transition-colors hover:text-accent-brand cursor-pointer ${
                isScrolled ? "text-neutral-600" : "text-neutral-200"
              }`}
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection("process")} 
              className={`text-sm font-medium tracking-wide transition-colors hover:text-accent-brand cursor-pointer ${
                isScrolled ? "text-neutral-600" : "text-neutral-200"
              }`}
            >
              Our Process
            </button>
            <button 
              onClick={() => scrollToSection("estimator")} 
              className={`text-sm font-medium tracking-wide transition-colors hover:text-amber-500 text-amber-500 font-semibold cursor-pointer flex items-center gap-1 ${
                isScrolled ? "" : "text-amber-300"
              }`}
            >
              <Compass className="w-4 h-4 animate-spin-slow" /> Cost Estimator
            </button>
            <button 
              onClick={() => scrollToSection("faq")} 
              className={`text-sm font-medium tracking-wide transition-colors hover:text-accent-brand cursor-pointer ${
                isScrolled ? "text-neutral-600" : "text-neutral-200"
              }`}
            >
              FAQs
            </button>
          </nav>

          {/* Call to Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+263778344117"
              className={`flex items-center gap-1 text-sm font-mono transition-colors ${
                isScrolled ? "text-neutral-800 hover:text-accent-brand" : "text-white/90 hover:text-amber-300"
              }`}
            >
              <Phone className="w-4 h-4 stroke-[2]" />
              0778 344 117
            </a>
            <button
              onClick={() => scrollToSection("estimator")}
              className={`cursor-pointer group flex items-center space-x-1.5 px-4 py-2 rounded-md font-display text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                isScrolled
                  ? "bg-neutral-900 text-white hover:bg-accent-brand shadow-sm"
                  : "bg-white/10 text-white hover:bg-white/20 border border-white/20 backdrop-blur-sm"
              }`}
            >
              <span>Instant Quote</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-3.5">
            <a
              href="https://wa.me/263778344117"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full border transition-all ${
                isScrolled 
                  ? "bg-green-50 border-green-200 text-green-600" 
                  : "bg-white/10 border-white/20 text-green-400"
              }`}
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              id="mobile-menu-trigger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md focus:outline-none transition-colors ${
                isScrolled ? "text-neutral-800 hover:bg-neutral-100" : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-neutral-950/98 backdrop-blur-lg z-40 transition-all duration-500 flex flex-col justify-center px-8 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-10"
        }`}
        id="mobile-drawer"
      >
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-6 right-6 text-white/70 hover:text-white p-2"
        >
          <X className="w-8 h-8" />
        </button>

        <nav className="flex flex-col space-y-6 text-center">
          <span className="text-accent-brand text-[9px] font-mono tracking-[0.3em] uppercase block mb-2">
            MIHI DESIGN & CONSTRUCTION
          </span>
          <button
            onClick={() => scrollToSection("about")}
            className="text-white text-2xl font-display font-medium tracking-wide hover:text-amber-400"
          >
            About Studio
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-white text-2xl font-display font-medium tracking-wide hover:text-amber-400"
          >
            Main Services
          </button>
          <button
            onClick={() => scrollToSection("why-choose-us")}
            className="text-white text-2xl font-display font-medium tracking-wide hover:text-amber-400"
          >
            Our Values
          </button>
          <button
            onClick={() => scrollToSection("portfolio")}
            className="text-white text-2xl font-display font-medium tracking-wide hover:text-amber-400"
          >
            Project Showcase
          </button>
          <button
            onClick={() => scrollToSection("process")}
            className="text-white text-2xl font-display font-medium tracking-wide hover:text-amber-400"
          >
            Build Process
          </button>
          <button
            onClick={() => scrollToSection("estimator")}
            className="text-amber-400 text-2xl font-display font-semibold tracking-wide flex items-center justify-center gap-2"
          >
            <Compass className="w-5 h-5 animate-spin-slow text-amber-400" /> Cost Estimator
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-white text-2xl font-display font-medium tracking-wide hover:text-amber-400"
          >
            Contact
          </button>
        </nav>

        <div className="mt-12 text-center flex flex-col items-center space-y-4">
          <p className="text-white/50 text-xs font-mono tracking-wider">
            GET IN TOUCH DIRECTLY
          </p>
          <a
            href="https://wa.me/263778344117"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-500 text-white w-full max-w-xs font-display py-3 rounded-md font-semibold tracking-wider text-sm flex items-center justify-center space-x-2"
          >
            <span>WhatsApp: 0778344117</span>
          </a>
          <a
            href="tel:+263778344117"
            className="text-white/80 hover:text-white font-mono text-sm"
          >
            Voice Call: +263 77 834 4117
          </a>
        </div>
      </div>
    </header>
  );
}
