"use client";
import { useState } from 'react';
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { PopupButton } from '@typeform/embed-react'

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="relative z-50 w-[95%] max-w-4xl bg-white rounded-lg">
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdJe1TeY2OZ_wRgJPHaS3AmeYREeSxbwRU1jmTlX9pQrw2d9g/viewform?embedded=true"
          width="100%"
          height="600px"
          frameBorder="0"
          className="rounded-lg"
        >
          Loading...
        </iframe>
      </div>
    </div>
  );
};

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-black dot-pattern overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background gradient effects */}
      <div className="absolute top-1/4 -left-1/4 w-64 h-64 sm:w-96 sm:h-96 gradient-bg rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-1/4 -right-1/4 w-64 h-64 sm:w-96 sm:h-96 gradient-bg rounded-full filter blur-3xl opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h2 className="gradient-text font-medium mb-4 text-xl sm:text-2xl">
          Simplify. Execute. Grow
        </h2>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl mx-auto leading-tight">
          Maximize Your Business Revenue With AI Solutions
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-base sm:text-lg">
          Cutting edge technology designed to help Real Estate, Insurance, Law Firms, eCommerce, and SMEs save costs, boost productivity, and drive revenue.
        </p>

        {/* Typeform Button */}
        <div className="flex justify-center">
        <ShimmerButton
          onClick={() => setIsModalOpen(true)}
          shimmerColor="#ff8c00"
          className="text-base sm:text-lg font-semibold gradient-bg px-6 py-3 sm:px-8 sm:py-4"
        >
          Start automating today
        </ShimmerButton>
        </div>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </div>
  )
}