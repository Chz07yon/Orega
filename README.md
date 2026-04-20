# Orega Engineering Website

A modern, high-performance website built for **Orega**, specialized in engineering solutions, rapid prototyping, IoT, and automation.

## Tech Stack
- **Framework:** [Next.js 15 (App Router)](https://nextjs.org/)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** Minimal implementations inspired by [shadcn/ui](https://ui.shadcn.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Forms & Validation:** React Hook Form + Zod
- **Theming:** next-themes (Light/Dark mode)

## Quick Start

1. **Install Dependencies**
   Run the following command to install all necessary packages:
   ```bash
   npm install
   ```

2. **Start Development Server**
   Start the local Next.js development server:
   ```bash
   npm run dev
   ```

3. **View the Site**
   Open [http://localhost:3000](http://localhost:3000) in your selected browser.

## Deployment to Vercel

1. Push this repository to GitHub/GitLab/Bitbucket.
2. Go to [Vercel](https://vercel.com/) and Import the Project.
3. Vercel will automatically detect Next.js. The default build settings (`next build`) are correct.
4. (Optional) The provided `vercel.json` ensures proper routing and configuration.
5. Click **Deploy**.

## Features Implemented
- **Responsive Navigation:** Sticky transparent navbar with mobile menu.
- **Home Page:** Dynamic hero section, stats, featured projects grid, testimonials carousel approach, and newsletter.
- **Services:** 6 distinct engineering services with detailed cards.
- **Submit Request:** Comprehensive multi-step form with complete validation and simulated success confetti/states.
- **Projects:** Interactive filterable grid of past work.
- **Theme Support:** Fully tested responsive Light and Dark modes using Next-Themes.
- **SEO & Performance:** Optimized Image loading via `next/image`, proper accessibility contrast.

## Colors Used
- Primary: **Electric Blue** (`#00BFFF`)
- Secondary: **Deep Navy** (`#0A2540`)
- Accent: **Light Blue** (`#60A5FA`)
