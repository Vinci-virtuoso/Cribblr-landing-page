"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

const services = [
  {
    id: 1,
    title: "AUTONOMOUS AGENT DEVELOPMENT",
    features: ["Workflow Automation", "Natural Language to SQL", "Complex Data Pipelines", "Self-Adaptive Systems"],
    bgClass: "bg-white/5",
    description: "CribblrAI assists you in identifying and integrating cutting-edge AI solutions, guiding you seamlessly from inception to deployment and beyond.",
  },
  {
    id: 2,
    title: "ENTERPRISE CONSULTING",
    features: ["Strategy Development", "Performance Evaluation", "Use Case Identification", "Feasibility Assessments"],
    bgClass: "bg-black",
    description: "Comprehensive consulting services to help enterprises leverage AI effectively.",
  },
  {
    id: 3,
    title: "CHATBOT DEVELOPMENT",
    features: ["GPT Development", "Secure Solutions", "Knowledge Response", "Model Tuning"],
    bgClass: "bg-emerald-900/80",
    description: "Build sophisticated chatbots powered by the latest AI technologies.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 dot-pattern">
  <div className="container mx-auto px-4">
    <div className="flex items-center justify-center gap-4 mb-12">
      <div className="text-7xl font-bold tracking-tight text-orange-500">SERVICES</div>
    </div>

    <div className="grid gap-8 items-start">
      <div className="relative">
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
          <CarouselContent className="-ml-1 flex items-stretch">
            {services.map((service) => (
              <CarouselItem
                key={service.id}
                className="pl-1 md:basis-1/2 lg:basis-1/3 w-full flex items-stretch"
              >
                <div className="p-1 w-full flex items-stretch">
                  <Card
                    key={service.id}
                    className={cn(
                      "border-0 rounded-2xl overflow-hidden transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg flex flex-col",
                      service.bgClass
                    )}
                  >
                    <CardContent className="p-6 flex-grow flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start mb-4">
                          <div className="px-3 py-1 rounded-full border border-orange-500/30 text-sm">
                            #{service.id}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-orange-500 mb-4">{service.title}</h3>
                        <p className="text-sm text-gray-300 mb-6">{service.description}</p>
                      </div>
                      <div className="grid gap-2">
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
    </div>
  </div>
</section>

  )
}

