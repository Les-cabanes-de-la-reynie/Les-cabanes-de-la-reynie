import { PropsWithChildren } from 'react'

const Card = ({ children }: PropsWithChildren) => {
  return (
    <li className='relative flex h-72 w-full flex-col rounded border border-border bg-stone-950 text-white shadow-lg transition '>
      {children}
    </li>
  )
}
export default Card
