"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./Spotlight.module.css";
import MorphingText from "@/components/ui/morphing";
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";

export function Spotlight() {
  const [playingVideoIndex, setPlayingVideoIndex] = useState(1); // 0=left, 1=center, 2=right
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (videoRefs.current[playingVideoIndex] === video) {
            if (entry.isIntersecting) {
              video.play().catch(() => {});
            } else {
              video.pause();
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    const currentVideo = videoRefs.current[playingVideoIndex];
    if (currentVideo) {
      observer.observe(currentVideo);
    }

    return () => {
      if (currentVideo) {
        observer.unobserve(currentVideo);
      }
    };
  }, [playingVideoIndex]);

  const handleMouseEnter = (index: number) => {
    setPlayingVideoIndex(index);
    videoRefs.current.forEach((videoEl, i) => {
      if (videoEl && i !== index) {
        videoEl.pause();
      }
    });

    const hoveredVideo = videoRefs.current[index];
    if (hoveredVideo) {
      hoveredVideo.play().catch(() => {});
    }
  };

  return (
    <section id="spotlight" className="py-24 bg-black dot-pattern">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-4 mb-12">
          <div className="text-5xl sm:text-7xl font-bold tracking-tight text-orange-500">
            SPOTLIGHT
          </div>
          <div className="text-lg sm:text-xl text-gray-300 max-w-2xl text-center">
            A closer look at designed workflows built for some of our clients
          </div>
        </div>

        <div className="relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl" />

          <div className="flex items-center justify-center gap-8">
            {/* Left Video */}
            <div className="flex flex-col items-center">
              <div
                className={`relative group ${styles.videoHover} w-[400px] h-[250px]`}
                onMouseEnter={() => handleMouseEnter(0)}
              >
                <video
                  ref={el => { videoRefs.current[0] = el }}
                  src="/resources/path-to-video-1.mp4"
                  muted
                  loop
                  playsInline
                  className={
                    "w-full h-full object-cover rounded-xl transition-filter duration-300 " +
                    (playingVideoIndex === 0 ? "filter-none" : "filter blur-sm")
                  }
                  style={{ zIndex: 1 }}
                />
                <div
                  className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300"
                  style={{
                    boxShadow: "0 0 50px 10px rgba(255,255,255,0.2)",
                    zIndex: 2,
                  }}
                ></div>
              </div>
              <p className="text-white font-medium mt-4 text-center">
                COLD CALLING VOICE AGENT IN ACTION
              </p>
            </div>

            {/* Center Video */}
            <div className="flex flex-col items-center">
              <div
                className={`relative group ${styles.videoHover} w-[400px] h-[250px]`}
                onMouseEnter={() => handleMouseEnter(1)}
              >
                <video
                  ref={el => { videoRefs.current[1] = el }}
                  src="/resources/path-to-video-2.mp4"
                  muted
                  loop
                  playsInline
                  className={
                    "w-full h-full object-cover rounded-xl transition-filter duration-300 " +
                    (playingVideoIndex === 1 ? "filter-none" : "filter blur-sm")
                  }
                  style={{ zIndex: 1 }}
                />
                <div
                  className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300"
                  style={{
                    boxShadow: "0 0 50px 10px rgba(255,255,255,0.2)",
                    zIndex: 2,
                  }}
                ></div>
              </div>
              <p className="text-white font-medium mt-4 text-center">
                LAW FIRM DOCUMENTATION PROCESSING
              </p>
            </div>

            {/* Right Video */}
            <div className="flex flex-col items-center">
              <div
                className={`relative group ${styles.videoHover} w-[400px] h-[250px]`}
                onMouseEnter={() => handleMouseEnter(2)}
              >
                <video
                  ref={el => { videoRefs.current[2] = el }}
                  src="/resources/path-to-video-3.mp4"
                  muted
                  loop
                  playsInline
                  className={
                    "w-full h-full object-cover rounded-xl transition-filter duration-300 " +
                    (playingVideoIndex === 2 ? "filter-none" : "filter blur-sm")
                  }
                  style={{ zIndex: 1 }}
                />
                <div
                  className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300"
                  style={{
                    boxShadow: "0 0 50px 10px rgba(255,255,255,0.2)",
                    zIndex: 2,
                  }}
                ></div>
              </div>
              <p className="text-white font-medium mt-4 text-center">
                SHOPIFY PERSONALIZED RECOMMENDATION
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mt-12 gap-12">
           <div className="w-full max-w-3xl text-center text-white text-2xl"> {/* Added container with max-width and proper text styling */}
           <MorphingText 
               className="mb-18"
               texts={[
                 "Free consultation + guaranteed  60 days revenue boost"
               ]} 
             />
           </div>
           <div className="mt-4"> {/* Added margin-top for spacing */}
           <InteractiveHoverButton 
             className="z-10 relative"
             text="Claim for free"
           />
           </div>
         </div>
        </div>
      </div>
    </section>
  );
}
