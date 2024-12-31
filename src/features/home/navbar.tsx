// "use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { motion, AnimatePresence } from "framer-motion"
// import Link from "next/link"
// import { ThemeToggle } from "../themes/themecomponents/theme-toggle"
// import { Providers } from "@/app/provider"
// import { Menu, X } from 'lucide-react'

// export function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

//   const menuVariants = {
//     open: { opacity: 1, y: 0 },
//     closed: { opacity: 0, y: "-100%" },
//   }

//   return (
//     <Providers>
//       <div className="mb-4 border-b border-violet-100 dark:border-violet-800">
//         <motion.header
//           className="sticky top-0 z-50 w-full px-4 lg:px-6 h-auto py-3 md:h-16 flex flex-wrap items-center backdrop-blur-sm bg-white/50 dark:bg-gray-900/50"
//           initial={{ y: -100 }}
//           animate={{ y: 0 }}
//           transition={{ type: "spring", duration: 0.8 }}
//         >
//           <Link className="flex items-center justify-center" href="/">
//             <img src="/logo.svg" height={40} width={40} alt="TaskMinder Logo" />
//             <span className="text-xl font-bold text-blue-600 ml-2">TaskMinder</span>
//           </Link>

//           <div className="ml-auto md:hidden">
//             <Button variant="ghost" size="icon" onClick={toggleMenu}>
//               {isMenuOpen ? <X /> : <Menu />}
//             </Button>
//           </div>

//           <nav className="hidden md:flex md:ml-auto items-center space-x-6">
//             <Link className="text-sm font-medium hover:text-violet-600 dark:hover:text-violet-400 transition-colors" href="#features">
//               Features
//             </Link>
//             <Link className="text-sm font-medium hover:text-violet-600 dark:hover:text-violet-400 transition-colors" href="/pricing">
//               Pricing
//             </Link>
//             <Link className="text-sm font-medium hover:text-violet-600 dark:hover:text-violet-400 transition-colors" href="/about">
//               About
//             </Link>
//           </nav>

//           <div className="hidden md:flex md:ml-6 items-center space-x-4">
//             <Link href="/sign-in">
//               <Button
//                 variant="outline"
//                 size="sm"
//                 className="border-violet-600 text-violet-600 hover:bg-violet-50 dark:border-violet-400 dark:text-violet-400 dark:hover:bg-violet-900"
//               >
//                 Log in
//               </Button>
//             </Link>
//             <Link href="/sign-up">
//               <Button
//                 size="sm"
//                 className="bg-gradient-to-r from-violet-600 to-cyan-400 hover:opacity-90 transition-opacity"
//               >
//                 Sign up
//               </Button>
//             </Link>
//             <ThemeToggle />
//           </div>
//         </motion.header>

//         <AnimatePresence>
//           {isMenuOpen && (
//             <motion.div
//               className="md:hidden"
//               initial="closed"
//               animate="open"
//               exit="closed"
//               variants={menuVariants}
//               transition={{ duration: 0.2 }}
//             >
//               <nav className="flex flex-col items-center py-4 space-y-4">
//                 <Link className="text-sm font-medium hover:text-violet-600 dark:hover:text-violet-400 transition-colors" href="#features" onClick={toggleMenu}>
//                   Features
//                 </Link>
//                 <Link className="text-sm font-medium hover:text-violet-600 dark:hover:text-violet-400 transition-colors" href="/pricing" onClick={toggleMenu}>
//                   Pricing
//                 </Link>
//                 <Link className="text-sm font-medium hover:text-violet-600 dark:hover:text-violet-400 transition-colors" href="/about" onClick={toggleMenu}>
//                   About
//                 </Link>
//                 <Link href="/sign-in" onClick={toggleMenu}>
//                   <Button
//                     variant="outline"
//                     size="sm"
//                     className="w-full border-violet-600 text-violet-600 hover:bg-violet-50 dark:border-violet-400 dark:text-violet-400 dark:hover:bg-violet-900"
//                   >
//                     Log in
//                   </Button>
//                 </Link>
//                 <Link href="/sign-up" onClick={toggleMenu}>
//                   <Button
//                     size="sm"
//                     className="w-full bg-gradient-to-r from-violet-600 to-cyan-400 hover:opacity-90 transition-opacity"
//                   >
//                     Sign up
//                   </Button>
//                 </Link>
//                 <ThemeToggle />
//               </nav>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </Providers>
//   )
// }
"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ThemeToggle } from "../themes/themecomponents/theme-toggle"
import { Providers } from "@/app/provider"
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const menuVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Providers>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 w-full px-4 lg:px-6 h-auto py-3 md:h-16 flex flex-wrap items-center transition-all duration-200 ease-in-out ${isScrolled ? 'backdrop-blur-md bg-white/70 dark:bg-gray-900/70' : ' '
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.8 }}
      >
        <Link className="flex items-center justify-center" href="/">
          <img src="/logo.svg" height={40} width={40} alt="TaskMinder Logo" />
          <span className="text-xl font-bold text-blue-600 ml-2">TaskMinder</span>
        </Link>

        <div className="ml-auto md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        <nav className="hidden md:flex md:ml-auto items-center space-x-6">
          <Link className="text-sm font-medium hover:text-violet-600 dark:hover:text-violet-400 transition-colors" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:text-violet-600 dark:hover:text-violet-400 transition-colors" href="/pricing">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:text-violet-600 dark:hover:text-violet-400 transition-colors" href="/about">
            About
          </Link>
        </nav>

        <div className="hidden md:flex md:ml-6 items-center space-x-4">
          <Link href="/sign-in">
            <Button
              variant="outline"
              size="sm"
              className="border-violet-600 text-violet-600 hover:bg-violet-50 dark:border-violet-400 dark:text-violet-400 dark:hover:bg-violet-900"
            >
              Log in
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button
              size="sm"
              className="bg-gradient-to-r from-violet-600 to-cyan-400 hover:opacity-90 transition-opacity"
            >
              Sign up
            </Button>
          </Link>
          <ThemeToggle />
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden fixed top-[56px] left-0 right-0 bg-white dark:bg-gray-900 shadow-md"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              transition={{ duration: 0.2 }}
            >
              <nav className="flex flex-col items-center py-4 space-y-4">
                <Link className="text-sm font-medium hover:text-violet-600 dark:hover:text-violet-400 transition-colors" href="#features" onClick={toggleMenu}>
                  Features
                </Link>
                <Link className="text-sm font-medium hover:text-violet-600 dark:hover:text-violet-400 transition-colors" href="/pricing" onClick={toggleMenu}>
                  Pricing
                </Link>
                <Link className="text-sm font-medium hover:text-violet-600 dark:hover:text-violet-400 transition-colors" href="/about" onClick={toggleMenu}>
                  About
                </Link>
                <Link href="/sign-in" onClick={toggleMenu}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-violet-600 text-violet-600 hover:bg-violet-50 dark:border-violet-400 dark:text-violet-400 dark:hover:bg-violet-900"
                  >
                    Log in
                  </Button>
                </Link>
                <Link href="/sign-up" onClick={toggleMenu}>
                  <Button
                    size="sm"
                    className="w-full bg-gradient-to-r from-violet-600 to-cyan-400 hover:opacity-90 transition-opacity"
                  >
                    Sign up
                  </Button>
                </Link>
                <ThemeToggle />
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
      <div className="h-[56px] md:h-16" aria-hidden="true" />
    </Providers>
  )
}





