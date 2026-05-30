# Sonic Brush® — Premium About Us Landing Page (PRD)

## Original Problem Statement
Design and build a high-quality "About Us" page for Sonic Brush® — "The World's First Automatic Sonic Toothbrush". Must be premium, editorial, minimal; blue (#0344a4) + white palette consistent with sonic-brush.net; mobile-first; Shopify-compatible structure; newsletter signup storing emails in MongoDB.

## Architecture
- **Frontend:** React 19 + Tailwind + shadcn/ui + lucide-react + Instrument Serif (display) + Inter (body) + sonner toasts
- **Backend:** FastAPI + Motor (async MongoDB)
- **Routes:**
  - `GET /api/` — health
  - `POST /api/newsletter` — subscribe (idempotent, stores email + source + timestamp)
  - `GET /api/newsletter` — list subscribers (admin)
  - `GET /api/newsletter/count` — subscriber count
  - `GET/POST /api/status` — legacy status checks

## User Personas
- Wellness-oriented shoppers discovering Sonic Brush® for the first time
- Returning customers wanting to learn the brand story
- Press / retail partners evaluating brand credibility

## Implemented (Dec 2025)
- 11 editorial sections: Navbar, Hero, PressBar, Story, Mission&Values, Accessibility, Founder (Dr. Adam Gray), Craftsmanship (V1–V5 timeline), Sustainability, Testimonials (+trust signals: 100K+, Forbes, Dentist approved, Trustpilot 4.5★), Newsletter + Shop CTA, Footer
- Authentic imagery pulled from sonic-brush.net Shopify CDN
- Mobile-first responsive layout + mobile drawer nav
- Newsletter form → POST /api/newsletter → MongoDB persistence with duplicate detection
- data-testid coverage on every interactive element
- 100% backend & frontend tests passing (iteration_1)

## Prioritized Backlog
### P1 (nice-to-have polish)
- Scroll-triggered reveal animations with IntersectionObserver (currently only hero has animation)
- Lazy-load offscreen images to speed up initial paint
- Inline <video> embed for product demo (YouTube "Meet Sonic Brush V5")

### P2 (future)
- Multi-language support (brand ships globally)
- A/B test hero headline variants
- Integrate real Trustpilot reviews widget
- Admin dashboard for newsletter subscribers list + CSV export
- Connect signup to Klaviyo/Mailchimp for email automation
