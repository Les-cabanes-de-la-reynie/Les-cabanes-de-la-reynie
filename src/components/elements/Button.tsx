'use client'

import {
  MouseEvent,
  PropsWithChildren,
  HTMLProps,
  ButtonHTMLAttributes
} from 'react'
import clsx from 'clsx'

export interface ButtonProps
  extends PropsWithChildren,
    ButtonHTMLAttributes<HTMLButtonElement> {
  kind?: 'default' | 'border' | 'headless' | 'delete' | 'valid'
  onDisabledClick?: HTMLProps<HTMLButtonElement>['onClick']
}

const Button = ({
  children,
  className = '',
  kind = 'default',
  disabled,
  onClick,
  onDisabledClick,
  type,
  ...rest
}: ButtonProps) => {
  const trueType = type as 'button' | 'submit' | 'reset' | undefined

  const definitelyDisabled = disabled && !onDisabledClick ? true : false

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (disabled && onDisabledClick) {
      onDisabledClick(e)
    } else if (!definitelyDisabled && onClick) {
      onClick(e)
    }
  }

  const classes = clsx(
    className,
    'cursor-pointer select-none text-sm md:text-base',
    {
      'pointer-events-none opacity-50': definitelyDisabled,
      'relative rounded px-2 py-1 font-semibold transition border-2':
        kind !== 'headless',
      'border-transparent bg-primary text-white hover:bg-opacity-80':
        kind === 'default',
      'bg-transparent border-border text-white hover:bg-stone-700':
        kind === 'border',
      'border-transparent bg-red-700 text-white hover:bg-opacity-80':
        kind === 'delete',
      'border-transparent text-white bg-green-700 hover:bg-opacity-80':
        kind === 'valid'
    }
  )

  return (
    <button
      className={classes}
      onClick={handleClick}
      type={trueType}
      disabled={definitelyDisabled}
      {...rest}
    >
      {children}
    </button>
  )
}
export default Button
