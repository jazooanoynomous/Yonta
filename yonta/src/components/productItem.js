import React from "react";

const ProductItem = ({ item }) => {
  return (
    <div className="flex justify-between p-4 border-b">
      <div className="w-1/4 flex items-center">
        <img src={item.image} alt={item.name} className="h-20 w-20" />
        <div className="ml-4">
          <h3 className="font-bold">{item.name}</h3>
          <p>{item.weight}</p>
        </div>
      </div>
      <div className="w-1/4 flex items-center">{item.flavour}</div>
      <div className="w-1/4 flex items-center">{item.expiryDate}</div>
      <div className="w-1/4 flex items-center justify-end">
        <p className="line-through text-gray-500 mr-4">{item.mrp}</p>
        <p className="text-red-500">{item.price}</p>
      </div>
    </div>
  );
};

export default ProductItem;
