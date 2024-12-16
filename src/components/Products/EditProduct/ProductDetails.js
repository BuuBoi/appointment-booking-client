import React from 'react';

// interface ProductDetailsProps {
//   name: string;
//   description: string;
//   onNameChange: (name: string) => void;
//   onDescriptionChange: (description: string) => void;
// }

export const ProductDetails = ({
  name,
  description,
  onNameChange,
  onDescriptionChange,
}) => {
  return (
    <div className="bg-black rounded-lg p-6">
      <h2 className="text-xl font-semibold text-white mb-4">Product Details</h2>
      <p className="text-gray-400 text-sm mb-6">
        Lipsum dolor sit amet, consectetur adipiscing elit
      </p>
      
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
            className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter product name"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-200 mb-2">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => onDescriptionChange(e.target.value)}
            rows={4}
            className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            placeholder="Enter product description"
          />
        </div>
      </div>
    </div>
  );
}