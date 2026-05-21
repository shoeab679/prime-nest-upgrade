# Prime Nest Interiors - Production TODO

## Phase 1: Fix Core Issues
- [x] Fix all nested anchor tags in pages (Link wrapping span)
- [x] Fix broken hero image (use CDN URL)
- [x] Fix CSS @import order issue
- [x] Fix useRef TypeScript error in ProjectShowcase

## Phase 2: Lead Capture & Forms
- [x] Database schema for leads and inquiries
- [x] tRPC procedures for leads.create and inquiries.create
- [x] LeadCaptureModal wired to tRPC leads.create
- [x] Wire Contact form to tRPC inquiries.create
- [x] Add time-delay trigger for lead modal on Home page
- [x] Owner notification on each form submission

## Phase 3: Cloudflare Pages Deployment
- [x] Create static Vite build configuration
- [x] Add _redirects file for SPA routing
- [x] Add robots.txt and sitemap.xml
- [x] Add SEO meta tags to all pages
- [x] Push to GitHub repository

## Phase 4: Tests & Checkpoint
- [x] Run vitest tests (9/9 passing)
- [x] Save final checkpoint
