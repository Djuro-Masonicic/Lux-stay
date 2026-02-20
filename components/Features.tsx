import { Wifi, Coffee, Dumbbell, Car, UtensilsCrossed, Shield } from 'lucide-react'

const features = [
  {
    icon: Wifi,
    title: 'High-Speed WiFi',
    description: 'Stay connected with complimentary ultra-fast internet throughout your stay'
  },
  {
    icon: UtensilsCrossed,
    title: 'Gourmet Dining',
    description: 'Michelin-starred cuisine prepared by world-renowned chefs'
  },
  {
    icon: Dumbbell,
    title: 'Elite Fitness',
    description: 'State-of-the-art gym with personal trainers available 24/7'
  },
  {
    icon: Car,
    title: 'Valet Service',
    description: 'Premium parking with complimentary luxury vehicle service'
  },
  {
    icon: Coffee,
    title: 'Concierge 24/7',
    description: 'Dedicated personal assistance for every need, any time'
  },
  {
    icon: Shield,
    title: 'Maximum Security',
    description: 'Advanced security systems ensuring your complete privacy and safety'
  }
]

export default function Features() {
  return (
    <section className="py-24 px-4 bg-dark-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-gold-400 tracking-[0.3em] text-sm font-medium">AMENITIES</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
            <span className="text-white">Unparalleled</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
              Excellence
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Every detail meticulously crafted to exceed your expectations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative bg-dark-800 border border-gold-600/20 p-8 hover:border-gold-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-gold-600/10"
              >
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-gold-600/30 group-hover:border-gold-500/50 transition-colors"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 border-b border-l border-gold-600/30 group-hover:border-gold-500/50 transition-colors"></div>
                
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gold-600/20 to-gold-600/5 border border-gold-600/30 mb-6 group-hover:border-gold-500 transition-all">
                    <Icon className="w-8 h-8 text-gold-400 group-hover:text-gold-300 transition-colors" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-4 text-white group-hover:text-gold-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
