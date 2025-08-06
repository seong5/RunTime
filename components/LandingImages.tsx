import Image from 'next/image'

export default function LandingImages() {
  return (
    <div className="w-full my-20 flex flex-col gap-20 justify-center items-center px-20 md:px-10">
      <div className="relative w-full h-[200px] md:h-[400px]">
        <Image
          src="/images/landing1.jpg"
          alt="랜딩 이미지1"
          fill
          className="object-cover rounded-[16px]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/100 via-transparent to-white/100 pointer-events-none rounded-[16px] " />
      </div>

      <div className="relative w-full h-[200px] md:h-[400px]">
        <Image
          src="/images/landing2.jpg"
          alt="랜딩 이미지2"
          fill
          className="object-cover rounded-[16px]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/100 via-transparent to-white/100 pointer-events-none rounded-[16px]" />
      </div>

      <div className="relative w-full h-[200px] md:h-[400px]">
        <Image
          src="/images/landing3.jpg"
          alt="랜딩 이미지3"
          fill
          className="object-cover rounded-[16px]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/100 via-transparent to-white/100 pointer-events-none rounded-[16px]" />
      </div>
    </div>
  )
}
