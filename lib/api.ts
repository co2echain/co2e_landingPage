// CO2e Chain API utilities
const API_BASE_URL = "https://exp.co2e.cc/api/v2"

export interface BlockchainStats {
  blockHeight: number
  totalTransactions: number
  totalAssets: number
  networkHealth: string
  blockTime: number
  validators: number
}

export interface Block {
  height: number
  hash: string
  timestamp: string
  transactions: number
  validator: string
  gasUsed: string
  gasLimit: string
  size: number
}

export interface Transaction {
  hash: string
  block: number
  timestamp: string
  type: string
  status: string
  from?: string
  to?: string
  value?: string
  gasUsed?: string
  gasPrice?: string
  fee?: string
}

export interface Asset {
  id: string
  type: string
  amount: number
  status: string
  project?: {
    name: string
    location: string
  }
  metadata?: {
    vintage?: string
    certifier?: string
    standard?: string
  }
}

// Fetch latest blockchain statistics from the actual API
export async function getBlockchainStats(): Promise<BlockchainStats> {
  try {
    // Get latest blocks to determine current block height
    const blocksResponse = await fetch(`${API_BASE_URL}/blocks`, {
      next: { revalidate: 30 },
      headers: {
        accept: "application/json",
      },
    })

    let blockHeight = 0
    let networkHealth = "healthy"
    let blockTime = 2.0 // Default 2 second block time based on API data

    if (blocksResponse.ok) {
      const blocksData = await blocksResponse.json()
      const blocks = blocksData.items || []
      
      if (blocks.length > 0) {
        blockHeight = blocks[0].height || 0
        
        // Calculate average block time from recent blocks
        if (blocks.length >= 2) {
          const block1 = new Date(blocks[0].timestamp)
          const block2 = new Date(blocks[1].timestamp)
          blockTime = Math.abs(block1.getTime() - block2.getTime()) / 1000
        }
      }
    }

    // Get total transaction count from transactions endpoint
    let totalTransactions = 0
    try {
      const txResponse = await fetch(`${API_BASE_URL}/transactions`, {
        next: { revalidate: 60 },
        headers: {
          accept: "application/json",
        },
      })
      
      if (txResponse.ok) {
        const txData = await txResponse.json()
        // Estimate total transactions from pagination info
        const items = txData.items || []
        if (items.length > 0) {
          // Use the latest block number as an approximation for total transactions
          totalTransactions = blockHeight
        }
      }
    } catch (e) {
      console.warn("Could not fetch transaction count:", e)
    }

    // Get total assets/tokens count from tokens endpoint
    let totalAssets = 0
    try {
      const tokensResponse = await fetch(`${API_BASE_URL}/tokens`, {
        next: { revalidate: 60 },
        headers: {
          accept: "application/json",
        },
      })
      
      if (tokensResponse.ok) {
        const tokensData = await tokensResponse.json()
        const tokens = tokensData.items || []
        if (Array.isArray(tokens)) {
          totalAssets = tokens.length
        }
      }
    } catch (e) {
      console.warn("Could not fetch tokens count:", e)
    }

    return {
      blockHeight,
      totalTransactions,
      totalAssets,
      networkHealth,
      blockTime,
      validators: 1, // Default for single validator setup
    }
  } catch (error) {
    console.error("Error fetching blockchain stats:", error)
    return {
      blockHeight: 0,
      totalTransactions: 0,
      totalAssets: 0,
      networkHealth: "unknown",
      blockTime: 0,
      validators: 0,
    }
  }
}

