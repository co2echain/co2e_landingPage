import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Target, Globe, Award, ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-20">
      <PageHeader
        title="About CO2e Chain"
        description="Building the future of climate transparency through blockchain technology"
        gradient="from-[#00D4FF] to-[#0AD77C]"
      />

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              To create a transparent, immutable, and globally accessible
              infrastructure for climate action verification. We believe that
              trust is the foundation of effective climate action, and
              blockchain technology provides the transparency needed to build
              that trust at scale. CO2e Chain specializes in the tokenization of
              carbon credits certified by leading authorities like Verra and
              Thailand's TGO.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="h-16 w-16 mx-auto rounded-full bg-[#00D4FF]/10 flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-[#00D4FF]" />
                </div>
                <CardTitle>Transparency First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Every climate action is recorded immutably on-chain, creating
                  an unforgeable record of environmental impact.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="h-16 w-16 mx-auto rounded-full bg-[#0AD77C]/10 flex items-center justify-center mb-4">
                  <Globe className="h-8 w-8 text-[#0AD77C]" />
                </div>
                <CardTitle>Global Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Breaking down barriers to climate markets, enabling
                  participation from anywhere in the world.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="h-16 w-16 mx-auto rounded-full bg-[#1FBFB8]/10 flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-[#1FBFB8]" />
                </div>
                <CardTitle>Trust Through Tech</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Leveraging blockchain's immutable nature to eliminate
                  greenwashing and build genuine climate accountability.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white/50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Story
            </h2>

            <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300">
              <p className="text-xl leading-relaxed mb-6">
                CO2e Chain was born from a simple observation: the climate
                crisis demands unprecedented transparency and accountability,
                yet traditional carbon markets operate in opacity.
              </p>

              <p className="leading-relaxed mb-6">
                Founded in 2023 by a team of blockchain engineers, climate
                scientists, and policy experts, we recognized that blockchain
                technology could solve the fundamental trust issues plaguing
                climate markets. Double-counting, greenwashing, and lack of
                verification were not just technical problems—they were barriers
                to the massive scale of climate action our planet needs.
              </p>

              <p className="leading-relaxed mb-6">
                Our focus on carbon credit tokenization began with partnerships
                with leading certification authorities. By working directly with
                Verra (the global leader in voluntary carbon standards) and TGO.
                (TGO - Thailand's Greenhouse Gas Management Organization), we
                ensure that every tokenized carbon credit maintains the highest
                standards of verification and authenticity.
              </p>

              <p className="leading-relaxed mb-6">
                Today, CO2e Chain powers climate asset verification across
                multiple countries, supporting everything from carbon credits to
                renewable energy certificates. Our network has verified over
                89,000 tonnes of CO2 equivalent and certified over 1.3 million
                MWh of clean energy.
              </p>

              <p className="leading-relaxed">
                But we're just getting started. Our vision is a world where
                every climate claim is backed by immutable, public proof—where
                trust in climate action is built into the infrastructure itself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Creator Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Created by BlockEdge
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              The technology company pioneering blockchain solutions for climate
              action
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-[#0AD77C]/20">
              <CardHeader>
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-[#00D4FF]/20 to-[#0AD77C]/20 mb-4 overflow-hidden flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-16 w-16 text-[#0AD77C]"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 3L4 9V21H20V9L12 3Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 21V12H15V21"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 9H20"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 3L12 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 7C13.1046 7 14 6.10457 14 5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5C10 6.10457 10.8954 7 12 7Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <CardTitle className="text-2xl">BlockEdge</CardTitle>
                <Badge
                  variant="outline"
                  className="border-[#00D4FF] text-[#00D4FF]"
                >
                  Creator of CO2e Chain
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                  BlockEdge is a carbon credit marketplace and tokenization
                  platform, enabling individuals and businesses to easily
                  deposit verified carbon credits into a global pool and receive
                  CO2e tokens in return. Buy, trade, or retire your CO2e tokens
                  for real climate impact.
                </p>
                <div className="flex justify-center space-x-4">
                  <Button className="bg-[#00D4FF] hover:bg-[#00D4FF]/90">
                    Visit BlockEdge
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#0AD77C] text-[#0AD77C] hover:bg-[#0AD77C] hover:text-white"
                  >
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white/50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-[#00D4FF]">
                  Radical Transparency
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We believe that climate action must be verifiable by anyone,
                  anywhere, at any time.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-[#0AD77C]">
                  Scientific Rigor
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Every protocol and standard we implement is grounded in
                  peer-reviewed climate science.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-[#1FBFB8]">
                  Global Inclusion
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Climate action should be accessible to everyone, regardless of
                  geography or economic status.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-[#00D4FF]">
                  Long-term Thinking
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We build infrastructure for the next century of climate
                  action, not just today's needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you're a developer, enterprise, or climate advocate, there's
            a place for you in the CO2e ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#00D4FF] hover:bg-[#00D4FF]/90">
              Start Building
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#0AD77C] text-[#0AD77C] hover:bg-[#0AD77C] hover:text-white"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
