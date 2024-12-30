'use client'

import { createContext, useContext, useEffect, useState } from 'react'

const LocalStorageContext = createContext<{
    getItem: (key: string) => string | null
    setItem: (key: string, value: string) => void
}>({
    getItem: () => null,
    setItem: () => { },
})

export function LocalStorageProvider({ children }: { children: React.ReactNode }) {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    const getItem = (key: string) => {
        if (!isClient) return null
        return localStorage.getItem(key)
    }

    const setItem = (key: string, value: string) => {
        if (!isClient) return
        localStorage.setItem(key, value)
    }

    return (
        <LocalStorageContext.Provider value={{ getItem, setItem }}>
            {children}
        </LocalStorageContext.Provider>
    )
}

export const useLocalStorage = () => useContext(LocalStorageContext)

