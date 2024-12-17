import React from 'react'
import Image from 'next/image'

export default function UniqueFeatured () {
  return (
    <div className='relative bg-black text-white rounded-lg overflow-hidden'>
        {/* Background Image */}
        <Image 
           src="/images/Unique-banner.PNG"
           alt='Promotion Banner'
           layout="responsive"
           width={500}
           height={300}
           className='w-full h-80 object-cover'
        />
    </div>
  )
}


