import React, {useEffect, useState} from 'react'
import { useUserProfile } from '../../context/userProfileContext'
import { useParams } from 'react-router-dom';
import { getAppointmentByPatient } from '../../services/appointment';
import { formatDate, getTimeElapsed } from '../../utils/timeUtil';
import { Calendar, CheckCheck, Clock, History, Loader, X } from 'lucide-react';

export default function ViewPatientForAdminRole() {
    const patientId = useParams().id;
    const [appointments, setAppointments] = useState([]);

      const capitalize = (str) => {
        if (!str) return "";
        return str[0].toUpperCase() + str.slice(1).toLowerCase();
      };
    useEffect(() => {
        const fetchAppointment = async () => {
            try {
                const data = await getAppointmentByPatient(patientId);
                console.log(data);
                setAppointments(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchAppointment();
    }, [patientId]);
    console.log(appointments);
  return (
    <div className="appointments-list grid grid-cols-2 gap-4">
      {appointments.length > 0 ? (
        appointments.map((appointment, index) => (
          <div key={index} className="appointment-card border border-gray-300 rounded-lg p-4">
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
                             <span className="text-xs text-gray-500">{getTimeElapsed(appointment.appointmentCreatedDate)}</span>
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
          </div>
        ))
      ) : (
        <p>Không có cuộc hẹn nào.</p>
      )}
    </div>
  );
}
