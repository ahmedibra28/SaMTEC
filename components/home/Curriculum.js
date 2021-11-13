import React from 'react'
import Link from 'next/link'
import { FaCheckCircle } from 'react-icons/fa'
import ProductionPhotos from './ProductionPhotos'

const Curriculum = () => {
  return (
    <div id='curriculum' className='container text-primary py-5 my-5'>
      <h3 className='text-center display-6'>
        Curriculum / Syllabus and Teaching Guides
      </h3>
      <p className='text-center'>
        The College started offering 3 courses at its early days, and gradually
        increased to the current 19 different courses (Table below).
        <br />
        In addition to SaMTEC s main campus in Beld-Hawa, Agriculture Training
        Centre (ATC) campus in Luuq offers specializes agribusiness and
        agriculture extension vocational training courses.
      </p>

      <div className='text-center mt-5'>
        <Link href='/curriculum'>
          <a target='_blank' className='btn btn-primary py-2 px-5'>
            Learn More About 2020 Syllabus and Regulations
          </a>
        </Link>
      </div>

      <div className='mt-5'>
        <h3 className='text-center display-6'>
          Additional Crucial Units in SaMTEC
        </h3>
        <p className='text-center'>
          In addition to the Trade Training and Professional courses offered to
          the trainees SaMTEC has two crucial units:
        </p>
        <hr />

        <nav>
          <div className='nav nav-tabs' id='nav-tab' role='tablist'>
            <button
              className='nav-link active'
              id='nav-business-development-unit-tab'
              data-bs-toggle='tab'
              data-bs-target='#nav-business-development-unit'
              type='button'
              role='tab'
              aria-controls='nav-business-development-unit'
              aria-selected='true'
            >
              Business Development Unit
            </button>
            <button
              className='nav-link'
              id='nav-production-unit-tab'
              data-bs-toggle='tab'
              data-bs-target='#nav-production-unit'
              type='button'
              role='tab'
              aria-controls='nav-production-unit'
              aria-selected='false'
            >
              Production Unit
            </button>
          </div>
        </nav>
        <div className='tab-content' id='nav-tabContent'>
          <div
            className='tab-pane fade show active'
            id='nav-business-development-unit'
            role='tabpanel'
            aria-labelledby='nav-business-development-unit-tab'
          >
            <p>
              Business unit has a database system that monitors former graduates
              of SaMTEC in the market, whether employed or self- employed
              through their own different micro-enterprises skills.
            </p>
            <p>The Business Development Unit has the following functions:</p>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item text-primary'>
                <FaCheckCircle className='mb-1' /> The Unit facilitates business
                consultation forum that promotes entrepreneurial skills and
                holds an annual conference, during these forums specific
                trainings are offered to former graduates.
              </li>
              <li className='list-group-item text-primary'>
                <FaCheckCircle className='mb-1' /> The unit has a fully
                equipped, separate office which provides business support,
                internship, and mentorship services.
              </li>
              <li className='list-group-item text-primary'>
                <FaCheckCircle className='mb-1' /> The unit enables and carries
                out assessments and evaluations to gauge the success rate of
                graduates.
              </li>
            </ul>
          </div>
          <div
            className='tab-pane fade'
            id='nav-production-unit'
            role='tabpanel'
            aria-labelledby='nav-production-unit-tab'
          >
            <p>
              For sustainability and thinking ahead, and to ensure the
              self-reliance of the college and meet with some of its operational
              needs, SaMTEC created a production unit which accommodates five
              sections (carpentry, textile, welding and fabrications, electronic
              repair, and masonry and brick making).
            </p>
            <p>Production units at work are shown in the photos below.</p>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item text-primary'>
                <FaCheckCircle className='mb-1' /> Carpentry section produces a
                presentable output of well designed and modernized furniture of
                all kinds
              </li>
              <li className='list-group-item text-primary'>
                <FaCheckCircle className='mb-1' /> Clothing & Textile section
                produces and makes fashions, school uniforms for the local
                markets
              </li>
              <li className='list-group-item text-primary'>
                <FaCheckCircle className='mb-1' /> Welding and fabrication
                section produces metallic materials like gates, beds, and
                household utensils and cutleries.
              </li>
              <li className='list-group-item text-primary'>
                <FaCheckCircle className='mb-1' /> Business and production units
                also act as internship and industrial learning practical hub
                which provides incentives for students
              </li>
            </ul>
            <ProductionPhotos />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Curriculum
