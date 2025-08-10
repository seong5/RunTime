'use client'

import { ReactNode } from 'react'
import {
  BUTTON_VARIANTS,
  BUTTON_SIZES,
  BUTTON_RADIUS,
  BUTTON_TEXT,
  buttonText,
  buttonVariants,
  buttonSize,
  buttonRadius,
} from '@/constants/ButtonStyles'
import { cn } from '@/utils/cn'

interface ButtonProps {
  children?: ReactNode
  variant?: buttonVariants
  size?: buttonSize
  rounded?: buttonRadius
  className?: string
  text?: buttonText
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export default function Button({
  children,
  variant = 'orange',
  size = 'sm',
  text = 'md',
  rounded = 'md',
  className = '',
  onClick,
}: ButtonProps) {
  return (
    <button
      className={cn(
        BUTTON_VARIANTS[variant],
        BUTTON_SIZES[size],
        BUTTON_RADIUS[rounded],
        BUTTON_TEXT[text],
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
