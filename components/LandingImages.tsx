import Image from 'next/image'

export default function LandingImages() {
  return (
    <div className="w-full my-10 md:my-20 flex flex-col gap-10 md:gap-20 justify-center items-center px-20 md:px-10">
      {[
        { src: '/images/landing1.jpg', text: '누구나 쉽게 시작할 수 있어요' },
        { src: '/images/landing3.jpg', text: '건강한 하루를 만들어봐요' },
        { src: '/images/landing2.jpg', text: '지금이 바로 RunTime!' },
      ].map((item, index) => (
        <div key={index} className="relative w-full h-[200px] md:h-[400px]">
          <Image
            src={item.src}
            alt={`랜딩 이미지${index + 1}`}
            fill
            className="object-cover rounded-[16px] select-none pointer-events-none"
            draggable={false}
          />
          <div className="absolute md:top-1/2 top-1/3 translate-y-[60%] md:translate-x-[-20%] md:translate-y-[40%] inset-0 z-20 flex justify-center">
            <h2 className="text-white text-[20px] md:text-[50px] font-bold text-center drop-shadow-lg">
              {item.text}
            </h2>
          </div>
          <div className="w-full absolute inset-0 bg-gradient-to-r from-white/100 via-transparent to-white/100 pointer-events-none rounded-[16px]" />
        </div>
      ))}
    </div>
  )
}
