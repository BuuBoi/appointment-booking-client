import React from 'react';
import { StatsGrid } from './Stats/StatsGrid';
import { TransactionList } from './Transactions/TransactionList';
import { RecentSales } from './Recent/RecentSales';

export const Dashboard= () => {
  return (
    <div className="min-h-screen p-10 w-full">
      <div className=" mx-auto space-y-6">
        <StatsGrid />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <TransactionList />
          <RecentSales />
        </div>
      </div>
    </div>
  );
};