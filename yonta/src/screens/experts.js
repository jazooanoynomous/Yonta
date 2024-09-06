import React, { useState } from "react";
import Layout from "../Layout";
import { expertData, appointmentsData,
  expertsTypeData,
  memberData,
  MetricCardData,
  regionData, } from "../components/Datas";
import { useNavigate } from "react-router-dom";
import { BiPlus } from "react-icons/bi";
import { Button } from "../components/Form";
import { ExpertTable } from "../components/Tables";
import { FaSearch } from "react-icons/fa";
import AddExpertsModal from "../components/Modals/addExperts";
import StatsCard from "../components/statsCard";
import MetricCard from "../components/metricCard";

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

      <div className="flex space-x-4 h-[254px] p-4 bg-white rounded-[10px]">
        <StatsCard title="Total Experts" total={42703} data={expertsTypeData} />
        <StatsCard
          title="Total Appointment"
          total={61065}
          data={appointmentsData}
        />
        <StatsCard title="Region" total={4} data={regionData} />
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
