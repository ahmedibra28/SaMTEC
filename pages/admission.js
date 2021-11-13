import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import { FaCertificate, FaGraduationCap, FaPencilRuler } from 'react-icons/fa'
import admissionImage from '../public/images/admission/admission.svg'

const admission = () => {
  const craft = () => (
    <div className='card border-0 shadow-sm p-3'>
      <FaPencilRuler className='card-img-top fs-1' />
      <div className='card-body text-center'>
        <h5 className='card-title fw-bold'>CRAFT COURSES</h5>
        <p className='card-text'>
          There is no minimum qualification for a student to be admitted to a
          craft course. These courses are designed to offer individuals without
          any formal education an opportunity to learn and perfect a trade such
          as dress making, carpentry or masonry.
        </p>
      </div>
    </div>
  )
  const certificate = () => (
    <div className='card border-0 shadow-sm p-3'>
      <FaCertificate className='card-img-top fs-1' />
      <div className='card-body text-center'>
        <h5 className='card-title fw-bold'>CERTIFICATE COURSES</h5>
        <p className='card-text'>
          To be admitted into a certificate course, a student must have
          completed a craft certificate or attained a minimum of 7 years of
          primary education. Students applying for certificate courses are
          required to submit appropriate documentation such as a certificate.
          For more information please contact the college registrar using our
          contact form.
        </p>
      </div>
    </div>
  )

  const diploma = () => (
    <div className='card border-0 shadow-sm p-3'>
      <FaCertificate className='card-img-top fs-1' />
      <div className='card-body text-center'>
        <h5 className='card-title fw-bold'>DIPLOMA COURSES</h5>
        <p className='card-text'>
          There are two pathways into a diploma course; a direct entry and an
          entry through a certificate program. A direct entry into a diploma
          course is for those students who have a qualifying grade from a
          secondary school or post secondary school education (such as a
          diploma, certificate or degree). A certificate pathway is also
          available for students who have a recognized certificate. Please
          contact the college registrar for more information.
        </p>
      </div>
    </div>
  )

  const admission = () => (
    <div className='card border-0 shadow-sm p-3'>
      <FaGraduationCap className='card-img-top fs-1' />
      <div className='card-body text-center'>
        <h5 className='card-title fw-bold'>ADMISSION COURSES</h5>
        <p className='card-text'>View admission requirements on your right</p>
      </div>
    </div>
  )

  return (
    <div className='container text-primary mb-5 mt-2'>
      <Head>
        <title>Admission</title>
        <meta property='og:title' content='Admission' key='title' />
      </Head>
      <h3 className='text-center display-6'>Admissions</h3>
      <div className='row'>
        <div className='col-md-6 col-12 my-auto'>
          <p>
            At SAMTEC, we believe that every person has a right to quality
            education.
          </p>
          <p>
            Our programs have been designed to accomodate students who have a
            passion to parsue studies in their areas of interest.
          </p>
          <p>
            It is possible to be admitted by following multiple pathways. Below
            is a minim set of qualifications for each level of admission.
          </p>
          <p>
            Admissions are open to all qualified national and international
            persons without discrimination. A student is admitted into an
            academic program when he/she meets the entry requirements into that
            program and level.
          </p>
        </div>

        <div className='col-md-6 col-12 my-auto'>
          <Image
            src={admissionImage}
            width={500}
            height={350}
            className='img-fluid rounded-3'
            alt='about'
          />
        </div>
      </div>

      <div className='row mt-5'>
        <div className='col-md-6 col-12 py-2'>{craft()}</div>
        <div className='col-md-6 col-12 py-2'>{certificate()}</div>
        <div className='col-md-6 col-12 py-2'>{diploma()}</div>
        <div className='col-md-6 col-12 py-2'>{admission()}</div>
      </div>
    </div>
  )
}

export default admission
