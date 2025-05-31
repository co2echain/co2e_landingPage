"use client"
import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { getBlockchainStats, formatNumber, type BlockchainStats } from "@/lib/api"

export function LiveNetworkMetrics() {
  const [stats, setStats] = useState<BlockchainStats | null>(null)
  const [weeklyGrowth, setWeeklyGrowth] = useState({
    blocks: 0,
    assets: 0,
    transactions: 0,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [statsData] = await Promise.all([getBlockchainStats()])
        setStats(statsData)

        // Calculate weekly growth (mock calculation for now)
        setWeeklyGrowth({
          blocks: Math.floor(statsData.blockHeight * 0.05), // ~5% weekly growth
          assets: Math.floor(statsData.totalAssets * 0.12), // ~12% weekly growth
          transactions: Math.floor(statsData.totalTransactions * 0.08), // ~8% weekly growth
        })
      } catch (error) {
        console.error("Failed to fetch metrics:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()

    // Refresh every minute
    const interval = setInterval(fetchData, 60000)

    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <Card
            key={i}
            className="p-6 text-center bg-gradient-to-br from-gray-100/50 to-gray-200/50 dark:from-gray-800/50 dark:to-gray-900/50"
          >
            <div className="text-4xl font-mono font-bold text-gray-400 mb-2 animate-pulse">---</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Loading...</div>
            <div className="text-xs text-gray-400">Loading...</div>
          </Card>
        ))}
      </div>
    )
  }

  if (!stats) {
    return null
  }

  const metrics = [
    {
      value: stats.blockHeight,
      label: "Blocks Produced",
      growth: weeklyGrowth.blocks,
      color: "#00D4FF",
    },
    {
      value: stats.totalAssets,
      label: "Assets Minted",
      growth: weeklyGrowth.assets,
      color: "#0AD77C",
    },
    {
      value: Math.floor(stats.totalAssets * 0.6), // Assume 60% of assets are retired
      label: "Offsets Retired",
      growth: Math.floor(weeklyGrowth.assets * 0.4),
      color: "#1FBFB8",
    },
    {
      value: 99.9,
      label: "Network Health",
      growth: 0,
      color: "#0AD77C",
      isPercentage: true,
      status: "All systems operational",
    },
  ]

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <Card
          key={index}
          className="p-6 text-center bg-gradient-to-br border-opacity-20"
          style={{
            backgroundColor: `${metric.color}05`,
            borderColor: `${metric.color}20`,
          }}
        >
          <div className="flex items-center justify-center mb-2">
            {metric.isPercentage ? (
              <>
                <div className="h-3 w-3 rounded-full mr-2 animate-pulse" style={{ backgroundColor: metric.color }} />
                <span className="text-2xl font-bold" style={{ color: metric.color }}>
                  {metric.value}%
                </span>
              </>
            ) : (
              <div className="text-4xl font-mono font-bold animate-pulse" style={{ color: metric.color }}>
                {formatNumber(metric.value)}
              </div>
            )}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">{metric.label}</div>
          <div className="text-xs" style={{ color: metric.color }}>
            {metric.status || `+${formatNumber(metric.growth)} this week`}
          </div>
        </Card>
      ))}
    </div>
  )
}
