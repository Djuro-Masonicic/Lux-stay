import Image from 'next/image'
import Link from 'next/link'
import { Users, Bed, Maximize } from 'lucide-react'

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
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={`https://images.unsplash.com/${room.image}`}
          alt={room.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-primary-600 text-white px-4 py-2 rounded-lg font-bold shadow-lg">
          ${room.price}/night
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-gray-900">{room.name}</h3>
        <p className="text-gray-600 mb-4">{room.description}</p>
        
        <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Bed className="w-4 h-4" />
            <span>{room.beds} Bed{room.beds > 1 ? 's' : ''}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{room.guests} Guests</span>
          </div>
          <div className="flex items-center gap-1">
            <Maximize className="w-4 h-4" />
            <span>{room.size} sq ft</span>
          </div>
        </div>
        
        <Link
          href="/booking"
          className="block w-full text-center bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 rounded-lg transition shadow-md hover:shadow-lg"
        >
          Book Now
        </Link>
      </div>
    </div>
  )
}
