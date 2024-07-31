'use client'
import Link from 'next/link'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { MenuIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Navigation() {
  const menus = [
    { name: 'About Us', href: '/#about-us' },
    { name: 'Curriculum', href: '/#curriculum' },
    { name: 'Agribusiness', href: '/#agribusiness' },
    { name: 'Admissions', href: '/#admissions' },
    { name: 'Courses', href: '/#courses' },
    { name: 'Impact', href: '/impact' },
    { name: 'Blog', href: '/#blog' },
    { name: 'Contact Us', href: '/#contact-us' },
  ]
  return (
    <header className='bg-white shadow text-white-foreground py-4 px-6 md:px-8 lg:px-10 flex items-center justify-between'>
      <Link className='flex items-center gap-2' href='/#home'>
        <Avatar>
          <AvatarImage src='/logo.png' />
          <AvatarFallback>SaMTEC</AvatarFallback>
        </Avatar>
        <span className='text-2xl font-bold text-brand'>SaMTEC</span>

        <span className='sr-only'>SaMTEC</span>
      </Link>

      <nav className='hidden lg:flex items-center gap-6'>
        {menus.map((menu) => (
          <Link
            key={menu.name}
            href={menu.href}
            className='hover:underline underline-offset-4'
            prefetch={false}
          >
            {menu.name}
          </Link>
        ))}
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant='outline' size='icon' className='lg:hidden'>
            <MenuIcon className='w-6 h-6' />
            <span className='sr-only'>Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side='right'>
          <div className='grid gap-4 p-6'>
            {menus.map((menu) => (
              <Link
                key={menu.name}
                href={menu.href}
                className='hover:underline underline-offset-4'
                prefetch={false}
              >
                {menu.name}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </header>
  )
}
