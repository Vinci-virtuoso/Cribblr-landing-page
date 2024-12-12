'use client'
import * as React from "react"
import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

declare global {
    interface Window {
      CustomSubstackWidget: any;
      SubstackFeedWidget: any
    }
  }

interface SubstackSignupProps {
  substackUrl?: string;
  placeholder?: string;
  buttonText?: string;
}

export function SubstackSignup({
  substackUrl = "cribblrai.substack.com", 
  placeholder = "Enter your email address",
  buttonText = "Stay Updated!"
}: SubstackSignupProps) {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Dynamically load Substack widget script
    const script = document.createElement('script');
    script.src = "https://substackapi.com/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Configure Substack widget
    window.CustomSubstackWidget = {
      substackUrl: substackUrl,
      placeholder: placeholder,
      buttonText: buttonText,
      theme: "orange",
      onSuccess: () => {
        setIsLoading(false);
        setEmail("");
        // Optional: show success message
      },
      onError: (error: any) => {
        setIsLoading(false);
        setError("Subscription failed. Please try again.");
      }
    };

    // Cleanup script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, [substackUrl, placeholder, buttonText]);

  const handleSubscribe = () => {
    if (!email) {
      setError("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    setError(null);

    // Trigger Substack widget
    const substackWidget = document.querySelector('.substack-widget-container');
    if (substackWidget) {
      const emailInput = substackWidget.querySelector('input[type="email"]') as HTMLInputElement;
      if (emailInput) {
        emailInput.value = email;
        emailInput.dispatchEvent(new Event('input', { bubbles: true }));
        
        const subscribeButton = substackWidget.querySelector('button');
        subscribeButton?.click();
      }
    }
  };

  return (
    <>
      <div id="custom-substack-embed" style={{ display: 'none' }}></div>
      <div className="mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
        <div className="w-full sm:w-auto flex-grow">
          <Input 
            type="email" 
            placeholder={placeholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-[#111111] border-[#222222] text-white placeholder-gray-500 focus:border-orange-500 focus:ring-orange-500"
          />
          {error && (
            <p className="text-red-500 text-sm mt-2">{error}</p>
          )}
        </div>
        <Button
          onClick={handleSubscribe}
          disabled={isLoading}
          className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-orange-500 text-white hover:bg-orange-600 transition-colors disabled:opacity-50"
        >
          {isLoading ? "Subscribing..." : buttonText}
        </Button>
      </div>
      <p className="mt-2 text-sm text-gray-400">
        <span className="text-orange-500 font-semibold">Enter your email address</span> to receive our latest blog posts and updates.
      </p>
    </>
  )
}