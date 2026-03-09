import { useState, FormEvent, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { 
  FaArrowRight, 
  FaMagnifyingGlassChart, 
  FaBuildingColumns, 
  FaArrowUpRightDots,
  FaGlobe,
  FaUsers,
  FaChartLine,
  FaNetworkWired,
  FaChartPie,
  FaSeedling,
  FaHandshakeAngle,
  FaPhone,
  FaArrowUp,
  FaChevronDown,
  FaCheck
} from "react-icons/fa6";
import { useCreateContact } from "@/hooks/use-contacts";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
  const aboutRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: aboutProgress } = useScroll({
    target: aboutRef,
    offset: ["start center", "end center"]
  });
  
  const subsidiariesRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: subsidiariesProgress } = useScroll({
    target: subsidiariesRef,
    offset: ["start center", "end center"]
  });
  
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Engineering Governance-First",
      highlight: "Enterprise Growth.",
      description: "A governance-driven enterprise ecosystem designed to transform undervalued potential into structured, scalable institutions."
    },
    {
      title: "Structure Determines",
      highlight: "Longevity.",
      description: "We operate as a value orchestration layer—aligning governance, strategy, systems, and capital to build enterprises that endure."
    },
    {
      title: "From Ambition to",
      highlight: "Architecture.",
      description: "Converting undervalued opportunities into structured, scalable value through disciplined growth and long-term alignment."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / totalHeight) * 100;
      
      setShowBackToTop(scrolled > 400);
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-header">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="GSC" className="h-8 w-8" />
            <span className="font-display font-bold text-xl text-[#003366] tracking-tight">Generational Seed Corporation</span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-medium text-sm text-[#003366]/80">
            <a href="#about" className="hover:text-[#003366] transition-colors">About</a>
            <a href="#services" className="hover:text-[#003366] transition-colors">Services</a>
            <a href="#framework" className="hover:text-[#003366] transition-colors">Framework</a>
            <a href="#membership" className="hover:text-[#003366] transition-colors">Membership</a>
            <a href="#subsidiaries" className="hover:text-[#003366] transition-colors">Subsidiaries</a>
            <button 
              onClick={handleScrollToContact}
              className="bg-[#003366] text-white px-5 py-2.5 rounded-full hover:bg-[#002244] transition-colors shadow-lg shadow-[#003366]/20 font-semibold"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Carousel */}
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-[#003366]">
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
          {/* Diagonal Stripe Pattern */}
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
        
        <motion.div style={{ y: heroY }} className="max-w-7xl mx-auto px-6 relative z-20 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] }}
              className="max-w-4xl"
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[1.05] tracking-tight mb-8">
                {heroSlides[currentSlide].title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">{heroSlides[currentSlide].highlight}</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100/80 mb-12 max-w-3xl font-light leading-relaxed">
                {heroSlides[currentSlide].description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleScrollToContact}
                  className="bg-white text-[#003366] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 group"
                >
                  Apply to Engage
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={handleScrollToContact}
                  className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors flex items-center justify-center"
                >
                  Explore Structured Alignment
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                currentSlide === index ? 'w-8 bg-white' : 'w-2 bg-white/40'
              }`}
            />
          ))}
        </div>
      </section>

      {/* About - Corporate Overview */}
      <section ref={aboutRef} id="about" className="flex flex-col lg:flex-row min-h-screen border-t border-border">
        <div className="w-full lg:w-1/2 flex flex-col relative z-10">
          <div className="flex-1 px-6 py-12 md:px-12 md:py-20 lg:px-20 lg:py-24 max-w-3xl mx-auto w-full flex flex-col justify-center text-left">
            <motion.header 
              style={{ 
                opacity: useTransform(aboutProgress, [0, 0.3], [0.3, 1]),
                scale: useTransform(aboutProgress, [0, 0.3], [0.95, 1.05])
              }}
              className="mb-12"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-0.5 bg-[#003366]"></div>
                <span className="font-display font-bold tracking-[0.2em] text-xs text-[#003366] uppercase">
                  Corporate Overview
                </span>
              </div>
              <h1 className="font-display font-extrabold tracking-tighter text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-foreground text-balance">
                Generational Seed Corporation
              </h1>
            </motion.header>

            <motion.div 
              style={{ 
                opacity: useTransform(aboutProgress, [0.2, 0.5], [0.3, 1]),
                scale: useTransform(aboutProgress, [0.2, 0.5], [0.95, 1.05])
              }}
              className="prose prose-lg text-muted-foreground font-body leading-relaxed mb-16"
            >
              <p className="text-xl text-foreground font-medium mb-6 text-balance">
                Generational Seed Corporation is a governance-first enterprise ecosystem committed to building structured, scalable institutions through disciplined growth.
              </p>
              <p>
                By aligning foundational principles with rigorous operational execution, we forge entities designed to withstand market volatility and generational shifts.
              </p>
            </motion.div>

            <motion.blockquote 
              style={{ 
                opacity: useTransform(aboutProgress, [0.4, 0.7], [0.3, 1]),
                scale: useTransform(aboutProgress, [0.4, 0.7], [0.95, 1.05]),
                boxShadow: useTransform(aboutProgress, [0.4, 0.7], ["none", "0 0 40px rgba(0, 51, 102, 0.1)"])
              }}
              className="relative mb-8"
            >
              <div className="absolute -left-6 md:-left-12 top-0 bottom-0 w-1 bg-border/60">
                <div className="absolute top-0 left-0 w-full h-1/3 bg-[#003366]"></div>
              </div>
              <p className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-snug">
                "...tailored wings made out of feathers of iron, engineered from the solid ground of strategy and insight"
              </p>
              <footer className="mt-6 flex items-center gap-3">
                <div className="w-4 h-4 bg-[#003366] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-background"></div>
                </div>
                <span className="font-body font-bold tracking-widest text-xs text-muted-foreground uppercase">
                  The Vision
                </span>
              </footer>
            </motion.blockquote>
          </div>
        </div>

        <motion.div 
          style={{ opacity: useTransform(aboutProgress, [0, 0.5], [0.3, 1]) }}
          className="w-full lg:w-1/2 relative h-[50vh] lg:h-auto overflow-hidden bg-muted"
        >
          <div className="absolute inset-0 z-10 bg-[#003366]/10 mix-blend-multiply"></div>
          <div className="absolute inset-0 z-10 bg-gradient-to-t lg:bg-gradient-to-r from-background/80 lg:from-background via-background/20 lg:via-background/5 to-transparent"></div>
          <img
            src="/boardroom-meeting.jpeg"
            alt="Governance Framework & Accountability"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* Market Reality: The "Structural Gap" */}
      <section className="py-24 px-6 md:px-12 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 max-w-3xl">
            <h2 className="font-display font-extrabold tracking-tighter text-4xl md:text-5xl mb-6 text-[#003366]">Market Reality</h2>
            <p className="text-2xl font-body text-muted-foreground leading-tight">
              Most businesses do not fail due to lack of ambition or capital; <span className="text-foreground font-bold italic underline decoration-primary/30 underline-offset-4">they fail due to lack of structure</span>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(200px,auto)]">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-8 p-10 bg-white rounded-2xl institutional-shadow border border-slate-200 relative overflow-hidden group hover:institutional-shadow-hover transition-all"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <FaGlobe className="text-7xl text-[#003366]" />
              </div>
              <h3 className="font-display font-bold text-3xl mb-4 tracking-tight text-[#003366]">Untapped Potential</h3>
              <p className="text-muted-foreground font-body text-xl leading-relaxed max-w-2xl">
                A vast entrepreneurial population operates largely outside formal financial systems.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-4 p-10 bg-white rounded-2xl institutional-shadow border border-slate-200 hover:institutional-shadow-hover transition-all"
            >
              <h3 className="font-display font-bold text-2xl mb-4 tracking-tight text-[#003366]">Unfounded Opportunities</h3>
              <p className="text-muted-foreground font-body text-lg leading-relaxed">
                Gaps in governance mean high-growth opportunities remain undocumented and unvetted.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-12 p-12 bg-[#003366] text-white shadow-2xl rounded-2xl overflow-hidden relative"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-white/20"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
                <div className="max-w-2xl">
                  <h3 className="font-display font-bold text-4xl mb-6 tracking-tighter">Systems That Drive Growth</h3>
                  <p className="opacity-90 font-body text-xl leading-relaxed">
                    Structure determines longevity. We convert structural gaps into scalable value.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 border border-white/20 flex items-center justify-center rotate-45 group hover:rotate-90 transition-transform duration-700">
                    <FaArrowUpRightDots className="w-10 h-10 -rotate-45 group-hover:-rotate-90 transition-transform duration-700" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Economic Thesis */}
      <section className="py-24 md:py-32 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-16 text-center"
          >
            <h2 className="text-[#003366] font-display font-bold text-3xl md:text-5xl mb-4">The Economic Thesis</h2>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto">Tapping Into Undervalued Potential</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-10 institutional-shadow border border-slate-200 hover:institutional-shadow-hover transition-all"
            >
              <div className="w-14 h-14 bg-blue-50 text-[#003366] rounded-2xl flex items-center justify-center text-2xl mb-8">
                <FaMagnifyingGlassChart />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Untapped Entrepreneurial Base</h3>
              <p className="text-muted-foreground leading-relaxed">
                A vast entrepreneurial population operates largely outside formal financial and governance systems. Many businesses demonstrate market viability yet lack the institutional credibility required to access structured capital and scale sustainably.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-10 institutional-shadow border border-slate-200 hover:institutional-shadow-hover transition-all"
            >
              <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center text-2xl mb-8">
                <FaNetworkWired />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Unfounded Opportunities</h3>
              <p className="text-muted-foreground leading-relaxed">
                Gaps in financial intermediation, technology adoption, and corporate governance mean high-growth opportunities remain undocumented, unvetted, and unfunded. Without structured validation, scalable ventures struggle to transition into credible investment-ready enterprises.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#003366] text-white rounded-3xl p-10 shadow-xl"
            >
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-2xl mb-8">
                <FaChartPie />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">Systems That Drive Growth</h3>
              <p className="text-white/80 leading-relaxed">
                The size and resilience of the local economy create a powerful base for expansion. When supported by governance discipline, strategic clarity, and operational transparency, this base can evolve into sustainable institutional growth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-32 px-6 md:px-12 bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-[#003366] font-display font-bold text-3xl md:text-5xl mb-4">Services</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Strategic Advisory",
                  desc: "Deep-level guidance for foundational institutional building, ensuring every decision aligns with long-term generational value."
                },
                {
                  title: "Enterprise Development",
                  desc: "Structural engineering for scalable corporate growth. We build the systems that allow your organization to expand without losing integrity."
                },
                {
                  title: "Capital Facilitation",
                  desc: "Coordinating access to strategic resources and networks, ensuring that capital deployment is as structured as the organizations it supports."
                }
              ].map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-start text-left px-4 py-6 bg-white rounded-2xl institutional-shadow border border-slate-200 hover:institutional-shadow-hover transition-all"
                >
                  <div className="w-12 h-1 bg-[#003366] mb-4"></div>
                  <h4 className="font-display font-bold text-xl mb-3 tracking-tight text-[#003366]">{service.title}</h4>
                  <p className="text-muted-foreground font-body leading-relaxed text-sm">{service.desc}</p>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="/networking.jpeg"
                alt="Business Networking & Strategic Partnerships"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/40 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Framework */}
      <section id="framework" className="py-24 md:py-32 bg-white relative">
        <div className="max-w-4xl mx-auto px-6 relative">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-20 text-center"
          >
            <h2 className="text-[#003366] font-display font-bold text-3xl md:text-5xl mb-4">Tailored Opportunity Framework™</h2>
            <p className="text-muted-foreground text-xl">Our proprietary pathway ensures structured transformation.</p>
          </motion.div>

          <div className="absolute left-6 md:left-1/2 top-[240px] bottom-0 w-px bg-gray-200 md:-translate-x-px" />

          <div className="space-y-24">
            {[
              { step: "01", title: "Diagnose", desc: "Comprehensive assessment of governance maturity, scalability, financial controls, and strategic alignment.", icon: <FaMagnifyingGlassChart /> },
              { step: "02", title: "Structure", desc: "Embedding reporting standards, accountability systems, operational clarity, and governance discipline.", icon: <FaBuildingColumns /> },
              { step: "03", title: "Activate", desc: "Coordinating access to aligned networks, strategic partnerships, and capital channels.", icon: <FaArrowUpRightDots /> },
              { step: "04", title: "Scale", desc: "Supporting responsible expansion and institutional resilience.", icon: <FaGlobe /> }
            ].map((phase, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-16 items-start ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-12 h-12 bg-white border-4 border-[#003366] rounded-full flex items-center justify-center text-[#003366] z-10 font-bold font-display shadow-lg shadow-[#003366]/10">
                  {phase.step}
                </div>

                <div className={`pl-16 md:pl-0 md:w-1/2 ${i % 2 !== 0 ? 'md:text-right' : 'md:text-left'} pt-1`}>
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 text-[#003366] text-xl mb-6 ${i % 2 !== 0 ? 'md:ml-auto' : ''}`}>
                    {phase.icon}
                  </div>
                  <h3 className="text-3xl font-display font-bold text-foreground mb-4">{phase.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">{phase.desc}</p>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section id="membership" className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-display font-extrabold tracking-tighter text-4xl md:text-5xl mb-4 text-[#003366]">Membership</h2>
            <p className="text-muted-foreground font-body text-lg uppercase tracking-widest">Select your path of engagement</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-12 bg-card border border-border flex flex-col h-full hover:shadow-2xl transition-all duration-500 rounded-sm"
            >
              <div className="w-16 h-16 bg-secondary flex items-center justify-center mb-10">
                <FaUsers className="text-3xl text-[#003366]" />
              </div>
              <h3 className="font-display font-bold text-3xl mb-6 tracking-tight text-[#003366]">Individual</h3>
              <p className="text-muted-foreground font-body text-lg mb-10 flex-grow leading-relaxed">For founders seeking disciplined guidance.</p>
              <ul className="space-y-4 border-t border-border pt-8">
                <li className="flex items-center gap-4 text-sm font-bold uppercase tracking-wider"><FaArrowRight className="text-[#003366]" /> Core Mentorship</li>
                <li className="flex items-center gap-4 text-sm font-bold uppercase tracking-wider"><FaArrowRight className="text-[#003366]" /> Strategic Alignment</li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-12 bg-[#003366] text-white flex flex-col h-full md:scale-110 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] z-20 rounded-sm relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
              <div className="w-16 h-16 bg-white/10 flex items-center justify-center mb-10">
                <FaBuildingColumns className="text-3xl text-white" />
              </div>
              <h3 className="font-display font-bold text-3xl mb-6 tracking-tight">Business</h3>
              <p className="opacity-80 font-body text-lg mb-10 flex-grow leading-relaxed">For enterprises ready to embed governance and scale.</p>
              <ul className="space-y-4 border-t border-white/10 pt-8">
                <li className="flex items-center gap-4 text-sm font-bold uppercase tracking-wider"><FaArrowRight className="text-white" /> Reporting Standards</li>
                <li className="flex items-center gap-4 text-sm font-bold uppercase tracking-wider"><FaArrowRight className="text-white" /> Operational Clarity</li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-12 bg-card border border-border flex flex-col h-full hover:shadow-2xl transition-all duration-500 rounded-sm"
            >
              <div className="w-16 h-16 bg-secondary flex items-center justify-center mb-10">
                <FaNetworkWired className="text-3xl text-[#003366]" />
              </div>
              <h3 className="font-display font-bold text-3xl mb-6 tracking-tight text-[#003366]">Strategic Partner</h3>
              <p className="text-muted-foreground font-body text-lg mb-10 flex-grow leading-relaxed">For institutions committed to long-term ecosystem development.</p>
              <ul className="space-y-4 border-t border-border pt-8">
                <li className="flex items-center gap-4 text-sm font-bold uppercase tracking-wider"><FaArrowRight className="text-[#003366]" /> Aligned Networks</li>
                <li className="flex items-center gap-4 text-sm font-bold uppercase tracking-wider"><FaArrowRight className="text-[#003366]" /> Capital Coordination</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Subsidiaries */}
      <section id="subsidiaries" ref={subsidiariesRef} className="py-32 px-6 md:px-12 bg-secondary/50 overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <h2 className="font-display font-extrabold tracking-tighter text-4xl md:text-5xl mb-4 text-[#003366]">
              Subsidiaries
            </h2>
            <div className="w-24 h-1 bg-[#003366] mx-auto"></div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-border/50 -z-10"></div>
            
            {[
              { title: "GSI", subtitle: "Generational Seed Investment", desc: "Enterprise development and investment-readiness for high-growth potential assets.", icon: <FaBuildingColumns /> },
              { title: "ASN", subtitle: "Agro Services & Networks", desc: "Farm-to-market supply and cooperative governance modernized for security.", icon: <FaSeedling /> },
              { title: "BarterBridge™", subtitle: "GSC Marketplace", desc: "Value orchestration, trade, and marketing through clearing protocols.", icon: <FaHandshakeAngle /> }
            ].map((sub, idx) => {
              const isActive = useTransform(
                subsidiariesProgress,
                [idx / 3, (idx + 0.5) / 3],
                [0.3, 1]
              );
              const scale = useTransform(
                subsidiariesProgress,
                [idx / 3, (idx + 0.5) / 3],
                [0.95, 1.05]
              );
              const glow = useTransform(
                subsidiariesProgress,
                [idx / 3, (idx + 0.5) / 3],
                ["none", "0 0 40px rgba(0, 51, 102, 0.2)"]
              );
              return (
                <motion.div
                  key={idx}
                  style={{ opacity: isActive, scale, boxShadow: glow }}
                  className="flex-shrink-0 w-full md:w-80 p-8 border border-[#003366]/10 bg-card/50 backdrop-blur-sm relative transition-shadow duration-500"
                >
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#003366] text-white flex items-center justify-center font-bold text-sm">
                    0{idx + 1}
                  </div>
                  <div className="w-10 h-10 mb-6 text-[#003366] text-2xl">
                    {sub.icon}
                  </div>
                  <h3 className="font-display font-bold text-2xl mb-2 tracking-tight text-[#003366]">{sub.title}</h3>
                  <p className="text-sm font-semibold text-primary/60 uppercase tracking-wider mb-4">{sub.subtitle}</p>
                  <p className="text-muted-foreground font-body leading-relaxed">
                    {sub.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-black text-[20vw] opacity-[0.02] pointer-events-none whitespace-nowrap z-0">
          SUBSIDIARIES
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

          <div className="mt-24 pt-8 border-t border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
              <div className="lg:col-span-5">
                <h2 className="font-display font-black text-4xl mb-8 tracking-tighter">Generational Seed Corporation</h2>
                <p className="text-blue-100/40 font-body text-xl max-w-md leading-relaxed mb-10">
                  Governance-first enterprise infrastructure for generational value creation. We engineer institutions to last.
                </p>
              </div>
              
              <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
                <div className="space-y-6">
                  <h3 className="font-display font-bold text-xs uppercase tracking-[0.2em] text-white/40">Organization</h3>
                  <nav className="flex flex-col gap-4">
                    <a href="#" className="text-sm font-medium hover:text-white/70 transition-colors">Home</a>
                    <a href="#about" className="text-sm font-medium hover:text-white/70 transition-colors">About</a>
                    <a href="#services" className="text-sm font-medium hover:text-white/70 transition-colors">Services</a>
                  </nav>
                </div>
                <div className="space-y-6">
                  <h3 className="font-display font-bold text-xs uppercase tracking-[0.2em] text-white/40">Ecosystem</h3>
                  <nav className="flex flex-col gap-4">
                    <a href="#framework" className="text-sm font-medium hover:text-white/70 transition-colors">Framework</a>
                    <a href="#membership" className="text-sm font-medium hover:text-white/70 transition-colors">Membership</a>
                    <a href="#subsidiaries" className="text-sm font-medium hover:text-white/70 transition-colors">Subsidiaries</a>
                  </nav>
                </div>
                <div className="space-y-6">
                  <h3 className="font-display font-bold text-xs uppercase tracking-[0.2em] text-white/40">Connect</h3>
                  <nav className="flex flex-col gap-4">
                    <a href="#contact" className="text-sm font-medium hover:text-white/70 transition-colors">Contact</a>
                  </nav>
                </div>
              </div>
            </div>
            
            <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
              <div className="flex flex-col gap-2">
                <p className="text-xs uppercase tracking-[0.4em] font-black text-blue-100/60">
                  Move with purpose.
                </p>
                <p className="text-xs uppercase tracking-[0.4em] font-black text-blue-100/60">
                  Connect with direction.
                </p>
                <p className="text-xs uppercase tracking-[0.4em] font-black text-blue-100/60">
                  Build with structure.
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs text-blue-100/20 font-medium">
                  &copy; {new Date().getFullYear()} Generational Seed Corporation. 
                  <br />Designed for longevity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Top Button with Progress Ring */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-[50px] h-[50px] rounded-full backdrop-blur-md bg-[#003366]/80 text-white flex items-center justify-center shadow-lg"
          whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 51, 102, 0.95)" }}
          whileTap={{ scale: 0.9 }}
        >
          <svg className="absolute inset-0 w-full h-full -rotate-90">
            <circle
              cx="25"
              cy="25"
              r="23"
              stroke="rgba(59, 130, 246, 0.3)"
              strokeWidth="2"
              fill="none"
            />
            <circle
              cx="25"
              cy="25"
              r="23"
              stroke="#60a5fa"
              strokeWidth="2"
              fill="none"
              strokeDasharray={`${2 * Math.PI * 23}`}
              strokeDashoffset={`${2 * Math.PI * 23 * (1 - scrollProgress / 100)}`}
              strokeLinecap="round"
              style={{ transition: 'stroke-dashoffset 0.1s ease' }}
            />
          </svg>
          <FaArrowUp className="relative z-10" />
        </motion.button>
      )}
    </div>
  );
}
