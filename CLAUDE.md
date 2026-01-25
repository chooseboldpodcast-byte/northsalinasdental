# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **dental practice website template** built with Next.js 14 (App Router). The codebase is designed to be templatized and sold to other dental practices who can customize it for their own use.

**Template Design Philosophy:**
- All practice-specific content (name, contact info, services, team) lives in configuration files
- Purchasers customize the site by editing config files, not component code
- Components read from config and should remain generic/reusable
- When adding features, consider: "Can another dental practice use this by just changing config?"

## Commands

- `npm run dev` - Start development server (localhost:3000)
- `npm run build` - Production build
- `npm run lint` - Run ESLint

## Architecture

### Configuration System (Important for Template Customization)

All customizable content is centralized in `/config/`:

```
config/
├── index.ts           # Main export (siteConfig, themeConfig)
├── site.config.ts     # Practice info, contact, hours, feature toggles, navigation
├── theme.config.ts    # Color presets, fonts, border styles
└── content/
    ├── doctor.ts      # Primary doctor bio and credentials
    ├── team.ts        # Team member profiles
    ├── services.ts    # Dental services offered
    ├── specials.ts    # Promotions and offers
    └── homepage.ts    # Homepage-specific content
```

**Key pattern:** Import config via `import { siteConfig, themeConfig } from '@/config'` or content via `import { doctorContent, teamMembers } from '@/config/content'`.

### Feature Toggles

`siteConfig.features` and `siteConfig.navigation` control what appears on the site. Check these flags before rendering optional features:
- `enableSpanish` - Bilingual EN/ES support
- `enableNewsTicker` - Scrolling announcements
- `enableAppointmentModal` - Appointment request form
- Navigation items can be toggled individually

### Bilingual Support (EN/ES)

- `LanguageContext` (`/context/LanguageContext.tsx`) manages language state
- Use `useLanguage()` hook to access: `{ language, t, config, toggleLanguage }`
- `t` object contains translated UI strings
- Add new translations to the `translations` object in LanguageContext

### Component Organization

```
components/
├── home/        # Homepage sections (Hero, Features, ServicesGrid, etc.)
├── layout/      # Global layout (TopBar, Navbar, Footer, MobileBottomNav)
├── sections/    # Reusable page sections (MeetTheDoctor, NewPatientSpecials)
├── services/    # Services page components
├── modals/      # Modal dialogs (AppointmentModal)
└── ui/          # Reusable UI primitives (Toast, AppointmentButton)
```

### Styling

- Tailwind CSS with custom color tokens defined in `tailwind.config.ts`
- Primary colors: `primary-50` to `primary-900` (teal palette)
- Secondary colors: `secondary-50` to `secondary-900` (coral accent)
- Typography: Playfair Display (headings), Manrope (body)
- Use `cn()` utility from `@/lib/utils` for conditional class merging

### Context Providers

Root layout wraps the app with:
1. `LanguageProvider` - EN/ES language toggle with localStorage persistence
2. `AppointmentProvider` - Global appointment modal state

## Code Style

- Use `@/` path alias for imports (maps to project root)
- Functional components with TypeScript
- "use client" directive only when needed (hooks, browser APIs, interactivity)
- Framer Motion for animations
- React Hook Form + Zod for form validation
- EmailJS for contact form submissions

## When Modifying the Template

1. **Adding new customizable content:** Add to the appropriate config file in `/config/content/`
2. **Adding new features:** Add a feature toggle to `siteConfig.features`
3. **Adding translatable text:** Add to both `en` and `es` objects in LanguageContext
4. **Changing colors:** Use `themeConfig.colorPreset` or modify `colorPresets` in theme.config.ts
