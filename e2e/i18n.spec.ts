import { expect, test } from '@playwright/test'
import {
  DESKTOP_VIEWPORT,
  MOBILE_VIEWPORT,
  englishURL,
  frenchURL
} from '../playwright.config'
import { openBurgerMenu } from './commons'

test.beforeEach(async ({ page }) => {
  await page.goto(frenchURL)
})

test.describe('Internationalization (i18n)', () => {
  test.describe('Mobile', () => {
    // Change viewport in mobile size
    test.use({ viewport: MOBILE_VIEWPORT })

    test('should be in French (FR) with default slug (/fr)', async ({
      page
    }) => {
      await expect(page).toHaveURL(frenchURL)
      await openBurgerMenu(page)
      await expect(page.getByRole('button', { name: 'Français' })).toBeVisible()
    })

    test('should open a popover with Français & English button', async ({
      page
    }) => {
      await openBurgerMenu(page)
      await page.getByRole('button', { name: 'Français' }).click()

      await expect(
        page.getByRole('dialog').getByRole('button', { name: 'Français' })
      ).toBeVisible()
      await expect(
        page.getByRole('dialog').getByRole('button', { name: 'English' })
      ).toBeVisible()
    })

    test('should switch language in English', async ({ page }) => {
      await openBurgerMenu(page)
      await page.getByRole('button', { name: 'Français' }).click()

      await page
        .getByRole('dialog')
        .getByRole('button', { name: 'English' })
        .click()

      await page.getByLabel('Open the menu').click() // Open burger menu with english label
      await expect(page).toHaveURL(englishURL)
      await expect(page.getByRole('button', { name: 'English' })).toBeVisible()
    })
  })

  test.describe('Desktop', () => {
    // Change viewport in desktop size
    test.use({ viewport: DESKTOP_VIEWPORT })

    test('should be in French (FR) with default slug (/fr)', async ({
      page
    }) => {
      await expect(page).toHaveURL(frenchURL)
      await expect(page.getByRole('button', { name: 'Français' })).toBeVisible()
    })

    test('should open a popover with Français & English button', async ({
      page
    }) => {
      await page.getByRole('button', { name: 'Français' }).click()

      await expect(
        page.getByRole('dialog').getByRole('button', { name: 'Français' })
      ).toBeVisible()
      await expect(
        page.getByRole('dialog').getByRole('button', { name: 'English' })
      ).toBeVisible()
    })

    test('should switch language in English', async ({ page }) => {
      await page.getByRole('button', { name: 'Français' }).click()

      await page
        .getByRole('dialog')
        .getByRole('button', { name: 'English' })
        .click()

      await expect(page).toHaveURL(englishURL)
      await expect(page.getByRole('button', { name: 'English' })).toBeVisible()
    })
  })
})
