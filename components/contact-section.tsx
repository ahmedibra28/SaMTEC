import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Contact() {
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
                Have a question or want to work together? We'd love to hear from
                you.
              </p>
            </div>
            <div className='flex items-center gap-4'>
              <Link
                href='#'
                className='text-gray-300 hover:text-foreground'
                prefetch={false}
              >
                <FacebookIcon className='h-6 w-6' />
                <span className='sr-only'>Facebook</span>
              </Link>
              <Link
                href='#'
                className='text-gray-300 hover:text-foreground'
                prefetch={false}
              >
                <TwitterIcon className='h-6 w-6' />
                <span className='sr-only'>Twitter</span>
              </Link>
              <Link
                href='#'
                className='text-gray-300 hover:text-foreground'
                prefetch={false}
              >
                <InstagramIcon className='h-6 w-6' />
                <span className='sr-only'>Instagram</span>
              </Link>
              <Link
                href='#'
                className='text-gray-300 hover:text-foreground'
                prefetch={false}
              >
                <LinkedinIcon className='h-6 w-6' />
                <span className='sr-only'>LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-2'>
            <div className='space-y-2'>
              <h3 className='text-lg font-semibold'>New York</h3>
              <address className='not-italic text-gray-300'>
                <div>123 Main St.</div>
                <div>New York, NY 10001</div>
                <div>
                  <a href='#'>+1 (555) 555-5555</a>
                </div>
                <div>
                  <a href='#'>newyork@example.com</a>
                </div>
              </address>
            </div>
            <div className='space-y-2'>
              <h3 className='text-lg font-semibold'>Los Angeles</h3>
              <address className='not-italic text-gray-300'>
                <div>456 Oak Ave.</div>
                <div>Los Angeles, CA 90001</div>
                <div>
                  <a href='#'>+1 (555) 555-5556</a>
                </div>
                <div>
                  <a href='#'>losangeles@example.com</a>
                </div>
              </address>
            </div>
            <div className='space-y-2'>
              <h3 className='text-lg font-semibold'>Chicago</h3>
              <address className='not-italic text-gray-300'>
                <div>789 Elm St.</div>
                <div>Chicago, IL 60601</div>
                <div>
                  <a href='#'>+1 (555) 555-5557</a>
                </div>
                <div>
                  <a href='#'>chicago@example.com</a>
                </div>
              </address>
            </div>
            <div className='space-y-2'>
              <h3 className='text-lg font-semibold'>London</h3>
              <address className='not-italic text-gray-300'>
                <div>321 Oak Rd.</div>
                <div>London, UK W1J 0AE</div>
                <div>
                  <a href='#'>+44 (0) 20 7123 4567</a>
                </div>
                <div>
                  <a href='#'>london@example.com</a>
                </div>
              </address>
            </div>
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
