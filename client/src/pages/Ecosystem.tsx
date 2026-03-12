import { motion } from "framer-motion";
import { FaBuildingColumns, FaSeedling, FaHandshakeAngle, FaCheck, FaArrowRight } from "react-icons/fa6";

export default function Ecosystem() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Subsidiaries Section */}
      <section id="subsidiaries" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 bg-secondary/50 overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 sm:mb-20 md:mb-24">
            <h2 className="font-display font-extrabold tracking-tighter text-3xl sm:text-4xl md:text-5xl mb-4 text-[#003366]">
              Subsidiaries
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-[#003366] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { title: "GSI", subtitle: "Generational Seed Investment", desc: "A value exchange and investment platform where participants contribute both financial capital and strategic value such as networks, opportunities, ideas, and partnerships.", icon: <FaBuildingColumns />, sectionId: "gsi" },
              { title: "GSC Agro", subtitle: "Agro Services & Farm Network", desc: "A coordinated agricultural network connecting farms, agribusinesses, and food processors to create stable supply chains.", icon: <FaSeedling />, sectionId: "agro" },
              { title: "GSC Hybrid", subtitle: "Hybrid Marketplace", desc: "A hybrid marketplace that enables safe business ecosystem participants to exchange products and services.", icon: <FaHandshakeAngle />, sectionId: "marketplace" }
            ].map((sub, idx) => (
              <motion.button
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => scrollToSection(sub.sectionId)}
                className="p-6 sm:p-8 border border-[#003366]/10 bg-card/50 backdrop-blur-sm relative transition-all duration-300 hover:shadow-lg hover:border-[#003366]/30 hover:bg-card/70 group text-left"
              >
                <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-7 sm:w-8 h-7 sm:h-8 bg-[#003366] text-white flex items-center justify-center font-bold text-xs sm:text-sm">
                  0{idx + 1}
                </div>
                <div className="w-10 h-10 mb-4 sm:mb-6 text-[#003366] text-xl sm:text-2xl">
                  {sub.icon}
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl mb-2 tracking-tight text-[#003366]">{sub.title}</h3>
                <p className="text-xs sm:text-sm font-semibold text-primary/60 uppercase tracking-wider mb-3 sm:mb-4">{sub.subtitle}</p>
                <p className="text-sm sm:text-base text-muted-foreground font-body leading-relaxed mb-4 sm:mb-6">
                  {sub.desc}
                </p>
                <div className="flex items-center gap-2 text-[#003366] font-semibold text-sm sm:text-base group-hover:gap-3 transition-all">
                  Learn More
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* GSI Section */}
      <section 
        id="gsi" 
        className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 relative overflow-hidden"
        style={{
          backgroundImage: 'url(/gsi-network.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Overlay for text visibility */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#003366]/85 via-[#003366]/75 to-blue-900/85 backdrop-blur-sm" />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="text-white font-display font-bold text-2xl sm:text-3xl md:text-5xl mb-3 sm:mb-4">GSI – Generational Seed Investment</h2>
            <p className="text-blue-100/90 text-base sm:text-lg max-w-3xl">The value exchange and investment platform within the GSC ecosystem.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6 sm:space-y-8"
            >
              <div>
                <p className="text-base sm:text-lg text-blue-50/90 leading-relaxed mb-6 sm:mb-8">
                  Unlike traditional investment platforms that focus only on financial capital, GSI recognizes multiple forms of value that drive business growth.
                </p>
              </div>

              <div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-blue-100 mb-6 sm:mb-8">Forms of Value We Accept:</h3>
                <ul className="space-y-3 sm:space-y-4">
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
                      className="flex items-center gap-3 sm:gap-4"
                    >
                      <div className="w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0">
                        <FaCheck className="text-[#003366] text-xs sm:text-sm font-bold" />
                      </div>
                      <span className="text-base sm:text-lg text-blue-50/90">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 sm:pt-6 border-t border-blue-400/30">
                <p className="text-base sm:text-lg text-blue-50 font-semibold">
                  Through this dual-value system, businesses gain both capital and strategic support from investors and the community, enhancing their growth potential.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 border border-white/20 shadow-2xl"
            >
              <div className="space-y-6 sm:space-y-8">
                {[
                  { num: "1", title: "Capital Access", desc: "Businesses receive financial resources to fuel growth and expansion." },
                  { num: "2", title: "Strategic Support", desc: "Access to networks, insights, and partnerships that accelerate business development." },
                  { num: "3", title: "Community Value", desc: "Investors contribute expertise and opportunities, creating a collaborative ecosystem." },
                  { num: "4", title: "Mutual Growth", desc: "All participants benefit from the success of businesses within the ecosystem." }
                ].map((item, idx) => (
                  <div key={idx}>
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-yellow-400 text-[#003366] flex items-center justify-center font-bold text-sm sm:text-base">{item.num}</div>
                      <h4 className="font-display font-bold text-lg sm:text-xl text-white">{item.title}</h4>
                    </div>
                    <p className="text-sm sm:text-base text-blue-50/80 ml-10 sm:ml-13">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Agro Services Section */}
      <section id="agro" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="text-[#003366] font-display font-bold text-2xl sm:text-3xl md:text-5xl mb-3 sm:mb-4">Agro Services & Farm Network</h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-3xl">Connecting farms, agribusinesses, and food processors through coordinated agricultural networks.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6 sm:space-y-8"
            >
              <div>
                <p className="text-base sm:text-lg text-foreground/90 leading-relaxed mb-6 sm:mb-8">
                  GSC Agro Services connects farms, agribusinesses, and food processors through coordinated agricultural networks.
                </p>
              </div>

              <div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-[#003366] mb-6 sm:mb-8">Our Services Include:</h3>
                <ul className="space-y-3 sm:space-y-4">
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
                      className="flex items-start gap-3 sm:gap-4"
                    >
                      <div className="w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-[#003366] flex items-center justify-center flex-shrink-0 mt-1">
                        <FaCheck className="text-white text-xs sm:text-sm" />
                      </div>
                      <span className="text-base sm:text-lg text-foreground/90">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 sm:pt-6 border-t border-border">
                <p className="text-base sm:text-lg text-foreground font-semibold">
                  This network creates predictable supply chains tailored to the demand of companies while giving farmers stable market opportunities.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marketplace Section */}
      <section id="marketplace" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="text-[#003366] font-display font-bold text-2xl sm:text-3xl md:text-5xl mb-3 sm:mb-4">Marketplace Platform</h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-3xl">Trade securely within the GSC ecosystem</p>
          </motion.div>

          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6 sm:space-y-8"
            >
              <div>
                <p className="text-base sm:text-lg text-foreground/90 leading-relaxed mb-6 sm:mb-8">
                  The GSC Hybrid Marketplace is a secure platform where ecosystem participants can exchange products and services, eliminating the traditional 'Pay and Pay' bottleneck in business engagements.
                </p>
              </div>

              <div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-[#003366] mb-6 sm:mb-8">It Supports:</h3>
                <ul className="space-y-3 sm:space-y-4">
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
                      className="flex items-start gap-3 sm:gap-4"
                    >
                      <div className="w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-[#003366] flex items-center justify-center flex-shrink-0 mt-1">
                        <FaCheck className="text-white text-xs sm:text-sm" />
                      </div>
                      <span className="text-base sm:text-lg text-foreground/90">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Connected Enterprise Ecosystem */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="text-[#003366] font-display font-bold text-2xl sm:text-3xl md:text-5xl mb-3 sm:mb-4">A Connected Enterprise Ecosystem</h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-3xl">Generational Seed Corporation operates through specialized subsidiaries that support different aspects of enterprise growth.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 items-start">
            {/* Parent Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1 order-2 lg:order-1"
            >
              <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border-2 border-[#003366] shadow-lg h-full">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-[#003366] text-white rounded-lg flex items-center justify-center text-xl sm:text-2xl mb-4 sm:mb-6">
                  <FaBuildingColumns />
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-[#003366] mb-3 sm:mb-4">Parent Company</h3>
                <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
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
              <div className="relative w-full h-64 sm:h-80 flex flex-col items-center justify-center">
                {/* Center Circle */}
                <div className="w-20 sm:w-24 h-20 sm:h-24 rounded-full bg-gradient-to-br from-[#003366] to-blue-600 flex items-center justify-center text-white shadow-xl mb-6 sm:mb-8">
                  <div className="text-center">
                    <div className="font-display font-bold text-xs sm:text-sm uppercase tracking-wider">GSC</div>
                    <div className="text-[10px] sm:text-xs opacity-80">Ecosystem</div>
                  </div>
                </div>

                {/* Connecting Lines */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-16 sm:h-20 bg-gradient-to-b from-[#003366] to-transparent" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-16 sm:h-20 bg-gradient-to-t from-[#003366] to-transparent" />
                </div>
              </div>
            </motion.div>

            {/* Subsidiaries Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-1 order-3 space-y-3 sm:space-y-4"
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
                  className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 border border-gray-200 hover:border-[#003366]/30 hover:shadow-md transition-all"
                >
                  <h4 className="font-display font-bold text-lg sm:text-lg text-[#003366] mb-1">{sub.title}</h4>
                  <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">{sub.subtitle}</p>
                  <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">{sub.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* How It Works Together */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 sm:mt-16 md:mt-20 p-6 sm:p-8 md:p-10 bg-gradient-to-r from-[#003366]/5 to-blue-500/5 rounded-xl sm:rounded-2xl border border-[#003366]/10"
          >
            <h3 className="font-display font-bold text-xl sm:text-2xl text-[#003366] mb-4 sm:mb-6">How It Works Together</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="flex gap-3 sm:gap-4">
                <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-[#003366] text-white flex items-center justify-center font-bold flex-shrink-0 text-sm sm:text-base">1</div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">Governance & Structure</h4>
                  <p className="text-xs sm:text-sm text-foreground/70">GSC designs the frameworks and systems that enable sustainable enterprise growth.</p>
                </div>
              </div>
              <div className="flex gap-3 sm:gap-4">
                <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-[#003366] text-white flex items-center justify-center font-bold flex-shrink-0 text-sm sm:text-base">2</div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">Specialized Services</h4>
                  <p className="text-xs sm:text-sm text-foreground/70">Subsidiaries deliver targeted solutions across finance, agriculture, and commerce.</p>
                </div>
              </div>
              <div className="flex gap-3 sm:gap-4">
                <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-[#003366] text-white flex items-center justify-center font-bold flex-shrink-0 text-sm sm:text-base">3</div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">Integrated Ecosystem</h4>
                  <p className="text-xs sm:text-sm text-foreground/70">All entities work together to create seamless opportunities for enterprise growth.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
