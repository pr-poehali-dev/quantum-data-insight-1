import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { FeaturedDestinations } from "@/components/FeaturedDestinations"
import { Materials } from "@/components/Materials"
import { Branding } from "@/components/Branding"
import { Production } from "@/components/Production"
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
      <WhyChooseUs />
      <Materials />
      <Branding />
      <Production />
      <PopularPackages />
      <Newsletter />
      <Footer />
    </main>
  )
}