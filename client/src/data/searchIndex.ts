export interface SearchItem {
  id: string;
  name: string;
  section: string;
  path: string;
}

export const searchIndex: SearchItem[] = [
  // Home Page
  { id: "hero", name: "Home", section: "Hero Section", path: "/" },
  { id: "subsidiaries", name: "Subsidiaries", section: "Our Subsidiaries", path: "/#subsidiaries" },
  { id: "gsi", name: "GSI - Investment Platform", section: "Generational Seed Investment", path: "/#subsidiaries" },
  { id: "agro", name: "GSC Agro", section: "Agricultural Network", path: "/#subsidiaries" },
  { id: "hybrid", name: "GSC Hybrid Marketplace", section: "Hybrid Marketplace", path: "/#subsidiaries" },
  { id: "why-gsc", name: "Why Choose GSC", section: "Why GSC Section", path: "/#why-gsc" },
  { id: "join-ecosystem", name: "Join the Ecosystem", section: "Join Generational Seed", path: "/#contact" },
  { id: "contact", name: "Contact Form", section: "Get in Touch", path: "/#contact-form" },
  
  // About Page
  { id: "about", name: "About Us", section: "About GSC", path: "/about" },
  { id: "identity", name: "Who We Are", section: "Our Identity", path: "/about#identity" },
  { id: "market-reality", name: "Market Reality", section: "The Market Reality", path: "/about#identity" },
  { id: "governance-approach", name: "Governance-First Approach", section: "Our Approach", path: "/about#identity" },
  { id: "mission", name: "Our Mission", section: "Guiding Philosophy", path: "/about#mission" },
  { id: "vision", name: "Our Vision", section: "Credibility & Vision", path: "/about#vision" },
  { id: "founder-experience", name: "Founder Experience", section: "Our Credibility", path: "/about#vision" },
  
  // Services Page
  { id: "services", name: "Services", section: "Our Services", path: "/services" },
  { id: "governance-services", name: "Governance & Structure", section: "Governance Services", path: "/services#services" },
  { id: "strategic-connections", name: "Strategic Connections", section: "Partnership Services", path: "/services#services" },
  { id: "opportunity-matching", name: "Opportunity Matching", section: "Matching Services", path: "/services#services" },
  { id: "capital-readiness", name: "Capital Readiness", section: "Investment Preparation", path: "/services#services" },
  { id: "framework", name: "Tailored Framework", section: "How Our Framework Works", path: "/services#framework" },
  { id: "governance-first", name: "Governance-First Approach", section: "Governance Services", path: "/services#governance" },
  
  // Ecosystem Page
  { id: "ecosystem", name: "Ecosystem", section: "GSC Ecosystem", path: "/ecosystem" },
  { id: "ecosystem-subsidiaries", name: "Subsidiaries", section: "Ecosystem Subsidiaries", path: "/ecosystem#subsidiaries" },
  { id: "gsi-platform", name: "GSI Platform", section: "Generational Seed Investment", path: "/ecosystem#gsi" },
  { id: "agro-services", name: "Agro Services", section: "Agricultural Network", path: "/ecosystem#agro" },
  { id: "marketplace", name: "Marketplace Platform", section: "Hybrid Marketplace", path: "/ecosystem#marketplace" },
  { id: "connected-ecosystem", name: "Connected Enterprise Ecosystem", section: "Ecosystem Integration", path: "/ecosystem#marketplace" },
  
  // Community Page
  { id: "community", name: "Community", section: "GSC Community", path: "/community" },
  { id: "community-impact", name: "Empowering Communities", section: "Community Impact", path: "/community" },
  { id: "long-term-value", name: "Long-Term Value Creation", section: "Value Creation", path: "/community" },
  { id: "ecosystem-coordination", name: "Ecosystem Coordination", section: "Community Coordination", path: "/community" },
  
  // Membership Page
  { id: "membership", name: "Membership", section: "Join GSC", path: "/membership" },
  { id: "why-join", name: "Why Join the Ecosystem", section: "Membership Benefits", path: "/membership#membership" },
  { id: "for-businesses", name: "For Businesses", section: "Business Membership", path: "/membership#membership" },
  { id: "for-investors", name: "For Investors", section: "Investor Membership", path: "/membership#membership" },
  { id: "for-communities", name: "For Communities", section: "Community Membership", path: "/membership#membership" },
  { id: "who-we-serve", name: "Who We Serve", section: "Membership Eligibility", path: "/membership" },
  
  // Legal Pages
  { id: "privacy-policy", name: "Privacy Policy", section: "Data Protection & Privacy", path: "/privacy-policy" },
  { id: "privacy-data-collection", name: "Data Collection", section: "How We Collect Information", path: "/privacy-policy" },
  { id: "privacy-rights", name: "Your Privacy Rights", section: "Data Protection Rights", path: "/privacy-policy" },
  { id: "privacy-security", name: "Data Security", section: "Information Protection", path: "/privacy-policy" },
  { id: "privacy-cookies", name: "Cookies", section: "Cookie Policy", path: "/privacy-policy" },
  
  { id: "terms-conditions", name: "Terms & Conditions", section: "User Agreement", path: "/terms-and-conditions" },
  { id: "terms-use-license", name: "Use License", section: "Terms of Service", path: "/terms-and-conditions" },
  { id: "terms-user-conduct", name: "User Conduct", section: "Acceptable Use Policy", path: "/terms-and-conditions" },
  { id: "terms-modifications", name: "Modifications", section: "Terms Changes", path: "/terms-and-conditions" },
  { id: "terms-governing-law", name: "Governing Law", section: "Legal Jurisdiction", path: "/terms-and-conditions" },
  
  { id: "disclaimer", name: "Disclaimer", section: "Legal Disclaimer", path: "/disclaimer" },
  { id: "disclaimer-investment", name: "Investment Disclaimer", section: "Investment Risks", path: "/disclaimer" },
  { id: "disclaimer-liability", name: "Limitation of Liability", section: "Legal Limitations", path: "/disclaimer" },
  { id: "disclaimer-warranty", name: "No Warranty", section: "Service Warranty", path: "/disclaimer" },
  { id: "disclaimer-third-party", name: "Third-Party Links", section: "External Links", path: "/disclaimer" },
];
