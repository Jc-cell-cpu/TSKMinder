'use client'

import { useState, useEffect } from 'react'
import { AlertCircle, CheckCircle } from 'lucide-react'

interface AnimatedAlertProps {
    id: string
    message: string
    type: 'success' | 'error'
    duration?: number
}

export function AnimatedAlert({ id, message, type, duration = 3000 }: AnimatedAlertProps) {
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false)
        }, duration)

        return () => clearTimeout(timer)
    }, [duration, id]) // Add id to dependency array to reset timer when id changes

    if (!isVisible) return null

    return (
        <div
            className={`fixed top-20 right-4 px-6 py-4 rounded-lg shadow-lg flex items-center space-x-2 text-white transition-all duration-500 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
                } ${type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}
            style={{ zIndex: 1000 }}
        >
            {type === 'success' ? (
                <CheckCircle className="h-5 w-5" />
            ) : (
                <AlertCircle className="h-5 w-5" />
            )}
            <span>{message}</span>
        </div>
    )
}

