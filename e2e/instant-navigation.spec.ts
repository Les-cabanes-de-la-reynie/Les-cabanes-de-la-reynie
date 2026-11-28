import { expect, test } from '@playwright/test'
import { DESKTOP_VIEWPORT, englishURL, frenchURL } from '../playwright.config'

// next dev reports prerender and instant-navigation problems as console errors
test.skip(
  ({ browserName, isMobile }) => browserName !== 'chromium' || isMobile,
  'Checked once, on Desktop Chrome'
)

const LOCALES = [
  {
    home: frenchURL,
    menu: 'Logements',
    subLinks: ['yourte', 'cabane'],
    links: ['Nous trouver', 'Activités', 'Accueil']
  },
  {
    home: englishURL,
    menu: 'Accommodations',
    subLinks: ['yurt', 'cabin'],
    links: ['Find us', 'Activities', 'Home']
  }
]

test.describe('Instant navigation', () => {
  test.use({ viewport: DESKTOP_VIEWPORT })

  test('should reach every page without a Next.js prerender error', async ({
    page
  }) => {
    const prerenderErrors: string[] = []
    page.on('console', message => {
      if (
        message.type() === 'error' &&
        message.text().includes('Next.js encountered')
      ) {
        prerenderErrors.push(message.text().split('\n')[0])
      }
    })

    for (const { home, menu, subLinks, links } of LOCALES) {
      await page.goto(home)
      const navbar = page.getByTestId('desktop-header-navbar')

      for (const subLinkName of subLinks) {
        const subLink = page.getByTestId(
          `accommodations-sub-navigation-${subLinkName}`
        )

        // A hover that lands before hydration is lost, so retry until it opens
        await expect(async () => {
          await navbar.getByText(menu).hover()
          await expect(subLink).toBeVisible({ timeout: 1_000 })
        }).toPass()

        const href = await subLink.getAttribute('href')
        await subLink.click()
        await page.waitForURL(`**${href}`)
      }

      for (const name of links) {
        const link = navbar.getByRole('link', { name, exact: true })
        const href = await link.getAttribute('href')
        await link.click()
        await page.waitForURL(`**${href}`)
      }
    }

    await page.waitForLoadState('networkidle')
    expect(prerenderErrors).toEqual([])
  })
})
