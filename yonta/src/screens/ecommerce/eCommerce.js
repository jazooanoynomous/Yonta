import React, { useState } from "react";
import Layout from "../../Layout";
import {
  MetricCardData,
  ExpertData,
  orderData,
 
} from "../../components/Datas";
import { useNavigate } from "react-router-dom";
import BarChartC from '../../components/BarChartC'
import { ExpertTable, OrderTable } from "../../components/Tables";

import MetricCard from "../../components/metricCard";
import BestSellingProducts from "../../components/bestSellingCard";
import BuyersCard from "../../components/progressCard";

function ECommerce() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal

  // Function to preview payment (not directly related to modal)
  const previewPayment = (id) => {
    navigate(`/experts/preview/${id}`);
  };

  // Function to toggle the modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const products = [
    {
      name: "MuscleBlaze Biozyme Performance Whey, 2 kg (4.4 lb), Rich Chocolate",
      price: 4299,
      unitsSold: 3966,
      image: "/images/Rectangle 4497.png"
    },
    {
      name: "MuscleBlaze Biozyme Performance Whey, 2 kg (4.4 lb), Rich Chocolate",
      price: 4299,
      unitsSold: 3966,
      image: "/images/Rectangle 4497.png"
    },
    {
      name: "MuscleBlaze Biozyme Performance Whey, 2 kg (4.4 lb), Rich Chocolate",
      price: 4299,
      unitsSold: 3966,
      image: "/images/Rectangle 4497.png"
    },
    {
      name: "MuscleBlaze Biozyme Performance Whey, 2 kg (4.4 lb), Rich Chocolate",
      price: 4299,
      unitsSold: 3966,
      image: "/images/Rectangle 4497.png"
    },
    {
      name: "MuscleBlaze Biozyme Performance Whey, 2 kg (4.4 lb), Rich Chocolate",
      price: 4299,
      unitsSold: 3966,
      image: "/images/Rectangle 4497.png"
    },
    {
      name: "MuscleBlaze Biozyme Performance Whey, 2 kg (4.4 lb), Rich Chocolate",
      price: 4299,
      unitsSold: 3966,
      image: "/images/Rectangle 4497.png"
    },  ];
  
  const categories = ["Protein", "Vitamins", "Supplements"];

  return (
    <Layout>
     
      
      <div className="flex p-5 space-x-4">
          <MetricCard
            title={MetricCardData[0].title}
            value={MetricCardData[0].value}
            bgColor={'bg-white'}
          />
          <MetricCard
            title={MetricCardData[1].title}
            value={MetricCardData[1].value}
            bgColor={'bg-white'}
          />
          <MetricCard
            title={MetricCardData[2].title}
            value={MetricCardData[2].value}
            bgColor={'bg-white'}

          />
          <MetricCard
            title={MetricCardData[3].title}
            value={MetricCardData[3].value}
            bgColor={'bg-white'}

          />
        </div>       
        <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="10"
        data-aos-offset="200"
        className="my-8 flex rounded-xl"
      >
        <div className="mt-8 w-[150%] mr-44">
        <BarChartC/>

        </div>       
        </div>

      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="10"
        data-aos-offset="200"
        className="my-8 rounded-xl"
      >
        <div className="mt-8 w-full overflow-x-scroll">
          <OrderTable
            data={orderData}
            functions={{
              preview: previewPayment,
            }}
            used={false}
          />
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="10"
        data-aos-offset="200"
        className="my-8 flex rounded-xl"
      >
        <div className="mt-8 w-full ">
        <BestSellingProducts products={products} categories={categories} />

        </div>
        <div className="mt-8 w-full ">
        <BuyersCard />

        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="10"
        data-aos-offset="200"
        className="my-8 rounded-xl"
      >
       
      </div>


      {/* Render the modal */}
    </Layout>
  );
}

export default ECommerce;
