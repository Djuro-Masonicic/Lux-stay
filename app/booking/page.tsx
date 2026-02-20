import BookingForm from '@/components/BookingForm'
import RoomSelector from '@/components/RoomSelector'

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Book Your Stay</h1>
          <p className="text-xl text-gray-100">
            Choose your perfect room and reserve your dates
          </p>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Room Selection */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Select Your Room</h2>
              <RoomSelector />
            </div>

            {/* Booking Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Reservation Details</h2>
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl mb-3">🔒</div>
              <h3 className="text-xl font-bold mb-2">Secure Booking</h3>
              <p className="text-gray-600">Your data is protected with SSL encryption</p>
            </div>
            <div>
              <div className="text-4xl mb-3">✓</div>
              <h3 className="text-xl font-bold mb-2">Instant Confirmation</h3>
              <p className="text-gray-600">Receive your booking confirmation immediately</p>
            </div>
            <div>
              <div className="text-4xl mb-3">💳</div>
              <h3 className="text-xl font-bold mb-2">Flexible Payment</h3>
              <p className="text-gray-600">Multiple payment options available</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
