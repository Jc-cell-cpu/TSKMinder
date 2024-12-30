'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const LocalStorageProvider = dynamic(
    () => import('@/features/local-storage-provider').then(mod => mod.LocalStorageProvider),
    { ssr: false }
)

const Providers = dynamic(() => import('@/app/provider').then(mod => mod.Providers))

export function ClientWrapper({ children }: { children: React.ReactNode }) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <LocalStorageProvider>
                <Providers>{children}</Providers>
            </LocalStorageProvider>
        </Suspense>
    )
}

