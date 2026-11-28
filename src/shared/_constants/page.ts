export const PAGE_ROUTES = {
  home: '/',
  accommodation: {
    yurt: '/logements/yourte',
    cabin: '/logements/cabane'
  },
  findUs: '/nous-trouver',
  activity: {
    home: '/activites',
    activity1: '/activites/1',
    activity2: '/activites/2',
    activity3: '/activites/3'
  },
  legal: {
    notice: '/mentions-legales',
    terms: '/conditions-utilisation',
    privacy: '/confidentialite'
  },
  admin: {
    signIn: '/admin/auth/sign-in',
    home: '/admin'
  }
} as const
