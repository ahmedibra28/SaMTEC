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
              Agribusiness Entrepreneurship Training
            </h1>
            <p className='text-lg md:text-xl'></p>
          </div>
        </div>
      </section>

      <div className='container mx-auto py-12 px-4 md:px-6 lg:py-16'>
        <div className='mx-auto max-w-3xl space-y-6'>
          <div>
            <p className='mt-4 text-muted-foreground'>
              The College started offering 3 courses at its early days, and
              gradually increased to the current 19 different courses (Table
              below).
            </p>

            <p className='mt-4 text-muted-foreground'>
              In addition to SaMTEC s main campus in Beld-Hawa, Agriculture
              Training Centre (ATC) campus in Luuq offers specializes
              agribusiness and agriculture extension vocational training
              courses.
            </p>

            <h3 className='font-bold my-4 text-lg mt-10'>
              Training and mentorship on agribusiness and entrepreneurship
            </h3>
            <p className='mt-4 text-muted-foreground'>
              Targets school age youth, withan overall aim of enabling youth to
              access to formal and informal employments. Female and male youth
              are trained on Permaculture principles, agroecology, Business &
              Basic computer skills for six months. <br />
              SaMTEC’s ATC has introduced demonstration plots for different
              practical sessions. Trained youth are able to produce horticulture
              crops to access income.
            </p>
            <h3 className='font-bold my-4 text-lg mt-10'>
              Food production to improve nutrition outcomes under permaculture
              courses
            </h3>
            <p className='mt-4 text-muted-foreground'>
              Aims to strengthen communities’ resilience to cope with recurring
              humanitarian hazards and shocks. Target audiences benefit from
              SaMTEC’s ATC and receive tailor-made agriculture training courses
              to improve the uptake of modern and environmentally friendly food
              production techniques. SaMTEC’s ATC facilities and demonstration
              field within the campus
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
