import React from 'react';
import { format, isSameDay, isToday, startOfMonth, getDay } from 'date-fns';
import clsx from 'clsx';

export function CalendarGrid({ daysInMonth, selectedDate, onDateClick }) {
  const firstDayOfMonth = startOfMonth(daysInMonth[0]);
  const startingDayIndex = getDay(firstDayOfMonth);

  return (
    <div className="grid grid-cols-7 gap-1">
      {Array.from({ length: startingDayIndex }).map((_, index) => (
        <div key={`empty-${index}`} />
      ))}
      
      {daysInMonth.map((date) => (
        <button
          key={date.toString()}
          onClick={() => onDateClick(date)}
          className={clsx(
            'h-8 w-8 rounded-full flex items-center justify-center text-sm',
            'hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500',
            {
              'bg-black text-white hover:bg-gray-800': selectedDate && isSameDay(date, selectedDate),
              'text-blue-600 font-semibold': isToday(date) && (!selectedDate || !isSameDay(date, selectedDate)),
            }
          )}
        >
          {format(date, 'd')}
        </button>
      ))}
    </div>
  );
}