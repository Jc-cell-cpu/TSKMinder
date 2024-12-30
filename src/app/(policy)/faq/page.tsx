'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import PolicyLayout from '@/features/auth/components/header-footer'

interface FAQItem {
    question: string
    answer: string
}

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const faqItems: FAQItem[] = [
        {
            question: "What is TaskMinder?",
            answer: "TaskMinder is a comprehensive task and bug tracking platform designed to help teams streamline their workflow, collaborate effectively, and boost productivity."
        },
        {
            question: "How do I get started with TaskMinder?",
            answer: "Getting started is easy! Simply sign up for an account, create your first project, and start adding tasks. You can invite team members to collaborate on your projects right away."
        },
        {
            question: "Is there a free trial available?",
            answer: "Yes, we offer a 14-day free trial for all new users. This gives you full access to all features so you can experience the full power of TaskMinder before committing to a paid plan."
        },
        {
            question: "Can I integrate TaskMinder with other tools?",
            answer: "TaskMinder offers integrations with a wide range of popular tools including Slack, GitHub, and Trello. Check our integrations page for a full list of available connections."
        },
        {
            question: "How secure is my data with TaskMinder?",
            answer: "We take data security very seriously. TaskMinder uses industry-standard encryption protocols to protect your data both in transit and at rest. We also regularly perform security audits to ensure the highest level of protection for our users."
        }
    ]

    return (
        <PolicyLayout>
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-6 text-blue-600 text-center">Frequently Asked Questions</h1>

                <div className="shadow-lg rounded-lg p-8 mb-8">
                    {faqItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="mb-4"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="flex justify-between items-center w-full text-left p-4 rounded-lg bg-cyan-50 hover:bg-cyan-100 transition-colors"
                            >
                                <span className="font-semibold text-cyan-700">{item.question}</span>
                                {openIndex === index ? (
                                    <ChevronUp className="h-5 w-5 text-cyan-500" />
                                ) : (
                                    <ChevronDown className="h-5 w-5 text-cyan-500" />
                                )}
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="p-4">{item.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </PolicyLayout>
    )
}

