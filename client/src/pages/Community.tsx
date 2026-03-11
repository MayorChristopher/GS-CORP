import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa6";

export default function Community() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Community Impact and Diaspora Participation */}
      <section className="py-32 px-6 md:px-12 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-20"
          >
            <h2 className="text-[#003366] font-display font-bold text-3xl md:text-5xl mb-4">Empowering Communities Everywhere</h2>
            <p className="text-muted-foreground text-lg max-w-3xl">Enabling Africans at home and abroad to participate in building sustainable businesses</p>
          </motion.div>

          <div className="space-y-20">
            {/* Community Participation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <p className="text-lg text-foreground/90 leading-relaxed mb-8">
                  The goal of Generational Seed Corporation is to enable Africans at home and abroad to participate in building sustainable businesses. Through structured opportunities and ecosystem collaboration, communities can support enterprises and participate in long-term economic development.
                </p>
              </div>

              <div>
                <h3 className="font-display font-bold text-2xl text-[#003366] mb-8">Through Structured Opportunities, Communities Can:</h3>
                <ul className="space-y-4">
                  {[
                    "Support local enterprises",
                    "Contribute strategic knowledge and networks",
                    "Participate in economic development",
                    "Build generational prosperity"
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

            {/* Long-Term Value Creation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-8 pt-12 border-t border-border"
            >
              <div>
                <h3 className="font-display font-bold text-3xl text-[#003366] mb-4">Long-Term Value Creation</h3>
                <p className="text-lg text-foreground/90 leading-relaxed mb-8">
                  Generational Seed Corporation focuses on creating sustainable economic value, not short-term speculation. The goal is to support businesses that can grow into:
                </p>
              </div>

              <ul className="space-y-4">
                {[
                  "Structured enterprises",
                  "Strong supply chain participants",
                  "Long-term economic contributors",
                  "Generational assets"
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

            {/* Ecosystem Coordination */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-8 pt-12 border-t border-border"
            >
              <h3 className="font-display font-bold text-2xl text-[#003366]">Ecosystem Coordination</h3>
              <p className="text-lg text-foreground/90 leading-relaxed mb-8">
                Rather than operating as a single standalone service, GSC is designed as a coordinated system-thinking enterprise ecosystem. Through specialized platforms and subsidiaries, the ecosystem connects:
              </p>
              <ul className="space-y-4">
                {[
                  "Businesses seeking structure and growth",
                  "Investors seeking organized opportunities",
                  "Advisors and partners contributing expertise",
                  "Communities supporting enterprise development"
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
              <p className="text-lg text-foreground font-semibold pt-4">
                This coordinated structure allows value to flow across the ecosystem.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
