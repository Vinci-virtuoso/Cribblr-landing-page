import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const reviews = [
  {
    name: "Kuba",
    username: "@Kubasmide",
    body: "5 Lessons I Learned Automating Credit Card Processing with Voice AI Agents A thread 🧵:",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "CNM",
    username: "@CNeuralmind",
    body: "At @cribblrAI, we don't just build solutions; we craft experiences that empower businesses to do more with AI. Ready to transform your workflows? Let's talk!",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Vinci",
    username: "@vinci_vituoso",
    body: "To stay updated about AI Agents and building advanced workflows that can autonomously work for you follow @cribblrAI",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Kuba",
    username: "@Kubasmide",
    body: "People are comfortable interacting with AI.Yes, really. We've seen it firsthand.Want to see this in action? Check out @cribblrAI",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Vinci",
    username: "@vinci_virtuoso",
    body: "Vertical AI Agent will bring ease in operations to the labor market with advanced AI assistants that will help reduce rigorous workload while being cost effective and very efficient",
    img: "https://avatar.vercel.sh/john",
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
        <div className="text-3xl sm:text-5xl font-bold tracking-tight text-orange-500 mb-12">TESTIMONIALS</div>
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
