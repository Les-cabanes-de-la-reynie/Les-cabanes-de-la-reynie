import { expect, Page, test } from '@playwright/test'
import { englishURL, frenchURL } from '../playwright.config'

const LEGAL_LINKS = {
  fr: [
    ['footer-legal-notice-link', '/fr/mentions-legales', 'Mentions légales'],
    [
      'footer-terms-link',
      '/fr/conditions-utilisation',
      "Conditions d'utilisation"
    ],
    [
      'footer-privacy-link',
      '/fr/confidentialite',
      'Politique de confidentialité'
    ]
  ],
  en: [
    ['footer-legal-notice-link', '/en/legal-notice', 'Legal notice'],
    ['footer-terms-link', '/en/terms-of-use', 'Terms of use'],
    ['footer-privacy-link', '/en/privacy-policy', 'Privacy policy']
  ]
}

// Visible only: hidden routes stay mounted after a navigation
const footer = (page: Page) =>
  page.getByTestId('app-footer').filter({ visible: true })

test.describe('Footer', () => {
  for (const [locale, home] of [
    ['fr', frenchURL],
    ['en', englishURL]
  ] as const) {
    test(`should open each legal document (${locale})`, async ({ page }) => {
      await page.goto(home)

      for (const [testId, path, title] of LEGAL_LINKS[locale]) {
        await footer(page).getByTestId(testId).click()
        await page.waitForURL(`**${path}`)
        await expect(
          page.getByRole('heading', { level: 1, name: title })
        ).toBeVisible()
      }
    })
  }

  test('should take the owner to the sign-in page', async ({ page }) => {
    await page.goto(frenchURL)

    await footer(page).getByTestId('footer-owner-area-link').click()

    await page.waitForURL('**/fr/admin/auth/sign-in')
    await expect(
      page.getByRole('button', { name: 'Se connecter' })
    ).toBeVisible()
  })

  test('should mark the current legal document', async ({ page }) => {
    await page.goto(`${frenchURL}/confidentialite`)

    await expect(page.getByTestId('legal-nav-privacy')).toHaveAttribute(
      'aria-current',
      'page'
    )
    await expect(page.getByTestId('legal-nav-notice')).not.toHaveAttribute(
      'aria-current'
    )
  })
})
