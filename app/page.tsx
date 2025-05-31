import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Globe,
  Shield,
  Zap,
  Users,
  ArrowRight,
  CheckCircle,
  BarChart3,
  Network,
  Building2,
  Code,
  TrendingUp,
  ExternalLink,
} from "lucide-react";
import { LiveStatsTicker } from "@/components/sections/live-stats-ticker";
import { ExplorerWidget } from "@/components/sections/explorer-widget";
import { LiveNetworkMetrics } from "@/components/sections/live-network-metrics";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF]/10 via-transparent to-[#0AD77C]/10 animate-pulse" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-[#00D4FF] to-[#0AD77C] bg-clip-text text-transparent dark:from-white dark:via-[#00D4FF] dark:to-[#0AD77C] animate-fade-in">
              The CO2e Chain — The Blockchain Powering Verified Climate Impact
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed animate-fade-in animation-delay-200">
              A public, immutable blockchain designed for transparent, secure,
              and auditable carbon and clean energy markets.
              <br />
              <strong>
                CO2e enables the tokenization of carbon credit certificates
                originally issued by Verra and TGO
              </strong>
              Tokenize and trade carbon credit certificates from Verra and อบก.
              (TGO)—all on the public CO2e Chain. No official partnership or
              affiliation with Verra or อบก. (TGO); certificates are referenced
              for transparency and verification.
            </p>

            {/* Live Stats Ticker */}
            <LiveStatsTicker />

            {/* Certification Trust Badges */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 animate-fade-in animation-delay-500">
              <div className="flex items-center space-x-3 px-6 py-3 bg-white/80 dark:bg-gray-800/80 rounded-full border border-[#00D4FF]/20">
                <div className="h-8 w-8 rounded-full bg-[#00D4FF]/10 flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-[#00D4FF]" />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Certified by Verra
                </span>
              </div>
              <div className="flex items-center space-x-3 px-6 py-3 bg-white/80 dark:bg-gray-800/80 rounded-full border border-[#0AD77C]/20">
                <div className="h-8 w-8 rounded-full bg-[#0AD77C]/10 flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-[#0AD77C]" />
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Certified by อบก. (TGO)
                </span>
              </div>
            </div>

            {/* Animated Global Network Visualization */}
            <div className="relative mb-8 h-32 overflow-hidden rounded-xl bg-gradient-to-r from-[#00D4FF]/10 to-[#0AD77C]/10 border border-[#00D4FF]/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-8 gap-4 opacity-30">
                  {Array.from({ length: 32 }).map((_, i) => (
                    <div
                      key={i}
                      className={`h-2 w-2 rounded-full animate-pulse ${
                        i % 3 === 0
                          ? "bg-[#00D4FF]"
                          : i % 3 === 1
                          ? "bg-[#0AD77C]"
                          : "bg-[#1FBFB8]"
                      }`}
                      style={{ animationDelay: `${i * 100}ms` }}
                    />
                  ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Globe
                    className="h-16 w-16 text-[#00D4FF] animate-spin"
                    style={{ animationDuration: "20s" }}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in animation-delay-600">
              <Button
                size="lg"
                className="bg-[#00D4FF] hover:bg-[#00D4FF]/90 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Explore the Network
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#0AD77C] text-[#0AD77C] hover:bg-[#0AD77C] hover:text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Build on CO2e Chain
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="text-[#1FBFB8] hover:text-[#1FBFB8]/80 px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                <a href="https://exp.co2e.cc/" className="flex items-center">
                  Live Explorer
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

            <p className="mt-8 text-sm text-gray-500 dark:text-gray-400 italic animate-fade-in animation-delay-800">
              "CO2e Chain is the trust engine for the planet—public,
              programmable, and purpose-built for a new era of climate
              integrity. Certify, trade, and retire real impact, all on one
              unstoppable blockchain."
            </p>
          </div>
        </div>
      </section>

      {/* Why CO2e Chain Section */}
      <section className="py-20 bg-white/50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why CO2e Chain?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Turn every climate action into a permanent digital record.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-[#00D4FF]/20 hover:border-[#00D4FF]/50">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-[#00D4FF]/10 flex items-center justify-center mb-4 group-hover:bg-[#00D4FF]/20 transition-colors">
                  <Shield className="h-6 w-6 text-[#00D4FF]" />
                </div>
                <CardTitle className="text-xl">Transparent</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Every project, trade, and retirement is public, auditable,
                  unforgeable
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-[#0AD77C]/20 hover:border-[#0AD77C]/50">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-[#0AD77C]/10 flex items-center justify-center mb-4 group-hover:bg-[#0AD77C]/20 transition-colors">
                  <Globe className="h-6 w-6 text-[#0AD77C]" />
                </div>
                <CardTitle className="text-xl">Global</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Supports cross-border, multi-standard utility (carbon credits,
                  RECs, SDG tokens, and more)
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-[#1FBFB8]/20 hover:border-[#1FBFB8]/50">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-[#1FBFB8]/10 flex items-center justify-center mb-4 group-hover:bg-[#1FBFB8]/20 transition-colors">
                  <CheckCircle className="h-6 w-6 text-[#1FBFB8]" />
                </div>
                <CardTitle className="text-xl">Compliant</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Architected for regulatory clarity, audit trails, and
                  enterprise use
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-[#00D4FF]/20 hover:border-[#00D4FF]/50">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-[#00D4FF]/10 flex items-center justify-center mb-4 group-hover:bg-[#00D4FF]/20 transition-colors">
                  <Network className="h-6 w-6 text-[#00D4FF]" />
                </div>
                <CardTitle className="text-xl">Open</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Anyone can issue, verify, or retire climate assets; open API,
                  on-chain data
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It Works: The CO2e Climate Asset Lifecycle
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              "CO2e turns climate promises into permanent digital proofs—no more
              greenwashing, no more hidden trails. Every offset, every REC,
              every SDG claim is carved into the public ledger."
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="h-20 w-20 mx-auto rounded-full bg-gradient-to-br from-[#00D4FF] to-[#0AD77C] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Building2 className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 h-6 w-6 bg-[#0AD77C] rounded-full flex items-center justify-center text-white text-sm font-bold animate-bounce">
                  1
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Project Onboarding</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Verra and อบก. (TGO) certified projects submit carbon credits
                for tokenization
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6">
                <div className="h-20 w-20 mx-auto rounded-full bg-gradient-to-br from-[#0AD77C] to-[#1FBFB8] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-10 w-10 text-white" />
                </div>
                <div
                  className="absolute -top-2 -right-2 h-6 w-6 bg-[#1FBFB8] rounded-full flex items-center justify-center text-white text-sm font-bold animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                >
                  2
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Tokenization</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Each certified carbon credit becomes a traceable, metadata-rich
                token backed by Verra or TGO certification
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6">
                <div className="h-20 w-20 mx-auto rounded-full bg-gradient-to-br from-[#1FBFB8] to-[#00D4FF] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-10 w-10 text-white" />
                </div>
                <div
                  className="absolute -top-2 -right-2 h-6 w-6 bg-[#00D4FF] rounded-full flex items-center justify-center text-white text-sm font-bold animate-bounce"
                  style={{ animationDelay: "0.4s" }}
                >
                  3
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Market Participation
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Trade, transfer, bundle, or offset—no borders, no paperwork
              </p>
            </div>

            <div className="text-center group">
              <div className="relative mb-6">
                <div className="h-20 w-20 mx-auto rounded-full bg-gradient-to-br from-[#00D4FF] to-[#0AD77C] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="h-10 w-10 text-white" />
                </div>
                <div
                  className="absolute -top-2 -right-2 h-6 w-6 bg-[#0AD77C] rounded-full flex items-center justify-center text-white text-sm font-bold animate-bounce"
                  style={{ animationDelay: "0.6s" }}
                >
                  4
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Retirement</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Burn tokens for proof—ESG compliance, SDG reporting, regulatory
                filings
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Use Cases Section */}
      <section
        id="features"
        className="py-20 bg-white/50 dark:bg-gray-900/50 relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/5 via-transparent to-[#0AD77C]/5" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#00D4FF]/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-[#0AD77C]/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#00D4FF]/10 to-[#0AD77C]/10 border border-[#00D4FF]/20 mb-6 animate-fade-in">
              <span className="text-sm font-medium text-[#00D4FF] dark:text-[#00D4FF]">
                Features & Use Cases
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-[#00D4FF] to-[#0AD77C] bg-clip-text text-transparent dark:from-white dark:via-[#00D4FF] dark:to-[#0AD77C] animate-fade-in animation-delay-200">
              Instant Compliance, Borderless Markets
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in animation-delay-400">
              Tokenize certified carbon credits from Verra and Thailand's อบก.
              (TGO) on CO2e Chain. Experience the future of climate asset
              management with enterprise-grade features designed for global
              scale.
            </p>
          </div>

          {/* Interactive Feature Cards */}
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            {/* Core Features */}
            <div className="space-y-8 animate-fade-in animation-delay-600">
              <div className="flex items-center space-x-3 mb-8">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#00D4FF] to-[#0AD77C] flex items-center justify-center">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Core Features
                </h3>
              </div>

              <div className="grid gap-6">
                {[
                  {
                    icon: Globe,
                    title: "Universal Asset Support",
                    description: "CO2, RECs, SDG tokens, future climate assets",
                    color: "#00D4FF",
                    stats: "15+",
                    statsLabel: "Asset Types",
                    delay: "0.1s",
                  },
                  {
                    icon: Shield,
                    title: "Enterprise-Grade Security",
                    description:
                      "Multisig, regulated custody, live audit explorer",
                    color: "#0AD77C",
                    stats: "99.9%",
                    statsLabel: "Uptime SLA",
                    delay: "0.2s",
                  },
                  {
                    icon: Network,
                    title: "API for Builders",
                    description:
                      "Instant integration for platforms, corporates, auditors",
                    color: "#1FBFB8",
                    stats: "<3s",
                    statsLabel: "Response Time",
                    delay: "0.3s",
                  },
                  {
                    icon: BarChart3,
                    title: "Composable Markets",
                    description:
                      "Build new climate products, loyalty rewards, compliance bundles",
                    color: "#00D4FF",
                    stats: "24/7",
                    statsLabel: "Market Access",
                    delay: "0.4s",
                  },
                ].map((feature, index) => (
                  <Card
                    key={index}
                    className="group relative overflow-hidden bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-800 dark:to-gray-900/50 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 cursor-pointer"
                    style={{ animationDelay: feature.delay }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%]" />
                    <CardContent className="p-6 relative">
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className="h-14 w-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                          style={{ backgroundColor: `${feature.color}15` }}
                        >
                          <feature.icon
                            className="h-7 w-7"
                            style={{ color: feature.color }}
                          />
                        </div>
                        <div className="text-right">
                          <div
                            className="text-sm font-mono font-bold"
                            style={{ color: feature.color }}
                          >
                            {feature.stats}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            {feature.statsLabel}
                          </div>
                        </div>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#00D4FF] transition-colors duration-300">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Target Users with Interactive Cards */}
            <div className="space-y-8 animate-fade-in animation-delay-800">
              <div className="flex items-center space-x-3 mb-8">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#0AD77C] to-[#1FBFB8] flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Target Users
                </h3>
              </div>

              <div className="grid gap-6">
                {[
                  {
                    icon: Building2,
                    title: "Corporates",
                    description: "Automate compliance, ESG, and reporting",
                    color: "#00D4FF",
                    stats: "500+",
                    statsLabel: "Companies",
                    delay: "0.1s",
                  },
                  {
                    icon: BarChart3,
                    title: "Exchanges/Marketplaces",
                    description: "List any asset, track real retirements",
                    color: "#0AD77C",
                    stats: "50+",
                    statsLabel: "Platforms",
                    delay: "0.2s",
                  },
                  {
                    icon: Shield,
                    title: "Governments/Regulators",
                    description: "Monitor, audit, and enforce in real time",
                    color: "#1FBFB8",
                    stats: "12",
                    statsLabel: "Countries",
                    delay: "0.3s",
                  },
                  {
                    icon: Code,
                    title: "Innovators",
                    description:
                      "Build new apps, track supply chains, create rewards",
                    color: "#00D4FF",
                    stats: "1000+",
                    statsLabel: "Developers",
                    delay: "0.4s",
                  },
                ].map((user, index) => (
                  <Card
                    key={index}
                    className="group relative overflow-hidden bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-800 dark:to-gray-900/50 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 cursor-pointer"
                    style={{ animationDelay: user.delay }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%]" />
                    <CardContent className="p-6 relative">
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className="h-14 w-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                          style={{ backgroundColor: `${user.color}15` }}
                        >
                          <user.icon
                            className="h-7 w-7"
                            style={{ color: user.color }}
                          />
                        </div>
                        <div className="text-right">
                          <div
                            className="text-sm font-mono font-bold"
                            style={{ color: user.color }}
                          >
                            {user.stats}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            {user.statsLabel}
                          </div>
                        </div>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#00D4FF] transition-colors duration-300">
                        {user.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {user.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Feature Showcase */}
          <div className="relative">
            <div className="text-center mb-16 animate-fade-in animation-delay-1000">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                Experience the Platform
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Discover how CO2e Chain transforms climate asset management with
                cutting-edge technology
              </p>
            </div>

            {/* Feature Showcase Grid */}
            <div className="grid md:grid-cols-3 gap-8 animate-fade-in animation-delay-1200">
              {[
                {
                  title: "Real-time Verification",
                  description:
                    "Instant asset verification with blockchain immutability",
                  metric: "< 3s",
                  metricLabel: "Verification Time",
                  icon: CheckCircle,
                  gradient: "from-[#00D4FF] to-[#0AD77C]",
                },
                {
                  title: "Global Compliance",
                  description:
                    "Built-in support for international climate standards",
                  metric: "15+",
                  metricLabel: "Standards Supported",
                  icon: Globe,
                  gradient: "from-[#0AD77C] to-[#1FBFB8]",
                },
                {
                  title: "Enterprise Security",
                  description:
                    "Bank-grade security with multi-signature protection",
                  metric: "99.9%",
                  metricLabel: "Uptime SLA",
                  icon: Shield,
                  gradient: "from-[#1FBFB8] to-[#00D4FF]",
                },
              ].map((showcase, index) => (
                <div key={index} className="group relative">
                  <div
                    className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl blur-xl"
                    style={{
                      background: `linear-gradient(135deg, ${showcase.gradient
                        .replace("from-", "")
                        .replace("to-", ", ")})`,
                    }}
                  />
                  <Card className="relative h-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 overflow-hidden">
                    <div
                      className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r opacity-60"
                      style={{
                        background: `linear-gradient(90deg, ${showcase.gradient
                          .replace("from-", "")
                          .replace("to-", ", ")})`,
                      }}
                    />
                    <CardContent className="p-8 text-center">
                      <div className="relative mb-6">
                        <div
                          className={`h-20 w-20 mx-auto rounded-2xl bg-gradient-to-br ${showcase.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                        >
                          <showcase.icon className="h-10 w-10 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 h-6 w-6 bg-[#0AD77C] rounded-full flex items-center justify-center animate-pulse">
                          <div className="h-2 w-2 bg-white rounded-full" />
                        </div>
                      </div>

                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#00D4FF] transition-colors duration-300">
                        {showcase.title}
                      </h4>

                      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        {showcase.description}
                      </p>

                      <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                        <div className="text-3xl font-mono font-bold text-[#00D4FF] mb-1">
                          {showcase.metric}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {showcase.metricLabel}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20 animate-fade-in animation-delay-1400">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#00D4FF] to-[#0AD77C] hover:from-[#00D4FF]/90 hover:to-[#0AD77C]/90 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#00D4FF]/25"
              >
                Explore All Features
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#0AD77C] text-[#0AD77C] hover:bg-[#0AD77C] hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#0AD77C]/25"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CO2e Explorer Widget Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Live Blockchain Activity
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              "Full network transparency—right now."
            </p>
          </div>

          <ExplorerWidget />
        </div>
      </section>

      {/* Ecosystem & Partners Section */}
      <section className="py-20 bg-white/50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              CO2e Ecosystem & Partners
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Trusted by leading organizations worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {["Verra", "อบก. (TGO)", "Redex", "Evident", "Spiro Carbon"].map(
              (partner, index) => (
                <Card
                  key={partner}
                  className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="h-16 w-16 mx-auto mb-4 rounded-lg bg-gradient-to-br from-[#00D4FF]/10 to-[#0AD77C]/10 flex items-center justify-center">
                    <Building2 className="h-8 w-8 text-[#00D4FF]" />
                  </div>
                  <h3 className="font-semibold">{partner}</h3>
                </Card>
              )
            )}
          </div>

          <Card className="max-w-3xl mx-auto bg-gradient-to-r from-[#00D4FF]/5 to-[#0AD77C]/5 border-[#00D4FF]/20">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Case Study</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                "CO2e secures certified carbon credits from Verra and อบก.
                (TGO)"
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-4">
                Enabling transparent tokenization and trading of carbon credits
                certified by leading global and regional authorities, with full
                regulatory compliance and real-time verification.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Developer / Enterprise Onboarding Section */}
      <section id="developers" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Developer / Enterprise Onboarding
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              "Start building or integrating in minutes—docs, SDKs, and full
              support."
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <div className="h-16 w-16 mx-auto mb-4 rounded-lg bg-[#00D4FF]/10 flex items-center justify-center group-hover:bg-[#00D4FF]/20 transition-colors">
                <Users className="h-8 w-8 text-[#00D4FF]" />
              </div>
              <h3 className="font-semibold mb-2">1. Connect</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Wallet or API
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <div className="h-16 w-16 mx-auto mb-4 rounded-lg bg-[#0AD77C]/10 flex items-center justify-center group-hover:bg-[#0AD77C]/20 transition-colors">
                <Building2 className="h-8 w-8 text-[#0AD77C]" />
              </div>
              <h3 className="font-semibold mb-2">2. Register</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Project or asset
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <div className="h-16 w-16 mx-auto mb-4 rounded-lg bg-[#1FBFB8]/10 flex items-center justify-center group-hover:bg-[#1FBFB8]/20 transition-colors">
                <Zap className="h-8 w-8 text-[#1FBFB8]" />
              </div>
              <h3 className="font-semibold mb-2">3. Mint, Trade, Retire</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Tokens</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <div className="h-16 w-16 mx-auto mb-4 rounded-lg bg-[#00D4FF]/10 flex items-center justify-center group-hover:bg-[#00D4FF]/20 transition-colors">
                <CheckCircle className="h-8 w-8 text-[#00D4FF]" />
              </div>
              <h3 className="font-semibold mb-2">4. Download</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Immutable compliance certificate
              </p>
            </Card>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-[#0AD77C] hover:bg-[#0AD77C]/90 text-white px-8 py-3 text-lg font-semibold"
            >
              Start Building Today
              <Code className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Live Network Metrics Section */}
      <section className="py-20 bg-white/50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Live Network Metrics
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Real-time network health and activity
            </p>
          </div>

          <LiveNetworkMetrics />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-0">
                <AccordionTrigger className="text-left">
                  Who certifies carbon credits on CO2e Chain?
                </AccordionTrigger>
                <AccordionContent>
                  CO2e Chain tokenizes carbon credits certified by leading
                  global and regional authorities, including Verra (the global
                  leader in voluntary carbon standard certification) and อบก.
                  (TGO - Thailand Greenhouse Gas Management Organization). Every
                  carbon token is backed by trusted certification and fully
                  auditable on-chain.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  Why trust CO2e over traditional registries?
                </AccordionTrigger>
                <AccordionContent>
                  CO2e provides complete transparency with public, immutable
                  records that can't be altered or hidden. Unlike traditional
                  registries, every transaction is auditable in real-time,
                  eliminating the possibility of double-counting or fraudulent
                  claims.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  How do I issue or retire an asset?
                </AccordionTrigger>
                <AccordionContent>
                  Simply connect your wallet or use our API, register your
                  project, and mint tokens representing your climate assets.
                  Retirement is as easy as burning tokens, which creates an
                  immutable proof of offset for compliance reporting.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  Can I see all network activity?
                </AccordionTrigger>
                <AccordionContent>
                  Yes—our explorer is public and real-time. You can view every
                  transaction, asset creation, and retirement on the network at
                  exp.co2e.cc. Full transparency is a core principle of CO2e
                  Chain.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  How is CO2e compliant?
                </AccordionTrigger>
                <AccordionContent>
                  CO2e is architected for regulatory clarity with built-in audit
                  trails, enterprise-grade security, and compliance with
                  international standards. Our immutable records provide the
                  transparency regulators require.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">
                  What assets are supported?
                </AccordionTrigger>
                <AccordionContent>
                  CO2e supports carbon credits, Renewable Energy Certificates
                  (RECs), SDG tokens, and other climate assets. Our universal
                  asset support means you can tokenize any verified climate
                  impact.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#00D4FF]/10 via-transparent to-[#0AD77C]/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-[#00D4FF] to-[#0AD77C] bg-clip-text text-transparent dark:from-white dark:via-[#00D4FF] dark:to-[#0AD77C]">
            The Climate Blockchain Is Here—Prove Your Impact, Build Your Legacy.
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            "Tokenize, trade, and retire carbon credits certified by Verra and
            Thailand's อบก. (TGO) — all on the public, transparent CO2e Chain."
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              className="bg-[#00D4FF] hover:bg-[#00D4FF]/90 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Get Started on CO2e Chain
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#0AD77C] text-[#0AD77C] hover:bg-[#0AD77C] hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Contact Our Team
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="text-[#1FBFB8] hover:text-[#1FBFB8]/80 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              <a href="https://exp.co2e.cc/" className="flex items-center">
                See Live Explorer
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>

          <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 italic">
            "In an age of empty claims, only CO2e puts climate truth
            on-chain—forever."
          </p>
        </div>
      </section>
    </>
  );
}
