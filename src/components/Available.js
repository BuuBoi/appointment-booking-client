import React from "react";
import { useState } from "react";
import { Calendar } from "./calendar/Calendar";
import { format } from "date-fns";

export default function Available() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const timeStamp = [
        { time: "8:00", period: "AM" },
        { time: "8:30", period: "AM" },
        { time: "9:00", period: "AM" },
        { time: "9:30", period: "AM" },
        { time: "10:00", period: "AM" },
        { time: "10:30", period: "AM" },
        { time: "10:30", period: "AM" },
        { time: "10:30", period: "AM" },
        { time: "10:30", period: "AM" },
        { time: "10:30", period: "AM" },
      ];
  return (
    <div>
      <h2 className="font-bold text-xl text-blue-800 uppercase">Select a Date and Time</h2>
      <div className="grid grid-cols-2 pt-5">
        <div className="sm:col-span-1 col-span-full">
          <Calendar
            selectedDate={selectedDate}
            onDateSelect={setSelectedDate}
          />
        </div>
        <div className="sm:col-span-1 col-span-full">
          <div className="px-4">
          {selectedDate && <h2 className="p-2 text-center font-bold text-blue-500 border-blue-600 border-2">{format(selectedDate, 'EEEE, dd/MM/yyyy')}</h2>}
          </div>
          <div className="py-3 pt-10 grid grid-cols-4 gap-1 gap-y-3 ">
          {timeStamp.slice(0, 7).map((item, index) => { // shifts duoc tra ve tu backend
            return (
              <button
                key={index}
                className="border-2 border-gray-200 pl-1 bg-blue-600 rounded-lg py-1 px-1 text-center text-sm"
              >
                {item.time} {item.period}
              </button>
            );
          })}
          <button
            className="bg-blue-900 border-2 border-gray-300 pl-1 rounded-lg"
          >
            More <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
        </div>
      </div>
    </div>
    // calender
    //available
  );
}
