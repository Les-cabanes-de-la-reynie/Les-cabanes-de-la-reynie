import LanguageSwitcherButton from './LanguageSwitcherButton'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import LocaleList from './LocaleList'
import { Button } from '@/components/ui/button'
import { PopoverClose } from '@radix-ui/react-popover'
import { X } from 'lucide-react'

const LanguagesSwitcher = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant='ghost'
          className='text-primary-foreground hover:bg-primary'
          aria-label='Language switcher button'
        >
          <LanguageSwitcherButton />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-36'>
        <LocaleList />
        <PopoverClose
          className='absolute right-[7px] top-[7px] inline-flex h-[25px] w-[25px] cursor-pointer items-center justify-center rounded-full border outline-none transition-colors hover:text-primary focus:shadow-[0_0_0_2px]'
          aria-label='Close'
        >
          <X size={16} />
        </PopoverClose>
      </PopoverContent>
    </Popover>
  )
}
export default LanguagesSwitcher
