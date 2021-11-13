// import Image from 'next/image'

import React from 'react'

const ProductionPhotos = () => {
  const images = [
    '/images/production_photos/1.jpg',
    '/images/production_photos/2.jpg',
    '/images/production_photos/3.jpg',
    '/images/production_photos/4.jpg',
    '/images/production_photos/5.jpg',
    '/images/production_photos/6.jpg',
    '/images/production_photos/7.jpg',
    '/images/production_photos/8.jpg',
    '/images/production_photos/9.jpg',
  ]
  return (
    <div className='row g-3'>
      {images.map((image, index) => (
        <div key={index} className='col-lg-3 col-md-4 col-6'>
          <img
            src={image}
            // width={280}
            // height={200}
            alt='production-photos'
            className='img-fluid'
          />
        </div>
      ))}
    </div>
  )
}

export default ProductionPhotos
