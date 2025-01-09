import React from 'react'
import { Link } from 'react-router-dom'

export default function LinkCards({className,specialties}) {
  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-col-1 gap-6">
        {specialties && specialties.length > 0 ? (
        specialties.map((specialty, index) => {
          return <Link to = {`/specials/${specialty.slug}`} key={index} className={`rounded-md p1-3 px-4 flex gap-4  ${className}`}>
            <h2> {specialty.title} </h2>
            <span aria-hidden = "true">&rarr;</span>
            </Link>
            }
        )) : <p> No specialties available </p>}
    </div>
    
  )
}
