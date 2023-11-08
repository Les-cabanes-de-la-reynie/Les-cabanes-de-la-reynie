import { ClassNameProps } from '@/_types/components'
import { cn } from '@/lib/utils'

interface RefrigeratorIconProps extends ClassNameProps {}

const RefrigeratorIcon = ({ className }: RefrigeratorIconProps) => {
  return (
    <svg className={cn(className)} viewBox='0 0 74.48 122.88'>
      <g>
        <path d='M6.39,0h61.69c1.76,0,3.36,0.72,4.52,1.87c1.16,1.16,1.88,2.76,1.88,4.52v25.83v76.76c0,1.76-0.72,3.36-1.88,4.52 c-1.16,1.16-2.76,1.87-4.52,1.87H63v2.83c0,2.57-2.1,4.68-4.67,4.68l0,0c-2.57,0-4.67-2.1-4.67-4.68v-2.83H21v2.83 c0,2.57-2.1,4.68-4.67,4.68l0,0c-2.57,0-4.67-2.1-4.67-4.68v-2.83H6.39c-1.76,0-3.36-0.72-4.52-1.87C0.72,112.34,0,110.74,0,108.98 V32.22V6.39c0-1.76,0.72-3.36,1.87-4.52C3.03,0.72,4.63,0,6.39,0L6.39,0L6.39,0z M38.75,65.12c5.83-5.53,6.38-1.8,0,4.26v6.68 l5.84-3.37c2.04-8.51,5.54-9.83,3.69-2.13c5.94-3.43,7.41-0.7,1.51,2.7c7.7,2.28,4.76,4.63-3.69,2.13l-5.77,3.33l5.83,3.36 c8.39-2.48,11.29-0.12,3.69,2.13c5.94,3.43,4.32,6.07-1.58,2.66c1.88,7.82-1.63,6.42-3.69-2.13l-5.83-3.36v6.71 c6.38,6.06,5.83,9.79,0,4.26c0,6.86-3.1,6.96-3.1,0.04c-5.74,5.46-6.35,1.77,0-4.26v-6.71l-5.75,3.32 c-2.06,8.55-5.57,9.95-3.69,2.13c-5.93,3.43-7.57,0.8-1.58-2.66c-7.59-2.25-4.71-4.62,3.69-2.13l5.83-3.36l-5.77-3.33 c-8.44,2.5-11.39,0.15-3.69-2.13c-5.94-3.43-4.47-6.16,1.51-2.7c-1.85-7.71,1.64-6.38,3.69,2.13l5.77,3.33v-6.68 c-6.35-6.03-5.75-9.71,0-4.26C35.66,58.22,38.75,58.31,38.75,65.12L38.75,65.12z M10.62,41.68c0-1.4,1.13-2.53,2.53-2.53 s2.53,1.13,2.53,2.53v16.18c0,1.4-1.13,2.53-2.53,2.53s-2.53-1.13-2.53-2.53V41.68L10.62,41.68L10.62,41.68z M10.62,10.82 c0-1.4,1.13-2.53,2.53-2.53s2.53,1.13,2.53,2.53v10.71c0,1.4-1.13,2.53-2.53,2.53s-2.53-1.13-2.53-2.53V10.82L10.62,10.82 L10.62,10.82z M5.07,29.68h64.35V6.39c0-0.36-0.15-0.7-0.4-0.94c-0.24-0.24-0.57-0.4-0.94-0.4H6.39c-0.36,0-0.7,0.15-0.94,0.4 c-0.24,0.24-0.4,0.57-0.4,0.94v23.29H5.07L5.07,29.68z M69.41,34.75H5.07v74.22c0,0.36,0.15,0.7,0.4,0.94 c0.24,0.24,0.57,0.4,0.94,0.4h61.68c0.36,0,0.7-0.15,0.94-0.4c0.24-0.24,0.4-0.57,0.4-0.94V34.75H69.41L69.41,34.75z' />
      </g>
    </svg>
  )
}
export default RefrigeratorIcon