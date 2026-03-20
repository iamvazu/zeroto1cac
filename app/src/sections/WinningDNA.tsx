import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Heart, BookOpen, Leaf, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { num: '5+', label: 'Years of Data', subtext: 'Analyzed winning projects from 2019–2024' },
  { num: '394', label: 'Districts Covered', subtext: 'Nationwide winning project analysis' },
  { num: '100%', label: 'Pattern Recognition', subtext: 'What judges consistently value' },
];

const categories = [
  { icon: Heart, label: 'Healthcare & Wellness', percent: '28%' },
  { icon: BookOpen, label: 'Education & Learning', percent: '24%' },
  { icon: Leaf, label: 'Environment & Sustainability', percent: '19%' },
  { icon: Users, label: 'Accessibility & Inclusion', percent: '16%' },
  { icon: Target, label: 'Community & Civic', percent: '13%' },
];

const successPatterns = [
  'Clear Problem Statement — Winners articulate specific community needs with data',
  'Technical Sophistication — Appropriate complexity without over-engineering',
  'User-Centered Design — Evidence of user testing and iteration',
  'Compelling Demonstration — Videos that tell a story, not just show features',
];

export function WinningDNA() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const patternsRef = useRef<HTMLDivElement>(null);

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
        { y: '4vh' },
        { y: 0, ease: 'none' },
        0
      );

      const statItems = statsRef.current?.querySelectorAll('.stat-item');
      if (statItems) {
        statItems.forEach((item, index) => {
          scrollTl.fromTo(
            item,
            { y: '10vh' },
            { y: 0, ease: 'none' },
            0.08 + index * 0.05
          );
        });
      }

      const catItems = categoriesRef.current?.querySelectorAll('.category-item');
      if (catItems) {
        catItems.forEach((item, index) => {
          scrollTl.fromTo(
            item,
            { x: '-5vw' },
            { x: 0, ease: 'none' },
            0.15 + index * 0.04
          );
        });
      }

      scrollTl.fromTo(
        patternsRef.current,
        { y: '8vh' },
        { y: 0, ease: 'none' },
        0.2
      );

      // SETTLE (30-70%): Hold

      // EXIT (70-100%)
      scrollTl.fromTo(
        [headlineRef.current, statsRef.current, categoriesRef.current, patternsRef.current],
        { opacity: 1 },
        { opacity: 0, ease: 'power2.in' },
        0.75
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="winning-dna"
      className="section-pinned flex flex-col items-center justify-center p-6 sm:p-8 gap-6 sm:gap-8 overflow-y-auto"
      style={{ zIndex: 50, backgroundColor: 'var(--zt-bg-primary)' }}
    >
      {/* Headline */}
      <div
        ref={headlineRef}
        className="text-center will-change-transform"
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-zt-accent-cyan" />
          <span className="font-mono text-xs uppercase tracking-[0.08em] text-zt-text-secondary">
            Competitive Intelligence
          </span>
        </div>
        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-zt-text-primary mb-4 leading-tight">
          The Winning DNA Database
        </h2>
        <p className="text-base lg:text-lg text-zt-text-secondary max-w-xl">
          5 Years of Insights. Your Competitive Edge.
        </p>
      </div>

      {/* Stats Row */}
      <div
        ref={statsRef}
        className="flex flex-wrap justify-center gap-6 lg:gap-12 max-w-[900px] px-4"
      >
        {stats.map((stat) => (
          <div key={stat.label} className="stat-item text-center will-change-transform">
            <p className="font-display font-bold text-3xl lg:text-5xl text-zt-accent-purple mb-1">
              {stat.num}
            </p>
            <p className="font-mono text-xs uppercase tracking-wider text-zt-text-primary mb-1">
              {stat.label}
            </p>
            <p className="text-xs text-zt-text-secondary/70 max-w-[140px]">
              {stat.subtext}
            </p>
          </div>
        ))}
      </div>

      {/* Categories & Patterns Grid */}
      <div className="w-full max-w-[1000px] px-4 grid md:grid-cols-2 gap-6 lg:gap-8">
        {/* Categories */}
        <div ref={categoriesRef}>
          <h3 className="font-mono text-xs uppercase tracking-[0.08em] text-zt-text-secondary mb-4">
            Winning Categories
          </h3>
          <div className="space-y-2">
            {categories.map((cat) => (
              <div
                key={cat.label}
                className="category-item flex items-center justify-between p-3 rounded-lg bg-zt-bg-secondary/50 border border-white/5 will-change-transform"
              >
                <div className="flex items-center gap-3">
                  <cat.icon className="w-4 h-4 text-zt-accent-cyan" />
                  <span className="text-sm text-zt-text-primary">{cat.label}</span>
                </div>
                <span className="font-mono text-sm text-zt-accent-purple">{cat.percent}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Success Patterns */}
        <div ref={patternsRef} className="will-change-transform">
          <h3 className="font-mono text-xs uppercase tracking-[0.08em] text-zt-text-secondary mb-4">
            What Judges Value
          </h3>
          <div className="space-y-3">
            {successPatterns.map((pattern, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-zt-accent-purple mt-2 flex-shrink-0" />
                <p className="text-sm text-zt-text-secondary leading-relaxed">{pattern}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-zt-text-secondary/70 italic">
            Validate ideas against winning patterns before investing months in development
          </p>
        </div>
      </div>
    </section>
  );
}