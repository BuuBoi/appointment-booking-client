import React from 'react';
import { useUserProfile } from "../../context/userProfileContext";
import { StatCard } from "./Stats/StatCard";
import { Calendar, ListOrdered, Mail, User, User2Icon } from 'lucide-react';

export default function DashBoardDoctor() {
  const {userProfile} = useUserProfile();
  const statsData = [
    {
      title: 'Patients',
      count: 10,
      unit: '+',
      detailLink: '/dashboard/doctoc/patients',
      icon: <User2Icon />
    },
    {
      title: 'Appointments',
      count: 10,
      unit: '+180.1%',
      detailLink: '/dashboard/doctoc/appointments',
      icon: <Calendar />
    },
    {
      title: 'Services',
      count: 10,
      unit: '+180.1%',
      detailLink: 'last month',
      icon: <ListOrdered />
    },
    {
        title: 'Inboxs',
        count: 10,
        unit: '+180.1%',
        detailLink: '/dashboard/doctoc/inboxs',
        icon: <Mail />
      }
  ];
    return (
      <div className="min-h-screen p-6 w-full">
        <p>The User Role is {userProfile?.role}</p>
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
