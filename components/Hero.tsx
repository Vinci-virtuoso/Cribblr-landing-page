"use client"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { useEffect } from "react"

export function Hero() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = "//embed.typeform.com/next/embed.js"
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-black dot-pattern overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background gradient effects */}
      <div className="absolute top-1/4 -left-1/4 w-64 h-64 sm:w-96 sm:h-96 gradient-bg rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-1/4 -right-1/4 w-64 h-64 sm:w-96 sm:h-96 gradient-bg rounded-full filter blur-3xl opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h2 className="gradient-text font-medium mb-4 text-xl sm:text-2xl">
          Simplify. Execute. Growth
        </h2>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl mx-auto leading-tight">
          Revolutionizing Business Efficiency with Custom AI Solutions
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-base sm:text-lg">
          AI-powered automation designed to help Real Estate, Insurance, Law Firms, eCommerce, and SMEs save costs, boost productivity, and drive revenue.
        </p>

        {/* Shimmer Button */}
        <div className="flex justify-center">
          <ShimmerButton
            shimmerColor="#ff8c00"
            className="text-base sm:text-lg font-semibold gradient-bg px-6 py-3 sm:px-8 sm:py-4"
            onClick={() => {
              const { tf } = window as any
              tf.createPopup('DFfNp9bb').open()
            }}
          >
            Start Automating Today
          </ShimmerButton>
        </div>
      </div>
    </div>
  )
}
