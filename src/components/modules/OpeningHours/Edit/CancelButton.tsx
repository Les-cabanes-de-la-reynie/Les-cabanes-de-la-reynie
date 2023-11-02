import { Button } from '@/components/ui/button'

interface CancelButtonProps {
  onClick: () => void
}

const CancelButton = ({ onClick }: CancelButtonProps) => {
  return (
    <Button onClick={() => onClick()} variant={'outline'}>
      Annuler
    </Button>
  )
}
export default CancelButton
