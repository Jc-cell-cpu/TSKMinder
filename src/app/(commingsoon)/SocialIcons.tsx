'use client'

import { motion } from 'framer-motion'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const socialIcons = [
    { Icon: Facebook, href: 'https://facebook.com' },
    { Icon: Twitter, href: 'https://twitter.com' },
    { Icon: Instagram, href: 'https://instagram.com' },
    { Icon: Linkedin, href: 'https://linkedin.com' },
]

export default function SocialIcons() {
    return (
        <motion.div
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
        >
            {socialIcons.map(({ Icon, href }, index) => (
                <motion.a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-200 transition duration-300"
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    <Icon size={28} />
                </motion.a>
            ))}
        </motion.div>
    )
}

