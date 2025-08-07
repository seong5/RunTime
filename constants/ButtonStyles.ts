import { cn } from '@/utils/cn'

export type buttonVariants = 'orange' | 'green' | 'navy'

export type buttonSize = 'sm' | 'md' | 'lg'

export const BUTTON_VARIANTS: Record<buttonVariants, string> = {
  orange: cn('bg-orange', 'text-white', 'cursor-pointer'),
  green: cn('bg-green', 'text-white', 'cursor-pointer'),
  navy: cn('bg-navy', 'text-white', 'cursor-pointer'),
}

export const BUTTON_SIZES: Record<buttonSize, string> = {
  sm: 'w-full max-w-70 h-30',
  md: 'w-full max-w-100 h-30',
  lg: 'w-full max-w-140 h-40',
}
