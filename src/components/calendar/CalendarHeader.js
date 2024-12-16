import React from 'react';
import { format } from 'date-fns';
import { ChevronLeftIcon } from './icons/ChevronLeftIcon';
import { ChevronRightIcon } from './icons/ChevronRightIcon';

export function CalendarHeader({ currentMonth, onPreviousMonth, onNextMonth }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <button
        onClick={onPreviousMonth}
        className="p-1 hover:bg-gray-100 rounded-full"
        aria-label="Previous month"
      >
        <ChevronLeftIcon />
      </button>
      <h2 className="text-lg font-semibold">
        {format(currentMonth, 'MMMM yyyy')}
      </h2>
      <button
        onClick={onNextMonth}
        className="p-1 hover:bg-gray-100 rounded-full"
        aria-label="Next month"
      >
        <ChevronRightIcon />
      </button>
    </div>
  );
}