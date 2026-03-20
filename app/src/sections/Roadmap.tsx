import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search, PenTool, Code, Rocket } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const phases = [
  {
    num: '01',
    title: 'Discovery',
    months: 'April – May',
    icon: Search,
    description: 'Community problem-solving and competitive analysis using our "Winning DNA" database.',
    outcome: 'Validated, impactful project concept',
  },
  {
    num: '02',
    title: 'Logic & Architecture',
    months: 'June – July',
    icon: PenTool,
    description: 'Wireframing, database design, and user-flow mapping. Think before you build.',
    outcome: 'Complete technical blueprint',
  },
  {
    num: '03',
    title: 'The Build Sprint',
    months: 'August – September',
    icon: Code,
    description: 'Hands-on development in the ZeroTo1 Interactive Lab with AI agent guidance.',
    outcome: 'Fully functional, polished application',
  },
  {
    num: '04',
    title: 'Submission & Launch',
    months: 'October – December',
    icon: Rocket,
    description: 'Final debugging, video production, and official House.gov submission.',
    outcome: 'Competition-ready submission',
  },
];

const milestones = [
  { months: 'Month 1-2', title: 'Problem Validation', desc: 'Identify community needs, analyze winning patterns, validate impact potential' },
  { months: 'Month 3-4', title: 'Technical Design', desc: 'Create wireframes, design database schema, map user flows' },
  { months: 'Month 5-6', title: 'Development', desc: 'Build with real-time AI debugging, code reviews, feature implementation' },
  { months: 'Month 7-9', title: 'Launch Excellence', desc: 'Polish, create pitch video, ensure compliance, submit to House.gov' },
];

export function Roadmap() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const phasesRef = useRef<HTMLDivElement>(null);
  const milestonesRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=150%',
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

      const phaseCards = phasesRef.current?.querySelectorAll('.phase-card');
      if (phaseCards) {
        phaseCards.forEach((card, index) => {
          scrollTl.fromTo(
            card,
            { y: '20vh', scale: 0.95 },
            { y: 0, scale: 1, ease: 'none' },
            0.1 + index * 0.04
          );
        });
      }

      scrollTl.fromTo(
        milestonesRef.current,
        { y: '20vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0.22
      );

      // SETTLE (30-70%): Hold

      // EXIT (70-100%)
      if (phaseCards) {
        scrollTl.fromTo(
          phaseCards,
          { opacity: 1 },
          { opacity: 0, ease: 'power2.in', stagger: 0.02 },
          0.7
        );
      }

      scrollTl.fromTo(
        [headlineRef.current, milestonesRef.current],
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
      id="roadmap"
      className="section-pinned flex flex-col items-center justify-center p-6 sm:p-8 gap-6 sm:gap-8 overflow-y-auto"
      style={{ zIndex: 60, backgroundColor: 'var(--zt-bg-primary)' }}
    >
      {/* Headline */}
      <div
        ref={headlineRef}
        className="text-center will-change-transform"
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-zt-accent-cyan" />
          <span className="font-mono text-xs uppercase tracking-[0.08em] text-zt-text-secondary">
            The Curriculum
          </span>
        </div>
        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-zt-text-primary mb-4 leading-tight">
          The April–December Journey
        </h2>
        <p className="text-base lg:text-lg text-zt-text-secondary max-w-xl">
          9 Months to Mastery. We Don't Rush Greatness.
        </p>
      </div>

      {/* Phase Cards */}
      <div
        ref={phasesRef}
        className="flex flex-wrap justify-center gap-3 lg:gap-4 max-w-[1200px] px-4"
      >
        {phases.map((phase) => (
          <div
            key={phase.num}
            className="phase-card w-[calc(50%-6px)] sm:w-[200px] lg:w-[220px] card-border rounded-xl bg-zt-bg-secondary/50 backdrop-blur-sm p-4 lg:p-5 will-change-transform"
          >
            <div className="flex items-start justify-between mb-3">
              <span className="font-mono text-xl font-bold text-zt-accent-purple">
                {phase.num}
              </span>
              <phase.icon className="w-5 h-5 text-zt-accent-cyan" />
            </div>
            <p className="font-mono text-xs uppercase tracking-wider text-zt-text-secondary mb-1">
              {phase.months}
            </p>
            <h3 className="font-display font-semibold text-base text-zt-text-primary mb-2">
              {phase.title}
            </h3>
            <p className="text-xs text-zt-text-secondary leading-relaxed mb-3">
              {phase.description}
            </p>
            <div className="pt-2 border-t border-white/5">
              <p className="text-xs text-zt-accent-cyan/80">
                → {phase.outcome}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Milestones */}
      <div
        ref={milestonesRef}
        className="w-full max-w-[900px] px-4 will-change-transform"
      >
        <p className="font-mono text-xs uppercase tracking-[0.08em] text-zt-text-secondary mb-4 text-center">
          Journey Milestones
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {milestones.map((milestone) => (
            <div
              key={milestone.title}
              className="p-3 rounded-lg bg-zt-bg-secondary/30 border border-white/5"
            >
              <p className="font-mono text-xs text-zt-accent-purple mb-1">{milestone.months}</p>
              <p className="text-sm font-medium text-zt-text-primary mb-1">{milestone.title}</p>
              <p className="text-xs text-zt-text-secondary/70">{milestone.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-zt-text-secondary/60 mt-4">
          Our 9-month curriculum aligns with the Congressional App Challenge's official June–November competition window.
        </p>
      </div>
    </section>
  );
}