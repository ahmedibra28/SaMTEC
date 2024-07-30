import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import BlurImage from '@/components/blur-image'

export default function Admissions() {
  return (
    <section id='admissions' className='py-12 md:py-16 lg:py-20'>
      <div className='container px-4 md:px-6 lg:px-8'>
        <div className='grid md:grid-cols-2 gap-8 items-center'>
          <BlurImage
            src='https://cloud.appwrite.io/v1/storage/buckets/66471275000c7c4c56be/files/664a040d002b83e82d75/view?project=65905182817b88c986bf'
            alt='Curriculum'
            className='mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:aspect-auto'
            height={600}
            width={400}
          />
          <div>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>Admissions</h2>
            <p className='text-muted-foreground mb-6'>
              Joining our university is an exciting journey. Our admissions team
              is dedicated to guiding you through the process and ensuring a
              seamless transition. Explore our programs, learn about the
              application requirements, and discover the resources available to
              support your academic success.
            </p>
            <Link
              href='/admissions'
              className='inline-flex items-center gap-2 text-primary hover:underline'
              prefetch={false}
            >
              Apply Now
              <ArrowRightIcon className='w-4 h-4' />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
