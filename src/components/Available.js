import React from "react";
import { useState, useEffect } from "react";
import { Calendar } from "./calendar/Calendar";
import { format } from "date-fns";
import { sortTimeStrings, formatDate } from "../utils/timeUtil";
import FixedBookButton from "./FixedBookButton";
import toast from "react-hot-toast";

export default function Available({ doctor, onClickBooking }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const getDayName = () => {
    const daysOfWeek = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ];
    const dayNumber = selectedDate.getDay();
    const today = daysOfWeek[dayNumber];
    return today;
  };
  console.log(selectedDate)
  // Giới hạn khoảng thời gian đặt lịch
  const today = new Date();

  const maxDate = new Date();
  maxDate.setDate(today.getDate() + 30);

 
  const isDateValid = (date) => {
    // Loại bỏ thời gian, chỉ giữ lại phần ngày
    const todayDate = new Date(today.setHours(0, 0, 0, 0));
    const selectedDate1 = new Date(date.setHours(0, 0, 0, 0));
  
    return selectedDate1 >= todayDate && selectedDate1 <= maxDate;
  };

  // Hàm xử lý khi chọn ngày
  const handleDateSelect = (date) => {
    if (isDateValid(date)) {
      setSelectedDate(date);
    } else {
      toast.error("Please select a valid date");
    }
  };

  useEffect(() => {
    // Khi selectedDate thay đổi, đặt lại selectedTime
    setSelectedTime("");
  }, [selectedDate]);
  const timeStamp = doctor.weeklyAvailables[getDayName()] || [];
  const sortedTimeStamp = sortTimeStrings(timeStamp);
  return (
    <div>
      <h2 className="font-bold text-xl text-blue-800 uppercase">
        Select a Date and Time
      </h2>
      <div className="grid grid-cols-2 pt-5">
        <div className="sm:col-span-1 col-span-full">
          <Calendar
            selectedDate={selectedDate}
            onDateSelect={handleDateSelect}
            minDate={today}
            maxDate={maxDate}
          />
        </div>
        <div className="sm:col-span-1 col-span-full">
          <div className="px-4">
            {selectedDate && (
              <h2 className="p-2 text-center font-bold text-blue-500 border-blue-600 border-2">
                {format(selectedDate, "EEEE, dd/MM/yyyy")}
              </h2>
            )}
          </div>
          <div className="py-3 pt-4 grid grid-cols-4 gap-1 gap-y-2 ">
            {sortedTimeStamp.slice(0, 21).map((item, index) => {
              return (
                <button
                  key={index}
                  className={
                    selectedTime === item
                      ? "bg-yellow-300 border-2 border-gray-300 pl-1 rounded-lg"
                      : "border-2 border-gray-200 pl-1 bg-blue-600 rounded-lg py-1 px-1 text-center text-xl"
                  }
                  onClick={() => setSelectedTime(item)}
                >
                  {item}
                </button>
              );
            })}
            {/* <button className="bg-blue-900 border-2 border-gray-300 pl-1 rounded-lg">
              More <span aria-hidden="true">&rarr;</span>
            </button> */}
          </div>
        </div>
      </div>
      {selectedTime && selectedDate && (
        <FixedBookButton
          price={doctor.price}
          date={selectedDate}
          time={selectedTime}
          onClickBooking={onClickBooking}
        />
      )}
    </div>
    // calender
    //available
  );
}
