import { useState, FormEvent } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  FaArrowRight, 
  FaMagnifyingGlassChart, 
  FaSeedling, 
  FaBuildingColumns, 
  FaHandshakeAngle, 
  FaArrowUpRightDots,
  FaGlobe,
  FaNetworkWired,
  FaChartPie
} from "react-icons/fa6";
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

  const handleScrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    createContact.mutate(formData, {
      onSuccess: () => setFormData({ name: "", email: "", message: "", type: "contact" })
    });
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-header">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-[#003366] flex items-center justify-center">
              <FaBuildingColumns className="text-white text-sm" />
            </div>
            <span className="font-display font-bold text-xl text-[#003366] tracking-tight">TheGSCorp</span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-medium text-sm text-[#003366]/80">
            <a href="#thesis" className="hover:text-[#003366] transition-colors">Thesis</a>
            <a href="#subsidiaries" className="hover:text-[#003366] transition-colors">Subsidiaries</a>
            <a href="#framework" className="hover:text-[#003366] transition-colors">Framework</a>
            <button 
              onClick={handleScrollToContact}
              className="bg-[#003366] text-white px-5 py-2.5 rounded-full hover:bg-[#002244] transition-colors shadow-lg shadow-[#003366]/20 font-semibold"
            >
              Partner With Us
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#003366]">
        {/* Subtle background abstract shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[100px]" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px]" />
        </div>
        
        <motion.div style={{ y: heroY }} className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium mb-8 backdrop-blur-sm">
              <FaGlobe className="text-blue-300" />
              <span>Generational Seed Corporation</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[1.05] tracking-tight mb-8">
              Engineering Governance-First <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">Growth.</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100/80 mb-12 max-w-2xl font-light leading-relaxed">
              We build, structure, and scale generational enterprise infrastructure that transforms untapped potential into systematic value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleScrollToContact}
                className="bg-white text-[#003366] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 group"
              >
                Join the Ecosystem
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={handleScrollToContact}
                className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors flex items-center justify-center"
              >
                Partner With Us
              </button>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* The Thesis (Bento Grid) */}
      <section id="thesis" className="py-24 md:py-32 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="mb-16"
          >
            <h2 className="text-[#003366] font-display font-bold text-3xl md:text-5xl mb-4">The Thesis</h2>
            <p className="text-muted-foreground text-xl max-w-2xl">The fundamental principles driving our investments and operational structuring.</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Main Feature - Spans 2 columns */}
            <motion.div variants={fadeUp} className="md:col-span-2 bg-white rounded-3xl p-10 institutional-shadow border border-border/50 flex flex-col justify-between group hover:institutional-shadow-hover transition-all duration-300">
              <div className="w-14 h-14 bg-blue-50 text-[#003366] rounded-2xl flex items-center justify-center text-2xl mb-8 group-hover:scale-110 transition-transform">
                <FaMagnifyingGlassChart />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-3">Untapped Potential</h3>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
                  We identify and isolate high-value opportunities within inefficient markets. By applying rigorous governance, we unlock dormant capital and operational capacity.
                </p>
              </div>
            </motion.div>

            {/* Side Feature 1 */}
            <motion.div variants={fadeUp} className="bg-white rounded-3xl p-10 institutional-shadow border border-border/50 group hover:institutional-shadow-hover transition-all duration-300">
              <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center text-2xl mb-8 group-hover:scale-110 transition-transform">
                <FaNetworkWired />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">Unfounded Opportunities</h3>
              <p className="text-muted-foreground leading-relaxed">
                Connecting isolated nodes of value through strategic market positioning and robust technological rails.
              </p>
            </motion.div>

            {/* Side Feature 2 */}
            <motion.div variants={fadeUp} className="bg-[#003366] text-white rounded-3xl p-10 shadow-xl border border-[#003366] group">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-2xl mb-8 group-hover:scale-110 transition-transform">
                <FaChartPie />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">Systems That Drive Growth</h3>
              <p className="text-white/80 leading-relaxed">
                Institutional-grade frameworks designed to compound value symmetrically across our entire ecosystem over decades.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Active Subsidiaries */}
      <section id="subsidiaries" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-[#003366] font-display font-bold text-3xl md:text-5xl mb-6">Active Subsidiaries</h2>
            <p className="text-muted-foreground text-xl">Operating entities executing our core thesis across high-leverage sectors.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "GSI",
                subtitle: "Investment & Enterprise Dev",
                icon: <FaBuildingColumns />,
                desc: "Capital allocation and architectural structuring for high-growth potential assets.",
                color: "bg-blue-50 text-blue-700"
              },
              {
                title: "Agro Services",
                subtitle: "Supply Chain",
                icon: <FaSeedling />,
                desc: "Modernizing agricultural logistics, optimizing yields, and securing food supply lines.",
                color: "bg-emerald-50 text-emerald-700"
              },
              {
                title: "GSC Marketplace",
                subtitle: "BarterBridge Trade",
                icon: <FaHandshakeAngle />,
                desc: "Facilitating seamless B2B transactions and alternative trade clearing protocols.",
                color: "bg-purple-50 text-purple-700"
              }
            ].map((sub, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group relative bg-white p-8 rounded-3xl border border-gray-100 institutional-shadow hover:-translate-y-2 hover:institutional-shadow-hover transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-8 ${sub.color}`}>
                  {sub.icon}
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-1">{sub.title}</h3>
                <h4 className="text-sm font-semibold text-primary/60 uppercase tracking-wider mb-4">{sub.subtitle}</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {sub.desc}
                </p>
                <div className="mt-8 flex items-center text-[#003366] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Explore entity</span>
                  <FaArrowRight className="ml-2" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Framework (Timeline) */}
      <section id="framework" className="py-24 md:py-32 bg-secondary/30 relative border-t border-border/50">
        <div className="max-w-4xl mx-auto px-6 relative">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-20 text-center"
          >
            <h2 className="text-[#003366] font-display font-bold text-3xl md:text-5xl mb-4">The Framework</h2>
            <p className="text-muted-foreground text-xl">A systematic approach to value creation.</p>
          </motion.div>

          {/* Timeline Line */}
          <div className="absolute left-6 md:left-1/2 top-[240px] bottom-0 w-px bg-gray-200 md:-translate-x-px" />

          <div className="space-y-24">
            {[
              { step: "01", title: "Diagnose", desc: "Deep structural analysis of market inefficiencies and organizational debt.", icon: <FaMagnifyingGlassChart /> },
              { step: "02", title: "Structure", desc: "Implementing governance, legal wrappers, and institutional-grade financial rails.", icon: <FaBuildingColumns /> },
              { step: "03", title: "Activate", desc: "Deploying capital and human resources to execute the formulated operational thesis.", icon: <FaArrowUpRightDots /> },
              { step: "04", title: "Scale", desc: "Aggressive compounding through ecosystem synergies and market capture.", icon: <FaGlobe /> }
            ].map((phase, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-16 items-start ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Center Node */}
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

      {/* Global Engagement / Footer */}
      <section id="contact" className="py-24 bg-[#003366] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
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
                    <FaBuildingColumns />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Headquarters</h4>
                    <p className="text-sm">Global Enterprise Center</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form */}
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
                      placeholder="John Doe"
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
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground/80">Inquiry Type</label>
                  <select 
                    value={formData.type}
                    onChange={e => setFormData({...formData, type: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-primary/30 focus:ring-4 focus:ring-primary/10 transition-all outline-none appearance-none"
                  >
                    <option value="contact">General Contact</option>
                    <option value="partner">Partner With Us</option>
                    <option value="join">Join the Ecosystem</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground/80">Message</label>
                  <textarea 
                    required
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-primary/30 focus:ring-4 focus:ring-primary/10 transition-all outline-none resize-none"
                    placeholder="Tell us about your objectives..."
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

          <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-blue-200/60 text-sm">
            <p>&copy; {new Date().getFullYear()} Generational Seed Corporation. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
