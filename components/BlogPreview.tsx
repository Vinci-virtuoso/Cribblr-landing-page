'use client'
import * as React from "react"
import {useEffect } from "react"

export function BlogPreview() {

  useEffect(() => {
    // Dynamically load Substack widget and feed script
    const script = document.createElement('script')
    script.src = "https://substackapi.com/widget.js"
    script.async = true
    script.id = "substack-widget-script"

    const feedScript = document.createElement('script')
    feedScript.src = "https://substackapi.com/embeds/feed.js"
    feedScript.async = true
    feedScript.id = "substack-feed-script"

    const style = document.createElement('style')
    document.head.appendChild(style)

    // Configure Substack widgets
    window.CustomSubstackWidget = {
      substackUrl: "cribblrai.substack.com",
      placeholder: "Enter your email address",
      buttonText: "Stay Updated!",
      theme: "orange"
    }

    window.SubstackFeedWidget = {
      substackUrl: "cribblrai.substack.com",
      colors: {

        primary: "#F85000",
  
        secondary: "#FFFFFF",
  
        background: "#000000",
  
      },
      posts: 2
    }

    // Ensure we don't add duplicate scripts
    if (!document.getElementById('substack-widget-script')) {
      document.body.appendChild(script)
    }
    if (!document.getElementById('substack-feed-script')) {
      document.body.appendChild(feedScript)
    }

    // Cleanup on component unmount
    return () => {
      if (script.parentNode) script.parentNode.removeChild(script)
      if (feedScript.parentNode) feedScript.parentNode.removeChild(feedScript)
      document.head.removeChild(style)
    }
  }, [])

return (
  <section id="blog" className="py-24 bg-black dot-pattern">
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-center gap-4 mb-12">
        <div className="text-5xl sm:text-7xl font-bold tracking-tight text-orange-500">BLOG</div>
      </div>
      <div className="flex flex-col items-center mt-12"> {/* New container for alignment */}
        {/* Substack feed embed */}
        <div id="substack-feed-embed" className="mt-12 w-full dot-pattern"></div>
        <div className="flex flex-col items-center mt-12"> {/* Updated container for alignment */}
        {/* Substack widget embed */}
        <div id="custom-substack-embed" className="w-full dot-pattern"></div>
        <p className="mt-2 text-sm text-gray-400 text-center"> {/* Added text-center for alignment */}
          <span className="text-orange-500 font-semibold">Enter your email address</span> to receive our latest blog posts and updates.
        </p>
        </div>
      </div>
    </div>
  </section>
);
}
