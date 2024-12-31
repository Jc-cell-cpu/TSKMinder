// 'use client'

// import { useState } from 'react'
// import { motion } from 'framer-motion'
// import PricingCard from './PricingCard'
// import FeatureList from './FeatureList'
// import AnimatedGradient from '@/features/home/animated-gradient'
// import PolicyLayout from '@/features/auth/components/header-footer'

// export default function PricingPage() {
//     const [isYearly, setIsYearly] = useState(false)

//     const pricingTiers = [
//         {
//             name: 'Starter',
//             monthlyPrice: 190,
//             yearlyPrice: 1900,
//             features: ['1 User', '10 Projects', '5GB Storage', 'Basic Support'],
//             color: 'from-purple-400 to-indigo-500'
//         },
//         {
//             name: 'Pro',
//             monthlyPrice: 290,
//             yearlyPrice: 2900,
//             features: ['5 Users', 'Unlimited Projects', '50GB Storage', 'Priority Support', 'Advanced Analytics'],
//             color: 'from-pink-500 to-rose-500'
//         },
//         {
//             name: 'Enterprise',
//             monthlyPrice: 990,
//             yearlyPrice: 9990,
//             features: ['Unlimited Users', 'Unlimited Projects', '500GB Storage', '24/7 Dedicated Support', 'Custom Integrations'],
//             color: 'from-yellow-400 to-orange-500'
//         }
//     ]

//     return (
//         <PolicyLayout>
//             <div className="min-h-scr py-20 px-4">
//                 <AnimatedGradient />
//                 <motion.h1
//                     className="text-5xl font-bold text-center mb-10"
//                     initial={{ opacity: 0, y: -50 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5 }}
//                 >
//                     Choose Your Perfect Plan
//                 </motion.h1>

//                 <div className="flex justify-center mb-10">
//                     <motion.div
//                         className="bg-gray-700 p-1 rounded-full flex items-center"
//                         initial={{ opacity: 0, scale: 0.5 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         transition={{ duration: 0.5, delay: 0.2 }}
//                     >
//                         <button
//                             className={`px-4 py-2 rounded-full ${!isYearly ? 'bg-white text-gray-900' : 'text-white'}`}
//                             onClick={() => setIsYearly(false)}
//                         >
//                             Monthly
//                         </button>
//                         <button
//                             className={`px-4 py-2 rounded-full ${isYearly ? 'bg-white text-gray-900' : 'text-white'}`}
//                             onClick={() => setIsYearly(true)}
//                         >
//                             Yearly
//                         </button>
//                     </motion.div>
//                 </div>

//                 <div className="flex justify-center gap-8">
//                     {pricingTiers.map((tier, index) => (
//                         <PricingCard
//                             key={tier.name}
//                             tier={tier}
//                             isYearly={isYearly}
//                             index={index}
//                         />
//                     ))}
//                 </div>

//                 <FeatureList />
//             </div>
//         </PolicyLayout>
//     )
// }

'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import PricingCard from './PricingCard'
import FeatureList from './FeatureList'
import AnimatedGradient from '@/features/home/animated-gradient'
import PolicyLayout from '@/features/auth/components/header-footer'

export default function PricingPage() {
    const [isYearly, setIsYearly] = useState(false)

    const pricingTiers = [
        {
            name: 'Starter',
            monthlyPrice: 1999,
            yearlyPrice: 19990,
            features: ['1 User', '10 Projects', '5GB Storage', 'Basic Support'],
            color: 'from-purple-400 to-indigo-500'
        },
        {
            name: 'Pro',
            monthlyPrice: 4999,
            yearlyPrice: 49990,
            features: ['5 Users', 'Unlimited Projects', '50GB Storage', 'Priority Support', 'Advanced Analytics'],
            color: 'from-pink-500 to-rose-500'
        },
        {
            name: 'Enterprise',
            monthlyPrice: 9999,
            yearlyPrice: 99990,
            features: ['Unlimited Users', 'Unlimited Projects', '500GB Storage', '24/7 Dedicated Support', 'Custom Integrations'],
            color: 'from-yellow-400 to-orange-500'
        }
    ]

    return (
        <PolicyLayout>
            <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <AnimatedGradient />
                <motion.h1
                    className="text-4xl sm:text-5xl font-bold text-center mb-10"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Choose Your Perfect Plan
                </motion.h1>

                <div className="flex justify-center mb-10">
                    <motion.div
                        className="bg-gray-700 p-1 rounded-full flex items-center"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <button
                            className={`px-4 py-2 rounded-full ${!isYearly ? 'bg-white text-gray-900' : 'text-white'}`}
                            onClick={() => setIsYearly(false)}
                        >
                            Monthly
                        </button>
                        <button
                            className={`px-4 py-2 rounded-full ${isYearly ? 'bg-white text-gray-900' : 'text-white'}`}
                            onClick={() => setIsYearly(true)}
                        >
                            Yearly
                        </button>
                    </motion.div>
                </div>

                <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-8 mb-20">
                    {pricingTiers.map((tier, index) => (
                        <PricingCard
                            key={tier.name}
                            tier={tier}
                            isYearly={isYearly}
                            index={index}
                        />
                    ))}
                </div>

                <FeatureList />
            </div>
        </PolicyLayout>
    )
}

