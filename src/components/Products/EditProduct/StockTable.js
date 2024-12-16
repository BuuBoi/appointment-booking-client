import React from 'react';

// interface StockItem {
//   sku: string;
//   stock: number;
//   price: number;
//   sizes: ('S' | 'M' | 'L')[];
// }

const stockData = [ //: StockItem[]
  { sku: 'GGPC-001', stock: 100, price: 99.99, sizes: ['S', 'M', 'L'] },
  { sku: 'GGPC-002', stock: 143, price: 99.99, sizes: ['S', 'M', 'L'] },
  { sku: 'GGPC-003', stock: 32, price: 99.99, sizes: ['S', 'M', 'L'] },
];

const StockTable = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Stock</h2>
        <p className="text-gray-500">Lipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 font-medium text-gray-600">SKU</th>
              <th className="text-left py-3 px-4 font-medium text-gray-600">Stock</th>
              <th className="text-left py-3 px-4 font-medium text-gray-600">Price</th>
              <th className="text-left py-3 px-4 font-medium text-gray-600">Size</th>
            </tr>
          </thead>
          <tbody>
            {stockData.map((item) => (
              <tr key={item.sku} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4 text-gray-800">{item.sku}</td>
                <td className="py-3 px-4 text-gray-800">{item.stock}</td>
                <td className="py-3 px-4 text-gray-800">${item.price.toFixed(2)}</td>
                <td className="py-3 px-4">
                  <div className="flex gap-2">
                    {item.sizes.map((size) => (
                      <span
                        key={size}
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 text-sm font-medium text-gray-600 hover:border-blue-500 hover:text-blue-500 cursor-pointer transition-colors"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <button className="mt-6 flex items-center justify-center w-full py-2 px-4 border border-gray-300 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
        Add Variant
      </button>
    </div>
  );
};

export default StockTable;