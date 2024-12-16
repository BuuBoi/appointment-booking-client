import React from 'react'

export default function SectionHeading({title}) {
  return ( 
    <h2 className='mb-3 font-bold text-2xl leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]'>
        {title}
    </h2>
  )
}
