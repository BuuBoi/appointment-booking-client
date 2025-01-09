import React from 'react';

export const PageTitle = ({ title }) => {
  return (
    <div className="border-b-4 border-emerald-500 w-fit">
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
    </div>
  );
};