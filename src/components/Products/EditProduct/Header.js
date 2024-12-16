import React from 'react';
import { ArrowLeft } from 'lucide-react';

// interface HeaderProps {
//   title: string;
//   inStock?: boolean;
//   onBack?: () => void;
// }

export const Header = ({ title, inStock, onBack }) => {
  return (
    <div className="flex items-center justify-between w-full p-4 bg-black">
      <div className="flex items-center gap-4">
        <button 
          onClick={onBack}
          className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>
        <h1 className="text-xl font-semibold text-white">{title}</h1>
        {inStock && (
          <span className="px-3 py-1 text-sm bg-gray-800 text-gray-200 rounded-full">
            In stock
          </span>
        )}
      </div>
      <div className="flex gap-3">
        <button className="px-4 py-2 text-white hover:bg-gray-800 rounded-lg transition-colors">
          Discard
        </button>
        <button className="px-2 py-2 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors">
          Save Product
        </button>
      </div>
    </div>
  );
}