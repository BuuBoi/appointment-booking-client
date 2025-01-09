import React,{useState} from 'react'
import PatientCard from './PatientCard';


export default function PatientList({patients}) {
  const [selectedId, setSelectedId] = useState(null);
  const handleSelect = (id) => {
    setSelectedId(id);
  }
    return (
          <div className="w-full h-full bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-[500px] overflow-y-auto custom-scrollbar mt-5">
              {patients.map((patient, index) => (
                <div key={index} onClick={() => {handleSelect(patient.id)}}>
                  <PatientCard
                  patient={patient}
                  isActive={selectedId === patient.id}
                />
                </div>
              ))}
            </div>
          </div>

      
      );
}