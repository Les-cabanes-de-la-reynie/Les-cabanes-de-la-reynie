import AccommodationsSlider from './AccommodationsSlider'
import fullscreenImage from '../../images/home carousel/forest.jpg'
import fullscreenImage2 from '../../images/home carousel/forest2.jpg'
import fullscreenImage3 from '../../images/home carousel/forest3.jpg'
import fullscreenImage4 from '../../images/home carousel/forest4.jpg'
import fullscreenImage5 from '../../images/home carousel/forest5.jpg'
import fullscreenImage6 from '../../images/home carousel/forest6.jpg'

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
