import React, { useState } from 'react';
import { ChevronDownIcon } from 'lucide-react';

export default function BestSellingProducts({ products, categories }) {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-[670px] max-w-md">
    <div className="flex justify-between items-center mb-6">
      {/* Orders Heading */}
      <h2 className="text-xl font-semibold text-blacktext">Best selling</h2>
  
      {/* Category Heading and Selection */}
      <div className="flex items-center">
        <span className="text-sm font-medium text-gray-700 mr-2">Categories:</span>
        <div className="relative bg-backgroundgray rounded-[10px] px-1">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="appearance-none bg-transparent  pr-6 py-1 text-greytext focus:outline-none"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <ChevronDownIcon
            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-greytext"
            size={20}
          />
        </div>
      </div>
    </div>
  
    <div className="space-y-4">
      {products.map((product, index) => (
        <div key={index} className="flex items-center space-x-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-16 h-16 bg-backgroundgray object-cover rounded-md"
          />
          <div className="flex-1">
            <h3 className="text-sm font-medium text-gray-800 leading-tight">
              {product.name}
            </h3>
            <p className="text-lg font-bold text-blue-600 mt-1">
              ₹ {product.price.toLocaleString()}
            </p>
          </div>
          <p className="text-xs text-purple-600">{product.unitsSold} units sold</p>
        </div>
      ))}
    </div>
  </div>
  

  );
}