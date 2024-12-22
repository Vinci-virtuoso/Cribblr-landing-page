"use client"
import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

const navigation = [
  { name: "Services", href: "#services" },
  { name: "Spotlight", href: "#spotlight" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Blog", href: "#blog" },
]

export function Header() {
  const [active, setActive] = React.useState("")
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      let isActiveFound = false; // Flag to check if any section is active

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id
          const navItem = navigation.find((item) => item.href === `#${id}`)
          if (navItem) {
            setActive(navItem.name)
            isActiveFound = true; // Set flag if an active section is found
          }
        }
      });

      // If no active section is found, reset the active state
      if (!isActiveFound) {
        setActive("");
      }
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    navigation.forEach((item) => {
      const section = document.querySelector(item.href)
      if (section) {
        observer.observe(section)
      }
    })

    return () => observer.disconnect()
  }, [])

  const handleNavClick = (href: string, name: string) => {
    setActive(name)
    setIsMenuOpen(false)

    // Smooth scrolling to the section
    const id = href.slice(1)
    const element = document.querySelector(`#${id}`)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="fixed w-full top-0 z-50 dot-pattern">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="backdrop-blur-md bg-black/30 rounded-full py-6 px-4 sm:px-6 flex items-center justify-between">
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
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Navigation Links */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } sm:flex items-center space-y-4 sm:space-y-0 sm:space-x-8 absolute sm:relative top-full left-0 right-0 bg-black/90 sm:bg-transparent p-4 sm:p-0 mt-2 sm:mt-0 rounded-lg sm:rounded-none`}
          >
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "block text-gray-300 hover:text-white transition-colors",
                  active === item.name && "gradient-text"
                )}
                onClick={() => handleNavClick(item.href, item.name)}
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
