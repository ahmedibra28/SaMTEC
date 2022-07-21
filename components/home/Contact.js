import React from 'react'
import {
  FaEnvelope,
  FaFacebookSquare,
  FaInstagramSquare,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitterSquare,
} from 'react-icons/fa'
import Link from 'next/link'

const Contact = () => {
  const headOffice = () => (
    <>
      <h5 className='text-uppercase fw-bold'>Head Office</h5>
      <address>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item text-primary'>
            <FaMapMarkerAlt className='mb-1' /> Market Street, Belethawo Town,
            Gedo Region, Jubbaland State, Somalia.
          </li>
          <li className='list-group-item text-primary'>
            <FaPhoneAlt className='mb-1' />
            <Link href='tel:+25214361208'>
              <a className='text-decoration-none'> +252 (0) 436 1208</a>
            </Link>
          </li>
          <li className='list-group-item text-primary'>
            <FaEnvelope className='mb-1' />
            <Link href='mailto:info@samtec.so'>
              <a className='text-decoration-none'> info@samtec.so</a>
            </Link>
          </li>
        </ul>
      </address>
    </>
  )

  const luuqOffice = () => (
    <>
      <h5 className='text-uppercase fw-bold'>Luuq Office</h5>
      <address>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item text-primary'>
            <FaMapMarkerAlt className='mb-1' /> SaMTEC/ACT Center, Luuq district
          </li>
          <li className='list-group-item text-primary'>
            <FaPhoneAlt className='mb-1' />
            <Link href='tel:+25214361208'>
              <a className='text-decoration-none'> +252 (0) 436 1208</a>
            </Link>
          </li>
          <li className='list-group-item text-primary'>
            <FaEnvelope className='mb-1' />
            <Link href='mailto:info@samtec.so'>
              <a className='text-decoration-none'> info@samtec.so</a>
            </Link>
          </li>
        </ul>
      </address>
    </>
  )

  const mogadishuOffice = () => (
    <>
      <h5 className='text-uppercase fw-bold'>Mogadishu Office</h5>
      <address>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item text-primary'>
            <FaMapMarkerAlt className='mb-1' /> Apartment 7, Third Floor, Mumin
            House, Madina Gate Street, Mogadishu, Somalia
          </li>
          <li className='list-group-item text-primary'>
            <FaPhoneAlt className='mb-1' />
            <Link href='tel:+2521858352'>
              <a className='text-decoration-none'> +252 (1) 85 8352</a>
            </Link>
          </li>
          <li className='list-group-item text-primary'>
            <FaEnvelope className='mb-1' />
            <Link href='mailto:info@cerid.so'>
              <a className='text-decoration-none'> info@cerid.so</a>
            </Link>
          </li>
        </ul>
      </address>
    </>
  )

  const socialMedia = () => (
    <>
      <h5 className='text-uppercase fw-bold'>Follow Us</h5>
      <div className='btn-group'>
        <a
          rel='noopener noreferrer'
          href='http://facebook.com/samtec2005'
          target='_blank'
          className='text-decoration-none mx-3'
        >
          <FaFacebookSquare className='mb-1 fs-1' />
        </a>
        <a
          rel='noopener noreferrer'
          href='http://twitter.com/samtec2005'
          target='_blank'
          className='text-decoration-none mx-3'
        >
          <FaTwitterSquare className='mb-1 fs-1' />
        </a>
        <a
          rel='noopener noreferrer'
          href='http://instagram.com/samtec2005'
          target='_blank'
          className='text-decoration-none mx-3'
        >
          <FaInstagramSquare className='mb-1 fs-1' />
        </a>
      </div>
    </>
  )
  return (
    <div id='contact' className='container text-primary py-5 my-5'>
      <h1 className='text-center display-3 fw-bold'>Get In Touch</h1>
      <div className='row mt-4'>
        <div className='col-md-4 col-12'>{headOffice()}</div>
        <div className='col-md-4 col-12'>{luuqOffice()}</div>
        <div className='col-md-4 col-12'>{mogadishuOffice()}</div>
        <div className='col-12 mx-auto text-center mt-5'>{socialMedia()}</div>
      </div>
    </div>
  )
}

export default Contact
