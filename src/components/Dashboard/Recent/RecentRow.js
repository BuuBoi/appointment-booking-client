import React from 'react';

// interface SaleRowProps {
//   customer: {
//     name: string;
//     email: string;
//     avatar: string;
//   };
//   amount: string;
// }

// export const SaleRow: React.FC<SaleRowProps> = ({ customer, amount }) => {
export const RecentRow = ({ customer, amount }) => {
  return (
    <div className="flex items-center justify-between py-3">
      <div className="flex items-center space-x-3">
        <img 
          src={customer.avatar} 
          alt={customer.name}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="text-white">{customer.name}</p>
          <p className="text-sm text-gray-400">{customer.email}</p>
        </div>
      </div>
      <span className="text-white font-medium">{amount}</span>
    </div>
  );
};