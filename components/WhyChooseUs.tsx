import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Briefcase, TrendingUp, Cpu, Users, LifeBuoy } from 'lucide-react'

const features = [
  {
    icon: Briefcase,
    title: "Industry Expertise",
    description: "Proven AI solutions tailored to Real Estate, Insurance, Law Firms, eCommerce, and SMEs.",
  },
  {
    icon: TrendingUp,
    title: "Measurable Results",
    description: "Track record of increasing efficiency and revenue while reducing costs.",
  },
  {
    icon: Cpu,
    title: "Cutting-Edge Technology",
    description: "Leveraging the latest advancements in AI to build innovative, future-proof solutions.",
  },
  {
    icon: Users,
    title: "Customer-Centric Focus",
    description: "Every solution is designed with your specific business goals in mind.",
  },
  {
    icon: LifeBuoy,
    title: "End-to-End Support",
    description: "From development to implementation, and beyond—we're with you every step of the way.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center gradient-text">
          Why Businesses Choose CribblrAI
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700">
              <CardHeader>
                <feature.icon className="h-10 w-10 text-orange-500 mb-4" />
                <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button size="lg" className="bg-orange-500 text-white hover:bg-orange-600">
            See How We Can Help Your Business
          </Button>
        </div>
      </div>
    </section>
  )
}

