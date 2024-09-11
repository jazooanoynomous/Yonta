import React, { useEffect, useState } from "react";
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
import { BiPlus } from "react-icons/bi";
import { Button } from "../../components/Form";
import { ExpertTable } from "../../components/Tables";
import { FaSearch } from "react-icons/fa";
import AddExpertsModal from "../../components/Modals/addExperts";
import StatsCard from "../../components/statsCard";
import MetricCard from "../../components/metricCard";
import { BASEURL } from "../../utils/constant";
import axios from "axios";

function Experts() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal
  const [expertsData, setExpertsData] = useState([]); // State to store the user data
  const [loading, setLoading] = useState(true); // State to manage loading

  // Function to fetch user data
  const fetchExpertsData = async () => {
    try {
      const response = await axios.get(`${BASEURL}expert`, {
        headers: {
          'VerifyMe': 'RGVlcGFrS3VzaHdhaGE5Mzk5MzY5ODU0', // Add your custom header here
        }
      });
      setExpertsData(response.data.experts || []); // Set the user data in state
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false); // Stop the loading state
    }
  };

  useEffect(() => {
    fetchExpertsData(); // Fetch the user data when the component mounts
  }, []);
//   const handleEditStatus = async (updatedCategory) => {
//     try {
//         const { id } = updatedCategory;
//         const response = await axios.put(`${BASEURL}expert/${id}`, updatedCategory, {
//             headers: {
//                 'VerifyMe': 'RGVlcGFrS3VzaHdhaGE5Mzk5MzY5ODU0',
//             },
//         });
//         // Update state with edited category
//         setCategoryData((prevData) =>
//             prevData.map((category) => (category.id === id ? response.data : category))
//         );
//     } catch (error) {
//         console.error('Error editing category:', error);
//     }
// };

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
        <h1 className="text-xl py-2 font-bold">Expert Summary</h1>
        {/* <div className="flex items-center gap-3">
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
        </div> */}
      </div>
     
      <div className="flex space-x-4">
        <div className="bg-white p-3 rounded-[16px] h-[254px] space-y-[12px] w-[219px] ">
          <MetricCard
            title={MetricCardData[0].title}
            value={MetricCardData[0].value}
          />
          <MetricCard
            title={MetricCardData[1].title}
            value={MetricCardData[1].value}
          />
        </div>

        <div className="flex space-x-4 h-[254px] p-4 bg-white rounded-[10px]">
          <StatsCard
            title="Total Experts"
            total={42703}
            data={expertsTypeData}
          />
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
        <div className="mt-8  overflow-x-scroll">
          <ExpertTable
            data={expertsData}
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
