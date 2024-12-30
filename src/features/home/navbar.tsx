"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { ThemeToggle } from "../themes/themecomponents/theme-toggle"

export function Navbar() {
  return (
    <div className="mb-4 border-b border-violet-100 dark:border-violet-800">
      <motion.header
        className="sticky top-0 z-50 w-full px-4 lg:px-6 h-auto py-3 md:h-16 flex flex-wrap md:flex-nowrap items-center gap-4 md:gap-0 backdrop-blur-sm bg-white/50 dark:bg-gray-900/50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.8 }}
      >
        <Link className="flex items-center justify-center mt-4" href="/">
          <img src="/logo.svg" height={40} width={40} alt="TaskMinder Logo" />
          <span className="text-xl font-bold text-blue-600">TaskMinder</span>
        </Link>
        <nav className="order-3 md:order-2 w-full md:w-auto md:ml-auto flex gap-4 sm:gap-6 justify-center md:justify-end items-center">
          <Link className="text-sm font-medium hover:text-violet-600 dark:hover:text-violet-400 transition-colors" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:text-violet-600 dark:hover:text-violet-400 transition-colors" href="/pricing">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:text-violet-600 dark:hover:text-violet-400 transition-colors" href="/about">
            About
          </Link>
        </nav>
        <div className="order-2 md:order-3 ml-auto md:ml-4 flex gap-2 sm:gap-4 items-center">
          <Link href="/sign-in">
            <Button
              variant="outline"
              size="sm"
              className="border-violet-600 text-violet-600 hover:bg-violet-50 dark:border-violet-400 dark:text-violet-400 dark:hover:bg-violet-900"
            >
              Log in
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button
              size="sm"
              className="bg-gradient-to-r from-violet-600 to-cyan-400 hover:opacity-90 transition-opacity"
            >
              Sign up
            </Button>
          </Link>
          <ThemeToggle />
        </div>
      </motion.header>
    </div>
  )
}

