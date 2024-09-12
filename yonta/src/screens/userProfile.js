import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Layout from "../Layout";
import { orderData } from "../components/Datas";
import MetricCard from "../components/metricCard";
import { AppointmentsTable } from "../components/Tables";
import { ExpertsappointmentsData } from "../components/Datas";

import { IMAGEURL } from "../utils/constant";
const InputBox = ({ label, value }) => (
  <div className="mb-1">
    <label className="block font-bold mb-2">{label}</label>
    <input
      type="text"
      value={value || "N/A"}
      readOnly
      className="w-[220px] h-[50px] text-[12px] bg-white border border-gray-300 rounded-[10px] px-3"
    />
  </div>
);

const UserProfile = () => {
  const [inputNo, setInputNo] = useState(4);
  const location = useLocation();
  const expert = location.state?.expert;
  console.log(expert);

  if (!expert) {
    return <div className="p-6 text-center">Expert data not found.</div>;
  }

  return (
    <Layout>
      <div className="p-6 max-w-6xl mx-auto">
        <h2 className="font-semibold text-lg p-1">Profile profile</h2>

        <div
          className="grid mb-6 gap-3 mt-2"
          style={{ gridTemplateColumns: "1fr 2fr 1fr" }}
        >
          <div className="col-span-1 h-[243px] w-[243px] ">
            <img
              src={`${IMAGEURL}${expert.profilePic}`}
              alt={expert.name}
              className="w-[243px] h-[243px] rounded-lg"
            />
          </div>
          <div className="col-span-2">
            <div className="grid grid-cols-3 gap-4">
              <InputBox
                label="User name"
                value={expert.firstName + " " + expert.lastName}
              />
              <InputBox label="Email" value={expert.email} />
              <div className="row-span-2 w-[250px] h-[220px] ">
                <h3 className="font-bold text-blue-800 mb-2">Stats</h3>
                <div className=" bg-white p-2 rounded-lg ">
                  <div className="grid grid-cols-2 gap-1 rounded-[10px] ">
                    <div className="bg-backgroundgray flex flex-col items-center w-[105px] h-[70px] px-2 shadow-md rounded-lg p-4">
                      <h2 className="text-black text-[10px]">Total Orders</h2>
                      <h2 className="text-[18px] text-blue font-bold">
                        {expert.totalRevenue || "65"}
                      </h2>
                    </div>
                    <div className="bg-backgroundgray flex flex-col items-center w-[105px] h-[70px] px-2 shadow-md rounded-lg p-4">
                      <h2 className="text-black text-[10px]">Agility Level</h2>
                      <h2 className="text-[18px] text-blue font-bold">
                        {expert.monthlyRevenue || "5"}
                      </h2>
                    </div>
                    <div className="bg-backgroundgray flex flex-col items-center w-[105px] h-[70px] px-2 shadow-md rounded-lg p-4">
                      <h2 className="text-black text-[10px]">Appointments</h2>
                      <h2 className="text-[18px] text-blue font-bold">
                        {expert.appointments || "482"}
                      </h2>
                    </div>
                    <div className="bg-backgroundgray flex flex-col items-center w-[105px] h-[70px] px-2 shadow-md rounded-lg p-4">
                      <h2 className="text-black text-[10px]">
                        Average Session
                      </h2>
                      <h2 className="text-[18px] text-blue font-bold">
                        {expert?.rating !== undefined && expert?.rating !== null
                          ? expert.rating.toFixed(1)
                          : "23.4 m"}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <InputBox label="Phone Number" value={expert.phone} />
              <InputBox label="Gender" value={expert.gender} />
              <InputBox label="Age" value={`${expert.age}`} />
              <InputBox
                label="Weight"
                value={expert.weigth + " " + expert.weigthType}
              />
              <InputBox label="Height" value={expert.height} />
            </div>
          </div>
        </div>
        <div className="font-bold text-medium">Orders</div>
        <div className="p-6 rounded-lg bg-white">
          <div className="flex space-x-2  pl-12 mb-3">
            <span>Show</span>
            <input
              type="number"
              min="1"
              max="7"
              className="border border-gray-500 pl-2 rounded-md"
              value={inputNo}
              onChange={(e) => setInputNo(e.target.value)}
            />
            <span>entries</span>
          </div>
          <table className="w-full border-separate border-spacing-y-4 px-4 h-[60px] rounded-[10px]">
            <thead>
              <tr className="text-left text-[12px] text-greytext">
                <th className="px-4 w-[200px] pl-9">Order ID</th>

                <th className="px-4 w-[240px] pl-20">Item</th>
                <th className="px-4">Customer Name</th>
                <th className="px-4">Date</th>
                <th className="px-4">Payment Info</th>
                <th className="px-4">Price</th>
                <th className="px-4">Status</th>
                {/* <th className="px-4">Actions</th> */}
              </tr>
            </thead>
            <tbody>
              {orderData.slice(0, inputNo).map((item, index) => (
                <tr
                  className="text-left text-[12px] text-greytext bg-backgroundgray"
                  key={index}
                >
                  <th className="px-4 w-[200px]">
                    <span className="flex space-x-3 items-center p-2">
                      <th>{item.orderID}</th>
                      <th className="border border-gray-300 p-1 ">
                        <img src={item.itemImage} className="w-9 h-9" />
                      </th>
                    </span>
                  </th>
                  <th className="px-4 w-[200px]">{item.itemName}</th>
                  <th className="px-4">{item.customerName}</th>
                  <th className="px-4">{item.date}</th>
                  <th className="px-4">{item.paymentInfo}</th>
                  <th className="px-4">{item.price}</th>
                  <th className="px-4">{item.status}</th>
                  {/* <th className="px-4">Actions</th> */}
                </tr>
              ))}
            </tbody>
          </table>
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
          <AppointmentsTable
            data={ExpertsappointmentsData}
            // functions={{
            //   preview: previewPayment,
            // }}
            used={false}
          />
        </div>
      </div>
    </Layout>
  );
};

export default UserProfile;
