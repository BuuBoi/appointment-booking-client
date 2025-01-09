import React from 'react';
import { Link } from 'react-router-dom';

export const StatCard = ({ data }) => {
  console.log("Data stat card: ",data);
  // {
  //   title: 'Services',
  //   count: 10,
  //   unit: '+180.1%',
  //   detailLink: 'last month',
  //   icon: <ListOrdered />
  // },
  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <div className="flex justify-between items-start mb-4">
        <span className="text-gray-900 text-sm">{data?.title}</span>
        {data?.icon}
      </div>
      <div className="space-y-1">
        <h3 className="text-2xl font-bold text-gray-900 ">{data?.count} </h3>
        <Link to={data?.href} className="text-sm text-gray-900 ">
          View details
        </Link>
      </div>
    </div>
  );
};