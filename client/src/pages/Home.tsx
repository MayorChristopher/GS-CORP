import { useState, FormEvent, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { 
  FaArrowRight, 
  FaPhone,
  FaChevronDown,
  FaCheck
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
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
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
      <section className="relative min-h-screen w-full flex items-center justify-start overflow-hidden bg-[#003366] pb-32 md:pb-24">
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
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-display font-bold text-white leading-[1.05] tracking-tight mb-6 sm:mb-8">
                  {heroSlides[currentSlide].title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">{heroSlides[currentSlide].highlight}</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100/80 mb-8 sm:mb-10 md:mb-12 max-w-3xl font-light leading-relaxed">
                  {heroSlides[currentSlide].description}
                </p>
                <div className="flex flex-col md:flex-row gap-3 sm:gap-4">
                  <button 
                    onClick={() => window.location.href = '/ecosystem'}
                    className="bg-white text-[#003366] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base lg:text-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 group whitespace-nowrap"
                  >
                    Explore the Ecosystem
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button 
                    onClick={handleScrollToContact}
                    className="bg-transparent border border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base lg:text-lg hover:bg-white/10 transition-colors flex items-center justify-center whitespace-nowrap"
                  >
                    Join the Network
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 sm:h-2 rounded-full transition-all ${
                currentSlide === index ? 'w-6 sm:w-8 bg-white' : 'w-1.5 sm:w-2 bg-white/40'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-[#003366] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
                Move with purpose.<br />
                <span className="text-blue-300">Connect with direction.</span>
              </h2>
              <p className="text-blue-100/80 text-xl max-w-md mb-12">
                Governance-first enterprise infrastructure for generational value creation.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-blue-200">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-xl">
                    <FaPhone />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Contact</h4>
                    <p className="text-sm">+234 708 462 8058</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-10 text-foreground shadow-2xl">
              <h3 className="text-2xl font-display font-bold mb-6">Initiate Contact</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground/80">Full Name</label>
                    <input 
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-primary/30 focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground/80">Email Address</label>
                    <input 
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-primary/30 focus:ring-4 focus:ring-primary/10 transition-all outline-none"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="space-y-2" ref={dropdownRef}>
                  <label className="text-sm font-semibold text-foreground/80">Inquiry Type</label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-transparent hover:bg-white hover:border-primary/20 focus:bg-white focus:border-primary/30 focus:ring-4 focus:ring-primary/10 transition-all outline-none text-left flex items-center justify-between group"
                    >
                      <div>
                        <div className="font-medium text-foreground">
                          {inquiryTypes.find(t => t.value === formData.type)?.label}
                        </div>
                        <div className="text-xs text-muted-foreground mt-0.5">
                          {inquiryTypes.find(t => t.value === formData.type)?.desc}
                        </div>
                      </div>
                      <FaChevronDown className={`text-muted-foreground transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute z-50 w-full mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden"
                        >
                          {inquiryTypes.map((type) => (
                            <button
                              key={type.value}
                              type="button"
                              onClick={() => {
                                setFormData({...formData, type: type.value});
                                setDropdownOpen(false);
                              }}
                              className={`w-full px-4 py-3 text-left hover:bg-blue-50 transition-colors flex items-start gap-3 group ${
                                formData.type === type.value ? 'bg-blue-50/50' : ''
                              }`}
                            >
                              <div className={`mt-1 w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                                formData.type === type.value 
                                  ? 'border-[#003366] bg-[#003366]' 
                                  : 'border-gray-300 group-hover:border-[#003366]'
                              }`}>
                                {formData.type === type.value && (
                                  <FaCheck className="text-white text-[8px]" />
                                )}
                              </div>
                              <div className="flex-1">
                                <div className="font-semibold text-foreground group-hover:text-[#003366] transition-colors">
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
                  <label className="text-sm font-semibold text-foreground/80">Message</label>
                  <textarea 
                    required
                    rows={4}
                    minLength={10}
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-primary/30 focus:ring-4 focus:ring-primary/10 transition-all outline-none resize-none"
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
                  className="w-full bg-[#003366] text-white font-semibold py-4 rounded-xl shadow-lg shadow-[#003366]/20 hover:bg-[#002244] hover:shadow-xl hover:-translate-y-0.5 transition-all active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed"
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
