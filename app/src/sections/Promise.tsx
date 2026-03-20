import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AlertTriangle, XCircle, Frown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const challenges = [
  {
    num: '01',
    title: 'The Struggle',
    icon: AlertTriangle,
    description: 'Students spend months coding apps that nobody needs. The Congressional App Challenge isn\'t just a coding competition—it\'s a policy and impact competition.',
    subtext: 'Technical skills without real-world problem identification',
  },
  {
    num: '02',
    title: 'The Risk',
    icon: XCircle,
    description: 'Technical disqualifications due to complex House.gov submission rules. The 1-3 minute demonstration video requirements are exacting and unforgiving.',
    subtext: 'Brilliant apps rejected due to compliance failures',
  },
  {
    num: '03',
    title: 'The Result',
    icon: Frown,
    description: 'Brilliant kids missing out on national recognition because they didn\'t have a "Product Team" to guide them through the entire journey.',
    subtext: 'Potential unrealized due to lack of mentorship',
  },
];

export function Promise() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const centerlineRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
          pinSpacing: true,
        },
      });

      // ENTRANCE (0-30%)
      scrollTl.fromTo(
        headlineRef.current,
        { y: '-4vh' },
        { y: 0, ease: 'none' },
        0
      );

      const cards = cardsRef.current?.querySelectorAll('.challenge-card');
      if (cards) {
        cards.forEach((card, index) => {
          scrollTl.fromTo(
            card,
            { y: '15vh' },
            { y: 0, ease: 'none' },
            0.08 + index * 0.06
          );
        });
      }



      // SETTLE (30-70%): Hold

      // EXIT (70-100%)
      if (cards) {
        scrollTl.fromTo(
          cards,
          { y: 0, opacity: 1 },
          { y: '-15vh', opacity: 0, ease: 'power2.in', stagger: 0.02 },
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
      id="challenge"
      className="section-pinned flex flex-col items-center justify-center p-6 sm:p-8 gap-8"
      style={{ zIndex: 30, backgroundColor: 'var(--zt-bg-primary)' }}
    >


      {/* Headline */}
      <div
        ref={headlineRef}
        className="text-center will-change-transform"
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-zt-accent-cyan" />
          <span className="font-mono text-xs uppercase tracking-[0.08em] text-zt-text-secondary">
            The Challenge
          </span>
        </div>
        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-zt-text-primary mb-4 leading-tight">
          Code Without Context
        </h2>
        <p className="text-base lg:text-lg text-zt-text-secondary max-w-xl">
          Most students have the "Code," but they lack the "Context"
        </p>
      </div>

      {/* Challenge Cards */}
      <div
        ref={cardsRef}
        className="flex flex-wrap justify-center gap-4 lg:gap-6 max-w-[1200px] px-4"
      >
        {challenges.map((challenge) => (
          <div
            key={challenge.num}
            className="challenge-card w-full sm:w-[280px] lg:w-[300px] card-border rounded-2xl bg-zt-bg-secondary/50 backdrop-blur-sm p-6 will-change-transform"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="font-mono text-2xl font-bold text-zt-accent-purple">
                {challenge.num}
              </span>
              <challenge.icon className="w-6 h-6 text-zt-accent-cyan" />
            </div>
            <h3 className="font-display font-semibold text-lg text-zt-text-primary mb-3">
              {challenge.title}
            </h3>
            <p className="text-sm text-zt-text-secondary mb-4 leading-relaxed">
              {challenge.description}
            </p>
            <p className="text-xs font-mono text-zt-accent-cyan/80">
              {challenge.subtext}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}