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

## Phase 5: GitHub-hosted Images for Cloudflare Pages
- [x] Download all Unsplash/CDN images used across the website
- [x] Place all images in client/public/images/ (committed to GitHub)
- [x] Update all image references in all pages and components to use /images/ paths
- [x] Remove all manus-storage and external CDN image references
- [x] Commit images + code changes to GitHub
- [x] Verify images load correctly on Cloudflare Pages

## Phase 6: Personal Images Integration
- [x] Upload personal images to S3 storage using manus-upload-file --webdev
- [x] Copy all personal images to GitHub repo (client/public/images/)
- [x] Replace gallery slider with personal portfolio images (local paths)
- [x] Add personal images to Home page hero with full-home-interior.jpg
- [x] Update ModularKitchens page with modular-kitchen-hero.jpg
- [x] Update Wardrobes page with wardrobe-showcase.jpg
- [x] Update TVUnits page with tv-unit-showcase.jpg
- [x] Verify static build includes all images for Cloudflare Pages
- [x] Test all pages and verify images display correctly
- [x] All tests passing (9/9 vitest tests, zero TypeScript errors)

## Phase 7: Image Optimization for Web
- [x] Resize all hero images to 1920x1080px
- [x] Resize all gallery images to 1200x800px
- [x] Convert all images to modern WebP format
- [x] Achieve 96-97% file size reduction (32MB to 1MB)
- [x] Update all image references to use .webp paths
- [x] Remove old JPG files from repository
- [x] Verify static build with optimized images
- [x] All tests passing (9/9 vitest tests, zero TypeScript errors)
- [x] Production-ready for Cloudflare Pages deployment

## Phase 8: Stock Images & Statistics Update
- [x] Download high-quality professional stock images
- [x] Replace all personal images with stock images
- [x] Optimize stock images to WebP format
- [x] Update statistics: 100+ Clients, 100+ Projects, 5+ Years, 98% Satisfaction
- [x] Integrate stock images into all pages
- [x] Verify static build with stock images
- [x] All tests passing (9/9 vitest tests, zero TypeScript errors)
- [x] Production-ready for Cloudflare Pages deployment
