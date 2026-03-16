import { useState, FormEvent, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { 
  FaArrowRight, 
  FaChevronDown,
  FaCheck
} from "react-icons/fa6";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { useCreateContact } from "@/hooks/use-contacts";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
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
      {/* Section 1: Hero - The Mission */}
      <section className="relative min-h-[80vh] w-full flex items-center justify-center overflow-hidden py-20 md:py-24">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[rgba(10,43,88,0.75)] z-10" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-20 text-center">
          <motion.div style={{ y: heroY }}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight mb-6">
              Our Mission
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
              To empower entrepreneurs, connect businesses with opportunities, and build systems that turn local potential into sustainable economic value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.location.href = '/ecosystem'}
                className="bg-white text-[#0A2B58] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 group"
              >
                Explore the Ecosystem
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => window.location.href = '/membership'}
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Join Waitlist
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Governance-First Approach */}
      <section className="py-20 md:py-24 px-4 sm:px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/hands-together-unity.jpg" 
                  alt="Governance and Unity" 
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2B58]/40 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-xl max-w-xs hidden md:block">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 bg-[#0A2B58] rounded-full" />
                  <p className="text-sm font-semibold text-[#0A2B58]">Core Foundation</p>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Strong governance frameworks enable sustainable growth and stakeholder trust.
                </p>
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="mb-8">
                <div className="inline-block bg-[#0A2B58]/10 rounded-full px-4 py-2 mb-4">
                  <p className="text-[#0A2B58] font-semibold text-sm">Our Philosophy</p>
                </div>
                <h2 className="text-5xl md:text-6xl font-bold text-[#0A2B58] mb-6 leading-tight">
                  At GSC, governance comes before scale.
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  We believe that sustainable growth is built on a foundation of transparent systems, clear accountability, and stakeholder alignment. Before scaling, we ensure every business has the governance infrastructure to support long-term success.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: "✓",
                    title: "Transparent Governance Frameworks",
                    desc: "Clear policies and decision-making processes"
                  },
                  {
                    icon: "✓",
                    title: "Clear Enterprise Structures",
                    desc: "Well-defined roles, responsibilities, and hierarchies"
                  },
                  {
                    icon: "✓",
                    title: "Accountability & Reporting Systems",
                    desc: "Regular performance tracking and stakeholder communication"
                  },
                  {
                    icon: "✓",
                    title: "Long-term Stakeholder Alignment",
                    desc: "Shared vision and values across all participants"
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-4 p-4 rounded-lg bg-gradient-to-r from-[#0A2B58]/5 to-transparent border border-[#0A2B58]/10 hover:border-[#0A2B58]/30 hover:bg-gradient-to-r hover:from-[#0A2B58]/10 hover:to-transparent transition-all"
                  >
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#0A2B58] text-white font-bold text-sm">
                        {item.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0A2B58] mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.button
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                onClick={() => window.location.href = '/about'}
                className="inline-flex items-center gap-2 text-[#0A2B58] font-semibold hover:gap-3 transition-all group mt-8"
              >
                Learn More About Our Approach
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Market Reality & Economic Thesis */}
      <section className="relative py-20 md:py-24 px-4 sm:px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/market.jpg" 
            alt="Market Reality" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/70" />
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2B58] mb-6">
              Market Reality
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
              Nigeria has one of the most entrepreneurial populations in the world, with millions of businesses across formal and informal sectors. However, many lack proper governance and structure. As a result, many close within their first year or struggle to grow. Most do not fail due to lack of ambition or opportunity, but because they lack systems, governance, and structured support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Untapped Undervalued Potential",
                desc: "Emerging markets such as Nigeria are characterized not by absences of opportunity, but by under-structured opportunity. Nigeria presents a unique market dynamic defined by structural inefficiencies."
              },
              {
                title: "Untapped Entrepreneurial Base",
                desc: "A vast entrepreneurial population operates largely outside formal financial and governance systems. Many businesses demonstrate market viability yet lack the institutional credibility required to access structured capital."
              },
              {
                title: "Unfounded Opportunities",
                desc: "Gaps in financial intermediation, technology adoption, and corporate governance mean high-growth opportunities remain undocumented, unvetted, and unfunded."
              }
            ].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-lg p-8 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-[#0A2B58] mb-4">
                  {card.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-lg text-gray-700 italic mb-8">
              This gap represents both a risk and an opportunity, revealing the untapped potential within the African business community.
            </p>
            <button
              onClick={() => window.location.href = '/about'}
              className="inline-flex items-center gap-2 text-[#0A2B58] font-semibold hover:gap-3 transition-all group"
            >
              Explore Our Market Analysis
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Structured Solution - The 5 Pillars */}
      <section className="relative py-20 md:py-24 px-4 sm:px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/structure.jpg" 
            alt="Architecture background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A2B58]/90 to-[#0A2B58]/70" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2B58] mb-6">
              Systems That Drive Growth
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              The size and resilience of the local economy create a powerful base for expansion. When supported by governance discipline, strategic clarity, and operational transparency, this base can evolve into sustainable institutional growth.
            </p>
          </motion.div>

          <Carousel className="w-full px-12 md:px-16">
            <CarouselContent>
              {[
                {
                  title: "Governance Structuring",
                  desc: "We help businesses implement governance systems, accountability structures, and reporting processes."
                },
                {
                  title: "Enterprise Architecture",
                  desc: "We design operational structures that allow businesses to scale effectively."
                },
                {
                  title: "Capital Readiness",
                  desc: "We prepare businesses for investment readiness through financial visibility and governance alignment."
                },
                {
                  title: "Strategic Partnerships",
                  desc: "We connect businesses with networks, advisors, and partners."
                },
                {
                  title: "Tailored Opportunity",
                  desc: "We align businesses with adapted opportunities across the GSC ecosystem."
                }
              ].map((pillar, idx) => (
                <CarouselItem key={idx} className="basis-full md:basis-1/2">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-all cursor-pointer h-full"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-3xl font-bold text-white/40 min-w-fit">
                        {String(idx + 1).padStart(2, '0')}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {pillar.title}
                        </h3>
                        <p className="text-white/80">
                          {pillar.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 md:left-2 h-10 w-10 bg-white/20 hover:bg-white/30 border-white/30" />
            <CarouselNext className="right-0 md:right-2 h-10 w-10 bg-white/20 hover:bg-white/30 border-white/30" />
            <div className="flex justify-center mt-6 md:hidden">
              <motion.div
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-white/60 text-sm flex items-center gap-2"
              >
                Swipe to explore
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.div>
            </div>
          </Carousel>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <button
              onClick={() => window.location.href = '/services'}
              className="inline-flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all group"
            >
              Discover All Services
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Section 5: The Ecosystem */}
      <section className="relative py-20 md:py-24 px-4 sm:px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/ecosystem.jpg" 
            alt="Ecosystem background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A2B58]/95 via-[#0A2B58]/85 to-[#0A2B58]/75" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-white/10 rounded-full px-4 py-2 mb-4 border border-white/20">
              <p className="text-white/80 font-semibold text-sm">Our Structure</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Ecosystem
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              A coordinated network of specialized entities working together to drive sustainable growth across African enterprises.
            </p>
          </motion.div>

          <div className="space-y-8">
            {/* Parent Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/15 backdrop-blur-md rounded-2xl p-8 md:p-10 border border-white/30 hover:border-white/50 transition-all shadow-2xl"
            >
              <div className="flex items-start gap-4 md:gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-white/20 border border-white/30">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    Generational Seed Corporation
                  </h3>
                  <p className="text-white/80 text-lg leading-relaxed">
                    The parent organization that designs governance systems, enterprise frameworks, and ecosystem coordination to empower African businesses.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Subsidiaries */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "GSI",
                  subtitle: "Generational Seed Finance Platform",
                  desc: "Enterprise development and investment-readiness for high-growth potential assets.",
                  icon: "💰"
                },
                {
                  title: "GSC Agro",
                  subtitle: "Agro Services & Farm Network",
                  desc: "Farm-to-market supply and cooperative governance modernized for security.",
                  icon: "🌾"
                },
                {
                  title: "GSC Hybrid",
                  subtitle: "Hybrid Marketplace",
                  desc: "A hybrid marketplace that enables safe business ecosystem participants to exchange products and services.",
                  icon: "🛒"
                }
              ].map((sub, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-8 border border-white/20 hover:border-white/40 hover:bg-white/15 transition-all group cursor-pointer"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                    {sub.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {sub.title}
                  </h3>
                  <p className="text-sm text-white/70 font-semibold mb-4 uppercase tracking-wide">
                    {sub.subtitle}
                  </p>
                  <p className="text-white/80 leading-relaxed">
                    {sub.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <button
              onClick={() => window.location.href = '/ecosystem'}
              className="inline-flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all group"
            >
              Explore the Full Ecosystem
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Section 6.5: Tailored Opportunity Framework - Horizontal Progress Tracker */}
      <section className="py-20 md:py-24 px-4 sm:px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2B58] mb-4">
              Tailored Opportunity Framework
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Connecting businesses, opportunities, and ecosystem participants through structured stages.
            </p>
          </motion.div>

          <div className="relative px-0 md:px-8 py-8 md:py-12">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-[#E2E8F0] transform -translate-y-1/2 z-0" />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
              {[
                { number: "01", title: "Diagnose", desc: "Identify business potential and structural gaps." },
                { number: "02", title: "Structure", desc: "Implement governance systems and operational clarity." },
                { number: "03", title: "Activate", desc: "Connect businesses with capital, partnerships, and strategic networks." },
                { number: "04", title: "Scale", desc: "Support sustainable growth through ecosystem integration." }
              ].map((stage, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col items-center group cursor-pointer relative"
                >
                  <div className="mb-6 text-center">
                    <h3 className="text-base md:text-lg font-bold text-[#0A2B58] group-hover:text-[#0A2B58] transition-colors">
                      {stage.title}
                    </h3>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full border-4 border-[#E2E8F0] bg-white shadow-md group-hover:border-[#0A2B58] group-hover:bg-[#0A2B58] transition-all duration-500 z-20 mb-6"
                  >
                    <span className="text-lg md:text-xl font-bold text-[#0A2B58] group-hover:text-white transition-colors duration-500">
                      {stage.number}
                    </span>
                  </motion.div>

                  <div className="text-center">
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                      {stage.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 text-base md:text-lg">
              <span className="font-semibold text-[#0A2B58]">Hover over each stage</span> to see the progression path
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="relative py-20 md:py-24 px-4 sm:px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/connections.jpg" 
            alt="Connections background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A2B58]/95 via-[#0A2B58]/90 to-[#0A2B58]/85" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
                Let's Build Together
              </h2>
              <p className="text-blue-100/80 text-lg max-w-md mb-12">
                Tell us about your business, your goals, and how you'd like to participate in the GSC ecosystem. We'll connect you with the right opportunities and support.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h4 className="font-semibold text-white mb-2 text-lg">For Businesses:</h4>
                  <p className="text-blue-100/80">Get governance support, strategic partnerships, and access to capital readiness programs.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2 text-lg">For Investors:</h4>
                  <p className="text-blue-100/80">Discover structured investment opportunities through our GSI platform.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2 text-lg">For Partners:</h4>
                  <p className="text-blue-100/80">Collaborate with us to build sustainable enterprise ecosystems.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 md:p-10 text-foreground shadow-2xl">
              <h3 className="text-2xl font-bold mb-2">Get in Touch</h3>
              <p className="text-sm text-gray-600 mb-6">Tell us about your business and how you'd like to participate in the GSC ecosystem.</p>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground/80">Full Name</label>
                    <input 
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-transparent focus:bg-white focus:border-primary/30 focus:ring-4 focus:ring-primary/10 transition-all outline-none text-sm"
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
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-transparent focus:bg-white focus:border-primary/30 focus:ring-4 focus:ring-primary/10 transition-all outline-none text-sm"
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
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-transparent hover:bg-white hover:border-primary/20 focus:bg-white focus:border-primary/30 focus:ring-4 focus:ring-primary/10 transition-all outline-none text-left flex items-center justify-between group text-sm"
                    >
                      <div>
                        <div className="font-medium text-foreground text-sm">
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
                          className="absolute z-50 w-full mt-2 bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden"
                        >
                          {inquiryTypes.map((type) => (
                            <button
                              key={type.value}
                              type="button"
                              onClick={() => {
                                setFormData({...formData, type: type.value});
                                setDropdownOpen(false);
                              }}
                              className={`w-full px-4 py-3 text-left hover:bg-blue-50 transition-colors flex items-start gap-3 group text-sm ${
                                formData.type === type.value ? 'bg-blue-50/50' : ''
                              }`}
                            >
                              <div className={`mt-1 w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                                formData.type === type.value 
                                  ? 'border-[#0A2B58] bg-[#0A2B58]' 
                                  : 'border-gray-300 group-hover:border-[#0A2B58]'
                              }`}>
                                {formData.type === type.value && (
                                  <FaCheck className="text-white text-[6px]" />
                                )}
                              </div>
                              <div className="flex-1">
                                <div className="font-semibold text-foreground group-hover:text-[#0A2B58] transition-colors text-sm">
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
                    rows={3}
                    minLength={10}
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-transparent focus:bg-white focus:border-primary/30 focus:ring-4 focus:ring-primary/10 transition-all outline-none resize-none text-sm"
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
                  className="w-full bg-[#0A2B58] text-white font-semibold py-4 rounded-lg shadow-lg shadow-[#0A2B58]/20 hover:bg-[#081f42] hover:shadow-xl hover:-translate-y-0.5 transition-all active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed text-base"
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
