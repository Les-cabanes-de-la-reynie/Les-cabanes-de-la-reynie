import { expect, test } from '@playwright/test'
import {
  DESKTOP_VIEWPORT,
  MOBILE_VIEWPORT,
  frenchURL
} from '../playwright.config'
import { openBurgerMenu } from './commons'

// Simulate a granted geolocation so the itinerary dialog resolves a position
test.use({
  geolocation: { latitude: 45.221387, longitude: 1.251147 },
  permissions: ['geolocation']
})

test.beforeEach(async ({ page }) => {
  await page.goto(frenchURL)
})

test.describe('Map', () => {
  test.describe('Mobile', () => {
    // Change viewport in mobile size
    test.use({ viewport: MOBILE_VIEWPORT })

    test.beforeEach(async ({ page }) => {
      await openBurgerMenu(page)
      await page
        .getByTestId('mobile-header-navbar')
        .getByRole('link', { name: 'Nous trouver' })
        .click()
      await page.waitForURL('**/nous-trouver')
    })

    test('should display the map on the find us page', async ({ page }) => {
      await expect(page.locator('.leaflet-popup-content-wrapper')).toBeVisible()
    })

    test('should display itinerary on the popup', async ({ page }) => {
      const itinerary = page.getByTestId('itinerary-link')

      await expect(itinerary).toBeVisible()
      await itinerary.click()

      // Enter in the popover and check if the google map link is visible
      await expect(
        page.getByRole('link', { name: 'Voir itinéraire' })
      ).toBeVisible()
    })

    test('should display the exact address notice', async ({ page }) => {
      await expect(
        page.getByText('Adresse exacte communiquée après la réservation')
      ).toBeVisible()
    })
  })

  test.describe('Desktop', () => {
    // Change viewport in desktop size
    test.use({ viewport: DESKTOP_VIEWPORT })

    test.beforeEach(async ({ page }) => {
      await page
        .getByTestId('desktop-header-navbar')
        .getByRole('link', { name: 'Nous trouver' })
        .click()
      await page.waitForURL('**/nous-trouver')
    })

    test('should display the map on the find us page', async ({ page }) => {
      await expect(page.locator('.leaflet-popup-content-wrapper')).toBeVisible()
    })

    test('should display itinerary on the popup', async ({ page }) => {
      const itinerary = page.getByTestId('itinerary-link')

      await expect(itinerary).toBeVisible()
      await itinerary.click()

      // Enter in the popover and check if the google map link is visible
      await expect(
        page.getByRole('link', { name: 'Voir itinéraire' })
      ).toBeVisible()
    })

    test('should display the exact address notice', async ({ page }) => {
      await expect(
        page.getByText('Adresse exacte communiquée après la réservation')
      ).toBeVisible()
    })
  })
})
