import React from "react";
import { Calendar, CheckCheck, Clock, History, Loader, X } from "lucide-react";
import { Link } from "react-router-dom";
import { getTimeElapsed, formatDate } from "../../../utils/timeUtil";

const AppointmentCard = ({ appointment, isActive }) => {
  const [selected, setSelected] = React.useState(false);
  const elapsed = getTimeElapsed(appointment.appointmentCreatedDate);
  const capitalize = (str) => {
    if (!str) return "";
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
  };
  
  console.log(appointment);
  return (
    <div className={isActive ? "p-2 px-4 border-2 border-blue-600 bg-green-100 transition-colors m-1 rounded-lg" : "p-2 px-4 border-b border-2 border-gray-300 hover:bg-gray-50 transition-colors m-1 rounded-lg"}>
      <Link to={`view/${appointment.id}`} className="flex items-center gap-2" >
        <div className="flex flex-row items-center justify-between w-full">
          <div>
          <div className="flex items-center space-x-3">
            <div>
              <h3 className="font-medium text-gray-900">
                {appointment.fullName}
              </h3>
              <div className="flex items-center space-x-2">
                <div className="flex items-center text-gray-500">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span className="text-sm text-gray-500">
                    {formatDate(new Date(appointment.appointmentDate))}
                  </span>
                </div>
                <div className="flex items-center">
                  <History className="w-4 h-4 mr-1" />
                  <span className="text-xs text-gray-500">{elapsed}</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center text-gray-900 font-medium mt-1">
              {appointment.status === "PENDING" ? (<Loader className="w-4 h-4 mr-1 text-yellow-700"/>): appointment.status === "ACCEPTED" ? (<CheckCheck className="w-4 h-4 mr-1 text-blue-700"/>): (<X className="w-4 h-4 mr-1 text-red-700"/>)}
              <span className="text-xs">{capitalize(appointment.status)}</span>
              </div>
          </div>
          </div>

          <div className="flex items-center text-gray-950">
            <Clock className="w-4 h-4 mr-1" />
            <span className="text-sm font-bold">
              {appointment.appointmentTime}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default AppointmentCard;
