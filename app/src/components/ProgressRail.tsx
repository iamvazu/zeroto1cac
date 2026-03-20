import { useEffect, useState } from 'react';

interface ProgressRailProps {
  currentSection: number;
  totalSections: number;
}

const sectionLabels = [
  'Launch',
  'Competition',
  'Challenge',
  'AI Team',
  'Winning DNA',
  'Curriculum',
  'Video',
  'Included',
  'Pricing',
  'Apply',
];

export function ProgressRail({ currentSection, totalSections }: ProgressRailProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.5);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed right-4 lg:right-8 top-1/2 -translate-y-1/2 z-[99] transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="flex flex-col items-center gap-3">
        {Array.from({ length: totalSections }).map((_, index) => (
          <div key={index} className="group relative flex items-center justify-center">
            {/* Dot */}
            <div
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSection
                  ? 'bg-zt-accent-cyan scale-125'
                  : index < currentSection
                  ? 'bg-zt-accent-purple'
                  : 'bg-white/20 hover:bg-white/40'
              }`}
            />
            
            {/* Label (desktop only) */}
            <span
              className={`absolute right-6 whitespace-nowrap text-xs font-mono uppercase tracking-wider transition-all duration-300 hidden lg:block ${
                index === currentSection
                  ? 'text-zt-text-primary opacity-100'
                  : 'text-zt-text-secondary opacity-0 group-hover:opacity-60'
              }`}
            >
              {sectionLabels[index] || `Section ${index + 1}`}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}