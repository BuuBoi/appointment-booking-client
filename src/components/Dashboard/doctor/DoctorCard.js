import React, { useState } from "react";
import {
  Calendar,
  CheckCheck,
  Clock,
  History,
  Loader,
  Mail,
  MapPin,
  Phone,
  User,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import { getTimeElapsed, formatDate } from "../../../utils/timeUtil";

const DoctorCard = ({ doctor, isActive }) => {
  const [selected, setSelected] = useState(false);
  const capitalize = (str) => {
    if (!str) return "";
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
  };

  console.log(doctor);
  return (
    <div
      className={
        isActive
          ? "p-2 px-4 border-2 border-blue-600 bg-green-100 transition-colors m-1 rounded-lg"
          : "p-2 px-4 border-b border-2 border-gray-300 hover:bg-gray-50 transition-colors m-1 rounded-lg"
      }
    >
      {/* <Link to={`view/${doctor.id}`} className="flex justify-between gap-2">
        <div className="flex flex-row gap-2 w-full ">
          <img
            src={doctor.profilePicture}
            alt="profile"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <div className="flex items-center space-x-3">
              <div>
                <h3 className="font-medium text-gray-900">{doctor.fullName}</h3>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center text-gray-500">
                    <Mail className="w-4 h-4 mr-1" />
                    <span className="text-sm text-gray-500">
                      {doctor.emailAddress}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center text-gray-500 font-medium mt-1">
                <User className="w-4 h-4 mr-1 text-blue-700" />
                <span className="text-xs">{capitalize(doctor.gender)}</span>
              </div>
            </div>
          </div>
          <div className="flex text-gray-800 items-center">
            <div
              className={` px-1 rounded-md ${
                doctor.active === true
                  ? "bg-green-500"
                  : "bg-red-500"  
              }`}
            >
             
               {doctor.active === true ? "Active" : "Unactive"} 
            </div>
          </div>
        </div>
      </Link> */}
      <Link to={`view/${doctor.id}`} className="block w-full">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-start gap-2">
          <img
            src={doctor.profilePicture}
            alt="profile"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <div className="flex items-center space-x-3">
              <div>
                <h3 className="font-medium text-gray-900">{doctor.fullName}</h3>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center text-gray-500">
                    <Mail className="w-4 h-4 mr-1" />
                    <span className="text-sm text-gray-500">
                      {doctor.emailAddress}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center text-gray-500 font-medium mt-1">
                <User className="w-4 h-4 mr-1 text-blue-700" />
                <span className="text-xs">{capitalize(doctor.gender)}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="ml-auto">
          <div
            className={`px-2 py-1 rounded-md text-white text-sm ${
              doctor.active ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {doctor.active ? "Active" : "Unactive"}
          </div>
        </div>
      </div>
    </Link>
    </div>
  );
};
export default DoctorCard;
