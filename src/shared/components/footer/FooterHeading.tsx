import { PropsWithChildren } from 'react'

export const FooterHeading = ({ children }: PropsWithChildren) => {
  return (
    <h2 className='mb-3 text-base font-semibold text-balance text-white'>
      {children}
    </h2>
  )
}
