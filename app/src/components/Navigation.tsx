import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Program', href: '/#promise' },
    { label: 'Curriculum', href: '/#roadmap' },
    { label: 'Pricing', href: '/#pricing' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled
          ? 'bg-zt-bg-primary/90 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="font-display font-bold text-xl lg:text-2xl text-zt-text-primary">
            ZeroTo1
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-zt-text-secondary hover:text-zt-text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Link to="/join">
              <Button
                className="bg-zt-accent-purple hover:bg-zt-accent-purple/90 text-white px-6"
              >
                Join the Accelerator
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-zt-text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-zt-bg-primary/95 backdrop-blur-md border-b border-white/5">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-zt-text-secondary hover:text-zt-text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Link to="/join" onClick={() => setIsMobileMenuOpen(false)} className="w-full block">
              <Button
                className="w-full bg-zt-accent-purple hover:bg-zt-accent-purple/90 text-white"
              >
                Join the Accelerator
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}