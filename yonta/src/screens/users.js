import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../Layout';
import {
  // appointmentsData,
  // expertsTypeData,
  MetricCardData,
  // regionData,
  userappointmentsData,
  userregionData,
  usersubscribeData,
  userTypeData,
} from '../components/Datas';
import { useNavigate } from 'react-router-dom';
// import { BiPlus } from 'react-icons/bi';
import { BASEURL } from '../utils/constant';
// import { Button } from '../components/Form';
import { UsersTable } from '../components/Tables';
// import { FaSearch } from 'react-icons/fa';
import StatsCard from '../components/statsCard';
import MetricCard from '../components/metricCard';

function Users() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]); 
  const [loading, setLoading] = useState(true); 

  // Function to fetch user data
  const fetchUserData = async () => {
    try {
      const response = await axios.get(`${BASEURL}users`, {
        headers: {
          'VerifyMe': 'RGVlcGFrS3VzaHdhaGE5Mzk5MzY5ODU0', 
        }
      });
      setUserData(response.data.users || []); // Set the user data in state
    } catch (error) {
      console.error('Error fetching users:', error);
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

  console.log('User data:', userData);

  return (
    <Layout>
      <div className="flex items-center justify-end">
        {/* <h1 className="text-xl font-semibold">Users</h1> */}
        <div className="flex items-center gap-3">
          
        <select
          className="py-2 px-4 rounded bg-white mb-1"
          // value={genderFilter}
          // onChange={(e) => setGenderFilter(e.target.value)}
        >
          <option value="">Today</option>
          <option value="Male">Yesterdayy</option>
          <option value="Female">Tomorrow</option>
        </select>
        </div>
      </div>
      <div className="flex space-x-4">
        <div className="bg-white p-3 rounded-[16px] h-[254px] space-y-[12px] w-[219px] ">
          <MetricCard
            title={MetricCardData[2].title}
            value={MetricCardData[2].value}
          />
          <MetricCard
            title={MetricCardData[3].title}
            value={MetricCardData[3].value}
          />
        </div>

        <div className="flex space-x-2 h-[254px] p-2 bg-white rounded-[10px]">
          <StatsCard title="Total User" total={61065} data={userTypeData} />
          <StatsCard
            title="Age Group"
            total={42703}
            data={usersubscribeData}
          />
           <StatsCard
            title="Subscribe User"
            total={42703}
            data={userappointmentsData}
          />
          <StatsCard title="Region" total={''} data={userregionData} />
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="10"
        data-aos-offset="200"
        className="bg-white my-8 rounded-xl  p-5"
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
