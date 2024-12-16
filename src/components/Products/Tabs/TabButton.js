import React from 'react';


// interface TabButtonProps {
//   label: string;
//   active: boolean;
//   type: TabType;
//   onClick: (type: TabType) => void;
// }

const TabButton = ({ label, active, type, onClick }) => {
  return (
    <button
      className={`px-4 py-2 text-sm font-medium ${
        active
          ? 'text-gray-900 border-b-2 border-blue-500'
          : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
      }`}
      onClick={() => onClick(type)}
    >
      {label}
    </button>
  );
};

export default TabButton;