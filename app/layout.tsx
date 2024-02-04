import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import RecoilContextProvider from './recoilContextProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='p-32'>
      <body className={inter.className}>
        <RecoilContextProvider>
          {children}
        </RecoilContextProvider>
        </body>
    </html>
  )
}
