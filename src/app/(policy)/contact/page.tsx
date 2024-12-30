'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MessageSquare, Phone } from 'lucide-react'
import PolicyLayout from '@/features/auth/components/header-footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission logic here
        console.log('Form submitted:', { name, email, message })
    }

    return (
        <PolicyLayout>
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-6 text-blue-600 text-center">Contact Us</h1>

                <div className="shadow-lg rounded-lg p-8 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-2xl font-semibold mb-4 text-cyan-600">Get in Touch</h2>
                            <p className="mb-6">
                                We'd love to hear from you. Whether you have a question about features, trials, pricing, or anything else, our team is ready to answer all your questions.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <Mail className="h-6 w-6 text-cyan-500 mr-2" />
                                    <span>support@taskminder.com</span>
                                </div>
                                <div className="flex items-center">
                                    <Phone className="h-6 w-6 text-cyan-500 mr-2" />
                                    <span>+1 (555) 123-4567</span>
                                </div>
                                <div className="flex items-center">
                                    <MessageSquare className="h-6 w-6 text-cyan-500 mr-2" />
                                    <span>Live chat available 9am-5pm EST</span>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium">Name</label>
                                    <Input
                                        type="text"
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        className="mt-1 dark:border-white"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium">Email</label>
                                    <Input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="mt-1 dark:border-white"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium">Message</label>
                                    <Textarea
                                        id="message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        required
                                        className="mt-1 dark:border-white"
                                        rows={4}
                                    />
                                </div>
                                <Button type="submit" className="w-full dark:border-none">Send Message</Button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </PolicyLayout>
    )
}

