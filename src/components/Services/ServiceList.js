import React from 'react'
import ServiceCard from './ServiceCard'

export default function ServiceList({services}) {
  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-col-1 gap-6">
        {
          services && services.length > 0 ? (
        services.map((service, index) => {
          return <ServiceCard key={index} service = {service} />
        })) : <p> No services available </p>
        }
    </div>
  )
}
