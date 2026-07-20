import type { Metadata } from 'next'

export const SITE_NAME = 'Cuppet'
export const SITE_URL = 'https://cuppet-app.shatslabs.chatgpt.site'

type MetadataOptions = {
  title: string
  description: string
  path: string
  type?: 'website' | 'article'
  published?: string
  noIndex?: boolean
}

export function createMetadata({
  title,
  description,
  path,
  type = 'website',
  published,
  noIndex = false,
}: MetadataOptions): Metadata {
  const fullTitle = title === SITE_NAME ? title : `${title} — ${SITE_NAME}`
  const sharedOpenGraph = {
    title: fullTitle,
    description,
    url: path,
    siteName: SITE_NAME,
  }

  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: path },
    openGraph:
      type === 'article'
        ? { ...sharedOpenGraph, type: 'article', publishedTime: published }
        : { ...sharedOpenGraph, type: 'website' },
    twitter: {
      card: 'summary',
      title: fullTitle,
      description,
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
  }
}
