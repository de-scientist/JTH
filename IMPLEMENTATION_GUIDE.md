# JTH Graphix Production - Implementation Guide

## Quick Start Guide for Completing the Transformation

---

## 1 HERO VIDEO SETUP (15 minutes)

### What You Need:
- A 8-15 second video showcasing:
  - Graphic design work
  - Website development
  - Branding presentations
  - Video production
  - Office/creative space
  - Technology/coding
  - Business transformation

### Recommended Video Creation:
**Option A: Use Existing Content**
- Compile footage from portfolio shoots
- Create a montage of best work
- Add professional transitions
- Keep branding consistent

**Option B: Professional Video Service**
- Sites: Fiverr, Upwork, local videographers
- Budget: $100-500 for quality
- Turnaround: 5-10 days

### Technical Specs:
```
Resolution: 1920×1080 (or higher)
Duration: 8-15 seconds
Format: MP4 (H.264) + WebM
Aspect Ratio: 16:9
File Size: <3MB total for both formats
Bitrate: 2-4 Mbps
Frame Rate: 24-30 fps
Audio: None (muted)
```

### How to Create Web-Optimized Versions:

**MP4 Version (using ffmpeg)**:
```bash
ffmpeg -i input_video.mp4 -c:v libx264 -preset fast -crf 23 -s 1920x1080 output.mp4
```

**WebM Version (using ffmpeg)**:
```bash
ffmpeg -i input_video.mp4 -c:v libvpx-vp9 -b:v 1M -c:a libopus output.webm
```

**Or use online tools**:
- CloudConvert.com (free)
- Convertio.co (free)
- Online-Convert.com (free)

### Placement:
1. Create `/public/videos/` folder if it doesn't exist
2. Add files:
   - `hero-cinematic.mp4`
   - `hero-cinematic.webm`
3. Verify in browser: Hero section should display video

### Testing:
```
 Video plays on desktop Chrome
 Video plays on desktop Firefox
 Video autoplays on mobile Safari
 Video falls back to poster image if load fails
 Audio is muted
 No layout shift when video loads
```

---

## 2 RESPONSIVE DESIGN TESTING (30 minutes)

### Test Breakpoints:

#### Mobile Breakpoints:
```
320px  - iPhone SE
375px  - iPhone 12
390px  - iPhone 14
414px  - iPhone 12 Pro Max
```

#### Tablet Breakpoints:
```
768px  - iPad
1024px - iPad Pro
```

#### Desktop Breakpoints:
```
1280px - Standard desktop
1440px - Wider desktop
1920px - 4K
```

### What to Check on Each Breakpoint:

**Navigation**:
- [ ] Mega-menu displays correctly
- [ ] Mobile hamburger menu works
- [ ] Utility bar present on desktop
- [ ] Links are clickable
- [ ] No horizontal overflow

**Hero Section**:
- [ ] Video/poster loads
- [ ] Text readable on all sizes
- [ ] CTA buttons stack properly on mobile
- [ ] Scroll indicator visible on desktop
- [ ] Trust indicators display correctly

**Sections**:
- [ ] Tabs work (desktop and mobile)
- [ ] Cards align properly
- [ ] Carousels work on mobile
- [ ] No overlapping content
- [ ] Spacing is consistent

**Images**:
- [ ] All images load
- [ ] No stretched/distorted images
- [ ] Proper aspect ratios maintained
- [ ] Responsive sizing

**Forms/CTAs**:
- [ ] Buttons are tappable (min 44x44px on mobile)
- [ ] Form inputs are usable
- [ ] No tiny text (min 14px)

