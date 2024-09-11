import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../Layout";
import {
  appointmentsData,
  expertsTypeData,
  MetricCardData,
  regionData,
} from "../components/Datas";
import { useNavigate } from "react-router-dom";
import { BiPlus } from "react-icons/bi";
import { BASEURL } from "../utils/constant";
import { Button } from "../components/Form";
import { UsersTable } from "../components/Tables";
import { FaSearch } from "react-icons/fa";
import StatsCard from "../components/statsCard";
import MetricCard from "../components/metricCard";

function Users() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]); // State to store the user data
  const [loading, setLoading] = useState(true); // State to manage loading

  // Function to fetch user data
  const fetchUserData = async () => {
    try {
      const response = await axios.get(`${BASEURL}users`, {
        headers: {
          VerifyMe: "RGVlcGFrS3VzaHdhaGE5Mzk5MzY5ODU0", // Add your custom header here
        },
      });
      setUserData(response.data.users || []); // Set the user data in state
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false); // Stop the loading state
    }
  };

  useEffect(() => {
    fetchUserData(); // Fetch the user data when the component mounts
  }, []);

  // Preview function
  const previewPayment = (id) => {
    navigate(`/patients/preview/${id}`);
  };

  console.log("User data:", userData);

  return (
    <Layout>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Users</h1>
        <div className="flex items-center gap-3">
          <div className="flex items-center h-7 bg-white border border-border rounded-md">
            <input
              type="text"
              placeholder='Search "User"'
              className="flex-grow h-full text-sm text-lightgray bg-transparent rounded-l-md px-2 outline-none"
            />
            <span className="flex items-center justify-center h-full px-2">
              <FaSearch color="grey" className="h-4 w-4 text-main" />
            </span>
          </div>
          <Button
            Icon={BiPlus}
            label="Add New"
            onClick={() => {
              // handle click
            }}
            className="ml-1" // 1px margin left to adjust the exact gap
          />
        </div>
      </div>
      <div className="flex space-x-4 ">
        <div
          className="bg-white p-3 rounded-[16px] h-[254px] space-y-[12px] w-[min-content]
        "
        >
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
        className="bg-white my-8 rounded-xl border-[1px] border-border p-5"
      >
        {loading ? (
          <p>Loading...</p> // Show loading state while data is being fetched
        ) : (
          <div className="mt-8 w-full overflow-x-scroll">
            <UsersTable
              data={userData} // Pass the users array here
              functions={{
                preview: previewPayment,
              }}
              used={false}
            />
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Users;
