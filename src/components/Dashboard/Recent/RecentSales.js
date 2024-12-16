import React from 'react';
import {RecentRow} from './RecentRow';

export const RecentSales = () => {
  const recentSales = [
    {
      customer: {
        name: 'Olivia Martin',
        email: 'olivia.martin@email.com',
        avatar: '/avatars/olivia.jpg'
      },
      amount: '+$1,999.00'
    },
    {
      customer: {
        name: 'Jackson Lee',
        email: 'jackson.lee@email.com',
        avatar: '/doctor.jpg'
      },
      amount: '+$39.00'
    },
    {
      customer: {
        name: 'Isabella Nguyen',
        email: 'isabella.nguyen@email.com',
        avatar: '/avatars/isabella.jpg'
      },
      amount: '+$299.00'
    }
  ];

  return (
    <div className="bg-gray-900 rounded-lg p-6">
      <h2 className="text-xl font-semibold text-white mb-6">Recent Sales</h2>
      <div className="space-y-4">
        {recentSales.map((sale, index) => (
          <RecentRow key={index} {...sale} />
        ))}
      </div>
    </div>
  );
};