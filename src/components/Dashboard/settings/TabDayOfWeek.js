import React from 'react'
import { Tabs } from "flowbite-react"; // Đảm bảo đúng thư viện

 export default function TabDayOfWeek({ activeDay, onDayChange }){
    const days = [
      { key: 'monday', label: 'Thứ 2' },
      { key: 'tuesday', label: 'Thứ 3' },
      { key: 'wednesday', label: 'Thứ 4' },
      { key: 'thursday', label: 'Thứ 5' },
      { key: 'friday', label: 'Thứ 6' },
      { key: 'saturday', label: 'Thứ 7' },
      { key: 'sunday', label: 'Chủ nhật' },
    ];
  
    return (
      <div className="flex space-x-2">
        {days.map((day) => (
          <button
            key={day.key}
            className={`px-4 py-2 rounded ${
              activeDay === day.key 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-200'
            }`}
            onClick={() => onDayChange(day.key)}
          >
            {day.label}
          </button>
        ))}
      </div>
    );
  };
