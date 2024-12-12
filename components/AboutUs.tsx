import Link from "next/link"
import { Mail, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer id="about-us" className="bg-black border-t border-white/10 py-24 dot-pattern">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="text-5xl sm:text-7xl font-bold tracking-tight text-orange-500">
            ABOUT US
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 items-start">
          <div>
            <Link href="/" className="text-2xl font-bold text-white italic">
              Cribblr<span className="text-orange-500">AI</span>
            </Link>
            <p className="mt-4 text-gray-400 max-w-md">
              CribblrAI is at the forefront of AI-powered business solutions,
              helping companies across various industries to optimize their
              operations and drive growth through cutting-edge technology.
            </p>
          </div>

          <div className="grid gap-6 justify-end">
            <div className="flex items-center gap-2 text-gray-400">
              <Twitter className="w-5 h-5" />
              <a href="https://twitter.com/CribblrAI" className="hover:text-white">
                @CribblrAI
              </a>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Mail className="w-5 h-5" />
              <a href="mailto:Vinci@Cribblr.ai" className="hover:text-white">
                info@Cribblr.ai
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4 text-sm text-gray-400">
          <div className="space-x-6">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
          <p>&copy; {new Date().getFullYear()} CribblrAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
