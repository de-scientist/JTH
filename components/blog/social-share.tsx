'use client'

import { useState } from 'react'
import { Facebook, Twitter, Linkedin, Link2, Check, MessageCircle } from 'lucide-react'

export function SocialShare({ title }: { title: string }) {
  const [copied, setCopied] = useState(false)

  const url = typeof window !== 'undefined' ? window.location.href : ''
  const encodedTitle = encodeURIComponent(title)
  const encodedUrl = encodeURIComponent(url)

  const links = [
    {
      label: 'Share on Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      Icon: Facebook,
      bg: 'hover:bg-[#1877F2]',
    },
    {
      label: 'Share on X',
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      Icon: Twitter,
      bg: 'hover:bg-[#000000]',
    },
    {
      label: 'Share on LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      Icon: Linkedin,
      bg: 'hover:bg-[#0A66C2]',
    },
    {
      label: 'Share on WhatsApp',
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      Icon: MessageCircle,
      bg: 'hover:bg-[#25D366]',
    },
  ]

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-sm font-medium text-muted-foreground mr-1">
        Share:
      </span>
      {links.map(({ label, href, Icon, bg }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-white hover:border-transparent transition-all duration-300 ${bg}`}
        >
          <Icon className="w-4.5 h-4.5" />
        </a>
      ))}
      <button
        onClick={handleCopy}
        aria-label="Copy link"
        className={`w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center transition-all duration-300 cursor-pointer ${
          copied
            ? 'text-primary border-primary/40 bg-primary/10'
            : 'text-muted-foreground hover:text-foreground hover:border-primary/30'
        }`}
      >
        {copied ? <Check className="w-4.5 h-4.5" /> : <Link2 className="w-4.5 h-4.5" />}
      </button>
    </div>
  )
}
