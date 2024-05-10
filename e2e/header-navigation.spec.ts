import { expect, test } from '@playwright/test'
import {
  DESKTOP_VIEWPORT,
  MOBILE_VIEWPORT,
  frenchURL
} from '../playwright.config'
import { closeBurgerMenu, openBurgerMenu } from './commons'

test.beforeEach(async ({ page }) => {
  await page.goto(frenchURL)
})

test.describe('Header navigation', () => {
  test.describe('Mobile', () => {
    // Change viewport in mobile size
    test.use({ viewport: MOBILE_VIEWPORT })

    test('should be in the home page on load', async ({ page }) => {
      await expect(page).toHaveURL(frenchURL)

      const mainTitle = page.getByTestId('home-page-main-title')
      await expect(mainTitle).toBeVisible()
    })

    test('should be in the home page after clicked on the logo', async ({
      page
    }) => {
      await page.getByTestId('app-main-logo').click()
      await expect(page).toHaveURL(frenchURL)

      const mainTitle = page.getByTestId('home-page-main-title')
      await expect(mainTitle).toBeVisible()
    })

    test('should open and close the burger menu', async ({ page }) => {
      // Burger menu is closed by default
      const homeLink = page
        .getByTestId('header-main-navigation')
        .getByRole('link', { name: 'Accueil' })

      await expect(homeLink).not.toBeVisible()

      await openBurgerMenu(page)
      await expect(homeLink).toBeVisible()

      await closeBurgerMenu(page)
      await expect(homeLink).not.toBeVisible()
    })

    test('should be in the home page after clicked on Home', async ({
      page
    }) => {
      const homeLink = page
        .getByTestId('header-main-navigation')
        .getByRole('link', { name: 'Accueil' })

      await openBurgerMenu(page)
      await homeLink.click()
      await expect(page).toHaveURL(frenchURL)
    })

    test('should open a popover with Yurt and Hut links', async ({ page }) => {
      const accommodationsLink = page
        .getByTestId('header-main-navigation')
        .getByText('Logements')
      const yurtLink = page
        .getByTestId('header-main-navigation')
        .getByRole('link', { name: 'Yourte' })
      const hutLink = page
        .getByTestId('header-main-navigation')
        .getByRole('link', { name: 'Cabane' })

      await openBurgerMenu(page)
      await accommodationsLink.click()
      await expect(page).toHaveURL(frenchURL)

      // Check if Yurt/Yourte exist
      await expect(yurtLink).toBeVisible()

      // Check if Hut/Cabane exist
      await expect(hutLink).toBeVisible()
    })

    test('should be in the yurt page after clicked on Yurt', async ({
      page
    }) => {
      const accommodationsLink = page
        .getByTestId('header-main-navigation')
        .getByText('Logements')
      const yurtLink = page
        .getByTestId('header-main-navigation')
        .getByRole('link', { name: 'Yourte' })

      await openBurgerMenu(page)
      await accommodationsLink.click()
      await yurtLink.click()
      await page.waitForURL('**/logements/yourte')
      await expect(page.getByRole('heading', { name: 'Yourte' })).toBeAttached()
    })

    test('should be in the hut page after clicked on Hut', async ({ page }) => {
      const accommodationsLink = page
        .getByTestId('header-main-navigation')
        .getByText('Logements')
      const hutLink = page
        .getByTestId('header-main-navigation')
        .getByRole('link', { name: 'Cabane' })

      await openBurgerMenu(page)
      await accommodationsLink.click()
      await hutLink.click()
      await page.waitForURL('**/logements/cabane')
      await expect(page.getByRole('heading', { name: 'Cabane' })).toBeAttached()
    })

    test('should be in the contact page after clicked on Contact', async ({
      page
    }) => {
      const contactLink = page
        .getByTestId('header-main-navigation')
        .getByRole('link', { name: 'Contact' })

      await openBurgerMenu(page)
      await contactLink.click()
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
      const activitiesLink = page
        .getByTestId('header-main-navigation')
        .getByRole('link', { name: 'Activités' })

      await openBurgerMenu(page)
      await activitiesLink.click()
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

      const mainTitle = page.getByTestId('home-page-main-title')
      await expect(mainTitle).toBeVisible()
    })

    test('should be in the home page after clicked on the logo', async ({
      page
    }) => {
      await page.getByTestId('app-main-logo').click()
      await expect(page).toHaveURL(frenchURL)

      const mainTitle = page.getByTestId('home-page-main-title')
      await expect(mainTitle).toBeVisible()
    })

    test('should be in the home page after clicked on Home', async ({
      page
    }) => {
      const homeLink = page
        .getByTestId('header-main-navigation')
        .getByRole('link', { name: 'Accueil' })

      await homeLink.click()
      await expect(page).toHaveURL(frenchURL)
    })

    test('should open a popover with Yurt and Hut links', async ({ page }) => {
      const accommodationsLink = page
        .getByTestId('header-main-navigation')
        .getByText('Logements')
      const yurtLink = page
        .getByTestId('header-main-navigation')
        .getByRole('link', { name: 'Yourte' })
      const hutLink = page
        .getByTestId('header-main-navigation')
        .getByRole('link', { name: 'Cabane' })

      await accommodationsLink.click()
      await expect(page).toHaveURL(frenchURL)

      // Check if Yurt/Yourte exist
      await expect(yurtLink).toBeVisible()

      // Check if Hut/Cabane exist
      await expect(hutLink).toBeVisible()
    })

    test('should be in the yurt page after clicked on Yurt', async ({
      page
    }) => {
      const accommodationsLink = page
        .getByTestId('header-main-navigation')
        .getByText('Logements')
      const yurtLink = page
        .getByTestId('header-main-navigation')
        .getByRole('link', { name: 'Yourte' })

      await accommodationsLink.click()
      await yurtLink.click()
      await page.waitForURL('**/logements/yourte')
      await expect(page.getByRole('heading', { name: 'Yourte' })).toBeVisible()
    })

    test('should be in the hut page after clicked on Hut', async ({ page }) => {
      const accommodationsLink = page
        .getByTestId('header-main-navigation')
        .getByText('Logements')
      const hutLink = page
        .getByTestId('header-main-navigation')
        .getByRole('link', { name: 'Cabane' })

      await accommodationsLink.click()
      await hutLink.click()
      await page.waitForURL('**/logements/cabane')
      await expect(page.getByRole('heading', { name: 'Cabane' })).toBeVisible()
    })

    test('should be in the contact page after clicked on Contact', async ({
      page
    }) => {
      const contactLink = page
        .getByTestId('header-main-navigation')
        .getByRole('link', { name: 'Contact' })

      await contactLink.click()
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
      const activitiesLink = page
        .getByTestId('header-main-navigation')
        .getByRole('link', { name: 'Activités' })

      await activitiesLink.click()
      await page.waitForURL('**/activites')

      await expect(
        page.getByRole('heading', {
          name: 'ACTIVITES'
        })
      ).toBeVisible()
    })
  })
})
