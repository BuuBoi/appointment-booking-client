import React from "react";
import { Link } from "react-router-dom";

export default function ServiceCard({ service }) {
  console.log(service); 
  return (
    <Link
      to={`/services/${service.slug}`}	
      className="rounded-md bg-slate-100 hover:bg-gray-200 duration-300 flex items-center gap-4 p-2 overflow-hidden shadow-md"
      // style={{ maxWidth: "700px", margin: "0 auto", textDecoration: 'none' }}
    >
      {/* Image */}
      <img
        src={service.imageUrl}
        alt={service.title}
        width={1170}
        height	={848}
        className="w-1/3 object-contain aspect-video"
        style={{ width: "90px", height: "120px" }}
      />

      {/* Content */}
      <div className="flex flex-col w-2/3 py-4 ">
        <h2 className="text-sm font-semibold text-gray-800">{service.title}</h2>
        <p className="text-[0.6rem]">936 Doctors Available</p>
      </div>
    </Link>
  );
}
