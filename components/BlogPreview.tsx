'use client'
import * as React from "react"
import { useState } from "react"
import Link from "next/link"
import { Plus, Minus } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const posts = [
  {
    date: "18th October, 2024",
    title: "Can Large Language Models (LLMs) truly reason?",
    href: "/blog/llm-reasoning",
    excerpt: "Explore the fascinating world of LLMs and their reasoning capabilities. This article delves into the current state of AI reasoning, its limitations, and future possibilities.",
  },
  {
    date: "11th October, 2024",
    title: "How Large Language Models Can Transform Your Business Operations.",
    href: "/blog/llm-business-transformation",
    excerpt: "Discover how implementing LLMs in your business can streamline operations, enhance customer service, and drive innovation across various departments.",
  },
]

export function BlogPreview() {
  const [expandedPost, setExpandedPost] = useState<number | null>(null)

  return (
    <section id="blog" className="py-24 bg-black dot-pattern">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 mb-12">
          <div className="text-5xl sm:text-7xl font-bold tracking-tight text-orange-500">BLOG</div>
        </div>
        
        <div className="space-y-4 max-w-4xl">
          {posts.map((post, index) => (
            <div key={index}>
              <div
                onClick={() => setExpandedPost(expandedPost === index ? null : index)}
                className="block p-6 rounded-t-xl bg-[#111111] hover:bg-[#161616] border border-[#222222] transition-all duration-300 ease-in-out cursor-pointer"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div className="space-y-2 mb-4 md:mb-0">
                    <p className="text-sm text-orange-400 font-medium">{post.date}</p>
                    <h3 className="text-xl font-semibold text-white group-hover:text-orange-300 transition-colors">{post.title}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-orange-500">
                    {expandedPost === index ? (
                      <Minus className="w-5 h-5 transform hover:scale-125 transition-transform" />
                    ) : (
                      <Plus className="w-5 h-5 transform hover:scale-125 transition-transform" />
                    )}
                  </div>
                </div>
              </div>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  expandedPost === index ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
                }`}
                >
                <div className="p-6 bg-[#161616] border-x border-b border-[#222222] rounded-b-xl">
                  <p className="text-gray-300">
                    {post.excerpt}
                  </p>
                  <Link
                    href={post.href}
                    className="inline-block mt-4 text-orange-500 hover:text-orange-400 font-medium"
                  >
                    Read full article →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <div className="w-full sm:w-auto flex-grow">
            <Input 
              type="email" 
              placeholder="Enter your email address" 
              className="w-full bg-[#111111] border-[#222222] text-white placeholder-gray-500 focus:border-orange-500 focus:ring-orange-500"
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