'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function LandingImages() {
  const items = [
    { src: '/images/landing1.jpg', text: '누구나 시작할 수 있어요' },
    { src: '/images/landing3.jpg', text: '건강한 하루를 만들어보세요' },
    { src: '/images/landing2.jpg', text: '지금이 바로 RunTime!' },
  ]

  return (
    <div className="w-full my-10 md:my-20 flex flex-col gap-5 md:gap-20 justify-center items-center md:px-10">
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="relative w-full h-[250px] md:h-[400px]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.15, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image
            src={item.src}
            alt={`랜딩 이미지${index + 1}`}
            fill
            className="object-cover rounded-[16px] select-none pointer-events-none"
            draggable={false}
          />
          <div className="absolute md:top-1/2 top-1/3 translate-y-[70%] md:translate-y-[40%] lg:translate-x-[-20%] lg:translate-y-[40%] inset-0 z-20 flex justify-center">
            <h2 className="text-white text-[25px] md:text-[50px] font-bold text-center drop-shadow-lg">
              {item.text}
            </h2>
          </div>
          <div className="w-full absolute inset-0 bg-gradient-to-r from-white/100 via-transparent to-white/100 pointer-events-none" />
        </motion.div>
      ))}
    </div>
  )
}
