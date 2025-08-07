import { cn } from '@/utils/cn'

export type buttonVariants = 'orange' | 'green' | 'navy'
export const BUTTON_VARIANTS: Record<buttonVariants, string> = {
  orange: cn('bg-orange', 'text-white', 'cursor-pointer'),
  green: cn('bg-green', 'text-white', 'cursor-pointer'),
  navy: cn('bg-navy', 'text-white', 'cursor-pointer'),
}

export type buttonSize = 'xs' | 'sm' | 'md' | 'lg'
export const BUTTON_SIZES: Record<buttonSize, string> = {
  xs: 'w-[150px] md:w-[200px] h-[60px] md:h-[70px]',
  sm: 'w-[170px] md:w-[220px] h-[60px] md:h-[80px]',
  md: 'w-[200px] md:w-[250px] h-[60px] md:h-[90px]',
  lg: 'w-[240px] md:w-[290px] h-[60px] md:h-[100px]',
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
  lg: 'text-[16px] md:text-[24px] font-bold',
  xl: 'text-[28px] font-bold',
}
