# Start in Germany (Responsive)

Next.js App Router + TailwindCSS v3, responsive layout, clickable hero hotspot, consistent banners,
and a minimal password-protected `/admin` route via middleware basic auth.

## Run locally
```bash
npm install
npm run dev
```

## Deploy
Push to GitHub; connect to Vercel. Add env vars to protect /admin:
- `ADMIN_USER` (default: admin)
- `ADMIN_PASS` (default: changeme)

## Images
Replace the placeholders in `/public/images/` with your own JPGs (keep < 500KB each).
