import fr from './messages/fr.json'

type Messages = typeof fr

declare global {
  // Use type safe message keys with `next-intl`
  // eslint-disable-next-line
  interface IntlMessages extends Messages {}
}
