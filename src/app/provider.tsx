'use client'

import { useEffect, useState } from 'react'
import { ThemeProvider } from "@/features/themes/themeproviders/theme-providers"

export function Providers({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        // You can return a loading skeleton here if you want
        return <>{children}</>
    }

    return <ThemeProvider>{children}</ThemeProvider>
}

