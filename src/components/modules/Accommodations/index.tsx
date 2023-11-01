import AccommodationsSlider from './AccommodationsSlider'
import fullscreenImage from '../../images/homeCarousel/forest.jpg'
import fullscreenImage2 from '../../images/homeCarousel/forest2.jpg'
import fullscreenImage3 from '../../images/homeCarousel/forest3.jpg'
import fullscreenImage4 from '../../images/homeCarousel/forest4.jpg'
import fullscreenImage5 from '../../images/homeCarousel/forest5.jpg'
import fullscreenImage6 from '../../images/homeCarousel/forest6.jpg'

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
    <section>
      <AccommodationsSlider data={data} />
    </section>
  )
}
export default Accommodations
