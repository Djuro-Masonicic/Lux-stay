import Link from 'next/link'
import { Hotel, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Hotel className="h-8 w-8 text-primary-500" />
              <span className="text-2xl font-bold text-white">LuxStay</span>
            </div>
            <p className="text-sm">
              Experience luxury and comfort in our carefully curated rooms across prime locations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-primary-400 transition">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary-400 transition">About Us</Link>
              </li>
              <li>
                <Link href="/booking" className="hover:text-primary-400 transition">Book Now</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="hover:text-primary-400 transition cursor-pointer">Room Service</li>
              <li className="hover:text-primary-400 transition cursor-pointer">Concierge</li>
              <li className="hover:text-primary-400 transition cursor-pointer">Spa & Wellness</li>
              <li className="hover:text-primary-400 transition cursor-pointer">Conference Rooms</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@luxstay.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>123 Luxury Ave, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} LuxStay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
