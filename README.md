# LuxStay - Premium Room Booking Platform

A beautiful, modern Next.js booking platform for luxury room accommodations. Built with Next.js 14, TypeScript, and Tailwind CSS.

![LuxStay](https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80)

## ✨ Features

- 🏨 **Beautiful UI** - Modern, responsive design with smooth animations
- 📱 **Mobile-First** - Fully responsive across all devices
- 🎨 **Tailwind CSS** - Utility-first styling with custom design system
- 🖼️ **High-Quality Images** - Integration with Unsplash for stunning visuals
- 📄 **Multiple Pages** - Home, About Us, and Booking pages
- 🔍 **Room Selection** - Interactive room selector with detailed information
- 📝 **Booking Form** - Complete reservation form with validation
- ⚡ **Performance** - Optimized with Next.js 14 features
- 🚀 **Ready for Vercel** - One-click deployment

## 🎯 Pages

### Home Page
- Eye-catching hero section with call-to-action
- Premium amenities showcase
- Featured rooms gallery
- Call-to-action section

### About Us
- Company story and mission
- Statistics and achievements
- Core values presentation
- Team member profiles

### Booking Page
- Interactive room selector
- Comprehensive booking form
- Date selection
- Guest information
- Trust indicators

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Images:** Next.js Image Optimization
- **Font:** Inter (Google Fonts)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. **Install dependencies:**

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. **Run the development server:**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. **Open your browser:**

Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🌐 Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub, GitLab, or Bitbucket
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Click "Deploy"

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

The platform will automatically:
- Detect it's a Next.js project
- Configure build settings
- Deploy to production

## 📂 Project Structure

```
luxstay-booking/
├── app/
│   ├── about/
│   │   └── page.tsx          # About Us page
│   ├── booking/
│   │   └── page.tsx          # Booking page
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Home page
│   └── globals.css           # Global styles
├── components/
│   ├── Navbar.tsx            # Navigation component
│   ├── Footer.tsx            # Footer component
│   ├── Hero.tsx              # Hero section
│   ├── Features.tsx          # Features section
│   ├── FeaturedRooms.tsx     # Room gallery
│   ├── RoomCard.tsx          # Individual room card
│   ├── CallToAction.tsx      # CTA section
│   ├── BookingForm.tsx       # Reservation form
│   └── RoomSelector.tsx      # Room selection UI
├── public/                   # Static assets
├── next.config.js            # Next.js configuration
├── tailwind.config.js        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies
```

## 🎨 Customization

### Colors

Edit the color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your custom colors
  },
}
```

### Rooms

Modify room data in `components/FeaturedRooms.tsx` and `components/RoomSelector.tsx`

### Images

Replace Unsplash URLs with your own images in the components

## 🔧 Configuration

### Next.js

The project uses Next.js 14 with App Router. Configuration is in `next.config.js`

### Tailwind CSS

Tailwind is configured with custom breakpoints and colors in `tailwind.config.js`

## 📝 Environment Variables

For a production app, create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=your_api_url
# Add other environment variables as needed
```

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Images from [Unsplash](https://unsplash.com)
- Icons from [Lucide](https://lucide.dev)
- Built with [Next.js](https://nextjs.org)

## 📧 Contact

For questions or support, reach out to info@luxstay.com

---

**Made with ❤️ for luxury travelers**
