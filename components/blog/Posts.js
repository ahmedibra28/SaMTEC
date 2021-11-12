import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import moment from 'moment'

const Posts = ({ posts }) => {
  return (
    <>
      {posts &&
        posts.map((post) => (
          <div key={post.slug} className='col-lg-4 col-12'>
            <div className='card border-0 mb-2 shadow-lg'>
              {post.frontmatter && post.frontmatter.image && (
                <div className='image-wrapper'>
                  <Link href={`blog/${post.slug}`}>
                    <a>
                      <Image
                        src={post.frontmatter.image}
                        layout='fill'
                        className='card-img-top img-fluid image '
                        alt={post.frontmatter.image}
                      />
                    </a>
                  </Link>
                </div>
              )}
              <div className='card-body fs-6'>
                <label className='text-muted fst-italic fw-light'>
                  {post.frontmatter.author}
                </label>{' '}
                -{' '}
                <label className='text-muted fst-italic fw-light'>
                  {moment(post.frontmatter.createdAt).format('MMM Do')}
                </label>
                <Link href={`blog/${post.slug}`}>
                  <a className='text-decoration-none text-dark'>
                    <h5 className='card-title'>{post.frontmatter.title}</h5>
                  </a>
                </Link>
                <p className='card-text'>
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
    </>
  )
}

export default Posts
