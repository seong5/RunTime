import { cn } from '@/utils/cn'

export type buttonVariants = 'orange' | 'green' | 'navy'
export const BUTTON_VARIANTS: Record<buttonVariants, string> = {
  orange: cn('bg-orange', 'text-white', 'cursor-pointer'),
  green: cn('bg-green', 'text-white', 'cursor-pointer'),
  navy: cn('bg-navy', 'text-white', 'cursor-pointer'),
}

export type buttonSize = 'xs' | 'sm' | 'md' | 'lg'
export const BUTTON_SIZES: Record<buttonSize, string> = {
  xs: 'w-full max-w-50 h-20',
  sm: 'w-full max-w-70 h-30',
  md: 'w-full max-w-100 h-30',
  lg: 'w-full max-w-140 h-40',
}

export type buttonRadius = 'none' | 'sm' | 'md' | 'lg' | 'full'
export const BUTTON_RADIUS: Record<buttonRadius, string> = {
  none: 'rounded-none',
  sm: 'rounded-[12px]',
  md: 'rounded-[16px]',
  lg: 'rounded-[20px]',
  full: 'rounded-full',
}

export type buttonText = 'sm' | 'md' | 'lg' | 'xl'
export const BUTTON_TEXT: Record<buttonText, string> = {
  sm: 'text-[16px]',
  md: 'text-[20px] font-semibold',
  lg: 'text-[24px] font-bold',
  xl: 'text-[28px] font-bold',
}
