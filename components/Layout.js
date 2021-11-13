import Navigation from './Navigation'
import Head from 'next/head'
import Footer from './Footer'
import Contact from './home/Contact'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>SaMTEC</title>
        <meta property='og:title' content='SaMTEC' key='title' />
      </Head>
      <Navigation />
      <main className='mt-3'>{children}</main>
      <Contact />
      <Footer />
    </>
  )
}
