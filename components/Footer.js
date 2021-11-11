import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='card-footer'>
      <div className='text-center d-flex justify-content-center'>
        <div className='nav-link'>
          <Link href='/terms'>
            <a className='text-decoration-none'>Terms of Use</a>
          </Link>
        </div>
        <div className='nav-link'>
          <Link href='/privacy'>
            <a className='text-decoration-none'>Privacy Policy</a>
          </Link>
        </div>
        <div className='nav-link'>
          <Link href='/contact'>
            <a className='text-decoration-none'>Contact Us</a>
          </Link>
        </div>
        <div className='nav-link'>
          <Link href='/about'>
            <a className='text-decoration-none'>About Us</a>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
