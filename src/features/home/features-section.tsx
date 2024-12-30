"use client"

import { motion } from "framer-motion"
import { Bug, Clock, GitPullRequest, Users } from 'lucide-react'

const features = [
    {
        icon: Bug,
        title: "Bug Tracking",
        description: "Track and resolve issues efficiently with our powerful bug tracking system."
    },
    {
        icon: Clock,
        title: "Time Management",
        description: "Monitor project timelines and team productivity with built-in time tracking."
    },
    {
        icon: Users,
        title: "Team Collaboration",
        description: "Work together seamlessly with real-time updates and team messaging."
    },
    {
        icon: GitPullRequest,
        title: "Workflow Automation",
        description: "Automate your development workflow with custom triggers and actions."
    }
]

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8
        }
    }
}

export function FeaturesSection() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-violet-50 dark:from-stone-950 dark:to-stone-950" id="features">
            <motion.div
                className="container mx-auto px-4 md:px-6 max-w-[1400px]"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <motion.h2
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        Powerful Features for Modern Teams
                    </motion.h2>
                    <motion.p
                        className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Everything you need to manage your projects effectively and deliver results on time.
                    </motion.p>
                </div>
                <div className="mx-auto grid max-w-[1200px] grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mt-8 md:mt-12">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center space-y-3 p-4 sm:p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-lg border border-violet-100 dark:border-violet-800"
                            variants={itemVariants}
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-cyan-400">
                                <feature.icon className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold bg-gradient-to-r from-violet-600 to-cyan-400 bg-clip-text text-transparent">
                                {feature.title}
                            </h3>
                            <p className="text-center text-gray-500 dark:text-gray-400">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

