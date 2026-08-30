# JTH Graphix Production - Design Reference Guide

## Color Palette & Brand Guidelines

### Primary Colors:
```
JTH Blue:      #004AAD (Primary - Main sections)
Orange Accent: #FF7A1A (Footer/accents ONLY)
```

### Secondary Colors:
```
Secondary (Yellow): Extracted from design system
Accent (Orange/Red): Extracted from design system
```

### Text Colors:
```
Foreground:        #000000 / #FFFFFF (based on theme)
Muted Foreground:  #666666 / #999999
Muted:             #F5F5F5 / #333333
Border:            #E0E0E0 / #444444
```

### Gradients:
```
gradient-brand:        From #004AAD to #FF7A1A
gradient-cta:          Dark blue gradient for CTA sections
gradient-accent:       Extracted from components
text-gradient:         Multi-color text effect
```

---

## Typography System

### Font Stack:
- **Display**: Custom display font (JTH branding)
- **Body**: System fonts (optimized)
- **Mono**: Code fonts

### Heading Sizes:
```
H1: 48-72px (clamp(2rem, 5vw, 4.5rem))
H2: 36-48px (clamp(1.5rem, 4vw, 3rem))
H3: 28-32px (clamp(1.25rem, 3vw, 2rem))
H4: 20-24px (clamp(1rem, 2.5vw, 1.5rem))
```

### Body Text:
```
Large: 18-20px
Regular: 16px
Small: 14px
Tiny: 12px (metadata)
```

---

## Component Spacing

### Section Padding:
```
Mobile:  py-16 (64px)
Tablet:  py-20 (80px)
Desktop: py-24 to py-32 (96px-128px)
```

### Card Padding:
```
Mobile:  p-4 to p-6 (16-24px)
Desktop: p-6 to p-8 (24-32px)
```

### Gap Between Items:
```
Mobile:  gap-4 (16px)
Tablet:  gap-6 (24px)
Desktop: gap-8 (32px)
```

---

## Interactive Elements

### Button Styles:

**Primary (CTA)**:
- Background: gradient-brand
- Color: white
- Padding: px-6 to px-10, h-11 to h-14
- Border-radius: rounded-xl to rounded-2xl
- Hover: opacity-90, scale(1.02)
- Shadow: shadow-lg shadow-primary/25

**Secondary**:
- Background: secondary color
- Color: white
- Similar sizing/effects as primary

**Outline**:
- Border: border-primary/20
- Color: primary
- Hover: bg-primary/5, border-primary/40
- Background: transparent or glass

### Hover States:
- Lift effect: -translate-y-2 (8px)
- Scale: scale(1.01-1.02)
- Glow: shadow-lg with color opacity
- Color shift: group-hover:text-primary
- Background: group-hover:bg-primary/10

### Focus States:
- Visible ring: ring-2 ring-primary
- Outline: outline-2 outline-primary

---

## Responsive Breakpoints

### Tailwind Classes Used:
```
sm: 640px  (min-width: 640px)
md: 768px  (min-width: 768px)
lg: 1024px (min-width: 1024px)
xl: 1280px (min-width: 1280px)
2xl: 1536px (min-width: 1536px)
```

### Layout Patterns:

**Mobile First**:
```
Grid: grid-cols-1 (mobile default)
  sm:grid-cols-2
  lg:grid-cols-3

Display: hidden (mobile)
  lg:flex (desktop)
```

### Safe Spacing:
```
Top padding for fixed header:
Mobile:  pt-16 to pt-20 (64-80px)
Desktop: pt-20 to pt-24 (80-96px)
```

---

## Animation & Motion

### Framer Motion Variants:
- **fadeUp**: Opacity 0 → 1, Y 20px → 0
- **slideInLeft**: From left with fade
- **slideInRight**: From right with fade
- **staggerContainer**: Staggered children animation
- **viewportOnce**: Animation only happens once when in viewport

### Timing:
```
defaultTransition: 0.5s ease-in-out
Fast: 0.2-0.3s
Normal: 0.4-0.5s
Slow: 0.6-0.8s
```

### Prefers Reduced Motion:
- All animations check `prefers-reduced-motion`
- Critical animations always accessible
- Testing: Browser DevTools → Rendering → Emulate CSS media feature

---

## Image Best Practices

### Image Optimization:
```
Component: Next.js Image (already used)
Formats: WebP, AVIF with fallback
Lazy loading: enabled
Responsive sizing: sizes prop
Alt text: Always descriptive
```

### Image Dimensions:
```
Hero: aspect-[4/5] or full-width
Cards: aspect-video or aspect-square
Logos: aspect-video
Testimonials: aspect-square
```

### Error Handling:
```typescript
onError={(e) => {
  const target = e.target as HTMLImageElement
  target.src = fallbackImage
}}
```

---

## Card Styles

### Glass Card:
```
Background: glass (backdrop blur + transparent)
Border: border border-white/10
Padding: p-6 to p-8
Border-radius: rounded-2xl to rounded-3xl
Shadow: shadow-xl
Hover: Lift effect + color shift
```

### Card Premium:
```
Same as glass, often with:
- Gradient background
- Enhanced shadow
- 3D perspective
- Interactive hover
```

---

## Section Backgrounds

### Pattern Options:
```
bg-background: Default theme background
bg-muted/30: Subtle background
bg-grid: Subtle grid pattern
```

### Gradient Blobs:
```
Positioned absolutely
bg-primary/5 to bg-primary/20
rounded-full
blur-[80px] to blur-[150px]
opacity-varied
pointer-events-none
```

