import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'About Us | Sayid Mohamed Education College',
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div>{children}</div>
}
