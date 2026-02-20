import Image from 'next/image'
import Link from 'next/link'
import { Users, Bed, Maximize, Sparkles } from 'lucide-react'

interface Room {
  id: number
  name: string
  description: string
  price: number
  image: string
  beds: number
  guests: number
  size: number
}

interface RoomCardProps {
  room: Room
}

export default function RoomCard({ room }: RoomCardProps) {
  return (
    <div className="group relative bg-dark-800 border border-gold-600/20 overflow-hidden transition-all duration-500 hover:border-gold-500/50 hover:shadow-2xl hover:shadow-gold-600/20">
      <div className="relative h-80 overflow-hidden">
        <Image
          src={`https://images.unsplash.com/${room.image}`}
          alt={room.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent opacity-60"></div>
        
        {/* Price Tag */}
        <div className="absolute top-6 right-6 bg-gradient-to-r from-gold-600 to-gold-500 text-dark-900 px-6 py-3 font-display font-bold text-2xl shadow-xl">
          ${room.price}
          <span className="text-sm font-normal block text-dark-800">per night</span>
        </div>

        {/* Premium Badge */}
        <div className="absolute top-6 left-6 flex items-center space-x-2 bg-dark-900/80 backdrop-blur-sm border border-gold-600/30 px-3 py-1.5 rounded-full">
          <Sparkles className="w-3 h-3 text-gold-400" />
          <span className="text-gold-400 text-xs font-medium tracking-wider">PREMIUM</span>
        </div>
      </div>
      
      <div className="p-8">
        <h3 className="text-3xl font-display font-bold mb-3 text-white group-hover:text-gold-400 transition-colors">
          {room.name}
        </h3>
        <p className="text-gray-400 mb-6 leading-relaxed">{room.description}</p>
        
        {/* Amenities */}
        <div className="flex items-center gap-6 mb-8 pb-6 border-b border-gold-600/20">
          <div className="flex items-center gap-2">
            <Bed className="w-5 h-5 text-gold-400" />
            <span className="text-gray-300 font-medium">{room.beds} Bed{room.beds > 1 ? 's' : ''}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-gold-400" />
            <span className="text-gray-300 font-medium">{room.guests} Guest{room.guests > 1 ? 's' : ''}</span>
          </div>
          <div className="flex items-center gap-2">
            <Maximize className="w-5 h-5 text-gold-400" />
            <span className="text-gray-300 font-medium">{room.size} sq ft</span>
          </div>
        </div>
        
        <Link
          href="/booking"
          className="block w-full text-center bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-dark-900 font-bold py-4 tracking-wider transition-all shadow-lg shadow-gold-600/20 hover:shadow-xl hover:shadow-gold-500/30 group-hover:scale-105 duration-300"
        >
          RESERVE NOW
        </Link>
      </div>
    </div>
  )
}
