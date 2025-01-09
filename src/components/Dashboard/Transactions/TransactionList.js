import React from 'react';
import { TransactionRow } from './TransactionRow';

// interface Transaction {
//   customer: {
//     name: string;
//     email: string;
//   };
//   amount: string;
// }

export const TransactionList = ({doctors}) => {

  return (
    <div className=" rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold text-white">Transactions</h2>
          <p className="text-sm text-gray-800">Recent transactions from your store.</p>
        </div>
        <button className="text-black hover:text-gray-300">View All →</button>
      </div>
      <div className="space-y-2">
        {doctors.map((doctor, index) => (
          <TransactionRow key={index} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};