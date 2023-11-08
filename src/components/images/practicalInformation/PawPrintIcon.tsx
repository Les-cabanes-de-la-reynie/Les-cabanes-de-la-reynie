import { ClassNameProps } from '@/_types/components'
import { cn } from '@/lib/utils'

interface PawPrintIconProps extends ClassNameProps {}

const PawPrintIcon = ({ className }: PawPrintIconProps) => {
  return (
    <svg
      className={cn(className)}
      viewBox='0 0 119.72 122.88'
      fillRule='evenodd'
      clipRule='evenodd'
    >
      <g>
        <path d='M40.06,0.37c9.4,0,17.03,11.69,17.03,26.1s-7.63,26.1-17.03,26.1c-9.4,0-17.03-11.68-17.03-26.1 C23.04,12.06,30.66,0.37,40.06,0.37L40.06,0.37z M61.71,63.55c19.94,0.04,22.42,13.25,39.23,35.86 c8.38,16.45-2.5,26.82-21.15,22.38c-8.46-4.31-14.41-5.83-20.38-5.63c-10.34,0.36-12.95,7.18-24.98,6.7 c-9.28-0.25-13.46-4.14-14.27-10.07c-0.87-6.3,1.56-10.28,4.52-15.49C36.18,77.02,48.07,61.01,61.71,63.55L61.71,63.55L61.71,63.55 z M7.17,39.08C0.14,41.86-2.1,52.85,2.16,63.62C6.42,74.39,15.57,80.87,22.6,78.09c7.03-2.78,9.27-13.77,5.01-24.54 C23.35,42.78,14.2,36.3,7.17,39.08L7.17,39.08z M112.55,39.08c7.03,2.78,9.27,13.77,5.01,24.54 c-4.26,10.77-13.42,17.25-20.44,14.47c-7.03-2.78-9.27-13.77-5.01-24.54C96.37,42.78,105.52,36.3,112.55,39.08L112.55,39.08z M79.35,0c9.4,0,17.03,11.69,17.03,26.1s-7.63,26.1-17.03,26.1c-9.4,0-17.03-11.68-17.03-26.1C62.33,11.69,69.95,0,79.35,0L79.35,0 z' />
      </g>
    </svg>
  )
}
export default PawPrintIcon