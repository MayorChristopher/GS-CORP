import { motion } from "framer-motion";

export default function TermsAndConditions() {
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">Terms & Conditions</h1>
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
              <h2 className="text-2xl font-display font-bold text-[#003366] mb-4">1. Agreement to Terms</h2>
              <p className="text-foreground/80 leading-relaxed">
                By accessing and using this website and services provided by Generational Seed Corporation, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-[#003366] mb-4">2. Use License</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">Permission is granted to temporarily download one copy of the materials (information or software) on Generational Seed Corporation's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-[#003366] mb-4">3. Disclaimer</h2>
              <p className="text-foreground/80 leading-relaxed">
                The materials on Generational Seed Corporation's website are provided on an 'as is' basis. Generational Seed Corporation makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-[#003366] mb-4">4. Limitations</h2>
              <p className="text-foreground/80 leading-relaxed">
                In no event shall Generational Seed Corporation or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Generational Seed Corporation's website, even if we or our authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-[#003366] mb-4">5. Accuracy of Materials</h2>
              <p className="text-foreground/80 leading-relaxed">
                The materials appearing on Generational Seed Corporation's website could include technical, typographical, or photographic errors. Generational Seed Corporation does not warrant that any of the materials on its website are accurate, complete, or current. Generational Seed Corporation may make changes to the materials contained on its website at any time without notice.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-[#003366] mb-4">6. Links</h2>
              <p className="text-foreground/80 leading-relaxed">
                Generational Seed Corporation has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Generational Seed Corporation of the site. Use of any such linked website is at the user's own risk.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-[#003366] mb-4">7. Modifications</h2>
              <p className="text-foreground/80 leading-relaxed">
                Generational Seed Corporation may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-[#003366] mb-4">8. Governing Law</h2>
              <p className="text-foreground/80 leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of Nigeria, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-[#003366] mb-4">9. User Conduct</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">You agree not to:</p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon any intellectual property rights</li>
                <li>Harass, abuse, or threaten other users</li>
                <li>Submit false or misleading information</li>
                <li>Engage in any form of fraud or deception</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-[#003366] mb-4">10. Contact Information</h2>
              <p className="text-foreground/80 leading-relaxed">
                If you have any questions about these Terms & Conditions, please contact us through our contact form or email us at legal@generationalseed.com.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
