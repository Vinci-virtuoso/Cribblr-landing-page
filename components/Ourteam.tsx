"use client";

import { Gallery4, type Gallery4Props } from "@/components/ui/gallery4";

const demoData: Gallery4Props = {
  items: [
    {
      id: "member-1",
      title: "Aderogba Emmanuel - CEO & Co-Founder",
      description:
        "",
      href: "https://www.linkedin.com/in/adebowaleaderogba/", 
      image: "images/1737398728464.jpg", 
    },
    {
      id: "member-2",
      title: "Akinropo Oluwseun - Head of Product & Co-Founder",
      description:
        "",
      href: "https://www.linkedin.com/in/olabisi-oluwaseun-7a0bb9295/",
      image: "images/image.webp",
    },
    {
      id: "member-3",
      title: "Ekunola Solomon - CTO & Co-Founder",
      description:
        "",
      href: "https://www.linkedin.com/in/olumide-ekunola-82a15019a/",
      image: "images/1697040335959.jpg",
    },
  ],
};


export function Team() {
  return (
    <section
      id="ourteam"
      className="mt-24 relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-black dot-pattern md:shadow-xl py-12"
    >
      <div className="flex items-center justify-center gap-4 mb-12">
        <div className="relative">
          <span className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-1 bg-orange-500 rounded-full -translate-x-full hidden sm:block"></span>
          <span className="text-5xl sm:text-7xl font-extrabold tracking-tight text-orange-500">OUR TEAM</span>
          <span className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-1 bg-orange-500 rounded-full translate-x-full hidden sm:block"></span>
        </div>
      </div>
      <div className="flex flex-col items-center w-full max-w-3xl">
        <h3 className="text-lg text-gray-400 max-w-xl mx-auto text-center">
        Get to know the talented individuals driving Cribblr forward. Our diverse team brings passion, expertise, and dedication to building the future of Intelligent AI Assistants.
        </h3>
      </div>
      <div className="w-full max-w-6xl px-4">
         <Gallery4 {...demoData} />
      </div>
    </section>
  );
}
