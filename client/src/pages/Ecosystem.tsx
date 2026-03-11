import { motion } from "framer-motion";
import { FaBuildingColumns, FaSeedling, FaHandshakeAngle, FaCheck, FaNetworkWired, FaChartLine } from "react-icons/fa6";

export default function Ecosystem() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* GSI Section */}
      <section id="gsi" className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-20"
          >
            <h2 className="text-[#003366] font-display font-bold text-3xl md:text-5xl mb-4">GSI – Generational Seed Investment</h2>
            <p className="text-muted-foreground text-lg max-w-3xl">The value exchange and investment platform within the GSC ecosystem.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <p className="text-lg text-foreground/90 leading-relaxed mb-8">
                  Unlike traditional investment platforms that focus only on financial capital, GSI recognizes multiple forms of value that drive business growth.
                </p>
              </div>

              <div>
                <h3 className="font-display font-bold text-2xl text-[#003366] mb-8">Forms of Value We Accept:</h3>
                <ul className="space-y-4">
                  {[
                    "Financial investment",
                    "Strategic insights",
                    "Professional networks",
                    "Business opportunities",
                    "Innovative concepts",
                    "Industry partnerships"
                  ].map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-4"
                    >
                      <div className="w-6 h-6 rounded-full bg-[#003366] flex items-center justify-center flex-shrink-0">
                        <FaCheck className="text-white text-sm" />
                      </div>
                      <span className="text-lg text-foreground/90">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-border">
                <p className="text-lg text-foreground font-semibold">
                  Through this dual-value system, businesses gain both capital and strategic support from investors and the community, enhancing their growth potential.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-12 border border-blue-100"
            >
              <div className="space-y-8">
                {[
                  { num: "1", title: "Capital Access", desc: "Businesses receive financial resources to fuel growth and expansion." },
                  { num: "2", title: "Strategic Support", desc: "Access to networks, insights, and partnerships that accelerate business development." },
                  { num: "3", title: "Community Value", desc: "Investors contribute expertise and opportunities, creating a collaborative ecosystem." },
                  { num: "4", title: "Mutual Growth", desc: "All participants benefit from the success of businesses within the ecosystem." }
                ].map((item, idx) => (
                  <div key={idx}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#003366] text-white flex items-center justify-center font-bold">{item.num}</div>
                      <h4 className="font-display font-bold text-xl text-[#003366]">{item.title}</h4>
                    </div>
                    <p className="text-foreground/80 ml-13">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ecosystem Overview */}
      <section className="py-32 px-6 md:px-12 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-20"
          >
            <h2 className="text-[#003366] font-display font-bold text-3xl md:text-5xl mb-4">A Connected Enterprise Ecosystem</h2>
            <p className="text-muted-foreground text-lg max-w-3xl">Generational Seed Corporation operates through specialized subsidiaries that support different aspects of enterprise growth.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Parent Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1 order-2 lg:order-1"
            >
              <div className="bg-white rounded-2xl p-8 border-2 border-[#003366] shadow-lg h-full">
                <div className="w-12 h-12 bg-[#003366] text-white rounded-lg flex items-center justify-center text-2xl mb-6">
                  <FaBuildingColumns />
                </div>
                <h3 className="font-display font-bold text-2xl text-[#003366] mb-4">Parent Company</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Generational Seed Corporation designs governance systems, enterprise frameworks, and ecosystem coordination.
                </p>
              </div>
            </motion.div>

            {/* Center Diagram */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-1 order-1 lg:order-2 flex flex-col items-center justify-center"
            >
              <div className="relative w-full h-80 flex flex-col items-center justify-center">
                {/* Center Circle */}
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#003366] to-blue-600 flex items-center justify-center text-white shadow-xl mb-8">
                  <div className="text-center">
                    <div className="font-display font-bold text-sm uppercase tracking-wider">GSC</div>
                    <div className="text-xs opacity-80">Ecosystem</div>
                  </div>
                </div>

                {/* Connecting Lines */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-20 bg-gradient-to-b from-[#003366] to-transparent" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-20 bg-gradient-to-t from-[#003366] to-transparent" />
                </div>
              </div>
            </motion.div>

            {/* Subsidiaries Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-1 order-3 space-y-4"
            >
              {[
                { title: "GSI", subtitle: "Generational Seed Finance Platform", desc: "Enterprise development and investment-readiness for high-growth potential assets." },
                { title: "GSC Agro", subtitle: "Agro Services & Farm Network", desc: "Farm-to-market supply and cooperative governance modernized for security." },
                { title: "GSC Hybrid", subtitle: "Hybrid Marketplace", desc: "A hybrid marketplace that enables safe business ecosystem participants to exchange products and services." }
              ].map((sub, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="bg-white rounded-xl p-5 border border-gray-200 hover:border-[#003366]/30 hover:shadow-md transition-all"
                >
                  <h4 className="font-display font-bold text-lg text-[#003366] mb-1">{sub.title}</h4>
                  <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">{sub.subtitle}</p>
                  <p className="text-sm text-foreground/70 leading-relaxed">{sub.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Ecosystem Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-20 p-10 bg-gradient-to-r from-[#003366]/5 to-blue-500/5 rounded-2xl border border-[#003366]/10"
          >
            <h3 className="font-display font-bold text-2xl text-[#003366] mb-6">How It Works Together</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#003366] text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Governance & Structure</h4>
                  <p className="text-sm text-foreground/70">GSC designs the frameworks and systems that enable sustainable enterprise growth.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#003366] text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Specialized Services</h4>
                  <p className="text-sm text-foreground/70">Subsidiaries deliver targeted solutions across finance, agriculture, and commerce.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#003366] text-white flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Integrated Ecosystem</h4>
                  <p className="text-sm text-foreground/70">All entities work together to create seamless opportunities for enterprise growth.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Agro Services Section */}
      <section id="agro" className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-16"
          >
            <h2 className="text-[#003366] font-display font-bold text-3xl md:text-5xl mb-4">Agro Services & Farm Network</h2>
            <p className="text-muted-foreground text-lg max-w-3xl">Connecting farms, agribusinesses, and food processors through coordinated agricultural networks.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <p className="text-lg text-foreground/90 leading-relaxed mb-8">
                  GSC Agro Services connects farms, agribusinesses, and food processors through coordinated agricultural networks.
                </p>
              </div>

              <div>
                <h3 className="font-display font-bold text-2xl text-[#003366] mb-8">Our Services Include:</h3>
                <ul className="space-y-4">
                  {[
                    "Agricultural extension and consultation",
                    "Farmer training and capacity building",
                    "Smart farming technologies",
                    "Crop production aligned with business demand"
                  ].map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-6 h-6 rounded-full bg-[#003366] flex items-center justify-center flex-shrink-0 mt-1">
                        <FaCheck className="text-white text-sm" />
                      </div>
                      <span className="text-lg text-foreground/90">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-border">
                <p className="text-lg text-foreground font-semibold">
                  This network creates predictable supply chains tailored to the demand of companies while giving farmers stable market opportunities.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marketplace Section */}
      <section id="marketplace" className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-16"
          >
            <h2 className="text-[#003366] font-display font-bold text-3xl md:text-5xl mb-4">Marketplace Platform</h2>
            <p className="text-muted-foreground text-lg max-w-3xl">Trade securely within the GSC ecosystem</p>
          </motion.div>

          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <p className="text-lg text-foreground/90 leading-relaxed mb-8">
                  The GSC Hybrid Marketplace is a secure platform where ecosystem participants can exchange products and services, eliminating the traditional 'Pay and Pay' bottleneck in business engagements.
                </p>
              </div>

              <div>
                <h3 className="font-display font-bold text-2xl text-[#003366] mb-8">It Supports:</h3>
                <ul className="space-y-4">
                  {[
                    "Business-to-Business collaboration",
                    "Community-driven commerce",
                    "Strategic value exchange",
                    "Access to enterprise networks"
                  ].map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-6 h-6 rounded-full bg-[#003366] flex items-center justify-center flex-shrink-0 mt-1">
                        <FaCheck className="text-white text-sm" />
                      </div>
                      <span className="text-lg text-foreground/90">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Subsidiaries Section */}
      <section id="subsidiaries" className="py-32 px-6 md:px-12 bg-secondary/50 overflow-hidden relative">
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
              { title: "GSI", subtitle: "Generational Seed Investment", desc: "A value exchange and investment platform where participants contribute both financial capital and strategic value such as networks, opportunities, ideas, and partnerships.", icon: <FaBuildingColumns /> },
              { title: "GSC Agro", subtitle: "Agro Services & Farm Network", desc: "A coordinated agricultural network connecting farms, agribusinesses, and food processors to create stable supply chains.", icon: <FaSeedling /> },
              { title: "GSC Hybrid", subtitle: "Hybrid Marketplace", desc: "A hybrid marketplace that enables safe business ecosystem participants to exchange products and services.", icon: <FaHandshakeAngle /> }
            ].map((sub, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex-shrink-0 w-full md:w-80 p-8 border border-[#003366]/10 bg-card/50 backdrop-blur-sm relative transition-shadow duration-500 hover:shadow-lg"
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
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
