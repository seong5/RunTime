import { ReactNode } from 'react'
import { BUTTON_VARIANTS, BUTTON_SIZES, buttonVariants, buttonSize } from '@/constants/ButtonStyles'
import { cn } from '@/utils/cn'

interface ButtonProps {
  children?: ReactNode
  variant?: buttonVariants
  size?: buttonSize
  className?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export default function Button({
  children,
  variant = 'orange',
  size = 'md',
  className = '',
  onClick,
}: ButtonProps) {
  return (
    <button
      className={cn(BUTTON_VARIANTS[variant], BUTTON_SIZES[size], className)}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
