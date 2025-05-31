import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, ArrowRight, ExternalLink } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF]/10 via-transparent to-[#0AD77C]/10 animate-pulse" />
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-[#00D4FF] to-[#0AD77C] bg-clip-text text-transparent dark:from-white dark:via-[#00D4FF] dark:to-[#0AD77C] animate-fade-in">
            The CO2e Chain — The Blockchain Powering Verified Climate Impact
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed animate-fade-in animation-delay-200">
            A public, immutable blockchain designed for transparent, secure, and auditable carbon and clean energy
            markets.
            <br />
            Certify, trade, and retire climate assets—globally, instantly, and with total trust.
          </p>

          {/* Live Stats Ticker */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 animate-fade-in animation-delay-400">
            <Card className="bg-white/50 dark:bg-gray-900/50 backdrop-blur border-[#00D4FF]/20">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-mono font-bold text-[#00D4FF] animate-pulse">2,847</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Blocks Produced</div>
              </CardContent>
            </Card>
            <Card className="bg-white/50 dark:bg-gray-900/50 backdrop-blur border-[#0AD77C]/20">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-mono font-bold text-[#0AD77C] animate-pulse">156</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Projects Onboarded</div>
              </CardContent>
            </Card>
            <Card className="bg-white/50 dark:bg-gray-900/50 backdrop-blur border-[#1FBFB8]/20">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-mono font-bold text-[#1FBFB8] animate-pulse">89.2K</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Tonnes Offset</div>
              </CardContent>
            </Card>
            <Card className="bg-white/50 dark:bg-gray-900/50 backdrop-blur border-[#00D4FF]/20">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-mono font-bold text-[#00D4FF] animate-pulse">1.3M</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">MWh Certified</div>
              </CardContent>
            </Card>
          </div>

          {/* Animated Global Network Visualization */}
          <div className="relative mb-8 h-32 overflow-hidden rounded-xl bg-gradient-to-r from-[#00D4FF]/10 to-[#0AD77C]/10 border border-[#00D4FF]/20">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-8 gap-4 opacity-30">
                {Array.from({ length: 32 }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 w-2 rounded-full animate-pulse ${
                      i % 3 === 0 ? "bg-[#00D4FF]" : i % 3 === 1 ? "bg-[#0AD77C]" : "bg-[#1FBFB8]"
                    }`}
                    style={{ animationDelay: `${i * 100}ms` }}
                  />
                ))}
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Globe className="h-16 w-16 text-[#00D4FF] animate-spin" style={{ animationDuration: "20s" }} />
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
            "CO2e Chain is the trust engine for the planet—public, programmable, and purpose-built for a new era of
            climate integrity. Certify, trade, and retire real impact, all on one unstoppable blockchain."
          </p>
        </div>
      </div>
    </section>
  )
}
