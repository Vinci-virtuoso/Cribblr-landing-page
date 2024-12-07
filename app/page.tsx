import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { Services } from "@/components/Services"
import { BlogPreview } from "@/components/BlogPreview"
import { Footer } from "@/components/AboutUs"
import { Demo } from "@/components/Demo"
import Integrations from "@/components/Integrations"

export default function Home() {
  return (
    <div className="min-h-screen bg-black dot-pattern">
      <Header />
      <main>
        <Hero />
        <Integrations />
        <Services />
        <Demo />
        <BlogPreview />
      </main>
      <Footer />
    </div>
  )
}
