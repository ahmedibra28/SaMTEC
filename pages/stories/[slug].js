import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import moment from 'moment'

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'

const ImpactStoryDetails = ({ frontmatter, content }) => {
  return (
    <div className='container'>
      <>
        <Head>
          <title>{frontmatter.title}</title>
          <meta property='og:title' content={frontmatter.title} key='title' />
        </Head>
        <div className='row'>
          <div className='col-md-9 col-12 mx-auto'>
            <div className='card-body'>
              <h5 className='card-title fs-1 fw-bold'>{frontmatter.title}</h5>
              <p className='card-text'>
                {frontmatter.hashTag.map((hash) => (
                  <button
                    key={hash}
                    className='btn btn-light btn-sm me-2 text-muted'
                  >
                    #{hash}
                  </button>
                ))}
              </p>
              <label className='text-muted fst-italic fw-light'>
                Posted on {moment(frontmatter.createdAt).format('MMM Do')}
              </label>{' '}
              -{' '}
              <label className='text-muted fst-italic fw-light'>
                Original published at {frontmatter.author}
              </label>{' '}
              {frontmatter && frontmatter.image && (
                <Image
                  alt={frontmatter.image}
                  src={frontmatter.image}
                  layout='responsive'
                  width='100%'
                  height='50px'
                  objectFit='cover'
                  className='py-3'
                />
              )}
              <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
            </div>
          </div>
        </div>
      </>
    </div>
  )
}

export default ImpactStoryDetails

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('stories'))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.mdx', ''),
    },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('stories', slug + '.mdx'),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(markdownWithMeta)
  return {
    props: { frontmatter, slug, content },
  }
}
