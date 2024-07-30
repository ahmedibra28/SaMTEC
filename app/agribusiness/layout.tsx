import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agribusiness',
  description: 'Agribusiness Entrepreneurship Training',
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div>{children}</div>
}
