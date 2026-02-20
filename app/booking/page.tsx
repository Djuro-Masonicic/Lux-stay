import BookingForm from '@/components/BookingForm'
import RoomSelector from '@/components/RoomSelector'
import { Shield, Check, CreditCard } from 'lucide-react'

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-dark-900">
      {/* Header */}
      <section className="relative py-24 px-4 bg-dark-900 border-b border-gold-600/20">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(202,138,4,0.2),transparent_50%)]"></div>
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4">
            <span className="text-gold-400 tracking-[0.3em] text-sm font-medium">RESERVATIONS</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-display font-bold mb-6">
            <span className="text-white">Reserve Your</span><br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
              Sanctuary
            </span>
          </h1>
          <p className="text-xl text-gray-300">
            Select your preferred suite and secure your extraordinary stay
          </p>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Room Selection */}
            <div>
              <h2 className="text-4xl font-display font-bold mb-8 text-white">Select Your Suite</h2>
              <RoomSelector />
            </div>

            {/* Booking Form */}
            <div>
              <h2 className="text-4xl font-display font-bold mb-8 text-white">Reservation Details</h2>
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-dark-800 border-t border-gold-600/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 border border-gold-600/30 mb-6 group-hover:border-gold-500 transition-colors">
                <Shield className="w-10 h-10 text-gold-400" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-3 text-white">Secure Booking</h3>
              <p className="text-gray-400">Bank-grade encryption protects your personal information</p>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 border border-gold-600/30 mb-6 group-hover:border-gold-500 transition-colors">
                <Check className="w-10 h-10 text-gold-400" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-3 text-white">Instant Confirmation</h3>
              <p className="text-gray-400">Immediate booking verification and digital confirmation</p>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 border border-gold-600/30 mb-6 group-hover:border-gold-500 transition-colors">
                <CreditCard className="w-10 h-10 text-gold-400" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-3 text-white">Flexible Payment</h3>
              <p className="text-gray-400">Multiple premium payment options for your convenience</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
