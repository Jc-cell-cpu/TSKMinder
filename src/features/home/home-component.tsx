

import { CTASection } from "@/features/home/cta-section";
import { FeaturesSection } from "@/features/home/features-section";
import { HeroSection } from "@/features/home/hero-section";
import { Navbar } from "@/features/home/navbar";
import GradientBackground from "@/features/themes/gradientbackground/gradient-background";
import { ThemeProvider } from "@/features/themes/themeproviders/theme-providers";
import { Providers } from "@/app/provider";
import { LocalStorageProvider } from "@/features/local-storage-provider";



export function HomeComponent() {
    return (
        <LocalStorageProvider>
            <Providers>
                <ThemeProvider>
                    <div className="flex min-h-screen flex-col overflow-x-hidden w-full">
                        <GradientBackground />
                        <Navbar />
                        <main className="flex-1">
                            <HeroSection />
                            <FeaturesSection />
                            <CTASection />
                        </main>
                        <footer className="flex flex-col gap-4 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-violet-100 dark:border-violet-800">
                            <p className="text-xs text-center w-full sm:w-auto text-gray-500 dark:text-gray-400">
                                © 2024 TaskMinder. All rights reserved.
                            </p>
                            <nav className="flex gap-4 sm:gap-6 justify-center sm:ml-auto">
                                <a className="text-xs hover:text-violet-600 dark:hover:text-violet-400 transition-colors" href="/terms">
                                    Terms of Service
                                </a>
                                <a className="text-xs hover:text-violet-600 dark:hover:text-violet-400 transition-colors" href="/privacy">
                                    Privacy
                                </a>
                            </nav>
                        </footer>
                    </div>
                </ThemeProvider>
            </Providers>
        </LocalStorageProvider>

    );
}
