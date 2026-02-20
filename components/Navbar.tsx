'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Crown } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-dark-900/95 backdrop-blur-md border-b border-gold-600/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <Crown className="h-10 w-10 text-gold-400 group-hover:text-gold-300 transition-colors" strokeWidth={1.5} />
                <div className="absolute inset-0 blur-xl bg-gold-400 opacity-20 group-hover:opacity-30 transition-opacity"></div>
              </div>
              <div>
                <span className="text-3xl font-display font-bold text-gold-400">ROYALE</span>
                <p className="text-xs text-gold-500/70 tracking-widest">LUXURY STAYS</p>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <Link href="/" className="text-gray-300 hover:text-gold-400 transition px-4 py-2 font-medium tracking-wide">
              HOME
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-gold-400 transition px-4 py-2 font-medium tracking-wide">
              ABOUT
            </Link>
            <Link href="/booking" className="text-gray-300 hover:text-gold-400 transition px-4 py-2 font-medium tracking-wide">
              SUITES
            </Link>
            <Link
              href="/booking"
              className="ml-4 bg-gradient-to-r from-gold-600 to-gold-500 text-dark-900 px-8 py-3 font-bold tracking-wider hover:from-gold-500 hover:to-gold-400 transition shadow-lg shadow-gold-600/20 hover:shadow-xl hover:shadow-gold-500/30"
            >
              RESERVE
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gold-400 hover:text-gold-300 transition"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-dark-900 border-t border-gold-600/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-gold-400 hover:bg-dark-800 transition"
              onClick={() => setIsOpen(false)}
            >
              HOME
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-gold-400 hover:bg-dark-800 transition"
              onClick={() => setIsOpen(false)}
            >
              ABOUT
            </Link>
            <Link
              href="/booking"
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-gold-400 hover:bg-dark-800 transition"
              onClick={() => setIsOpen(false)}
            >
              SUITES
            </Link>
            <Link
              href="/booking"
              className="block px-3 py-2 text-base font-bold bg-gradient-to-r from-gold-600 to-gold-500 text-dark-900 hover:from-gold-500 hover:to-gold-400 transition text-center"
              onClick={() => setIsOpen(false)}
            >
              RESERVE
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
