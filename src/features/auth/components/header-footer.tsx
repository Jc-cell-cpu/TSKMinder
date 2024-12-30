import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, FileText, ShieldCheck, Facebook, Twitter, LinkedinIcon as LinkedIn, Instagram } from 'lucide-react';
import { ThemeProvider } from "@/features/themes/themeproviders/theme-providers";
import { ThemeToggle } from "@/features/themes/themecomponents/theme-toggle";
import GradientBackground from "@/features/themes/gradientbackground/gradient-background";

interface PolicyLayoutProps {
    children: React.ReactNode;
}

const PolicyLayout = ({ children }: PolicyLayoutProps) => {
    return (
        <ThemeProvider>
            <GradientBackground />
            <div className="min-h-screen flex flex-col">
                <header className="shadow-md">
                    <div className="mx-auto max-w-screen-2xl p-4">
                        <nav className="flex justify-between items-center">
                            <Link href="/" className="flex items-center gap-3">
                                <Image src="/logo.svg" height={50} width={50} alt="TaskMinder Logo" />
                                <span className="text-xl font-bold text-blue-600 mr-2">TaskMinder</span>
                            </Link>
                            <div className="flex items-center gap-4">
                                <Button variant="ghost" asChild>
                                    <Link href="/privacy">
                                        <ShieldCheck className="mr-2 h-4 w-4" />
                                        Privacy
                                    </Link>
                                </Button>
                                <Button variant="ghost" asChild>
                                    <Link href="/terms">
                                        <FileText className="mr-2 h-4 w-4" />
                                        Terms
                                    </Link>
                                </Button>
                                <ThemeToggle />
                                <Button variant="primary" className="dark:border-none" asChild>
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
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <div className="text-sm">
                                © 2024 TaskMinder. All rights reserved.
                            </div>
                            <div className="flex items-center gap-4">
                                <Button variant="ghost" asChild>
                                    <Link href="/about">About Us</Link>
                                </Button>
                                <Button variant="ghost" asChild>
                                    <Link href="/contact">Contact</Link>
                                </Button>
                                <Button variant="ghost" asChild>
                                    <Link href="/faq">FAQ</Link>
                                </Button>
                            </div>
                            <div className="flex items-center gap-4">
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
    );
}

export default PolicyLayout;

