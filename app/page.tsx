import Hero from '@/components/Hero'
import FeaturedRooms from '@/components/FeaturedRooms'
import Features from '@/components/Features'
import CallToAction from '@/components/CallToAction'

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Features />
      <FeaturedRooms />
      <CallToAction />
    </div>
  )
}
