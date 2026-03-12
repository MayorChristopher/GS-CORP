import { FaLinkedin, FaTwitter, FaInstagram, FaYoutube, FaLocationDot, FaEnvelope, FaPhone } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#003366] text-white">
      {/* Main Footer Content */}
      <div className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">Generational Seed Corporation</h2>
            <p className="text-blue-100/80 text-sm sm:text-base md:text-lg max-w-2xl">
              Empowering Enterprise. Growing Communities. Building Generational Impact.
            </p>
          </div>

          {/* Contact & Social Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 mb-12 sm:mb-16 md:mb-20">
            {/* Contact Info */}
            <div>
              <h3 className="font-display font-bold text-lg sm:text-xl mb-6 sm:mb-8">Contact</h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <FaLocationDot className="text-blue-300 mt-1 flex-shrink-0 text-sm sm:text-base" />
                  <div>
                    <p className="text-xs sm:text-sm font-semibold text-blue-200 mb-1">Address</p>
                    <p className="text-xs sm:text-sm text-blue-100/80">Ikot Ekpene - Umuahia Rd, Abia State, Nigeria</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <FaEnvelope className="text-blue-300 mt-1 flex-shrink-0 text-sm sm:text-base" />
                  <div>
                    <p className="text-xs sm:text-sm font-semibold text-blue-200 mb-1">Email</p>
                    <a href="mailto:info@thegscorp.com" className="text-xs sm:text-sm text-blue-100/80 hover:text-white transition-colors">
                      info@thegscorp.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <FaPhone className="text-blue-300 mt-1 flex-shrink-0 text-sm sm:text-base" />
                  <div>
                    <p className="text-xs sm:text-sm font-semibold text-blue-200 mb-1">Phone</p>
                    <div className="space-y-1">
                      <a href="tel:+2347084828058" className="text-xs sm:text-sm text-blue-100/80 hover:text-white transition-colors block">
                        +234 708 482 8058
                      </a>
                      <a href="tel:+2347050654318" className="text-xs sm:text-sm text-blue-100/80 hover:text-white transition-colors block">
                        +234 705 065 4318
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-display font-bold text-lg sm:text-xl mb-6 sm:mb-8">Connect With Us</h3>
              <div className="flex gap-4 sm:gap-6">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 hover:bg-blue-400 transition-colors flex items-center justify-center text-lg sm:text-xl hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 hover:bg-blue-400 transition-colors flex items-center justify-center text-lg sm:text-xl hover:scale-110"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 hover:bg-pink-400 transition-colors flex items-center justify-center text-lg sm:text-xl hover:scale-110"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 hover:bg-red-500 transition-colors flex items-center justify-center text-lg sm:text-xl hover:scale-110"
                  aria-label="YouTube"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/10 mb-8 sm:mb-12"></div>

          {/* Legal Section */}
          <div className="text-center">
            <p className="text-xs sm:text-sm text-blue-100/70 mb-4 sm:mb-6">
              © 2026 Generational Seed Corporation. All Rights Reserved. Committed to sustainable growth, ethical governance, and transforming enterprise ecosystems.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center text-xs sm:text-sm">
              <a href="/privacy-policy" className="text-blue-300 hover:text-white transition-colors">Privacy Policy</a>
              <span className="text-blue-100/30 hidden sm:inline">|</span>
              <a href="/terms-and-conditions" className="text-blue-300 hover:text-white transition-colors">Terms & Conditions</a>
              <span className="text-blue-100/30 hidden sm:inline">|</span>
              <a href="/disclaimer" className="text-blue-300 hover:text-white transition-colors">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
