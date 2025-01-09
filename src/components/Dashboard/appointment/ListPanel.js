import React from 'react'
import AppointmentCard from './AppointmentCard';


export default function ListPanel({appointments}) {
  const [selectedId, setSelectedId] = React.useState(null);
  const handleSelect = (id) => {
    setSelectedId(id);
  }
    return (
          <div className="w-full h-full bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-[500px] overflow-y-auto custom-scrollbar mt-5">
              {appointments.map((appointment, index) => (
                <div key={index} onClick={() => {handleSelect(appointment.id)}}>
                  <AppointmentCard
                  appointment={appointment}
                  isActive={selectedId === appointment.id}
                />
                </div>
              ))}
            </div>
          </div>

      
      );
}
