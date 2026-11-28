import { expect, test } from '@playwright/test'
import { frenchURL } from '../playwright.config'

test.describe('Opening hours', () => {
  test("should highlight today's row in Paris time", async ({ page }) => {
    await page.goto(`${frenchURL}/nous-trouver`)

    const today = new Intl.DateTimeFormat('fr-FR', {
      weekday: 'long',
      timeZone: 'Europe/Paris'
    }).format(new Date())
    const todayRow = page.locator('tr[aria-current="date"]')

    await expect(todayRow).toHaveCount(1)
    await expect(todayRow).toContainText(new RegExp(today, 'i'))
  })
})
