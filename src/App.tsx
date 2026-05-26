/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import ProjectShowcase from "./components/ProjectShowcase";
import Process from "./components/Process";
import InteractiveQuote from "./components/InteractiveQuote";
import Socials from "./components/Socials";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 selection:bg-amber-500 selection:text-white antialiased overflow-x-hidden">
      
      {/* 1. Global Navigation Header */}
      <Header />
      
      {/* 2. Hero Interactive Banner Block */}
      <Hero />
      
      {/* 3. About Studio narrative section */}
      <About />
      
      {/* 4. Services Deep Tech Specs display */}
      <Services />
      
      {/* 5. Structural Core values check */}
      <WhyChooseUs />
      
      {/* 6. Portfoio Project Showcase & Before/After comparison tool */}
      <ProjectShowcase />
      
      {/* 7. Design To Build step-by-step Process timeline */}
      <Process />
      
      {/* 8. Zimbabwe Cost Feasibility & Lead Estimator tool */}
      <InteractiveQuote />
      
      {/* 9. Simulated Social Feeds integration */}
      <Socials />
      
      {/* 10. Testimonials trust factors */}
      <Testimonials />
      
      {/* 11. FAQ Accordions block */}
      <FAQ />
      
      {/* 12. Consulting scheduler Ticket form */}
      <ContactForm />
      
      {/* 13. Deep Structural Footer with regulatory standards */}
      <Footer />
      
      {/* 14. Pulsing Floating shortcut widget */}
      <FloatingWhatsApp />

    </div>
  );
}

