# North Salinas Dental Website

A modern, spa-inspired dental practice website built with Next.js 14, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod
- **Icons:** Lucide React
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/north-salinas-dental.git
cd north-salinas-dental
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles + Tailwind
│   └── sitemap.ts          # Dynamic sitemap generation
├── components/
│   ├── home/               # Home page sections
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── Philosophy.tsx
│   │   ├── ServicesGrid.tsx
│   │   └── CTABanner.tsx
│   ├── layout/             # Global layout components
│   │   ├── TopBar.tsx
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── ui/                 # Reusable UI components
├── lib/
│   └── utils.ts            # Utility functions + site config
├── public/
│   ├── images/
│   │   └── logo.png
│   └── robots.txt
└── tailwind.config.ts      # Tailwind configuration
```

## Design System

### Colors

| Token | Hex | Usage |
|-------|-----|-------|
| sage-700 | #4A5548 | Primary buttons, dark backgrounds |
| sage-600 | #5C6B54 | Accent cards, hover states |
| sage-100 | #E8EDE6 | Light backgrounds |
| cream | #FAFAF8 | Page background |

### Typography

- **Headlines:** Playfair Display (Serif)
- **Body:** Manrope (Sans-serif)

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js and deploy

### Environment Variables

For production, set these in Vercel:
- `NEXT_PUBLIC_SITE_URL` - Your production URL

## Modules Status

- [x] Module 1: Project Foundation
- [x] Module 2: Global Components (Nav, Footer)
- [x] Module 3: Home Page Sections
- [ ] Module 4: Contact Page
- [ ] Module 5: Team Page
- [ ] Module 6: Sanity CMS Integration

## License

Private - North Salinas Dental
