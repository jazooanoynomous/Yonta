import React from 'react';

const OrderRow = ({ order,product }) => {
  const statusColors = {
    Processing: 'text-red-500',
    Shipping: 'text-yellow-500',
    Delivered: 'text-green-500',
  };

  return (
    <div className="grid grid-cols-9 gap-y-4 items-center bg-backgroundgray p-4 rounded-lg mb-2">
      <div className="col-span-1 text-sm">  {/* Reduced text size */}
        <p>{order.id}</p>
      </div>
      <div className="col-span-2 text-sm"> {/* Reduced text size */}
        <p className="font-medium">{order.item}</p>
      </div>
      <div className="col-span-1 text-sm">  {/* Reduced text size */}
        <p>{order.customerName}</p>
      </div>
      <div className="col-span-1 text-sm">  {/* Reduced text size */}
        <p>{order.date}</p>
      </div>
      <div className="col-span-1 text-sm">  {/* Reduced text size */}
        <p>{order.paymentInfo}</p>
      </div>
      <div className="col-span-1 text-sm">  {/* Reduced text size */}
        <p>{order.price}</p>
      </div>
      <div className="col-span-1 text-sm">  {/* Reduced text size */}
        <p>{order.commission}</p>
      </div>
      <div className={`col-span-1 font-medium text-sm ${statusColors[order.status]}`}>  {/* Reduced text size */}
        {order.status}
      </div>
    </div>
  );
};

export default OrderRow;
