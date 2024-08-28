import React, { useState } from "react";
import Layout from "../Layout";
import { memberData, sortsDatas } from "../components/Datas";
import { Link, useNavigate } from "react-router-dom";
import { BiChevronDown, BiPlus, BiTime } from "react-icons/bi";
import { BsCalendarMonth } from "react-icons/bs";
import { MdFilterList, MdOutlineCalendarMonth } from "react-icons/md";
import { toast } from "react-hot-toast";
import { Button, FromToDate, Select } from "../components/Form";
import { PatientTable } from "../components/Tables";
import Sidebar from "../Layout/Sidebar";
import { FaSearch } from "react-icons/fa";

function Users() {
  const [status, setStatus] = useState(sortsDatas.filterPatient[0]);
  const [gender, setGender] = useState(sortsDatas.genderFilter[0]);
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);
  const [startDate, endDate] = dateRange;
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
          // handle click
        }}
        className="ml-1" // 1px margin left to adjust the exact gap
      />
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
