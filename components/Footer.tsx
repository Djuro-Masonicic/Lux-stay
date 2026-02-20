import Link from 'next/link'
import { Crown, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-gray-300 border-t border-gold-600/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <Crown className="h-10 w-10 text-gold-400" strokeWidth={1.5} />
              <div>
                <span className="text-3xl font-display font-bold text-gold-400">ROYALE</span>
                <p className="text-xs text-gold-500/70 tracking-widest">LUXURY STAYS</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Redefining luxury hospitality with unparalleled service and exquisite accommodations in the world's most prestigious locations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 border border-gold-600/30 hover:border-gold-500 flex items-center justify-center hover:bg-gold-600/10 transition-all">
                <Facebook className="w-5 h-5 text-gold-400" />
              </a>
              <a href="#" className="w-10 h-10 border border-gold-600/30 hover:border-gold-500 flex items-center justify-center hover:bg-gold-600/10 transition-all">
                <Instagram className="w-5 h-5 text-gold-400" />
              </a>
              <a href="#" className="w-10 h-10 border border-gold-600/30 hover:border-gold-500 flex items-center justify-center hover:bg-gold-600/10 transition-all">
                <Twitter className="w-5 h-5 text-gold-400" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold-400 font-display font-bold text-xl mb-6">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-gold-400 transition tracking-wide">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-gold-400 transition tracking-wide">About Us</Link>
              </li>
              <li>
                <Link href="/booking" className="text-gray-400 hover:text-gold-400 transition tracking-wide">Suites & Rooms</Link>
              </li>
              <li>
                <Link href="/booking" className="text-gray-400 hover:text-gold-400 transition tracking-wide">Reservations</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-gold-400 font-display font-bold text-xl mb-6">Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-400 hover:text-gold-400 transition cursor-pointer tracking-wide">Concierge</li>
              <li className="text-gray-400 hover:text-gold-400 transition cursor-pointer tracking-wide">Room Service</li>
              <li className="text-gray-400 hover:text-gold-400 transition cursor-pointer tracking-wide">Spa & Wellness</li>
              <li className="text-gray-400 hover:text-gold-400 transition cursor-pointer tracking-wide">Private Events</li>
              <li className="text-gray-400 hover:text-gold-400 transition cursor-pointer tracking-wide">Airport Transfer</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gold-400 font-display font-bold text-xl mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gold-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">123 Luxury Boulevard<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gold-400 flex-shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gold-400 flex-shrink-0" />
                <span className="text-gray-400">info@royale.luxury</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold-600/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Royale Luxury Stays. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-gold-400 transition text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gold-400 transition text-sm">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-gold-400 transition text-sm">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
