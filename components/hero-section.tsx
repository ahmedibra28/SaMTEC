import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { getShorts } from '@/app/appwrite'
import Markdown from 'react-markdown'
import HeroCarousel from '@/components/hero-carousel'
import { ArrowRightIcon } from 'lucide-react'

export default async function HeroSection() {
  const hero = await getShorts('hero')
  const heroData = hero?.documents?.[0]

  const images = [
    'https://pub-8e11b6773dc340e88796e60b90f66ad5.r2.dev/20.jpeg',
    'https://pub-8e11b6773dc340e88796e60b90f66ad5.r2.dev/21.jpeg',
    'https://pub-8e11b6773dc340e88796e60b90f66ad5.r2.dev/1.JPG',
    'https://pub-8e11b6773dc340e88796e60b90f66ad5.r2.dev/2.JPG',
    'https://pub-8e11b6773dc340e88796e60b90f66ad5.r2.dev/3.JPG',
    'https://pub-8e11b6773dc340e88796e60b90f66ad5.r2.dev/4.JPG',
    'https://pub-8e11b6773dc340e88796e60b90f66ad5.r2.dev/5.jpg',
    'https://pub-8e11b6773dc340e88796e60b90f66ad5.r2.dev/6.jpg',
    'https://pub-8e11b6773dc340e88796e60b90f66ad5.r2.dev/7.jpg',
    'https://pub-8e11b6773dc340e88796e60b90f66ad5.r2.dev/8.jpg',
    'https://pub-8e11b6773dc340e88796e60b90f66ad5.r2.dev/9.jpg',
    'https://pub-8e11b6773dc340e88796e60b90f66ad5.r2.dev/10.jpg',
    'https://cloud.appwrite.io/v1/storage/buckets/66471275000c7c4c56be/files/664a040d002b83e82d75/view?project=65905182817b88c986bf',
    'https://cloud.appwrite.io/v1/storage/buckets/66471275000c7c4c56be/files/664a05b50001c872bed8/view?project=65905182817b88c986bf',
    'https://cloud.appwrite.io/v1/storage/buckets/66471275000c7c4c56be/files/664a06ee000ae0bb09df/view?project=65905182817b88c986bf',
    'https://cloud.appwrite.io/v1/storage/buckets/66471275000c7c4c56be/files/664a094c002b118177c2/view?project=65905182817b88c986bf',
    'https://cloud.appwrite.io/v1/storage/buckets/66471275000c7c4c56be/files/664a0d550021665762db/view?project=65905182817b88c986bf',
    'https://cloud.appwrite.io/v1/storage/buckets/66471275000c7c4c56be/files/664a0d4e001d49918ba0/view?project=65905182817b88c986bf',
    // 'https://cloud.appwrite.io/v1/storage/buckets/66471275000c7c4c56be/files/664a0e20001dd3886a07/view?project=65905182817b88c986bf',
  ]

  return (
    <div className='w-full py-12 bg-brand text-white' id='home'>
      <div className='container px-4 md:px-6 w-[95%]'>
        <div className='grid gap-6 lg:grid-cols-[1fr_350px] lg:gap-12 xl:grid-cols-[1fr_600px]'>
          <div className='flex flex-col justify-center space-y-6'>
            <div className='space-y-2'>
              <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>
                About Us
              </h1>
              <Markdown className='prose mt-8 max-w-[600px] text-gray-300 dark:text-gray-400 md:text-xl'>
                {/* {heroData?.content} */}
                Sayid Mohamed Technical Education College (SaMTEC) is the
                largest vocational education center in Jubaland State and one of
                the best in the whole of Somalia.
              </Markdown>
            </div>
            <div className='flex flex-col gap-2 min-[400px]:flex-row'>
              <Link href='/about-us' passHref>
                <Button size='lg' variant='outline' className='bg-transparent'>
                  Learn More <ArrowRightIcon />
                </Button>
              </Link>
            </div>
          </div>
          <HeroCarousel images={images} />
        </div>
      </div>
    </div>
  )
}
