import React from 'react';
import { formatVND, roundToHundredThousand } from '../../utils/currency';


export function PriceSlider({ value, onChange, min = 100000, max = 3000000, step = 50000 }) {
  const handleChange = (newValue) => {
    const roundedValue = roundToHundredThousand(newValue);
    onChange(roundedValue);
  };
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm text-gray-600">
        <span>{formatVND(min)}</span>
        <span>{formatVND(max)}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => handleChange(Number(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
      />
      <div className="text-center text-sm font-medium text-gray-900">
        Đã chọn: {formatVND(value)}
      </div>
    </div>
  );
}