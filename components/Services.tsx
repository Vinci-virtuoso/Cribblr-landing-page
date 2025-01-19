"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils"
import { BorderBeam } from "@/components/ui/border-beam";
import { FcAndroidOs } from "react-icons/fc";
import { FcAssistant } from "react-icons/fc";
import { FcLibrary } from "react-icons/fc";
import { FcSimCardChip } from "react-icons/fc";
import { FcBullish } from "react-icons/fc";
import { FcWorkflow } from "react-icons/fc";

import MorphingText from "@/components/ui/morphing";

const services = [
  {
    title: "Autonomous Agent Development",
    bgClass: "bg-black",
    description: "We assists you in identifying and integrating cutting-edge AI solutions, guiding you seamlessly from inception to deployment and beyond.",
    icon: FcSimCardChip
  },
  {
    title: "Enterprise Consulting", 
    bgClass: "bg-black",
    description: "Comprehensive consulting services to help enterprises leverage AI effectively.",
    icon: FcLibrary
  },
  {
    title: "Chatbot Development",
    bgClass: "bg-black", 
    description: "We build sophisticated chatbots powered by the latest AI technologies.",
    icon: FcAndroidOs
  },
  {
    title: "AI Driven Sales process",
    bgClass: "bg-black",
    description: "Seamlessly integrate AI capabilities into your existing sales process.",
    icon: FcBullish
  },
  {
    title: "AI-powered workflow",
    bgClass: "bg-black",
    description: " We help you develop tailored AI workflows to meet your specific business needs.",
    icon: FcWorkflow
  },
  {
    title: "AI Training & Support",
    bgClass: "bg-black",
    description: "We offer comprehensive training and ongoing support for your team to effectively utilize AI technologies.",
    icon: FcAssistant
  }
]

export function Services() {
  const [hoveredCard, setHoveredCard] = React.useState<number | null>(null);

  return (
    <section id="services" className="py-24 dot-pattern">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-4 mb-12">
        <div className="text-4xl sm:text-7xl font-bold tracking-tight text-orange-500">SERVICES</div>
        </div>

        <div className="grid gap-8 items-start">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.slice(0, 3).map((service, index) => (
                <div 
                  key={index} 
                  className="w-full flex items-stretch relative"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <Card
                    className={cn(
                      "border-0 rounded-2xl overflow-hidden transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg flex flex-col w-full p-4",
                      service.bgClass
                    )} 
                  >
                    <CardContent className="p-6 flex-grow flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white-200 mb-4 flex items-center gap-2">
                          <service.icon className="text-2xl" />
                          {service.title}
                        </h3>
                        <p className="text-sm text-gray-300 mb-6">{service.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                  <BorderBeam size={250} duration={12} delay={9} />
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {services.slice(3).map((service, index) => (
                <div 
                  key={index} 
                  className="w-full flex items-stretch relative"
                  onMouseEnter={() => setHoveredCard(index + 3)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <Card
                    className={cn(
                      "border-0 rounded-2xl overflow-hidden transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg flex flex-col w-full p-4",
                      service.bgClass
                    )}
                  >
                    <CardContent className="p-6 flex-grow flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold text--300 mb-4 flex items-center gap-2">
                          <service.icon className="text-2xl" />
                          {service.title}
                        </h3>
                        <p className="text-sm text-gray-300 mb-6">{service.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                  <BorderBeam size={250} duration={12} delay={9} />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Modified bottom section */}
        <div className="mt-16 flex justify-center">
          <div className="w-full max-w-3xl flex flex-col items-center gap-8">
            <MorphingText
              className="text-white"
              texts={[
                "Free consultation + guaranteed 60 days revenue boost",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
