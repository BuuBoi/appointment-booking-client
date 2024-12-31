import React from 'react';
import { StatsGrid } from './Stats/StatsGrid';
import { TransactionList } from './Transactions/TransactionList';
import { RecentSales } from './Recent/RecentSales';
import { useUserProfile } from '../../context/userProfileContext';

export const Dashboard= ({stats}) => {
  const {userProfile} = useUserProfile();
  return (
    <div className="min-h-screen p-10 w-full">
      <p>The User Role is {userProfile?.role}</p>
      <div className=" mx-auto space-y-6">
        <StatsGrid stats = {stats}/>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <TransactionList />
          <RecentSales />
        </div>
      </div>
    </div>
  );
};