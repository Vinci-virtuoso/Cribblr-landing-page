import Link from "next/link"
import { ArrowRight } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const posts = [
  {
    date: "18th October, 2024",
    title: "Can Large Language Models (LLMs) truly reason?",
    href: "/blog/llm-reasoning"
  },
  {
    date: "11th October, 2024",
    title: "How Large Language Models Can Transform Your Business Operations.",
    href: "/blog/llm-business-transformation"
  },
]

export function BlogPreview() {
  return (
    <section id="blog" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 mb-12">
          <div className="text-5xl sm:text-7xl font-bold tracking-tight text-orange-500">BLOG</div>
          <div className="w-12 h-12 rounded-full border-2 border-orange-500 flex items-center justify-center">
            <span className="text-3xl text-orange-500">+</span>
          </div>
        </div>
        
        <div className="space-y-6 max-w-4xl">
          {posts.map((post, index) => (
            <Link
              key={index}
              href={post.href}
              className="block p-6 rounded-xl bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-2 mb-4 md:mb-0">
                  <p className="text-sm text-orange-400 font-medium">{post.date}</p>
                  <h3 className="text-xl font-semibold text-white group-hover:text-orange-300 transition-colors">{post.title}</h3>
                </div>
                <div className="flex items-center gap-2 text-orange-500 group-hover:text-orange-300">
                  <span className="text-sm font-medium">Read More</span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <div className="w-full sm:w-auto flex-grow">
            <Input 
              type="email" 
              placeholder="Enter your email address" 
              className="w-full bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-orange-500 focus:ring-orange-500"
            />
          </div>
          <Button
            className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-orange-500 text-white hover:bg-orange-600 transition-colors"
          >
            Stay Updated!
          </Button>
        </div>
        <p className="mt-2 text-sm text-gray-400">
          <span className="text-orange-500 font-semibold">Enter your email address</span> to receive our latest blog posts and updates.
        </p>
      </div>
    </section>
  )
}

