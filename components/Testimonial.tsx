import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const reviews = [
  {
    name: "AnalyticalWells",
    username: "@ebukawells",
    body: "Shoutout to @Cribblrai Their AI automation solutions transformed how my clients and I work in tech sales. Increased efficiency, saved time, and boosted results. If you’re not automating with them, you’re missing out!",
    img: "/images/Screenshot 2025-01-19 185103.png",
  },
  {
    name: "Stephen Foley",
    username: "",
    body: "My client liked the demo and would love to move forward with setting up...It was nice working with the team.",
    img: "/images/Screenshot 2025-01-19 182027.png"
  },
    {
    name: "Pearse Melia",
    username: "",
    body: "The bot is really good. I really like it.",
    img: "/images/image.png",
  },
  

];

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl p-4",
        "bg-black hover:bg-black/80",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-gray-300">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div id="testimonials" className="mt-24 relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-black dot-pattern md:shadow-xl py-12">
        <div className="text-5xl sm:text-7xl font-extrabold tracking-tight text-orange-500">TESTIMONIALS</div>
      <Marquee pauseOnHover className="[--duration:20s]">
        {reviews.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black"></div>
    </div>
  );
}
