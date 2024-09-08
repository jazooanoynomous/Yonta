import React, { useState } from "react";
import Layout from "../../Layout";
import {
  appointmentsData,
  expertsTypeData,
  memberData,
  MetricCardData,
  regionData,
  ExpertData,
} from "../../components/Datas";
import { useNavigate } from "react-router-dom";
import BarChartC from '../../components/BarChartC'
import { ExpertTable } from "../../components/Tables";

import MetricCard from "../../components/metricCard";

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

  return (
    <Layout>
     
      
      <div className="flex space-x-4">
        <div className="bg-white p-3 rounded-[16px] h-[254px] space-y-[12px] w-[219px] ">
          <MetricCard
            title={MetricCardData[0].title}
            value={MetricCardData[0].value}
          />
          <MetricCard
            title={MetricCardData[0].title}
            value={MetricCardData[0].value}
          />
        </div>       
      </div>
      <BarChartC/>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="10"
        data-aos-offset="200"
        className="my-8 rounded-xl"
      >
        <div className="mt-8 w-full overflow-x-scroll">
          <ExpertTable
            data={ExpertData}
            functions={{
              preview: previewPayment,
            }}
            used={false}
          />
        </div>
      </div>

      {/* Render the modal */}
    </Layout>
  );
}

export default ECommerce;
