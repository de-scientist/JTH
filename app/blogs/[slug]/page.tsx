import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import blogPosts from '@/data/blog.json'
import type { BlogPost } from '@/lib/blog-types'
import { BlogArticle } from '@/components/blog/blog-article'
import { BlogNewsletter } from '@/components/blog/blog-newsletter'
import Script from 'next/script'

const posts = blogPosts as BlogPost[]

const BASE_URL = 'https://jthgraphixproduction.com'

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    return {
      title: 'Article Not Found',
    }
  }

  const url = `${BASE_URL}/blogs/${post.slug}`

  return {
    title: post.seoTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'article',
      locale: 'en_US',
      siteName: 'JTH Graphix Production',
      title: post.seoTitle,
      description: post.metaDescription,
      url,
      images: [
        {
          url: `${BASE_URL}${post.featuredImage}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      publishedTime: post.publishDate,
      modifiedTime: post.updatedDate,
      authors: [post.author.name],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seoTitle,
      description: post.metaDescription,
      images: [`${BASE_URL}${post.featuredImage}`],
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  )
  const currentIndex = sortedPosts.findIndex((p) => p.slug === post.slug)

  const relatedPosts = post.relatedPosts
    .map((relatedSlug) => posts.find((p) => p.slug === relatedSlug))
    .filter((p): p is BlogPost => Boolean(p))

  const prevPost = currentIndex > 0 ? sortedPosts[currentIndex - 1] : null
  const nextPost = currentIndex >= 0 && currentIndex < sortedPosts.length - 1 ? sortedPosts[currentIndex + 1] : null

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    keywords: post.keywords,
    image: `${BASE_URL}${post.featuredImage}`,
    datePublished: post.publishDate,
    dateModified: post.updatedDate,
    author: {
      '@type': 'Organization',
      name: post.author.name,
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'JTH Graphix Production',
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/blogs/${post.slug}`,
    },
    articleSection: post.category,
    wordCount: post.content
      .filter((b) => b.type === 'paragraph')
      .reduce((acc, b) => acc + (b.type === 'paragraph' ? b.text.split(' ').length : 0), 0),
  }

  return (
    <>
      <Script
        type="application/ld+json"
        id="article-jsonld"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogArticle
        post={post}
        relatedPosts={relatedPosts}
        prevPost={prevPost}
        nextPost={nextPost}
      />
      <BlogNewsletter />
    </>
  )
}
