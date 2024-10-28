import { ThemeMode } from '@/features/themeSwitcher/types'
import { expect, test } from '@playwright/test'
import {
  DESKTOP_VIEWPORT,
  MOBILE_VIEWPORT,
  frenchURL
} from '../playwright.config'
import { openBurgerMenu } from './commons'

test.beforeEach(async ({ page }) => {
  await page.goto(frenchURL)
})

test.describe('Theme switcher (dark/light mode)', () => {
  test.describe('Mobile', () => {
    // Change viewport in mobile size
    test.use({ viewport: MOBILE_VIEWPORT, colorScheme: ThemeMode.Dark })

    test('should be in dark mode on load', async ({ page }) => {
      // Dark mode by default
      await expect(page.locator('html')).toHaveAttribute(
        'class',
        ThemeMode.Dark
      )
    })

    test('should change from dark mode to light mode', async ({ page }) => {
      await openBurgerMenu(page)
      await page.getByRole('button', { name: 'Changer de thème' }).click()
      await page.getByRole('menuitem', { name: 'Clair' }).click()
      await expect(page.locator('html')).toHaveAttribute(
        'class',
        ThemeMode.Light
      )
    })
  })

  test.describe('Desktop', () => {
    // Change viewport in desktop size
    test.use({ viewport: DESKTOP_VIEWPORT, colorScheme: ThemeMode.Dark })

    test('should be in dark mode on load', async ({ page }) => {
      // Dark mode by default
      await expect(page.locator('html')).toHaveAttribute(
        'class',
        ThemeMode.Dark
      )
    })

    test('should change from dark mode to light mode', async ({ page }) => {
      await page.getByRole('button', { name: 'Changer de thème' }).click()
      await page.getByRole('menuitem', { name: 'Clair' }).click()
      await expect(page.locator('html')).toHaveAttribute(
        'class',
        ThemeMode.Light
      )
    })
  })
})
