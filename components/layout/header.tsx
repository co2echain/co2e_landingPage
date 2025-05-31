"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X, ExternalLink, ArrowLeftRight } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md dark:bg-gray-950/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <div className="relative h-8 w-auto">
            <Image
              src="/images/co2e-logo.svg"
              alt="CO2e Chain"
              width={120}
              height={32}
              className="h-8 w-auto object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Platform</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 w-[400px]">
                  <NavigationMenuLink asChild>
                    <Link
                      href="/platform"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">Platform Overview</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Tokenize carbon credits certified by Verra and อบก. (TGO)
                      </p>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a
                      href="https://exp.co2e.cc/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div>
                        <div className="text-sm font-medium leading-none">Live Explorer</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Real-time network activity and transparency
                        </p>
                      </div>
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a
                      href="https://bridge.co2e.cc/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div>
                        <div className="text-sm font-medium leading-none">Cross-Chain Bridge</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Transfer tokens between BNB Smart Chain and CO2E Chain
                        </p>
                      </div>
                      <ArrowLeftRight className="h-4 w-4 ml-2" />
                    </a>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Developers</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 w-[400px]">
                  <NavigationMenuLink asChild>
                    <Link
                      href="/developers"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">Developer Hub</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        APIs, SDKs, and documentation for builders
                      </p>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/developers#docs"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">Documentation</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Comprehensive guides and API references
                      </p>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/developers#community"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">Community</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Join our developer community and discussions
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 w-[400px]">
                  <NavigationMenuLink asChild>
                    <Link
                      href="/developers#guides"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">Guides & Tutorials</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Step-by-step guides for getting started
                      </p>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/developers#examples"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">Code Examples</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Ready-to-use code samples and templates
                      </p>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/platform#compliance"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">Compliance Guide</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Regulatory standards and compliance information
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Company</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 w-[400px]">
                  <NavigationMenuLink asChild>
                    <Link
                      href="/about"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">About CO2e Chain</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Our mission, story, and values
                      </p>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/about#team"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">Team & Creator</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Meet the team behind CO2e Chain and BlockEdge
                      </p>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/contact"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">Contact Us</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Get in touch with our team
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link href="/contact">
            <Button variant="ghost" size="sm">
              Contact
            </Button>
          </Link>
          <Button size="sm" className="bg-[#00D4FF] hover:bg-[#00D4FF]/90">
            Get Started
          </Button>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center space-x-2">
          <ThemeToggle />
          <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="h-9 w-9 px-0">
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden border-t bg-white/95 backdrop-blur-md dark:bg-gray-950/95">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <div className="space-y-2">
              <div className="font-medium text-gray-900 dark:text-white">Platform</div>
              <Link
                href="/platform"
                className="block py-1 pl-4 text-sm text-gray-600 dark:text-gray-300 hover:text-[#00D4FF] transition-colors"
              >
                Platform Overview
              </Link>
              <a
                href="https://exp.co2e.cc/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center py-1 pl-4 text-sm text-gray-600 dark:text-gray-300 hover:text-[#00D4FF] transition-colors"
              >
                Live Explorer
                <ExternalLink className="h-3 w-3 ml-1" />
              </a>
              <a
                href="https://bridge.co2e.cc/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center py-1 pl-4 text-sm text-gray-600 dark:text-gray-300 hover:text-[#00D4FF] transition-colors"
              >
                Cross-Chain Bridge
                <ArrowLeftRight className="h-3 w-3 ml-1" />
              </a>
            </div>

            <div className="space-y-2">
              <div className="font-medium text-gray-900 dark:text-white">Developers</div>
              <Link
                href="/developers"
                className="block py-1 pl-4 text-sm text-gray-600 dark:text-gray-300 hover:text-[#00D4FF] transition-colors"
              >
                Developer Hub
              </Link>
              <Link
                href="/developers#docs"
                className="block py-1 pl-4 text-sm text-gray-600 dark:text-gray-300 hover:text-[#00D4FF] transition-colors"
              >
                Documentation
              </Link>
            </div>

            <div className="space-y-2">
              <div className="font-medium text-gray-900 dark:text-white">Company</div>
              <Link
                href="/about"
                className="block py-1 pl-4 text-sm text-gray-600 dark:text-gray-300 hover:text-[#00D4FF] transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block py-1 pl-4 text-sm text-gray-600 dark:text-gray-300 hover:text-[#00D4FF] transition-colors"
              >
                Contact
              </Link>
            </div>

            <div className="pt-4 border-t">
              <Button className="w-full bg-[#00D4FF] hover:bg-[#00D4FF]/90">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
