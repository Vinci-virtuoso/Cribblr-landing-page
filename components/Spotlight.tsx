"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./Spotlight.module.css";
import { MobileFlexCards } from "@/components/MobileFlexCards"; 
import { motion } from "framer-motion";

/**
 * Main Spotlight component:
 * - Desktop: shows 3 hover-to-play videos
 * - Mobile: shows 3 expanding-card videos (MobileFlexCards)
 */
export function Spotlight() {
  const [playingVideoIndex, setPlayingVideoIndex] = useState(1);
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
        <div className="hidden md:block">
          <div className="flex flex-col items-center justify-center gap-4 mb-12">
            <motion.h2
              className="text-5xl sm:text-7xl font-bold tracking-tight text-orange-500"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              SPOTLIGHT
            </motion.h2>
            <motion.p
              className="text-lg sm:text-xl text-gray-300 max-w-2xl text-center"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              A closer look at designed workflows built for our clients
            </motion.p>
          </div>

          <div className="relative">
            <div className="flex items-center justify-center gap-8">
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  className={`relative group w-[400px] h-[250px] ${styles.videoHover}`}
                  onMouseEnter={() => handleMouseEnter(index)}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <video
                    ref={(el) => { videoRefs.current[index] = el; }}
                    src={`/resources/path-to-video-${index + 1}.mp4`}
                    muted
                    loop
                    playsInline
                    className={`w-full h-full object-cover rounded-xl transition-filter duration-300 ${
                      playingVideoIndex === index ? "filter-none" : "filter blur-sm"
                    }`}
                  />
                  <motion.div
                    className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300"
                    style={{
                      boxShadow: "0 0 50px 10px rgba(255,255,255,0.2)",
                      zIndex: 2,
                    }}
                  />
                  <motion.p
                    className="text-white font-medium mt-4 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.3 }}
                  >
                    VIDEO {index + 1} DESCRIPTION
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="block md:hidden">
          <MobileFlexCards />
        </div>

        <motion.div
          className="relative mt-64 px-6 py-10 w-full max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-white/10 via-white/20 to-white/5 backdrop-blur-lg shadow-2xl border border-white/20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex flex-col items-center gap-6">
            <motion.h3
              className="text-4xl font-extrabold text-white text-center tracking-wide"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              Ready to Transform Your Business?
            </motion.h3>
            <motion.p
              className="text-lg text-gray-300 text-center leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Get started today with a free consultation and achieve guaranteed results in 60 days.
            </motion.p>
            <motion.button
              className="px-14 py-4 bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 text-white font-semibold rounded-full shadow-lg hover:from-pink-600 hover:to-yellow-600 transition-all transform hover:scale-105"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Claim Your Free Consultation
            </motion.button>
          </div>
          <div
            className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-br from-pink-500 to-transparent rounded-full blur-2xl opacity-60"
          ></div>
          <div
            className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-orange-500 to-transparent rounded-full blur-3xl opacity-50"
          ></div>
        </motion.div>
      </div>
    </section>
  );
}
