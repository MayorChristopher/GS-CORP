import { motion } from "framer-motion";

export default function Disclaimer() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-[#003366] to-[#003366]/90 text-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">Disclaimer</h1>
            <p className="text-blue-100/80 text-lg">Last updated: January 2026</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-display font-bold text-[#003366] mb-4">1. General Disclaimer</h2>
              <p className="text-foreground/80 leading-relaxed">
                The information provided on this website by Generational Seed Corporation is for general informational purposes only. We make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-[#003366] mb-4">2. No Professional Advice</h2>
              <p className="text-foreground/80 leading-relaxed">
                The content on this website is not intended to constitute professional advice. Any reliance you place on such information is therefore strictly at your own risk. Before making any business decisions, investment decisions, or taking any action based on information from this website, we strongly recommend that you consult with qualified professionals including legal, financial, and business advisors.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-[#003366] mb-4">3. Investment Disclaimer</h2>
              <p className="text-foreground/80 leading-relaxed">
                Any information regarding investment opportunities, financial products, or services is provided for informational purposes only. Past performance is not indicative of future results. All investments carry risk, including potential loss of principal. Generational Seed Corporation does not guarantee any returns or outcomes. Investors should conduct their own due diligence and seek professional financial advice before making investment decisions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-[#003366] mb-4">4. No Warranty</h2>
              <p className="text-foreground/80 leading-relaxed">
                The website and all materials, information, and services provided are provided on an "as is" and "as available" basis without any warranties or conditions of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-[#003366] mb-4">5. Limitation of Liability</h2>
              <p className="text-foreground/80 leading-relaxed">
                In no event shall Generational Seed Corporation, its directors, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to damages for loss of profits, goodwill, use, data, or other intangible losses, even if we have been advised of the possibility of such damages.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-[#003366] mb-4">6. Third-Party Links</h2>
              <p className="text-foreground/80 leading-relaxed">
                This website may contain links to third-party websites. We are not responsible for the content, accuracy, or practices of these external sites. Your use of third-party websites is at your own risk and subject to their terms and conditions. We do not endorse or make any representations about third-party websites or their content.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-[#003366] mb-4">7. Accuracy of Information</h2>
              <p className="text-foreground/80 leading-relaxed">
                While we strive to provide accurate and up-to-date information, we do not guarantee the accuracy, completeness, or timeliness of any information on this website. Information may be subject to change without notice. We are not responsible for any errors or omissions in the content.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-[#003366] mb-4">8. User Responsibility</h2>
              <p className="text-foreground/80 leading-relaxed">
                You are responsible for your use of this website and any information obtained from it. You assume all risks associated with the use of this website and the information provided. Generational Seed Corporation shall not be liable for any damages or losses arising from your use of or reliance on this website or its content.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-[#003366] mb-4">9. Regulatory Compliance</h2>
              <p className="text-foreground/80 leading-relaxed">
                Generational Seed Corporation operates in compliance with applicable laws and regulations. However, we make no representations regarding the legality or appropriateness of our services in any particular jurisdiction. Users are responsible for ensuring their use of our services complies with all applicable laws and regulations in their jurisdiction.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-[#003366] mb-4">10. Changes to Disclaimer</h2>
              <p className="text-foreground/80 leading-relaxed">
                We reserve the right to modify this disclaimer at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website following the posting of revised terms means that you accept and agree to the changes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-[#003366] mb-4">11. Contact Us</h2>
              <p className="text-foreground/80 leading-relaxed">
                If you have questions about this Disclaimer, please contact us through our contact form or email us at legal@generationalseed.com.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
