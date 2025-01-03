import React from 'react';




export default function RadioOption({ platform, isSelected, onSelect }) {
  return (
    <label className="flex items-center p-1 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
      <input
        type="radio"
        name="platform"
        value={platform.id}
        checked={isSelected}
        onChange={() => onSelect(platform.id)}
        className="w-3 h-3 text-blue-500 border-gray-300 focus:ring-blue-500"
      />
      <div className="flex items-center ml-3">
        <span className="mr-2">{platform.icon}</span>
        <span className="text-gray-700 font-medium text-sm">{platform.name}</span>
      </div>
    </label>
  );
}