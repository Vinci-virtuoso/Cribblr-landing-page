import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { Services } from "@/components/Services"
import { BlogPreview } from "@/components/BlogPreview"
import { Footer } from "@/components/Footer"
import Integrations from "@/components/Integrations"
import { MarqueeDemo } from "@/components/Testimonial"
import { Product } from "@/components/Product"
import { Team } from "@/components/Ourteam"
import ContactUs from "@/components/ContactUs"

export default function Home() {
  return (
    <div className="min-h-screen bg-black dot-pattern">
      <Header />
      <main>
        <Hero />
        <Integrations />
        <Services />
        <Product />
        <MarqueeDemo />
        <BlogPreview />
        <Team />
        <ContactUs />
      </main>
      <Footer />
    </div>
  )
}
