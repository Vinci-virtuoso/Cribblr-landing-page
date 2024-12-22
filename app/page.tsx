import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { Services } from "@/components/Services"
import { BlogPreview } from "@/components/BlogPreview"
import { Footer } from "@/components/Footer"
import { Spotlight } from "@/components/Spotlight"
import Integrations from "@/components/Integrations"
import { MarqueeDemo } from "@/components/Testimonial"

export default function Home() {
  return (
    <div className="min-h-screen bg-black dot-pattern">
      <Header />
      <main>
        <Hero />
        <Integrations />
        <Services />
        <Spotlight />
        <MarqueeDemo />
        <BlogPreview />
      </main>
      <Footer />
    </div>
  )
}
