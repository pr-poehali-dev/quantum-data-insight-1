import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { FeaturedDestinations } from "@/components/FeaturedDestinations"
import { Materials } from "@/components/Materials"
import { WhyChooseUs } from "@/components/WhyChooseUs"
import { PopularPackages } from "@/components/PopularPackages"
import { Newsletter } from "@/components/Newsletter"
import { Footer } from "@/components/Footer"

export default function Index() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedDestinations />
      <Materials />
      <WhyChooseUs />
      <PopularPackages />
      <Newsletter />
      <Footer />
    </main>
  )
}