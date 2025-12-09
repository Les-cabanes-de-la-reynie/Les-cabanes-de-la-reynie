import { PropsWithChildren } from 'react'

export const AdminSection = ({ children }: PropsWithChildren) => {
  return <section className='mb-8 border p-8 rounded-md'>{children}</section>
}
