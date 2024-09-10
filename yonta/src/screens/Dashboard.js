import React from "react";
import Layout from "../Layout";
// import bgImg from "../bg.png";
import {
  BsArrowDownLeft,
  BsArrowDownRight,
  BsArrowUpRight,
  BsCheckCircleFill,
  BsClockFill,
  BsXCircleFill,
} from "react-icons/bs";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import {
  appointmentsData,
  dashboardCards,
  expertsTypeData,
  memberData,
  MetricCardData,
  regionData,
  transactionData,
} from "../components/Datas";
import { Link } from "react-router-dom";
import MetricCard from "../components/metricCard";
import StatsCard from "../components/statsCard";
import BarChartC from "../components/BarChartC";

import { Transactiontable as TransactionTable } from "../components/Tables";

function Dashboard() {
  return (
    <Layout>
      <div>
        {/* boxes */}
        {/* <div className="w-full grid xl:grid-cols-4 gap-6 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {dashboardCards.map((card, index) => (
          <div
            key={card.id}
            className=" bg-white rounded-xl border-[1px] border-border p-5"
          >
            <div className="flex gap-4 items-center">
              <div
                className={`w-10 h-10 flex-colo bg-opacity-10 rounded-md ${card.color[1]} ${card.color[0]}`}
              >
                <card.icon />
              </div>
              <h2 className="text-sm font-medium">{card.title}</h2>
            </div>
            <div className="grid grid-cols-8 gap-4 mt-4 bg-dry py-5 px-8 items-center rounded-xl">
              <div className="flex flex-col gap-4 col-span-3">
                <h4 className="text-md font-medium">
                  {card.value}
                  {
                    // if the id === 4 then add the $ sign
                    card.id === 4 ? '$' : '+'
                  }
                </h4>
                <p className={`text-sm flex gap-2 ${card.color[1]}`}>
                  {card.percent > 50 && <BsArrowUpRight />}
                  {card.percent > 30 && card.percent < 50 && (
                    <BsArrowDownRight />
                  )}
                  {card.percent < 30 && <BsArrowDownLeft />}
                  {card.percent}%
                </p>
              </div>
            </div>
          </div>
        ))}
      </div> */}
      </div>
      <div
        style={{
          backgroundImage: `images/blueheader.png`,
          backgroundSize: "cover", // Ensures the image covers the entire div
          backgroundPosition: "center", // Centers the image within the div
          height: "245px", // Sets a height for the div
          width: "100%",
        }}
      >
        <div
          className=" w-[100vw] flex flex-row  justify-between items-center px-10 -mt-10 pb-10 h-full
          "
          style={{
            background: "linear-gradient(to right, #6D68E0, #9216FE)",
            borderRadius: "0px 0px 16px 16px",
          }}
        >
          <div className=" text-white   absolute top-4 left-5 md:left-12 w-[100vw] ">
            <h2 className="font-bold text-xl">Hello Admin,</h2>
            <p>
              Here’s you statistics for today. Hope you have a<br /> great day
            </p>
          </div>
        </div>
      </div>
      <div
        className=" flex pr-3 md:pr-0  flex-row justify-center md:justify-between w-[100vw] 
        -mt-28 "
      >
        {/* section 1 */}
        <div>
          <div
            className="flex  justify-center lg:justify-between lg:ml-1
             flex-col md:flex-row sm:flex-wrap lg:flex-nowrap sm:ml-0  space-x-2 
             "
          >
            <div className=" space-y-3">
              <h2 className=" text-black lg:text-white font-semibold pl-5 ml-2 md:ml-3 ">
                User
              </h2>
              <div
                className="flex  flex-wrap lg:flex-nowrap gap-3 lg:gap-0 
               space-x-1 sm:h-[min-content]  p-4 pt-0 lg:p-0 justify-center
               items-center rounded-[10px]"
              >
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
              </div>
            </div>
            <div className=" space-y-3">
              <h2 className=" text-black lg:text-white font-semibold pl-5">
                Ecommerce
              </h2>
              <div
                className="bg-white p-3 rounded-[16px] flex flex-row m-3.5 mr-5 lg:m-0 lg:ml-2 items-center space-x-3
               h-[254px] space-y-[12px] w-[min-content]  "
              >
                <div className=" space-y-3">
                  <MetricCard
                    title={MetricCardData[0].title}
                    value={MetricCardData[0].value}
                  />
                  <MetricCard
                    title={MetricCardData[0].title}
                    value={MetricCardData[0].value}
                  />
                </div>
                <div className=" space-y-3">
                  <MetricCard
                    title={MetricCardData[0].title}
                    value={MetricCardData[0].value}
                  />
                  <MetricCard
                    title={MetricCardData[0].title}
                    value={MetricCardData[0].value}
                  />
                </div>
              </div>
            </div>
            <div className=" space-y-3 pt-3 md:pt-0">
              <h2 className=" text-black lg:text-white font-semibold pl-5">
                Products
              </h2>
              <div
                className="bg-white p-3 rounded-[16px] flex flex-row m-3.5  items-center space-x-3
               h-[254px] space-y-[12px] w-[min-content] "
              >
                <div className=" space-y-3">
                  <MetricCard
                    title={MetricCardData[0].title}
                    value={MetricCardData[0].value}
                  />
                  <MetricCard
                    title={MetricCardData[0].title}
                    value={MetricCardData[0].value}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Ecommerce section  */}
        <div></div>
        {/* Exports section  */}
        <div></div>
      </div>
      <div className=" mt-10  flex flex-col md:flex-row md:space-x-2  justify-center m-3.5">
        {/* <BarChartComponent /> */}
        <BarChartC />
        <div className=" rounded-xl border-[1px] border-border w-[100%] md:w-[50%]  p-5">
          <h2 className="text-sm font-medium">Best Sellers</h2>
          <div className=" grid grid-cols-4 gap-7">
            <h1 className=" col-span-2 text-sm">Product Name</h1>
            <h1 className=" col-span-1 text-sm">Price</h1>
            <h1 className=" col-span-1 text-sm">Total Sales</h1>
          </div>
          <div className=" ">
            {memberData.slice(3, 8).map((member, index) => (
              <Link
                to={`/patients/preview/${member.id}`}
                key={index}
                className=" grid grid-cols-4 gap-7  space-y-7"
              >
                <h3 className="text-xs mt-7  text-gray-400 col-span-2">
                  {member.title}
                </h3>
                <p className="text-xs text-gray-400 col-span-1">
                  {member.phone}
                </p>
                <p className="text-xs text-textGray col-span-1">2:00 PM</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full my-6 grid xl:grid-cols-8 grid-cols-1 gap-6 p-3">
        <div className="xl:col-span-8  w-full">
          {/* transaction */}
          <div className="mt-6 bg-white rounded-xl border-[1px] border-border p-5">
            <div className="flex-btn gap-2">
              <h2 className="text-sm font-medium">Total Sales</h2>
            </div>
            {/* table */}
            <div className="mt-4 overflow-x-scroll">
              <TransactionTable
                data={transactionData.slice(0, 5)}
                action={false}
                isTrue={true}
              />
            </div>
          </div>
        </div>
        {/* side 2 */}
      </div>
    </Layout>
  );
}
export default Dashboard;
