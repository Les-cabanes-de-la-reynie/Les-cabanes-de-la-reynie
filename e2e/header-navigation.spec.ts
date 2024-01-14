import { test, expect } from '@playwright/test'
import {
  DESKTOP_VIEWPORT,
  MOBILE_VIEWPORT,
  frenchURL
} from '../playwright.config'
import { closeBurgerMenu, openBurgerMenu } from './commons'

const HOME_PAGE_H1_TEXT = 'Les cabanes de la Reynie'

test.beforeEach(async ({ page }) => {
  await page.goto(frenchURL)
})

test.describe('Header navigation', () => {
  test.describe('Mobile', () => {
    // Change viewport in mobile size
    test.use({ viewport: MOBILE_VIEWPORT })

    test('should be in the home page on load', async ({ page }) => {
      await expect(page).toHaveURL(frenchURL)
      await expect(
        page.getByRole('heading', { name: HOME_PAGE_H1_TEXT })
      ).toBeVisible()
    })

    test('should be in the home page after clicked on the logo', async ({
      page
    }) => {
      await page.locator('[data-test="app-main-logo"]').click()
      await expect(page).toHaveURL(frenchURL)
      await expect(
        page.getByRole('heading', { name: HOME_PAGE_H1_TEXT })
      ).toBeVisible()
    })

    test('should open and close the burger menu', async ({ page }) => {
      // Burger menu is closed by default
      await expect(
        page.getByRole('link', { name: 'Accueil' })
      ).not.toBeVisible()

      await openBurgerMenu(page)
      await expect(page.getByRole('link', { name: 'Accueil' })).toBeVisible()

      await closeBurgerMenu(page)
      await expect(
        page.getByRole('link', { name: 'Accueil' })
      ).not.toBeVisible()
    })

    test('should be in the home page after clicked on Home', async ({
      page
    }) => {
      await openBurgerMenu(page)
      await page.getByRole('link', { name: 'Accueil' }).click()
      await expect(page).toHaveURL(frenchURL)
    })

    test('should open a popover with Yurt and Hut links', async ({ page }) => {
      await openBurgerMenu(page)
      await page.getByText('Logements').click()
      await expect(page).toHaveURL(frenchURL)

      // Check if Yurt/Yourte exist
      await expect(page.getByRole('link', { name: 'Yourte' })).toBeVisible()

      // Check if Hut/Cabane exist
      await expect(
        page.getByRole('link', { name: 'Cabane', exact: true })
      ).toBeVisible()
    })

    test('should be in the yurt page after clicked on Yurt', async ({
      page
    }) => {
      await openBurgerMenu(page)
      await page.getByText('Logements').click()
      await page.locator('[data-test="header-yurt-link"]').click()
      await page.waitForURL('**/logements/yourte')
      await expect(page.getByRole('heading', { name: 'Yourte' })).toBeAttached()
    })

    test('should be in the hut page after clicked on Hut', async ({ page }) => {
      await openBurgerMenu(page)
      await page.getByText('Logements').click()
      await page.locator('[data-test="header-hut-link"]').click()
      await page.waitForURL('**/logements/cabane')
      await expect(page.getByRole('heading', { name: 'Cabane' })).toBeAttached()
    })

    test('should be in the contact page after clicked on Contact', async ({
      page
    }) => {
      await openBurgerMenu(page)
      await page.getByRole('link', { name: 'Contact' }).click()
      await page.waitForURL('**/contact')

      await expect(
        page.getByRole('heading', {
          name: 'Trouver Les cabanes de la Reynie'
        })
      ).toBeAttached()
    })

    test('should be in the activity page after clicked on Activity', async ({
      page
    }) => {
      await openBurgerMenu(page)
      await page.getByRole('link', { name: 'Activités' }).click()
      await page.waitForURL('**/activites')

      await expect(
        page.getByRole('heading', {
          name: 'ACTIVITES'
        })
      ).toBeAttached()
    })
  })

  test.describe('Desktop', () => {
    // Change viewport in desktop size
    test.use({ viewport: DESKTOP_VIEWPORT })

    test('should be in the home page on load', async ({ page }) => {
      await expect(page).toHaveURL(frenchURL)
      await expect(
        page.getByRole('heading', { name: HOME_PAGE_H1_TEXT })
      ).toBeVisible()
    })

    test('should be in the home page after clicked on the logo', async ({
      page
    }) => {
      await page.locator('[data-test="app-main-logo"]').click()
      await expect(page).toHaveURL(frenchURL)
      await expect(
        page.getByRole('heading', { name: HOME_PAGE_H1_TEXT })
      ).toBeVisible()
    })

    test('should be in the home page after clicked on Home', async ({
      page
    }) => {
      await page.getByRole('link', { name: 'Accueil' }).click()
      await expect(page).toHaveURL(frenchURL)
    })

    test('should open a popover with Yurt and Hut links', async ({ page }) => {
      await page.getByText('Logements').click()
      await expect(page).toHaveURL(frenchURL)

      // Check if Yurt/Yourte exist
      await expect(page.getByRole('link', { name: 'Yourte' })).toBeVisible()

      // Check if Hut/Cabane exist
      await expect(
        page.getByRole('link', { name: 'Cabane', exact: true })
      ).toBeVisible()
    })

    test('should be in the yurt page after clicked on Yurt', async ({
      page
    }) => {
      await page.getByText('Logements').click()
      await page.locator('[data-test="header-yurt-link"]').click()
      await page.waitForURL('**/logements/yourte')
      await expect(page.getByRole('heading', { name: 'Yourte' })).toBeVisible()
    })

    test('should be in the hut page after clicked on Hut', async ({ page }) => {
      await page.getByText('Logements').click()
      await page.locator('[data-test="header-hut-link"]').click()
      await page.waitForURL('**/logements/cabane')
      await expect(page.getByRole('heading', { name: 'Cabane' })).toBeVisible()
    })

    test('should be in the contact page after clicked on Contact', async ({
      page
    }) => {
      await page.getByRole('link', { name: 'Contact' }).click()
      await page.waitForURL('**/contact')

      await expect(
        page.getByRole('heading', {
          name: 'Trouver Les cabanes de la Reynie'
        })
      ).toBeVisible()
    })

    test('should be in the activity page after clicked on Activity', async ({
      page
    }) => {
      await page.getByRole('link', { name: 'Activités' }).click()
      await page.waitForURL('**/activites')

      await expect(
        page.getByRole('heading', {
          name: 'ACTIVITES'
        })
      ).toBeVisible()
    })
  })
})
