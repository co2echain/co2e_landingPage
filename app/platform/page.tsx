import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Shield,
  Zap,
  Globe,
  BarChart3,
  Lock,
  Network,
  CheckCircle,
  ArrowRight,
  Code,
  Building2,
  Leaf,
} from "lucide-react";

export default function PlatformPage() {
  return (
    <div className="pt-20">
      <PageHeader
        title="CO2e Chain Platform"
        description="Enterprise-grade blockchain infrastructure for climate asset management"
        gradient="from-[#00D4FF] to-[#0AD77C]"
      />

      {/* Platform Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Built for Scale, Designed for Trust
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              CO2e Chain provides the infrastructure layer for the next
              generation of climate markets, with a primary focus on tokenizing
              carbon credits certified by Verra and Thailand's TGO. Our platform
              combines enterprise-grade security with public transparency,
              enabling unprecedented trust in climate action verification.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-[#00D4FF]/20">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-[#00D4FF]/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-[#00D4FF]" />
                </div>
                <CardTitle>Enterprise Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Bank-grade security with multi-signature wallets, hardware
                  security modules, and comprehensive audit trails.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#0AD77C] mr-2" />
                    Multi-signature custody
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#0AD77C] mr-2" />
                    Hardware security modules
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#0AD77C] mr-2" />
                    Real-time monitoring
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-[#0AD77C]/20">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-[#0AD77C]/10 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-[#0AD77C]" />
                </div>
                <CardTitle>High Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Optimized for climate asset transactions with sub-second
                  finality and minimal energy consumption.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#0AD77C] mr-2" />
                    {"<3s block time"}
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#0AD77C] mr-2" />
                    10,000+ TPS capacity
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#0AD77C] mr-2" />
                    Carbon-negative consensus
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-[#1FBFB8]/20">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-[#1FBFB8]/10 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-[#1FBFB8]" />
                </div>
                <CardTitle>Global Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Built-in compliance with international standards including
                  CORSIA, EU ETS, and voluntary carbon markets.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#0AD77C] mr-2" />
                    CORSIA compatible
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#0AD77C] mr-2" />
                    EU ETS ready
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#0AD77C] mr-2" />
                    VCM standards
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Asset Types */}
      <section className="py-20 bg-white/50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Universal Asset Support
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              One platform for all climate assets
            </p>
          </div>

          <Tabs defaultValue="carbon" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="carbon">Carbon Credits</TabsTrigger>
              <TabsTrigger value="recs">RECs</TabsTrigger>
              <TabsTrigger value="sdg">SDG Tokens</TabsTrigger>
              <TabsTrigger value="future">Future Assets</TabsTrigger>
            </TabsList>

            <TabsContent value="carbon" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Leaf className="h-6 w-6 text-[#0AD77C] mr-2" />
                    Carbon Credits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">
                        Certification Partners
                      </h4>
                      <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                        <li>• Verra (Global VCS Leader)</li>
                        <li>• TGO - Thailand</li>
                        <li>• Gold Standard</li>
                        <li>• Climate Action Reserve (CAR)</li>
                        <li>• American Carbon Registry (ACR)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Project Types</h4>
                      <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                        <li>• Forestry and Land Use</li>
                        <li>• Renewable Energy</li>
                        <li>• Energy Efficiency</li>
                        <li>• Methane Capture</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="recs" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="h-6 w-6 text-[#00D4FF] mr-2" />
                    Renewable Energy Certificates
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Energy Sources</h4>
                      <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                        <li>• Solar Photovoltaic</li>
                        <li>• Wind Power</li>
                        <li>• Hydroelectric</li>
                        <li>• Biomass</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Tracking Systems</h4>
                      <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                        <li>• I-REC Standard</li>
                        <li>• TIGR (North America)</li>
                        <li>• GO (Europe)</li>
                        <li>• J-Credit (Japan)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="sdg" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Globe className="h-6 w-6 text-[#1FBFB8] mr-2" />
                    SDG Impact Tokens
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Supported SDGs</h4>
                      <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                        <li>• SDG 7: Clean Energy</li>
                        <li>• SDG 13: Climate Action</li>
                        <li>• SDG 15: Life on Land</li>
                        <li>• SDG 6: Clean Water</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Impact Metrics</h4>
                      <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                        <li>• Lives Improved</li>
                        <li>• Jobs Created</li>
                        <li>• Biodiversity Protected</li>
                        <li>• Water Saved</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="future" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Network className="h-6 w-6 text-[#00D4FF] mr-2" />
                    Future Climate Assets
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Emerging Assets</h4>
                      <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                        <li>• Blue Carbon Credits</li>
                        <li>• Soil Carbon Certificates</li>
                        <li>• Biodiversity Credits</li>
                        <li>• Plastic Credits</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">
                        Technology Integration
                      </h4>
                      <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                        <li>• IoT Sensor Verification</li>
                        <li>• Satellite Monitoring</li>
                        <li>• AI Impact Assessment</li>
                        <li>• Smart Contract Automation</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technical Architecture
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Built on proven blockchain technology with climate-specific
              optimizations
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Core Infrastructure
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="h-8 w-8 rounded-full bg-[#00D4FF]/10 flex items-center justify-center mt-1">
                    <Lock className="h-4 w-4 text-[#00D4FF]" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Proof of Stake Consensus</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Energy-efficient consensus mechanism with validator
                      staking requirements
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-8 w-8 rounded-full bg-[#0AD77C]/10 flex items-center justify-center mt-1">
                    <Network className="h-4 w-4 text-[#0AD77C]" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Modular Architecture</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Composable modules for different asset types and
                      compliance requirements
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-8 w-8 rounded-full bg-[#1FBFB8]/10 flex items-center justify-center mt-1">
                    <BarChart3 className="h-4 w-4 text-[#1FBFB8]" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Real-time Analytics</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Built-in analytics and reporting for compliance and impact
                      measurement
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#00D4FF]/5 to-[#0AD77C]/5 rounded-xl p-8 border border-[#00D4FF]/20">
              <h4 className="font-semibold mb-4">Network Statistics</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-mono font-bold text-[#00D4FF]">
                    99.9%
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    Uptime
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-mono font-bold text-[#0AD77C]">
                    {"<3s"}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    Block Time
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-mono font-bold text-[#1FBFB8]">
                    10K+
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    TPS
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-mono font-bold text-[#00D4FF]">
                    156
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    Validators
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Options */}
      <section className="py-20 bg-white/50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Integration Options
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Multiple ways to connect with CO2e Chain
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="h-16 w-16 mx-auto rounded-full bg-[#00D4FF]/10 flex items-center justify-center mb-4">
                  <Code className="h-8 w-8 text-[#00D4FF]" />
                </div>
                <CardTitle>REST API</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Simple HTTP API for quick integration with existing systems
                </p>
                <Button
                  variant="outline"
                  className="border-[#00D4FF] text-[#00D4FF]"
                >
                  View Docs
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="h-16 w-16 mx-auto rounded-full bg-[#0AD77C]/10 flex items-center justify-center mb-4">
                  <Network className="h-8 w-8 text-[#0AD77C]" />
                </div>
                <CardTitle>GraphQL</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Flexible queries for complex data requirements and real-time
                  subscriptions
                </p>
                <Button
                  variant="outline"
                  className="border-[#0AD77C] text-[#0AD77C]"
                >
                  Explore
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="h-16 w-16 mx-auto rounded-full bg-[#1FBFB8]/10 flex items-center justify-center mb-4">
                  <Building2 className="h-8 w-8 text-[#1FBFB8]" />
                </div>
                <CardTitle>Smart Contracts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Direct blockchain interaction for maximum flexibility and
                  control
                </p>
                <Button
                  variant="outline"
                  className="border-[#1FBFB8] text-[#1FBFB8]"
                >
                  Deploy
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build on CO2e Chain?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the growing ecosystem of developers and enterprises building
            the future of climate transparency.
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
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
