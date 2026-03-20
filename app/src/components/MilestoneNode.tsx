import { Lock, Unlock, Check } from 'lucide-react';

interface MilestoneNodeProps {
  month: string;
  title: string;
  status: 'locked' | 'unlocked' | 'completed';
  isActive?: boolean;
}

const statusIcons = {
  locked: Lock,
  unlocked: Unlock,
  completed: Check,
};

const statusColors = {
  locked: 'bg-zt-bg-secondary border-white/10 text-zt-text-secondary',
  unlocked: 'bg-zt-accent-purple/20 border-zt-accent-purple/50 text-zt-accent-purple',
  completed: 'bg-zt-accent-purple border-zt-accent-purple text-white',
};

export function MilestoneNode({ month, title, status, isActive }: MilestoneNodeProps) {
  const Icon = statusIcons[status];

  return (
    <div className="flex flex-col items-center gap-3">
      {/* Node Circle */}
      <div
        className={`relative w-11 h-11 lg:w-12 lg:h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
          statusColors[status]
        } ${isActive ? 'scale-110' : ''}`}
      >
        <Icon className="w-5 h-5" />
        
        {/* Pulse ring for active state */}
        {isActive && status === 'unlocked' && (
          <div className="absolute inset-0 rounded-full border-2 border-zt-accent-purple animate-pulse-ring" />
        )}
      </div>
      
      {/* Label */}
      <div className="text-center">
        <p className="font-mono text-xs uppercase tracking-wider text-zt-accent-cyan mb-1">
          {month}
        </p>
        <p className={`text-sm font-medium transition-colors ${
          status === 'locked' ? 'text-zt-text-secondary' : 'text-zt-text-primary'
        }`}>
          {title}
        </p>
      </div>
    </div>
  );
}