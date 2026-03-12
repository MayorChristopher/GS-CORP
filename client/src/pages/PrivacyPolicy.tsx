import { motion } from "framer-motion";

export default function PrivacyPolicy() {
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">Privacy Policy</h1>
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
              <h2 className="text-2xl font-display font-bold text-[#003366] mb-4">1. Introduction</h2>
              <p className="text-foreground/80 leading-relaxed">
                Generational Seed Corporation ("we," "us," "our," or "GSC") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-[#003366] mb-4">2. Information We Collect</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>Personal Data: Name, email address, phone number, and other contact information you provide through forms</li>
                <li>Business Information: Company name, industry, business objectives, and related details</li>
                <li>Technical Data: IP address, browser type, operating system, and usage patterns</li>
                <li>Cookies and Tracking: Information collected through cookies and similar technologies</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-[#003366] mb-4">3. How We Use Your Information</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">We use the information we collect in the following ways:</p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>To provide, maintain, and improve our services</li>
                <li>To process your inquiries and respond to your requests</li>
                <li>To send you marketing communications (with your consent)</li>
                <li>To analyze usage patterns and improve user experience</li>
                <li>To comply with legal obligations</li>
                <li>To prevent fraud and ensure security</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-[#003366] mb-4">4. Data Protection and Security</h2>
              <p className="text-foreground/80 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-[#003366] mb-4">5. Sharing Your Information</h2>
              <p className="text-foreground/80 leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share information with service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-[#003366] mb-4">6. Your Rights</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Data portability</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-[#003366] mb-4">7. Cookies</h2>
              <p className="text-foreground/80 leading-relaxed">
                Our website uses cookies to enhance your experience. You can control cookie settings through your browser preferences. Disabling cookies may affect website functionality.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-[#003366] mb-4">8. Contact Us</h2>
              <p className="text-foreground/80 leading-relaxed">
                If you have questions about this Privacy Policy or our privacy practices, please contact us at privacy@generationalseed.com or through our contact form.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-[#003366] mb-4">9. Changes to This Policy</h2>
              <p className="text-foreground/80 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
