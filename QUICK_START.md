# 🚀 Quick Start Guide

Get your LuxStay booking platform running in 5 minutes!

## Prerequisites

- Node.js 18+ installed ([Download](https://nodejs.org/))
- npm, yarn, or pnpm

## Installation

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open browser
# Visit http://localhost:3000 (or http://localhost:3001 if 3000 is in use)
```

That's it! 🎉

## What You'll See

- **Home Page** (`/`) - Hero section, amenities, featured rooms
- **About Us** (`/about`) - Company story, values, team
- **Booking Page** (`/booking`) - Room selection and reservation form

## Project Structure

```
├── app/               # Next.js pages
│   ├── about/        # About Us page
│   ├── booking/      # Booking page
│   ├── layout.tsx    # Root layout
│   └── page.tsx      # Home page
├── components/        # React components
├── public/           # Static assets
└── ...config files
```

## Key Features

✅ **Responsive Design** - Works on all devices
✅ **Modern UI** - Built with Tailwind CSS
✅ **TypeScript** - Type-safe code
✅ **SEO Optimized** - Meta tags and structured data
✅ **Fast** - Next.js optimization
✅ **Production Ready** - Deploy to Vercel in 1 click

## Common Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Run production build
npm run lint     # Check for code issues
```

## Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or push to GitHub and deploy via [vercel.com](https://vercel.com) dashboard.

## Customization

- **Colors**: Edit `tailwind.config.js`
- **Rooms**: Modify `components/FeaturedRooms.tsx`
- **Images**: Replace Unsplash URLs with your own
- **Content**: Update text in page components

## Need Help?

- 📖 [Full README](README.md)
- 🚀 [Deployment Guide](DEPLOYMENT.md)
- 💬 Open an issue on GitHub

## Next Steps

1. ✅ Run the project locally
2. ✅ Explore all pages
3. ✅ Customize content and images
4. ✅ Deploy to Vercel
5. ✅ Share with the world!

---

**Happy coding! 💻✨**
