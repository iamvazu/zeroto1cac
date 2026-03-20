import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navigation } from '@/components/Navigation';
import { ProgressRail } from '@/components/ProgressRail';
import { Hero } from '@/sections/Hero';
import { Competition } from '@/sections/Competition';
import { Promise } from '@/sections/Promise';
import { AgentSquad } from '@/sections/AgentSquad';
import { WinningDNA } from '@/sections/WinningDNA';
import { Roadmap } from '@/sections/Roadmap';
import { VideoScripter } from '@/sections/VideoScripter';
import { MentorOversight } from '@/sections/MentorOversight';
import { Pricing } from '@/sections/Pricing';
import { Footer } from '@/sections/Footer';

gsap.registerPlugin(ScrollTrigger);

const sections = [
  { id: 'hero', pin: true },
  { id: 'competition', pin: true },
  { id: 'challenge', pin: true },
  { id: 'agents', pin: true },
  { id: 'winning-dna', pin: true },
  { id: 'roadmap', pin: true },
  { id: 'video', pin: true },
  { id: 'mentors', pin: true },
  { id: 'pricing', pin: false },
  { id: 'footer', pin: false },
];

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();

      const triggers = sections.map((sec, index) => {
        return ScrollTrigger.create({
          trigger: `#${sec.id}`,
          start: 'top center',
          end: 'bottom center',
          onToggle: (self) => {
            if (self.isActive) {
              setCurrentSection(index);
            }
          },
        });
      });

      return () => {
        triggers.forEach((trigger) => trigger.kill());
      };
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <Navigation />
      <ProgressRail currentSection={currentSection} totalSections={sections.length} />
      
      <main className="relative" style={{ backgroundColor: '#0B0B0D' }}>
        <Hero />
        <Competition />
        <Promise />
        <AgentSquad />
        <WinningDNA />
        <Roadmap />
        <VideoScripter />
        <MentorOversight />
        <Pricing />
        <Footer />
      </main>
    </>
  );
}
