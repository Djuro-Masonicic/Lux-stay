import Link from 'next/link'
import Image from 'next/image'
import { Sparkles, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center bg-dark-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1920&q=80"
          alt="Luxury suite"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-900/95 to-dark-800/90"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-gold-600/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-gold-600/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-dark-800/50 backdrop-blur-sm border border-gold-600/30 px-4 py-2 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span className="text-gold-400 text-sm font-medium tracking-wider">PREMIUM HOSPITALITY</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-6 leading-[1.1]">
            <span className="text-white">Where</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500">
              Elegance
            </span>
            <br />
            <span className="text-white">Meets</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500">
              Excellence
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-10 text-gray-300 max-w-2xl leading-relaxed">
            Immerse yourself in unparalleled luxury. Every moment crafted 
            to perfection, every detail designed for your comfort.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/booking"
              className="group inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-gold-600 to-gold-500 text-dark-900 font-bold text-lg tracking-wider hover:from-gold-500 hover:to-gold-400 transition-all shadow-xl shadow-gold-600/30 hover:shadow-2xl hover:shadow-gold-500/40 hover:scale-105"
            >
              BOOK YOUR SUITE
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-10 py-5 bg-dark-800/50 backdrop-blur-sm border-2 border-gold-600/50 text-gold-400 font-bold text-lg tracking-wider hover:bg-dark-800 hover:border-gold-500 transition-all"
            >
              EXPLORE MORE
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-gold-600/20">
            <div>
              <div className="text-4xl font-display font-bold text-gold-400 mb-1">50+</div>
              <div className="text-gray-400 text-sm tracking-wider">LUXURY SUITES</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-gold-400 mb-1">24/7</div>
              <div className="text-gray-400 text-sm tracking-wider">CONCIERGE</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-gold-400 mb-1">5★</div>
              <div className="text-gray-400 text-sm tracking-wider">EXPERIENCE</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-gold-400 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-gold-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
