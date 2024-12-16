import React from 'react';

const WEEKDAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

export function WeekdayHeader() {
  return (
    <div className="grid grid-cols-7 mb-2">
      {WEEKDAYS.map((day) => (
        <div
          key={day}
          className="text-center text-sm font-medium text-gray-500"
        >
          {day}
        </div>
      ))}
    </div>
  );
}