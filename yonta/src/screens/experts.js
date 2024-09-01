import React, { useState } from "react";
import Layout from "../Layout";
import { expertData } from "../components/Datas";
import { useNavigate } from "react-router-dom";
import { BiPlus } from "react-icons/bi";
import { Button } from "../components/Form";
import { ExpertTable } from "../components/Tables";
import { FaSearch } from "react-icons/fa";
import AddExpertsModal from "../components/Modals/addExperts";

function Experts() {
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
        <h1 className="text-xl font-semibold">Expert Board-List</h1>
        <div className="flex items-center gap-3">
          <div className="flex items-center h-7 bg-white border border-border rounded-md">
            <input
              type="text"
              placeholder='Search "User"'
              className="flex-grow h-full text-sm text-main bg-transparent rounded-l-md px-2 outline-none"
            />
            <span className="flex items-center justify-center h-full px-2">
              <FaSearch color="grey" className="h-4 w-4 text-main" />
            </span>
          </div>
          <Button
            Icon={BiPlus}
            label="Add New"
            onClick={() => {
              // handle click for Add New
            }}
            className="ml-1 text-white"
          />
        </div>
      </div>
      <div className="pt-[12px]">
        <Button
          Icon={BiPlus}
          label="Add Expert Category"
          onClick={toggleModal} // Open the modal when this button is clicked
          className="ml-1 p-[12px] h-[45px] w-[190px] bg-white text-gray-500 border border-gray-300"
        />
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="10"
        data-aos-offset="200"
        className="my-8 rounded-xl"
      >
        <div className="mt-8 w-full overflow-x-scroll">
          <ExpertTable
            data={expertData}
            functions={{
              preview: previewPayment,
            }}
            used={false}
          />
        </div>
      </div>

      {/* Render the modal */}
      <AddExpertsModal isOpen={isModalOpen} onClose={toggleModal} />
    </Layout>
  );
}

export default Experts;
