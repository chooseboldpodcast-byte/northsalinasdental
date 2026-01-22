# Dental Website Template - Business & Technical Plan

> **Goal**: Package the North Salinas Dental website as a sellable template for other dental practices.

---

## Table of Contents
1. [Product Structure](#1-product-structure)
2. [Technical Changes Required](#2-technical-changes-required)
3. [File Structure for Customization](#3-file-structure-for-customization)
4. [Documentation Requirements](#4-documentation-requirements)
5. [Video Documentation](#5-video-documentation)
6. [Distribution Options](#6-distribution-options)
7. [Deliverables](#7-deliverables)
8. [Technical Implementation Tasks](#8-technical-implementation-tasks)
9. [Support Strategy](#9-support-strategy)
10. [Pricing Strategy](#10-pricing-strategy)

---

## 1. Product Structure

### Pricing Tiers

| Tier | Name | Price Range | What's Included |
|------|------|-------------|-----------------|
| 1 | Template Only | $297-497 | Source code + documentation, self-customize |
| 2 | Template + Setup Call | $697-997 | Tier 1 + 1-hour video walkthrough |
| 3 | Done-For-You | $1,500-3,000 | Full customization service |

### Value Proposition
- Modern tech stack (Next.js 14, Tailwind CSS)
- Bilingual support (English/Spanish) built-in
- Mobile-responsive design
- SEO optimized
- Easy customization via config files
- No coding required for basic changes

---

## 2. Technical Changes Required

### A. Central Site Configuration (`config/site.config.ts`)

Controls all practice-specific information:

```typescript
export const siteConfig = {
  // Practice Info
  practiceName: "North Salinas Dental",
  tagline: "Your Trusted Family Dentist",

  // Contact
  phone: "831.240.7833",
  email: "info@northsalinasdental.com",
  address: {
    street: "1750 N. Main St, Suite A-1",
    city: "Salinas",
    state: "CA",
    zip: "93906",
    mapUrl: "https://maps.app.goo.gl/...",
  },

  // Social Media
  social: {
    facebook: "",
    instagram: "",
    yelp: "",
    google: "",
  },

  // Business Hours
  hours: {
    "Monday": "8:00 AM - 5:00 PM",
    "Tuesday": "8:00 AM - 5:00 PM",
    "Wednesday": "8:00 AM - 5:00 PM",
    "Thursday": "8:00 AM - 5:00 PM",
    "Friday": "Closed",
    "Saturday": "Closed",
    "Sunday": "Closed",
  },

  // Features Toggle
  features: {
    enableSpanish: true,
    enableNewsTicker: true,
    enableSpecialsPage: true,
    enableBlog: false,
  },

  // Navigation - toggle pages on/off
  navigation: {
    showServices: true,
    showTeam: true,
    showInsurance: false,
    showSpecials: true,
    showContact: true,
    showNewPatientForms: true,
    showFinancialInfo: true,
  },

  // Doctor Info
  doctor: {
    name: "Dr. Ritu Bhardwaj",
    credentials: "DDS",
    image: "/images/doctor.jpg",
  },

  // Services offered (toggle on/off)
  services: {
    cleaning: true,
    cosmetic: true,
    invisalign: true,
    implants: true,
    veneers: true,
    crowns: true,
    extraction: true,
    sedation: true,
  },

  // EmailJS Configuration
  emailjs: {
    serviceId: "",
    templateId: "",
    publicKey: "",
  },
};
```

### B. Theme Configuration (`config/theme.config.ts`)

Controls colors, fonts, and visual style:

```typescript
export const themeConfig = {
  // Active color preset
  colorPreset: "teal", // "teal" | "navy" | "forest" | "plum" | "ocean" | "slate" | "custom"

  // Custom colors (used when colorPreset is "custom")
  customColors: {
    primary: "#16938F",
    primaryDark: "#0A6664",
    secondary: "#FF8B7B",
    background: "#F7FAFC",
  },

  // Fonts
  fonts: {
    heading: "Playfair Display",
    body: "Manrope",
  },

  // Border radius style
  borderStyle: "rounded", // "rounded" | "sharp" | "pill"
};

// Pre-built color palettes
export const colorPresets = {
  teal: {
    name: "Teal & Coral",
    primary: "#16938F",
    primaryDark: "#0A6664",
    secondary: "#FF8B7B",
    background: "#F7FAFC",
  },
  navy: {
    name: "Navy & Blush",
    primary: "#1B365D",
    primaryDark: "#0F1E37",
    secondary: "#E8B4B8",
    background: "#F8FAFC",
  },
  forest: {
    name: "Forest & Sand",
    primary: "#2D5A3D",
    primaryDark: "#1E3D29",
    secondary: "#D4A574",
    background: "#FAFAF8",
  },
  plum: {
    name: "Plum & Gold",
    primary: "#6B4C6E",
    primaryDark: "#4A354D",
    secondary: "#F0C987",
    background: "#FAF9FB",
  },
  ocean: {
    name: "Ocean & Sunshine",
    primary: "#0077B6",
    primaryDark: "#005A8C",
    secondary: "#FFB703",
    background: "#F7FBFC",
  },
  slate: {
    name: "Slate & Sky",
    primary: "#475569",
    primaryDark: "#334155",
    secondary: "#38BDF8",
    background: "#F8FAFC",
  },
};
```

### C. Content Configuration Files

Separate files for easily editable content:

- `config/content/doctor.ts` - Doctor bio, credentials, specialties
- `config/content/team.ts` - Team members array
- `config/content/services.ts` - Service descriptions
- `config/content/specials.ts` - Current promotions
- `config/content/homepage.ts` - Hero text, taglines

---

## 3. File Structure for Customization

```
dental-template/
├── config/
│   ├── site.config.ts          # Practice info, contact, hours
│   ├── theme.config.ts         # Colors, fonts, style
│   └── content/
│       ├── doctor.ts           # Doctor bio & info
│       ├── team.ts             # Team members
│       ├── services.ts         # Service descriptions
│       ├── specials.ts         # Current offers
│       └── homepage.ts         # Hero content
├── public/
│   ├── images/
│   │   ├── logo.png            # Practice logo (replace)
│   │   ├── logo-white.png      # White version for dark backgrounds
│   │   ├── doctor.jpg          # Main doctor photo
│   │   ├── team/               # Team member photos
│   │   │   ├── member-1.jpg
│   │   │   ├── member-2.jpg
│   │   │   └── ...
│   │   ├── office/             # Office/facility photos
│   │   └── hero/               # Hero section images
│   └── forms/                  # Downloadable PDF forms
│       ├── new-patient-registration.pdf
│       ├── hipaa-consent.pdf
│       ├── privacy-notice.pdf
│       └── financial-policy.pdf
├── docs/
│   ├── QUICKSTART.md           # 15-minute setup guide
│   ├── CUSTOMIZATION.md        # Detailed customization guide
│   ├── DEPLOYMENT.md           # Vercel deployment guide
│   ├── DOMAIN-SETUP.md         # Custom domain instructions
│   ├── EMAILJS-SETUP.md        # Contact form configuration
│   └── FAQ.md                  # Common questions
├── app/                        # Next.js pages (minimal edits needed)
├── components/                 # React components
└── README.md                   # Overview & getting started
```

---

## 4. Documentation Requirements

### Required Documentation Files

#### QUICKSTART.md (15-minute setup)
1. Clone/download the template
2. Install dependencies (`npm install`)
3. Update `config/site.config.ts` with practice info
4. Replace logo at `public/images/logo.png`
5. Replace doctor photo
6. Run locally (`npm run dev`)
7. Deploy to Vercel

#### CUSTOMIZATION.md (Detailed guide)
- Changing practice information
- Updating colors (presets vs custom)
- Updating images (with size requirements)
- Editing text content
- Enabling/disabling pages
- Adding/removing team members
- Uploading patient forms
- Enabling/disabling Spanish language

#### DEPLOYMENT.md
- Creating Vercel account
- Connecting GitHub repository
- Environment variables setup
- Deploying the site
- Setting up automatic deployments

#### DOMAIN-SETUP.md
- Purchasing a domain (Namecheap, GoDaddy, Google)
- Adding domain to Vercel
- DNS configuration
- SSL certificate (automatic with Vercel)

#### EMAILJS-SETUP.md
- Creating EmailJS account
- Setting up email service
- Creating email template
- Getting API keys
- Adding keys to environment variables

#### FAQ.md
- Common issues and solutions
- Troubleshooting guide
- Where to get help

### Image Requirements Reference

| Image | Location | Recommended Size | Format |
|-------|----------|------------------|--------|
| Logo | `/images/logo.png` | 200x60px | PNG (transparent) |
| Logo (white) | `/images/logo-white.png` | 200x60px | PNG (transparent) |
| Doctor photo | `/images/doctor.jpg` | 800x1000px | JPG |
| Team photos | `/images/team/` | 400x500px | JPG |
| Hero image | `/images/hero/` | 1920x1080px | JPG |
| Office photos | `/images/office/` | 1200x800px | JPG |

---

## 5. Video Documentation

### Recommended Video Tutorials (Loom)

| # | Video Title | Duration | Content |
|---|-------------|----------|---------|
| 1 | Overview & File Structure | 5 min | What's included, how it's organized |
| 2 | Basic Setup | 10 min | Config file, logo, photos |
| 3 | Changing Colors | 5 min | Using presets, custom colors |
| 4 | Updating Content | 10 min | Text, services, team members |
| 5 | Deployment to Vercel | 10 min | Full deployment walkthrough |
| 6 | Custom Domain Setup | 5 min | DNS configuration |
| 7 | Contact Form Setup | 5 min | EmailJS configuration |

**Total: ~50 minutes of video content**

---

## 6. Distribution Options

### Option A: Gumroad (Recommended for starting)
- Easy digital product sales
- Handles payments, taxes, VAT
- Provides secure download links
- Built-in affiliate program
- 10% + $0.50 per transaction

### Option B: Lemon Squeezy
- Similar to Gumroad
- Better for software/templates
- License key generation
- 5% + $0.50 per transaction

### Option C: GitHub + Gumroad Hybrid
1. Sell access on Gumroad
2. After purchase, invite to private GitHub repo
3. Buyer uses "Use this template" to create their copy
4. Gets updates when you push to main repo

### Option D: Your Own Website
- Build landing page with Stripe checkout
- Webhook delivers GitHub access or download link
- More control, more work

### Recommended Approach
**Start with Gumroad**, upgrade to own platform later if volume justifies it.

---

## 7. Deliverables

### What Buyers Receive

```
dental-website-template/
├── source-code/               # Complete Next.js project
│   └── (full codebase)
├── docs/
│   ├── QUICKSTART.md
│   ├── CUSTOMIZATION.md
│   ├── DEPLOYMENT.md
│   ├── DOMAIN-SETUP.md
│   ├── EMAILJS-SETUP.md
│   └── FAQ.md
├── assets/
│   ├── sample-images/         # Placeholder images
│   ├── color-palettes.pdf     # Visual guide to color presets
│   └── image-specs.pdf        # Image size requirements
├── videos/
│   └── VIDEO-LINKS.md         # Links to tutorial videos
└── README.md                  # Getting started overview
```

---

## 8. Technical Implementation Tasks

### Progress Tracker

#### Phase 1: Core Configuration System
- [x] Create `config/site.config.ts` with all practice settings
- [x] Create `config/theme.config.ts` with color presets
- [x] Create `config/content/` directory with content files
- [x] Refactor `lib/utils.ts` to use new config structure

#### Phase 2: Component Refactoring
- [x] Update `TopBar.tsx` to use config
- [x] Update `Navbar.tsx` to use config (dynamic navigation)
- [x] Update `Footer.tsx` to use config
- [x] Update `Hero.tsx` to use config
- [x] Update `MeetTheDoctor.tsx` to use config
- [x] Update `NewsTicker.tsx` to use config
- [x] Update `MobileMenuDrawer.tsx` to use config
- [x] Update `LanguageContext.tsx` to include config
- [ ] Update `ServicesGrid.tsx` to use config
- [ ] Update `NewPatientSpecials.tsx` to use config
- [ ] Update all page files to use config

#### Phase 3: Theme System
- [ ] Implement color preset system in Tailwind config
- [ ] Create CSS variables approach for easy color swapping
- [ ] Test all 6 color presets
- [ ] Create visual color palette guide (PDF)

#### Phase 4: Navigation System
- [x] Make navigation items dynamic based on config
- [x] Auto-hide pages when disabled in config
- [x] Update mobile navigation
- [ ] Test all navigation combinations

#### Phase 5: Documentation
- [ ] Write QUICKSTART.md
- [ ] Write CUSTOMIZATION.md
- [ ] Write DEPLOYMENT.md
- [ ] Write DOMAIN-SETUP.md
- [ ] Write EMAILJS-SETUP.md
- [ ] Write FAQ.md
- [ ] Create image specs document

#### Phase 6: Video Tutorials
- [ ] Record Overview video
- [ ] Record Basic Setup video
- [ ] Record Changing Colors video
- [ ] Record Updating Content video
- [ ] Record Deployment video
- [ ] Record Domain Setup video
- [ ] Record Contact Form video

#### Phase 7: Polish & Package
- [ ] Remove North Salinas specific content
- [ ] Add placeholder/sample content
- [ ] Test fresh install experience
- [ ] Create sample images pack
- [ ] Package for distribution
- [ ] Set up Gumroad product page

### Estimated Time

| Phase | Estimated Hours |
|-------|-----------------|
| Phase 1: Core Config | 3-4 hours |
| Phase 2: Component Refactoring | 4-5 hours |
| Phase 3: Theme System | 2-3 hours |
| Phase 4: Navigation System | 2 hours |
| Phase 5: Documentation | 4-5 hours |
| Phase 6: Video Tutorials | 3-4 hours |
| Phase 7: Polish & Package | 2-3 hours |
| **Total** | **20-26 hours** |

---

## 9. Support Strategy

### Minimal Support Approach

**Included with purchase:**
- Comprehensive documentation
- Video tutorials
- FAQ section
- 30-day email support (setup questions only)

**Not included:**
- Phone support
- Custom development
- Ongoing maintenance
- Content writing

**Disclaimer to include:**
> "This is a self-service website template. Comprehensive documentation and video tutorials are provided. Email support is available for 30 days for setup-related questions only. Custom development and modifications beyond the documentation are available as a separate paid service."

### Upsell Opportunities
- Extended support packages
- Custom color palette design
- Content writing services
- Full setup service (Tier 3)

---

## 10. Pricing Strategy

### Market Research

| Competitor | Price | Notes |
|------------|-------|-------|
| ThemeForest dental templates | $49-79 | Basic HTML/WordPress |
| Flavor Studios | $2,500-5,000 | Custom dental sites |
| ProSites | $300-500/month | Subscription model |
| Custom agencies | $5,000-15,000 | Full custom build |

### Recommended Pricing

| Tier | Price | Target Customer |
|------|-------|-----------------|
| Template Only | **$397** | Tech-savvy practice manager, developer |
| Template + Setup Call | **$797** | Wants guidance, some tech ability |
| Done-For-You | **$2,497** | No time, wants it handled |

### Value Justification
- Modern tech stack (not outdated WordPress)
- Bilingual support built-in (huge for CA, TX, FL markets)
- Mobile-first responsive design
- Fast loading (Next.js optimized)
- No monthly fees (unlike ProSites)
- Full ownership of code

---

## Notes & Ideas

### Future Enhancements
- [ ] Blog system
- [ ] Online booking integration (with Dentrix, etc.)
- [ ] Patient portal placeholder
- [ ] Review/testimonial system
- [ ] Before/after gallery
- [ ] Insurance checker tool

### Marketing Channels
- Dental Facebook groups
- Dental subreddits
- Dental conferences
- Google Ads ("dental website template")
- Partnership with dental consultants

---

*Last Updated: January 2026*
