"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

// If you plan to use icons, uncomment the import statement below and install the icon library.
// Updated import statement
import {AdjustmentsHorizontalIcon, ArrowTrendingUpIcon} from "@heroicons/react/24/outline";

const services = [
  {
    id: 1,
    title: "AUTONOMOUS AGENT DEVELOPMENT",
    features: [
      "Workflow Automation",
      "Natural Language to SQL",
      "Complex Data Pipelines",
      "Self-Adaptive Systems",
    ],
    bgClass: "bg-white/5",
    description:
      "CribblrAI assists you in identifying and integrating cutting-edge AI solutions, guiding you seamlessly from inception to deployment and beyond.",
  },
  {
    id: 2,
    title: "ENTERPRISE CONSULTING",
    features: [
      "Strategy Development",
      "Performance Evaluation",
      "Use Case Identification",
      "Feasibility Assessments",
    ],
    bgClass: "bg-black",
    description:
      "Comprehensive consulting services to help enterprises leverage AI effectively.",
  },
  {
    id: 3,
    title: "CHATBOT DEVELOPMENT",
    features: ["GPT Development", "Secure Solutions", "Knowledge Response", "Model Tuning"],
    bgClass: "bg-emerald-900/80",
    description:
      "Build sophisticated chatbots powered by the latest AI technologies.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        {/* Services Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="text-7xl font-bold tracking-tight text-orange-500">
            SERVICES
          </div>
          <div className="w-12 h-12 rounded-full border-2 border-orange-500 flex items-center justify-center">
            <span className="text-3xl text-orange-500">+</span>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="relative mb-16">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl" />
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            orientation="horizontal"
            className="w-full"
          >
            <CarouselContent className="-ml-1 items-stretch">
              {services.map((service) => (
                <CarouselItem
                  key={service.id}
                  className="pl-1 md:basis-1/2 lg:basis-1/3 w-full flex"
                >
                  <div className="p-1 flex flex-col h-full">
                    <Card
                      className={cn(
                        "border-0 rounded-2xl overflow-hidden h-full flex flex-col",
                        service.bgClass
                      )}
                    >
                      <CardContent className="p-6 flex flex-col flex-grow">
                        <div className="flex justify-between items-start mb-4">
                          <div className="px-3 py-1 rounded-full border border-orange-500/30 text-sm">
                            #{service.id}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-orange-500 mb-4">
                          {service.title}
                        </h3>
                        <p className="text-sm text-gray-300 mb-6">
                          {service.description}
                        </p>
                        <div className="grid gap-2 mt-auto">
                          {service.features.map((feature, index) => (
                            <button
                              key={index}
                              className="w-full px-4 py-2 text-left text-sm bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                            >
                              {feature}
                            </button>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0">
              <CarouselPrevious className="absolute left-0 -translate-x-full" />
              <CarouselNext className="absolute right-0 translate-x-full" />
            </div>
          </Carousel>
        </div>

        {/* New Informational Section */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Text Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              Transform Your Business with AI
            </h2>
            <p className="text-base sm:text-lg text-gray-300 mb-8">
              Our comprehensive suite of AI services is designed to help
              businesses of all sizes harness the power of artificial intelligence.
              From autonomous agents to enterprise consulting and chatbot development,
              we provide end-to-end solutions that drive efficiency and innovation.
            </p>
            <p className="text-base sm:text-lg text-gray-300 mb-8">
              Tailored AI implementations that match your specific business needs
              and objectives. Built to grow with your business, ensuring long-term
              sustainability and success.
            </p>
          </div>

          {/* Right Column - Feature Highlights */}
          <div className="grid gap-6">
            <div className="flex items-start p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white">
                <AdjustmentsHorizontalIcon className="w-6 h-6" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold mb-2 text-white">
                  Customized Solutions
                </h3>
                <p className="text-gray-300">
                  Tailored AI implementations that match your specific business
                  needs and objectives.
                </p>
              </div>
            </div>
            <div className="flex items-start p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white">
                <ArrowTrendingUpIcon className="w-6 h-6" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold mb-2 text-white">
                  Scalable Architecture
                </h3>
                <p className="text-gray-300">
                  Built to grow with your business, ensuring long-term
                  sustainability and success.
                </p>
              </div>
            </div>
            {/* Add more feature blocks as needed */}
          </div>
        </div>
      </div>
    </section>
  );
}
