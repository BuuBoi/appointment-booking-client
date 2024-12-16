import React from 'react';
import { StatCard } from './StatCard';
import { DollarIcon, UsersIcon, CartIcon, ActivityIcon } from '../icons';

export const StatsGrid= () => {
  const stats = [
    {
      title: 'Total Revenue',
      value: '$45,231.89',
      change: '+20.1%',
      timeFrame: 'last month',
      icon: <DollarIcon />
    },
    {
      title: 'Subscriptions',
      value: '+2350',
      change: '+180.1%',
      timeFrame: 'last month',
      icon: <UsersIcon />
    },
    {
      title: 'Sales',
      value: '+12,234',
      change: '+19%',
      timeFrame: 'last month',
      icon: <CartIcon />
    },
    {
      title: 'Active Now',
      value: '+573',
      change: '+201',
      timeFrame: 'last hour',
      icon: <ActivityIcon />
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};