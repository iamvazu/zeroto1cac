import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mic, Clock, Film, Sparkles, CheckCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  { icon: Mic, text: 'Scripts compelling pitch narratives' },
  { icon: Film, text: 'Storyboards demonstration videos' },
  { icon: Clock, text: 'Validates 1-3 minute video requirements' },
  { icon: Sparkles, text: 'Guides editing for maximum impact' },
];

export function VideoScripter() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);

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
        textRef.current,
        { x: '-20vw' },
        { x: 0, ease: 'none' },
        0
      );

      scrollTl.fromTo(
        mediaRef.current,
        { x: '20vw', scale: 0.96 },
        { x: 0, scale: 1, ease: 'none' },
        0.06
      );

      // SETTLE (30-70%): Hold

      // EXIT (70-100%)
      scrollTl.fromTo(
        textRef.current,
        { x: 0, opacity: 1 },
        { x: '-18vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        mediaRef.current,
        { x: 0, opacity: 1 },
        { x: '18vw', opacity: 0, ease: 'power2.in' },
        0.7
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="video"
      className="section-pinned flex flex-col md:flex-row items-center justify-center p-6 sm:p-8 gap-8 sm:gap-16 overflow-y-auto"
      style={{ zIndex: 70, backgroundColor: 'var(--zt-bg-primary)' }}
    >
      {/* Left Text Block */}
      <div
        ref={textRef}
        className="w-full md:w-1/2 max-w-[480px] will-change-transform"
      >
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-4 lg:mb-6">
          <div className="w-2 h-2 rounded-full bg-zt-accent-cyan" />
          <span className="font-mono text-xs uppercase tracking-[0.08em] text-zt-text-secondary">
            Media Director
          </span>
        </div>

        {/* Headline */}
        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-zt-text-primary mb-4 lg:mb-6 leading-tight">
          Pitch Perfect Videos
        </h2>

        {/* Body */}
        <p className="text-base lg:text-lg text-zt-text-secondary mb-6 lg:mb-8 leading-relaxed">
          A storytelling expert who helps script, storyboard, and edit the final pitch video that judges actually want to watch.
        </p>

        {/* Features */}
        <ul className="space-y-3 mb-6 lg:mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <feature.icon className="w-5 h-5 text-zt-accent-purple flex-shrink-0" />
              <span className="text-sm text-zt-text-primary">{feature.text}</span>
            </li>
          ))}
        </ul>

        {/* Impact */}
        <div className="flex items-center gap-2 p-3 rounded-lg bg-zt-accent-purple/10 border border-zt-accent-purple/20">
          <CheckCircle className="w-5 h-5 text-zt-accent-purple" />
          <span className="text-sm text-zt-text-primary">
            <span className="text-zt-accent-purple font-medium">Impact:</span> Videos that captivate judges
          </span>
        </div>
      </div>

      {/* Right Media Card */}
      <div
        ref={mediaRef}
        className="w-full md:w-1/2 h-[45vh] md:h-[56vh] max-w-[520px] rounded-2xl overflow-hidden will-change-transform"
      >
        <img
          src="/images/video-scripter.jpg"
          alt="Video scripter interface"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}