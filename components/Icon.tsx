'use client'
import { lazy, Suspense, useMemo } from 'react'
import ICON_MAP from '@/constants/IconsMap'

type Loader = () => Promise<{ default: React.ComponentType<any> }>

type Props = {
  icon: keyof typeof ICON_MAP
  className?: string
}

export default function Icon({ icon, className }: Props) {
  const IconComponent = useMemo(() => {
    const importFn = ICON_MAP[icon] as Loader | undefined
    return importFn ? lazy(importFn) : null
  }, [icon])

  if (!IconComponent) return null

  return (
    <Suspense fallback={<span className={className} />}>
      <IconComponent className={className} />
    </Suspense>
  )
}
