import { useRef, useLayoutEffect } from 'react';
import { PricingCard } from '@/components/PricingCard';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Music, Trophy, GraduationCap, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const comparisons = [
  { icon: Music, name: 'Music Tutoring', price: '$200-400/mo', desc: 'Private lessons, 9 months' },
  { icon: Trophy, name: 'Sports Training', price: '$300-600/mo', desc: 'Elite coaching, 9 months' },
  { icon: GraduationCap, name: 'College Counseling', price: '$5,000-15,000', desc: 'Full package' },
];

const pricingTier = {
  name: '2026 Season Pass',
  price: '$197',
  period: 'per month',
  total: '$1,773 total',
  features: [
    'Unlimited AI Agent Access (all 4 experts)',
    'PBL Dashboard & Milestone Tracking',
    'Winning DNA Database access',
    'ZeroTo1 Interactive Lab',
    'Monthly progress reports',

    'U.S. Capitol display opportunity',
    '#HouseOfCode Invitation',
  ],
  cta: 'Apply for 2026 Cohort',
  note: 'Only 20 seats available',
  highlighted: true,
};

export function Pricing() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const comparisonsRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const exclusivityRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Headline animation
      gsap.fromTo(
        headlineRef.current,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headlineRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Comparisons animation
      const compItems = comparisonsRef.current?.querySelectorAll('.comparison-item');
      if (compItems) {
        gsap.fromTo(
          compItems,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: comparisonsRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Pricing card animation
      gsap.fromTo(
        pricingRef.current,
        { y: 40, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: pricingRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Exclusivity animation
      gsap.fromTo(
        exclusivityRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: exclusivityRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="section-flowing py-20 lg:py-28"
      style={{ zIndex: 90, backgroundColor: 'var(--zt-bg-secondary)' }}
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Headline */}
        <div ref={headlineRef} className="text-center mb-12 lg:mb-16 will-change-transform">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-zt-accent-cyan" />
            <span className="font-mono text-xs uppercase tracking-[0.08em] text-zt-text-secondary">
              Investment
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-zt-text-primary mb-4">
            The 2026 Season Pass
          </h2>
          <p className="text-base lg:text-lg text-zt-text-secondary max-w-2xl mx-auto">
            An Elite Extracurricular Investment
          </p>
        </div>

        {/* Comparisons */}
        <div ref={comparisonsRef} className="mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.08em] text-zt-text-secondary mb-4 text-center">
            Comparable Investments
          </p>
          <div className="grid grid-cols-3 gap-4 max-w-[600px] mx-auto">
            {comparisons.map((item) => (
              <div
                key={item.name}
                className="comparison-item text-center p-4 rounded-lg card-border will-change-transform"
              >
                <item.icon className="w-5 h-5 text-zt-text-secondary mx-auto mb-2" />
                <p className="text-sm font-medium text-zt-text-primary">{item.name}</p>
                <p className="text-xs text-zt-accent-cyan">{item.price}</p>
                <p className="text-xs text-zt-text-secondary/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Main Pricing Card */}
        <div ref={pricingRef} className="max-w-md mx-auto mb-8 will-change-transform">
          <PricingCard {...pricingTier} />
        </div>

        {/* Exclusivity */}
        <div
          ref={exclusivityRef}
          className="text-center will-change-transform"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zt-accent-purple/10 border border-zt-accent-purple/20">
            <Users className="w-4 h-4 text-zt-accent-purple" />
            <span className="text-sm text-zt-text-primary">
              <span className="text-zt-accent-purple font-medium">Elite residency</span> — not a mass-market course
            </span>
          </div>
          <p className="text-xs text-zt-text-secondary/60 mt-3">
            Personalized attention with dedicated AI agents • April – December 2026
          </p>
        </div>
      </div>
    </section>
  );
}