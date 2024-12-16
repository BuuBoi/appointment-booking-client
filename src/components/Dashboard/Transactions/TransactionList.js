import React from 'react';
import { TransactionRow } from './TransactionRow';

// interface Transaction {
//   customer: {
//     name: string;
//     email: string;
//   };
//   amount: string;
// }

export const TransactionList = () => {
//   const transactions: Transaction[] = [
    const transactions = [
    {
      customer: {
        name: 'Liam Johnson',
        email: 'liam@example.com'
      },
      amount: '$250.00'
    },
    {
      customer: {
        name: 'Olivia Smith',
        email: 'olivia@example.com'
      },
      amount: '$150.00'
    }
  ];

  return (
    <div className="bg-gray-900 rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold text-white">Transactions</h2>
          <p className="text-sm text-gray-400">Recent transactions from your store.</p>
        </div>
        <button className="text-white hover:text-gray-300">View All →</button>
      </div>
      <div className="space-y-2">
        {transactions.map((transaction, index) => (
          <TransactionRow key={index} {...transaction} />
        ))}
      </div>
    </div>
  );
};