import React from 'react';

// interface ActionButtonProps {
//   label: string;
//   onClick: () => void;
//   variant?: 'primary' | 'secondary';
//   icon?: React.ReactNode;
// }

const ActionButton= ({
  label,
  onClick,
  variant = 'secondary',
  icon,
}) => {
  const baseClasses = "inline-flex items-center px-4 py-2 border text-sm font-medium rounded-md";
  const variantClasses = variant === 'primary'
    ? "border-transparent text-white bg-blue-600 hover:bg-blue-700"
    : "border-gray-300 text-gray-700 bg-white hover:bg-gray-50";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${baseClasses} ${variantClasses}`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {label}
    </button>
  );
};

export default ActionButton;