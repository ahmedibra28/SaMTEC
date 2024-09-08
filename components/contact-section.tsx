import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Contact() {
  const addresses = [
    {
      office: 'HEAD OFFICE',
      address:
        'Market Street, Belethawo Town, Gedo Region, Jubbaland State, Somalia.',
      phone: '+252 (0) 436 1208',
      email: 'info@samtec.so',
    },
    {
      office: 'LUUQ OFFICE',
      address: 'SaMTEC/ACT Center, Luuq district',
      phone: '+252 (0) 436 1208',
      email: 'info@samtec.so',
    },
    {
      office: 'MOGADISHU OFFICE',
      address:
        'Apartment 5, Third Floor, Jayga Road, Behind Ali Jimale Masjid, Mogadishu, Somalia',
      phone: '+252 (1) 83 9028',
      email: 'info@cerid.so',
    },
  ]
  return (
    <div className='bg-brand text-white'>
      <section className=' py-12 md:py-24 lg:py-32' id='contact-us'>
        <div className='container grid items-start gap-8 px-4 md:px-6 lg:grid-cols-2 xl:gap-16'>
          <div className='grid gap-6'>
            <div className='space-y-2'>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                Get in Touch
              </h2>
              <p className='max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                Have a question or want to work together? We&apos;d love to hear
                from you.
              </p>
            </div>
            <div className='flex items-center gap-4'>
              <Link
                href='https://facebook.com/samtec2005'
                target='_blank'
                className='text-gray-300 hover:text-foreground'
                prefetch={false}
              >
                <FacebookIcon className='h-6 w-6' />
                <span className='sr-only'>Facebook</span>
              </Link>
              <Link
                href='https://twitter.com/samtec2005'
                target='_blank'
                className='text-gray-300 hover:text-foreground'
                prefetch={false}
              >
                <TwitterIcon className='h-6 w-6' />
                <span className='sr-only'>Twitter</span>
              </Link>
              <Link
                href='https://instagram.com/samtec2005'
                target='_blank'
                className='text-gray-300 hover:text-foreground'
                prefetch={false}
              >
                <InstagramIcon className='h-6 w-6' />
                <span className='sr-only'>Instagram</span>
              </Link>
            </div>
          </div>
          <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-2'>
            {addresses.map((address, i) => (
              <div key={i} className='space-y-2'>
                <h3 className='text-lg font-semibold'>{address.office}</h3>
                <address className='not-italic text-gray-300'>
                  <div>{address.address}</div>
                  <div>
                    <a href='#'>{address.phone}</a>
                  </div>
                  <div>
                    <a href='#'>{address.email}</a>
                  </div>
                </address>
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer className='py-6 text-center  border-t'>
        <div className='container mx-auto px-4 md:px-6'>
          <p>&copy; 2024 Our Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
