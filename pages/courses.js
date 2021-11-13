import React from 'react'
import Head from 'next/head'
import { FaCheckCircle } from 'react-icons/fa'

const courses = () => {
  const verticalPill = () => (
    <div className='d-flex align-items-start'>
      <div
        className='nav flex-column nav-pills me-3'
        id='v-pills-tab'
        role='tablist'
        aria-orientation='vertical'
      >
        <button
          className='nav-link fw-bold  active'
          id='v-pills-building-tab'
          data-bs-toggle='pill'
          data-bs-target='#v-pills-building'
          type='button'
          role='tab'
          aria-controls='v-pills-building'
          aria-selected='true'
        >
          Building and Construction
        </button>
        <button
          className='nav-link fw-bold '
          id='v-pills-engineering-tab'
          data-bs-toggle='pill'
          data-bs-target='#v-pills-engineering'
          type='button'
          role='tab'
          aria-controls='v-pills-engineering'
          aria-selected='false'
        >
          Engineering Department
        </button>
        <button
          className='nav-link fw-bold '
          id='v-pills-business-tab'
          data-bs-toggle='pill'
          data-bs-target='#v-pills-business'
          type='button'
          role='tab'
          aria-controls='v-pills-business'
          aria-selected='false'
        >
          Business Department
        </button>
        <button
          className='nav-link fw-bold '
          id='v-pills-it-tab'
          data-bs-toggle='pill'
          data-bs-target='#v-pills-it'
          type='button'
          role='tab'
          aria-controls='v-pills-it'
          aria-selected='false'
        >
          ICT Department
        </button>
      </div>

      <div className='tab-content' id='v-pills-tabContent'>
        <div
          className='tab-pane fade show active'
          id='v-pills-building'
          role='tabpanel'
          aria-labelledby='v-pills-building-tab'
        >
          <p>
            The department was created in response to increasing demand for
            skilled labour for the building and construction industry. The
            department offers craft, certificate and diploma in the following
            areas:
          </p>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item text-primary'>
              <FaCheckCircle className='mb-1' /> Carpentry, Woodwork & Joinery
            </li>
            <li className='list-group-item text-primary'>
              <FaCheckCircle className='mb-1' /> Masonry Construction &
              Brickwork Welding
            </li>
            <li className='list-group-item text-primary'>
              <FaCheckCircle className='mb-1' /> Metalwork & Fabrication
            </li>
          </ul>
        </div>
        <div
          className='tab-pane fade'
          id='v-pills-engineering'
          role='tabpanel'
          aria-labelledby='v-pills-engineering-tab'
        >
          <p>
            The department of engineering offers both artisan, certificate and
            diploma courses in:
          </p>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item text-primary'>
              <FaCheckCircle className='mb-1' /> Automobile, Mechanic &
              Maintenance.
            </li>
            <li className='list-group-item text-primary'>
              <FaCheckCircle className='mb-1' /> Electrical Installations &
              Wiring
            </li>
          </ul>
        </div>
        <div
          className='tab-pane fade'
          id='v-pills-business'
          role='tabpanel'
          aria-labelledby='v-pills-business-tab'
        >
          <p>
            The SAMTEC Business department aims at providing quality business
            and financial training to empower students with necessary 21st
            accountancy, business and numeracy skills. The department offers the
            following courses:
          </p>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item text-primary'>
              <FaCheckCircle className='mb-1' /> Automobile, Mechanic &
              Maintenance.
            </li>
            <li className='list-group-item text-primary'>
              <FaCheckCircle className='mb-1' /> Electrical Installations &
              Wiring
            </li>
          </ul>
        </div>
        <div
          className='tab-pane fade'
          id='v-pills-it'
          role='tabpanel'
          aria-labelledby='v-pills-it-tab'
        >
          <p>
            Information and knowledge are crucial assets in the 21st century,
            underpinning all economic areas such as banking, education, health,
            finance, manufacturing and entertainment. The SAMTEC ICT department
            offers training ICT foundations at Certificate and diploma levels.
            The department offers the following courses:
          </p>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item text-primary'>
              <FaCheckCircle className='mb-1' /> Computer Packages
            </li>
            <li className='list-group-item text-primary'>
              <FaCheckCircle className='mb-1' /> Software Engineering
            </li>
            <li className='list-group-item text-primary'>
              <FaCheckCircle className='mb-1' /> Networking
            </li>
          </ul>
        </div>
      </div>
    </div>
  )

  const data = [
    {
      id: '1',
      title: 'Mechanics',
      intro: {
        slug: 'intro',
        intro: (
          <p>
            Automobile mechanics is idea for persons who want to work in a motor
            garage either as a proprietor or as a owner.
          </p>
        ),
      },
      specialization: {
        slug: 'specialization',
        specialization: (
          <>
            <p>The topics and areas of specialization covered include: </p>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item text-primary'>
                <FaCheckCircle className='mb-1' /> Automotive mechanics and
                electrical work,
              </li>
              <li className='list-group-item text-primary'>
                <FaCheckCircle className='mb-1' /> Body re-sprays, bodywork and
                tyre fitting
              </li>
            </ul>
          </>
        ),
      },
      job: {
        slug: 'job',
        job: (
          <>
            <p>
              Students who complete the certificate or diploma course in
              Automobile, Mechanic & Maintenance work in automotive repair shops
              or start their own business in automotive repair.
            </p>
            <p>
              To succeed as a mechanic, you’ll need to be a focused problem
              solver who works well independently. Many of the diagnostic tests
              run by mechanics are computerized, so being comfortable with
              technology and adapting to change easily will be important.
              Generally you’ll be working indoors in a well ventilated area but
              you’ll be on your feet, stooping, crouching, and lifting heavy
              objects all day so be sure you’re up to the task.
            </p>
          </>
        ),
      },
    },

    {
      id: '2',
      title: 'Information Technology',
      intro: {
        slug: 'intro',
        intro: (
          <p>
            This course equips students with necessary skills and knowledge to
            use computers in a personal or business environment.
          </p>
        ),
      },
      specialization: {
        slug: 'specialization',
        specialization: (
          <>
            <p>
              This course is available from certificate to diploma level and
              students do not specialize. However, they cover ICT issues
              including networking, software engineering, computer packages and
              business systems.{' '}
            </p>
            <p>
              The course is ideal for anyone wishing to develop their ICT
              competency; from those just starting out in the industry to those
              in senior management roles. Topics covered include computer
              packages, introduction to programming and Computer hardware.
            </p>
          </>
        ),
      },
      job: {
        slug: 'job',
        job: (
          <>
            <p>
              Students who complete this course can work almost in any industry
              where computers are used as IT operators, programmers or
              networking experts. This is one of the most marketable course in
              Somalia right now
            </p>
          </>
        ),
      },
    },

    {
      id: '3',
      title: 'Business Administration',
      intro: {
        slug: 'intro',
        intro: (
          <p>
            The course gives students a general foundation of business knowledge
            and practices, such as accounting, organizational behaviour,
            marketing, market analysis and operations management.
          </p>
        ),
      },
      specialization: {
        slug: 'specialization',
        specialization: (
          <>
            <p>
              This is a foundation course for those who desire to pursue further
              studies in Economics or management.
            </p>
          </>
        ),
      },
      job: {
        slug: 'job',
        job: (
          <>
            <p>
              This course is highly marketable and desired by all industries
              especially for those who will specialice in accountancy and
              economics.
            </p>
          </>
        ),
      },
    },

    {
      id: '4',
      title: 'Electrical Engineering',
      intro: {
        slug: 'intro',
        intro: (
          <p>
            Automobile mechanics is idea for persons who want to work in a motor
            garage either as a propitiator or as a owner.
          </p>
        ),
      },
      specialization: {
        slug: 'specialization',
        specialization: (
          <>
            <p>The topics and areas of specialization covered include:</p>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item text-primary'>
                <FaCheckCircle className='mb-1' /> Automotive mechanics and
                electrical work,
              </li>
              <li className='list-group-item text-primary'>
                <FaCheckCircle className='mb-1' /> Body re-sprays, bodywork and
                tyre fitting
              </li>
            </ul>
          </>
        ),
      },
      job: {
        slug: 'job',
        job: (
          <>
            <p>
              Students who complete the certificate or diploma course in
              Automobile, Mechanic & Maintenance work in automotive repair shops
              or start their own business in automotive repair.
            </p>
            <p>
              To succeed as a mechanic, you’ll need to be a focused problem
              solver who works well independently. Many of the diagnostic tests
              run by mechanics are computerized, so being comfortable with
              technology and adapting to change easily will be important.
              Generally you’ll be working indoors in a well ventilated area but
              you’ll be on your feet, stooping, crouching, and lifting heavy
              objects all day so be sure you’re up to the task.
            </p>
          </>
        ),
      },
    },

    {
      id: '5',
      title: 'Garment Making',
      intro: {
        slug: 'intro',
        intro: (
          <p>
            The Certificate course garment making enables successful students to
            select suitable techniques for stitching garments according to the
            latest trends
          </p>
        ),
      },
      specialization: {
        slug: 'specialization',
        specialization: (
          <>
            <p>
              The course enables students to illustrate and understand various
              types of garment and know the techniques used in making them.
              Other elements include:
            </p>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item text-primary'>
                <FaCheckCircle className='mb-1' /> Stitch various types of
                garments for children and adults.
              </li>
              <li className='list-group-item text-primary'>
                <FaCheckCircle className='mb-1' /> Prepare patterns of garments
                as per requirement
              </li>

              <li className='list-group-item text-primary'>
                <FaCheckCircle className='mb-1' /> Manage the production of
                different types of garments on the shop floor
              </li>

              <li className='list-group-item text-primary'>
                <FaCheckCircle className='mb-1' /> Set up an entrepreneurial
                unit.
              </li>
            </ul>
          </>
        ),
      },
      job: {
        slug: 'job',
        job: (
          <>
            <p>
              Students who complete the certificate or diploma course in
              Automobile, Mechanic & Maintenance work in automotive repair shops
              or start their own business in automotive repair.
            </p>
            <p>
              To succeed as a mechanic, you’ll need to be a focused problem
              solver who works well independently. Many of the diagnostic tests
              run by mechanics are computerized, so being comfortable with
              technology and adapting to change easily will be important.
              Generally you’ll be working indoors in a well ventilated area but
              you’ll be on your feet, stooping, crouching, and lifting heavy
              objects all day so be sure you’re up to the task.
            </p>
          </>
        ),
      },
    },

    {
      id: '6',
      title: 'Languages',
      intro: {
        slug: 'intro',
        intro: (
          <p>
            Learning English or Arabic gives you an edge. Both are languages are
            official for the United Nations
          </p>
        ),
      },
      specialization: {
        slug: 'specialization',
        specialization: (
          <>
            <p>
              There is no specialization in these subjects. What you need to do
              is to master the languages.
            </p>
          </>
        ),
      },
      job: {
        slug: 'job',
        job: (
          <>
            <p>
              Students who complete these course have an edge and can be
              employed as interpretors.
            </p>
          </>
        ),
      },
    },

    {
      id: '7',
      title: 'Carpentry & Joinery',
      intro: {
        slug: 'intro',
        intro: (
          <p>
            Carpentry, Woodwork & Joinery course is for those who enjoy working
            with timber.
          </p>
        ),
      },
      specialization: {
        slug: 'specialization',
        specialization: (
          <>
            <p>
              The course offers learners both basic woodworking techniques and
              complex joinery skills.
            </p>
            <p>
              On completion of the course, learners can pursue a career in
              carpentry. Carpenters work with timber on building sites or in
              customers’ homes and construct, fit or repair doors, window
              frames, staircases, floorboards, cupboards, traditional cut roofs,
              roof trusses and partitions. Bench joiners are based in a workshop
              and manufacture timber products such as doors, window frames,
              staircases and cabinets.
            </p>
          </>
        ),
      },
      job: {
        slug: 'job',
        job: (
          <>
            <p>
              Students who take this course love working with timber and are
              often entrepreneurs who believe ion self employment. Others work
              in building and construction industry
            </p>
          </>
        ),
      },
    },

    {
      id: '8',
      title: 'Metal Work',
      intro: {
        slug: 'intro',
        intro: (
          <p>
            This course aims to provide basic practical training and knowledge
            of fabrication and welding.
          </p>
        ),
      },
      specialization: {
        slug: 'specialization',
        specialization: (
          <>
            <p>
              The aim of the course is to introduce students to basic welding
              and fabrication applications and techniques in a number of
              different processes. This is a practical course, with the emphasis
              on ‘learning by doing’ covers the following areas: Health and
              Safety Metal fabrication Oxy-acetylene welding Oxy-acetylene
              cutting Electric arc welding Testing and defects of welded joints
              Basic business management skills
            </p>
          </>
        ),
      },
      job: {
        slug: 'job',
        job: (
          <>
            <p>
              Students completing this course are mostly self employed but a
              good percentage also works in the building and construction
              industry as metal fabricators
            </p>
          </>
        ),
      },
    },
  ]

  const courses = (id, title, intro, specialization, job) => (
    <>
      <h5 className='text-center fw-bold text-uppercase'>{title}</h5>
      <nav>
        <div className='nav nav-tabs' id='nav-tab' role='tablist'>
          <button
            className='nav-link active'
            id={`nav-${id}-${intro.slug}-tab`}
            data-bs-toggle='tab'
            data-bs-target={`#nav-${id}-${intro.slug}`}
            type='button'
            role='tab'
            aria-controls={`#nav-${id}-${intro.slug}`}
            aria-selected='true'
          >
            Intro
          </button>

          <button
            className='nav-link '
            id={`nav-${id}-${specialization.slug}-tab`}
            data-bs-toggle='tab'
            data-bs-target={`#nav-${id}-${specialization.slug}`}
            type='button'
            role='tab'
            aria-controls={`#nav-${id}-${specialization.slug}`}
            aria-selected='true'
          >
            Specialization
          </button>

          <button
            className='nav-link'
            id={`nav-${id}-${job.slug}-tab`}
            data-bs-toggle='tab'
            data-bs-target={`#nav-${id}-${job.slug}`}
            type='button'
            role='tab'
            aria-controls={`#nav-${id}-${job.slug}`}
            aria-selected='true'
          >
            Job Prospects
          </button>
        </div>
      </nav>
      <div className='tab-content' id='nav-tabContent'>
        <div
          className='tab-pane fade show active'
          id={`nav-${id}-${intro.slug}`}
          role='tabpanel'
          aria-labelledby={`nav-${id}-${intro.slug}-tab`}
        >
          {intro.intro}
        </div>

        <div
          className='tab-pane fade show '
          id={`nav-${id}-${specialization.slug}`}
          role='tabpanel'
          aria-labelledby={`nav-${id}-${specialization.slug}-tab`}
        >
          {specialization.specialization}
        </div>

        <div
          className='tab-pane fade show '
          id={`nav-${id}-${job.slug}`}
          role='tabpanel'
          aria-labelledby={`nav-${id}-${job.slug}-tab`}
        >
          {job.job}
        </div>
      </div>
    </>
  )
  return (
    <div className='container text-primary mb-5 mt-2'>
      <Head>
        <title>Courses</title>
        <meta property='og:title' content='Courses' key='title' />
      </Head>
      <h3 className='text-center display-6'>Courses</h3>
      {verticalPill()}

      <div className='row mt-5'>
        {data.map((d, index) => (
          <div key={index} className='col-md-6 col-12'>
            <div className='shadow p-4'>
              {courses(d.id, d.title, d.intro, d.specialization, d.job)}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default courses
