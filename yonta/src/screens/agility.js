import React, { useState } from "react";
import Layout from "../Layout";
import { community, expertData } from "../components/Datas";
import { useNavigate } from "react-router-dom";
import { BiPlus } from "react-icons/bi";
import { Button } from "../components/Form";
import { AgilityTable, ExpertTable } from "../components/Tables";
import { FaSearch } from "react-icons/fa";
import AddExpertsModal from "../components/Modals/addExperts";

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
