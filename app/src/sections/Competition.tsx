import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, AppWindow, MapPin, TrendingUp, Building2, Award, Landmark } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { num: '13,830', label: 'Students 2025', icon: Users },
  { num: '4,650', label: 'Apps Submitted', icon: AppWindow },
  { num: '394', label: 'Congress Districts', icon: MapPin },
];

const outcomes = [
  { num: '88%', label: 'Continue Coding', icon: TrendingUp },
  { num: '89%', label: 'STEM Career Interest', icon: Building2 },
  { num: '56%', label: 'AI Integration', icon: Award },
];

const winnerBenefits = [
  { icon: Landmark, title: 'U.S. Capitol Display', desc: 'Winning apps featured in the Capitol Building' },
  { icon: Building2, title: '#HouseOfCode Invitation', desc: 'Showcase on Capitol Hill to Congress & tech leaders' },
];

export function Competition() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const outcomesRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);

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

      const outcomeItems = outcomesRef.current?.querySelectorAll('.outcome-item');
      if (outcomeItems) {
        outcomeItems.forEach((item, index) => {
          scrollTl.fromTo(
            item,
            { y: '8vh' },
            { y: 0, ease: 'none' },
            0.15 + index * 0.04
          );
        });
      }

      scrollTl.fromTo(
        benefitsRef.current,
        { y: '10vh' },
        { y: 0, ease: 'none' },
        0.2
      );

      // SETTLE (30-70%): Hold

      // EXIT (70-100%)
      scrollTl.fromTo(
        [headlineRef.current, statsRef.current, outcomesRef.current, benefitsRef.current],
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
      id="competition"
      className="section-pinned flex flex-col items-center justify-start pt-40 lg:pt-48 pb-12 p-6 sm:p-8 gap-6 sm:gap-8 overflow-y-auto"
      style={{ zIndex: 20, backgroundColor: 'var(--zt-bg-primary)' }}
    >
      {/* Headline */}
      <div
        ref={headlineRef}
        className="text-center will-change-transform"
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-zt-accent-cyan" />
          <span className="font-mono text-xs uppercase tracking-[0.08em] text-zt-text-secondary">
            The Competition
          </span>
        </div>
        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-zt-text-primary mb-4 leading-tight">
          America's Premier Youth Coding Competition
        </h2>
        <p className="text-base lg:text-lg text-zt-text-secondary w-full text-center max-w-xl mx-auto block text-center">
          90% of Congress participates in this bipartisan initiative
        </p>
      </div>

      {/* Main Stats */}
      <div
        ref={statsRef}
        className="flex justify-center flex-wrap gap-6 lg:gap-16 max-w-[800px] px-4"
      >
        {stats.map((stat) => (
          <div key={stat.label} className="stat-item text-center will-change-transform">
            <stat.icon className="w-6 h-6 lg:w-8 lg:h-8 text-zt-accent-purple mx-auto mb-2" />
            <p className="font-display font-bold text-3xl lg:text-5xl text-zt-text-primary mb-1">
              {stat.num}
            </p>
            <p className="font-mono text-xs uppercase tracking-wider text-zt-text-secondary">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Outcomes */}
      <div
        ref={outcomesRef}
        className="flex justify-center flex-wrap gap-4 lg:gap-8 max-w-[700px] px-4"
      >
        {outcomes.map((outcome) => (
          <div
            key={outcome.label}
            className="outcome-item text-center p-3 lg:p-4 rounded-lg bg-zt-bg-secondary/30 border border-white/5 will-change-transform"
          >
            <outcome.icon className="w-5 h-5 text-zt-accent-cyan mx-auto mb-2" />
            <p className="font-display font-bold text-xl lg:text-2xl text-zt-text-primary mb-1">
              {outcome.num}
            </p>
            <p className="text-xs text-zt-text-secondary">{outcome.label}</p>
          </div>
        ))}
      </div>

      {/* Winner Benefits */}
      <div
        ref={benefitsRef}
        className="w-full max-w-[800px] px-4 will-change-transform"
      >
        <p className="font-mono text-xs uppercase tracking-[0.08em] text-zt-text-secondary mb-4 text-center">
          What Winners Receive
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 max-w-2xl mx-auto mt-2 pl-4 sm:pl-8">
          {winnerBenefits.map((benefit) => (
            <div
              key={benefit.title}
              className="p-4 rounded-lg bg-zt-bg-secondary/50 border border-white/5 text-center w-full max-w-[280px]"
            >
              <benefit.icon className="w-6 h-6 text-zt-accent-purple mx-auto mb-2" />
              <p className="text-sm font-medium text-zt-text-primary mb-1">{benefit.title}</p>
              <p className="text-xs text-zt-text-secondary/70">{benefit.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-zt-text-secondary/60 mt-4">
          85,000+ students have participated since 2015
        </p>
      </div>
    </section>
  );
}