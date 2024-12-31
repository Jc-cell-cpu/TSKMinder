'use client'

import { useState, useEffect } from 'react'
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileText, ShieldCheck, Facebook, Twitter, LinkedinIcon as LinkedIn, Instagram, Menu } from 'lucide-react'
import { ThemeProvider } from "@/features/themes/themeproviders/theme-providers"
import { ThemeToggle } from "@/features/themes/themecomponents/theme-toggle"
import GradientBackground from "@/features/themes/gradientbackground/gradient-background"

interface PolicyLayoutProps {
    children: React.ReactNode
}

const PolicyLayout = ({ children }: PolicyLayoutProps) => {
    const [isMounted, setIsMounted] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null // Or you could return a loading spinner here
    }

    return (
        <ThemeProvider>
            <GradientBackground />
            <div className="min-h-screen flex flex-col">
                <header className="shadow-md">
                    <div className="mx-auto max-w-screen-2xl p-4">
                        <nav className="flex flex-wrap justify-between items-center">
                            <Link href="/" className="flex items-center gap-3">
                                <Image src="/logo.svg" height={50} width={50} alt="TaskMinder Logo" />
                                <span className="text-xl font-bold text-blue-600 mr-2">TaskMinder</span>
                            </Link>
                            <Button
                                variant="ghost"
                                className="md:hidden"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                <Menu className="h-6 w-6" />
                            </Button>
                            <div className={`w-full md:w-auto md:flex items-center gap-4 ${isMenuOpen ? 'flex flex-col mt-4' : 'hidden md:flex'}`}>
                                <Button variant="ghost" asChild className="w-full md:w-auto justify-start">
                                    <Link href="/privacy">
                                        <ShieldCheck className="mr-2 h-4 w-4" />
                                        Privacy
                                    </Link>
                                </Button>
                                <Button variant="ghost" asChild className="w-full md:w-auto justify-start">
                                    <Link href="/terms">
                                        <FileText className="mr-2 h-4 w-4" />
                                        Terms
                                    </Link>
                                </Button>
                                <ThemeToggle />
                                <Button variant="primary" className="dark:border-none w-full md:w-auto" asChild>
                                    <Link href="/sign-up">Sign Up</Link>
                                </Button>
                            </div>
                        </nav>
                    </div>
                </header>

                <main className="flex-grow">
                    <div className="mx-auto max-w-screen-xl p-4">
                        <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
                            {children}
                        </div>
                    </div>
                </main>

                <footer className="shadow-md mt-8">
                    <div className="mx-auto max-w-screen-2xl p-4">
                        <div className="flex flex-col gap-6 md:flex-row md:justify-between md:items-center">
                            <div className="text-sm text-center md:text-left">
                                © 2024 TaskMinder. All rights reserved.
                            </div>
                            <div className="flex flex-col md:flex-row items-center gap-4">
                                <Button variant="ghost" asChild className="w-full md:w-auto">
                                    <Link href="/about">About Us</Link>
                                </Button>
                                <Button variant="ghost" asChild className="w-full md:w-auto">
                                    <Link href="/contact">Contact</Link>
                                </Button>
                                <Button variant="ghost" asChild className="w-full md:w-auto">
                                    <Link href="/faq">FAQ</Link>
                                </Button>
                            </div>
                            <div className="flex items-center justify-center md:justify-end gap-6">
                                <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                    <Facebook className="h-5 w-5 hover:text-cyan-600 transition-colors" />
                                </Link>
                                <Link href="https://X.com" target="_blank" rel="noopener noreferrer">
                                    <Twitter className="h-5 w-5 hover:text-cyan-600 transition-colors" />
                                </Link>
                                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <LinkedIn className="h-5 w-5 hover:text-cyan-600 transition-colors" />
                                </Link>
                                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                    <Instagram className="h-5 w-5 hover:text-cyan-600 transition-colors" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </ThemeProvider>
    )
}

export default PolicyLayout

