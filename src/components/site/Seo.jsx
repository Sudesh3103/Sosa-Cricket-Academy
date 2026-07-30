import { useEffect } from 'react'
import { siteMeta } from '../../data/siteMeta'

const upsertMeta = (selector, attributes, content) => {
  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement('meta')
    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, value)
    })
    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
}

const Seo = ({
  title = siteMeta.defaultTitle,
  description = siteMeta.defaultDescription,
  keywords = siteMeta.defaultKeywords,
  image = siteMeta.defaultOgImage,
  path = '/',
  type = 'website',
  structuredData,
}) => {
  useEffect(() => {
    const origin = window.location.origin
    const absoluteUrl = new URL(path, origin).toString()
    const absoluteImage = image.startsWith('http') ? image : new URL(image, origin).toString()
    const keywordValue = Array.isArray(keywords) ? keywords.join(', ') : keywords

    document.title = title

    upsertMeta('meta[name="description"]', { name: 'description' }, description)
    upsertMeta('meta[name="keywords"]', { name: 'keywords' }, keywordValue)
    upsertMeta('meta[name="robots"]', { name: 'robots' }, 'index, follow')
    upsertMeta('meta[name="theme-color"]', { name: 'theme-color' }, '#06110d')
    upsertMeta('meta[property="og:type"]', { property: 'og:type' }, type)
    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name' }, siteMeta.siteName)
    upsertMeta('meta[property="og:title"]', { property: 'og:title' }, title)
    upsertMeta('meta[property="og:description"]', { property: 'og:description' }, description)
    upsertMeta('meta[property="og:url"]', { property: 'og:url' }, absoluteUrl)
    upsertMeta('meta[property="og:image"]', { property: 'og:image' }, absoluteImage)
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card' }, 'summary_large_image')
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title' }, title)
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description' }, description)
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image' }, absoluteImage)

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', absoluteUrl)

    const existingSchema = document.head.querySelector('#seo-structured-data')
    if (existingSchema) {
      existingSchema.remove()
    }

    if (structuredData) {
      const script = document.createElement('script')
      script.id = 'seo-structured-data'
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(structuredData)
      document.head.appendChild(script)
    }
  }, [description, image, keywords, path, structuredData, title, type])

  return null
}

export default Seo
