"use client"

import { Providers } from "@/app/provider"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

export function CTASection() {
    return (
        <Providers>
            <section className="w-full py-8 md:py-12 lg:py-24 bg-gradient-to-b from-violet-50 to-white dark:from-stone-950 dark:to-violet-900">
                <motion.div className="container mx-auto px-4 md:px-6 max-w-[1400px]">
                    <div className="flex flex-col items-center justify-center space-y-6 text-center">
                        <motion.div className="space-y-3 md:space-y-4">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
                                Ready to Transform Your Workflow?
                            </h2>
                            <p className="mx-auto max-w-[600px] text-base sm:text-lg md:text-xl text-gray-500 dark:text-gray-400">
                                Join thousands of teams already using TaskMinder to deliver better software, faster.
                            </p>
                        </motion.div>
                        <motion.div className="flex flex-col sm:flex-row gap-3 justify-center w-full max-w-md mx-auto">
                            <Link href="/pricing">
                                <Button
                                    size="lg"
                                    className="bg-gradient-to-r from-violet-600 to-cyan-400 hover:opacity-90 transition-opacity"
                                >
                                    Start Free Trial
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-violet-600 text-violet-600 hover:bg-violet-50 dark:border-violet-400 dark:text-violet-400 dark:hover:bg-violet-900"
                                >
                                    Contact Sales
                                </Button>
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </section>
        </Providers>
    )
}

