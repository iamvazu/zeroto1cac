import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  total?: string;
  features: string[];
  cta: string;
  note: string;
  highlighted?: boolean;
}

export function PricingCard({
  name,
  price,
  period,
  total,
  features,
  cta,
  note,
  highlighted = false,
}: PricingCardProps) {
  return (
    <div
      className={`relative rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:-translate-y-1 will-change-transform ${
        highlighted
          ? 'bg-gradient-to-b from-zt-accent-purple/20 to-zt-bg-secondary border-2 border-zt-accent-purple/50'
          : 'card-border bg-zt-bg-secondary/50'
      }`}
    >
      {highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-zt-accent-purple text-white text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full">
            Best Value
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="font-display font-semibold text-lg text-zt-text-primary mb-2">
          {name}
        </h3>
        <div className="flex items-baseline gap-2">
          <span className="font-display font-bold text-4xl lg:text-5xl text-zt-text-primary">
            {price}
          </span>
          {period && (
            <span className="text-zt-text-secondary text-sm">{period}</span>
          )}
        </div>
        {total && (
          <p className="text-sm text-zt-accent-cyan mt-1">{total}</p>
        )}
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-zt-accent-cyan flex-shrink-0 mt-0.5" />
            <span className="text-sm text-zt-text-secondary">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        size="lg"
        className={`w-full ${
          highlighted
            ? 'bg-zt-accent-purple hover:bg-zt-accent-purple/90 text-white'
            : 'bg-white/10 hover:bg-white/15 text-zt-text-primary'
        }`}
      >
        {cta}
      </Button>

      <p className="text-center text-xs text-zt-text-secondary mt-4">{note}</p>
    </div>
  );
}