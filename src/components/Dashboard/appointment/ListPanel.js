import React from 'react'
import AppointmentCard from './AppointmentCard';


export default function ListPanel() {
    const appointments = [
        { name: 'William Larsen', time: '4:00 pm', type: 'Follow Up', examNumber: 2 },
        { name: 'Robin Smith', time: '4:30 pm', type: 'Establishing Care', examNumber: 1 },
        { name: 'Priscilla Edwards', time: '5:00 pm', type: 'Follow Up' },
        { name: 'James Wilson', time: '5:30 pm', type: 'Follow Up', examNumber: 3 },
        { name: 'Sarah Parker', time: '6:00 pm', type: 'Establishing Care', examNumber: 1 },
        { name: 'Michael Brown', time: '6:30 pm', type: 'Follow Up', examNumber: 2 },
        { name: 'Emma Davis', time: '7:00 pm', type: 'Establishing Care', examNumber: 1 },
      ];
    return (
        <div className="min-h-screen bg-gray-100  w-full">
          <div className="w-full h-full bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-4 bg-white border-b border-gray-100">
              <h2 className="text-xl font-semibold text-gray-800">Today's Appointments</h2>
              <p className="text-sm text-gray-500">7 appointments scheduled</p>
            </div>
            
            <div className="h-[500px] overflow-y-auto custom-scrollbar">
              {appointments.map((appointment, index) => (
                <AppointmentCard
                  key={index}
                  name={appointment.name}
                  time={appointment.time}
                  type={appointment.type}
                  examNumber={appointment.examNumber}
                />
              ))}
            </div>
          </div>

        </div>
      );
}
