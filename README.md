# Garrett Porsche Diagnostics

Expert Porsche remote diagnostics from a Level 3 Master Technician.

## Tech Stack

- **Framework**: Next.js 16+ (App Router)
- **Language**: TypeScript (Strict)
- **Styling**: Tailwind CSS
- **Database & Auth**: Supabase
- **Payments**: Stripe
- **Animations**: Framer Motion
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Add your API keys to .env.local
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build

```bash
npm run build
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous key |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe publishable key |
| `STRIPE_SECRET_KEY` | Stripe secret key |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook signing secret |

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
├── components/
│   ├── sections/        # Page sections (Hero, Services, etc.)
│   └── ui/              # Reusable UI components
├── lib/                 # Utility functions and clients
└── content/             # MDX blog content (future)
```

## Features

- **Email Diagnostic**: $97 - 3-hour response guarantee
- **Live Consultation**: $197 - 30-min video call
- **VIP Retainer**: $297/mo - Priority unlimited access
- **Newsletter Capture**: Exit-intent modal + footer signup

## Design System ("GT3 Spec")

- **Background**: `#0F1115` (Matte Carbon)
- **Accent**: `#3461D2` (Shark Blue)
- **Text**: `#EAEAEA` (High legibility)
- **Fonts**: JetBrains Mono (headers), Inter (body)

## Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/itsandrewerickson/garrett_porche)
