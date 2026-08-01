'use client'

import * as React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, Laptop, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'

const themeOptions = [
  { value: 'light', label: 'Light', icon: Sun },
  { value: 'dark', label: 'Dark', icon: Moon },
  { value: 'system', label: 'System', icon: Laptop },
] as const

type ThemeValue = (typeof themeOptions)[number]['value']

const iconTransition = {
  duration: 0.3,
  ease: [0.22, 1, 0.36, 1] as const,
}

const menuTransition = {
  duration: 0.18,
  ease: [0.22, 1, 0.36, 1] as const,
}

interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const activeTheme = mounted ? (theme ?? 'system') : 'system'
  const resolved = mounted ? (resolvedTheme ?? 'light') : 'light'
  const ActiveIcon = resolved === 'dark' ? Moon : Sun

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            'relative h-10 w-10 rounded-xl border border-border/70 bg-card/60 text-muted-foreground shadow-sm backdrop-blur-md transition-colors duration-300 hover:border-primary/40 hover:bg-primary/10 hover:text-primary focus-visible:ring-2 focus-visible:ring-primary/40',
            className
          )}
          aria-label="Change theme"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={resolved}
              initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
              transition={iconTransition}
              className="flex items-center justify-center"
            >
              <ActiveIcon className="h-5 w-5" strokeWidth={2} />
            </motion.span>
          </AnimatePresence>
          <span className="sr-only">Change theme</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        sideOffset={10}
        className="w-60 rounded-2xl border border-border/70 bg-popover/90 p-2 shadow-2xl shadow-primary/10 backdrop-blur-2xl"
      >
        <DropdownMenuLabel className="px-2.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Appearance
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="mx-1.5 mb-1.5 bg-border/60" />

        {themeOptions.map(({ value, label, icon: Icon }) => {
          const isActive = activeTheme === value
          return (
            <DropdownMenuItem
              key={value}
              onSelect={() => setTheme(value)}
              className={cn(
                'relative flex cursor-pointer items-center gap-3 rounded-xl px-2.5 py-2.5 text-sm font-medium outline-none transition-colors duration-200 focus:bg-primary/10 focus:text-primary',
                isActive
                  ? 'bg-primary/10 text-primary'
                  : 'text-muted-foreground data-[highlighted]:bg-primary/5 data-[highlighted]:text-foreground'
              )}
            >
              <Icon
                className={cn(
                  'h-4 w-4 shrink-0 transition-colors duration-200',
                  isActive ? 'text-primary' : 'text-muted-foreground'
                )}
              />
              <span className="flex-1">{label}</span>

              {value === 'system' && (
                <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary">
                  Default
                </span>
              )}

              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.4 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.4 }}
                    transition={menuTransition}
                    className="flex shrink-0 items-center justify-center text-primary"
                    aria-hidden="true"
                  >
                    <Check className="h-4 w-4" strokeWidth={2.5} />
                  </motion.span>
                )}
              </AnimatePresence>
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
