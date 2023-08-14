'use client'

import {
  MouseEvent,
  PropsWithChildren,
  HTMLProps,
  ButtonHTMLAttributes
} from 'react'
import { cn } from '@/utils/cn'

export interface ButtonProps
  extends PropsWithChildren,
    ButtonHTMLAttributes<HTMLButtonElement> {
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
    'font-semibold transition border-2 rounded relative cursor-pointer select-none px-4 py-2 text-sm md:text-base',
    {
      'border-transparent bg-primary text-white hover:bg-opacity-80':
        kind === 'default',
      'bg-transparent border-border text-white hover:bg-stone-700':
        kind === 'border',
      'border-transparent bg-red-700 text-white hover:bg-opacity-80':
        kind === 'delete',
      'border-transparent text-white bg-green-700 hover:bg-opacity-80':
        kind === 'valid',
      'cursor-not-allowed opacity-50': disabled
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
