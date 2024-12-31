// import { motion } from 'framer-motion'

// const features = [
//     'Unlimited Access',
//     'Custom Branding',
//     '24/7 Customer Support',
//     'Advanced Analytics',
//     'Team Collaboration',
//     'API Access'
// ]

// export default function FeatureList() {
//     return (
//         <motion.div
//             className="mt-20 text-center"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.5 }}
//         >
//             <h2 className="text-3xl font-bold mb-8">All Plans Include</h2>
//             <div className="flex flex-wrap justify-center gap-4">
//                 {features.map((feature, index) => (
//                     <motion.div
//                         key={feature}
//                         className="rounded-full px-6 py-3"
//                         initial={{ opacity: 0, scale: 0.5 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         transition={{ duration: 0.5, delay: index * 0.1 }}
//                         whileHover={{ scale: 1.05, backgroundColor: '#4A5568' }}
//                     >
//                         {feature}
//                     </motion.div>
//                 ))}
//             </div>
//         </motion.div>
//     )
// }

import { motion } from 'framer-motion'

const features = [
    'Unlimited Access',
    'Custom Branding',
    '24/7 Customer Support',
    'Advanced Analytics',
    'Team Collaboration',
    'API Access'
]

export default function FeatureList() {
    return (
        <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
        >
            <h2 className="text-3xl font-bold mb-8">All Plans Include</h2>
            <div className="flex flex-wrap justify-center gap-4">
                {features.map((feature, index) => (
                    <motion.div
                        key={feature}
                        className="rounded-full border-2 px-6 py-3"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05, backgroundColor: '#4A5568' }}
                    >
                        {feature}
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}

