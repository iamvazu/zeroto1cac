# ZeroTo1 Accelerator — Technical Specification

## 1. Component Inventory

### shadcn/ui Components (Built-in)
| Component | Purpose | Customization |
|-----------|---------|---------------|
| Button | CTAs, navigation actions | Custom neon glow hover effect |
| Card | Agent cards, pricing cards, media cards | Dark theme with subtle border |
| Badge | Status indicators, chips | Cyan/purple variants |
| Separator | Visual dividers | Low opacity white |
| Tooltip | Rail labels on mobile | Dark background |

### Third-Party Registry Components
None required — all visual effects achieved with GSAP + CSS.

### Custom Components
| Component | Purpose | Props |
|-----------|---------|-------|
| `Centerline` | Persistent vertical line | `active: boolean` |
| `ProgressRail` | Right-edge section indicator | `sections: Section[], currentSection: number` |
| `GlowOrb` | Background glow effect | `color: 'purple' \| 'cyan', size: string` |
| `AgentCard` | AI agent display card | `icon: ReactNode, name: string, description: string` |
| `MilestoneNode` | Roadmap timeline node | `month: string, title: string, status: 'locked' \| 'unlocked' \| 'completed'` |
| `MediaCard` | Image/video container with cyber grade | `src: string, alt: string` |
| `PricingCard` | Pricing tier display | `tier: string, price: string, features: string[]` |

---

## 2. Animation Implementation Table

| Animation | Library | Implementation Approach | Complexity |
|-----------|---------|------------------------|------------|
| **Hero load sequence** | GSAP Timeline | SplitText words stagger, centerline draw, glow fade | High |
| **Centerline draw/scale** | GSAP + CSS | `scaleY` animation with transform-origin top | Low |
| **Section 2 split entrance** | GSAP ScrollTrigger | Left text from `-55vw`, right image from `55vw` | Medium |
| **Agent cards stagger pop** | GSAP ScrollTrigger | `y: 60vh` to `0`, stagger 0.06, `scale: 0.92→1` | Medium |
| **Timeline track draw** | GSAP ScrollTrigger | `scaleX` from 0→1, origin left | Low |
| **Milestone nodes pop** | GSAP ScrollTrigger | `scale: 0→1` with stagger along track | Medium |
| **Section exit fades** | GSAP ScrollTrigger | `opacity` and `y` transitions, keep >0.25 until 95% | Medium |
| **Card hover effects** | CSS Transitions | `translateY(-4px)`, border brighten | Low |
| **Button hover glow** | CSS Transitions | `translateY(-2px)`, `scale(1.02)` | Low |
| **Node pulse ring** | CSS Keyframes | `scale(1→1.06→1)` over 2.4s | Low |
| **Scroll snap** | GSAP ScrollTrigger | Global snap derived from pinned section ranges | High |

---

## 3. Animation Library Choices

### Primary: GSAP + ScrollTrigger
**Rationale:**
- Pinned sections require precise scroll-linked timelines with scrub
- ScrollTrigger provides the `pin: true` functionality needed
- `fromTo()` ensures bidirectional animations work correctly
- Global snap can be implemented using ScrollTrigger's start/end values

### Secondary: CSS Transitions/Animations
**Rationale:**
- Hover states don't need JS overhead
- Keyframe animations (pulse ring) are cleaner in CSS
- Reduced motion support is simpler with CSS media queries

### Optional: GSAP SplitText
**Rationale:**
- Hero headline word stagger requires text splitting
- If SplitText not available, implement custom word wrapper

---

## 4. Project File Structure

