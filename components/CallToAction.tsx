import Link from 'next/link'
import { Sparkles } from 'lucide-react'

export default function CallToAction() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-primary-600 to-primary-800">
      <div className="max-w-4xl mx-auto text-center text-white">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
          <Sparkles className="w-8 h-8" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready for an Unforgettable Experience?
        </h2>
        <p className="text-xl md:text-2xl mb-8 text-gray-100">
          Book your luxury stay today and discover what true comfort means
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/booking"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 hover:bg-gray-100 rounded-lg font-semibold text-lg transition shadow-xl hover:shadow-2xl"
          >
            Reserve Your Room
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white hover:bg-white/10 rounded-lg font-semibold text-lg transition"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}
