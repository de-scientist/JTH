'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
           <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  className="w-7 h-7"
  fill="currentColor"
  aria-hidden="true"
>
  <path d="M12.04 2C6.58 2 2.15 6.43 2.15 11.89c0 1.93.5 3.83 1.45 5.5L2 22l4.73-1.24a9.86 9.86 0 005.31 1.55h.01c5.46 0 9.89-4.43 9.89-9.89A9.9 9.9 0 0012.04 2zm0 17.94a8.03 8.03 0 01-4.1-1.13l-.3-.18-2.81.74.75-2.73-.2-.28a8.01 8.01 0 01-1.23-4.25c0-4.43 3.6-8.03 8.03-8.03a8.04 8.04 0 018.03 8.03c0 4.43-3.6 8.03-8.03 8.03zm4.43-6.04c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12s-.62.78-.76.94c-.14.16-.28.18-.52.06-1.41-.7-2.33-1.25-3.27-2.83-.25-.43.25-.4.72-1.32.08-.15.04-.28 0-.4-.04-.12-.55-1.34-.75-1.83-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.41.06-.62.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.7 2.75 4.12 3.75 1.15.5 2.05.79 2.76 1.01.8.24 1.21.2 1.66.12.51-.1 1.53-.63 1.75-1.25.22-.62.22-1.15.15-1.25-.06-.1-.22-.16-.46-.28z"/>
</svg>
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
                Request a Quote on WhatsApp
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </a>
    </div>
  )
}
