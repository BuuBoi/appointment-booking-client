import React from 'react';
import ProductTableHeader from './ProductTableHeader';
import ProductTableRow from './ProductTableRow';

// interface ProductTableProps {
//   products: Product[];
//   onActionClick: (product: Product) => void;
// }
// export interface Product {
//     id: string;
//     name: string;
//     status: 'active' | 'draft' | 'archived';
//     price: number;
//     totalSales: number;
//     createdAt: string;
//     imageUrl: string;
//   }
  


const ProductTable = ({ products, onActionClick }) => {
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <ProductTableHeader />
              <tbody className="bg-white divide-y divide-gray-200">
                {products.map((product) => (
                  <ProductTableRow
                    key={product.id}
                    product={product}
                    onActionClick={onActionClick}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;