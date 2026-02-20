import { Wifi, Coffee, Dumbbell, Car, UtensilsCrossed, Shield } from 'lucide-react'

const features = [
  {
    icon: Wifi,
    title: 'High-Speed WiFi',
    description: 'Stay connected with complimentary ultra-fast internet'
  },
  {
    icon: UtensilsCrossed,
    title: 'Fine Dining',
    description: 'Gourmet cuisine prepared by world-class chefs'
  },
  {
    icon: Dumbbell,
    title: 'Fitness Center',
    description: 'State-of-the-art gym equipment 24/7'
  },
  {
    icon: Car,
    title: 'Valet Parking',
    description: 'Convenient and secure vehicle parking'
  },
  {
    icon: Coffee,
    title: '24/7 Room Service',
    description: 'Anything you need, whenever you need it'
  },
  {
    icon: Shield,
    title: 'Premium Security',
    description: 'Your safety is our top priority'
  }
]

export default function Features() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            World-Class Amenities
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every detail designed for your comfort and convenience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-lg mb-6 group-hover:bg-primary-600 transition-colors">
                  <Icon className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
