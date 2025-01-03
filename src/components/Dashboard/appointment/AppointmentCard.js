import React from "react";
import { Calendar, Clock, History, User } from "lucide-react";
import { Link } from "react-router-dom";
import { getTimeElapsed, formatDate } from "../../../utils/timeUtil";

// private String id;
//       private String status;
//       private Double fee;
//       private String doctorId;
//       private String patientId;
//       private String userId;
//       private LocalDate appointmentDate;
//       private String appointmentTime;
//       private String address;
//       private LocalDateTime appointmentCreatedDate;
//       private LocalDate dob;
//       private String email;
//       private String fullName;
//       private String gender;
//       private String medicalDocument;
//       private String occupation;
//       private String phone;
//       private String reason;

const AppointmentCard = ({ appointment }) => {
  const elapsed = getTimeElapsed(appointment.appointmentCreatedDate);
  console.log(appointment);
  return (
    <div className="p-2 px-4 border-b border-2 border-gray-300 hover:bg-gray-50 transition-colors m-1 rounded-lg">
      <Link to={`view/${appointment.id}`} className="flex items-center gap-2">
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex items-center space-x-3">
            <div>
              <h3 className="font-medium text-gray-900">
                {appointment.fullName}
              </h3>
              <div className="flex items-center space-x-2">
                {/* <span className={`inline-block w-2 h-2 rounded-full ${
                type === 'Follow Up' ? 'bg-blue-400' : 'bg-green-400'
              }`}></span>
              <span className="text-sm text-gray-500">{type}</span>
              {examNumber && (
                <span className="text-sm text-gray-400">{elapsed} {examNumber}</span>
              )} */}
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
