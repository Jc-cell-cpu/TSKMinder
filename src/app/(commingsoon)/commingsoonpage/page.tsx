'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ParticleSystem from '../ParticleSystem'
import InteractiveWord from '../InteractiveWord'
import NewsletterForm from '../NewsLetterForm'
import SocialIcons from '../SocialIcons'
import Link from 'next/link'
import { MoveLeft } from 'lucide-react';

export default function ComingSoonPage() {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null
    }

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center p-4 overflow-hidden bg-gray-900">
            <ParticleSystem />
            <div className="relative z-10 text-white text-center max-w-4xl w-full">
                <motion.h1
                    className="text-5xl md:text-7xl font-bold mb-8"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    The Future is <InteractiveWord />
                </motion.h1>
                <motion.p
                    className="text-xl md:text-2xl mb-12"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    Experience the next generation of interaction. Our revolutionary platform is almost here.
                </motion.p>
                <NewsletterForm />
                <Link href="/">
                    <motion.button
                        type="submit"
                        className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-800 text-white rounded-sm font-semibold hover:from-blue-500 hover:to-purple-700 transition duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <MoveLeft />
                    </motion.button>
                </Link>
                <div className='mt-7'>
                    <SocialIcons />
                </div>
            </div>
        </div>
    )
}

