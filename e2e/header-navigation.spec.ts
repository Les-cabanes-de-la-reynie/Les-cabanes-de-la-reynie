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
        .getByTestId('mobile-header-navbar')
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
        .getByTestId('mobile-header-navbar')
        .getByRole('link', { name: 'Accueil' })

      await openBurgerMenu(page)
      await homeLink.click()
      await expect(page).toHaveURL(frenchURL)
    })

    test('should open a sub navigation of accommodations with Yurt and Cabin links', async ({
      page
    }) => {
      const accommodationsLink = page
        .getByTestId('mobile-header-navbar')
        .getByText('Logements')
      const yurtLink = page
        .getByTestId('mobile-header-navbar')
        .getByRole('link', { name: 'Yourte', exact: true })
      const cabinLink = page
        .getByTestId('mobile-header-navbar')
        .getByRole('link', { name: 'Cabane', exact: true })

      await openBurgerMenu(page)
      await accommodationsLink.click()
      await expect(page).toHaveURL(frenchURL)

      // Check if Yurt/Yourte exist
      await expect(yurtLink).toBeVisible()

      // Check if Cabin/Cabane exist
      await expect(cabinLink).toBeVisible()
    })

    test('should be in the yurt page after clicked on Yurt', async ({
      page
    }) => {
      const accommodationsLink = page
        .getByTestId('mobile-header-navbar')
        .getByText('Logements')
      const yurtLink = page
        .getByTestId('mobile-header-navbar')
        .getByRole('link', { name: 'Yourte', exact: true })

      await openBurgerMenu(page)
      await accommodationsLink.click()
      await yurtLink.click()
      await page.waitForURL('**/logements/yourte')
      await expect(page.getByRole('heading', { name: 'Yourte' })).toBeAttached()
    })

    test('should be in the cabin page after clicked on Cabin', async ({ page }) => {
      const accommodationsLink = page
        .getByTestId('mobile-header-navbar')
        .getByText('Logements')
      const cabinLink = page
        .getByTestId('mobile-header-navbar')
        .getByRole('link', { name: 'Cabane', exact: true })

      await openBurgerMenu(page)
      await accommodationsLink.click()
      await cabinLink.click()
      await page.waitForURL('**/logements/cabane')
      await expect(page.getByRole('heading', { name: 'Cabane' })).toBeAttached()
    })

    test('should be in the contact page after clicked on Contact', async ({
      page
    }) => {
      const contactLink = page
        .getByTestId('mobile-header-navbar')
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
        .getByTestId('mobile-header-navbar')
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
        .getByTestId('desktop-header-navbar')
        .getByRole('link', { name: 'Accueil' })

      await homeLink.click()
      await expect(page).toHaveURL(frenchURL)
    })

    test('should open a popover with Yurt and Cabin links', async ({ page }) => {
      const accommodationsLink = page
        .getByTestId('desktop-header-navbar')
        .getByText('Logements')
      const yurtLink = page.getByTestId('accommodations-sub-navigation-yourte')

      const cabinLink = page.getByTestId('accommodations-sub-navigation-cabane')

      await accommodationsLink.hover()
      await expect(page).toHaveURL(frenchURL)

      // Check if Yurt/Yourte exist
      await expect(yurtLink).toBeVisible()

      // Check if Cabin/Cabane exist
      await expect(cabinLink).toBeVisible()
    })

    test('should be in the yurt page after clicked on Yurt', async ({
      page
    }) => {
      const accommodationsLink = page
        .getByTestId('desktop-header-navbar')
        .getByText('Logements')
      const yurtLink = page.getByTestId('accommodations-sub-navigation-yourte')

      await accommodationsLink.click()
      await yurtLink.click()
      await page.waitForURL('**/logements/yourte')
      await expect(page.getByRole('heading', { name: 'Yourte' })).toBeVisible()
    })

    test('should be in the cabin page after clicked on Cabin', async ({ page }) => {
      const accommodationsLink = page
        .getByTestId('desktop-header-navbar')
        .getByText('Logements')
      const cabinLink = page.getByTestId('accommodations-sub-navigation-cabane')

      await accommodationsLink.click()
      await cabinLink.click()
      await page.waitForURL('**/logements/cabane')
      await expect(page.getByRole('heading', { name: 'Cabane' })).toBeVisible()
    })

    test('should be in the contact page after clicked on Contact', async ({
      page
    }) => {
      const contactLink = page
        .getByTestId('desktop-header-navbar')
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
        .getByTestId('desktop-header-navbar')
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
