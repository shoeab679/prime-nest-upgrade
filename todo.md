# Prime Nest Interiors - Production TODO

## Phase 1: Fix Core Issues
- [ ] Fix all nested anchor tags in pages (Link wrapping span)
- [ ] Fix broken hero image (use CDN URL)
- [ ] Fix CSS @import order issue
- [ ] Fix useRef TypeScript error in ProjectShowcase

## Phase 2: Lead Capture & Forms
- [x] Database schema for leads and inquiries
- [x] tRPC procedures for leads.create and inquiries.create
- [x] LeadCaptureModal wired to tRPC leads.create
- [ ] Wire Contact form to tRPC inquiries.create
- [ ] Add time-delay trigger for lead modal on Home page
- [x] Owner notification on each form submission

## Phase 3: Cloudflare Pages Deployment
- [ ] Create static Vite build configuration
- [ ] Add _redirects file for SPA routing
- [ ] Add robots.txt and sitemap.xml
- [ ] Add SEO meta tags to all pages
- [ ] Push to GitHub repository

## Phase 4: Tests & Checkpoint
- [ ] Run vitest tests
- [ ] Save final checkpoint
