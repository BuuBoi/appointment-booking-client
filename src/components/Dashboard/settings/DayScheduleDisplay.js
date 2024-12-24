import React from 'react'
import getDayLabel from './../../utils/getDayLabel';

export default function DayScheduleDisplay({slots, day, onUpdateSlots }) {
  const defaultSystemSlots = [
    "07:00", "07:30", "08:00", "08:30", "09:00", "09:30",
    "10:00", "10:30", "11:00", "11:30", "12:00", "12:30",
    "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
    "16:00", "16:30", "17:00", "17:30"
  ];

  // Thêm slot vào danh sách đã chọn
  const handleAddSlot = (slot) => {
    if (!slots.includes(slot)) {
      const newSlots = [...slots, slot].sort();
      onUpdateSlots(day, newSlots);
    }
  };

  // Xóa slot khỏi danh sách đã chọn
  const handleRemoveSlot = (slot) => {
    const newSlots = slots.filter(s => s !== slot);
    onUpdateSlots(day, newSlots);
  };
  console.log("trong display component",day);
  console.log(slots);
    return (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-4">
            Lịch khám {getDayLabel(day)}
          </h3>
          <div className="grid grid-cols-2 gap-8">
        {/* Cột trái: Slots mặc định */}
        <div>
          <h4 className="font-medium mb-3">Khung giờ mặc định</h4>
          <div className="grid grid-cols-3 gap-2">
            {defaultSystemSlots.map((slot) => (
              <button
                key={slot}
                onClick={() => handleAddSlot(slot)}
                className={`p-2 text-sm rounded
                  ${slots.includes(slot) 
                    ? 'bg-gray-200 cursor-not-allowed'
                    : 'bg-blue-50 hover:bg-blue-100'
                  }`}
                disabled={slots.includes(slot)}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>

        {/* Cột phải: Slots đã chọn */}
        <div>
          <h4 className="font-medium mb-3">Khung giờ đã chọn</h4>
          <div className="grid grid-cols-3 gap-2">
            {slots.map((slot) => (
              <div
                key={slot}
                className="relative group"
              >
                <button
                  className="w-full p-2 text-sm bg-green-50 rounded group-hover:bg-green-100"
                >
                  {slot}
                </button>
                <button
                  onClick={() => handleRemoveSlot(slot)}
                  className="absolute -top-2 -right-2 hidden group-hover:block
                    bg-red-500 text-white rounded-full w-5 h-5 text-xs"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

        </div>
      );
}
