import forest1 from '@/assets/homeCarousel/forest.webp'
import forest2 from '@/assets/homeCarousel/forest2.webp'
import forest3 from '@/assets/homeCarousel/forest3.webp'
import { PAGE_ROUTES } from '@/shared/_constants/page'
import { ActivityCard } from './ActivityCard'

export const ActivityCardList = () => {
  return (
    <ul className='grid grid-cols-1 gap-6 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      <ActivityCard
        href={PAGE_ROUTES.activity.activity1}
        title="Un terrain de jeux grandeur nature pour les amateurs de sports et d'aventure"
        image={forest1}
        alt='TODO'
      />
      <ActivityCard
        href={PAGE_ROUTES.activity.activity2}
        title='Un voyage culinaire au cœur du terroir corrézien et périgourdin'
        image={forest2}
        alt='TODO'
      />
      <ActivityCard
        href={PAGE_ROUTES.activity.activity3}
        title="Sur les traces de l'histoire en Corrèze et en Dordogne"
        image={forest3}
        alt='TODO'
      />
    </ul>
  )
}
