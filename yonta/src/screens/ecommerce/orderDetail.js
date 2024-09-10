import React, { useState } from "react";
import Layout from "../../Layout";
import {
  MetricCardData,
  ExpertData,
  orderData,
 
} from "../../components/Datas";
import { useNavigate } from "react-router-dom";
import {  OrderDetails } from "../../components/Tables";

import MetricCard from "../../components/metricCard";
import { useLocation } from 'react-router-dom';
import { OrderTrackingCard } from "../../components/stepAnimation";


function OrderDetail() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal

  // Function to preview payment (not directly related to modal)
 
  const location = useLocation();
  const orderData = location.state?.orderData;
  console.log('assxcvbndfg',orderData);
  
  return (
    <Layout>
    <div className="flex p-5 space-x-4">
      {/* Customer */}
      <div className="text-left">
        <h3 className="text-sm font-semibold mb-2 text-[18px] ">Customer</h3>
        <MetricCard
          title={MetricCardData[0].title}
          value={MetricCardData[0].value}
          bgColor={'bg-white'}
        />
      </div>
  
      {/* Deliver to */}
      <div className="text-left">
        <h3 className="text-sm font-semibold mb-2 text-[18px] ">Deliver to</h3>
        <MetricCard
          title={MetricCardData[1].title}
          value={MetricCardData[1].value}
          bgColor={'bg-white'}
        />
      </div>
  
      {/* Payment method */}
      <div className="text-left">
        <h3 className="text-sm font-semibold mb-2 text-[18px] ">Payment method</h3>
        <MetricCard
          title={MetricCardData[2].title}
          value={MetricCardData[2].value}
          bgColor={'bg-white'}
        />
      </div>
  
      {/* Order Date */}
      <div className="text-left">
        <h3 className="text-sm font-semibold mb-2 text-[18px] ">Order Date</h3>
        <MetricCard
          title={MetricCardData[3].title}
          value={MetricCardData[3].value}
          bgColor={'bg-white'}
        />
      </div>
    </div>
    <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="10"
        data-aos-offset="200"
        className="my-8 rounded-xl"
      >
        <div className="mt-8 w-full">
          <OrderDetails
            data={orderData}
            // functions={{
            //   preview: previewPayment,
            // }}
            // used={false}
          />
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="10"
        data-aos-offset="200"
        className="my-8 rounded-xl"
      >
        <div className="mt-8 w-full">
          <OrderTrackingCard
            data={orderData}
            // functions={{
            //   preview: previewPayment,
            // }}
            // used={false}
          />
        </div>
      </div>
  </Layout>
  
  );
}

export default OrderDetail;
