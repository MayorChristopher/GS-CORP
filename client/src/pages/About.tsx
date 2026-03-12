import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaCheck } from "react-icons/fa6";

export default function About() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: aboutProgress } = useScroll({
    target: aboutRef,
    offset: ["start center", "end center"]
  });

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Who We Are Section */}
      <section ref={aboutRef} id="identity" className="flex flex-col lg:flex-row min-h-screen border-t border-border">
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
                  About
                </span>
              </div>
              <h1 className="font-display font-extrabold tracking-tighter text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-foreground text-balance">
                Who We Are
              </h1>
            </motion.header>

            <motion.div 
              style={{ 
                opacity: useTransform(aboutProgress, [0.2, 0.5], [0.3, 1]),
                scale: useTransform(aboutProgress, [0.2, 0.5], [0.95, 1.05])
              }}
              className="prose prose-lg text-muted-foreground font-body leading-relaxed mb-16 space-y-6"
            >
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Who We Are</h3>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  Generational Seed Corporation is a systems-thinking enterprise ecosystem architect focused on helping businesses, coordinating opportunities, and building systems where capital, ideas, and partnerships can work together.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">What We Do</h3>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  We help businesses grow sustainably, connect with strategic opportunities, and become structured and scalable all within a governance-first ecosystem designed for long-term impact and community participation.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Our Vision</h3>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  To create structured economic ecosystems where businesses and communities grow sustainably, together.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Our Mission</h3>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  To empower entrepreneurs, align businesses with opportunities, and create systems that transform local enterprise potential into sustainable economic value.
                </p>
              </div>
            </motion.div>
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

      {/* Market Reality Section */}
      <section className="py-24 px-6 md:px-12 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 max-w-4xl">
            <h2 className="font-display font-extrabold tracking-tighter text-4xl md:text-5xl mb-8 text-[#003366]">The Market Reality</h2>
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed font-body">
              Nigeria has one of the most entrepreneurial populations in the world. Many people start businesses, and millions of small and medium enterprises operate across both the formal and informal sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-10 bg-white rounded-2xl institutional-shadow border border-slate-200 hover:institutional-shadow-hover transition-all"
            >
              <h3 className="font-display font-bold text-2xl mb-4 tracking-tight text-[#003366]">The Problem</h3>
              <p className="text-foreground/90 font-body text-lg leading-relaxed">
                Many businesses do not have proper governance systems or clear structures. <span className="font-bold text-red-600">They fail because they lack structure, systems, and proper organization</span> — not because they lack ambition or capital.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 md:p-10 bg-white rounded-2xl institutional-shadow border border-slate-200 hover:institutional-shadow-hover transition-all"
            >
              <h3 className="font-display font-bold text-2xl mb-4 tracking-tight text-[#003366]">The Impact</h3>
              <p className="text-foreground/90 font-body text-lg leading-relaxed">
                A large number of newly registered businesses close within their first year. Others struggle to grow, not because opportunities are unavailable, but because they lack governance systems and institutional support.
              </p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-10 md:p-12 bg-gradient-to-r from-[#003366] to-[#004d99] text-white rounded-2xl shadow-xl overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -mr-20 -mt-20"></div>
            <div className="relative z-10">
              <h3 className="font-display font-bold text-3xl md:text-4xl mb-4 tracking-tight">The Opportunity</h3>
              <p className="text-blue-100/90 font-body text-lg leading-relaxed mb-6">
                This structural gap represents both a risk and an opportunity, revealing the untapped potential within Nigeria's business community.
              </p>
              <div className="pt-6 border-t border-white/20">
                <p className="font-semibold text-lg">
                  <span className="text-blue-200">Generational Seed Corporation exists to close this gap</span> by helping turn informal business potential into structured, well-organized enterprises that can grow and scale over the long term.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Governance-First Approach */}
      <section className="py-24 md:py-32 bg-white">
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
                  <li className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#003366] flex items-center justify-center flex-shrink-0 mt-1">
                      <FaCheck className="text-white text-sm" />
                    </div>
                    <span className="text-lg text-foreground/90">Transparent governance frameworks</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#003366] flex items-center justify-center flex-shrink-0 mt-1">
                      <FaCheck className="text-white text-sm" />
                    </div>
                    <span className="text-lg text-foreground/90">Clear enterprise structures</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#003366] flex items-center justify-center flex-shrink-0 mt-1">
                      <FaCheck className="text-white text-sm" />
                    </div>
                    <span className="text-lg text-foreground/90">Accountability and reporting systems</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#003366] flex items-center justify-center flex-shrink-0 mt-1">
                      <FaCheck className="text-white text-sm" />
                    </div>
                    <span className="text-lg text-foreground/90">Long-term alignment between stakeholders</span>
                  </li>
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
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-[#003366] text-white flex items-center justify-center font-bold text-sm">1</div>
                    <h4 className="font-display font-bold text-lg text-[#003366]">Governance Structuring</h4>
                  </div>
                  <p className="text-foreground/80 ml-11">We help businesses implement governance systems, accountability structures, and reporting processes.</p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-[#003366] text-white flex items-center justify-center font-bold text-sm">2</div>
                    <h4 className="font-display font-bold text-lg text-[#003366]">Enterprise Architecture</h4>
                  </div>
                  <p className="text-foreground/80 ml-11">We design operational structures that allow businesses to scale effectively.</p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-[#003366] text-white flex items-center justify-center font-bold text-sm">3</div>
                    <h4 className="font-display font-bold text-lg text-[#003366]">Capital Readiness</h4>
                  </div>
                  <p className="text-foreground/80 ml-11">We prepare businesses for investment readiness through financial visibility and governance alignment.</p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-[#003366] text-white flex items-center justify-center font-bold text-sm">4</div>
                    <h4 className="font-display font-bold text-lg text-[#003366]">Strategic Partnerships</h4>
                  </div>
                  <p className="text-foreground/80 ml-11">We connect businesses with networks, advisors, and partners.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="mission" className="py-32 px-6 md:px-12 bg-gradient-to-b from-white via-blue-50/40 to-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100/20 rounded-full -mr-48 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100/20 rounded-full -ml-40 blur-3xl" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-20"
          >
            <h2 className="text-[#003366] font-display font-bold text-3xl md:text-5xl mb-4">Our Guiding Philosophy</h2>
            <p className="text-muted-foreground text-lg">The principles that drive everything we do</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {[
              { icon: "🎯", title: "Move with Purpose", desc: "Every action is intentional and aligned with long-term value creation." },
              { icon: "🧭", title: "Connect with Direction", desc: "Strategic relationships that create meaningful opportunities and growth." },
              { icon: "🏗️", title: "Build with Structure", desc: "Governance and systems that enable sustainable, scalable enterprises." }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#003366]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative p-8 rounded-2xl border-2 border-[#003366]/10 group-hover:border-[#003366]/30 transition-all duration-300 bg-white/50 backdrop-blur-sm">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                  <h3 className="font-display font-bold text-2xl text-[#003366] mb-4 group-hover:text-[#002244] transition-colors">{item.title}</h3>
                  <p className="text-foreground/80 text-lg leading-relaxed group-hover:text-foreground/90 transition-colors">{item.desc}</p>
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#003366] to-blue-500 group-hover:w-full transition-all duration-500 rounded-full" />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-20 pt-16 border-t-2 border-[#003366]/10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#003366] text-white flex items-center justify-center flex-shrink-0 font-bold text-lg">1</div>
                  <div>
                    <h4 className="font-display font-bold text-xl text-[#003366] mb-2">Before Capital Comes Governance</h4>
                    <p className="text-foreground/80 text-lg leading-relaxed">Strong systems and accountability frameworks are the foundation for sustainable growth.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#003366] text-white flex items-center justify-center flex-shrink-0 font-bold text-lg">2</div>
                  <div>
                    <h4 className="font-display font-bold text-xl text-[#003366] mb-2">Before Scale Comes Alignment</h4>
                    <p className="text-foreground/80 text-lg leading-relaxed">All stakeholders must be aligned on vision, values, and long-term objectives.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Credibility Section */}
      <section id="vision" className="py-32 px-6 md:px-12 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-16"
          >
            <h2 className="text-[#003366] font-display font-bold text-3xl md:text-5xl mb-4">Our Credibility</h2>
            <p className="text-muted-foreground text-lg max-w-3xl">Built on practical experience, ecosystem engagement, and research-driven insights</p>
          </motion.div>

          <div className="space-y-16">
            {/* Founder Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h3 className="font-display font-bold text-2xl text-[#003366]">Founder Experience</h3>
              <p className="text-lg text-foreground/90 leading-relaxed">
                The founder of Generational Seed Corporation brings experience working within enterprise and cooperative environments focused on structuring and supporting local businesses.
              </p>
              <ul className="space-y-4">
                {[
                  "Private enterprise investment and local business development",
                  "Digital cooperative ledger platforms used to improve transparency and enterprise accountability",
                  "Online enterprise stock systems designed to help businesses access structured investment opportunities"
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
            </motion.div>

            {/* Pilot Enterprise Engagement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-8 pt-8 border-t border-border"
            >
              <h3 className="font-display font-bold text-2xl text-[#003366]">Pilot Enterprise Engagement</h3>
              <p className="text-lg text-foreground/90 leading-relaxed">
                GSC has begun engaging with emerging businesses to understand the structural challenges that limit enterprise growth.
              </p>
              <ul className="space-y-4">
                {[
                  "Business governance and accountability systems",
                  "Operational structures for scaling enterprises",
                  "Strategic partnerships and opportunity alignment"
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#003366] flex items-center justify-center flex-shrink-0 mt-1">
                      <FaCheck className="text-white text-sm" />
                    </div>
                    <span className="text-lg text-foreground/90">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Sectors Explored */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-8 pt-8 border-t border-border"
            >
              <h3 className="font-display font-bold text-2xl text-[#003366]">Sectors Explored</h3>
              <ul className="space-y-4">
                {[
                  "Agriculture and agribusiness ecosystems",
                  "Digital enterprise platforms",
                  "SME growth systems",
                  "Cooperative and community enterprise infrastructure"
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#003366] flex items-center justify-center flex-shrink-0 mt-1">
                      <FaCheck className="text-white text-sm" />
                    </div>
                    <span className="text-lg text-foreground/90">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Research Insights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-8 pt-8 border-t border-border"
            >
              <h3 className="font-display font-bold text-2xl text-[#003366]">Research Insights</h3>
              <ul className="space-y-4">
                {[
                  "SME governance systems",
                  "Enterprise growth barriers in developing economies",
                  "Cooperative enterprise models",
                  "Technology adoption in small business ecosystems"
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#003366] flex items-center justify-center flex-shrink-0 mt-1">
                      <FaCheck className="text-white text-sm" />
                    </div>
                    <span className="text-lg text-foreground/90">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Institutional Principles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="pt-8 border-t border-border"
            >
              <h3 className="font-display font-bold text-2xl text-[#003366] mb-6">Building Institutions, Not Just Businesses</h3>
              <p className="text-lg text-foreground font-semibold leading-relaxed">
                Generational Seed Corporation is designed with a long-term institutional mindset. Our focus is not only on supporting businesses today, but on building systems that allow enterprises to grow sustainably over generations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
