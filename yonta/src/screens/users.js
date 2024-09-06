import React from "react";
import Layout from "../Layout";
import {
  appointmentsData,
  expertData,
  expertsTypeData,
  memberData,
  MetricCardData,
  regionData,
} from "../components/Datas";
import { useNavigate } from "react-router-dom";
import { BiPlus } from "react-icons/bi";

import { Button } from "../components/Form";
import { PatientTable } from "../components/Tables";
import { FaSearch } from "react-icons/fa";
import StatsCard from "../components/statsCard";
import MetricCard from "../components/metricCard";

function Users() {
  const navigate = useNavigate();
  // preview
  const previewPayment = (id) => {
    navigate(`/patients/preview/${id}`);
  };

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
        className="bg-white my-8 rounded-xl border-[1px] border-border p-5"
      >
        <div className="mt-8 w-full overflow-x-scroll">
          <PatientTable
            data={memberData}
            functions={{
              preview: previewPayment,
            }}
            used={false}
          />
        </div>
      </div>
    </Layout>
  );
}

export default Users;
