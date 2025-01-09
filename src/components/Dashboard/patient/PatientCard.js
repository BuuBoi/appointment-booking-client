import React , {useState} from "react";
import { Calendar, CheckCheck, Clock, History, Loader, Mail, MapPin, Phone, User, X } from "lucide-react";
import { Link } from "react-router-dom";
import { getTimeElapsed, formatDate } from "../../../utils/timeUtil";

const PatientCard = ({ patient, isActive }) => {
  const [selected, setSelected] = useState(false);
  const capitalize = (str) => {
    if (!str) return "";
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
  };
  
  console.log(patient);
  return (
    <div className={isActive ? "p-2 px-4 border-2 border-blue-600 bg-green-100 transition-colors m-1 rounded-lg" : "p-2 px-4 border-b border-2 border-gray-300 hover:bg-gray-50 transition-colors m-1 rounded-lg"}>
      <Link to={`view/${patient.id}`} className="flex  gap-2" >
        <div className="flex flex-row justify-between w-full">
          <div>
          <div className="flex items-center space-x-3">
            <div>
              <h3 className="font-medium text-gray-900">
                {patient.fullName}
              </h3>
              <div className="flex items-center space-x-2">
                <div className="flex items-center text-gray-500">
                  <Mail className="w-4 h-4 mr-1" />
                  <span className="text-sm text-gray-500">
                    {patient.email}
                  </span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-1 text-gray-500" />
                  <span className="text-xs text-gray-500">{patient.phoneNumber}</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center text-gray-500 font-medium mt-1">
              <User className="w-4 h-4 mr-1 text-blue-700"/>
              <span className="text-xs">{capitalize(patient.gender)}</span>
              </div>
          </div>
          </div>

            <div className="flex text-gray-800 w-2/5">
                <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                <p className="text-sm font-semibold line-clamp-2 overflow-hidden text-ellipsis">
                 {patient.address} 
                </p>
            </div>
        </div>
      </Link>
    </div>
  );
};
export default PatientCard;
