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
                accent: "#003366",
                image: "/structure.jpg"
              },
              {
                title: "Strategic Connections",
                desc: "We connect businesses with strategic partners, opportunities, advisors, and networks.",
                icon: <FaNetworkWired />,
                accent: "#0052CC",
                image: "/connections.jpg"
              },
              {
                title: "Opportunity Matching",
                desc: "We build sector-based enterprise ecosystem opportunity matching – aligning businesses with opportunities across the GSC ecosystem.",
                icon: <FaChartLine />,
                accent: "#003366",
                image: "/opp-matching.jpg"
              },
              {
                title: "Capital Readiness",
                desc: "We prepare businesses for capital readiness, financial transparency, and structured participation through our GSI platform.",
                icon: <FaChartPie />,
                accent: "#0052CC",
                image: "/capital-readiness.jpg"
              }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center`}
              >
                {/* Mobile/Tablet: Image as background */}
                <div className="w-full md:hidden h-64 rounded-2xl overflow-hidden relative">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  <div className="absolute inset-0 bg-black/50" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center text-white text-2xl mb-4 bg-black/40">
                      {service.icon}
                    </div>
                    <h3 className="font-display font-bold text-2xl text-white mb-2">{service.title}</h3>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>

                {/* Desktop: Content on left, image on right */}
                <div className="hidden md:flex flex-1 flex-col">
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
                
                {/* Desktop: Image beside content */}
                <div className="hidden md:block flex-1 h-80 rounded-2xl overflow-hidden">
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
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


    </div>
  );
}
