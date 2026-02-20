'use client'

import { useState } from 'react'
import { Users, Mail, Phone, MessageSquare, Calendar } from 'lucide-react'

export default function BookingForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    guests: '1',
    checkIn: '',
    checkOut: '',
    specialRequests: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would submit to an API
    alert('Booking request submitted! We will contact you shortly to confirm your reservation.')
    console.log('Booking data:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
      <div className="space-y-6">
        {/* Name Fields */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
              placeholder="John"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
              placeholder="Doe"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
            <Mail className="inline w-4 h-4 mr-1" />
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
            placeholder="john.doe@example.com"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
            <Phone className="inline w-4 h-4 mr-1" />
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
            placeholder="+1 (555) 123-4567"
          />
        </div>

        {/* Dates */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="checkIn" className="block text-sm font-semibold text-gray-700 mb-2">
              <Calendar className="inline w-4 h-4 mr-1" />
              Check-in Date *
            </label>
            <input
              type="date"
              id="checkIn"
              name="checkIn"
              required
              value={formData.checkIn}
              onChange={handleChange}
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
            />
          </div>
          <div>
            <label htmlFor="checkOut" className="block text-sm font-semibold text-gray-700 mb-2">
              <Calendar className="inline w-4 h-4 mr-1" />
              Check-out Date *
            </label>
            <input
              type="date"
              id="checkOut"
              name="checkOut"
              required
              value={formData.checkOut}
              onChange={handleChange}
              min={formData.checkIn || new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
            />
          </div>
        </div>

        {/* Guests */}
        <div>
          <label htmlFor="guests" className="block text-sm font-semibold text-gray-700 mb-2">
            <Users className="inline w-4 h-4 mr-1" />
            Number of Guests *
          </label>
          <select
            id="guests"
            name="guests"
            required
            value={formData.guests}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
          >
            {[1, 2, 3, 4, 5, 6].map(num => (
              <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
            ))}
          </select>
        </div>

        {/* Special Requests */}
        <div>
          <label htmlFor="specialRequests" className="block text-sm font-semibold text-gray-700 mb-2">
            <MessageSquare className="inline w-4 h-4 mr-1" />
            Special Requests (Optional)
          </label>
          <textarea
            id="specialRequests"
            name="specialRequests"
            value={formData.specialRequests}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition resize-none"
            placeholder="Any special requirements or requests..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 rounded-lg transition shadow-lg hover:shadow-xl text-lg"
        >
          Complete Booking
        </button>

        <p className="text-sm text-gray-500 text-center">
          By booking, you agree to our terms and conditions
        </p>
      </div>
    </form>
  )
}
