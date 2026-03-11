import { useState } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa6";

interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Who We Are", href: "/about" },
      { label: "Our Philosophy", href: "/about#philosophy" },
      { label: "Credibility", href: "/about#credibility" }
    ]
  },
  {
    label: "Services & Framework",
    href: "/services",
    children: [
      { label: "Services", href: "/services" },
      { label: "Framework", href: "/services#framework" },
      { label: "Governance Approach", href: "/services#governance" }
    ]
  },
  {
    label: "Ecosystem",
    href: "/ecosystem",
    children: [
      { label: "Overview", href: "/ecosystem" },
      { label: "GSI Platform", href: "/ecosystem#gsi" },
      { label: "Subsidiaries", href: "/ecosystem#subsidiaries" },
      { label: "Agro Services", href: "/ecosystem#agro" },
      { label: "Marketplace", href: "/ecosystem#marketplace" }
    ]
  },
  {
    label: "Community & Impact",
    href: "/community",
    children: [
      { label: "Community Impact", href: "/community" },
      { label: "Diaspora Participation", href: "/community#diaspora" },
      { label: "Long-term Value", href: "/community#value" }
    ]
  },
  {
    label: "Membership",
    href: "/membership",
    children: [
      { label: "Why Join", href: "/membership" },
      { label: "For Businesses", href: "/membership#businesses" },
      { label: "For Investors", href: "/membership#investors" },
      { label: "For Communities", href: "/membership#communities" }
    ]
  },
  { label: "Contact", href: "/#contact" }
];

export default function Sidebar() {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [location] = useLocation();

  const toggleExpanded = (label: string) => {
    setExpandedItems(prev =>
      prev.includes(label) ? prev.filter(item => item !== label) : [...prev, label]
    );
  };

  const isActive = (href: string) => location === href;

  const NavLink = ({ item, level = 0 }: { item: NavItem; level?: number }) => {
    const hasChildren = item.children && item.children.length > 0;
    const expanded = expandedItems.includes(item.label);

    return (
      <div key={item.label}>
        <div className="flex items-center">
          <a
            href={item.href}
            className={`flex-1 px-4 py-3 rounded-lg transition-all text-sm font-medium ${
              isActive(item.href)
                ? "bg-[#003366] text-white"
                : "text-foreground/80 hover:bg-blue-50 hover:text-[#003366]"
            }`}
            style={{ paddingLeft: `${12 + level * 16}px` }}
          >
            {item.label}
          </a>
          {hasChildren && (
            <button
              onClick={() => toggleExpanded(item.label)}
              className="px-2 py-3 text-foreground/60 hover:text-[#003366]"
            >
              <FaChevronDown
                className={`text-xs transition-transform ${expanded ? "rotate-180" : ""}`}
              />
            </button>
          )}
        </div>
        <AnimatePresence>
          {hasChildren && expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              {item.children?.map(child => (
                <NavLink key={child.label} item={child} level={level + 1} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <aside className="hidden md:block w-72 bg-white border-r border-border overflow-y-auto h-screen">
      <nav className="p-6 space-y-2">
        {navItems.map(item => (
          <NavLink key={item.label} item={item} />
        ))}
      </nav>
    </aside>
  );
}
