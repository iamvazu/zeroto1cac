import { forwardRef } from 'react';

interface CenterlineProps {
  active?: boolean;
}

export const Centerline = forwardRef<HTMLDivElement, CenterlineProps>(
  ({ active = false }, ref) => {
    return (
      <div
        ref={ref}
        className={`centerline transition-all duration-500 ${
          active ? 'centerline-active' : ''
        }`}
      />
    );
  }
);

Centerline.displayName = 'Centerline';