import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa6";

export default function ScrollToTop() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / totalHeight) * 100;
      
      setShowBackToTop(scrolled > 400);
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-[50px] h-[50px] rounded-full backdrop-blur-md bg-[#003366]/80 text-white flex items-center justify-center shadow-lg"
          whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 51, 102, 0.95)" }}
          whileTap={{ scale: 0.9 }}
        >
          <svg className="absolute inset-0 w-full h-full -rotate-90">
            <circle
              cx="25"
              cy="25"
              r="23"
              stroke="rgba(59, 130, 246, 0.3)"
              strokeWidth="2"
              fill="none"
            />
            <circle
              cx="25"
              cy="25"
              r="23"
              stroke="#60a5fa"
              strokeWidth="2"
              fill="none"
              strokeDasharray={`${2 * Math.PI * 23}`}
              strokeDashoffset={`${2 * Math.PI * 23 * (1 - scrollProgress / 100)}`}
              strokeLinecap="round"
              style={{ transition: 'stroke-dashoffset 0.1s ease' }}
            />
          </svg>
          <FaArrowUp className="relative z-10" />
        </motion.button>
      )}
    </>
  );
}
