import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ContactForm() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-center gradient-text">
          Let's Build the Future of Your Business
        </h2>
        <p className="text-xl text-gray-300 mb-12 text-center">
          Ready to revolutionize your operations with AI automation? Contact us today for a free consultation.
        </p>
        <form className="max-w-2xl mx-auto space-y-6">
          <Input type="text" placeholder="Name" className="bg-gray-800 border-gray-700 text-white" />
          <Input type="email" placeholder="Email" className="bg-gray-800 border-gray-700 text-white" />
          <Input type="text" placeholder="Business Name" className="bg-gray-800 border-gray-700 text-white" />
          <Select>
            <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
              <SelectValue placeholder="Select Industry" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="real-estate">Real Estate</SelectItem>
              <SelectItem value="insurance">Insurance</SelectItem>
              <SelectItem value="law">Law Firms</SelectItem>
              <SelectItem value="ecommerce">eCommerce</SelectItem>
              <SelectItem value="sme">SME</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          <Textarea placeholder="Brief Description of Needs" className="bg-gray-800 border-gray-700 text-white" />
          <Button type="submit" size="lg" className="w-full bg-orange-500 text-white hover:bg-orange-600">
            Book Your Free Consultation
          </Button>
        </form>
        <div className="mt-8 text-center">
          <Button variant="link" className="text-orange-500 hover:text-orange-400">
            Not ready yet? Join our newsletter to stay updated on AI trends.
          </Button>
        </div>
      </div>
    </section>
  )
}

