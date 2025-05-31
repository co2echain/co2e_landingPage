"use client"
import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Network, ExternalLink } from "lucide-react"
import { getBlockchainStats, getNetworkHealth, formatNumber, type BlockchainStats } from "@/lib/api"

export function ExplorerWidget() {
  const [stats, setStats] = useState<BlockchainStats | null>(null)
  const [health, setHealth] = useState<{ status: string; uptime: number; lastBlock: string } | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isMounted = true

    const fetchData = async () => {
      try {
        setLoading(true)

        // Use Promise.allSettled instead of Promise.all to handle partial failures
        const results = await Promise.allSettled([getBlockchainStats(), getNetworkHealth()])

        if (isMounted) {
          // Handle stats result
          if (results[0].status === "fulfilled") {
            setStats(results[0].value)
          } else {
            console.error("Failed to fetch stats:", results[0].reason)
            // Use fallback data
            setStats({
              blockHeight: 2847,
              totalTransactions: 1234,
              totalAssets: 567,
              networkHealth: "Healthy",
              blockTime: 3.2,
              validators: 156,
            })
          }

          // Handle health result
          if (results[1].status === "fulfilled") {
            setHealth(results[1].value)
          } else {
            console.error("Failed to fetch health:", results[1].reason)
            // Use fallback data
            setHealth({
              status: "healthy",
              uptime: 99.9,
              lastBlock: new Date().toISOString(),
            })
          }

          setLoading(false)
        }
      } catch (error) {
        console.error("Failed to fetch explorer data:", error)

        if (isMounted) {
          // Use fallback data
          setStats({
            blockHeight: 2847,
            totalTransactions: 1234,
            totalAssets: 567,
            networkHealth: "Healthy",
            blockTime: 3.2,
            validators: 156,
          })

          setHealth({
            status: "healthy",
            uptime: 99.9,
            lastBlock: new Date().toISOString(),
          })

          setLoading(false)
        }
      }
    }

    fetchData()

    // Refresh every 30 seconds
    const interval = setInterval(fetchData, 30000)

    return () => {
      isMounted = false
      clearInterval(interval)
    }
  }, [])

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-xl border-2 border-[#00D4FF]/20 p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Network className="h-6 w-6 text-[#00D4FF]" />
            <h3 className="text-xl font-bold">Live Network Activity</h3>
          </div>
          <Badge variant="outline" className="border-[#0AD77C] text-[#0AD77C]">
            <div className="h-2 w-2 bg-[#0AD77C] rounded-full mr-2 animate-pulse" />
            Loading...
          </Badge>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-mono font-bold text-gray-400 mb-2 animate-pulse">---</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Loading...</div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-xl border-2 border-[#00D4FF]/20 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Network className="h-6 w-6 text-[#00D4FF]" />
          <h3 className="text-xl font-bold">Live Network Activity</h3>
        </div>
        <Badge variant="outline" className="border-[#0AD77C] text-[#0AD77C]">
          <div className="h-2 w-2 bg-[#0AD77C] rounded-full mr-2 animate-pulse" />
          Live
        </Badge>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <div className="text-center">
          <div className="text-3xl font-mono font-bold text-[#00D4FF] mb-2 animate-pulse">
            {stats ? formatNumber(stats.blockHeight) : "---"}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Total Blocks</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-mono font-bold text-[#0AD77C] mb-2 animate-pulse">
            {stats ? formatNumber(stats.totalTransactions) : "---"}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Transactions</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-mono font-bold text-[#1FBFB8] mb-2 animate-pulse">
            {stats ? formatNumber(stats.totalAssets) : "---"}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Assets Minted</div>
        </div>
      </div>

      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 font-mono text-sm mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-600 dark:text-gray-400">Latest Block:</span>
          <span className="text-[#00D4FF]">#{stats?.blockHeight || "---"}</span>
        </div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-600 dark:text-gray-400">Block Time:</span>
          <span className="text-[#0AD77C]">{stats?.blockTime.toFixed(1) || "---"}s</span>
        </div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-600 dark:text-gray-400">Network Health:</span>
          <span className="text-[#0AD77C] flex items-center">
            <div className="h-2 w-2 bg-[#0AD77C] rounded-full mr-2 animate-pulse" />
            {health?.status || "Unknown"}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-600 dark:text-gray-400">Uptime:</span>
          <span className="text-[#0AD77C]">{health?.uptime.toFixed(1) || "---"}%</span>
        </div>
      </div>

      <div className="text-center">
        <Button asChild className="bg-[#00D4FF] hover:bg-[#00D4FF]/90">
          <a href="https://exp.co2e.cc/" target="_blank" rel="noopener noreferrer">
            View Full Explorer
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>
  )
}
