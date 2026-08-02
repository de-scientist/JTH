export interface BlogAuthor {
  name: string
  avatar?: string
}

export type BlogContentBlock =
  | { type: 'heading'; id: string; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'quote'; text: string }

export interface BlogPost {
  id: string
  slug: string
  title: string
  subtitle: string
  category: string
  tags: string[]
  featuredImage: string
  gallery: string[]
  author: BlogAuthor
  publishDate: string
  updatedDate: string
  readingTime: number
  excerpt: string
  featured: boolean
  seoTitle: string
  metaDescription: string
  keywords: string
  content: BlogContentBlock[]
  relatedPosts: string[]
}
