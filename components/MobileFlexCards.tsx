"use client";
import React, { useRef, useState, useEffect } from "react";
import styles from "./MobileFlexCards.module.css";

export function MobileFlexCards() {
  const [activeCard, setActiveCard] = useState<"c1" | "c2" | "c3">("c1");

  const video1Ref = useRef<HTMLVideoElement | null>(null);
  const video2Ref = useRef<HTMLVideoElement | null>(null);
  const video3Ref = useRef<HTMLVideoElement | null>(null);

  const label1Ref = useRef<HTMLLabelElement | null>(null);
  const label2Ref = useRef<HTMLLabelElement | null>(null);
  const label3Ref = useRef<HTMLLabelElement | null>(null);

  useEffect(() => {
    if (activeCard === "c1") {
      video1Ref.current?.play();
      video2Ref.current?.pause();
      video3Ref.current?.pause();
      label1Ref.current?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    } else if (activeCard === "c2") {
      video1Ref.current?.pause();
      video2Ref.current?.play();
      video3Ref.current?.pause();
      label2Ref.current?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    } else if (activeCard === "c3") {
      video1Ref.current?.pause();
      video2Ref.current?.pause();
      video3Ref.current?.play();
      label3Ref.current?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  }, [activeCard]);

  const handleChange = (card: "c1" | "c2" | "c3") => setActiveCard(card);

  return (
    <section id="spotlight" className="py-24 bg-black dot-pattern">
      <div className="container mx-auto px-4">
        {/* Title and Subtitle */}
        <div className="flex flex-col items-center justify-center gap-4 mb-12">
          <div className="text-5xl sm:text-7xl font-bold tracking-tight text-orange-500">
            SPOTLIGHT
          </div>
          <div className="text-lg sm:text-xl text-gray-300 max-w-2xl text-center">
            A closer look at designed workflows built for some of our clients
          </div>
        </div>

        {/* Cards Section */}
        <div className={styles.flexCardsSection}>
          <div className={styles.container}>
            {/* Card #1 */}
            <input
              type="radio"
              name="slide"
              id="c1"
              checked={activeCard === "c1"}
              onChange={() => handleChange("c1")}
            />
            <label htmlFor="c1" className={styles.card} ref={label1Ref}>
              <video
                ref={video1Ref}
                className={styles.cardVideo}
                src="/resources/path-to-video-1.mp4"
                poster="/resources/path-to-image-1.png"
                muted
              />
              <div className={styles.description}>
                <h4>VIDEO ONE</h4>
                <p>Brief description for the first video content</p>
              </div>
            </label>

            {/* Card #2 */}
            <input
              type="radio"
              name="slide"
              id="c2"
              checked={activeCard === "c2"}
              onChange={() => handleChange("c2")}
            />
            <label htmlFor="c2" className={styles.card} ref={label2Ref}>
              <video
                ref={video2Ref}
                className={styles.cardVideo}
                src="/resources/path-to-video-2.mp4"
                poster="/resources/path-to-image-2.png"
                muted
              />
              <div className={styles.description}>
                <h4>VIDEO TWO</h4>
                <p>Brief description for the second video content</p>
              </div>
            </label>

            {/* Card #3 */}
            <input
              type="radio"
              name="slide"
              id="c3"
              checked={activeCard === "c3"}
              onChange={() => handleChange("c3")}
            />
            <label htmlFor="c3" className={styles.card} ref={label3Ref}>
              <video
                ref={video3Ref}
                className={styles.cardVideo}
                src="/resources/path-to-video-3.mp4"
                poster="/resources/path-to-image-3.png"
                muted
              />
              <div className={styles.description}>
                <h4>VIDEO THREE</h4>
                <p>Brief description for the third video content</p>
              </div>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}
