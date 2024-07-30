import React from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Link from 'next/link'
import { ArrowRightIcon } from 'lucide-react'

export default function Courses() {
  return (
    <section
      id='courses'
      className='py-12 md:py-16 lg:py-20 bg-brand text-white'
    >
      <div className='container px-4 md:px-6 lg:px-8'>
        <h2 className='text-3xl md:text-4xl font-bold mb-8'>Our Courses</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          <Card>
            <CardHeader>
              <h3 className='text-xl font-bold'>Agriculture Science</h3>
            </CardHeader>
            <CardContent>
              <p className='text-muted-foreground mb-4'>
                Explore the latest advancements in sustainable agriculture and
                food production.
              </p>
              <Link
                href='#'
                className='inline-flex items-center gap-2 text-primary hover:underline'
                prefetch={false}
              >
                Learn More
                <ArrowRightIcon className='w-4 h-4' />
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <h3 className='text-xl font-bold'>Environmental Studies</h3>
            </CardHeader>
            <CardContent>
              <p className='text-muted-foreground mb-4'>
                Gain a deep understanding of environmental issues and
                sustainable solutions.
              </p>
              <Link
                href='#'
                className='inline-flex items-center gap-2 text-primary hover:underline'
                prefetch={false}
              >
                Learn More
                <ArrowRightIcon className='w-4 h-4' />
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <h3 className='text-xl font-bold'>Business Management</h3>
            </CardHeader>
            <CardContent>
              <p className='text-muted-foreground mb-4'>
                Develop the skills to lead and manage in the business world.
              </p>
              <Link
                href='#'
                className='inline-flex items-center gap-2 text-primary hover:underline'
                prefetch={false}
              >
                Learn More
                <ArrowRightIcon className='w-4 h-4' />
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className='text-right mt-8'>
          <Link
            href='/courses'
            className='inline-flex items-center gap-2 text-primary hover:underline text-white'
            prefetch={false}
          >
            Browse More Courses
            <ArrowRightIcon className='w-4 h-4' />
          </Link>
        </div>
      </div>
    </section>
  )
}
