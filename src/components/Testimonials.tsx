import { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, Check } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  quote: string;
  work: string;
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const list: Testimonial[] = [
    {
      id: "t_1",
      name: "Eng. Farai Moyo",
      role: "Private Property Developer",
      location: "Borrowdale, Harare",
      rating: 5,
      quote: "Mihi Design Studio completely blew me away. For years, I struggled with construction quality slipping from my original designs. Mihi combined both under one roof. Their steel fixing schedules and deep Earthworks foundation preparation were flawlessly executed. Best in Harare.",
      work: "Delivered: Modern Luxury Residential Complex"
    },
    {
      id: "t_2",
      name: "Mrs. Rutendo Nyoni",
      role: "Diaspora Property Owner (UK)",
      location: "Harare Highlands / London",
      rating: 5,
      quote: "Being in the UK while building a house in Zimbabwe is extremely stressful due to visual progress updates. Mihi sent regular photos from the concrete pours and brickwork masonry. Everything was logged transparently in USD, and their construction standards are international.",
      work: "Delivered: Dual-Story Traditional Villa with Suspended Slabs"
    },
    {
      id: "t_3",
      name: "Mr. Samuel Chigumba",
      role: "Slab & Foundations Client",
      location: "Burnside, Bulawayo",
      rating: 5,
      quote: "I hired Mihi to execute a massive 450 sqm concrete floor slab with structural pillars. They placed the Y12 and Mesh Ref 193 steel reinforcement with absolute detail. The casting is level, dense, cured perfectly, and certified by Bulawayo municipality. Exceptional skilled workmanship.",
      work: "Delivered: Main Foundations & Surface Slab works"
    }
  ];

  const handlePrev = () => {
    setActiveIndex(prev => (prev === 0 ? list.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex(prev => (prev === list.length - 1 ? 0 : prev + 1));
  };

  const item = list[activeIndex];

  return (
    <section className="py-20 bg-neutral-100 border-b border-neutral-200" id="testimonials">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-[0.25em] text-accent-brand uppercase font-bold block mb-2">
            TRUSTED CLIENT FEEDBACKS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] font-display">
            What Our Valued Partners Say
          </h2>
          <p className="text-neutral-500 text-sm mt-3 font-light leading-relaxed max-w-xl mx-auto">
            Read positive feedback from homeowners, builders, and international diaspora developers who rely on our structural precision.
          </p>
          <div className="w-12 h-1 bg-accent-brand mx-auto mt-6" />
        </div>

        {/* Testimonials Carousel Slider Box */}
        <div className="relative bg-white rounded-xl border border-neutral-200 shadow-xl p-6 sm:p-10 md:p-12">
          
          {/* Quote icon banner background decoration */}
          <div className="absolute top-6 right-6 text-neutral-150 pointer-events-none opacity-20">
            <Quote className="w-12 h-12 md:w-20 md:h-20 text-[#D4A373]" />
          </div>

          <div className="space-y-6 relative z-10">
            {/* Star ratings */}
            <div className="flex items-center space-x-1">
              {Array.from({ length: item.rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
              ))}
            </div>

            {/* Quote narrative copy */}
            <blockquote className="text-base sm:text-lg md:text-xl font-light text-neutral-800 leading-relaxed italic">
              "{item.quote}"
            </blockquote>

            {/* Author info credits */}
            <div className="pt-6 border-t border-neutral-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-display font-bold text-neutral-950 uppercase tracking-wide">
                  {item.name}
                </h4>
                <p className="text-xs text-neutral-500 mt-0.5">
                  {item.role} — <span className="font-mono text-accent-brand">{item.location}</span>
                </p>
              </div>

              {/* Verified scope badge */}
              <div className="inline-flex items-center space-x-1.5 text-[10px] font-mono text-green-700 bg-green-50 border border-green-200 px-3 py-1 rounded-sm uppercase font-semibold">
                <Check className="w-3.5 h-3.5" />
                <span>{item.work}</span>
              </div>
            </div>

          </div>

          {/* Carousel Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 sm:-left-6">
            <button
              onClick={handlePrev}
              className="bg-neutral-900 border border-neutral-800 text-white p-2.5 rounded-full hover:bg-accent-brand shadow-lg cursor-pointer transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4.5 h-4.5" />
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-6">
            <button
              onClick={handleNext}
              className="bg-neutral-900 border border-neutral-800 text-white p-2.5 rounded-full hover:bg-accent-brand shadow-lg cursor-pointer transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4.5 h-4.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
