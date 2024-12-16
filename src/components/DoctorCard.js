import React from "react";
import { Link } from "react-router-dom";
import { Stethoscope,Video } from "lucide-react";
export default function DoctorCard({isInPerson=false, doctor}) {
    //const isInperson = false;
  const timeStamp = [
    { time: "8:00", period: "AM" },
    { time: "8:30", period: "AM" },
    { time: "9:00", period: "AM" },
    { time: "9:30", period: "AM" },
    { time: "10:00", period: "AM" },
    { time: "10:30", period: "AM" },
    { time: "10:30", period: "AM" },
    { time: "10:30", period: "AM" },
    { time: "10:30", period: "AM" },
    { time: "10:30", period: "AM" },
  ];
  return (
    <div className="border-2 border-gray-400 inline-flex flex-col bg-blue-100 rounded-lg hover:border-gray-500 duration-300 transition-all mr-1 mb-2">
      <Link to={`/doctors/${doctor.id}`} className="py-3 px-3 mb-5">
        <h2 className="font-bold text-blue-900 ">{doctor.name}</h2>
        <p className="text-sm py-3">33 Nam Cao Da Nang</p>
        <div className="flex items-center gap-4">
          <div className="relative">
            <img
              src="./doctor.jpg"
              alt="doctor"
              width={230}
              height={230}
              className="w-24 h-24 rounded-full object-cover"
            />
        {!isInPerson && (<Video color="#247bcc" strokeWidth={1.75} className="bg-gray-300 absolute top-20 left-14 w-8 h-6 rounded-lg" />)}
          </div>
          <div className="flex flex-col gap-2">
            <p className="flex items-center">
              <Stethoscope className="w-4 h-4 mr-2 flex-shrink-0" />
              <span>Familly Medicine </span>
            </p>
            <p className="py-1 px-2 mr-5 bg-green-200 uppercase">
              Available today
            </p>
          </div>
        </div>
      </Link>
      <div className="py-3 px-3 border-t-2 border-gray-400">
        <h3 className="flex gap-4 justify-between items-center">
          <span className="text-gray-600">Tue, Mar 12</span>
          <span className="font-bold">$42</span>
        </h3>
        <div className="py-3 grid grid-cols-4 gap-1 ">
          {timeStamp.slice(0, 7).map((item, index) => {
            return (
              <Link
                key={index}
                to="#"
                className="border-2 border-gray-200 pl-1 bg-blue-600 rounded-lg py-1 px-1 text-center text-sm"
              >
                {item.time} {item.period}
              </Link>
            );
          })}
          <Link
            to={`/doctors/${doctor.id}`}
            className="bg-blue-900 border-2 border-gray-300 pl-1 rounded-lg"
          >
            More <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
