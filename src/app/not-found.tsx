'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Binary, BugIcon as Glitch, } from 'lucide-react'
import GradientBackground from '@/features/themes/gradientbackground/gradient-background'

const GlitchText = ({ text }: { text: string }) => {
    const [glitchedText, setGlitchedText] = useState(text)
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    useEffect(() => {
        const interval = setInterval(() => {
            const newText = text.split('').map((char) => {
                if (Math.random() > 0.9) {
                    return chars[Math.floor(Math.random() * chars.length)]
                }
                return char
            }).join('')
            setGlitchedText(newText)
        }, 100)

        return () => clearInterval(interval)
    }, [text])

    return (
        <span className="font-mono" suppressHydrationWarning>{glitchedText}</span>
    )
}

export default function NotFound() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden">
            {mounted && (
                <div className="absolute inset-0 opacity-10">
                    <GradientBackground />
                    {Array.from({ length: 100 }).map((_, i) => (
                        <div
                            key={i}
                            className="absolute text-green-500 text-opacity-50 select-none"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                fontSize: `${Math.random() * 20 + 10}px`,
                                transform: `rotate(${Math.random() * 360}deg)`,
                            }}
                        >
                            {Math.random() > 0.5 ? '0' : '1'}
                        </div>
                    ))}
                </div>
            )}

            <motion.div
                className="text-white text-9xl font-bold mb-8 relative"
                initial={{ opacity: 0, y: -50 }}
                animate={mounted ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <GlitchText text="404" />
                <motion.div
                    className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l opacity-30 blur"
                    animate={mounted ? {
                        opacity: [0.2, 0.4, 0.2],
                    } : {}}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            </motion.div>

            <motion.div
                className="text-white text-2xl mb-8 text-center"
                initial={{ opacity: 0 }}
                animate={mounted ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
            >
                <GlitchText text="Oops! There's a glitch in the Matrix." />
            </motion.div>

            <motion.div
                className="text-green-500 text-xl mb-8 text-center"
                initial={{ opacity: 0 }}
                animate={mounted ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 1 }}
            >
                <GlitchText text="Reality is not what it seems..." />
            </motion.div>

            <motion.div
                className="mt-8 z-10"
                initial={{ opacity: 0 }}
                animate={mounted ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 1.5 }}
            >
                <Link href="/" className="inline-block no-underline">
                    <button
                        type="button"
                        className=" bg-gradient-to-tr from-red-500 to-fuchsia-400 relative overflow-hidden
          text-white font-bold py-3 px-6 rounded-full
          transition-all duration-300 text-lg flex items-center
          hover:bg-gradient-to-r hover:from-red-600 hover:via-red-500 hover:to-rose-500"
                    >
                        <Binary className="mr-2" />
                        <span>Take the Red Pill</span>
                    </button>
                </Link>

            </motion.div>

            <motion.div
                className="absolute bottom-4 right-4 text-white opacity-50"
                initial={{ opacity: 0 }}
                animate={mounted ? { opacity: 0.5 } : {}}
                transition={{ duration: 0.8, delay: 2 }}
            >
                <Glitch size={24} />
            </motion.div>
        </div>
    )
}

