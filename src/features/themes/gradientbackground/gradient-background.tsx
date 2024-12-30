"use client"

import { motion } from 'framer-motion'

export default function GradientBackground() {
    return (
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
            {/* Primary gradient - Rotating and scaling */}
            <motion.div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-emerald-400 via-purple-500 to-rose-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    rotate: {
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    },
                    scale: {
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }
                }}
                style={{
                    clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)"
                }}
            />

            {/* Secondary gradient - Floating and fading */}
            <motion.div
                className="absolute left-[calc(50%+5rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-cyan-400 via-indigo-500 to-amber-500 opacity-20 sm:left-[calc(50%-20rem)] sm:w-[72.1875rem]"
                animate={{
                    y: [-20, 20],
                    opacity: [0.2, 0.3, 0.2],
                    rotate: [0, -360],
                }}
                transition={{
                    y: {
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        repeatType: "reverse"
                    },
                    opacity: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        repeatType: "reverse"
                    },
                    rotate: {
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }
                }}
                style={{
                    clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%, 25% 50%)"
                }}
            />

            {/* Tertiary gradient - Morphing and rotating */}
            <motion.div
                className="absolute left-[calc(50%-15rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-fuchsia-500 via-teal-400 to-yellow-400 opacity-25 sm:left-[calc(50%-25rem)] sm:w-[72.1875rem]"
                animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 0],
                    x: [-50, 50, -50]
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                style={{
                    clipPath: "polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)"
                }}
            />

            {/* Quaternary gradient - Pulsing */}
            <motion.div
                className="absolute left-[calc(50%)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-pink-500 via-blue-400 to-green-400 opacity-20 sm:left-[calc(50%-15rem)] sm:w-[72.1875rem]"
                animate={{
                    scale: [0.8, 1, 0.8],
                    opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                style={{
                    clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)"
                }}
            />
        </div>
    )
}

