import React from 'react'
import about_image from '../../public/images/about-image.jpg'
import Image from 'next/image'
import {
  FaBullhorn,
  FaBullseye,
  FaCheckCircle,
  FaHandsHelping,
  FaLowVision,
} from 'react-icons/fa'

const About = () => {
  const vision = () => (
    <div className='card border-0 shadow-sm p-3'>
      <FaLowVision className='card-img-top fs-1' />
      <div className='card-body text-center'>
        <h5 className='card-title fw-bold'>VISION</h5>
        <p className='card-text'>
          To be a state-of-the-art center of excellence for developing cutting
          edge market-oriented academic, vocational, and entrepreneurial skills
          training to youths and communities for job creation, selfreliance, and
          national development.
        </p>
      </div>
    </div>
  )
  const mission = () => (
    <div className='card border-0 shadow-sm p-3'>
      <FaBullseye className='card-img-top fs-1' />
      <div className='card-body text-center'>
        <h5 className='card-title fw-bold'>MISSION</h5>
        <p className='card-text'>
          To instill appropriate skills, knowledge and attitude among youths and
          communities through providing market-driven academic, technical,
          industrial, and vocational training and business support services
          thereby enhancing their capacity to generate incomes and improve their
          livelihoods and contribute to national development.
        </p>
      </div>
    </div>
  )

  const ourValue = () => (
    <div className='card border-0 shadow-sm p-3'>
      <FaHandsHelping className='card-img-top fs-1' />
      <div className='card-body text-center'>
        <h5 className='card-title fw-bold'>OUR VALUES</h5>
        <p className='card-text'>
          High Integrity, Transparency and accountability, professionalism, and
          hard work, innovation and creativity, community participation and
          ownership, tirelessly working towards peaceful co-existence,
          specifically:
        </p>
      </div>
      <p className='card-body'>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item text-primary'>
            <FaCheckCircle className='mb-1' /> Of high integrity, transparency,
            and accountability in our work
          </li>
          <li className='list-group-item text-primary'>
            <FaCheckCircle className='mb-1' /> Embracing professionalism and
            hard work
          </li>
          <li className='list-group-item text-primary'>
            <FaCheckCircle className='mb-1' /> Focusing on innovation and
            creativity
          </li>
          <li className='list-group-item text-primary'>
            <FaCheckCircle className='mb-1' /> Believing in community
            participation and ownership
          </li>
          <li className='list-group-item text-primary'>
            <FaCheckCircle className='mb-1' /> Working towards peaceful
            co-existence
          </li>
        </ul>
      </p>
    </div>
  )

  const strategic = () => (
    <div className='card border-0 shadow-sm p-3'>
      <FaBullhorn className='card-img-top fs-1' />
      <div className='card-body text-center'>
        <h5 className='card-title fw-bold'>STRATEGIC FOCUS AREAS</h5>
      </div>
      <p className='card-body'>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item text-primary'>
            <FaCheckCircle className='mb-1' /> Access to academic and vocational
            education
          </li>
          <li className='list-group-item text-primary'>
            <FaCheckCircle className='mb-1' /> Improved quality and standards of
            education
          </li>
          <li className='list-group-item text-primary'>
            <FaCheckCircle className='mb-1' /> Stakeholder participation and
            external linkages
          </li>
          <li className='list-group-item text-primary'>
            <FaCheckCircle className='mb-1' /> Institutional strengthening,
            financing, and sustainability
          </li>
        </ul>
      </p>
    </div>
  )

  return (
    <div id='about' className='container text-primary py-5 my-5'>
      <h3 className='text-center display-6'>Our Background</h3>
      <div className='row mt-5'>
        <div className='col-md-6 col-12 my-auto'>
          <p>
            Sayid Mohamed Technical Education College (SaMTEC) was established
            and became functional in 2010.
          </p>
          <p>
            SaMTEC is a private, non-profit, non-commercial, non-governmental,
            non-profit educational institution.
          </p>
          <p>
            The college is first of its kind in Jubaland Sate of Somalia and
            leading Technical and Vocational Education (TVET) in Somalia.
          </p>
          <p>
            SaMTEC is the only vocational education center in Gedo region and
            one of the best in the whole of Somalia.
          </p>
          <p>
            The main SaMTEC campus is in Beled-Hawa town, with a mix of students
            coming from the neighboring Kenya and Ethiopia.
          </p>
        </div>
        <div className='col-md-6 col-12 my-auto'>
          <Image
            src={about_image}
            width={500}
            height={350}
            className='img-fluid rounded-3'
            alt='about'
          />
        </div>
      </div>

      <div className='row mt-5'>
        <div className='col-md-6 col-12 py-2'>{vision()}</div>
        <div className='col-md-6 col-12 py-2'>{mission()}</div>
        <div className='col-md-6 col-12 py-2'>{ourValue()}</div>
        <div className='col-md-6 col-12 py-2'>{strategic()}</div>
      </div>
    </div>
  )
}

export default About
