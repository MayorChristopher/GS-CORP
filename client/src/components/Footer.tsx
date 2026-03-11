export default function Footer() {
  return (
    <footer className="bg-[#003366] text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-5">
            <h2 className="font-display font-black text-4xl mb-8 tracking-tighter">Generational Seed Corporation</h2>
            <p className="text-blue-100/40 font-body text-xl max-w-md leading-relaxed mb-10">
              Governance-first enterprise infrastructure for generational value creation. We engineer institutions to last.
            </p>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <h3 className="font-display font-bold text-xs uppercase tracking-[0.2em] text-white/40">Organization</h3>
              <nav className="flex flex-col gap-4">
                <a href="/" className="text-sm font-medium hover:text-white/70 transition-colors">Home</a>
                <a href="/about" className="text-sm font-medium hover:text-white/70 transition-colors">About</a>
                <a href="/services" className="text-sm font-medium hover:text-white/70 transition-colors">Services</a>
              </nav>
            </div>
            <div className="space-y-6">
              <h3 className="font-display font-bold text-xs uppercase tracking-[0.2em] text-white/40">Ecosystem</h3>
              <nav className="flex flex-col gap-4">
                <a href="/ecosystem" className="text-sm font-medium hover:text-white/70 transition-colors">Ecosystem</a>
                <a href="/membership" className="text-sm font-medium hover:text-white/70 transition-colors">Membership</a>
                <a href="/community" className="text-sm font-medium hover:text-white/70 transition-colors">Community</a>
              </nav>
            </div>
            <div className="space-y-6">
              <h3 className="font-display font-bold text-xs uppercase tracking-[0.2em] text-white/40">Connect</h3>
              <nav className="flex flex-col gap-4">
                <a href="/#contact" className="text-sm font-medium hover:text-white/70 transition-colors">Contact</a>
              </nav>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-[0.4em] font-black text-blue-100/60">
              Move with purpose.
            </p>
            <p className="text-xs uppercase tracking-[0.4em] font-black text-blue-100/60">
              Connect with direction.
            </p>
            <p className="text-xs uppercase tracking-[0.4em] font-black text-blue-100/60">
              Build with structure.
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs text-blue-100/20 font-medium">
              &copy; {new Date().getFullYear()} Generational Seed Corporation. 
              <br />Designed for longevity.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
