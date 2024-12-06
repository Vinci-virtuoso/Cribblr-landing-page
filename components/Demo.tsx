"use client";
import EmblaCarousel from '@/components/ui/EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import { PlayCircle } from 'lucide-react'
import { useState } from 'react'

const DEMO_DATA = [
    {
      id: 1,
      videoUrl: '/path-to-video-1.mp4',
      thumbnailUrl: '/path-to-thumbnail-1.jpg',
      title: "Sales process automation"
    },
    {
      id: 2,
      videoUrl: '/path-to-video-2.mp4',
      thumbnailUrl: '/path-to-thumbnail-2.jpg',
      title: "Onboarding workflow automation"
    },
    // Add more items as needed
  ]

export function Demo() {
    const [currentSlide, setCurrentSlide] = useState(1)
    const totalSlides = 5 // Update this based on your total slides

    const OPTIONS: EmblaOptionsType = {
      loop: true,
      align: "center",
      containScroll: "trimSnaps",
      dragFree: true,
      slidesToScroll: 1,
    }

    const handlePrevClick = () => {
      setCurrentSlide(curr => curr === 1 ? totalSlides : curr - 1)
    }

    const handleNextClick = () => {
      setCurrentSlide(curr => curr === totalSlides ? 1 : curr + 1)
    }
    return (
      <section id="demo" className="py-24 bg-black dot-pattern">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-12">
            <div className="text-5xl sm:text-7xl font-bold tracking-tight text-orange-500">DEMO</div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl" />
            
            <div className="max-w-[1000px] mx-auto">
            <EmblaCarousel 
              slides={DEMO_DATA.map((item, index) => (
                <div key={index} className="flex flex-col gap-4">
                  {/* Image Container */}
                  <div className="relative group cursor-pointer aspect-video">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <PlayCircle className="w-16 h-16 text-orange-500 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                    </div>
                    <img
                      src={`https://picsum.photos/600/350?v=${index}`}
                      alt={`Demo video ${index + 1}`}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  {/* Title Text */}
                  <div className="text-white text-lg font-medium text-center">
                    {item.title}
                  </div>
                </div>
              ))}
              options={OPTIONS}
            />

              {/* Custom Navigation */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <button 
                  onClick={handlePrevClick}
                  className="w-12 h-12 rounded-full bg-[#111111] hover:bg-[#161616] border border-[#222222] transition-colors duration-200 flex items-center justify-center"
                >
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    className="text-orange-500"
                  >
                    <path 
                      d="M15 19l-7-7 7-7" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <div className="flex items-center gap-2 bg-[#111111] border border-[#222222] px-4 py-2 rounded-full">
                  <span className="text-orange-500 font-medium">
                    {currentSlide.toString().padStart(2, '0')}
                  </span>
                  <span className="text-white/50">/</span>
                  <span className="text-white/50">
                    {totalSlides.toString().padStart(2, '0')}
                  </span>
                </div>

                <button 
                  onClick={handleNextClick}
                  className="w-12 h-12 rounded-full bg-orange-500 hover:bg-orange-600 transition-colors duration-200 flex items-center justify-center"
                >
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    className="text-white"
                  >
                    <path 
                      d="M9 5l7 7-7 7" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}