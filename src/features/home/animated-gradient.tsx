'use client'

import { Providers } from '@/app/provider'
import { motion } from 'framer-motion'

export default function AnimatedGradient() {
    return (
        <Providers>
            <div className="absolute inset-x-0 -top-20 sm:-top-40 -z-10 transform-gpu overflow-hidden blur-2xl sm:blur-3xl w-full" aria-hidden="true">
                <motion.div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-full max-w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-violet-600 via-fuchsia-500 to-cyan-400 opacity-20 sm:opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    animate={{
                        rotate: [0, 360],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
                <motion.div
                    className="absolute left-[calc(50%+5rem)] aspect-[1155/678] w-[20rem] -translate-x-1/2 bg-gradient-to-tr from-violet-400 via-fuchsia-300 to-cyan-200 opacity-20 sm:left-[calc(50%-15rem)] sm:w-[72.1875rem]"
                    animate={{
                        rotate: [360, 0],
                        scale: [1, 1.15, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            </div>
        </Providers>
    )
}

