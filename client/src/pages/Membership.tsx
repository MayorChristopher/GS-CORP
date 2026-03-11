import { motion } from "framer-motion";
import { FaBuildingColumns, FaChartLine, FaUsers } from "react-icons/fa6";

export default function Membership() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
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
                <p className="text-lg text-foreground/90 leading-relaxed">Access governance support and strategic partnerships</p>
                <p className="text-lg text-foreground/90 leading-relaxed">Connect with aligned supply chains, partners, and opportunities</p>
              </div>
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
                <FaChartLine className="text-3xl text-white" />
              </div>
              <h3 className="font-display font-bold text-3xl mb-6 tracking-tight">For Investors</h3>
              <div className="space-y-4 flex-grow">
                <p className="opacity-80 font-body text-lg leading-relaxed">Participate in structured investment opportunities through GSI</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-12 bg-card border border-border flex flex-col h-full hover:shadow-2xl transition-all duration-500 rounded-sm"
            >
              <div className="w-16 h-16 bg-secondary flex items-center justify-center mb-10">
                <FaUsers className="text-3xl text-[#003366]" />
              </div>
              <h3 className="font-display font-bold text-3xl mb-6 tracking-tight text-[#003366]">For Communities</h3>
              <div className="space-y-4 flex-grow">
                <p className="text-lg text-foreground/90 leading-relaxed">Support local enterprises and participate in sustainable economic development</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-32 px-6 md:px-12 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-16"
          >
            <h2 className="text-[#003366] font-display font-bold text-3xl md:text-5xl mb-4">Who We Serve</h2>
            <p className="text-muted-foreground text-lg max-w-3xl">The platform is designed for</p>
          </motion.div>

          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <ul className="space-y-4">
                {[
                  "Local businesses preparing for growth and scale",
                  "Investors seeking structured SME opportunities",
                  "Advisors, operators, and ecosystem partners"
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
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-lg text-foreground/90">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
