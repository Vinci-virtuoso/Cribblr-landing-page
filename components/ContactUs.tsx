"use client";
import React, { useState } from "react"; // Import useState
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Zap, Check } from "lucide-react";


export default function ContactUs() {
  const [isSubmitted, setIsSubmitted] = useState(false); // Add state for submission status

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setIsSubmitted(false); // Reset submission status on new attempt
    const timestamp = new Date().toISOString();
    const payload = {
      fullName: (form.fullName as HTMLInputElement).value,
      companyName: (form.companyName as HTMLInputElement).value,
      emailAddress: (form.emailAddress as HTMLInputElement).value,
      phoneNumber: (form.phoneNumber as HTMLInputElement).value,
      projectScope: (form.projectScope as HTMLTextAreaElement).value,
      timestamp,
    };
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (res.ok) {
      // alert("Submitted successfully"); // Remove alert
      form.reset();
      setIsSubmitted(true); // Set submitted state to true
    } else {
      alert("Submission failed"); // Keep failure alert for now
    }
  };
  return (
    <section  id="ContactUs" className="mt-24 relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-black dot-pattern md:shadow-xl py-12">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Side */}
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
            Exploring Our AI Automation<br className="hidden md:block" />
            Services?
          </h1>
          <h2 className="text-3xl md:text-4xl font-extrabold text-orange-500 mb-4">
            Share Your Project Details!
          </h2>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-orange-500">
              <Zap className="w-7 h-7" fill="#ff9100" />
            </span>
            <span className="text-lg font-medium text-orange-400">
              We respond promptly, typically immediately!
            </span>
          </div>
          <Card className="bg-[#18181b] border-none rounded-xl p-6 mb-6">
            <ul className="space-y-3 text-base text-gray-200">
              <li className="flex items-start gap-2">
                <Check className="mt-1 text-orange-500" />
                <span>
                  We’ll hop on a call and hear out your idea, and how we can turn it to a reality.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-1 text-orange-500" />
                <span>
                  We’ll provide free consultation + 60 days guarantee revenue boost when YOU implement our AI solutions.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="mt-1 text-orange-500" />
                <span>
                Comprehensive insights and reporting to track project progress.
                </span>
              </li>
            </ul>
          </Card>
          <div className="text-base text-gray-400 mt-2">
            Alternatively, contact us via
            or email <span className="text-orange-500 font-semibold">cribblraitech@cribby.dev</span>
          </div>
        </div>
        {/* Right Side - Form */}
        <form
          className="mt-24 relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-black dot-pattern md:shadow-xl py-12"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-6 w-full max-w-md mx-auto">
            <div className="flex items-center gap-3 w-full">
              <Label htmlFor="fullName" className="font-semibold text-gray-300 min-w-[120px]">
                Full Name<span className="text-orange-500">*</span>
              </Label>
              <Input
                id="fullName"
                name="fullName"
                placeholder="Enter Full Name"
                required
                className="bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-orange-500 focus:ring-orange-500 flex-1 w-full"
              />
            </div>
            <div className="flex items-center gap-3 w-full">
              <Label htmlFor="companyName" className="font-semibold text-gray-300 min-w-[120px]">
                Company Name<span className="text-orange-500">*</span>
              </Label>
              <Input
                id="companyName"
                name="companyName"
                placeholder="Enter Company Name"
                required
                className="bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-orange-500 focus:ring-orange-500 flex-1 w-full"
              />
            </div>
            <div className="flex items-center gap-3 w-full">
              <Label htmlFor="emailAddress" className="font-semibold text-gray-300 min-w-[120px]">
                Email Address<span className="text-orange-500">*</span>
              </Label>
              <Input
                id="emailAddress"
                name="emailAddress"
                type="email"
                placeholder="Enter Email Address"
                required
                className="bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-orange-500 focus:ring-orange-500 flex-1 w-full"
              />
            </div>
            <div className="flex items-center gap-3 w-full">
              <Label htmlFor="phoneNumber" className="font-semibold text-gray-300 min-w-[120px]">
                Phone Number<span className="text-orange-500">*</span>
              </Label>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Phone Number"
                required
                className="bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-orange-500 focus:ring-orange-500 flex-1 w-full"
              />
            </div>
            <div className="flex items-center gap-3 w-full">
              <Label htmlFor="projectScope" className="font-semibold text-gray-300 min-w-[120px]">
                Project Scope<span className="text-orange-500">*</span>
              </Label>
              <Textarea
                id="projectScope"
                name="projectScope"
                placeholder="Enter Project Scope"
                required
                className="bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-orange-500 focus:ring-orange-500 flex-1 w-full"
                style={{ resize: 'horizontal' }}
              />
            </div>
          </div>
            {isSubmitted ? (
              <div className="mt-6 flex items-center gap-2 text-orange-500 font-semibold">
                <Check className="w-5 h-5" />
                <span>Submitted Successfully!</span>
              </div>
            ) : (
              <Button
                type="submit"
                className="mt-6 w-fit px-6 h-10 flex items-center justify-center rounded-full bg-orange-500 hover:bg-orange-600 text-white text-base font-semibold transition-colors gap-2"
                aria-label="Submit"
              >
                Submit
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Button>
            )}
        </form>
      </div>
    </section>
  );
}
