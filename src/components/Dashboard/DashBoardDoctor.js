import React, { useEffect, useState } from 'react';
import { useUserProfile } from "../../context/userProfileContext";
import { StatCard } from "./Stats/StatCard";
import { Calendar, ListOrdered, Mail, User, User2Icon } from 'lucide-react';
import { getMyPatient } from '../../services/doctorProfile';
import { getAppointmentByDoctorId } from '../../services/appointment';

export default function DashBoardDoctor() {
  const {userProfile} = useUserProfile();
  const [statsData, setStatsData] = useState([
    {
      title: 'Patients',
      count: 0,
      unit: '+',
      detailLink: '/dashboard/doctoc/patients',
      icon: <User2Icon />
    },
    {
      title: 'Appointments',
      count: 0,
      unit: '+180.1%',
      detailLink: '/dashboard/doctoc/appointments',
      icon: <Calendar />
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const [patientData, appointmentData] = await Promise.all([
          getMyPatient(userProfile.id),
          getAppointmentByDoctorId(userProfile.id)
        ]);
        setStatsData((prevStats) => [
          { ...prevStats[0], count: patientData.length },
          { ...prevStats[1], count: appointmentData.length },
        ]);
       }catch (error) {
        console.log(error);
      }
    } 
    if (userProfile?.id) {
      fetchData();
    }
  }, [userProfile?.id]);
    return (
      <div className="min-h-screen p-6 w-full">
        <p className='font-medium text-xl text-blue-500'>welcome {userProfile?.fullName}</p>
        <div className=" mx-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {statsData.map((stat, index) => (
                  <StatCard key={index} data={stat} />
                ))}
              </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  
            {/* <TransactionList />
            <RecentSales /> */}
          </div>
        </div>
      </div>
    );
}
