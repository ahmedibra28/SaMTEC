import {
  BriefcaseIcon,
  BuildingIcon,
  ComputerIcon,
  ConstructionIcon,
} from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import React from 'react'
import { courses } from './data'

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
            <h1 className='text-4xl md:text-6xl font-bold'>Courses</h1>
            <p className='text-lg md:text-xl'></p>
          </div>
        </div>
      </section>

      <div className='flex flex-col min-h-dvh'>
        <main className='flex-1'>
          <section className='w-full py-12 md:py-24 lg:py-32'>
            <div className='container grid grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3 md:px-6'>
              <Accordion type='single' collapsible className='w-full'>
                <AccordionItem value='item-1'>
                  <AccordionTrigger className='font-bold uppercase text-lg'>
                    Mechanics
                  </AccordionTrigger>
                  <AccordionContent>
                    Automobile mechanics is idea for persons who want to work in
                    a motor garage either as a proprietor or as a owner.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-2'>
                  <AccordionTrigger>Specialization</AccordionTrigger>
                  <AccordionContent>
                    <p className=''>
                      The topics and areas of specialization covered include:
                      <ol className='list-decimal list-inside'>
                        <li>Automobile mechanics and electrical work</li>
                        <li>Body re-sprays, bodywork and tyre fitting</li>
                      </ol>
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-3'>
                  <AccordionTrigger>Job Prospects</AccordionTrigger>
                  <AccordionContent>
                    Students who complete the certificate or diploma course in
                    Automobile, Mechanic & Maintenance work in automotive repair
                    shops or start their own business in automotive repair.{' '}
                    <br /> <br />
                    To succeed as a mechanic, you’ll need to be a focused
                    problem solver who works well independently. Many of the
                    diagnostic tests run by mechanics are computerized, so being
                    comfortable with technology and adapting to change easily
                    will be important. Generally you’ll be working indoors in a
                    well ventilated area but you’ll be on your feet, stooping,
                    crouching, and lifting heavy objects all day so be sure
                    you’re up to the task.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion type='single' collapsible className='w-full'>
                <AccordionItem value='item-1'>
                  <AccordionTrigger className='font-bold uppercase text-lg'>
                    Information Technology
                  </AccordionTrigger>
                  <AccordionContent>
                    This course equips students with necessary skills and
                    knowledge to use computers in a personal or business
                    environment.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-2'>
                  <AccordionTrigger>Specialization</AccordionTrigger>
                  <AccordionContent>
                    This course is available from certificate to diploma level
                    and students do not specialize. However, they cover ICT
                    issues including networking, software engineering, computer
                    packages and business systems. <br />
                    <br />
                    The course is ideal for anyone wishing to develop their ICT
                    competency; from those just starting out in the industry to
                    those in senior management roles. Topics covered include
                    computer packages, introduction to programming and Computer
                    hardware.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-3'>
                  <AccordionTrigger>Job Prospects</AccordionTrigger>
                  <AccordionContent>
                    Students who complete this course can work almost in any
                    industry where computers are used as IT operators,
                    programmers or networking experts. This is one of the most
                    marketable course in Somalia right now
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion type='single' collapsible className='w-full'>
                <AccordionItem value='item-1'>
                  <AccordionTrigger className='font-bold uppercase text-lg'>
                    Business Administration
                  </AccordionTrigger>
                  <AccordionContent>
                    The course gives students a general foundation of business
                    knowledge and practices, such as accounting, organizational
                    behaviour, marketing, market analysis and operations
                    management.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-2'>
                  <AccordionTrigger>Specialization</AccordionTrigger>
                  <AccordionContent>
                    This is a foundation course for those who desire to pursue
                    further studies in Economics or management.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-3'>
                  <AccordionTrigger>Job Prospects</AccordionTrigger>
                  <AccordionContent>
                    This course is highly marketable and desired by all
                    industries especially for those who will specialice in
                    accountancy and economics.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion type='single' collapsible className='w-full'>
                <AccordionItem value='item-1'>
                  <AccordionTrigger className='font-bold uppercase text-lg'>
                    Electrical Engineering
                  </AccordionTrigger>
                  <AccordionContent>
                    Automobile mechanics is idea for persons who want to work in
                    a motor garage either as a propitiator or as a owner.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-2'>
                  <AccordionTrigger>Specialization</AccordionTrigger>
                  <AccordionContent>
                    <p className=''>
                      The topics and areas of specialization covered include:
                      <ol className='list-decimal list-inside'>
                        <li>Automotive mechanics and electrical work</li>
                        <li>Body re-sprays, bodywork and tyre fitting</li>
                      </ol>
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-3'>
                  <AccordionTrigger>Job Prospects</AccordionTrigger>
                  <AccordionContent>
                    Students who complete the certificate or diploma course in
                    Automobile, Mechanic & Maintenance work in automotive repair
                    shops or start their own business in automotive repair.{' '}
                    <br />
                    <br />
                    To succeed as a mechanic, you’ll need to be a focused
                    problem solver who works well independently. Many of the
                    diagnostic tests run by mechanics are computerized, so being
                    comfortable with technology and adapting to change easily
                    will be important. Generally you’ll be working indoors in a
                    well ventilated area but you’ll be on your feet, stooping,
                    crouching, and lifting heavy objects all day so be sure
                    you’re up to the task.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion type='single' collapsible className='w-full'>
                <AccordionItem value='item-1'>
                  <AccordionTrigger className='font-bold uppercase text-lg'>
                    Garment Making
                  </AccordionTrigger>
                  <AccordionContent>
                    The Certificate course garment making enables successful
                    students to select suitable techniques for stitching
                    garments according to the latest trends
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-2'>
                  <AccordionTrigger>Specialization</AccordionTrigger>
                  <AccordionContent>
                    <p className=''>
                      The course enables students to illustrate and understand
                      various types of garment and know the techniques used in
                      making them. Other elements include:
                      <ol className='list-decimal list-inside'>
                        <li>
                          Stitch various types of garments for children and
                          adults.
                        </li>
                        <li>Prepare patterns of garments as per requirement</li>
                        <li>
                          Manage the production of different types of garments
                          on the shop floor
                        </li>
                        <li>Set up an entrepreneurial unit.</li>
                      </ol>
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-3'>
                  <AccordionTrigger>Job Prospects</AccordionTrigger>
                  <AccordionContent>
                    Students who complete the certificate or diploma course in
                    Automobile, Mechanic & Maintenance work in automotive repair
                    shops or start their own business in automotive repair.{' '}
                    <br />
                    <br />
                    To succeed as a mechanic, you’ll need to be a focused
                    problem solver who works well independently. Many of the
                    diagnostic tests run by mechanics are computerized, so being
                    comfortable with technology and adapting to change easily
                    will be important. Generally you’ll be working indoors in a
                    well ventilated area but you’ll be on your feet, stooping,
                    crouching, and lifting heavy objects all day so be sure
                    you’re up to the task.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion type='single' collapsible className='w-full'>
                <AccordionItem value='item-1'>
                  <AccordionTrigger className='font-bold uppercase text-lg'>
                    Languages
                  </AccordionTrigger>
                  <AccordionContent>
                    Learning English or Arabic gives you an edge. Both are
                    languages are official for the United Nations
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-2'>
                  <AccordionTrigger>Specialization</AccordionTrigger>
                  <AccordionContent>
                    There is no specialization in these subjects. What you need
                    to do is to master the languages.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-3'>
                  <AccordionTrigger>Job Prospects</AccordionTrigger>
                  <AccordionContent>
                    Students who complete these course have an edge and can be
                    employed as interpretors.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion type='single' collapsible className='w-full'>
                <AccordionItem value='item-1'>
                  <AccordionTrigger className='font-bold uppercase text-lg'>
                    CARPENTRY & JOINERY
                  </AccordionTrigger>
                  <AccordionContent>
                    Carpentry, Woodwork & Joinery course is for those who enjoy
                    working with timber.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-2'>
                  <AccordionTrigger>Specialization</AccordionTrigger>
                  <AccordionContent>
                    The course offers learners both basic woodworking techniques
                    and complex joinery skills. <br /> <br />
                    On completion of the course, learners can pursue a career in
                    carpentry. Carpenters work with timber on building sites or
                    in customers’ homes and construct, fit or repair doors,
                    window frames, staircases, floorboards, cupboards,
                    traditional cut roofs, roof trusses and partitions. Bench
                    joiners are based in a workshop and manufacture timber
                    products such as doors, window frames, staircases and
                    cabinets.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-3'>
                  <AccordionTrigger>Job Prospects</AccordionTrigger>
                  <AccordionContent>
                    Students who take this course love working with timber and
                    are often entrepreneurs who believe ion self employment.
                    Others work in building and construction industry
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion type='single' collapsible className='w-full'>
                <AccordionItem value='item-1'>
                  <AccordionTrigger className='font-bold uppercase text-lg'>
                    METAL WORK
                  </AccordionTrigger>
                  <AccordionContent>
                    This course aims to provide basic practical training and
                    knowledge of fabrication and welding.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-2'>
                  <AccordionTrigger>Specialization</AccordionTrigger>
                  <AccordionContent>
                    The aim of the course is to introduce students to basic
                    welding and fabrication applications and techniques in a
                    number of different processes. This is a practical course,
                    with the emphasis on ‘learning by doing’ covers the
                    following areas: Health and Safety Metal fabrication
                    Oxy-acetylene welding Oxy-acetylene cutting Electric arc
                    welding Testing and defects of welded joints Basic business
                    management skills
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value='item-3'>
                  <AccordionTrigger>Job Prospects</AccordionTrigger>
                  <AccordionContent>
                    Students completing this course are mostly self employed but
                    a good percentage also works in the building and
                    construction industry as metal fabricators
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>

          <section className='w-full py-12 md:py-24 lg:py-32 bg-muted'>
            <div className='container grid grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-4 md:px-6 items-baseline'>
              {courses.map((course, i) => (
                <div key={i} className='flex flex-col justify-center space-y-4'>
                  {course.title === 'Building & Construction' && (
                    <BuildingIcon className='w-12 h-12 text-primary' />
                  )}
                  {course.title === 'Engineering' && (
                    <ConstructionIcon className='w-12 h-12 text-primary' />
                  )}
                  {course.title === 'Business' && (
                    <BriefcaseIcon className='w-12 h-12 text-primary' />
                  )}
                  {course.title === 'ICT' && (
                    <ComputerIcon className='w-12 h-12 text-primary' />
                  )}
                  <h3 className='text-xl font-bold'>{course.title}</h3>
                  <p className=''>{course.content}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
