import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import { useLocation } from "wouter";
import { searchIndex, SearchItem } from "@/data/searchIndex";

interface GlobalSearchHandle {
  openSearch: () => void;
}

const GlobalSearch = forwardRef<GlobalSearchHandle>((_, ref) => {
  const [, setLocation] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchItem[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    openSearch: () => {
      setIsOpen(true);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }));

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(true);
        setTimeout(() => inputRef.current?.focus(), 100);
      } else if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        setQuery("");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setSelectedIndex(0);
      return;
    }

    const queryLower = query.toLowerCase();
    
    // Enhanced search with better matching
    const filtered = searchIndex
      .filter(item => {
        const nameMatch = item.name.toLowerCase().includes(queryLower);
        const sectionMatch = item.section.toLowerCase().includes(queryLower);
        return nameMatch || sectionMatch;
      })
      .sort((a, b) => {
        // Prioritize exact matches and name matches
        const aNameMatch = a.name.toLowerCase().includes(queryLower);
        const bNameMatch = b.name.toLowerCase().includes(queryLower);
        if (aNameMatch && !bNameMatch) return -1;
        if (!aNameMatch && bNameMatch) return 1;
        return 0;
      })
      .slice(0, 8); // Show up to 8 results

    setResults(filtered);
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyNav = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % (results.length || 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + (results.length || 1)) % (results.length || 1));
      } else if (e.key === "Enter" && results[selectedIndex]) {
        e.preventDefault();
        handleNavigate(results[selectedIndex]);
      }
    };
    window.addEventListener("keydown", handleKeyNav);
    return () => window.removeEventListener("keydown", handleKeyNav);
  }, [isOpen, results, selectedIndex]);

  const handleNavigate = (item: SearchItem) => {
    const [path, hash] = item.path.split("#");
    const currentPath = window.location.pathname;
    
    // Navigate to the page first if needed
    if (path !== currentPath && path !== "/") {
      setLocation(path);
      // Wait for navigation, then scroll to hash
      setTimeout(() => {
        if (hash) {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 500);
    } else {
      // Same page navigation
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
    
    setIsOpen(false);
    setQuery("");
  };

  return (
    <>
      {isMobile && !isOpen && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          onClick={() => setIsOpen(true)}
          className="fixed bottom-24 right-8 z-40 w-14 h-14 rounded-full bg-[#003366] text-white shadow-lg flex items-center justify-center hover:bg-[#002244] transition-colors"
        >
          <Search className="w-6 h-6" />
        </motion.button>
      )}

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />
            <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6 pointer-events-none">
              <motion.div
                layout
                initial={isMobile ? { y: 100, opacity: 0 } : { scale: 0.9, opacity: 0 }}
                animate={isMobile ? { y: 0, opacity: 1 } : { scale: 1, opacity: 1 }}
                exit={isMobile ? { y: 100, opacity: 0 } : { scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className={`${
                  isMobile
                    ? "fixed bottom-0 left-0 right-0 rounded-t-3xl w-full"
                    : "w-full max-w-2xl rounded-2xl"
                } bg-white shadow-2xl overflow-hidden pointer-events-auto`}
              >
                <div className="p-4">
                  <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus-within:border-[#003366] focus-within:ring-4 focus-within:ring-[#003366]/10 transition-all">
                    <Search className="w-5 h-5 text-[#003366] flex-shrink-0" />
                    <input
                      ref={inputRef}
                      type="text"
                      value={query}
                      onChange={e => setQuery(e.target.value)}
                      placeholder="Search pages, sections, content..."
                      className="flex-1 bg-transparent outline-none text-[#003366] placeholder:text-[#003366]/40 min-w-0"
                      style={{ fontFamily: "Inter" }}
                      autoFocus
                    />
                    {!isMobile && (
                      <kbd className="px-2 py-1 text-xs bg-white rounded border border-gray-200 text-[#003366]/60 flex-shrink-0">ESC</kbd>
                    )}
                  </div>

                  {results.length > 0 && (
                    <div className="mt-3 space-y-1 max-h-96 overflow-y-auto">
                      {results.map((item, idx) => (
                        <button
                          key={item.id}
                          onClick={() => handleNavigate(item)}
                          className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                            selectedIndex === idx
                              ? "bg-[#003366] text-white"
                              : "hover:bg-gray-50 text-[#003366]"
                          }`}
                        >
                          <div className="font-semibold text-sm" style={{ fontFamily: "Inter" }}>
                            {item.name}
                          </div>
                          <div className={`text-xs mt-0.5 ${selectedIndex === idx ? "text-white/70" : "text-[#003366]/60"}`}>
                            {item.section}
                          </div>
                        </button>
                      ))}
                    </div>
                  )}

                  {query && results.length === 0 && (
                    <div className="mt-4 text-center py-8 text-[#003366]/60 text-sm">
                      No results found for "{query}"
                    </div>
                  )}

                  {!query && (
                    <div className="mt-4 px-4 py-3 text-xs text-[#003366]/60 flex items-center justify-between border-t border-gray-100">
                      <span>Navigate with ↑↓ • Select with ↵</span>
                      {!isMobile && <span>Close with ESC</span>}
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
});

GlobalSearch.displayName = "GlobalSearch";

export default GlobalSearch;
