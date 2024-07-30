import React from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Link from 'next/link'
import { ArrowRightIcon } from 'lucide-react'
import BlurImage from '@/components/blur-image'

export default function Blog() {
  return (
    <section id='blog' className='py-12 md:py-16 lg:py-20 bg-background'>
      <div className='container px-4 md:px-6 lg:px-8'>
        <h2 className='text-3xl md:text-4xl font-bold mb-8'>From the Blog</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          <Card>
            <BlurImage
              src='https://cloud.appwrite.io/v1/storage/buckets/66471275000c7c4c56be/files/664a040d002b83e82d75/view?project=65905182817b88c986bf'
              alt='Curriculum'
              className='rounded-t-lg object-cover w-full'
              height={600}
              width={400}
            />
            <CardContent>
              <div className='p-4'>
                <h3 className='text-xl font-bold mb-2'>
                  Sustainable Farming Practices for the Future
                </h3>
                <p className='text-muted-foreground mb-4'>
                  Discover innovative ways to reduce your environmental impact
                  and promote sustainable agriculture.
                </p>
                <Link
                  href='#'
                  className='inline-flex items-center gap-2 text-primary hover:underline'
                  prefetch={false}
                >
                  Read More
                  <ArrowRightIcon className='w-4 h-4' />
                </Link>
              </div>
            </CardContent>
          </Card>
          <Card>
            <BlurImage
              src='https://cloud.appwrite.io/v1/storage/buckets/66471275000c7c4c56be/files/664a040d002b83e82d75/view?project=65905182817b88c986bf'
              alt='Curriculum'
              className='rounded-t-lg object-cover w-full'
              height={600}
              width={400}
            />
            <CardContent>
              <div className='p-4'>
                <h3 className='text-xl font-bold mb-2'>
                  The Future of Agribusiness: Trends and Innovations
                </h3>
                <p className='text-muted-foreground mb-4'>
                  Explore the latest advancements and emerging trends shaping
                  the future of the agribusiness industry.
                </p>
                <Link
                  href='#'
                  className='inline-flex items-center gap-2 text-primary hover:underline'
                  prefetch={false}
                >
                  Read More
                  <ArrowRightIcon className='w-4 h-4' />
                </Link>
              </div>
            </CardContent>
          </Card>
          <Card>
            <BlurImage
              src='https://cloud.appwrite.io/v1/storage/buckets/66471275000c7c4c56be/files/664a040d002b83e82d75/view?project=65905182817b88c986bf'
              alt='Curriculum'
              className='rounded-t-lg object-cover w-full'
              height={600}
              width={400}
            />
            <CardContent>
              <div className='p-4'>
                <h3 className='text-xl font-bold mb-2'>
                  Empowering the Next Generation of Agribusiness Leaders
                </h3>
                <p className='text-muted-foreground mb-4'>
                  Learn how our university is preparing students to become
                  leaders in the dynamic agribusiness industry.
                </p>
                <Link
                  href='#'
                  className='inline-flex items-center gap-2 text-primary hover:underline'
                  prefetch={false}
                >
                  Read More
                  <ArrowRightIcon className='w-4 h-4' />
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
