import React from 'react';
import { DoctorCard } from './DoctorCard';
import { PageTitle } from './PageTitle';



export const DoctorList = ({doctors}) => {
  // This would typically come from an API call
  //      id: '1',
  //     fullName: 'Bùi Ngọc Uyên Chi',
  //     profilePicture: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=300&h=300&fit=crop',
  //     position: 'Bác sĩ chuyên khoa II',
  //     specialization: 'Gây mê hồi sức',
  //     hospitalName: 'Khoa Gây mê Phẫu thuật - Bệnh viện Đa khoa Quốc tế Vinmec Central Park'

//   {
//     "id": "cd88d6e5-518f-4946-b6e6-db8ebaa4deae",
//     "fullName": "Bac si 01",
//     "profilePicture": null,
//     "address": {
//         "province": "Da Nang",
//         "district": "Lien Chieu",
//         "ward": "Hoa Khanh Nam",
//         "details": "33 h2/16 Nam Cao"
//     },
//     "yearsOfExperience": 3,
//     "specialization": "Tai Mui Hong",
//     "hospitalName": "hahahah"
// }

  return (
    <div className="max-w-5xl mx-auto py-8 px-4">
      <PageTitle title={`Danh sách Bác sĩ: ${doctors.length}`} />
      
      <div className="mt-8 space-y-6"> 
        {doctors.map(doctor => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};