import Button from '@/components/common/Button'
import LandingImages from '@/components/LandingImages'

export default function Home() {
  return (
    <div>
      <LandingImages />
      <Button variant="orange" size="md">
        START!
      </Button>
    </div>
  )
}
