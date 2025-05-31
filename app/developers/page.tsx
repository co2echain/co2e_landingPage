import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Code,
  Book,
  Terminal,
  Zap,
  Shield,
  ArrowRight,
  ExternalLink,
  Copy,
  CheckCircle,
  Github,
} from "lucide-react";

export default function DevelopersPage() {
  return (
    <div className="pt-20">
      <PageHeader
        title="Developer Hub"
        description="Build the future of climate transparency with CO2e Chain APIs and SDKs"
        gradient="from-[#00D4FF] to-[#0AD77C]"
      />

      {/* Quick Start */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get Started in Minutes
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Integrate certified carbon credit tokenization into your
              application with just a few lines of code. Work with carbon
              credits certified by Verra and Thailand's TGO.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="h-16 w-16 mx-auto rounded-full bg-[#00D4FF]/10 flex items-center justify-center mb-4">
                  <Code className="h-8 w-8 text-[#00D4FF]" />
                </div>
                <CardTitle>1. Get API Key</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Sign up for free and get your API key instantly
                </p>
                <Button className="bg-[#00D4FF] hover:bg-[#00D4FF]/90">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="h-16 w-16 mx-auto rounded-full bg-[#0AD77C]/10 flex items-center justify-center mb-4">
                  <Terminal className="h-8 w-8 text-[#0AD77C]" />
                </div>
                <CardTitle>2. Install SDK</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Choose from our SDKs for JavaScript, Python, Go, or Rust
                </p>
                <Button
                  variant="outline"
                  className="border-[#0AD77C] text-[#0AD77C]"
                >
                  View SDKs
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="h-16 w-16 mx-auto rounded-full bg-[#1FBFB8]/10 flex items-center justify-center mb-4">
                  <Zap className="h-8 w-8 text-[#1FBFB8]" />
                </div>
                <CardTitle>3. Start Building</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Mint, trade, and retire climate assets programmatically
                </p>
                <Button
                  variant="outline"
                  className="border-[#1FBFB8] text-[#1FBFB8]"
                >
                  See Examples
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Code Example */}
          <Card className="max-w-4xl mx-auto bg-gray-900 text-white">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white flex items-center">
                  <Terminal className="h-5 w-5 mr-2" />
                  Quick Example
                </CardTitle>
                <Badge
                  variant="outline"
                  className="border-[#0AD77C] text-[#0AD77C]"
                >
                  JavaScript
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <pre className="text-sm overflow-x-auto">
                <code>{`import { CO2eChain } from '@co2e/sdk';

const client = new CO2eChain({
  apiKey: 'your-api-key',
  network: 'mainnet'
});

// Mint a carbon credit
const credit = await client.assets.mint({
  type: 'carbon-credit',
  amount: 100,
  projectId: 'forest-conservation-001',
  metadata: {
    vintage: '2024',
    certifier: 'Verra',
    standard: 'VCS',
    methodology: 'VM0007',
    tgoId: 'TH-2024-001' // For TGO certified credits
  }
});

console.log('Minted credit:', credit.id);`}</code>
              </pre>
              <div className="flex justify-end mt-4">
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-gray-400 hover:text-white"
                >
                  <Copy className="h-4 w-4 mr-2" />
                  Copy
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* API Documentation */}
      <section className="py-20 bg-white/50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              API Documentation
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Comprehensive guides and references for all CO2e Chain APIs
            </p>
          </div>

          <Tabs defaultValue="rest" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="rest">REST API</TabsTrigger>
              <TabsTrigger value="graphql">GraphQL</TabsTrigger>
              <TabsTrigger value="websocket">WebSocket</TabsTrigger>
            </TabsList>

            <TabsContent value="rest" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Core Endpoints</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded">
                        <div>
                          <Badge variant="outline" className="mr-2">
                            GET
                          </Badge>
                          <code className="text-sm">/api/v1/assets</code>
                        </div>
                        <Button size="sm" variant="ghost">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded">
                        <div>
                          <Badge variant="outline" className="mr-2">
                            POST
                          </Badge>
                          <code className="text-sm">/api/v1/assets/mint</code>
                        </div>
                        <Button size="sm" variant="ghost">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded">
                        <div>
                          <Badge variant="outline" className="mr-2">
                            POST
                          </Badge>
                          <code className="text-sm">/api/v1/assets/retire</code>
                        </div>
                        <Button size="sm" variant="ghost">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Authentication</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      All API requests require authentication using API keys
                      passed in the Authorization header.
                    </p>
                    <div className="bg-gray-900 text-white p-4 rounded text-sm">
                      <code>Authorization: Bearer your-api-key</code>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="graphql" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>GraphQL Playground</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Explore our GraphQL API with real-time queries and
                    subscriptions.
                  </p>
                  <div className="bg-gray-900 text-white p-4 rounded text-sm mb-4">
                    <code>{`query GetAssets($filter: AssetFilter) {
  assets(filter: $filter) {
    id
    type
    amount
    status
    project {
      name
      location
    }
    transactions {
      hash
      timestamp
    }
  }
}`}</code>
                  </div>
                  <Button className="bg-[#00D4FF] hover:bg-[#00D4FF]/90">
                    Open Playground
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="websocket" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Real-time Updates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Subscribe to real-time events for asset minting, trading,
                    and retirement.
                  </p>
                  <div className="bg-gray-900 text-white p-4 rounded text-sm mb-4">
                    <code>{`const ws = new WebSocket('wss://api.co2e.cc/ws');

ws.on('message', (data) => {
  const event = JSON.parse(data);
  if (event.type === 'asset.minted') {
    console.log('New asset minted:', event.data);
  }
});`}</code>
                  </div>
                  <Button
                    variant="outline"
                    className="border-[#0AD77C] text-[#0AD77C]"
                  >
                    View Examples
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* SDKs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Official SDKs
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Native libraries for your favorite programming language
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "JavaScript", icon: "🟨", version: "v2.1.0" },
              { name: "Python", icon: "🐍", version: "v1.8.2" },
              { name: "Go", icon: "🔵", version: "v1.5.1" },
              { name: "Rust", icon: "🦀", version: "v0.9.3" },
            ].map((sdk, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardHeader>
                  <div className="text-4xl mb-2">{sdk.icon}</div>
                  <CardTitle>{sdk.name}</CardTitle>
                  <Badge variant="outline">{sdk.version}</Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button
                      size="sm"
                      className="w-full bg-[#00D4FF] hover:bg-[#00D4FF]/90"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </Button>
                    <Button size="sm" variant="outline" className="w-full">
                      Documentation
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Resources */}
      <section className="py-20 bg-white/50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Developer Resources
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <Book className="h-8 w-8 text-[#00D4FF] mb-2" />
                <CardTitle>Guides & Tutorials</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#0AD77C] mr-2" />
                    Getting Started Guide
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#0AD77C] mr-2" />
                    Asset Lifecycle Tutorial
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#0AD77C] mr-2" />
                    Smart Contract Examples
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#0AD77C] mr-2" />
                    Best Practices
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <Terminal className="h-8 w-8 text-[#0AD77C] mb-2" />
                <CardTitle>Tools & Utilities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#0AD77C] mr-2" />
                    CLI Tool
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#0AD77C] mr-2" />
                    Postman Collection
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#0AD77C] mr-2" />
                    Testing Framework
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#0AD77C] mr-2" />
                    Code Generators
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <Shield className="h-8 w-8 text-[#1FBFB8] mb-2" />
                <CardTitle>Security & Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#0AD77C] mr-2" />
                    Security Guidelines
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#0AD77C] mr-2" />
                    Audit Reports
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#0AD77C] mr-2" />
                    Compliance Checklist
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-[#0AD77C] mr-2" />
                    Bug Bounty Program
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join the Developer Community
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Connect with other developers building on CO2e Chain. Get help,
            share ideas, and contribute to the ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#00D4FF] hover:bg-[#00D4FF]/90">
              Join Discord
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#0AD77C] text-[#0AD77C] hover:bg-[#0AD77C] hover:text-white"
            >
              GitHub Discussions
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
