import image1 from '../../public/images/production_photos/1.jpg'
import image2 from '../../public/images/production_photos/2.jpg'
import image3 from '../../public/images/production_photos/3.jpg'
import image4 from '../../public/images/production_photos/4.jpg'
import image5 from '../../public/images/production_photos/5.jpg'
import image6 from '../../public/images/production_photos/6.jpg'
import image7 from '../../public/images/production_photos/7.jpg'
import image8 from '../../public/images/production_photos/8.jpg'
import image9 from '../../public/images/production_photos/9.jpg'

import React from 'react'
import Image from 'next/image'

const ProductionPhotos = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
  ]
  return (
    <div className='row g-3'>
      {images.map((image, index) => (
        <div key={index} className='col-lg-3 col-md-4 col-6'>
          <Image
            src={image}
            width={280}
            height={200}
            alt='production-photos'
            className='img-fluid'
          />
        </div>
      ))}
    </div>
  )
}

export default ProductionPhotos
