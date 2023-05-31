import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='container mb-5 mt-2 pb-5'>
      <div className='text-center'>
        <img
          src='/images/logo.png'
          width='100'
          alt='logo'
          className='img-fluid'
        />
      </div>
      <h1 className='text-center display-1 fw-bold text-primary'>SaMTEC</h1>{' '}
      <br />
      <h2 className='text-center fw-light'>
        Sayid Mohamed Technical Education College
      </h2>
      <p className='text-center '>
        is the only vocational education center in{' '}
        <span className='fw-bold'> Gedo region </span> and <br /> one of the
        best in the whole of Somalia.
      </p>
      <div className='text-center mt-5'>
        <Link href='/#about'>
          <a className='btn btn-primary py-2 px-5'>Learn More</a>
        </Link>
      </div>
    </div>
  )
}

export default Hero
