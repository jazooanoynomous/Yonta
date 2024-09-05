import React, { useState } from "react";
import Layout from "../../Layout";
import { useNavigate } from "react-router-dom";

import {   NotificationTable, } from "../../components/Tables";
import { notificationsData } from "../../components/Datas";
import { FaSearch } from "react-icons/fa";
import { Button } from "../../components/Form";
import { BiPlus } from "react-icons/bi";


function Notifications() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal


  return (
    <Layout>
<div className="flex items-center justify-between">
    <h1 className="text-xl font-semibold">Notifications</h1>
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
          navigate('/addnotification')
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
        className=" rounded-xl"
      >
        <div className="mt-0 w-full overflow-x-scroll">
          <NotificationTable
            data={notificationsData}
            used={false}            
          />
          
        </div>
      </div>

    </Layout>
  );
}

export default Notifications;
