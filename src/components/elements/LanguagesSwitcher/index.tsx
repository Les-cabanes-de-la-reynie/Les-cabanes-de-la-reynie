import LanguageSwitcherButton from './LanguageSwitcherButton'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import LocaleList from './LocaleList'
import { Button } from '@/components/ui/button'
import PopoverCloseButton from '../PopoverCloseButton'

const LanguagesSwitcher = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant='ghost'
          className='text-primary-foreground hover:bg-primary'
        >
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
