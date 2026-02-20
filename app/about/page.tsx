import Image from 'next/image'
import { Building2, Users, Award, Heart } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 h-full flex items-center justify-center text-white">
          <div className="text-center max-w-4xl px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About LuxStay</h1>
            <p className="text-xl md:text-2xl text-gray-100">
              Creating unforgettable experiences since 2015
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Story</h2>
              <p className="text-lg text-gray-700 mb-4">
                LuxStay was born from a simple vision: to redefine luxury accommodation by 
                combining world-class amenities with personalized service. What started as a 
                single boutique property has grown into a curated collection of premium rooms 
                across prime locations.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                We believe that where you stay should be more than just a place to sleep. 
                It should be an experience that enriches your journey, whether you're traveling 
                for business or pleasure.
              </p>
              <p className="text-lg text-gray-700">
                Every detail in our rooms is carefully considered, from the finest linens to 
                the latest technology, ensuring your stay is nothing short of exceptional.
              </p>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80"
                alt="Luxury hotel"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-600 mb-2">150+</div>
              <div className="text-gray-600 text-lg">Premium Rooms</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-600 mb-2">50K+</div>
              <div className="text-gray-600 text-lg">Happy Guests</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-600 mb-2">25+</div>
              <div className="text-gray-600 text-lg">Locations</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-600 mb-2">98%</div>
              <div className="text-gray-600 text-lg">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 rounded-full mb-6">
                <Building2 className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Excellence</h3>
              <p className="text-gray-600">
                We maintain the highest standards in every aspect of our service and facilities.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 rounded-full mb-6">
                <Users className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Community</h3>
              <p className="text-gray-600">
                We create spaces where guests feel welcome, connected, and at home.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 rounded-full mb-6">
                <Award className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Innovation</h3>
              <p className="text-gray-600">
                We constantly evolve to meet and exceed modern travelers' expectations.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 rounded-full mb-6">
                <Heart className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Care</h3>
              <p className="text-gray-600">
                Every guest receives personalized attention and genuine hospitality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Meet Our Team</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Dedicated professionals committed to making your stay memorable
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Johnson', role: 'Founder & CEO', image: 'photo-1573496359142-b8d87734a5a2' },
              { name: 'Michael Chen', role: 'Head of Operations', image: 'photo-1556157382-97eda2d62296' },
              { name: 'Emma Williams', role: 'Guest Experience Director', image: 'photo-1580489944761-15a19d654956' }
            ].map((member, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-80">
                  <Image
                    src={`https://images.unsplash.com/${member.image}?w=400&q=80`}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{member.name}</h3>
                  <p className="text-primary-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
