import React, { useEffect, useState } from "react";
import Layout from "../../Layout";
import { useNavigate } from "react-router-dom";

import {   NotificationTable, } from "../../components/Tables";
// import { notificationsData } from "../../components/Datas";
import { FaSearch } from "react-icons/fa";
import { Button } from "../../components/Form";
import { BiPlus } from "react-icons/bi";
import { BASEURL } from "../../utils/constant";
import axios from "axios";
import { toast } from "react-hot-toast";


function Notifications() {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading

  const fetchNotificationsData = async () => {
    try {
      const response = await axios.get(`${BASEURL}notification`, {
        headers: {
          'VerifyMe': 'RGVlcGFrS3VzaHdhaGE5Mzk5MzY5ODU0',
        },
      });
      setNotifications(response.data.notifications || []); 
    } catch (error) {
      console.error('Error fetching ingredients:', error);
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchNotificationsData(); 
  }, []);

  const handleDeleteNotification = async (id) => {
    try {
      await axios.delete(`${BASEURL}notification/${id}`, {
        headers: {
          VerifyMe: "RGVlcGFrS3VzaHdhaGE5Mzk5MzY5ODU0",
        },
      });
      const updatedNotifications = notifications.filter(
        (notification) => notification.id !== id
      );
      setNotifications(updatedNotifications);
      toast.success("Notification successfully deleted!"); // Success message with react-hot-toast
    } catch (error) {
      toast.error("This feature is not available yet"); // Error message with react-hot-toast
      console.error("Error deleting notification:", error);
    }
  };

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
        <div className="mt-0 w-full h-full">
          <NotificationTable
            data={notifications}
            used={false}      
            functions={{
              preview: (id) => console.log("Preview", id),
              deleteNotification: handleDeleteNotification, // Pass delete function
            }}      
          />
          
        </div>
      </div>

    </Layout>
  );
}

export default Notifications;
