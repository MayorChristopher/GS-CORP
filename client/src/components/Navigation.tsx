import { useLocation } from "wouter";
import { FaArrowRight, FaBars, FaX } from "react-icons/fa6";
import { useState } from "react";
import { Search } from "lucide-react";

interface NavigationProps {
  onSearchOpen?: () => void;
}

export default function Navigation({ onSearchOpen }: NavigationProps) {
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-3 sm:gap-4">
        {/* Logo - Full name always visible */}
        <a href="/" className="flex items-center gap-2 sm:gap-3 cursor-pointer flex-shrink-0 min-w-0">
          <img src="/logo.png" alt="GSC" className="h-7 sm:h-8 w-7 sm:w-8 flex-shrink-0" />
          <span className="font-display font-bold text-xs sm:text-sm md:text-base lg:text-lg text-[#003366] tracking-tight truncate">
            Generational Seed Corporation
          </span>
        </a>
        
        {/* Desktop Menu - Shown on xl+ */}
        <div className="hidden xl:flex items-center gap-4 2xl:gap-6 font-medium text-sm text-[#003366]/80 flex-shrink-0">
          <a href="/about" className="hover:text-[#003366] transition-colors whitespace-nowrap">About</a>
          <a href="/services" className="hover:text-[#003366] transition-colors whitespace-nowrap">Services</a>
          <a href="/ecosystem" className="hover:text-[#003366] transition-colors whitespace-nowrap">Ecosystem</a>
          <a href="/community" className="hover:text-[#003366] transition-colors whitespace-nowrap">Community</a>
          <a href="/membership" className="hover:text-[#003366] transition-colors whitespace-nowrap">Membership</a>
          <button 
            onClick={onSearchOpen}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-gray-200 hover:border-[#003366]/30 transition-all shadow-sm hover:shadow-md whitespace-nowrap"
          >
            <Search className="w-4 h-4 text-[#003366]/60" />
            <span className="text-sm text-[#003366]/60 font-medium">Search</span>
            <kbd className="px-2 py-0.5 text-xs bg-gray-100 rounded border border-gray-200 text-[#003366]/60">⌘ K</kbd>
          </button>
          <button 
            onClick={handleScrollToContact}
            className="bg-[#003366] text-white px-5 py-2.5 rounded-full hover:bg-[#002244] transition-colors shadow-lg shadow-[#003366]/20 font-semibold flex items-center gap-2 text-sm whitespace-nowrap"
          >
            Contact
            <FaArrowRight className="text-sm" />
          </button>
        </div>

        {/* Tablet/Mobile Menu - Shown on lg and below */}
        <div className="xl:hidden flex items-center gap-2 sm:gap-3 flex-shrink-0">
          {/* Search Pill - Visible on tablet only (sm and above) */}
          <button 
            onClick={onSearchOpen}
            className="hidden sm:flex md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-gray-200 hover:border-[#003366]/30 transition-all shadow-sm hover:shadow-md whitespace-nowrap"
          >
            <Search className="w-3.5 h-3.5 text-[#003366]/60" />
            <span className="text-xs text-[#003366]/60 font-medium">Search</span>
            <kbd className="px-1.5 py-0.5 text-[10px] bg-gray-100 rounded border border-gray-200 text-[#003366]/60">⌘ K</kbd>
          </button>

          {/* Hamburger Menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#003366] text-xl sm:text-2xl flex-shrink-0"
          >
            {mobileMenuOpen ? <FaX /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 sm:px-6 py-4 space-y-3">
            <a href="/about" className="block py-2 text-[#003366] hover:text-[#002244] font-medium text-sm" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="/services" className="block py-2 text-[#003366] hover:text-[#002244] font-medium text-sm" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="/ecosystem" className="block py-2 text-[#003366] hover:text-[#002244] font-medium text-sm" onClick={() => setMobileMenuOpen(false)}>Ecosystem</a>
            <a href="/community" className="block py-2 text-[#003366] hover:text-[#002244] font-medium text-sm" onClick={() => setMobileMenuOpen(false)}>Community</a>
            <a href="/membership" className="block py-2 text-[#003366] hover:text-[#002244] font-medium text-sm" onClick={() => setMobileMenuOpen(false)}>Membership</a>
            <button 
              onClick={() => {
                handleScrollToContact();
                setMobileMenuOpen(false);
              }}
              className="w-full bg-[#003366] text-white px-4 py-2.5 rounded-full hover:bg-[#002244] transition-colors shadow-lg shadow-[#003366]/20 font-semibold flex items-center justify-center gap-2 mt-4 text-sm"
            >
              Contact
              <FaArrowRight className="text-xs" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
