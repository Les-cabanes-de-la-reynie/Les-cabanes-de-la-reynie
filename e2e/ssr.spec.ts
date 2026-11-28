import { expect, test } from '@playwright/test'

// Server responses don't depend on the browser: check them once
test.skip(
  ({ browserName, isMobile }) => browserName !== 'chromium' || isMobile,
  'Server HTML is checked once, on Desktop Chrome'
)

const SITE = 'Les cabanes de la Reynie'

const PAGES = [
  { path: '/fr', lang: 'fr', title: `Accueil - ${SITE}` },
  { path: '/fr/logements/yourte', lang: 'fr', title: `Yourte - ${SITE}` },
  { path: '/fr/nous-trouver', lang: 'fr', title: `Nous trouver - ${SITE}` },
  { path: '/fr/activites', lang: 'fr', title: `Activités - ${SITE}` },
  { path: '/en', lang: 'en', title: `Home - ${SITE}` },
  { path: '/en/accommodations/cabin', lang: 'en', title: `Cabin - ${SITE}` },
  { path: '/en/find-us', lang: 'en', title: `Find us - ${SITE}` },
  {
    path: '/fr/mentions-legales',
    lang: 'fr',
    title: `Mentions légales - ${SITE}`
  },
  { path: '/en/privacy-policy', lang: 'en', title: `Privacy policy - ${SITE}` }
]

test.describe('Server-side rendering', () => {
  for (const { path, lang, title } of PAGES) {
    test(`should render ${path} on the server`, async ({ request }) => {
      const response = await request.get(path)
      expect(response.status()).toBe(200)

      const html = await response.text()
      expect(html).toMatch(new RegExp(`<html[^>]*lang="${lang}"`))
      expect(html).toContain(`<title>${title}</title>`)
      expect(html).toContain('<h1')
      expect(html).toContain('hrefLang="fr"')
      expect(html).toContain('hrefLang="en"')
    })
  }

  test('should send the map notice before the map loads', async ({
    request
  }) => {
    const html = await (await request.get('/fr/nous-trouver')).text()

    expect(html).toContain('Adresse exacte communiquée après la réservation')
    // Today depends on the visitor's clock: only the browser marks it
    expect(html).not.toContain('aria-current="date"')
  })

  test('should keep the sign-in page out of search results', async ({
    request
  }) => {
    const html = await (await request.get('/fr/admin/auth/sign-in')).text()

    expect(html).toContain('<meta name="robots" content="noindex, nofollow"/>')
  })

  test('should answer unknown URLs with a real 404', async ({ request }) => {
    const response = await request.get('/fr/page-inexistante')

    expect(response.status()).toBe(404)
    expect(await response.text()).toContain('content="noindex"')
  })

  test('should redirect URLs without a locale to French', async ({
    request
  }) => {
    const response = await request.get('/page-sans-langue', {
      maxRedirects: 0
    })

    expect(response.status()).toBe(307)
    expect(response.headers()['location']).toMatch(/\/fr\/page-sans-langue$/)
  })
})
