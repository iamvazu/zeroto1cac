import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LayoutDashboard, Database, Gift, FileText } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: LayoutDashboard,
    title: 'PBL Dashboard',
    description: 'Project-Based Learning dashboard tracks every stage: Discovery → Architecture → Build → Launch',
  },
  {
    icon: Database,
    title: 'Winning DNA Database',
    description: 'Full access to 5 years of analyzed winning projects. Understand patterns and learn from the best.',
  },
  {
    icon: Gift,
    title: 'Winner Benefits',
    description: 'U.S. Capitol Display, #HouseOfCode Invitation, National Recognition',
  },
  {
    icon: FileText,
    title: 'Monthly Milestone Reviews',
    description: 'AI-generated progress reports for parents tracking every stage from "Idea" to "U.S. Capitol."',
  },
];

export function MentorOversight() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=140%',
          pin: true,
          scrub: 0.6,
          pinSpacing: true,
        },
      });

      // ENTRANCE (0-30%)
      scrollTl.fromTo(
        headlineRef.current,
        { y: '-8vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0
      );

      const featureCards = featuresRef.current?.querySelectorAll('.feature-card');
      if (featureCards) {
        featureCards.forEach((card, index) => {
          scrollTl.fromTo(
            card,
            { y: '30vh', opacity: 0, scale: 0.95 },
            { y: 0, opacity: 1, scale: 1, ease: 'none' },
            0.1 + index * 0.04
          );
        });
      }

      // SETTLE (30-70%): Hold

      // EXIT (70-100%)
      if (featureCards) {
        scrollTl.fromTo(
          featureCards,
          { opacity: 1 },
          { opacity: 0, ease: 'power2.in', stagger: 0.02 },
          0.7
        );
      }

      scrollTl.fromTo(
        headlineRef.current,
        { opacity: 1 },
        { opacity: 0, ease: 'power2.in' },
        0.8
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="mentors"
      className="section-pinned flex flex-col items-center justify-center p-6 sm:p-8 gap-6 sm:gap-8 overflow-y-auto"
      style={{ zIndex: 80, backgroundColor: 'var(--zt-bg-primary)' }}
    >
      {/* Headline */}
      <div
        ref={headlineRef}
        className="text-center will-change-transform"
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-zt-accent-cyan" />
          <span className="font-mono text-xs uppercase tracking-[0.08em] text-zt-text-secondary">
            The 2026 Season Pass
          </span>
        </div>
        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-zt-text-primary mb-4 leading-tight">
          What's Included
        </h2>
        <p className="text-base lg:text-lg text-zt-text-secondary max-w-xl">
          Everything Your Student Needs to Win
        </p>
      </div>

      {/* Features Grid */}
      <div
        ref={featuresRef}
        className="grid sm:grid-cols-2 gap-4 lg:gap-6 max-w-[900px] px-4"
      >
        {features.map((feature) => (
          <div
            key={feature.title}
            className="feature-card card-border rounded-xl bg-zt-bg-secondary/50 backdrop-blur-sm p-5 lg:p-6 will-change-transform"
          >
            <div className="w-10 h-10 rounded-lg bg-zt-accent-purple/10 flex items-center justify-center mb-4">
              <feature.icon className="w-5 h-5 text-zt-accent-purple" />
            </div>
            <h3 className="font-display font-semibold text-base lg:text-lg text-zt-text-primary mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-zt-text-secondary leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}