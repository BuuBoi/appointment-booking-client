import React from 'react';
import { ChevronDown } from 'lucide-react';

// interface ProductStatusProps {
//   status: string;
//   onStatusChange: (status: string) => void;
// }

export const ProductStatus= ({
  status,
  onStatusChange,
}) => {
  return (
    <div className=" rounded-lg p-6 bg-black">
      <h2 className="text-xl font-semibold text-white mb-4">Product Status</h2>
      
      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-200">
          Status
        </label>
        <div className="relative">
          <select
            value={status}
            onChange={(e) => onStatusChange(e.target.value)}
            className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white appearance-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select status</option>
            <option value="draft">Draft</option>
            <option value="published">Published</option>
            <option value="archived">Archived</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}