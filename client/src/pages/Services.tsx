import { motion } from "framer-motion";
import { FaBuildingColumns, FaNetworkWired, FaChartLine, FaChartPie, FaMagnifyingGlassChart, FaArrowUpRightDots, FaGlobe } from "react-icons/fa6";

export default function Services() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Services Section */}
      <section id="services" className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-32"
          >
            <h2 className="text-[#003366] font-display font-bold text-3xl md:text-5xl mb-4">Services</h2>
            <p className="text-muted-foreground text-lg">What we deliver to support your growth</p>
          </motion.div>

          <div className="space-y-20">
            {[
              {
                title: "Governance & Structure",
                desc: "We structure businesses for sustainable growth and implement governance systems and accountability frameworks.",
                icon: <FaBuildingColumns />,
                accent: "#003366"
              },
              {
                title: "Strategic Connections",
                desc: "We connect businesses with strategic partners, opportunities, advisors, and networks.",
                icon: <FaNetworkWired />,
                accent: "#0052CC"
              },
              {
                title: "Opportunity Matching",
                desc: "We build sector-based enterprise ecosystem opportunity matching – aligning businesses with opportunities across the GSC ecosystem.",
                icon: <FaChartLine />,
                accent: "#003366"
              },
              {
                title: "Capital Readiness",
                desc: "We prepare businesses for capital readiness, financial transparency, and structured participation through our GSI platform.",
                icon: <FaChartPie />,
                accent: "#0052CC"
              }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-16 items-center`}
              >
                <div className="flex-1">
                  <div className="flex items-start gap-6">
                    <div 
                      className="w-16 h-16 rounded-xl flex items-center justify-center text-white text-3xl flex-shrink-0 shadow-lg"
                      style={{ backgroundColor: service.accent }}
                    >
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-3xl text-[#003366] mb-4">{service.title}</h3>
                      <p className="text-foreground/80 text-lg leading-relaxed max-w-md">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 h-64 md:h-80 relative">
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-10"
                    style={{ backgroundColor: service.accent }}
                  />
                  <div className="absolute inset-0 rounded-2xl border-2" style={{ borderColor: service.accent, opacity: 0.2 }} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-20" style={{ color: service.accent }}>
                      {service.icon}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Framework Section */}
      <section id="framework" className="py-24 md:py-32 bg-white relative">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-20 text-center"
          >
            <h2 className="text-[#003366] font-display font-bold text-3xl md:text-5xl mb-4">How Our Framework Works</h2>
            <p className="text-muted-foreground text-xl">The Tailored Opportunity Framework connects businesses, opportunities, and ecosystem participants through structured stages.</p>
          </motion.div>

          <div className="absolute left-6 md:left-1/2 top-[240px] bottom-0 w-px bg-gray-200 md:-translate-x-px" />

          <div className="space-y-24">
            {[
              { step: "01", title: "Diagnose", desc: "Identify business potential and structural gaps.", icon: <FaMagnifyingGlassChart /> },
              { step: "02", title: "Structure", desc: "Implement governance systems and operational clarity.", icon: <FaBuildingColumns /> },
              { step: "03", title: "Activate", desc: "Connect businesses with capital, partnerships, and strategic networks.", icon: <FaArrowUpRightDots /> },
              { step: "04", title: "Scale", desc: "Support sustainable growth through ecosystem integration.", icon: <FaGlobe /> }
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

      {/* Governance Section */}
      <section id="governance" className="py-24 md:py-32 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-16"
          >
            <h2 className="text-[#003366] font-display font-bold text-3xl md:text-5xl mb-4">Governance-First Approach</h2>
            <p className="text-muted-foreground text-lg max-w-3xl">At GSC, governance comes before scale.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <p className="text-lg text-foreground/90 leading-relaxed mb-8">
                  Many businesses struggle not because of lack of capital, but because they lack clear structures and accountability systems.
                </p>
              </div>

              <div>
                <h3 className="font-display font-bold text-2xl text-[#003366] mb-6">Our Approach Prioritizes:</h3>
                <ul className="space-y-4">
                  {[
                    "Transparent governance frameworks",
                    "Clear enterprise structures",
                    "Accountability and reporting systems",
                    "Long-term alignment between stakeholders"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-[#003366] flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-lg text-foreground/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-border">
                <p className="text-lg text-foreground font-semibold">
                  These systems help businesses grow on a stable foundation.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-10 border border-blue-100"
            >
              <h3 className="font-display font-bold text-2xl text-[#003366] mb-8">Generational Seed Solutions</h3>
              <div className="space-y-8">
                {[
                  { num: "1", title: "Governance Structuring", desc: "We help businesses implement governance systems, accountability structures, and reporting processes." },
                  { num: "2", title: "Enterprise Architecture", desc: "We design operational structures that allow businesses to scale effectively." },
                  { num: "3", title: "Capital Readiness", desc: "We prepare businesses for investment readiness through financial visibility and governance alignment." },
                  { num: "4", title: "Strategic Partnerships", desc: "We connect businesses with networks, advisors, and partners." }
                ].map((item, idx) => (
                  <div key={idx}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-[#003366] text-white flex items-center justify-center font-bold text-sm">{item.num}</div>
                      <h4 className="font-display font-bold text-lg text-[#003366]">{item.title}</h4>
                    </div>
                    <p className="text-foreground/80 ml-11">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
