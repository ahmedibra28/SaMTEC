'use client'

import React, { use } from 'react';
import { useSearchParams } from 'next/navigation'
import { posts } from '@/app/blog/data'
import { impacts } from '@/app/impact/data'
import BlurImage from '@/components/blur-image'
import Markdown from 'react-markdown'

export default function Page(
  props: {
    params: Promise<{ slug: string }>
  }
) {
  const params = use(props.params);

  const {
    slug
  } = params;

  const searchParams = useSearchParams()

  const source = searchParams.get('source')

  let data = null

  if (source === 'blog') {
    data = posts.find((post) => post.slug === slug)
  }

  if (source === 'impact') {
    data = impacts.find((impact) => impact.slug === slug)
  }

  return (
    <div className='px-4 py-6 md:px-6 md:py-12 lg:py-16'>
      <article className='prose prose-gray max-w-3xl mx-auto dark:prose-invert'>
        <div className='space-y-2 not-prose'>
          <h1 className='text-4xl font-extrabold tracking-tight lg:text-5xl'>
            {data?.title}
          </h1>
        </div>
        <figure className='lg:-mx-12 xl:-mx-20'>
          <BlurImage
            src={data?.image || '/no-image.png'}
            alt={data?.title || 'No Image'}
            width={1200}
            height={480}
            className='aspect-[5/2] overflow-hidden rounded-lg object-cover'
          />
        </figure>

        <div className='container mx-auto px-4 md:px-6 py-12 md:py-16 lg:py-20'>
          <Markdown className='prose prose-gray mx-auto dark:prose-invert lg:max-w-3xl'>
            {data?.content}
          </Markdown>
        </div>
      </article>
    </div>
  )
}
