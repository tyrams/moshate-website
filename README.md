# Moshate Consulting Website

A modern, responsive website for Moshate Consulting (Pty) Ltd - an ICT and Management Consulting firm focused on innovative business management and digital solution services.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Icons:** React Icons, Lucide React
- **Animations:** AOS (Animate On Scroll)
- **Forms:** Formik
- **Contact form:** [Web3Forms](https://web3forms.com)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Contact form setup

1. Create a free account at [web3forms.com](https://web3forms.com) and copy your access key.
2. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`.
3. In the Web3Forms dashboard, add your production domain to restrict submissions.
4. Enable hCaptcha spam protection in the Web3Forms dashboard.
5. Set the notification email to `admin@moshateconsulting.co.za` (or your preferred inbox).

For Azure Static Web Apps, add `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` as a GitHub Actions repository secret. The workflow passes it into `npm run build`.

## Project Structure

```
├── app/                    # Next.js app router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── services/          # Services pages
│   │   └── [slug]/        # Dynamic service detail pages
│   └── page.tsx           # Homepage
├── src/
│   ├── components/        # Reusable UI components
│   ├── layout/            # Layout components (header, footer)
│   └── sections/          # Page sections
├── data/                  # Static data and content
└── public/                # Static assets
```

## Key Features

- **Dynamic Service Pages:** Each service has its own dedicated page with dynamic routing
- **Responsive Design:** Mobile-first approach with Tailwind CSS
- **Dark Mode Support:** Theme switching with next-themes
- **SEO Optimized:** Meta tags and semantic HTML
- **Contact Forms:** Integrated contact functionality
- **Smooth Animations:** AOS library for scroll animations

## Services

The website showcases six core services:

- Strategy Design
- Digital Transformation
- Project Management & Delivery Services
- Operational Excellence
- IT Resources
- Consulting Services

## Development Guidelines

### Commit Prefixes

- `feat` – new feature
- `fix` – bug fix
- `chore` – maintenance tasks
- `refactor` – code refactoring
- `style` – styling updates
- `docs` – documentation updates
- `perf` – performance improvements
- `build` – build system changes

## Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run tsc          # TypeScript type checking
npm run prettier     # Check code formatting
```

## License

© Moshate Consulting (Pty) Ltd - All Rights Reserved
