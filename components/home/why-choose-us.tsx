'use client'

import { motion } from 'framer-motion'
import { Sparkles, Zap, BadgeCheck, Eye, Lightbulb, HeadphonesIcon, Trophy, Palette } from 'lucide-react'
import { fadeUp, staggerContainer, defaultTransition, viewportOnce } from '@/lib/animations'

const values = [
  {
    icon: Sparkles,
    title: 'Creative & Modern Design',
    description: 'Fresh, contemporary designs that capture attention and communicate your brand message effectively.',
    size: 'lg',
  },
  {
    icon: Zap,
    title: 'Fast Turnaround',
    description: 'Quick delivery without compromising on quality.',
    size: 'sm',
  },
  {
    icon: BadgeCheck,
    title: 'Quality Output',
    description: 'Production-ready files optimized for both print and digital platforms.',
    size: 'sm',
  },
  {
    icon: Eye,
    title: 'Attention to Detail',
    description: 'Every pixel matters. We obsess over the small details.',
    size: 'sm',
  },
  {
    icon: Trophy,
    title: 'Award-Winning Team',
    description: 'Recognized for excellence in design and innovation.',
    size: 'sm',
  },
  {
    icon: Lightbulb,
    title: 'Brand-Focused Thinking',
    description: 'We design with your brand strategy in mind, ensuring consistency across all touchpoints.',
    size: 'sm',
  },
  {
    icon: Palette,
    title: 'Custom Illustrations',
    description: 'Unique visual assets that set your brand apart from competitors.',
    size: 'lg',
  },
  {
    icon: HeadphonesIcon,
    title: 'Professional Support',
    description: 'Dedicated support throughout your project with clear communication.',
    size: 'sm',
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          transition={defaultTransition}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 text-balance">
            The{' '}
            <span className="text-gradient">JTH Difference</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We combine creative excellence with professional reliability to deliver
            exceptional results for every project.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
        >
          <motion.div
            variants={fadeUp}
            transition={defaultTransition}
            className="col-span-1 md:col-span-2 lg:col-span-2"
          >
            <div className="card-premium p-8 lg:p-10 h-full relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-brand-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-brand flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  Creative & Modern Design
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Fresh, contemporary designs that capture attention and communicate your brand message effectively. We blend aesthetics with strategy to create visuals that resonate.
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-gradient-brand border-2 border-card flex items-center justify-center text-xs font-bold text-white">
                        {['JD', 'MK', 'AL'][i - 1]}
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">Trusted by 50+ brands</span>
                </div>
              </div>
            </div>
          </motion.div>

          {values.slice(1).map((value, index) => (
            <motion.div
              key={value.title}
              variants={fadeUp}
              transition={{ ...defaultTransition, delay: index * 0.05 }}
              className={value.size === 'lg' ? 'col-span-1 md:col-span-2 lg:col-span-2' : ''}
            >
              <div className="card-premium p-6 lg:p-7 h-full relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                    <value.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
