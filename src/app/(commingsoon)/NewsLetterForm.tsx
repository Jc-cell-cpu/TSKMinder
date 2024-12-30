'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function NewsletterForm() {
    const [email, setEmail] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would typically send the email to your backend
        console.log('Submitted email:', email)
        setIsSubmitted(true)
    }

    return (
        <motion.div
            className="w-full max-w-md mx-auto mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
        >
            {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-grow px-4 py-2 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white bg-white bg-opacity-20 backdrop-blur-sm placeholder-gray-300"
                        required
                    />
                    <motion.button
                        type="submit"
                        className="px-6 py-2 bg-gradient-to-r from-blue-400 to-purple-600 text-white rounded-full font-semibold hover:from-blue-500 hover:to-purple-700 transition duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Notify Me
                    </motion.button>
                </form>
            ) : (
                <motion.p
                    className="text-center text-xl bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    Thanks for subscribing!
                </motion.p>
            )}
        </motion.div>
    )
}