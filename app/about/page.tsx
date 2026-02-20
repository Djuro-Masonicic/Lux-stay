import Image from 'next/image'
import { Building2, Users, Award, Heart } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-dark-900">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-dark-900">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1920&q=80"
            alt="Luxury hotel lobby"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-900/80 to-dark-900"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-white">
          <div className="text-center max-w-4xl px-4">
            <div className="inline-block mb-4">
              <span className="text-gold-400 tracking-[0.3em] text-sm font-medium">ABOUT US</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-display font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
                Legacy of Luxury
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Crafting extraordinary experiences since 2015
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-display font-bold mb-8 text-white">Our Legacy</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Royale was conceived from an unwavering vision: to transcend the boundaries of 
                luxury hospitality by harmonizing world-class amenities with bespoke service. 
                What began as a distinguished boutique property has evolved into a prestigious 
                collection of premium suites across the world's most coveted destinations.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                We believe your accommodation should be more than mere lodging—it should be an 
                immersive experience that elevates your journey, whether undertaken for commerce 
                or leisure.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Every element within our suites is meticulously curated, from the finest Italian 
                linens to cutting-edge smart technology, ensuring your stay transcends all expectations.
              </p>
            </div>
            <div className="relative h-[600px] border border-gold-600/30 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&q=80"
                alt="Luxury hotel"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 border-8 border-gold-600/20 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-dark-800 border-y border-gold-600/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-gold-400 to-gold-600 mb-3">150+</div>
              <div className="text-gray-400 text-lg tracking-wide">Premium Suites</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-gold-400 to-gold-600 mb-3">50K+</div>
              <div className="text-gray-400 text-lg tracking-wide">Distinguished Guests</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-gold-400 to-gold-600 mb-3">25+</div>
              <div className="text-gray-400 text-lg tracking-wide">Global Locations</div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-gold-400 to-gold-600 mb-3">98%</div>
              <div className="text-gray-400 text-lg tracking-wide">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-gold-400 tracking-[0.3em] text-sm font-medium">OUR PRINCIPLES</span>
            </div>
            <h2 className="text-5xl font-display font-bold text-white">Core Values</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-dark-800 border border-gold-600/30 mb-8 group-hover:border-gold-500 transition-colors">
                <Building2 className="w-12 h-12 text-gold-400" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-white">Excellence</h3>
              <p className="text-gray-400 leading-relaxed">
                Unwavering commitment to the highest standards in every aspect of service.
              </p>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-dark-800 border border-gold-600/30 mb-8 group-hover:border-gold-500 transition-colors">
                <Users className="w-12 h-12 text-gold-400" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-white">Community</h3>
              <p className="text-gray-400 leading-relaxed">
                Cultivating spaces where guests experience connection and belonging.
              </p>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-dark-800 border border-gold-600/30 mb-8 group-hover:border-gold-500 transition-colors">
                <Award className="w-12 h-12 text-gold-400" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-white">Innovation</h3>
              <p className="text-gray-400 leading-relaxed">
                Continuous evolution to surpass the expectations of modern travelers.
              </p>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-dark-800 border border-gold-600/30 mb-8 group-hover:border-gold-500 transition-colors">
                <Heart className="w-12 h-12 text-gold-400" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-white">Dedication</h3>
              <p className="text-gray-400 leading-relaxed">
                Personalized attention and authentic hospitality for every guest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-dark-800 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-gold-400 tracking-[0.3em] text-sm font-medium">LEADERSHIP</span>
            </div>
            <h2 className="text-5xl font-display font-bold mb-6 text-white">Our Distinguished Team</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Visionary professionals dedicated to curating unforgettable experiences
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Johnson', role: 'Founder & CEO', image: 'photo-1573496359142-b8d87734a5a2' },
              { name: 'Michael Chen', role: 'Head of Operations', image: 'photo-1556157382-97eda2d62296' },
              { name: 'Emma Williams', role: 'Guest Experience Director', image: 'photo-1580489944761-15a19d654956' }
            ].map((member, idx) => (
              <div key={idx} className="group relative bg-dark-900 border border-gold-600/20 overflow-hidden hover:border-gold-500/50 transition-all">
                <div className="relative h-96">
                  <Image
                    src={`https://images.unsplash.com/${member.image}?w=500&q=80`}
                    alt={member.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent opacity-80"></div>
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-display font-bold mb-2 text-white">{member.name}</h3>
                  <p className="text-gold-400 tracking-wide">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
