import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBuildingColumns, FaChartLine, FaChevronDown, FaCheck, FaXmark } from "react-icons/fa6";

const INDUSTRIES = [
  "Technology",
  "Finance & Banking",
  "Agriculture",
  "Real Estate",
  "Healthcare",
  "Education",
  "Retail & Commerce",
  "Manufacturing",
  "Logistics & Supply Chain",
  "Professional Services",
];

export default function Membership() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const [showModal, setShowModal] = useState(false);
  const [userType, setUserType] = useState<"Business" | "Investor" | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    businessName: "",
    industry: "",
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const openModal = (type: "Business" | "Investor") => {
    setShowModal(true);
    setUserType(type);
    setSuccess(false);
    setFormData({ fullName: "", email: "", businessName: "", industry: "" });
  };

  const closeModal = () => {
    setShowModal(false);
    setUserType(null);
    setSuccess(false);
    setFormData({ fullName: "", email: "", businessName: "", industry: "" });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, userType }),
      });
      if (!res.ok) throw new Error("Failed");
      setSuccess(true);
      setTimeout(() => closeModal(), 2500);
    } catch {
      alert("System busy, please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Why Join Section */}
      <section id="membership" className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-display font-extrabold tracking-tighter text-4xl md:text-5xl mb-4 text-[#003366]">Why Join the Ecosystem</h2>
            <p className="text-muted-foreground font-body text-lg">Discover the benefits tailored to your role</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-12 bg-card border border-border flex flex-col h-full hover:shadow-2xl transition-all duration-500 rounded-sm"
            >
              <div className="w-16 h-16 bg-secondary flex items-center justify-center mb-10">
                <FaBuildingColumns className="text-3xl text-[#003366]" />
              </div>
              <h3 className="font-display font-bold text-3xl mb-6 tracking-tight text-[#003366]">For Businesses</h3>
              <div className="space-y-4 flex-grow">
                {[
                  "Access governance support and strategic partnerships",
                  "Connect with aligned supply chains, partners, and opportunities",
                  "Receive capital readiness programs and investment facilitation",
                  "Build sustainable enterprise structures for long-term growth",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#003366] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-lg text-foreground/90 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
              <button onClick={() => openModal("Business")} className="mt-8 px-6 py-3 bg-[#003366] text-white font-semibold rounded-lg hover:bg-[#002244] transition-colors">
                Join as Business
              </button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-12 bg-[#003366] text-white flex flex-col h-full shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] z-20 rounded-sm relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
              <div className="w-16 h-16 bg-white/10 flex items-center justify-center mb-10">
                <FaChartLine className="text-3xl text-white" />
              </div>
              <h3 className="font-display font-bold text-3xl mb-6 tracking-tight">For Investors</h3>
              <div className="space-y-4 flex-grow">
                {[
                  "Participate in structured investment opportunities through GSI",
                  "Access vetted businesses with strong governance frameworks",
                  "Contribute strategic value beyond financial capital",
                  "Build long-term partnerships in a coordinated ecosystem",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-[#003366]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="opacity-90 font-body text-lg leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
              <button onClick={() => openModal("Investor")} className="mt-8 px-6 py-3 bg-white text-[#003366] font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Join as Investor
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="relative py-32 px-6 md:px-12 md:bg-white" style={{
        backgroundImage: 'url(/agreement.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        {/* Mobile overlay */}
        <div className="absolute inset-0 bg-black/40 md:hidden" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="md:bg-transparent"
            >
              <h2 className="text-white md:text-[#003366] font-display font-bold text-3xl md:text-5xl mb-4">Who We Serve</h2>
              <p className="text-white/90 md:text-muted-foreground text-lg max-w-3xl mb-8">The platform is designed for</p>
              <ul className="space-y-4">
                {[
                  "Local businesses preparing for growth and scale",
                  "Investors seeking structured SME opportunities",
                  "Advisors, operators, and ecosystem partners",
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-6 h-6 rounded-full bg-white md:bg-[#003366] flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-[#003366] md:text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-lg text-white md:text-foreground/90">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="hidden lg:block relative h-96 md:h-full min-h-96 rounded-2xl overflow-hidden shadow-2xl"
            >
              <img src="/agreement.jpeg" alt="Agreement and partnership" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/20 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Waitlist Modal */}
      <AnimatePresence>
        {showModal && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-black/50 z-40"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div className="bg-white rounded-lg shadow-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto">
                {/* Close Button */}
                <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-[#0A2B58]">Join the Network</h2>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <FaXmark className="text-xl" />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-8">
                  <AnimatePresence mode="wait">
                    {success ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-center py-8"
                      >
                        <div className="w-16 h-16 rounded-full bg-[#0A2B58] flex items-center justify-center mx-auto mb-6">
                          <FaCheck className="text-white text-2xl" />
                        </div>
                        <h3 className="text-xl font-bold text-[#0A2B58] mb-3">Registration Successful.</h3>
                        <p className="text-gray-600">Our team will review your enterprise structure shortly.</p>
                      </motion.div>
                    ) : (
                      <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <p className="text-gray-600 text-sm mb-8">Register your interest to scale through our structured governance ecosystem.</p>

                        <form onSubmit={handleSubmit} className="space-y-5">
                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-[#0A2B58]">Full Name</label>
                            <input
                              type="text"
                              required
                              value={formData.fullName}
                              onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                              className="w-full px-4 py-3 bg-gray-50 border border-transparent focus:bg-white focus:border-[#0A2B58]/30 focus:ring-4 focus:ring-[#0A2B58]/10 outline-none text-sm transition-all"
                              placeholder="Your full name"
                            />
                          </div>

                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-[#0A2B58]">Email Address</label>
                            <input
                              type="email"
                              required
                              value={formData.email}
                              onChange={e => setFormData({ ...formData, email: e.target.value })}
                              className="w-full px-4 py-3 bg-gray-50 border border-transparent focus:bg-white focus:border-[#0A2B58]/30 focus:ring-4 focus:ring-[#0A2B58]/10 outline-none text-sm transition-all"
                              placeholder="your.email@company.com"
                            />
                          </div>

                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-[#0A2B58]">Business Name</label>
                            <input
                              type="text"
                              required
                              value={formData.businessName}
                              onChange={e => setFormData({ ...formData, businessName: e.target.value })}
                              className="w-full px-4 py-3 bg-gray-50 border border-transparent focus:bg-white focus:border-[#0A2B58]/30 focus:ring-4 focus:ring-[#0A2B58]/10 outline-none text-sm transition-all"
                              placeholder="Your business name"
                            />
                          </div>

                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-[#0A2B58]">Industry</label>
                            <div className="relative">
                              <button
                                type="button"
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="w-full px-4 py-3 bg-gray-50 border border-transparent hover:bg-white hover:border-[#0A2B58]/20 outline-none text-left flex items-center justify-between text-sm transition-all"
                              >
                                <span className={formData.industry ? "text-foreground" : "text-gray-400"}>
                                  {formData.industry || "Select your industry"}
                                </span>
                                <FaChevronDown className={`text-gray-400 transition-transform duration-200 text-xs ${dropdownOpen ? "rotate-180" : ""}`} />
                              </button>

                              <AnimatePresence>
                                {dropdownOpen && (
                                  <motion.div
                                    initial={{ opacity: 0, y: -8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -8 }}
                                    transition={{ duration: 0.15 }}
                                    className="absolute z-50 w-full mt-1 bg-white border border-gray-200 shadow-xl overflow-hidden"
                                  >
                                    {INDUSTRIES.map((industry) => (
                                      <button
                                        key={industry}
                                        type="button"
                                        onClick={() => {
                                          setFormData({ ...formData, industry });
                                          setDropdownOpen(false);
                                        }}
                                        className={`w-full px-4 py-3 text-left text-sm hover:bg-blue-50 transition-colors flex items-center justify-between ${
                                          formData.industry === industry ? "bg-blue-50 text-[#0A2B58] font-semibold" : "text-foreground"
                                        }`}
                                      >
                                        {industry}
                                        {formData.industry === industry && <FaCheck className="text-[#0A2B58] text-xs" />}
                                      </button>
                                    ))}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          </div>

                          <button
                            type="submit"
                            disabled={submitting || !formData.industry}
                            className="w-full bg-[#0A2B58] text-white font-semibold py-4 text-sm hover:bg-[#081f42] transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-6"
                          >
                            {submitting ? "Submitting..." : "Request Access"}
                          </button>
                        </form>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
