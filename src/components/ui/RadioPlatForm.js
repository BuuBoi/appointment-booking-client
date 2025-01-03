import React from 'react';
import  RadioOption  from './RadioOption';

export default function PlatformRadio({ value, onChange, platforms }) {
  return (
    <div className="flex justify-evenly space-y-1 bg-white rounded-lg border border-gray-200 p-1">
      {platforms.map((platform) => (
        <RadioOption
          key={platform.id}
          platform={platform}
          isSelected={value === platform.id}
          onSelect={onChange}
        />
      ))}
    </div>
  );
}