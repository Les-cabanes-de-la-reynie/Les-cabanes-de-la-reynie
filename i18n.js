module.exports = {
  locales: ['en', 'fr'],
  defaultLocale: 'en',
  localeDetection: false,
  pages: {
    '*': ['common'],
    '/[lang]': ['home', 'navigation', 'footer'],
    '/[lang]/activites': ['activites'],
    '/[lang]/contact': ['contact'],
    '/[lang]/logements': ['logements']
  }
}
