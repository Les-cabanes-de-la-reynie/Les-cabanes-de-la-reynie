'use client'

import { MouseEvent, PropsWithChildren, ComponentPropsWithoutRef } from 'react'
import { cn } from '@/utils/cn'

export interface ButtonProps
  extends PropsWithChildren,
    ComponentPropsWithoutRef<'button'> {
  kind?: 'default' | 'border' | 'headless' | 'delete' | 'valid'
}

const Button = ({
  children,
  className = '',
  kind = 'default',
  disabled,
  onClick,
  type = 'button',
  ...rest
}: ButtonProps) => {
  const trueType = type as 'button' | 'submit' | 'reset' | undefined

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (disabled) {
      e.preventDefault()
    }
    if (!disabled && onClick) {
      onClick(e)
    }
  }

  const classes = cn(
    'font-semibold transition-color border-2 rounded relative text-white cursor-pointer select-none px-4 py-2 text-sm md:text-base',
    {
      'border-transparent bg-primary  hover:bg-opacity-80': kind === 'default',
      'bg-transparent border-zinc-800 dark:border-zinc-200 text-black dark:text-white hover:bg-zinc-300 dark:hover:bg-zinc-700':
        kind === 'border',
      'border-transparent bg-red-700 hover:bg-opacity-80': kind === 'delete',
      'border-transparent bg-green-700 hover:bg-opacity-80': kind === 'valid',
      'cursor-not-allowed opacity-50 hover:bg-opacity-100': disabled
    },
    className
  )

  return (
    <button
      className={cn(kind === 'headless' ? className : classes)}
      onClick={handleClick}
      type={trueType}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  )
}
export default Button
