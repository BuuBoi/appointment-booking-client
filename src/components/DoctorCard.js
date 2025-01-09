import React from "react";
import { Link } from "react-router-dom";
import { Stethoscope, Video } from "lucide-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { sortTimeStrings, formatDate } from "../utils/timeUtil";
import { formatVND } from "../utils/currency";
import generateSlug from "../utils/generateSlug";
import { sl } from "date-fns/locale/sl";
export default function DoctorCard({ isInPerson = false, doctor }) {
  const defaultweeklyData = {
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: [],
  };
  const slug = generateSlug(doctor.fullName);

  const getDayName = () => {
    const daysOfWeek = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ];
    const today = new Date();
    const dayName = daysOfWeek[today.getDay()];
    return dayName;
  };

  const today = getDayName();
  const timeStamp = doctor.weeklyAvailables[today]||[];


  const sortedTimeStamp = sortTimeStrings(timeStamp);

  const address = doctor.address;
  const formatAddress = address
    ? `${address.details}-${address.ward}-${address.district}-${address.province}`
    : "Địa chỉ chưa cập nhật";
  return (
    <>
      {timeStamp.length > 0 && <div className="border-2 border-gray-400 inline-flex flex-col bg-blue-100 rounded-lg hover:border-gray-500 duration-300 transition-all mr-1 mb-2 h-full">
      <Link to={`/doctors/${doctor.id}`} className="py-3 px-3 flex-1 flex flex-col">
        <h2 className="font-bold text-blue-900 uppercase ">
          {doctor.fullName}
        </h2>
        <p className="text-sm py-3 line-clamp-2 ">{formatAddress}</p>
        <div className="flex items-center gap-4 mt-auto">
          <div className="relative flex-shrink-0">
            <img
              src={doctor?.profilePicture|| 'https://via.placeholder.com/150'}
              alt="doctor"
              width={240}
              height={210}
              className="w-24 h-24 rounded-full object-cover"
            />
            {!isInPerson && (
              <Video
                color="#247bcc"
                strokeWidth={1.75}
                className="bg-gray-300 absolute top-20 left-14 w-8 h-6 rounded-lg"
              />
            )}
          </div>
          <div className="flex flex-col gap-2">
            <p className="flex items-center">
              <Stethoscope className="w-4 h-4 mr-2 flex-shrink-0" />
              <span>Familly Medicine </span>
            </p>
            <p className="py-0.5 px-1.5 mr-5 bg-green-200 uppercase text-xs rounded-full">
              Available today
            </p>
          </div>
        </div>
      </Link>
      <div className="py-3 px-3 border-t-2 border-gray-400">
        <h3 className="flex gap-4 justify-between items-center">
          <span className="text-gray-600">{formatDate()}</span>
          <span className="font-bold">{formatVND(doctor.price)}</span>
        </h3>
        <div className="grid grid-cols-4 gap-2 items-center">
          {sortedTimeStamp.slice(0, 7).map((item, index) => (
            <Link
              key={index}
              to="#"
              className="flex items-center justify-center px-3 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors duration-200 shadow-sm"
            >
              {item}
            </Link>
          ))}
          <Link
            to={`/doctors/${doctor.id}`}
            className="flex items-center justify-center px-3 py-2 bg-blue-900 text-white text-sm font-medium rounded-md hover:bg-blue-800 transition-colors duration-200 shadow-sm"
          >
            More <span aria-hidden="true" className="ml-1">→</span>
          </Link>
        </div>
      </div>
    </div>}
    </>
  );
}
