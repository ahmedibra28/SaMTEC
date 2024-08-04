import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import BlurImage from '@/components/blur-image'

export default function Impact() {
  return (
    <section id='impact' className='py-12 md:py-16 lg:py-20'>
      <div className='container px-4 md:px-6 lg:px-8'>
        <div className='grid md:grid-cols-2 gap-8 items-center'>
          <div>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>Our Impact</h2>
            <p className='text-muted-foreground mb-6'>
              At our college, we are committed to making a positive impact on
              our local and global communities. Through our research, community
              engagement, and sustainability initiatives, we strive to address
              pressing challenges and drive meaningful change.
            </p>
            <Link
              href={`/impact`}
              className='inline-flex items-center gap-2 text-primary hover:underline'
              prefetch={false}
            >
              Explore Our Impact
              <ArrowRightIcon className='w-4 h-4' />
            </Link>
          </div>
          <BlurImage
            src='https://cloud.appwrite.io/v1/storage/buckets/66471275000c7c4c56be/files/664a040d002b83e82d75/view?project=65905182817b88c986bf'
            alt='Curriculum'
            className='mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:aspect-auto'
            height={600}
            width={400}
          />
        </div>
      </div>
    </section>
  )
}
