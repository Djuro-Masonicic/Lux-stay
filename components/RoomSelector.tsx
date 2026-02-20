'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Check } from 'lucide-react'

const rooms = [
  {
    id: 1,
    name: 'Garden View Room',
    price: 199,
    image: 'photo-1596394516093-501ba68a0ba6?w=400&q=80',
    description: 'Cozy room with garden views'
  },
  {
    id: 2,
    name: 'Executive Room',
    price: 249,
    image: 'photo-1582719478250-c89cae4dc85b?w=400&q=80',
    description: 'Perfect for business travelers'
  },
  {
    id: 3,
    name: 'Deluxe Suite',
    price: 299,
    image: 'photo-1591088398332-8a7791972843?w=400&q=80',
    description: 'Spacious suite with city views'
  },
  {
    id: 4,
    name: 'Family Suite',
    price: 399,
    image: 'photo-1590490360182-c33d57733427?w=400&q=80',
    description: 'Perfect for families'
  },
  {
    id: 5,
    name: 'Penthouse Suite',
    price: 699,
    image: 'photo-1595576508898-0ad5c879a061?w=400&q=80',
    description: 'Top-floor luxury'
  },
  {
    id: 6,
    name: 'Presidential Suite',
    price: 899,
    image: 'photo-1578683010236-d716f9a3f461?w=400&q=80',
    description: 'Ultimate luxury experience'
  }
]

export default function RoomSelector() {
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null)

  return (
    <div className="space-y-4">
      {rooms.map((room) => (
        <div
          key={room.id}
          onClick={() => setSelectedRoom(room.id)}
          className={`relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all cursor-pointer ${
            selectedRoom === room.id ? 'ring-4 ring-primary-500' : ''
          }`}
        >
          <div className="flex">
            <div className="relative w-32 h-32 flex-shrink-0">
              <Image
                src={`https://images.unsplash.com/${room.image}`}
                alt={room.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{room.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{room.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary-600">${room.price}</div>
                  <div className="text-xs text-gray-500">per night</div>
                </div>
              </div>
            </div>
            {selectedRoom === room.id && (
              <div className="absolute top-2 right-2 bg-primary-600 text-white rounded-full p-1">
                <Check className="w-5 h-5" />
              </div>
            )}
          </div>
        </div>
      ))}
      {selectedRoom && (
        <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 text-center">
          <p className="text-primary-800 font-semibold">
            ✓ {rooms.find(r => r.id === selectedRoom)?.name} selected
          </p>
        </div>
      )}
    </div>
  )
}
