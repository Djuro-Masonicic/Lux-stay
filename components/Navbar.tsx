'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Hotel } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Hotel className="h-8 w-8 text-primary-600" />
              <span className="text-2xl font-bold text-gray-900">LuxStay</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600 transition font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary-600 transition font-medium">
              About Us
            </Link>
            <Link href="/booking" className="text-gray-700 hover:text-primary-600 transition font-medium">
              Rooms
            </Link>
            <Link
              href="/booking"
              className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition font-medium shadow-md hover:shadow-lg"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-600 transition"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/booking"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition"
              onClick={() => setIsOpen(false)}
            >
              Rooms
            </Link>
            <Link
              href="/booking"
              className="block px-3 py-2 rounded-md text-base font-medium bg-primary-600 text-white hover:bg-primary-700 transition text-center"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
