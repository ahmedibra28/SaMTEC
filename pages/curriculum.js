import React from 'react'
import Head from 'next/head'
import { FaCloudDownloadAlt } from 'react-icons/fa'

const curriculum = () => {
  return (
    <div className='container text-primary mb-5 mt-2'>
      <Head>
        <title>SaMTEC 2020 Syllabus and Regulations</title>
        <meta
          property='og:title'
          content='SaMTEC 2020 Syllabus and Regulations'
          key='title'
        />
      </Head>
      <h3 className='text-center display-6'>
        SaMTEC 2020 Syllabus and Regulations
      </h3>
      <div className='content'>
        <p>
          SaMTEC developed skills and professional-based curriculum and teaching
          guides fit for Global Occupational Standards.
        </p>
        <p className='fw-bold'>
          The curriculum and teaching guides reflect skills and attitudes
          necessary for propelling the nation to a globally competitive country
          and hence the paradigm shift to embrace competency-based education and
          training in Africa.
        </p>
        <p>
          This entailed consultation with the industry and trainers from
          different sectors who were then brought on board to develop the SaMTEC
          curriculum and teaching guides.
        </p>
        <p className='fw-bold'>
          Each course curriculum and each teaching guide comprise three levels
          (Level 1, Level 2, and Level 3), and each level is a combination of
          six months of institutional training and supervised three months of
          industrial attachment training, hence complete course duration is 27
          months (18 months of institutional training and 9 months of industrial
          attachment training).
        </p>
        <div className='text-center'>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://samtec-dims.s3.us-west-002.backblazeb2.com/others/SaMTEC+Syllabus+and+Regulations.pdf'
            className='btn btn-primary'
          >
            <FaCloudDownloadAlt className='mb-1' /> Download SaMTEC 2020
            Syllabus and Regulations
          </a>
        </div>
        <img
          src='/images/curriculum/1.jpg'
          className='img-fluid w-100'
          alt='SaMTEC 2020 Syllabus and Regulations'
        />
      </div>
    </div>
  )
}

export default curriculum
