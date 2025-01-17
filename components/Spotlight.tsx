"use client";
import { useState } from 'react';
import { cn } from "@/lib/utils"
import { ShimmerButton } from "@/components/ui/shimmer-button"

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

export function Spotlight() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="spotlight" className="pt-48 pb-24 bg-black dot-pattern">
      <div className={cn(
        "w-full min-h-[300px]",
        "flex items-end justify-center pb-16",
      )}>
        <ShimmerButton
          onClick={() => setIsModalOpen(true)}
          shimmerColor="#ff8c00"
          className="text-base sm:text-lg font-semibold gradient-bg px-6 py-3 sm:px-8 sm:py-4"
        >
          Claim for free
        </ShimmerButton>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}