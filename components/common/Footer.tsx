import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="flex flex-row gap-5 md:gap-20 text-gray-500 bg-white border-t border-gray-300 text-[12px] md:text-[16px] justify-evenly p-5 botton-0">
      <Link href="https://github.com/seong5/RunTime">@RunTime-2025</Link>
      <Link href="https://github.com/seong5">@seong5</Link>
      <div className="text-[10px] md:text-[14px]">
        <p>greenbi0852@gmail.com</p>
        <p>010-4784-3867</p>
      </div>
    </footer>
  )
}
