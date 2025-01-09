import React,{useState} from 'react'
import  DoctorCard  from './DoctorCard';


export default function DoctorList({doctors}) {
  const [selectedId, setSelectedId] = useState(null);
  const handleSelect = (id) => {
    setSelectedId(id);
  }
    return (
          <div className="w-full h-full bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-[550px] overflow-y-auto custom-scrollbar mt-5">
              {doctors.map((doctor, index) => (
                <div key={index} onClick={() => {handleSelect(doctor.id)}}>
                  <DoctorCard
                  doctor={doctor}
                  isActive={selectedId === doctor.id}
                />
                </div>
              ))}
            </div>
          </div>

      
      );
}