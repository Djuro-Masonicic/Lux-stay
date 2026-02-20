import RoomCard from './RoomCard'

const rooms = [
  {
    id: 1,
    name: 'Deluxe Suite',
    description: 'Spacious suite with city views, king bed, and luxury amenities',
    price: 299,
    image: 'photo-1591088398332-8a7791972843?w=800&q=80',
    beds: 1,
    guests: 2,
    size: 450
  },
  {
    id: 2,
    name: 'Executive Room',
    description: 'Perfect for business travelers with workspace and premium facilities',
    price: 249,
    image: 'photo-1582719478250-c89cae4dc85b?w=800&q=80',
    beds: 1,
    guests: 2,
    size: 380
  },
  {
    id: 3,
    name: 'Family Suite',
    description: 'Comfortable accommodation for families with separate living area',
    price: 399,
    image: 'photo-1590490360182-c33d57733427?w=800&q=80',
    beds: 2,
    guests: 4,
    size: 600
  },
  {
    id: 4,
    name: 'Presidential Suite',
    description: 'Ultimate luxury with panoramic views, private terrace, and butler service',
    price: 899,
    image: 'photo-1578683010236-d716f9a3f461?w=800&q=80',
    beds: 2,
    guests: 4,
    size: 1200
  },
  {
    id: 5,
    name: 'Garden View Room',
    description: 'Serene room overlooking lush gardens with queen bed',
    price: 199,
    image: 'photo-1596394516093-501ba68a0ba6?w=800&q=80',
    beds: 1,
    guests: 2,
    size: 320
  },
  {
    id: 6,
    name: 'Penthouse Suite',
    description: 'Top-floor elegance with 360° views and premium amenities',
    price: 699,
    image: 'photo-1595576508898-0ad5c879a061?w=800&q=80',
    beds: 2,
    guests: 3,
    size: 900
  }
]

export default function FeaturedRooms() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Our Premium Rooms
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our selection of carefully designed rooms, each offering unique experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
    </section>
  )
}
