import { useLocation } from "wouter";
import { FaArrowRight, FaBars, FaX } from "react-icons/fa6";
import { useState } from "react";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScrollToContact = () => {
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-header">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 cursor-pointer">
          <img src="/logo.png" alt="GSC" className="h-8 w-8" />
          <span className="font-display font-bold text-xl text-[#003366] tracking-tight">Generational Seed Corporation</span>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium text-sm text-[#003366]/80">
          <a href="/about" className="hover:text-[#003366] transition-colors">About</a>
          <a href="/services" className="hover:text-[#003366] transition-colors">Services</a>
          <a href="/ecosystem" className="hover:text-[#003366] transition-colors">Ecosystem</a>
          <a href="/community" className="hover:text-[#003366] transition-colors">Community</a>
          <a href="/membership" className="hover:text-[#003366] transition-colors">Membership</a>
          <button 
            onClick={handleScrollToContact}
            className="bg-[#003366] text-white px-5 py-2.5 rounded-full hover:bg-[#002244] transition-colors shadow-lg shadow-[#003366]/20 font-semibold flex items-center gap-2"
          >
            Contact
            <FaArrowRight className="text-sm" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#003366] text-2xl"
        >
          {mobileMenuOpen ? <FaX /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-6 py-4 space-y-3">
            <a href="/about" className="block py-2 text-[#003366] hover:text-[#002244] font-medium" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="/services" className="block py-2 text-[#003366] hover:text-[#002244] font-medium" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="/ecosystem" className="block py-2 text-[#003366] hover:text-[#002244] font-medium" onClick={() => setMobileMenuOpen(false)}>Ecosystem</a>
            <a href="/community" className="block py-2 text-[#003366] hover:text-[#002244] font-medium" onClick={() => setMobileMenuOpen(false)}>Community</a>
            <a href="/membership" className="block py-2 text-[#003366] hover:text-[#002244] font-medium" onClick={() => setMobileMenuOpen(false)}>Membership</a>
            <button 
              onClick={() => {
                handleScrollToContact();
                setMobileMenuOpen(false);
              }}
              className="w-full bg-[#003366] text-white px-5 py-2.5 rounded-full hover:bg-[#002244] transition-colors shadow-lg shadow-[#003366]/20 font-semibold flex items-center justify-center gap-2 mt-4"
            >
              Contact
              <FaArrowRight className="text-sm" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
