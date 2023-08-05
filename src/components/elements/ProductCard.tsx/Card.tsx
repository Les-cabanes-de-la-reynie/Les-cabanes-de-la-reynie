import { PropsWithChildren } from 'react'

const Card = ({ children }: PropsWithChildren) => {
  return (
    <li className='relative flex h-72 w-full flex-col rounded border border-stone-700 bg-stone-950 text-white shadow-lg transition '>
      {children}
    </li>
  )
}
export default Card
