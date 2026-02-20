import Link from 'next/link'
import Image from 'next/image'
import { Crown, ArrowRight } from 'lucide-react'

export default function CallToAction() {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-900">
        <Image
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80"
          alt="Luxury hotel"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-900/95 to-dark-900"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 border-2 border-gold-400 mb-8">
          <Crown className="w-10 h-10 text-gold-400" strokeWidth={1.5} />
        </div>
        <h2 className="text-5xl md:text-7xl font-display font-bold mb-8">
          <span className="text-white">Begin Your</span><br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500">
            Extraordinary Journey
          </span>
        </h2>
        <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto">
          Experience hospitality redefined. Reserve your sanctuary of luxury today.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            href="/booking"
            className="group inline-flex items-center justify-center px-12 py-5 bg-gradient-to-r from-gold-600 to-gold-500 text-dark-900 font-bold text-lg tracking-wider hover:from-gold-500 hover:to-gold-400 transition-all shadow-2xl shadow-gold-600/30 hover:shadow-gold-500/40"
          >
            RESERVE NOW
            <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center px-12 py-5 bg-transparent border-2 border-gold-400 text-gold-400 font-bold text-lg tracking-wider hover:bg-gold-400/10 transition-all"
          >
            DISCOVER MORE
          </Link>
        </div>
      </div>
    </section>
  )
}
