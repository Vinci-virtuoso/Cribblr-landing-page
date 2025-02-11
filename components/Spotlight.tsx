"use client";
import { useEffect } from 'react';
import { cn } from "@/lib/utils"
import { ShimmerButton } from "@/components/ui/shimmer-button"


export function Spotlight() {
    useEffect(() => {
      // Add Calendly stylesheet
      const link = document.createElement('link');
      link.href = 'https://assets.calendly.com/assets/external/widget.css';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
  
      // Add Calendly script
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
  
      // Cleanup
      return () => {
        document.head.removeChild(link);
        document.body.removeChild(script);
      };
    }, []);
    const openCalendly = () => {
      // @ts-ignore
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/cribblrai-info'
      });
    };

  return (
    <section id="spotlight" className="pt-48 pb-24 bg-black dot-pattern">
      <div className={cn(
        "w-full min-h-[300px]",
        "flex items-end justify-center pb-16",
      )}>
        <ShimmerButton
          onClick={openCalendly}
          shimmerColor="#ff8c00"
          className="text-base sm:text-lg font-semibold gradient-bg px-6 py-3 sm:px-8 sm:py-4"
        >
          Claim for free
        </ShimmerButton>
      </div>
    </section>
  );
}