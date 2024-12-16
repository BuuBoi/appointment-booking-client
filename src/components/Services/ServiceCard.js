import React from "react";
import { Link } from "react-router-dom";

export default function ServiceCard({ service }) {
  return (
    <Link
      to={`/services/${service.slug}`}	
      className="rounded-md bg-white hover:bg-gray-100 shadow-md hover:shadow-lg transition duration-300 flex gap-4 p-4"
      style={{ maxWidth: "700px", margin: "0 auto", textDecoration: 'none' }}
    >
      {/* Image */}
      <img
        src={service.image}
        alt={service.title}
        className="rounded-md object-cover"
        style={{ width: "90px", height: "120px" }}
      />

      {/* Content */}
      <div className="flex flex-col gap-2 justify-center ">
        <h2 className="text-sm font-semibold text-gray-800">{service.title}</h2>
        <p className="text-xs text-gray-600">936 Doctors Available</p>
      </div>
    </Link>
  );
}
