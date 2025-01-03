import React from "react";
import { format, parseISO } from "date-fns";
import { Calendar1, Clock, User, UserCircle } from "lucide-react";
import UpdateAppointmentForm from "./UpdateAppointmentForm";

const AppointmentDetails = ({ appointment }) => {
  return (
    <div className="p-2 bg-gray-100 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-2">
        <div className="flex text-xl font-bold items-center">
          <UserCircle className="w-6 h-6 mr-2" />
          <p className="text-xl font-bold">{appointment.fullName}</p>
        </div>
        <div className="text-base font-bold">
          <div className="flex items-center space-x-2">
            <Calendar1 className="w-5 h-5 mr" />
            <p className="text-gray-700">
              {appointment?.appointmentDate}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-5 h-5 mr" />
            <p className="text-gray-700">{appointment.appointmentTime}</p>
          </div>
        </div>
      </div>
      <hr className="my-4 border-gray-300" />
      <div className="space-y-2 text-sm font-normal text-gray-700 mt-4">
        <p>
          <strong>Gender: </strong> {appointment.gender}
        </p>
        <p>
          <strong>Phone: </strong> {appointment.phone}
        </p>
        <p>
          <strong>Job: </strong> {appointment.occupation}
        </p>
        <p>
          <strong>Reason:</strong> {appointment.reason}
        </p>
        <p>
          <strong>Date of Birth:</strong> {appointment.dob}
        </p>
        <p>
          <strong>Email:</strong> {appointment.email}
        </p>
        <p>
          <strong>Location:</strong> {appointment.address}
        </p>
      </div>

      <div className="mt-2 flex">
        <p className="text-gray-700 text-sm font-normal mb-2"> <strong>History medical:</strong></p>
        {appointment.medicalDocument ? (
          <p className="ml-2 mb-2 text-sm text-gray-600">
            <a
              href={appointment.medicalDocument}
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              View Uploaded File
            </a>
          </p>
        ) : (
          <p className="text-sm text-gray-500">No medical document uploaded</p>
        )}
      </div>
      <UpdateAppointmentForm appointment={appointment}/>
    </div>
  );
};

export default AppointmentDetails;
