import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/navigation'
import Contact from '@/components/contact-section'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SaMTEC',
  description:
    'Sayid Mohamed Technical Education College (SaMTEC) is the largest vocational education center in Jubaland State and one of the best in the whole of Somalia',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Contact />
      </body>
    </html>
  )
}