```
app/
├── sections/
│   ├── Hero.tsx              # Section 1: Launch Pad
│   ├── Promise.tsx           # Section 2: The Promise
│   ├── AgentSquad.tsx        # Section 3: The Board
│   ├── WinningDNA.tsx        # Section 4: Knowledge Base
│   ├── Roadmap.tsx           # Section 5: Milestone Tracker
│   ├── VideoScripter.tsx     # Section 6: Demo Video
│   ├── MentorOversight.tsx   # Section 7: Human-in-the-Loop
│   ├── Pricing.tsx           # Section 8: Pricing (flowing)
│   └── Footer.tsx            # Section 9: CTA + Footer
├── components/
│   ├── ui/                   # shadcn components
│   ├── Centerline.tsx
│   ├── ProgressRail.tsx
│   ├── GlowOrb.tsx
│   ├── AgentCard.tsx
│   ├── MilestoneNode.tsx
│   ├── MediaCard.tsx
│   ├── PricingCard.tsx
│   └── Navigation.tsx
├── hooks/
│   ├── useScrollProgress.ts
│   └── useReducedMotion.ts
├── lib/
│   ├── utils.ts
│   └── animations.ts         # GSAP animation configs
├── types/
│   └── index.ts
├── page.tsx                  # Main page with ScrollTrigger setup
├── layout.tsx                # Root layout with fonts
└── globals.css               # Global styles + CSS variables
public/
├── images/
│   ├── hero-glow.jpg
│   ├── promise-portrait.jpg
│   ├── winning-dna.jpg
│   ├── video-scripter.jpg
│   └── mentor-dashboard.jpg
```

---

## 5. Dependencies to Install

### Core
```bash
# Already included with shadcn init
# - react, react-dom
# - next
# - typescript
# - tailwindcss
# - @radix-ui/*
```

### Animation
```bash
npm install gsap @gsap/react
```

### Fonts
```bash
# Using Google Fonts via next/font
# - Sora (headings)
# - Inter (body)
# - IBM Plex Mono (labels)
```

### shadcn Components
```bash
npx shadcn add button card badge separator tooltip
```

---

## 6. Key Implementation Details

### ScrollTrigger Setup Pattern
```typescript
// Each pinned section
ScrollTrigger.create({
  trigger: sectionRef.current,
  start: "top top",
  end: "+=130%", // or 140% for longer sections
  pin: true,
  scrub: 0.6,
  onUpdate: (self) => {
    // Progress-based animations
  }
});
```

### Global Snap Implementation
```typescript
// After all ScrollTriggers created
const pinned = ScrollTrigger.getAll()
  .filter(st => st.vars.pin)
  .sort((a, b) => a.start - b.start);

const maxScroll = ScrollTrigger.maxScroll(window);

ScrollTrigger.create({
  snap: {
    snapTo: (value) => {
      // Find nearest pinned section center
      // Return snapped value
    },
    duration: { min: 0.15, max: 0.35 },
    delay: 0,
    ease: "power2.out"
  }
});
```

### Color Variables (CSS)
```css
:root {
  --bg-primary: #0B0B0D;
  --bg-secondary: #141419;
  --accent: #B14EFF;
  --accent-secondary: #00F0FF;
  --text-primary: #F6F7FB;
  --text-secondary: #A7A9B5;
}
```

### Responsive Breakpoints
```typescript
// Tailwind config
screens: {
  'sm': '640px',
  'md': '768px',
  'lg': '1024px',
  'xl': '1280px',
  '2xl': '1536px',
}
```

---

## 7. Performance Considerations

1. **Will-change**: Apply to animated elements
   ```css
   .animated-element {
     will-change: transform, opacity;
   }
   ```

2. **GPU Acceleration**: Use transform3d for hardware acceleration

3. **Image Optimization**: 
   - Use Next.js Image component
   - Lazy load below-fold images
   - Use WebP format with fallbacks

4. **Reduced Motion**:
   ```css
   @media (prefers-reduced-motion: reduce) {
     *, *::before, *::after {
       animation-duration: 0.01ms !important;
       transition-duration: 0.01ms !important;
     }
   }
   ```

5. **ScrollTrigger Cleanup**: Kill triggers on unmount
   ```typescript
   useEffect(() => {
     const triggers = [];
     // create triggers...
     return () => {
       triggers.forEach(t => t.kill());
     };
   }, []);
   ```

---

## 8. Section Configuration

```typescript
const sections = [
  { id: 'hero', pin: true, end: '+=130%', settleRatio: 0.50 },
  { id: 'promise', pin: true, end: '+=130%', settleRatio: 0.50 },
  { id: 'agents', pin: true, end: '+=140%', settleRatio: 0.50 },
  { id: 'winning-dna', pin: true, end: '+=130%', settleRatio: 0.52 },
  { id: 'roadmap', pin: true, end: '+=140%', settleRatio: 0.50 },
  { id: 'video', pin: true, end: '+=130%', settleRatio: 0.50 },
  { id: 'mentors', pin: true, end: '+=130%', settleRatio: 0.50 },
  { id: 'pricing', pin: false },
  { id: 'footer', pin: false },
];
```