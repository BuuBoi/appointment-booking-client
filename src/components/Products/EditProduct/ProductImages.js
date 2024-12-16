import React from 'react';
import { Upload, X } from 'lucide-react';

// interface ProductImagesProps {
//   images: string[];
//   onImageUpload: (file: File) => void;
//   onImageRemove: (index: number) => void;
// }

export const ProductImages = ({
  images,
  onImageUpload,
  onImageRemove,
}) => {
  return (
    <div className=" rounded-lg p-6 bg-black">
      <h2 className="text-xl font-semibold text-white mb-2">Product Images</h2>
      <p className="text-gray-400 text-sm mb-6">
        Lipsum dolor sit amet, consectetur adipiscing elit
      </p>

      <div className="grid grid-cols-2 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative group">
            <img
              src={image}
              alt={`Product ${index + 1}`}
              className="w-full h-48 object-cover rounded-lg"
            />
            <button
              onClick={() => onImageRemove(index)}
              className="absolute top-2 right-2 p-1 bg-black bg-opacity-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <X className="w-4 h-4 text-white" />
            </button>
          </div>
        ))}
        
        <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-700 rounded-lg cursor-pointer hover:border-gray-500 transition-colors">
          <Upload className="w-8 h-8 text-gray-400 mb-2" />
          <span className="text-sm text-gray-400">Upload Image</span>
          <input
            type="file"
            className="hidden"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) onImageUpload(file);
            }}
          />
        </label>
      </div>
    </div>
  );
}