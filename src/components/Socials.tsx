import { Instagram, Facebook, Users, Heart, MessageCircle, Star, Sparkles, Check } from "lucide-react";

export default function Socials() {
  const instagramPosts = [
    {
      id: "ig_p1",
      likes: "242",
      comments: "18",
      tag: "#HarareArchitecture",
      imgUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=400",
      caption: "Double-thickness suspended floor slabs cured to 30MPa. Complete steel-fixing mesh Ref 193 aligned. Crafted to last. #mihigroupconstruction #zimbabwe"
    },
    {
      id: "ig_p2",
      likes: "189",
      comments: "14",
      tag: "#DraftToBuild",
      imgUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=400",
      caption: "From drawing drafts to structural layouts. Reviewing architectural details for our upcoming eco-cluster project in Chisipite. #ZimbabweArchitecture #Architects"
    },
    {
      id: "ig_p3",
      likes: "310",
      comments: "25",
      tag: "#SteelFixing",
      imgUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=400",
      caption: "Perfect steel-fixing cages ready for foundation concrete pouring in Highlands. Our skilled fixing artisans ensure structural soundness. #civilengineering"
    }
  ];

  return (
    <section className="py-20 bg-neutral-50 border-b border-neutral-200" id="social-feed">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Intro Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-[0.25em] text-accent-brand uppercase font-bold block mb-2">
            STAY CONNECTED WITH US
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] font-display">
            Follow Our Heavy Builds On Social Media
          </h2>
          <p className="text-neutral-500 text-sm mt-4 font-light leading-relaxed max-w-xl mx-auto">
            We post active updates from our structural construction sites, modern residential concepts, and concrete pouring timelines on Instagram and Facebook.
          </p>
          <div className="w-12 h-1 bg-accent-brand mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT PANEL: INSTAGRAM EMBEDDED FEED MOCKUP */}
          <div className="lg:col-span-7 bg-white rounded-lg border border-neutral-200 shadow-md p-5 sm:p-6 space-y-5">
            {/* Instagram Studio Header */}
            <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-amber-500 via-red-500 to-purple-600 flex items-center justify-center">
                  <div className="w-full h-full bg-white rounded-full p-0.5 flex items-center justify-center">
                    <img 
                      src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=150" 
                      alt="Mihi Logo Profile" 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center space-x-1.5">
                    <h3 className="text-sm font-bold text-neutral-950 font-sans">
                      @mihigroupconstruction
                    </h3>
                    <span className="w-3.5 h-3.5 bg-sky-500 text-white rounded-full flex items-center justify-center text-[8px] font-bold">✓</span>
                  </div>
                  <span className="text-xs text-neutral-500 font-mono">Zimbabwe | Architecture & Build</span>
                </div>
              </div>
              <a
                href="https://www.instagram.com/mihigroupconstruction"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent-brand hover:bg-accent-brand/90 text-white text-xs font-display font-semibold uppercase px-4 py-2 rounded shadow-xs transition-all flex items-center space-x-1.5"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Follow</span>
              </a>
            </div>

            {/* Simulated Statistics Panel */}
            <div className="grid grid-cols-3 gap-2 bg-neutral-50 py-3 rounded-md border border-neutral-100 text-center">
              <div>
                <span className="block text-sm font-bold text-neutral-900 font-mono">134</span>
                <span className="block text-[9px] text-neutral-500 uppercase tracking-wider font-semibold font-mono">updates</span>
              </div>
              <div className="border-x border-neutral-200">
                <span className="block text-sm font-bold text-neutral-900 font-mono">4.2k</span>
                <span className="block text-[9px] text-neutral-500 uppercase tracking-wider font-semibold font-mono">followers</span>
              </div>
              <div>
                <span className="block text-sm font-bold text-neutral-900 font-mono">152</span>
                <span className="block text-[9px] text-neutral-500 uppercase tracking-wider font-semibold font-mono">following</span>
              </div>
            </div>

            {/* Instagram Active Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {instagramPosts.map((post) => (
                <div 
                  key={post.id} 
                  className="group relative h-48 bg-neutral-950 rounded overflow-hidden shadow-xs border border-neutral-100"
                >
                  <img
                    src={post.imgUrl}
                    alt={post.tag}
                    className="w-full h-full object-cover filter brightness-100 group-hover:brightness-95 group-hover:scale-102 transition-all duration-300"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle info ribbon and status on hover */}
                  <div className="absolute inset-0 bg-neutral-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3.5 text-white">
                    <span className="text-[10px] font-mono tracking-wider text-amber-300 font-bold bg-neutral-950/75 self-start px-2 py-0.5 rounded">
                      {post.tag}
                    </span>
                    <div className="flex items-center space-x-3 text-xs font-mono">
                      <span className="flex items-center gap-1">
                        <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> {post.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="w-3.5 h-3.5" /> {post.comments}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <p className="text-neutral-500 text-xs italic font-light leading-relaxed text-center">
              "We provide transparent look-in onto active construction zones. View physical cement pouring, brick mortar mix grades, and structural rebar fixes daily."
            </p>
          </div>

          {/* RIGHT PANEL: FACEBOOK PAGE EMBEDDED UPDATE MOCKUP */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Facebook Page Review Card */}
            <div className="bg-white rounded-lg border border-neutral-200 shadow-md p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
                <div className="flex items-center space-x-2">
                  <div className="p-2 rounded bg-blue-50 text-blue-600">
                    <Facebook className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold">
                      FACEBOOK PROFILE
                    </h4>
                    <span className="text-sm font-bold text-neutral-950 block">
                      Mihi Design Studio & Construction
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-1 py-1 px-2.5 rounded bg-amber-50 border border-amber-200 text-amber-700 font-mono text-xs font-semibold">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  <span>5.0 rating</span>
                </div>
              </div>

              <p className="text-neutral-600 text-xs font-light leading-relaxed">
                Connect on Facebook to read local reviews from homeowners in Harare, view live project albums, tag friends, and message our coordinators directly.
              </p>

              <a
                href="https://www.facebook.com/profile.php"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center w-full bg-blue-600 hover:bg-blue-700 text-white font-display text-xs font-bold uppercase tracking-widest py-3 rounded transition-colors"
              >
                Find Us On Facebook
              </a>
            </div>

            {/* Embedded Live Review Highlight */}
            <div className="bg-neutral-900 text-white rounded-lg p-6 border border-neutral-800 shadow-lg space-y-3 relative overflow-hidden">
              <div className="absolute top-2 right-2 opacity-5 text-neutral-500 pointer-events-none scale-150">
                <Sparkles className="w-16 h-16" />
              </div>
              
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                ))}
              </div>
              
              <h5 className="text-xs font-mono font-bold tracking-wider text-amber-400 uppercase">
                RECOMMENDED BY ARCHITECTS
              </h5>
              
              <p className="text-xs font-light text-neutral-300 leading-relaxed italic">
                "Mihi Design and build team handled our Highlands subgrade earthworks and concrete slabs. The quality of concrete pour and reinforcing steel fix schedules matched my blueprints perfectly. Highly recommend their services for Harare developers."
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-neutral-800 text-[10px] text-neutral-400 font-mono">
                <span>Civil Engineer / Developer Client</span>
                <span className="flex items-center gap-1 text-green-400 uppercase font-bold text-[8px] bg-green-950/80 px-2 py-0.5 rounded border border-green-800">
                  <Check className="w-3 h-3" /> Reviewed on Facebook
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
