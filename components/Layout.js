import Navigation from './Navigation'
import Head from 'next/head'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>SaMTEC</title>
        <meta property='og:title' content='SaMTEC' key='title' />
      </Head>
      <Navigation />
      <main className='container mt-3'>{children}</main>
      <Footer />
    </>
  )
}
