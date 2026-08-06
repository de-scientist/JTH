import siteConfigJson from '@/data/site-config.json'

function stripSpaces(value: string): string {
  return value.replace(/\s/g, '')
}

export const siteConfig = {
  ...siteConfigJson,
  phoneHref: `tel:${stripSpaces(siteConfigJson.phone)}`,
  emailHref: `mailto:${siteConfigJson.email}`,
  whatsappHref: `https://wa.me/${stripSpaces(siteConfigJson.whatsapp)}`,
} as const

export type SiteConfig = typeof siteConfig
