import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import BlurImage from '@/components/blur-image'

export default function Curriculum() {
  return (
    <section id='curriculum' className='py-12 md:py-16 lg:py-20'>
      <div className='container px-4 md:px-6 lg:px-8'>
        <div className='grid md:grid-cols-2 gap-8 items-center'>
          <BlurImage
            src='https://www.banq.qc.ca/sites/default/files/styles/profile_mobile/public/2022-10/Books%20in%20Print%20-%20global%20edition_0.jpg?h=44669675&itok=OWH-eLwC'
            alt='Curriculum'
            className='mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:aspect-auto'
            height={600}
            width={400}
          />
          <div>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>
              Curriculum / Syllabus and Teaching Guides
            </h2>
            <p className='text-muted-foreground mb-6'>
              The College started offering 3 courses at its early days, and
              gradually increased to the current 19 different courses (Table
              below). <br />
              In addition to SaMTEC s main campus in Beld-Hawa, Agriculture
              Training Centre (ATC) campus in Luuq offers specializes
              agribusiness and agriculture extension vocational training
              courses.
            </p>
            <Link
              href='/curriculum'
              className='inline-flex items-center gap-2 text-primary hover:underline'
              prefetch={false}
            >
              Explore Curriculum
              <ArrowRightIcon className='w-4 h-4' />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
