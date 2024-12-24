import React, { useState } from 'react';
// import { Product, TabType } from './types/product';
import TabBar from './../../components/Products/Tabs/TabBar';
import ProductTable from './../../components/Products/ProductTable/ProductTable';
import ActionButton from './../../components/Products/Button/ActionButton';
import { Outlet } from 'react-router-dom';

// Sample data
const sampleProducts = [
  {
    id: '1',
    name: 'Laser Lemonade Machine',
    status: 'draft',
    price: 499.99,
    totalSales: 25,
    createdAt: '2023-07-12T10:42:00Z',
    imageUrl: '/product-1.jpg',
  },
  {
    id: '2',
    name: 'Hypernova Headphones',
    status: 'active',
    price: 129.99,
    totalSales: 100,
    createdAt: '2023-10-18T15:21:00Z',
    imageUrl: '/product-2.jpg',
  },
];

function ProductPage() {
//   const [activeTab, setActiveTab] = useState<TabType>('all');
//   const [products] = useState<Product[]>(sampleProducts);

//   const handleActionClick = (product: Product) => {
//     console.log('Action clicked for product:', product);
//   };
const [activeTab, setActiveTab] = useState('all');
  const [products] = useState(sampleProducts);

  const handleActionClick = (product) => {
    console.log('Action clicked for product:', product);
  };

  const filteredProducts = activeTab === 'all'
    ? products
    : products.filter(product => product.status === activeTab);

  return (
    
<div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
    <div className="max-w-full mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Products</h1>
        <p className="mt-2 text-sm text-gray-500">
          Manage your products and view their sales performance.
        </p>
      </div>

      <div className="mb-6 flex justify-between items-center">
        <TabBar activeTab={activeTab} onTabChange={setActiveTab} />
        
        <div className="flex space-x-4">
          <ActionButton
            label="Filter"
            onClick={() => console.log('Filter clicked')}
            icon={<span>🔍</span>}
          />
          <ActionButton
            label="Export"
            onClick={() => console.log('Export clicked')}
            icon={<span>📤</span>}
          />
          <ActionButton
            label="Add Product"
            onClick={() => console.log('Add Product clicked')}
            variant="primary"
            icon={<span>+</span>}
          />
        </div>
      </div>

      <ProductTable
        products={filteredProducts}
        onActionClick={handleActionClick}
      />
    </div>
  </div>
  );
}

export default ProductPage;