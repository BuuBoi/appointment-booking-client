import React from 'react';

// interface TransactionRowProps {
//   customer: {
//     name: string;
//     email: string;
//   };
//   amount: string;
// }

export const TransactionRow = ({ customer, amount }) => {
  return (
    <div className="flex justify-between items-center py-3 border-b border-gray-800">
      <div className="space-y-1">
        <p className="text-white">{customer.name}</p>
        <p className="text-sm text-gray-400">{customer.email}</p>
      </div>
      <span className="text-white">{amount}</span>
    </div>
  );
};