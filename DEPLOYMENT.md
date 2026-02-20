# Deployment Guide

## Quick Deploy to Vercel (Recommended)

### Method 1: GitHub Integration

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: LuxStay booking platform"
   git branch -M main
   git remote add origin https://github.com/yourusername/luxstay-booking.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js
   - Click "Deploy"
   - Your site will be live in ~2 minutes! 🚀

### Method 2: Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to your Vercel account
vercel login

# Deploy from project directory
vercel

# Follow prompts, then your site is live!
```

## Deploy to Other Platforms

### Netlify

1. **Build command:** `npm run build`
2. **Publish directory:** `.next`
3. Add plugin: `@netlify/plugin-nextjs`

### AWS Amplify

1. Connect your repository
2. Build settings:
   - Build command: `npm run build`
   - Output directory: `.next`
3. Deploy

### Docker Deployment

Create a `Dockerfile`:

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
USER nextjs
EXPOSE 3000
ENV PORT 3000
CMD ["node", "server.js"]
```

Then build and run:
```bash
docker build -t luxstay-booking .
docker run -p 3000:3000 luxstay-booking
```

## Environment Variables

For production, set these in your hosting platform:
- `NODE_ENV=production`
- Add any API keys from `.env.example`

## Post-Deployment Checklist

- [ ] Test all pages (Home, About, Booking)
- [ ] Verify mobile responsiveness
- [ ] Test form submissions
- [ ] Check image loading
- [ ] Test navigation
- [ ] Verify SEO meta tags
- [ ] Test on different browsers
- [ ] Check performance (Lighthouse score)
- [ ] Set up custom domain (optional)
- [ ] Enable analytics (optional)

## Performance Optimization

The project is already optimized with:
- ✅ Next.js Image Optimization
- ✅ Code Splitting
- ✅ Static Generation where possible
- ✅ Tailwind CSS purging
- ✅ Font optimization with next/font

## Monitoring

Consider adding:
- Vercel Analytics
- Google Analytics
- Sentry for error tracking
- Uptime monitoring

## Custom Domain

On Vercel:
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. SSL is automatic! 🔒

## Support

If you encounter issues:
- Check [Next.js Docs](https://nextjs.org/docs)
- Check [Vercel Docs](https://vercel.com/docs)
- Open an issue in your repository

---

**Your LuxStay booking platform is ready for the world! 🎉**