// Fetch latest blocks from the actual API
export async function getLatestBlocks(limit = 10): Promise<Block[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/blocks`, {
      next: { revalidate: 10 },
      headers: {
        accept: "application/json",
      },
    })

    if (!response.ok) {
      throw new Error(`API returned ${response.status}`)
    }

    const data = await response.json()
    const blocks = data.items || []

    if (!Array.isArray(blocks)) {
      console.warn("Blocks data is not an array:", blocks)
      return []
    }

    return blocks.slice(0, limit).map((block: any) => ({
      height: parseInt(block.height) || 0,
      hash: block.hash || "",
      timestamp: block.timestamp || new Date().toISOString(),
      transactions: parseInt(block.transaction_count) || parseInt(block.transactions_count) || 0,
      validator: block.miner?.hash || "Unknown",
      gasUsed: block.gas_used || "0",
      gasLimit: block.gas_limit || "0",
      size: parseInt(block.size) || 0,
    }))
  } catch (error) {
    console.error("Error fetching blocks:", error)
    return []
  }
}

// Fetch latest transactions from the actual API
export async function getLatestTransactions(limit = 10): Promise<Transaction[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/transactions`, {
      next: { revalidate: 10 },
      headers: {
        accept: "application/json",
      },
    })

    if (!response.ok) {
      throw new Error(`API returned ${response.status}`)
    }

    const data = await response.json()
    const transactions = data.items || []

    if (!Array.isArray(transactions)) {
      console.warn("Transactions data is not an array:", transactions)
      return []
    }

    return transactions.slice(0, limit).map((tx: any) => ({
      hash: tx.hash || "",
      block: parseInt(tx.block_number) || 0,
      timestamp: tx.timestamp || new Date().toISOString(),
      type: tx.transaction_types?.[0] || tx.method || "transfer",
      status: tx.status === "ok" ? "success" : tx.status || "pending",
      from: tx.from?.hash,
      to: tx.to?.hash,
      value: tx.value || "0",
      gasUsed: tx.gas_used || "0",
      gasPrice: tx.gas_price || "0",
      fee: tx.fee?.value || "0",
    }))
  } catch (error) {
    console.error("Error fetching transactions:", error)
    return []
  }
}

// Fetch assets/tokens from the actual API
export async function getAssets(limit = 10): Promise<Asset[]> {
  try {
    // Get token information from the tokens endpoint
    const response = await fetch(`${API_BASE_URL}/tokens`, {
      next: { revalidate: 60 },
      headers: {
        accept: "application/json",
      },
    })

    if (response.ok) {
      const data = await response.json()
      const tokens = data.items || []

      if (Array.isArray(tokens)) {
        return tokens.slice(0, limit).map((token: any, index: number) => {
          // Determine asset type based on token properties
          const isCarbon = token.symbol?.match(/(VCS|TVS|IREC|CO2)/i) || 
                          token.name?.match(/(forest|solar|hydropower|carbon|renewable)/i)
          
          return {
            id: token.address || token.address_hash || `asset-${index}`,
            type: isCarbon ? "carbon-credit" : "utility-token",
            amount: parseInt(token.total_supply) || 0,
            status: "active",
            project: {
              name: token.name || token.symbol || "Unknown Project",
              location: extractLocationFromName(token.name || ""),
            },
            metadata: {
              symbol: token.symbol,
              decimals: token.decimals,
              type: token.type,
              holders: token.holders_count || "0",
              standard: extractStandardFromSymbol(token.symbol || ""),
            },
          }
        })
      }
    }

    // If tokens endpoint doesn't work, return empty array
    return []
  } catch (error) {
    console.error("Error fetching assets:", error)
    return []
  }
}

// Helper function to extract location from token name
function extractLocationFromName(name: string): string {
  const locationPatterns = [
    /Inner Mongolia/i,
    /Bac Ha/i,
    /BSE/i,
  ]
  
  for (const pattern of locationPatterns) {
    const match = name.match(pattern)
    if (match) {
      return match[0]
    }
  }
  
  return "Global"
}

// Helper function to extract standard from token symbol
function extractStandardFromSymbol(symbol: string): string {
  if (symbol.startsWith("VCS")) return "Verified Carbon Standard"
  if (symbol.startsWith("TVS")) return "The Verified Standard"
  if (symbol.includes("IREC")) return "International REC Standard"
  if (symbol === "USDC") return "USD Coin"
  if (symbol === "WETH") return "Wrapped Ether"
  return "Custom Standard"
}

