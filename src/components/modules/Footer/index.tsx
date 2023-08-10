import { Locale } from '../../../../i18n.config'
import { getDictionary } from '@/lib/dictionary'
import FooterNav from './FooterNav'
import FooterHeading from './FooterHeading'
import FooterItem from './FooterItem'

const Footer = async ({ lang }: { lang: Locale }) => {
  const { Footer } = await getDictionary(lang)

  return (
    <footer className='box-border w-full border-t border-border bg-stone-950'>
      <div className='container flex flex-col flex-wrap py-8 md:flex-row md:justify-between lg:justify-around'>
        <FooterNav>
          <FooterHeading> {Footer.aboutUs}</FooterHeading>
          <ul>
            <FooterItem>{Footer.leadershipTeam}</FooterItem>
            <FooterItem>{Footer.valuesInAction}</FooterItem>
            <FooterItem>{Footer.franchiseInfo}</FooterItem>
          </ul>
        </FooterNav>
        <FooterNav>
          <FooterHeading> {Footer.careers}</FooterHeading>
          <ul>
            <FooterItem>{Footer.employeePerks}</FooterItem>
            <FooterItem>{Footer.workingWithUs}</FooterItem>
            <FooterItem>{Footer.applyNow}</FooterItem>
          </ul>
        </FooterNav>
        <FooterNav>
          <FooterHeading> {Footer.contactUs}</FooterHeading>
          <ul>
            <FooterItem>{Footer.restaurantFeedback}</FooterItem>
            <FooterItem>{Footer.frequentlyAskedQuestions}</FooterItem>
            <FooterItem>{Footer.sendAnEmail}</FooterItem>
          </ul>
        </FooterNav>
      </div>
    </footer>
  )
}
export default Footer
