import React, { useState } from "react";
import Layout from "../Layout";
import { community } from "../components/Datas";
import { useNavigate } from "react-router-dom";

import { AgilityTable, ExpertTable } from "../components/Tables";


function Agility() {
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
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Agility</h1>
       
      </div>
      
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="10"
        data-aos-offset="200"
        className=" rounded-xl"
      >
        <div className="mt-8 w-full overflow-x-scroll">
          <AgilityTable
            data={community}
            
          />
        </div>
      </div>

    </Layout>
  );
}

export default Agility;
