import BlurImage from '@/components/blur-image'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { posts } from './data'

export default function Page() {
  return (
    <div className='flex flex-col min-h-[100dvh]'>
      <section
        className='relative w-full h-[50dvh] bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1524486361537-8ad15938e1a3?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        }}
      >
        <div className='absolute inset-0 bg-black/50 flex items-center justify-center'>
          <div className='text-center text-white space-y-4'>
            <h1 className='text-4xl md:text-6xl font-bold'>From the Blog</h1>
            <p className='text-lg md:text-xl'></p>
          </div>
        </div>
      </section>

      <section id='blog' className='py-12 md:py-16 lg:py-20 bg-background'>
        <div className='container px-4 md:px-6 lg:px-8'>
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
                      href={`/details/${blog.slug}`}
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
        </div>
      </section>
    </div>
  )
}
