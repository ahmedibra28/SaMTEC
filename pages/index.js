import Head from 'next/head'
import IndexHome from '../components/home/IndexHome'

function Home() {
  return (
    <div>
      <Head>
        <title>Sayid Mohamed Technical Education College</title>
        <meta
          property='og:title'
          content='Sayid Mohamed Technical Education College'
          key='title'
        />
      </Head>
      <IndexHome />
    </div>
  )
}

export default Home
