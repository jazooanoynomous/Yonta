import React from 'react';

const PopularProduct = () => (
  <div className="bg-white shadow-md rounded-lg p-4">
    <h2 className="text-gray-500 text-sm mb-2">Popular Product</h2>
    <div className="flex items-center">
      <img src="/path-to-product-image.jpg" alt="Product" className="w-16 h-16 mr-4" />
      <div>
        <h3 className="text-lg font-bold">NitroTech Whey Protein</h3>
        <p className="text-sm text-gray-400">₹ 4,299</p>
      </div>
    </div>
    <div className="mt-2">
      <p className="text-sm">38K units sold</p>
    </div>
  </div>
);

export default PopularProduct;
