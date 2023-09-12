import { PropsWithChildren } from 'react'

const NavList = ({ children }: PropsWithChildren) => {
  return (
    <ul className='flex flex-col gap-x-8 text-lg text-white lg:flex-row lg:items-center'>
      {children}
    </ul>
  )
}
export default NavList
