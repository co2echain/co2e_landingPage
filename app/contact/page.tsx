import { PageHeader } from "@/components/ui/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, MessageSquare, Building2, Code, HelpCircle } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="pt-20">
      <PageHeader
        title="Get in Touch"
        description="We're here to help you build the future of climate transparency"
        gradient="from-[#00D4FF] to-[#0AD77C]"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@company.com" />
                  </div>
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="Your Company" />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help?" />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Tell us about your project or question..." rows={5} />
                  </div>
                  <Button className="w-full bg-[#00D4FF] hover:bg-[#00D4FF]/90">Send Message</Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Building2 className="h-6 w-6 text-[#00D4FF] mr-2" />
                    Enterprise Sales
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Ready to scale your climate initiatives? Our enterprise team can help you design a custom solution
                    that meets your organization's specific needs.
                  </p>
                  <Button className="bg-[#0AD77C] hover:bg-[#0AD77C]/90">Schedule Demo</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Code className="h-6 w-6 text-[#0AD77C] mr-2" />
                    Developer Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Need technical help integrating with CO2e Chain? Our developer relations team provides comprehensive
                    support for all technical questions.
                  </p>
                  <Button variant="outline" className="border-[#0AD77C] text-[#0AD77C]">
                    Join Discord
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <HelpCircle className="h-6 w-6 text-[#1FBFB8] mr-2" />
                    General Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Have questions about our platform, pricing, or getting started? Our support team is here to help.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 text-[#1FBFB8] mr-2" />
                      <span>support@co2e.cc</span>
                    </div>
                    <div className="flex items-center">
                      <MessageSquare className="h-4 w-4 text-[#1FBFB8] mr-2" />
                      <span>Live chat available 9-5 PST</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-white/50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Offices</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">Global presence, local expertise</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <MapPin className="h-8 w-8 text-[#00D4FF] mx-auto mb-2" />
                <CardTitle>San Francisco</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  123 Climate Street
                  <br />
                  San Francisco, CA 94105
                  <br />
                  United States
                </p>
                <div className="mt-4 space-y-1 text-sm">
                  <div className="flex items-center justify-center">
                    <Phone className="h-4 w-4 text-[#00D4FF] mr-2" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <MapPin className="h-8 w-8 text-[#0AD77C] mx-auto mb-2" />
                <CardTitle>Singapore</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  456 Sustainability Ave
                  <br />
                  Singapore 018989
                  <br />
                  Singapore
                </p>
                <div className="mt-4 space-y-1 text-sm">
                  <div className="flex items-center justify-center">
                    <Phone className="h-4 w-4 text-[#0AD77C] mr-2" />
                    <span>+65 6789 0123</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <MapPin className="h-8 w-8 text-[#1FBFB8] mx-auto mb-2" />
                <CardTitle>London</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  789 Green Finance Rd
                  <br />
                  London EC2A 4DP
                  <br />
                  United Kingdom
                </p>
                <div className="mt-4 space-y-1 text-sm">
                  <div className="flex items-center justify-center">
                    <Phone className="h-4 w-4 text-[#1FBFB8] mr-2" />
                    <span>+44 20 7946 0958</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
