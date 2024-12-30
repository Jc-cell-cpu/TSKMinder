"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Typewriter } from "./type-writer"

export function HeroSection() {
    return (
        <section className="w-full py-8 md:py-12 lg:py-24">
            <div className="container mx-auto px-4 md:px-6 max-w-[1400px]">
                <div className="grid gap-8 lg:gap-12 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_500px] items-center">
                    <motion.div
                        className="flex flex-col justify-center space-y-4 md:justify-start"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="space-y-2">
                            <motion.h1
                                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl"
                                style={{ lineHeight: "normal" }}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                            >
                                <Typewriter
                                    texts={[
                                        "Manage Tasks with Ease.",
                                        "Track Bugs Effectively.",
                                        "Deliver Great Software.",
                                    ]}
                                    delay={50}
                                    pauseTime={1500}
                                    className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent"
                                />
                            </motion.h1>
                            <motion.p
                                className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                            >
                                TaskMinder helps teams track bugs, manage tasks, and deliver great software. Simple, powerful, and built for modern teams.
                            </motion.p>
                        </div>

                        <motion.div
                            className="flex flex-col gap-2 min-[400px]:flex-row justify-center md:justify-start"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                        >
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-violet-600 to-cyan-400 hover:opacity-90 transition-opacity"
                            >
                                Get Started
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-violet-600 text-violet-600 hover:bg-violet-50 dark:border-violet-400 dark:text-violet-400 dark:hover:bg-violet-900"
                            >
                                Watch Demo
                            </Button>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className="mx-auto flex flex-col justify-center space-y-4 relative h-[400px] w-full max-w-[500px]"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Animated Task Cards */}
                        <div className="relative w-full h-full">
                            {[0, 1, 2].map((index) => (
                                <motion.div
                                    key={index}
                                    className="absolute top-0 left-0 w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4"
                                    initial={{
                                        y: 40 * index,
                                        opacity: 1 - (index * 0.2),
                                        scale: 1 - (index * 0.05),
                                        rotate: -5 + (index * 2)
                                    }}
                                    animate={{
                                        y: [40 * index, 40 * index - 10, 40 * index],
                                        rotate: [-5 + (index * 2), -3 + (index * 2), -5 + (index * 2)]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                        delay: index * 0.2
                                    }}
                                >
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <motion.div
                                                className="h-3 bg-gradient-to-r from-violet-600 to-cyan-400 rounded"
                                                initial={{ width: "40%" }}
                                                animate={{ width: ["40%", "60%", "40%"] }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    repeatType: "reverse",
                                                    delay: index * 0.3
                                                }}
                                            />
                                            <motion.div
                                                className="h-3 w-3 rounded-full bg-violet-600"
                                                animate={{
                                                    scale: [1, 1.2, 1],
                                                    opacity: [0.5, 1, 0.5]
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    repeatType: "reverse",
                                                    delay: index * 0.2
                                                }}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <motion.div
                                                className="h-2 bg-gray-200 dark:bg-gray-700 rounded"
                                                animate={{
                                                    opacity: [0.5, 0.8, 0.5]
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    repeatType: "reverse",
                                                    delay: index * 0.4
                                                }}
                                            />
                                            <motion.div
                                                className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-2/3"
                                                animate={{
                                                    opacity: [0.5, 0.8, 0.5],
                                                    width: ["60%", "75%", "60%"]
                                                }}
                                                transition={{
                                                    duration: 2.5,
                                                    repeat: Infinity,
                                                    repeatType: "reverse",
                                                    delay: index * 0.3
                                                }}
                                            />
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <div className="flex space-x-2">
                                                {[...Array(3)].map((_, i) => (
                                                    <motion.div
                                                        key={i}
                                                        className="h-6 w-6 rounded-full bg-gray-200 dark:bg-gray-700"
                                                        animate={{
                                                            scale: [1, 1.1, 1],
                                                            opacity: [0.5, 0.8, 0.5]
                                                        }}
                                                        transition={{
                                                            duration: 2,
                                                            repeat: Infinity,
                                                            repeatType: "reverse",
                                                            delay: i * 0.2
                                                        }}
                                                    />
                                                ))}
                                            </div>
                                            <motion.div
                                                className="h-2 w-12 bg-gradient-to-r from-violet-600 to-cyan-400 rounded"
                                                animate={{
                                                    opacity: [0.5, 1, 0.5]
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    repeatType: "reverse",
                                                    delay: index * 0.5
                                                }}
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Decorative Elements */}
                        <motion.div
                            className="absolute -z-10 w-full h-full"
                            animate={{
                                rotate: [0, 360]
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        >
                            {[...Array(3)].map((_, index) => (
                                <motion.div
                                    key={`circle-${index}`}
                                    className="absolute rounded-full bg-gradient-to-r from-violet-600/20 to-cyan-400/20"
                                    style={{
                                        width: `${150 - index * 30}px`,
                                        height: `${150 - index * 30}px`,
                                        top: `${50 + index * 20}%`,
                                        left: `${50 + index * 10}%`,
                                        transform: 'translate(-50%, -50%)'
                                    }}
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.3, 0.5, 0.3]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                        delay: index * 0.3
                                    }}
                                />
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

