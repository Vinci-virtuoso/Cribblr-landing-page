"use client";

function HeroVideoDialogDemo() {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="dark:hidden block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/WVBYuQsqWIQ"
        thumbnailSrc="/images/hero.png"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/WVBYuQsqWIQ"
        thumbnailSrc="/images/hero.png"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}

import { HeroVideoDialog } from "../components/ui/hero-video-dialog";

export function Product() {
  return (
    <section
      id="product"
      className="mt-24 relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-black dot-pattern md:shadow-xl py-12"
    >
      <div className="flex items-center justify-center gap-4 mb-12">
        <div className="relative">
          <span className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-1 bg-orange-500 rounded-full -translate-x-full hidden sm:block"></span>
          <span className="text-5xl sm:text-7xl font-extrabold tracking-tight text-orange-500">PRODUCT</span>
          <span className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-1 bg-orange-500 rounded-full translate-x-full hidden sm:block"></span>
        </div>
      </div>
      <div className="flex flex-col items-center w-full max-w-3xl">
        <HeroVideoDialogDemo />
        <div className="mt-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-2">Introducing Cribby</h3>
          <p className="text-lg text-gray-400 max-w-xl mx-auto">
            An AI voice assistant designed for real estate business operations.
          </p>
        </div>
      </div>
    </section>
  );
}
