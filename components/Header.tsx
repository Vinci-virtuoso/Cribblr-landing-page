"use client"
import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Menu, X } from 'lucide-react'

const navigation = [
  { name: "Services", href: "#services" },
  { name: "Demo", href: "#demo" },
  { name: "Blog", href: "#blog" },
  { name: "About Us", href: "#about-us" },
]

export function Header() {
  const [active, setActive] = React.useState("Services")
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  
  const handleNavClick = (name: string) => {
    setActive(name)
    setIsMenuOpen(false)
    // Ensure smooth scrolling to the section
    const element = document.getElementById(name.toLowerCase().replace(" ", "-"))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }
  
  return (
    <header className="fixed w-full top-0 z-50 dot-pattern">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="backdrop-blur-md bg-black/30 rounded-full py-6 px-4 sm:px-6 py-3 flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center">
            <span className="text-xl sm:text-2xl font-bold text-white italic">
              Cribblr<span className="text-orange-500">AI</span>
            </span>
          </Link>

          {/* Mobile menu button */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Navigation Links */}
          <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:flex items-center space-y-4 sm:space-y-0 sm:space-x-8 absolute sm:relative top-full left-0 right-0 bg-black/90 sm:bg-transparent p-4 sm:p-0 mt-2 sm:mt-0 rounded-lg sm:rounded-none`}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "block text-gray-300 hover:text-white transition-colors",
                  active === item.name && "gradient-text"
                )}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.name)
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}
