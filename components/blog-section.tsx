import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { ArrowRightIcon } from 'lucide-react'
import BlurImage from '@/components/blur-image'
import { posts } from '@/app/blog/data'

export default function Blog() {
  return (
    <section id='blog' className='py-12 md:py-16 lg:py-20 bg-background'>
      <div className='container px-4 md:px-6 lg:px-8'>
        <h2 className='text-3xl md:text-4xl font-bold mb-8'>From the Blog</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {posts.map((blog, i) => (
            <Card key={i}>
              <BlurImage
                src={blog.image}
                alt={blog.title}
                className='rounded-t-lg object-cover w-full'
                height={600}
                width={400}
              />
              <CardContent>
                <div className='p-4'>
                  <h3 className='text-xl font-bold mb-2'>{blog.title}</h3>
                  <p className='text-muted-foreground mb-4'>
                    {blog.description}
                  </p>
                  <Link
                    href={`/blog/${blog.slug}`}
                    className='inline-flex items-center gap-2 text-primary hover:underline'
                    prefetch={false}
                  >
                    Read More
                    <ArrowRightIcon className='w-4 h-4' />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className='text-right mt-8'>
          <Link
            href='/blog'
            className='inline-flex items-center gap-2 text-primary hover:underline'
            prefetch={false}
          >
            Browse More Blog
            <ArrowRightIcon className='w-4 h-4' />
          </Link>
        </div>
      </div>
    </section>
  )
}