### Tools:
- Chrome DevTools (F12)
- Firefox DevTools
- Safari DevTools
- [Responsively.app](https://responsively.app/)
- [BrowserStack](https://www.browserstack.com/)

---

## 3 SEO/GEO OPTIMIZATION (45 minutes)

### Update Homepage Metadata

**File**: `app/layout.tsx` or create `app/home/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: 'JTH Graphix Production | Creative Agency + Technology Solutions',
  description: 'Transform your business through strategic branding, web development, software solutions, and digital marketing. Trusted by SMEs, corporates, NGOs and startups across Kenya.',
  keywords: 'graphic design Kenya, branding agency Kenya, web development Kenya, software development Kenya, digital marketing Kenya, creative agency Kenya',

  openGraph: {
    title: 'JTH Graphix Production | Creative Agency + Technology Solutions',
    description: 'Transform your business through branding, web development, and digital solutions.',
    url: 'https://jthgraphixproduction.com',
    siteName: 'JTH Graphix Production',
    images: [{
      url: 'https://jthgraphixproduction.com/og-image.jpg',
      width: 1200,
      height: 630,
    }],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'JTH Graphix Production',
    description: 'Creative Agency + Technology Solutions',
    images: ['https://jthgraphixproduction.com/og-image.jpg'],
  }
}
```

### Add Structured Data

**File**: Create `app/components/schema-org.tsx`

```typescript
export function HomePageSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'JTH Graphix Production',
    image: 'https://jthgraphixproduction.com/logo.png',
    description: 'Creative agency and technology solutions provider in Nairobi, Kenya',
    url: 'https://jthgraphixproduction.com',
    telephone: '+254117537015',
    email: 'jthgraphixproduction@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Nairobi',
      addressRegion: 'Nairobi',
      addressCountry: 'KE'
    },
    sameAs: [
      'https://www.facebook.com/share/1Gb1S1zZSS/',
      'https://www.instagram.com/jthgraphixproduction',
      'https://www.linkedin.com/in/jth-graphix-production-3432323b8'
    ],
    potentialAction: {
      '@type': 'ReserveAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://jthgraphixproduction.com/contact'
      }
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
```

### Target Keywords (Natural Integration):
- Graphic Design Agency Kenya
- Branding Agency Kenya
- Website Development Kenya
- Software Development Kenya
- Digital Marketing Kenya
- Social Media Management Kenya
- Creative Agency Kenya
- UI/UX Design Kenya
- Business Automation Kenya
- Photography & Videography Kenya

---

## 4 PERFORMANCE OPTIMIZATION (30 minutes)

### Image Optimization

**Already optimized components**:
- Using Next.js Image component
- Responsive sizing
- Lazy loading enabled

**What you can do**:
```bash
# Install image optimization tools
npm install sharp

# Optimize existing images
npx imagemin public/images/**/*.jpg --out-dir=public/images --plugin=imageminMozjpeg
npx imagemin public/images/**/*.png --out-dir=public/images --plugin=imageminPngquant
```

### Check Performance:

1. **Run Lighthouse**:
   - Open website in Chrome
   - F12 → Lighthouse tab
   - Analyze page load
   - Target: 90+ score

2. **Check Core Web Vitals**:
   - Largest Contentful Paint (LCP): < 2.5s
   - First Input Delay (FID): < 100ms
   - Cumulative Layout Shift (CLS): < 0.1

3. **Monitor with**:
   - Google PageSpeed Insights
   - WebPageTest.org
   - GTmetrix

### Optimization Tips:
- Lazy load portfolio images
- Compress hero video further if needed
- Minimize CSS/JavaScript
- Enable GZIP compression on server
- Use CDN for assets

---

## 5 ACCESSIBILITY AUDIT (45 minutes)

### Automated Testing:
```bash
npm install axe-core
```

### Manual Testing Checklist:

**Keyboard Navigation**:
- [ ] Tab through all interactive elements
- [ ] Shift+Tab goes backward
- [ ] Enter/Space activates buttons
- [ ] Escape closes menus
- [ ] Focus visible on all elements

**Screen Reader** (NVDA/JAWS/VoiceOver):
- [ ] All images have alt text
- [ ] Form labels associated
- [ ] Headings in correct order
- [ ] Navigation structure clear
- [ ] Live regions announced

**Color Contrast**:
- [ ] Text: 4.5:1 (AAA standard)
- [ ] Large text: 3:1
- [ ] UI components: 3:1
- Test with: WebAIM Contrast Checker

**Motion/Animation**:
- [ ] Respects prefers-reduced-motion
- [ ] No auto-playing videos with sound
- [ ] No flashing content

**Form Accessibility**:
- [ ] Labels visible
- [ ] Error messages clear
- [ ] Required fields indicated
- [ ] Help text associated

---

## 6 BROWSER & DEVICE TESTING (30 minutes)

### Browser Testing:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### Mobile Device Testing:
- [ ] iPhone 12/13/14/15
- [ ] Android (Samsung/Pixel)
- [ ] iPad
- [ ] Landscape orientation
- [ ] Touch interactions

### Tools:
- BrowserStack (cloud browsers)
- Chrome DevTools device emulation
- Real device testing
- SauceLabs

---

## 7 FINAL QA CHECKLIST

### Functionality:
- [ ] All links work
- [ ] Forms submit
- [ ] Videos load
- [ ] Images load
- [ ] No console errors
- [ ] No broken dependencies

### Visual:
- [ ] Branding consistent (#004AAD primary, #FF7A1A footer)
- [ ] Typography hierarchy clear
- [ ] Spacing consistent
- [ ] No overlapping elements
- [ ] Hover states visible
- [ ] Mobile layout responsive

### Performance:
- [ ] LCP < 2.5s
- [ ] Lighthouse score 90+
- [ ] No layout shift
- [ ] Images optimized
- [ ] Video compressed

### SEO:
- [ ] Meta tags correct
- [ ] Schema.org markup added
- [ ] Sitemap includes all pages
- [ ] Robots.txt configured
- [ ] Internal links structure

### Security:
- [ ] HTTPS enabled
- [ ] No exposed API keys
- [ ] Form submissions secure
- [ ] CSRF tokens present
- [ ] No vulnerable dependencies

---

##  DEPLOYMENT CHECKLIST

Before going live:

```
[ ] All videos in place
[ ] All images optimized
[ ] SEO metadata updated
[ ] Lighthouse score 90+
[ ] Responsive QA passed
[ ] Accessibility audit passed
[ ] Browser testing passed
[ ] Form submissions working
[ ] Analytics setup
[ ] Backup created
[ ] Staging environment tested
[ ] Go-live scheduled
[ ] Monitoring enabled
```

---

##  ROLLOUT STRATEGY

### Stage 1: Internal Testing (1 day)
- Team tests all features
- Feedback collection
- Final fixes

### Stage 2: Staging Deploy (1 day)
- Deploy to staging environment
- QA verification
- Performance monitoring

### Stage 3: Production Deployment (1 day)
- Deploy during low-traffic hours
- Monitor for issues
- Have rollback plan

### Stage 4: Post-Launch Monitoring (1 week)
- Monitor analytics
- Track performance metrics
- Collect user feedback
- Fix any issues discovered

---

##  Support & Maintenance

### Monthly Tasks:
- [ ] Check analytics trends
- [ ] Update blog/insights
- [ ] Review user feedback
- [ ] Monitor performance
- [ ] Security updates

### Quarterly Tasks:
- [ ] Content audit
- [ ] SEO audit
- [ ] Competitive analysis
- [ ] User testing
- [ ] Strategy review

---

##  Quick Commands

```bash
# Development
npm run dev

# Build
npm run build

# Production start
npm start

# Linting
npm run lint

# Format code
npm run format
```

---

##  Resources

- Next.js Docs: https://nextjs.org/docs
- TypeScript: https://www.typescriptlang.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion
- shadcn/ui: https://ui.shadcn.com

---

**Status**: Ready for Implementation
**Estimated Time to Complete**: 4-6 hours (depending on video creation)
**Last Updated**: 2026-08-17
