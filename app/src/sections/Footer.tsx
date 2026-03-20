import { useRef, useLayoutEffect } from 'react';
import { Button } from '@/components/ui/button';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Linkedin, Youtube, Users, Calendar, DollarSign } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const footerLinks = {
  program: [
    { label: 'The Challenge', href: '#challenge' },
    { label: 'AI Product Team', href: '#agents' },
    { label: 'Curriculum', href: '#roadmap' },
    { label: 'Pricing', href: '#pricing' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
  social: [
    { label: 'LinkedIn', href: '#', icon: Linkedin },
    { label: 'YouTube', href: '#', icon: Youtube },
  ],
};

const stats = [
  { icon: Users, value: '20', label: 'Seats Available' },
  { icon: DollarSign, value: '$197', label: 'Per Month' },
  { icon: Calendar, value: '9', label: 'Months' },
];

const aiTools = [
  { name: 'Google AI Studio', color: 'bg-blue-600', text: 'text-blue-600' },
  { name: 'Antigravity', color: 'bg-indigo-600', text: 'text-indigo-600' },
  { name: 'Claude Code', color: 'bg-orange-600', text: 'text-orange-600' },
  { name: 'Google Gemini', color: 'bg-cyan-600', text: 'text-cyan-600' },
  { name: 'Kimi', color: 'bg-teal-600', text: 'text-teal-600' },
  { name: 'OpenAI ChatGPT', color: 'bg-emerald-600', text: 'text-emerald-600' },
];

export function Footer() {
  const sectionRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const tickerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // CTA animation
      gsap.fromTo(
        ctaRef.current,
        { y: 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Footer columns animation
      const columns = footerRef.current?.querySelectorAll('.footer-column');
      if (columns) {
        gsap.fromTo(
          columns,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: footerRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Infinite Ticker
      const ticker = tickerRef.current;
      if (ticker) {
        gsap.to(ticker, {
          xPercent: -50,
          repeat: -1,
          duration: 20,
          ease: 'none',
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={sectionRef}
      id="apply"
      className="section-flowing"
      style={{ zIndex: 100, backgroundColor: 'var(--zt-bg-primary)' }}
    >
      {/* CTA Block */}
      <div
        ref={ctaRef}
        className="py-16 lg:py-24 text-center px-6 will-change-transform"
      >
        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-zt-text-primary mb-4 lg:mb-6">
          Transform Zero Knowledge
        </h2>
        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-zt-accent-purple mb-6 lg:mb-8">
          into 1 Winning App
        </h2>

        {/* Stats */}
        <div className="flex justify-center gap-8 lg:gap-16 mb-8 lg:mb-10">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="w-5 h-5 text-zt-accent-cyan mx-auto mb-2" />
              <p className="font-display font-bold text-2xl lg:text-3xl text-zt-text-primary">
                {stat.value}
              </p>
              <p className="text-xs text-zt-text-secondary">{stat.label}</p>
            </div>
          ))}
        </div>

        <p className="text-base lg:text-lg text-zt-text-secondary mb-8 lg:mb-10 max-w-xl mx-auto">
          April – December 2026 Residency
        </p>

        <Button
          size="lg"
          className="bg-zt-accent-purple hover:bg-zt-accent-purple/90 text-white px-8 py-6 text-base font-medium transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02]"
        >
          Apply for the 2026 Cohort
        </Button>
      </div>

      {/* AI Tools Ticker */}
      <div className="w-full border-t border-b border-slate-200/60 bg-slate-50/50 py-10 overflow-hidden mb-12">
        <p className="text-center font-mono text-xs uppercase tracking-[0.08em] text-zt-text-secondary mb-5">
          Tools You Will Master
        </p>
        <div className="flex w-max">
          <div ref={tickerRef} className="flex gap-4 items-center will-change-transform pr-4">
            {[...aiTools, ...aiTools].map((tool, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 bg-white px-5 py-3 rounded-xl border border-slate-100 shadow-sm whitespace-nowrap"
              >
                <div className={`w-3 h-3 rounded-full ${tool.color} shadow-lg`} />
                <span className="font-display font-bold text-sm text-zt-text-primary">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Grid */}
      <div
        ref={footerRef}
        className="border-t border-slate-200 py-12 lg:py-16 px-6"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-1 footer-column will-change-transform">
            <a href="#" className="font-display font-bold text-xl text-zt-text-primary mb-4 block">
              ZeroTo1
            </a>
            <p className="text-sm text-zt-text-secondary">
              The Elite Accelerator. From zero knowledge to 1 winning app.
            </p>
          </div>

          {/* Program Links */}
          <div className="footer-column will-change-transform">
            <h4 className="font-mono text-xs uppercase tracking-[0.08em] text-zt-text-secondary mb-4">
              Program
            </h4>
            <ul className="space-y-2">
              {footerLinks.program.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-zt-text-secondary hover:text-zt-text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="footer-column will-change-transform">
            <h4 className="font-mono text-xs uppercase tracking-[0.08em] text-zt-text-secondary mb-4">
              Legal
            </h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-zt-text-secondary hover:text-zt-text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="footer-column will-change-transform">
            <h4 className="font-mono text-xs uppercase tracking-[0.08em] text-zt-text-secondary mb-4">
              Social
            </h4>
            <div className="flex gap-3">
              {footerLinks.social.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-zt-text-secondary hover:text-zt-text-primary hover:bg-slate-200 transition-all"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-slate-200 text-center">
          <p className="text-xs text-zt-text-secondary">
            © 2026 ZeroTo1 Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}