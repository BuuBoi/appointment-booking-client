import React from 'react';
import { DoctorCard } from './DoctorCard';
import { PageTitle } from './PageTitle';



export const DoctorList = ({doctors}) => {
  console.log(doctors);
  return (
    <div className="max-w-5xl mx-auto py-8 px-4">
      <PageTitle title={`Danh sách Bác sĩ: ${doctors?.length}`} />
      
      <div className="mt-8 space-y-6"> 
        {doctors.map(doctor => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};