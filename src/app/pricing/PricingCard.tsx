import AnimatedGradient from '@/features/home/animated-gradient'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface PricingTier {
    name: string
    monthlyPrice: number
    yearlyPrice: number
    features: string[]
    color: string
}

interface PricingCardProps {
    tier: PricingTier
    isYearly: boolean
    index: number
}

export default function PricingCard({ tier, isYearly, index }: PricingCardProps) {
    const price = isYearly ? tier.yearlyPrice : tier.monthlyPrice

    return (
        <motion.div
            className={`bg-gradient-to-br ${tier.color} rounded-2xl p-8 shadow-lg w-full max-w-sm`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
        >
            <h2 className="text-3xl font-bold mb-4">{tier.name}</h2>
            <div className="text-5xl font-bold mb-6">
                ₹{price}<span className="text-xl font-normal">/{isYearly ? 'year' : 'month'}</span>
            </div>
            <ul className="mb-8">
                {tier.features.map((feature, index) => (
                    <motion.li
                        key={feature}
                        className="flex items-center mb-2"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <svg className="w-5 h-5 mr-2 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        {feature}
                    </motion.li>
                ))}
            </ul>
            <Link href="/commingsoonpage">
                <motion.button
                    className="w-full bg-white text-gray-900 py-3 rounded-full font-bold hover:bg-opacity-90 transition duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Choose Plan
                </motion.button>
            </Link>
        </motion.div>
    )
}

