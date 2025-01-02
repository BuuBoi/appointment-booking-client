import React from 'react'
import AppointmentCard from './AppointmentCard';


export default function ListPanel({appointments}) {
    return (
        <div className="min-h-screen bg-gray-100  w-full">
          <div className="w-full h-full bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-4 bg-white border-b border-gray-100">
              <h2 className="text-xl font-semibold text-gray-800">Today's Appointments</h2>
              <p className="text-sm text-gray-500">{appointments.length} appointments scheduled</p> 
            </div>
            
            <div className="h-[500px] overflow-y-auto custom-scrollbar">
              {appointments.map((appointment, index) => (
                <AppointmentCard
                  key={index}
                  appointment={appointment}
                />
              ))}
            </div>
          </div>

        </div>
      );
}
