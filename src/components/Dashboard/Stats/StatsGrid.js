import React from 'react';
import { StatCard } from './StatCard';
import { DollarIcon, UsersIcon, CartIcon, ActivityIcon } from '../icons';
import { Calendar, ListOrdered, User } from 'lucide-react';

export const StatsGrid= ({stats}) => {
  const statsData = [
    {
      title: 'Doctors',
      count: stats.doctors,
      icon: <UsersIcon />,
      href: '/dashboard/admin/doctors'
    },
    // {
    //   title: 'Patients',
    //   value: stats.patients,
    //   change: '+180.1%',
    //   timeFrame: 'last month',
    //   icon: <UsersIcon />
    // },
    {
      title: 'Appointments',
      count: stats.appointments,
      icon: <Calendar />,
      href: '/dashboard/admin/appointments'
    },
    {
      title: 'Services',
      count: stats.services,
      icon: <ListOrdered />,
      href: '/dashboard/admin/services'
    },
    {
      title: 'Special',
      count: stats.specials,
      icon: <ListOrdered />,
      href: '/dashboard/admin/specials'
    }

  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {statsData.map((stat, index) => (
        <StatCard key={index} data={stat} />
      ))}
    </div>
  );
};