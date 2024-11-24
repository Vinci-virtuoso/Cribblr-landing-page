import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote: "CribblrAI's automation tools cut our processing time by 50%. Highly recommend!",
    author: "John Doe, CEO of RealEstate Co.",
  },
  {
    quote: "The custom AI solution they built helped us save $20K monthly in operational costs.",
    author: "Jane Smith, CTO of InsureTech",
  },
  {
    quote: "Our law firm's efficiency skyrocketed thanks to CribblrAI's document analysis tools.",
    author: "Mike Johnson, Partner at Legal Eagles LLP",
  },
]

export function Testimonials() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center gradient-text">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700">
              <CardContent className="pt-6">
                <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                <p className="text-orange-500 font-semibold">{testimonial.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

