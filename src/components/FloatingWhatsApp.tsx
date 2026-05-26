import { useState } from "react";
import { MessageSquare, X, Send, Landmark, Compass } from "lucide-react";

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappMessage = "Hi Mihi Design Studio & Construction. I am on your website and would like to schedule a plan review or a site assessment. Let's discuss details.";
  const whatsappUrl = `https://wa.me/263778344117?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-45 font-sans">
      
      {/* Floating Button with pulsing ring animations representing structural steel coils */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="relative bg-[#25D366] text-white p-3.5 sm:p-4 rounded-full shadow-2xl hover:scale-105 hover:bg-[#20ba5a] active:scale-95 transition-all duration-300 z-50 flex items-center justify-center cursor-pointer group"
          aria-label="Chat with us on WhatsApp"
        >
          {/* Pulsing visual circles */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping z-0" />
          
          <MessageSquare className="w-6 h-6 z-10 fill-white text-[#25D366] group-hover:rotate-6 transition-transform" />
          
          {/* Unread dot indicator */}
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 border-2 border-white rounded-full z-20 flex items-center justify-center font-bold text-[8px] text-white">
            1
          </span>
        </button>
      )}

      {/* Pop-up Interactive Chat Box Card */}
      {isOpen && (
        <div 
          className="bg-white rounded-lg shadow-2xl border border-neutral-200/90 w-[310px] overflow-hidden animate-slide-in relative z-50"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header layout: Mihi corporate profile */}
          <div className="bg-neutral-900 text-white p-4 flex items-center justify-between border-b border-neutral-800">
            <div className="flex items-center space-x-2.5">
              <div className="p-1.5 rounded bg-accent-brand text-white flex items-center justify-center">
                <Landmark className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-xs font-bold font-display uppercase tracking-wider leading-none">Mihi Coordinators</span>
                <span className="text-[10px] font-mono text-green-400 mt-0.5 block font-semibold">● Live Support Online</span>
              </div>
            </div>
            
            <button
              onClick={() => setIsOpen(false)}
              className="text-neutral-400 hover:text-white p-1 rounded-full transition-colors"
              aria-label="Close box"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Simple conversation content */}
          <div className="p-4 bg-neutral-50 space-y-3.5 text-left text-xs text-neutral-800 leading-normal">
            
            <div className="p-3 rounded bg-white shadow-xs border border-neutral-200/80 space-y-1.5">
              <span className="text-[9px] font-mono text-[#D4A373] uppercase block font-semibold">
                MIHI DESIGN STUDIO
              </span>
              <p className="font-light">
                Hello there! If you are building a property in Zimbabwe, you've landed in the right place.
              </p>
            </div>

            <div className="p-3 rounded bg-white shadow-xs border border-neutral-200/80 space-y-1.5">
              <span className="text-[9px] font-mono text-[#D4A373] uppercase block font-semibold">
                SYSTEM PROMPT
              </span>
              <p className="font-light">
                Share your architectural requirements or current council plans. Our site engineers will review and respond in under 15 minutes.
              </p>
            </div>

          </div>

          {/* Core action trigger */}
          <div className="p-3 border-t border-neutral-200 bg-white">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="bg-[#25D366] hover:bg-[#20ba5a] text-white w-full py-2.5 rounded font-display font-bold uppercase tracking-wider text-xs flex items-center justify-center space-x-1.5 transition-colors shadow-sm"
            >
              <span>Transmit via WhatsApp</span>
              <Send className="w-3.5 h-3.5" />
            </a>
            <span className="block text-center text-[9px] font-mono text-neutral-400 mt-2 font-medium">
              (+263) 778 344 117
            </span>
          </div>

        </div>
      )}

    </div>
  );
}
