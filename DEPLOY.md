# Deploying Prime Nest Interiors to Cloudflare Pages

## Overview

This project supports two deployment modes:

1. **Manus Hosting** (Recommended) — Full-stack with database, lead capture, and owner notifications. Click **Publish** in the Manus UI.
2. **Cloudflare Pages** — Static frontend only. Forms fall back to WhatsApp. No database required.

---

## Cloudflare Pages Deployment (Static)

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit - Prime Nest Interiors"
gh repo create prime-nest-interiors --private --source=. --push
```

### Step 2: Connect to Cloudflare Pages

1. Go to [Cloudflare Pages](https://pages.cloudflare.com)
2. Click **Create a project** → **Connect to Git**
3. Select your `prime-nest-interiors` repository
4. Configure build settings:

| Setting | Value |
|---|---|
| Framework preset | None (Custom) |
| Build command | `pnpm build:static` |
| Build output directory | `dist-static` |
| Root directory | `/` |
| Node.js version | `22` |

### Step 3: Environment Variables (Optional)

No environment variables are required for the static build. The contact form will redirect to WhatsApp.

### Step 4: Custom Domain

1. In Cloudflare Pages → **Custom domains**
2. Add `primenestinteriors.com`
3. Update your DNS records as instructed

---

## SPA Routing

The `client/public/_redirects` file handles SPA routing on Cloudflare Pages:

```
/* /index.html 200
```

This ensures all routes (e.g., `/about`, `/services`) work correctly.

---

## Full-Stack Deployment (Manus)

For the complete experience with:
- Lead capture modal saving to database
- Contact form with owner notifications
- Analytics dashboard

→ Use the **Publish** button in the Manus Management UI.

---

## Notes

- Images use Unsplash CDN — no local image files needed
- The `/manus-storage/` paths work on Manus hosting only
- For Cloudflare Pages, all images are served from Unsplash CDN
