// Tags of the 'use cache' queries. They live an hour (the former ISR period,
// so direct database edits still show up); admin actions expire them at once
// with updateTag.
export const CACHE_TAGS = {
  yurt: 'yurt',
  cabin: 'cabin',
  address: 'address',
  openingHours: 'opening-hours',
  images: 'images'
} as const
