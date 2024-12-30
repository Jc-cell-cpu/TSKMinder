'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const words = ['Innovative', 'Exciting', 'Revolutionary', 'Game-Changing', 'Transformative']

export default function InteractiveWord() {
    const [currentWord, setCurrentWord] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true)
            setTimeout(() => {
                setCurrentWord((prev) => (prev + 1) % words.length)
                setIsAnimating(false)
            }, 500)
        }, 3000)

        return () => clearInterval(interval)
    }, [])

    return (
        <motion.span
            className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
            style={{ lineHeight: "normal" }}
            initial={{ opacity: 1 }}
            animate={{ opacity: isAnimating ? 0 : 1 }}
            transition={{ duration: 0.5 }}
        >
            {words[currentWord]}
        </motion.span>
    )
}

