import React from 'react';

// interface StatCardProps {
//     title: string;
//     value: string;
//     change: string;
//     timeFrame: string;
//     icon?: React.ReactNode;
//   }

export const StatCard = ({ 
  title, 
  value, 
  change, 
  timeFrame,
  icon 
}) => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg">
      <div className="flex justify-between items-start mb-4">
        <span className="text-gray-400 text-sm">{title}</span>
        {icon}
      </div>
      <div className="space-y-1">
        <h3 className="text-2xl font-bold text-white">{value}</h3>
        <p className="text-sm text-gray-400">
          {change} from {timeFrame}
        </p>
      </div>
    </div>
  );
};