import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import PopoverCloseButton from '../PopoverCloseButton'
import LanguageSwitcherButton from './LanguageSwitcherButton'
import LocaleList from './LocaleList'

const LanguagesSwitcher = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='ghost' className='w-max'>
          <LanguageSwitcherButton />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-36'>
        <LocaleList />
        <PopoverCloseButton />
      </PopoverContent>
    </Popover>
  )
}
export default LanguagesSwitcher
