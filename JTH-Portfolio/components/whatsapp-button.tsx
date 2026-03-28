'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import siteConfig from '@/data/site-config.json'

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
       href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
  "Hello JTH Graphix Production! I would like to make an order. Kindly guide me on the pricing, requirements, and next steps."
)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Chat on WhatsApp"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] blur-lg opacity-40 animate-pulse" />
        
        {/* Button */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 ring-2 ring-accent/20"
        >
          <MessageCircle className="w-7 h-7" />
        </motion.div>

        {/* Tooltip */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap"
            >
              <div className="bg-card text-foreground px-4 py-2 rounded-lg shadow-lg border border-border text-sm font-medium">
                Make an Order
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </a>
    </div>
  )
}
