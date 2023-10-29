import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bugulet',
  description: 'Buga Eusebiu Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-slate-900 text-gray-100'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
