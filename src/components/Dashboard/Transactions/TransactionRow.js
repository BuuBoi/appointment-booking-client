import React from 'react';

// interface TransactionRowProps {
//   customer: {
//     name: string;
//     email: string;
//   };
//   amount: string;
// }

export const TransactionRow = ({doctor}) => {
  
  return (
    <div className="flex justify-between items-center py-3 border-b ">
      <div className="space-y-1">
        <p className="text-black">{doctor.fullName}</p>
        <p className="text-sm text-gray-400">{doctor.email}</p>
      </div>
      {/* <span className="text-white">{amount}</span> */}
    </div>
  );
};