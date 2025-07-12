import Link from "next/link"
import { Mail, Twitter, Linkedin, Instagram, Phone, MapPin } from 'lucide-react' // Added Instagram, Phone, and MapPin

export function Footer() {
  return (
    <footer id="about-us" className="bg-black border-t border-white/10 py-2 dot-pattern">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-4 mb-12">
        </div>

        <div className="grid sm:grid-cols-2 gap-8 items-start">
          <div>
            <Link href="/" className="text-2xl font-bold text-white italic">
              Cribblr<span className="text-orange-500">AI</span>
            </Link>
            <p className="mt-4 text-gray-400 max-w-md">
              Cribblr AI Technologies Ltd is at the forefront of AI-powered business solutions,
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
              <a href="mailto:cribblraitech@cribby.dev" className="hover:text-white">
              cribblraitech@cribby.dev
              </a>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Linkedin className="w-5 h-5" />
              <a href="https://linkedin.com/company/cribblrai" className="hover:text-white"> {/* Added LinkedIn */}
                CribblrAI
              </a>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Instagram className="w-5 h-5" />
              <a href="https://www.instagram.com/cribblrai_1/" className="hover:text-white"> {/* Added Instagram */}
                @CribblrAI
              </a>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Phone className="w-5 h-5" />
              <a href="tel:+2348101717470" className="hover:text-white">
                +2348101717470
              </a>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <MapPin className="w-5 h-5" />
              <span className="hover:text-white">
                30, Omila Alawode street, Ayobo, Lagos
              </span>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4 text-sm text-gray-400">
          <div className="space-x-6">
              Privacy Policy
              Terms of Service
          </div>
          <p>&copy; {new Date().getFullYear()} Cribblr AI Technologies Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
