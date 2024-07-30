import BlurImage from '@/components/blur-image'
import {
  FileBadge2Icon,
  GraduationCapIcon,
  Pickaxe,
  PickaxeIcon,
} from 'lucide-react'
import React from 'react'

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
            <h1 className='text-4xl md:text-6xl font-bold'>Admission</h1>
            <p className='text-lg md:text-xl'>
              Explore our diverse range of courses and find the perfect fit for
              your educational journey.
            </p>
          </div>
        </div>
      </section>

      <div className='w-full bg-background'>
        <section className='container mx-auto py-12 md:py-16 lg:py-20'>
          <div className='space-y-4 mb-20'>
            <p className='text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
              At SAMTEC, we believe that every person has a right to quality
              education. <br />
              Our programs have been designed to accomodate students who have a
              passion to parsue studies in their areas of interest. <br />
              It is possible to be admitted by following multiple pathways.
              Below is a minim set of qualifications for each level of
              admission. <br />
              Admissions are open to all qualified national and international
              persons without discrimination. A student is admitted into an
              academic program when he/she meets the entry requirements into
              that program and level.
            </p>
          </div>

          <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-2'>
            <div className='grid gap-4 shadow p-4 rounded-xl'>
              <PickaxeIcon className='w-12 h-12 text-primary mx-auto' />
              <div className='grid gap-2 text-center'>
                <h2 className='text-2xl font-bold'>Craft Courses</h2>
                <p className='text-muted-foreground'>
                  Explore a wide range of hands-on craft courses, from pottery
                  to woodworking, and unleash your creative potential.
                </p>
              </div>
            </div>
            <div className='grid gap-4 shadow p-4 rounded-xl'>
              <FileBadge2Icon className='w-12 h-12 text-primary mx-auto' />

              <div className='grid gap-2 text-center'>
                <h2 className='text-2xl font-bold'>Certificate Courses</h2>
                <p className='text-muted-foreground'>
                  Gain recognized credentials and enhance your professional
                  skills with our comprehensive certificate courses.
                </p>
              </div>
            </div>
            <div className='grid gap-4 shadow p-4 rounded-xl'>
              <FileBadge2Icon className='w-12 h-12 text-primary mx-auto' />

              <div className='grid gap-2 text-center'>
                <h2 className='text-2xl font-bold'>Diploma Courses</h2>
                <p className='text-muted-foreground'>
                  Dive deep into specialized fields and earn a prestigious
                  diploma to advance your career.
                </p>
              </div>
            </div>
            <div className='grid gap-4 shadow p-4 rounded-xl'>
              <GraduationCapIcon className='w-12 h-12 text-primary mx-auto' />

              <div className='grid gap-2 text-center'>
                <h2 className='text-2xl font-bold'>Admission Courses</h2>
                <p className='text-muted-foreground'>
                  Prepare for competitive exams and secure your admission to
                  prestigious institutions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
