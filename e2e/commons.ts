import { Page, expect } from '@playwright/test'

// Visible only: after a language switch, the previous locale stays in the DOM, hidden
export const openBurgerMenu = async (page: Page) => {
  const menu = page
    .getByTestId('mobile-header-navbar')
    .filter({ visible: true })

  // The trigger only responds once React has hydrated it
  await expect(async () => {
    if (!(await menu.isVisible())) {
      await page
        .getByTestId('open-burger-menu-button')
        .filter({ visible: true })
        .click({ timeout: 2_000 })
    }
    await expect(menu).toBeVisible({ timeout: 1_000 })
  }).toPass()
}

export const closeBurgerMenu = async (page: Page) => {
  return page
    .getByTestId('close-sheet-button')
    .filter({ visible: true })
    .click()
}
