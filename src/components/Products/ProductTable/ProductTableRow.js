import React from 'react';
import { formatDate } from './../utils/dateUtils';
import { formatPrice } from './../utils/priceUtils';

// interface ProductTableRowProps {
//   product: Product;
//   onActionClick: (product: Product) => void;
// }

const ProductTableRow = ({ product, onActionClick }) => {
  return (
    <tr className="hover:bg-gray-50">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="h-10 w-10 flex-shrink-0">
            <img className="h-10 w-10 rounded-full" src={product.imageUrl} alt="" />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{product.name}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
          ${product.status === 'active' ? 'bg-green-100 text-green-800' : 
            product.status === 'draft' ? 'bg-gray-100 text-gray-800' : 
            'bg-red-100 text-red-800'}`}>
          {product.status}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {formatPrice(product.price)}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {product.totalSales}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {formatDate(product.createdAt)}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <button
          onClick={() => onActionClick(product)}
          className="text-gray-400 hover:text-gray-900"
        >
          ...
        </button>
      </td>
    </tr>
  );
};

export default ProductTableRow;