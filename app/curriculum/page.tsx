import BlurImage from '@/components/blur-image'
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
            <h1 className='text-4xl md:text-6xl font-bold'>
              SaMTEC 2020 Syllabus and Regulations
            </h1>
            <p className='text-lg md:text-xl'></p>
          </div>
        </div>
      </section>

      <div className='container mx-auto py-12 px-4 md:px-6 lg:py-16'>
        <div className='mx-auto max-w-3xl space-y-6'>
          <div>
            <p className='mt-4 text-muted-foreground'>
              SaMTEC developed skills and professional-based curriculum and
              teaching guides fit for Global Occupational Standards.{' '}
            </p>

            <p className='mt-4 text-muted-foreground'>
              The curriculum and teaching guides reflect skills and attitudes
              necessary for propelling the nation to a globally competitive
              country and hence the paradigm shift to embrace competency-based
              education and training in Africa.
            </p>
            <p className='mt-4 text-muted-foreground'>
              This entailed consultation with the industry and trainers from
              different sectors who were then brought on board to develop the
              SaMTEC curriculum and teaching guides.
            </p>
            <p className='mt-4 text-muted-foreground'>
              Each course curriculum and each teaching guide comprise three
              levels (Level 1, Level 2, and Level 3), and each level is a
              combination of six months of institutional training and supervised
              three months of industrial attachment training, hence complete
              course duration is 27 months (18 months of institutional training
              and 9 months of industrial attachment training).
            </p>
          </div>
          <div className='overflow-hidden rounded-lg bg-background'>
            <BlurImage
              src='/curriculum.jpg'
              alt='Curriculum'
              className='aspect-video w-full object-contain'
              width={1280}
              height={720}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
