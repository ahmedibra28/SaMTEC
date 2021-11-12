import Head from 'next/head'
import Posts from '../components/blog/Posts'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { sortByDate } from '../utils'
import IndexHome from '../components/home/IndexHome'

function Home({ posts }) {
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
      {/* <div className='container'>
        <div className='row'>
          <Posts posts={posts} />
        </div>
      </div> */}
    </div>
  )
}

export default Home

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'))
  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '')
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )
    const { data: frontmatter } = matter(markdownWithMeta)
    return { slug, frontmatter }
  })

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  }
}
