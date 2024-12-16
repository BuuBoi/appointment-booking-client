import React from 'react';


// interface CategorySelectorProps {
//   categories: Category[];
//   selectedCategory: string;
//   selectedSubcategory: string;
//   onCategoryChange: (category: string) => void;
//   onSubcategoryChange: (subcategory: string) => void;
// }

const CategorySelector = ({
  categories,
  selectedCategory,
  onCategoryChange,
}) => {
  const selectedCategoryObj = categories.find(cat => cat.id === selectedCategory);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Product Category</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Category
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default CategorySelector;