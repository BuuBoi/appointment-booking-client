import React from 'react';
import { StatCard } from './StatCard';
import { DollarIcon, UsersIcon, CartIcon, ActivityIcon } from '../icons';
import { Calendar, ListOrdered, User } from 'lucide-react';

export const StatsGrid= ({stats}) => {
  const statsData = [
    {
      title: 'Doctors',
      value: stats.doctors,
      change: '+20.1%',
      timeFrame: 'last month',
      icon: <UsersIcon />
    },
    {
      title: 'Patients',
      value: stats.patients,
      change: '+180.1%',
      timeFrame: 'last month',
      icon: <UsersIcon />
    },
    {
      title: 'Appointments',
      value: stats.appointments,
      change: '+19%',
      timeFrame: 'last month',
      icon: <Calendar />
    },
    {
      title: 'Services',
      value: stats.services,
      change: '+201',
      timeFrame: 'last hour',
      icon: <ListOrdered />
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {statsData.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};