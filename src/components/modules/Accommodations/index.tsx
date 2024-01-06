import AccommodationsSlider from './AccommodationsSlider'
import fullscreenImage from '../../images/homeCarousel/forest.webp'
import fullscreenImage2 from '../../images/homeCarousel/forest2.webp'
import fullscreenImage3 from '../../images/homeCarousel/forest3.webp'
import fullscreenImage4 from '../../images/homeCarousel/forest4.webp'
import fullscreenImage5 from '../../images/homeCarousel/forest5.webp'
import fullscreenImage6 from '../../images/homeCarousel/forest6.webp'

const Accommodations = () => {
  const data = [
    fullscreenImage2,
    fullscreenImage3,
    fullscreenImage,
    fullscreenImage4,
    fullscreenImage5,
    fullscreenImage6
  ]

  return (
    <section className='mx-auto w-full max-w-screen-2xl py-14'>
      <AccommodationsSlider data={data} />
    </section>
  )
}
export default Accommodations
