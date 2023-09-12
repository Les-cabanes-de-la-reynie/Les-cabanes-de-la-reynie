import useTranslation from 'next-translate/useTranslation'
import FooterNav from './FooterNav'
import FooterHeading from './FooterHeading'
import FooterItem from './FooterItem'

const Footer = () => {
  const { t } = useTranslation('footer')

  return (
    <footer className='box-border w-full border-t border-border bg-zinc-50 dark:bg-zinc-950'>
      <div className='container flex flex-col flex-wrap py-8 md:flex-row md:justify-between lg:justify-around'>
        <FooterNav>
          <FooterHeading> {t('aboutUs')}</FooterHeading>
          <ul>
            <FooterItem>{t('leadershipTeam')}</FooterItem>
            <FooterItem>{t('valuesInAction')}</FooterItem>
            <FooterItem>{t('franchiseInfo')}</FooterItem>
          </ul>
        </FooterNav>
        <FooterNav>
          <FooterHeading> {t('careers')}</FooterHeading>
          <ul>
            <FooterItem>{t('employeePerks')}</FooterItem>
            <FooterItem>{t('workingWithUs')}</FooterItem>
            <FooterItem>{t('applyNow')}</FooterItem>
          </ul>
        </FooterNav>
        <FooterNav>
          <FooterHeading> {t('contactUs')}</FooterHeading>
          <ul>
            <FooterItem>{t('restaurantFeedback')}</FooterItem>
            <FooterItem>{t('frequentlyAskedQuestions')}</FooterItem>
            <FooterItem>{t('sendAnEmail')}</FooterItem>
          </ul>
        </FooterNav>
      </div>
    </footer>
  )
}
export default Footer
