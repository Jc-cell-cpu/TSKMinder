"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { CheckCircle, Users, Zap } from "lucide-react"
import PolicyLayout from "@/features/auth/components/header-footer"

export default function AboutUs() {
    const features = [
        { icon: CheckCircle, title: 'Efficient Task Management', description: 'Streamline your workflow with our intuitive task tracking system.' },
        { icon: Users, title: 'Collaborative Environment', description: 'Foster teamwork with real-time collaboration features.' },
        { icon: Zap, title: 'Lightning-Fast Performance', description: 'Experience seamless task management with our high-performance platform.' },
    ]

    return (
        <PolicyLayout>
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-6 text-blue-600 text-center">About TaskMinder</h1>

                <div className="shadow-lg rounded-lg p-8 mb-8">
                    <div className="flex flex-col md:flex-row items-center mb-8">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="md:w-1/2 mb-4 md:mb-0"
                        >
                            <Image
                                src="/about.jpg?height=300&width=300"
                                alt="TaskMinder Team"
                                width={300}
                                height={300}
                                className="rounded-lg"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="md:w-1/2 md:pl-8"
                        >
                            <h2 className="text-2xl font-semibold mb-4 text-cyan-600">Our Mission</h2>
                            <p className="leading-relaxed">
                                At TaskMinder, we&apos;re on a mission to revolutionize the way teams manage tasks and track bugs.
                                We believe in the power of efficient collaboration and strive to provide tools that enhance
                                productivity while simplifying complex workflows.
                            </p>
                        </motion.div>
                    </div>

                    <h2 className="text-2xl font-semibold mb-4 text-cyan-600">Why Choose TaskMinder?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-cyan-50 p-6 rounded-lg shadow-sm"
                            >
                                <feature.icon className="h-8 w-8 text-cyan-500 mb-4" />
                                <h3 className="text-lg text-balance font-semibold mb-2 dark:text-black">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </PolicyLayout>
    )
}

