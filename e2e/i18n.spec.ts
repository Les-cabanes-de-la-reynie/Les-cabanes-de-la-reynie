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

      await expect(page.getByTestId('switch-language-fr')).toBeVisible()
      await expect(page.getByTestId('switch-language-en')).toBeVisible()
    })

    test('should switch language in English', async ({ page }) => {
      await openBurgerMenu(page)
      await page.getByRole('button', { name: 'Français' }).click()
      await page.getByTestId('switch-language-en').click()

      await expect(page).toHaveURL(englishURL)
      await expect(page.locator('html')).toHaveAttribute('lang', 'en')
      await expect(page).toHaveTitle('Home - Les cabanes de la Reynie')

      // The French layout stays mounted but hidden: one header, its menu closed
      await expect(
        page.getByTestId('open-burger-menu-button').filter({ visible: true })
      ).toHaveCount(1)
      await expect(
        page.getByTestId('mobile-header-navbar').filter({ visible: true })
      ).toHaveCount(0)

      await openBurgerMenu(page)
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

      await expect(page.getByTestId('switch-language-fr')).toBeVisible()
      await expect(page.getByTestId('switch-language-en')).toBeVisible()
    })

    test('should switch language in English', async ({ page }) => {
      await page.getByRole('button', { name: 'Français' }).click()
      await page.getByTestId('switch-language-en').click()

      await expect(page).toHaveURL(englishURL)
      await expect(page.locator('html')).toHaveAttribute('lang', 'en')
      await expect(page).toHaveTitle('Home - Les cabanes de la Reynie')

      await expect(page.getByRole('button', { name: 'English' })).toBeVisible()
    })

    test('should switch back to French', async ({ page }) => {
      await page.getByRole('button', { name: 'Français' }).click()
      await page.getByTestId('switch-language-en').click()
      await expect(page).toHaveURL(englishURL)

      // The French layout stays mounted but hidden: target the visible menu
      await page.getByRole('button', { name: 'English' }).click()
      await page
        .getByTestId('switch-language-fr')
        .filter({ visible: true })
        .click()

      await expect(page).toHaveURL(frenchURL)
      await expect(page.locator('html')).toHaveAttribute('lang', 'fr')
      await expect(page).toHaveTitle('Accueil - Les cabanes de la Reynie')
    })
  })
})
