import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Twitter, Github, Linkedin, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-6">
              Get the latest updates on CO2e Chain development, partnerships,
              and climate impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
              />
              <Button className="bg-[#00D4FF] hover:bg-[#00D4FF]/90 whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative h-10 w-auto">
                <Image
                  src="/images/co2e-logo.svg"
                  alt="CO2e Chain"
                  width={140}
                  height={40}
                  className="h-10 w-auto object-contain brightness-0 invert"
                />
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              The public blockchain for verified climate impact, specializing in
              tokenizing carbon credits certified by Verra and Thailand's TGO.
              Building transparent, secure, and auditable infrastructure for the
              future of climate action.
            </p>
            <div className="flex space-x-4">
              <Button
                size="sm"
                variant="ghost"
                className="h-8 w-8 p-0 text-gray-400 hover:text-white"
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="h-8 w-8 p-0 text-gray-400 hover:text-white"
              >
                <Github className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="h-8 w-8 p-0 text-gray-400 hover:text-white"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  href="/platform"
                  className="hover:text-white transition-colors"
                >
                  Overview
                </Link>
              </li>
              <li>
                <a
                  href="https://exp.co2e.cc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center"
                >
                  Explorer
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </li>
              <li>
                <Link
                  href="/platform#security"
                  className="hover:text-white transition-colors"
                >
                  Security
                </Link>
              </li>
              <li>
                <Link
                  href="/platform#compliance"
                  className="hover:text-white transition-colors"
                >
                  Compliance
                </Link>
              </li>
            </ul>
          </div>

          {/* Developers */}
          <div>
            <h4 className="font-semibold mb-4">Developers</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  href="/developers"
                  className="hover:text-white transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/developers#api"
                  className="hover:text-white transition-colors"
                >
                  API Reference
                </Link>
              </li>
              <li>
                <Link
                  href="/developers#sdks"
                  className="hover:text-white transition-colors"
                >
                  SDKs
                </Link>
              </li>
              <li>
                <Link
                  href="/developers#community"
                  className="hover:text-white transition-colors"
                >
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/about#team"
                  className="hover:text-white transition-colors"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; 2025 CO2e Chain. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/security"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Security
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
