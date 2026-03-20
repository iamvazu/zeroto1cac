import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AgentCard } from '@/components/AgentCard';

gsap.registerPlugin(ScrollTrigger);

const agents = [
  {
    name: 'Policy Advisor',
    subtitle: 'Strategic Intelligence',
    description: 'Trained on 5 years of winning data. Vets your student\'s idea against the "Congressional Impact" rubric before they write a single line of code.',
    impact: 'Prevents wasted months on misaligned projects',
    iconType: 'policy' as const,
  },
  {
    name: 'Lead Architect',
    subtitle: 'Technical Excellence',
    description: 'Python & No-Code specialist who debugs in real-time and teaches "Clean Code" principles used by Silicon Valley professionals.',
    impact: 'Industry-standard code quality from day one',
    iconType: 'architect' as const,
  },
  {
    name: 'House Liaison',
    subtitle: 'Compliance Guardian',
    description: 'Your compliance officer. Knows every House.gov rule, ensuring the 1-3 minute demonstration video and documentation are perfect.',
    impact: 'Zero technical disqualifications',
    iconType: 'liaison' as const,
  },
  {
    name: 'Media Director',
    subtitle: 'Storytelling Mastery',
    description: 'A storytelling expert who helps script, storyboard, and edit the final pitch video that judges actually want to watch.',
    impact: 'Videos that captivate judges',
    iconType: 'media' as const,
  },
];

export function AgentSquad() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

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

      scrollTl.fromTo(
        subheadlineRef.current,
        { y: '2vh' },
        { y: 0, ease: 'none' },
        0.06
      );

      scrollTl.fromTo(
        taglineRef.current,
        { y: '1vh' },
        { y: 0, ease: 'none' },
        0.1
      );

      // Cards stagger
      const cards = cardsContainerRef.current?.querySelectorAll('.agent-card');
      if (cards) {
        cards.forEach((card, index) => {
          scrollTl.fromTo(
            card,
            { y: '20vh', scale: 0.96 },
            { y: 0, scale: 1, ease: 'none' },
            0.12 + index * 0.05
          );
        });
      }

      // SETTLE (30-70%): Hold

      // EXIT (70-100%)
      if (cards) {
        scrollTl.fromTo(
          cards,
          { scale: 1, opacity: 1 },
          { scale: 0.92, opacity: 0, ease: 'power2.in', stagger: 0.02 },
          0.7
        );
      }

      scrollTl.fromTo(
        [headlineRef.current, subheadlineRef.current, taglineRef.current],
        { opacity: 1 },
        { opacity: 0, ease: 'power2.in' },
        0.85
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="agents"
      className="section-pinned flex flex-col items-center justify-center p-6 sm:p-8 gap-4 sm:gap-6"
      style={{ zIndex: 40, backgroundColor: 'var(--zt-bg-primary)' }}
    >
      {/* Headline */}
      <h2
        ref={headlineRef}
        className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-zt-text-primary text-center will-change-transform"
      >
        Meet Your AI Product Team
      </h2>

      {/* Subheadline */}
      <p
        ref={subheadlineRef}
        className="w-full max-w-[800px] text-base lg:text-lg text-zt-text-secondary text-center leading-relaxed will-change-transform"
      >
        Not tutorials. A Digital Board of Directors. Our proprietary environment puts a team of "experts" in the room with your student around the clock.
      </p>

      {/* Tagline */}
      <p
        ref={taglineRef}
        className="font-mono text-xs uppercase tracking-[0.08em] text-zt-accent-cyan will-change-transform"
      >
        24/7 Expert Guidance • Multi-Agent Classroom
      </p>

      {/* Cards Container */}
      <div
        ref={cardsContainerRef}
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-[2vw] max-w-[1200px] px-4"
      >
        {agents.map((agent) => (
          <div key={agent.name} className="agent-card w-full will-change-transform">
            <AgentCard
              name={agent.name}
              subtitle={agent.subtitle}
              description={agent.description}
              impact={agent.impact}
              iconType={agent.iconType}
            />
          </div>
        ))}
      </div>
    </section>
  );
}