import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './global.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'KBMK BINUS University',
<<<<<<< HEAD
  description: 'Keluarga Besar Mahasiswa Khonghucu BINUS University',
=======
  description: 'Komunitas Buddhis Mahasiswa Khonghucu BINUS University',
>>>>>>> fe7221a818ac4f912eaf66d00ad65d7595b34aad
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