### Example:
```typescript
<div className="absolute top-1/4 left-1/4 w-[600px] h-[600px]
  bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
```

---

## Navigation Patterns

### Desktop Menu:
- Mega-menu on hover
- Dropdown for Services
- Utility bar above
- Logo on left
- CTA button on right

### Mobile Menu:
- Hamburger icon
- Full-screen overlay
- Slide-in animation
- Close button
- All navigation centralized
- Theme toggle included

### Accessibility:
```
aria-label for buttons
aria-expanded for menus
role="region" for sections
aria-hidden for decorative elements
```

---

## Data Structures

### Site Config (`site-config.json`):
```json
{
  "brandName": "JTH Graphix Production",
  "phone": "+254117537015",
  "navigation": { primary: [...], utility: [...] },
  "metrics": { projectsCompleted: 200, ... }
}
```

### Megamenu (`megamenu.json`):
```json
[
  {
    "category": "Name",
    "description": "...",
    "items": [{ title, description, href, icon }]
  }
]
```

### Solution Categories (`solution-categories.json`):
```json
[
  {
    "id": "unique-id",
    "title": "Category Name",
    "services": ["Service 1", "Service 2"]
  }
]
```

---

## Special Effects

### Particle Field:
- Used in hero section
- Canvas-based animation
- Blue (#004AAD) particle network
- Auto-sizing based on viewport
- Performance optimized

### Glassmorphism:
- Backdrop blur effect
- Semi-transparent background
- Border with low opacity
- Used on cards, dropdowns, overlays

### Text Gradients:
- Multiple color transitions
- Used for emphasis
- Primary → Orange → Secondary
- Applied via `text-gradient` class

---

## Copy & Messaging Templates

### Section Headers Format:
```
Badge: "Category Name"
Title: "Main Message with [text-gradient]highlight[/]"
Description: "Supporting paragraph explaining the value"
```

### CTA Copy:
```
Primary: "Start Your Project" / "Request a Quote"
Secondary: "Learn More" / "Explore Our Work"
Tertiary: "Chat on WhatsApp" / "Call Now"
```

### Trust Indicators:
```
Number + Label
Example: "200+ Projects Delivered"
Example: "98% Client Satisfaction"
```

---

## Performance Optimization Checklist

### Images:
- [ ] Using Next.js Image component
- [ ] Proper sizing with `sizes` prop
- [ ] WebP format available
- [ ] Lazy loading enabled
- [ ] Alt text provided

### JavaScript:
- [ ] Client components marked with 'use client'
- [ ] Server components default
- [ ] Large imports code-split
- [ ] useCallback/useMemo where appropriate

### CSS:
- [ ] Tailwind purging unused styles
- [ ] No inline styles (use classes)
- [ ] No critical CSS issues
- [ ] Animations GPU-optimized

### Video:
- [ ] Compressed and optimized
- [ ] Poster image provided
- [ ] Lazy loading strategy
- [ ] Fallback for no video support

---

## Testing Checklist

### Functionality:
- [ ] All links work (internal/external)
- [ ] Forms submit correctly
- [ ] Dropdowns/modals open/close
- [ ] Tabs switch content smoothly
- [ ] Videos play

### Responsiveness:
- [ ] Layout at 320px, 768px, 1024px, 1920px
- [ ] Touch targets min 44x44px
- [ ] Text readable without zoom
- [ ] No horizontal scroll

### Accessibility:
- [ ] Keyboard navigation (Tab, Enter, Escape)
- [ ] Screen reader compatible
- [ ] Color contrast ≥ 4.5:1
- [ ] Focus visible on all interactive elements
- [ ] prefers-reduced-motion respected

### Performance:
- [ ] LCP < 2.5s
- [ ] Lighthouse score 90+
- [ ] Images optimized
- [ ] No console errors

---

## Quick Fixes Guide

### Video Not Playing:
1. Check file format (MP4 + WebM)
2. Verify path: `/public/videos/hero-cinematic.*`
3. Check browser console for errors
4. Ensure video is muted
5. Fallback to poster image

### Mobile Menu Not Working:
1. Check z-index (should be z-50)
2. Verify click handlers
3. Test click prevention on background
4. Check animation definitions

### Tabs Not Switching:
1. Verify Tabs component import
2. Check activeTab state
3. Ensure TabsContent values match
4. Check animation transitions

### Images Not Showing:
1. Verify image paths
2. Check onError fallback
3. Verify Next.js Image sizing
4. Check image dimensions

---

## Component Import Reference

```typescript
// UI Components
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Carousel } from '@/components/ui/carousel'
import { SectionHeader } from '@/components/ui/section-header'

// Animations
import { fadeUp, staggerContainer, defaultTransition, viewportOnce } from '@/lib/animations'

// Data
import { siteConfig } from '@/lib/site-config'
import megamenuData from '@/data/megamenu.json'
import solutionCategories from '@/data/solution-categories.json'

// Hooks
import { useIsMobile } from '@/components/ui/use-mobile'
import { motion } from 'framer-motion'
```

---

## Key Metrics & Targets

### Performance:
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

### SEO:
- Page speed: 90+ Lighthouse score
- Mobile friendly: 100%
- Accessibility: 90+ Lighthouse score

### Accessibility:
- WCAG AA compliance
- 100% keyboard navigable
- 100% screen reader compatible

---

**Last Updated**: 2026-08-17
**Version**: 1.0
**Status**: Reference Guide Complete