// Fetch network health from the actual API
export async function getNetworkHealth(): Promise<{ status: string; uptime: number; lastBlock: string }> {
  try {
    // Get latest block to check network health
    const response = await fetch(`${API_BASE_URL}/blocks`, {
      next: { revalidate: 30 },
      headers: {
        accept: "application/json",
      },
    })

    if (!response.ok) {
      throw new Error(`API returned ${response.status}`)
    }

    const data = await response.json()
    const blocks = data.items || []

    if (blocks.length > 0) {
      const latestBlock = blocks[0]
      const blockTime = new Date(latestBlock.timestamp)
      const now = new Date()
      const timeDiff = (now.getTime() - blockTime.getTime()) / 1000

      // Consider network healthy if latest block is within last 30 seconds
      const status = timeDiff < 30 ? "healthy" : "delayed"

      return {
        status,
        uptime: 99.9, // Not provided by API, using default
        lastBlock: latestBlock.timestamp,
      }
    }

    return {
      status: "unknown",
      uptime: 0,
      lastBlock: new Date().toISOString(),
    }
  } catch (error) {
    console.error("Error fetching network health:", error)
    return {
      status: "unknown",
      uptime: 0,
      lastBlock: new Date().toISOString(),
    }
  }
}

// Get specific transaction by hash
export async function getTransaction(hash: string): Promise<Transaction | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/transactions/${hash}`, {
      headers: {
        accept: "application/json",
      },
    })

    if (!response.ok) {
      return null
    }

    const tx = await response.json()

    return {
      hash: tx.hash || "",
      block: parseInt(tx.block_number) || 0,
      timestamp: tx.timestamp || new Date().toISOString(),
      type: tx.transaction_types?.[0] || tx.method || "transfer",
      status: tx.status === "ok" ? "success" : tx.status || "pending",
      from: tx.from?.hash,
      to: tx.to?.hash,
      value: tx.value || "0",
      gasUsed: tx.gas_used || "0",
      gasPrice: tx.gas_price || "0",
      fee: tx.fee?.value || "0",
    }
  } catch (error) {
    console.error("Error fetching transaction:", error)
    return null
  }
}

// Get specific block by height
export async function getBlock(height: number): Promise<Block | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/blocks/${height}`, {
      headers: {
        accept: "application/json",
      },
    })

    if (!response.ok) {
      return null
    }

    const block = await response.json()

    return {
      height: parseInt(block.height) || height,
      hash: block.hash || "",
      timestamp: block.timestamp || new Date().toISOString(),
      transactions: parseInt(block.transaction_count) || parseInt(block.transactions_count) || 0,
      validator: block.miner?.hash || "Unknown",
      gasUsed: block.gas_used || "0",
      gasLimit: block.gas_limit || "0",
      size: parseInt(block.size) || 0,
    }
  } catch (error) {
    console.error("Error fetching block:", error)
    return null
  }
}

// Search function for the API
export async function searchAPI(query: string): Promise<any> {
  try {
    // Try different search approaches based on query type
    if (query.match(/^0x[A-F0-9]{64}$/i)) {
      // Looks like a transaction hash
      return await getTransaction(query)
    } else if (query.match(/^\d+$/)) {
      // Looks like a block height
      return await getBlock(parseInt(query))
    } else if (query.match(/^0x[A-F0-9]{40}$/i)) {
      // Looks like an address - try to get address info
      const response = await fetch(`${API_BASE_URL}/addresses/${query}`, {
        headers: {
          accept: "application/json",
        },
      })

      if (response.ok) {
        return await response.json()
      }
    }

    return null
  } catch (error) {
    console.error("Error searching API:", error)
    return null
  }
}

// Format large numbers for display
export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M"
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K"
  }
  return num.toString()
}

// Format time ago
export function formatTimeAgo(timestamp: string): string {
  const now = new Date()
  const time = new Date(timestamp)
  const diffInSeconds = Math.floor((now.getTime() - time.getTime()) / 1000)

  if (diffInSeconds < 60) {
    return `${diffInSeconds}s ago`
  }
  if (diffInSeconds < 3600) {
    return `${Math.floor(diffInSeconds / 60)}m ago`
  }
  if (diffInSeconds < 86400) {
    return `${Math.floor(diffInSeconds / 3600)}h ago`
  }
  return `${Math.floor(diffInSeconds / 86400)}d ago`
}

// Format Wei to Ether (or appropriate unit)
export function formatValue(value: string): string {
  const num = parseInt(value)
  if (num === 0) return "0"
  // For CO2e chain, values might already be in the correct unit
  return (num / 1e18).toFixed(4)
}

// Format gas values
export function formatGas(gas: string): string {
  const num = parseInt(gas)
  return formatNumber(num)
}
