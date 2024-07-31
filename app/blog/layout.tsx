import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Blog / Syllabus and Teaching Guides',
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div>{children}</div>
}
