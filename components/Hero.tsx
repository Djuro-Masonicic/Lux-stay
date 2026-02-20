import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1920&q=80"
          alt="Luxury hotel room"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Experience Luxury<br />
            <span className="text-primary-400">Beyond Expectations</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Discover premium accommodations that redefine comfort and elegance. 
            Your perfect stay awaits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 hover:bg-primary-700 rounded-lg font-semibold text-lg transition shadow-xl hover:shadow-2xl group"
            >
              Book Your Stay
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white rounded-lg font-semibold text-lg transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
