import { useState, FormEvent, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { 
  FaArrowRight, 
  FaChevronDown,
  FaCheck,
  FaCoins,
  FaLeaf,
  FaHandshake
} from "react-icons/fa6";
import { useCreateContact } from "@/hooks/use-contacts";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Building a Structured Future for",
      highlight: "African Enterprises.",
      description: "We connect founders, businesses, investors, and communities through tailored opportunities that transform ambition and local enterprises into scalable and investable institutions."
    },
    {
      title: "Systems Thinking for",
      highlight: "African Local Businesses.",
      description: "Generational Seed Corporation (GSC) builds governance-first enterprise ecosystems that help businesses grow sustainably, starting with Nigeria's dynamic SME economy."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const createContact = useCreateContact();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    type: "contact"
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const captchaRef = useRef<HCaptcha>(null);

  const inquiryTypes = [
    { value: "contact", label: "General Contact", desc: "General inquiries and questions" },
    { value: "partner", label: "Partner With Us", desc: "Strategic partnership opportunities" },
    { value: "join", label: "Join the Ecosystem", desc: "Membership and engagement" }
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleScrollToContact = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!captchaToken) {
      alert('Please complete the security verification');
      return;
    }
    createContact.mutate({ ...formData, captchaToken }, {
      onSuccess: () => {
        setFormData({ name: "", email: "", message: "", type: "contact" });
        setCaptchaToken(null);
        captchaRef.current?.resetCaptcha();
      }
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Carousel */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] w-full flex items-center justify-start overflow-hidden bg-[#003366] py-12 sm:py-16 md:py-20">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-40"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 video-overlay z-10" />
          <div className="absolute inset-0 z-10" style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 35px,
              rgba(255, 255, 255, 0.03) 35px,
              rgba(255, 255, 255, 0.03) 70px
            )`
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-20 w-full">
          <motion.div style={{ y: heroY }} className="w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] }}
                className="max-w-4xl"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white leading-[1.05] tracking-tight mb-4 sm:mb-6">
                  {heroSlides[currentSlide].title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">{heroSlides[currentSlide].highlight}</span>
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100/80 mb-6 sm:mb-8 max-w-3xl font-light leading-relaxed">
                  {heroSlides[currentSlide].description}
                </p>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <button 
                    onClick={() => window.location.href = '/ecosystem'}
                    className="bg-white text-[#003366] px-5 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-xs sm:text-sm md:text-base hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 group whitespace-nowrap"
                  >
                    Explore the Ecosystem
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform text-xs sm:text-sm" />
                  </button>
                  <button 
                    onClick={handleScrollToContact}
                    className="bg-transparent border border-white/30 text-white px-5 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-xs sm:text-sm md:text-base hover:bg-white/10 transition-colors flex items-center justify-center whitespace-nowrap"
                  >
                    Join the Network
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 sm:gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1 sm:h-2 rounded-full transition-all ${
                currentSlide === index ? 'w-5 sm:w-8 bg-white' : 'w-1 sm:w-2 bg-white/40'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Subsidiaries Preview */}
      <section id="subsidiaries" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-12 sm:mb-16">
            <h2 className="text-[#003366] font-display font-bold text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-4">Our Subsidiaries</h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-3xl">Specialized platforms supporting different aspects of enterprise growth</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "GSI",
                subtitle: "Generational Seed Investment",
                summary: "A value exchange and investment platform where participants contribute both financial capital and strategic value such as networks, opportunities, ideas, and partnerships.",
                icon: FaCoins,
                color: "#003366"
              },
              {
                title: "GSC Agro",
                subtitle: "Services & Farm Network",
                summary: "A coordinated agricultural network connecting farms, agribusinesses, and food processors to create stable supply chains.",
                icon: FaLeaf,
                color: "#059669"
              },
              {
                title: "GSC Hybrid",
                subtitle: "Marketplace",
                summary: "A hybrid marketplace that enables safe business ecosystem participants to exchange products and services.",
                icon: FaHandshake,
                color: "#7c3aed"
              }
            ].map((sub, idx) => {
              const IconComponent = sub.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="group relative"
                >
                  <div className="relative h-full rounded-2xl overflow-hidden bg-white border border-gray-200 hover:border-gray-300 transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
                    <div className="absolute top-0 left-0 right-0 h-1.5" style={{ backgroundColor: sub.color }} />
                    
                    <div className="p-6 sm:p-8 relative z-10 h-full flex flex-col">
                      <div className="mb-4 sm:mb-6 inline-flex">
                        <div className="p-3 sm:p-4 rounded-xl transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg" style={{ backgroundColor: `${sub.color}15` }}>
                          <IconComponent className="text-2xl sm:text-3xl" style={{ color: sub.color }} />
                        </div>
                      </div>
                      
                      <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#003366] mb-1 transition-colors duration-500 group-hover:text-opacity-80">
                        {sub.title}
                      </h3>
                      <p className="text-xs font-semibold uppercase tracking-widest mb-4 sm:mb-6 transition-colors duration-500" style={{ color: sub.color }}>
                        {sub.subtitle}
                      </p>
                    
                      <div className="w-12 h-0.5 rounded-full mb-4 sm:mb-6 transition-all duration-500 group-hover:w-full" style={{ backgroundColor: sub.color, opacity: 0.3 }} />
                      
                      <p className="text-sm sm:text-base text-foreground/70 mb-6 sm:mb-8 leading-relaxed flex-grow group-hover:text-foreground/90 transition-colors duration-500">
                        {sub.summary}
                      </p>
                      
                      <button
                        onClick={() => window.location.href = '/ecosystem#subsidiaries'}
                        className="inline-flex items-center gap-2 font-semibold text-sm sm:text-base relative overflow-hidden group/btn px-4 py-2 rounded-lg transition-all duration-500"
                        style={{ color: sub.color }}
                      >
                        <span className="relative z-10 group-hover/btn:text-white transition-colors duration-300">Learn More</span>
                        <FaArrowRight className="text-xs sm:text-sm relative z-10 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        <div className="absolute inset-0 rounded-lg scale-x-0 group-hover/btn:scale-x-100 origin-left transition-transform duration-500 -z-10" style={{ backgroundColor: sub.color }} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why GSC Section */}
      <section id="why-gsc" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full -mr-48 -mt-48 opacity-40" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-50 rounded-full -ml-36 -mb-36 opacity-40" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-12 sm:mb-16">
            <h2 className="text-[#003366] font-display font-bold text-2xl sm:text-3xl md:text-4xl mb-2 sm:mb-4">Why Choose GSC?</h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-3xl">Engineering-grade governance infrastructure for enterprise ecosystems</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {[
              { 
                title: "Governance Architecture", 
                desc: "Engineered systems and structures that scale sustainably.",
                icon: "⚙️"
              },
              { 
                title: "Multi-Layer Value Stack", 
                desc: "Capital, networks, insights, and partnerships integrated seamlessly.",
                icon: "🔗"
              },
              { 
                title: "Resilient Growth Framework", 
                desc: "Built for long-term stability with proven methodologies.",
                icon: "📐"
              },
              { 
                title: "Ecosystem Integration", 
                desc: "Your success compounds across the entire network.",
                icon: "🌐"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative"
              >
                <div className="relative h-full p-6 sm:p-8 bg-white rounded-xl sm:rounded-2xl border-2 border-gray-200 hover:border-[#003366] transition-all duration-300 overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#003366] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#003366]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="text-3xl sm:text-4xl mb-4 font-bold opacity-60 group-hover:opacity-100 transition-opacity">{item.icon}</div>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-[#003366] mb-3 group-hover:text-[#002244] transition-colors">{item.title}</h3>
                    <p className="text-sm sm:text-base text-foreground/70 leading-relaxed group-hover:text-foreground/90 transition-colors">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 sm:mt-16 text-center">
            <button
              onClick={() => window.location.href = '/about'}
              className="text-[#003366] font-semibold hover:text-[#002244] transition-colors flex items-center gap-2 mx-auto text-sm sm:text-base group"
            >
              Explore our engineering approach
              <FaArrowRight className="text-xs sm:text-sm group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-gray-200">
              <img 
                src="/boardroom-meeting.jpeg" 
                alt="Partnership and collaboration" 
                className="w-full h-64 sm:h-80 md:h-96 object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-[#003366] mb-6 sm:mb-8 leading-tight">
                Join the Generational Seed Ecosystem
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-foreground/80 mb-8 sm:mb-12 leading-relaxed">
                Whether you are a founder, business owner, investor, or ecosystem partner, you can contribute your unique strengths to building structured African enterprises and help create tailored opportunities for Africa's future.
              </p>
              
              <button 
                onClick={handleScrollToContact}
                className="bg-[#003366] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-[#002244] transition-colors flex items-center justify-center gap-2 group whitespace-nowrap shadow-lg hover:shadow-xl"
              >
                Get Started
                <FaArrowRight className="group-hover:translate-x-1 transition-transform text-xs sm:text-sm" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-16 sm:py-20 md:py-24 bg-[#003366] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 sm:mb-6 leading-tight">
                Let's Build Together
              </h2>
              <p className="text-blue-100/80 text-sm sm:text-base md:text-lg max-w-md mb-8 sm:mb-12">
                Tell us about your business, your goals, and how you'd like to participate in the GSC ecosystem. We'll connect you with the right opportunities and support.
              </p>
              
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">For Businesses:</h4>
                  <p className="text-blue-100/80 text-xs sm:text-sm">Get governance support, strategic partnerships, and access to capital readiness programs.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">For Investors:</h4>
                  <p className="text-blue-100/80 text-xs sm:text-sm">Discover structured investment opportunities through our GSI platform.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">For Partners:</h4>
                  <p className="text-blue-100/80 text-xs sm:text-sm">Collaborate with us to build sustainable enterprise ecosystems.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 text-foreground shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-display font-bold mb-4 sm:mb-6">Get Started</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div className="space-y-2">
                    <label className="text-xs sm:text-sm font-semibold text-foreground/80">Full Name</label>
                    <input 
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-primary/30 focus:ring-4 focus:ring-primary/10 transition-all outline-none text-sm"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs sm:text-sm font-semibold text-foreground/80">Email Address</label>
                    <input 
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-primary/30 focus:ring-4 focus:ring-primary/10 transition-all outline-none text-sm"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="space-y-2" ref={dropdownRef}>
                  <label className="text-xs sm:text-sm font-semibold text-foreground/80">Inquiry Type</label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-gray-50 border border-transparent hover:bg-white hover:border-primary/20 focus:bg-white focus:border-primary/30 focus:ring-4 focus:ring-primary/10 transition-all outline-none text-left flex items-center justify-between group text-sm"
                    >
                      <div>
                        <div className="font-medium text-foreground text-xs sm:text-sm">
                          {inquiryTypes.find(t => t.value === formData.type)?.label}
                        </div>
                        <div className="text-xs text-muted-foreground mt-0.5 hidden sm:block">
                          {inquiryTypes.find(t => t.value === formData.type)?.desc}
                        </div>
                      </div>
                      <FaChevronDown className={`text-muted-foreground transition-transform duration-200 text-xs sm:text-sm ${dropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute z-50 w-full mt-2 bg-white rounded-lg sm:rounded-xl shadow-2xl border border-gray-200 overflow-hidden"
                        >
                          {inquiryTypes.map((type) => (
                            <button
                              key={type.value}
                              type="button"
                              onClick={() => {
                                setFormData({...formData, type: type.value});
                                setDropdownOpen(false);
                              }}
                              className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-left hover:bg-blue-50 transition-colors flex items-start gap-3 group text-sm ${
                                formData.type === type.value ? 'bg-blue-50/50' : ''
                              }`}
                            >
                              <div className={`mt-1 w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                                formData.type === type.value 
                                  ? 'border-[#003366] bg-[#003366]' 
                                  : 'border-gray-300 group-hover:border-[#003366]'
                              }`}>
                                {formData.type === type.value && (
                                  <FaCheck className="text-white text-[6px] sm:text-[8px]" />
                                )}
                              </div>
                              <div className="flex-1">
                                <div className="font-semibold text-foreground group-hover:text-[#003366] transition-colors text-xs sm:text-sm">
                                  {type.label}
                                </div>
                                <div className="text-xs text-muted-foreground mt-0.5">
                                  {type.desc}
                                </div>
                              </div>
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-semibold text-foreground/80">Message</label>
                  <textarea 
                    required
                    rows={3}
                    minLength={10}
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-primary/30 focus:ring-4 focus:ring-primary/10 transition-all outline-none resize-none text-sm"
                    placeholder="Tell us about your objectives... (minimum 10 characters)"
                  />
                  {formData.message.length > 0 && formData.message.length < 10 && (
                    <p className="text-xs text-red-500">Message must be at least 10 characters ({formData.message.length}/10)</p>
                  )}
                </div>

                <div className="flex justify-center">
                  <HCaptcha
                    ref={captchaRef}
                    sitekey="dd429842-c1c4-402a-8b1c-418e12f6ae64"
                    onVerify={(token) => setCaptchaToken(token)}
                    onExpire={() => setCaptchaToken(null)}
                  />
                </div>

                <button 
                  type="submit"
                  disabled={createContact.isPending}
                  className="w-full bg-[#003366] text-white font-semibold py-3 sm:py-4 rounded-lg sm:rounded-xl shadow-lg shadow-[#003366]/20 hover:bg-[#002244] hover:shadow-xl hover:-translate-y-0.5 transition-all active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                >
                  {createContact.isPending ? "Submitting..." : "Submit Inquiry"}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
