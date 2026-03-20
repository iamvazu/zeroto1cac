import { useRef, useLayoutEffect } from 'react';
import { Button } from '@/components/ui/button';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const bottomLeftRef = useRef<HTMLDivElement>(null);
  const bottomRightRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Initial load animation
      const loadTl = gsap.timeline({ defaults: { ease: 'power2.out' } });



      // Glow fade in
      loadTl.fromTo(
        glowRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6 },
        0.2
      );

      // Headline words stagger
      const words = headlineRef.current?.querySelectorAll('.word');
      if (words) {
        loadTl.fromTo(
          words,
          { opacity: 0, y: 24, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.03 },
          0.3
        );
      }

      // Subheadline + CTAs
      loadTl.fromTo(
        [subheadlineRef.current, ctaRef.current],
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
        0.6
      );

      // Bottom microcopy
      loadTl.fromTo(
        [bottomLeftRef.current, bottomRightRef.current],
        { opacity: 0 },
        { opacity: 1, duration: 0.4, stagger: 0.1 },
        0.8
      );

      // Scroll-driven exit animation
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

      // ENTRANCE (0-30%): Hold - no changes
      // SETTLE (30-70%): Hold - no changes

      // EXIT (70-100%)
      scrollTl.fromTo(
        headlineRef.current,
        { y: 0, opacity: 1 },
        { y: '-18vh', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        [subheadlineRef.current, ctaRef.current],
        { y: 0, opacity: 1 },
        { y: '-10vh', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        [bottomLeftRef.current, bottomRightRef.current],
        { opacity: 1 },
        { opacity: 0, ease: 'power2.in' },
        0.75
      );



      scrollTl.fromTo(
        glowRef.current,
        { opacity: 1 },
        { opacity: 0, ease: 'power2.in' },
        0.8
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const headlineWords = 'From Zero to 1'.split(' ');

  return (
    <section
      ref={sectionRef}
      className="section-pinned flex items-center justify-center"
      style={{ zIndex: 10, backgroundColor: 'var(--zt-bg-primary)' }}
    >


      {/* Glow Orb */}
      <div
        ref={glowRef}
        className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[50vh] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(177,78,255,0.22), rgba(177,78,255,0) 55%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Headline */}
        <h1
          ref={headlineRef}
          className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-zt-text-primary mb-6 lg:mb-8 leading-tight"
        >
          {headlineWords.map((word, index) => (
            <span key={index} className="word inline-block mr-[0.25em]">
              {word}
            </span>
          ))}
        </h1>

        {/* Subheadline */}
        <p
          ref={subheadlineRef}
          className="text-base sm:text-lg md:text-xl text-zt-text-secondary max-w-2xl mx-auto mb-8 lg:mb-10 leading-relaxed"
        >
          The Elite Accelerator. Transform zero knowledge into 1 winning app for the Congressional App Challenge.
        </p>

        {/* CTAs */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-zt-accent-purple hover:bg-zt-accent-purple/90 text-white px-8 py-6 text-base font-medium transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02]"
          >
            Apply for the 2026 Cohort
          </Button>
          <a
            href="#challenge"
            className="flex items-center gap-2 text-zt-text-secondary hover:text-zt-text-primary transition-colors text-sm"
          >
            Explore the Curriculum
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Bottom Microcopy */}
      <div
        ref={bottomLeftRef}
        className="absolute left-6 lg:left-12 bottom-8 text-xs font-mono text-zt-text-secondary"
      >
        April – December 2026 Residency
      </div>
      <div
        ref={bottomRightRef}
        className="absolute right-6 lg:right-12 bottom-8 text-xs font-mono text-zt-text-secondary text-right"
      >
        Only 20 Seats • Grades 6–12 • $197/mo
      </div>
    </section>
  );
}