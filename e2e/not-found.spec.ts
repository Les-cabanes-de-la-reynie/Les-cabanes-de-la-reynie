import { expect, test } from '@playwright/test'
import { englishURL, frenchURL } from '../playwright.config'

test.describe('Not found page', () => {
  test('should answer a 404 with the site page in French', async ({ page }) => {
    const response = await page.goto(`${frenchURL}/page-inexistante`)
    expect(response?.status()).toBe(404)

    await expect(
      page.getByRole('heading', {
        name: "404 - La page demandée n'a pas été trouvée"
      })
    ).toBeVisible()
    // next dev and next start resolve the 404 title differently: check the site name
    await expect(page).toHaveTitle(/Les cabanes de la Reynie/)
    await expect(
      page.getByTestId('app-main-logo').filter({ visible: true })
    ).toBeVisible()
  })

  test('should answer a 404 in English', async ({ page }) => {
    const response = await page.goto(`${englishURL}/unknown-page`)
    expect(response?.status()).toBe(404)

    await expect(
      page.getByRole('heading', { name: '404 - Page not found' })
    ).toBeVisible()
    await expect(page).toHaveTitle(/Les cabanes de la Reynie/)
  })

  test('should lead back to the home page', async ({ page }) => {
    await page.goto(`${frenchURL}/page-inexistante`)

    await page
      .getByRole('link', { name: "Revenir à la page d'accueil" })
      .click()

    await expect(page).toHaveURL(frenchURL)
  })
})
