'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Target,
  Eye,
  Palette,
  Lightbulb,
  Award,
  ShieldCheck,
  Users,
  HeartHandshake,
  TrendingUp,
  BadgeCheck,
  Sparkles,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { companyJourney } from '@/lib/company'
import { PageHero } from '@/components/page-hero'

const values = [
  {
    icon: Palette,
    title: 'Creativity First',
    description: 'We challenge conventional thinking and transform ideas into compelling, meaningful and impactful creative solutions.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We embrace emerging technologies, new ideas and better ways of working to deliver solutions that keep our clients ahead of the curve.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We are committed to high standards in design, technology, service delivery and every interaction with our clients.',
  },
  {
    icon: ShieldCheck,
    title: 'Integrity',
    description: 'We operate with honesty, transparency, accountability and professionalism, building relationships founded on trust.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We believe great results come from listening, sharing ideas and working closely with clients, partners and our team.',
  },
  {
    icon: Target,
    title: 'Results Driven',
    description: 'We design and build with purpose, ensuring every solution communicates effectively and drives measurable results.',
  },
  {
    icon: HeartHandshake,
    title: 'Client Success',
    description: 'We put our clients goals at the heart of what we do, creating solutions designed to deliver genuine business value and measurable results.',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Growth',
    description: 'We continuously learn, adapt and improve our skills, processes and solutions to remain relevant in a rapidly changing digital world.',
  },
  {
    icon: BadgeCheck,
    title: 'Quality Assured',
    description: 'We pay attention to detail and consistently deliver reliable, polished and professional solutions that meet or exceed expectations.',
  },
]

const creates = [
  'Branding & Identity',
  'Graphic & Visual Design',
  'UI/UX & Digital Experiences',
  'Websites, Software & Automation',
]

const milestones = companyJourney

export function AboutContent() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        badge="About JTH"
        title="More Than a Design Studio — A Technology Partner"
        highlightedWord="A Technology Partner"
        description="JTH Graphix Production is your creative and technology partner. We help businesses turn ideas into brands, digital experiences and technology solutions that drive real, measurable growth."
        imageSrc="/images/about-studio.jpg"
        imageAlt="JTH Graphix Production team collaborating in a creative studio environment"
      />

      {/* Story Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                From Studio to Creative &amp; Technology Partner
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  JTH Graphix Production was born from a passion for visual storytelling
                  and a commitment to helping brands communicate their unique value.
                  What started as a small design studio has grown into a full-service
                  creative and technology partner serving clients across Kenya and beyond.
                </p>
                <p>
                  We believe that great design is more than aesthetics — it&apos;s about
                  creating meaningful connections between brands and their audiences.
                  Today we pair that creative foundation with technology, building
                  websites, software and automation that help businesses operate smarter.
                </p>
                <p>
                  Our team combines creative expertise with strategic thinking and
                  engineering to deliver solutions that not only look stunning but also
                  effectively communicate your brand message and drive your business goals.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden">
                <Image
                  src="/images/about-studio.jpg"
                  alt="JTH Graphix Production Studio"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/10 dark:bg-black/20" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Core Promise */}
      <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center mb-14"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-[0.18em] mb-6">
              OUR CORE PROMISE
            </span>
            <p className="font-display text-2xl md:text-3xl lg:text-[2.6rem] font-bold leading-tight text-foreground text-balance">
              We don&apos;t just create designs or develop technology. We transform ideas
              into{' '}
              <span className="text-gradient">brands, experiences</span> and{' '}
              <span className="text-gradient">digital solutions</span> that help
              businesses <span className="text-gradient-accent">grow</span>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            <div className="rounded-3xl border border-border bg-card p-8">
              <h3 className="font-display text-lg font-semibold text-muted-foreground mb-5 uppercase tracking-wide">
                What we create
              </h3>
              <ul className="space-y-3">
                {creates.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground font-medium">
                    <span className="w-2 h-2 rounded-full bg-primary/40" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl bg-gradient-brand p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
              <h3 className="font-display text-lg font-semibold text-white/70 mb-5 uppercase tracking-wide relative z-10">
                What you get
              </h3>
              <p className="font-display text-5xl md:text-6xl font-bold text-white leading-none relative z-10">
                Growth
              </p>
              <p className="text-white/80 mt-4 text-sm relative z-10">
                Not just deliverables — outcomes that move your business forward.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision & Core Values — three distinct layers */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Mission, Vision &amp; Core Values
            </h2>
          </motion.div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-3xl bg-card border border-border"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower businesses and organizations through innovative design, technology and digital solutions that strengthen brands, improve experiences and drive sustainable growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 rounded-3xl bg-card border border-border"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To become a leading creative and technology partner in Africa, transforming businesses through exceptional design, innovative technology and solutions that create lasting impact. 
              </p>
            </motion.div>
          </div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              How We Operate
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our Core Values
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="p-6 rounded-2xl bg-card border border-border text-center hover:border-primary/30 transition-colors"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <value.icon className="w-7 h-7 text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14 max-w-2xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              From an Idea to a{' '}
              <span className="text-gradient">Growing Enterprise</span>
            </h2>
            <p className="text-muted-foreground text-lg mt-4 leading-relaxed">
              Every great company starts with a vision. JTH&apos;s journey began with a
              shared idea, grew through action and learning, and continues to evolve into
              a creative and technology partner for businesses and organizations.
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Central / left timeline line */}
            <div
              className="absolute left-6 md:left-1/2 top-2 bottom-2 w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary/40 via-border to-primary/40"
              aria-hidden="true"
            />

            {milestones.map((milestone, index) => {
              const isLeft = index % 2 === 0
              return (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="relative grid md:grid-cols-2 md:gap-x-16 mb-10 last:mb-0"
                >
                  {/* Node */}
                  <div className="absolute left-6 md:left-1/2 top-1 -translate-x-1/2 z-10">
                    <div
                      className={
                        milestone.current
                          ? 'flex h-12 w-12 items-center justify-center rounded-full bg-gradient-brand text-white shadow-lg shadow-primary/30 ring-4 ring-primary/15'
                          : 'flex h-12 w-12 items-center justify-center rounded-full bg-card border border-border text-primary shadow-sm'
                      }
                    >
                      <milestone.icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className={
                      isLeft
                        ? 'pl-16 md:pl-0 md:pr-16 md:text-right'
                        : 'pl-16 md:pl-16 md:col-start-2'
                    }
                  >
                    <div
                      className={
                        milestone.current
                          ? 'card-premium p-6 rounded-2xl border-primary/30 shadow-lg shadow-primary/10 hover:border-primary/40 transition-all duration-300'
                          : 'card-premium p-6 rounded-2xl hover:border-primary/20 transition-all duration-300'
                      }
                    >
                      <div
                        className={
                          isLeft
                            ? 'flex items-center gap-3 md:justify-end'
                            : 'flex items-center gap-3'
                        }
                      >
                        <span className="font-display text-3xl font-bold text-gradient">
                          {milestone.year}
                        </span>
                        {milestone.current && (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                            Current
                          </span>
                        )}
                      </div>
                      <h3 className="mt-2 text-lg font-semibold text-foreground">
                        {milestone.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Sparkles className="w-12 h-12 text-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Build With JTH?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let&apos;s transform your idea into a brand, an experience, or a digital
              solution. Start a project with your creative and technology partner today.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-gradient-brand hover:opacity-90 gap-2 h-12 px-8 text-white">
                <Link href="/contact">
                  Start a Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary-dark gap-2 h-12 px-8">
                <Link href="/portfolio">
                  View Our Work
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
