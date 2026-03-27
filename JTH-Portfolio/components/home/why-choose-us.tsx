'use client'

import { motion } from 'framer-motion'
import { Sparkles, Zap, BadgeCheck, Eye, Lightbulb, HeadphonesIcon } from 'lucide-react'

const values = [
  {
    icon: Sparkles,
    title: 'Creative & Modern Design',
    description: 'Fresh, contemporary designs that capture attention and communicate your brand message effectively.'
  },
  {
    icon: Zap,
    title: 'Fast Turnaround',
    description: 'Quick delivery without compromising on quality. We understand deadlines and deliver on time.'
  },
  {
    icon: BadgeCheck,
    title: 'Quality Print & Digital Output',
    description: 'Production-ready files optimized for both print and digital platforms with the highest standards.'
  },
  {
    icon: Eye,
    title: 'Attention to Detail',
    description: 'Every pixel matters. We obsess over the small details that make designs exceptional.'
  },
  {
    icon: Lightbulb,
    title: 'Brand-Focused Thinking',
    description: 'We design with your brand strategy in mind, ensuring consistency across all touchpoints.'
  },
  {
    icon: HeadphonesIcon,
    title: 'Professional Client Support',
    description: 'Dedicated support throughout your project with clear communication and collaboration.'
  }
]

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            The JTH{' '}
            <span className="text-primary">Difference</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We combine creative excellence with professional reliability to deliver 
            exceptional results for every project.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300">
                {/* Gold accent */}
                <div className="absolute top-0 left-6 w-12 h-1 bg-gradient-to-r from-accent to-accent/50 rounded-b-full" />
                
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
