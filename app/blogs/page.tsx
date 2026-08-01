import type { Metadata } from 'next'
import blogPosts from '@/data/blog.json'
import { BlogBrowser } from '@/components/blog/blog-browser'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Expert insights on branding, design strategy, and digital growth from the JTH Graphix Production team.',
  openGraph: {
    title: 'Blog | JTH Graphix Production',
    description:
      'Expert insights on branding, design strategy, and digital growth from the JTH Graphix Production team.',
    type: 'website',
    url: 'https://jthgraphixproduction.com/blogs',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | JTH Graphix Production',
    description:
      'Expert insights on branding, design strategy, and digital growth.',
  },
}

export default function BlogsPage() {
  return <BlogBrowser posts={blogPosts} />
}
