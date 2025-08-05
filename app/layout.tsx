import './globals.css'
import Gnb from '@/components/common/Gnb'
import Footer from '@/components/common/Footer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Gnb />
        {children}
        <Footer />
      </body>
    </html>
  )
}
