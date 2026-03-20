import { FileCheck, Code2, Shield, Video } from 'lucide-react';

interface AgentCardProps {
  name: string;
  subtitle: string;
  description: string;
  impact: string;
  iconType: 'policy' | 'architect' | 'liaison' | 'media';
}

const iconMap = {
  policy: FileCheck,
  architect: Code2,
  liaison: Shield,
  media: Video,
};

export function AgentCard({ name, subtitle, description, impact, iconType }: AgentCardProps) {
  const Icon = iconMap[iconType];

  return (
    <div className="card-border rounded-2xl bg-zt-bg-secondary/50 backdrop-blur-sm p-5 lg:p-6 flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:border-white/16 will-change-transform">
      <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-zt-accent-purple/10 flex items-center justify-center mb-3 lg:mb-4">
        <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-zt-accent-purple" />
      </div>
      <h3 className="font-display font-semibold text-base lg:text-lg text-zt-text-primary mb-1">
        {name}
      </h3>
      <p className="text-xs font-mono uppercase tracking-wider text-zt-accent-cyan mb-3">
        {subtitle}
      </p>
      <p className="text-sm text-zt-text-secondary leading-relaxed mb-4 flex-grow">
        {description}
      </p>
      <div className="pt-3 border-t border-white/5">
        <p className="text-xs text-zt-text-secondary/70">
          <span className="text-zt-accent-purple font-medium">Impact:</span> {impact}
        </p>
      </div>
    </div>
  );
}