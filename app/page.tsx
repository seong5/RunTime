'use client'

import Button from '@/components/common/Button'
import LandingImages from '@/components/LandingImages'

export default function Home() {
  return (
    <div>
      <LandingImages />
      <div className="flex items-center justify-center mb-10">
        <Button
          variant="orange"
          size="xs"
          rounded="full"
          text="lg"
          onClick={() => console.log('달리기페이지')}
          className="active:scale-95 transition-transform duration-150"
        >
          Run Time!
        </Button>
      </div>
    </div>
  )
}
