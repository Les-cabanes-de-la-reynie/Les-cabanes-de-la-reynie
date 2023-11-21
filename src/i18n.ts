import { getRequestConfig } from 'next-intl/server'

export default getRequestConfig(async ({ locale }) => ({
  messages: (
    await (locale === 'fr'
      ? // When using Turbopack, this will enable HMR for `fr`
        import('../messages/fr.json')
      : import(`../messages/${locale}.json`))
  ).default
}))
