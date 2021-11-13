import React from 'react'
import Head from 'next/head'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { sortByDate } from '../../utils'
import Link from 'next/link'
import moment from 'moment'

const impact = ({ posts }) => {
  return (
    <div div className='container'>
      <div className='container text-primary mb-5 mt-2'>
        <Head>
          <title>Success Stories</title>
          <meta property='og:title' content='Success Stories' key='title' />
        </Head>
        <h3 className='text-center display-6'>Success Stories</h3>
      </div>

      <div className='row'>
        {posts &&
          posts.map((post) => (
            <div key={post.slug} className='col-md-4 col-12'>
              <div className='card border-0 mb-2 shadow-lg'>
                {post.frontmatter && post.frontmatter.image && (
                  <>
                    <Link href={`/stories/${post.slug}`}>
                      <a>
                        <img
                          alt={post.frontmatter.image}
                          src={post.frontmatter.image}
                          className='card-img-top img-fluid'
                        />
                      </a>
                    </Link>
                  </>
                )}

                <div className='card-body fs-6'>
                  <label className='text-muted fst-italic fw-light'>
                    {post.frontmatter.author}
                  </label>{' '}
                  -{' '}
                  <label className='text-muted fst-italic fw-light'>
                    {moment(post.frontmatter.createdAt).format('MMM Do')}
                  </label>
                  <Link href={`/stories/${post.slug}`}>
                    <a className='text-decoration-none text-dark'>
                      <h5 className='card-title text-primary'>
                        {post.frontmatter.title}
                      </h5>
                    </a>
                  </Link>
                  <p className='card-text'>
                    {post.frontmatter.caption}
                    {post &&
                      post.frontmatter &&
                      post.frontmatter.hashTag.map((hash) => (
                        <button
                          key={hash}
                          className='btn btn-light btn-sm me-2 text-muted'
                        >
                          #{hash}
                        </button>
                      ))}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default impact

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('stories'))
  const posts = files.map((filename) => {
    const slug = filename.replace('.mdx', '')
    const markdownWithMeta = fs.readFileSync(
      path.join('stories', filename),
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
