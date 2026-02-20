# 📋 Command Reference

Quick reference for common commands.

## Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Deployment

```bash
# Deploy to Vercel (recommended)
vercel

# Deploy to Vercel (production)
vercel --prod

# Check Vercel deployment status
vercel ls
```

## Package Management

```bash
# Install all dependencies
npm install

# Add a new package
npm install package-name

# Remove a package
npm uninstall package-name

# Update packages
npm update

# Check for outdated packages
npm outdated

# Security audit
npm audit

# Fix security issues
npm audit fix
```

## Git Commands

```bash
# Initialize repository
git init

# Stage all files
git add .

# Commit changes
git commit -m "Your message"

# Push to GitHub
git push origin main

# Check status
git status

# View changes
git diff
```

## Project Maintenance

```bash
# Clear Next.js cache
rm -rf .next

# Clear node modules and reinstall
rm -rf node_modules
npm install

# Clear all caches
rm -rf .next node_modules
npm install
```

## Testing URLs

```bash
# Local development
http://localhost:3000 (or 3001 if 3000 is in use)

# After Vercel deployment
https://your-project.vercel.app
```

## Environment Variables

```bash
# Create local environment file
cp .env.example .env.local

# Edit environment variables
code .env.local
```

## Useful Scripts

```bash
# Check Next.js version
npx next --version

# Check Node version
node --version

# Check npm version
npm --version

# List installed packages
npm list --depth=0
```

## Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy project
vercel

# Deploy to production
vercel --prod

# View deployment logs
vercel logs

# List projects
vercel projects list

# Link to existing project
vercel link
```

## Troubleshooting

```bash
# If port is in use
npx kill-port 3000

# Clear Next.js build cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Check for errors
npm run build

# Restart TypeScript server (in VS Code)
# Cmd/Ctrl + Shift + P → "TypeScript: Restart TS Server"
```

## Performance

```bash
# Analyze bundle size
npm run build

# Check bundle with webpack-bundle-analyzer
npm install -D @next/bundle-analyzer
```

## Quick Setup for New Clone

```bash
git clone YOUR_REPO_URL
cd luxstay-booking
npm install
npm run dev
# Open http://localhost:3000
```

---

**Bookmark this file for quick reference! 📌**
