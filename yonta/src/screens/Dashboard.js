import React, { useState } from "react";
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
  bestSellersData,
  dashboardCards,
  expertsTypeData,
  memberData,
  MetricCardData,
  orderData,
  orders,
  regionData,
  transactionData,
  userappointmentsData,
  userTypeData,
} from "../components/Datas";
import { Link } from "react-router-dom";
import MetricCard from "../components/metricCard";
import StatsCard from "../components/statsCard";
import BarChartC from "../components/BarChartC";
import { TransactionTable } from "../components/Tables";


function Dashboard() {
  const [timeFilter, setTimeFilter] = useState("last30days");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const timeOptions = ["Last 30 days", "Last week", "Yesterday", "Year"];
  return (
    <Layout>
      <div >
        <div
          style={{
            backgroundImage: `images/blueheader.png`,
            backgroundSize: "cover", // Ensures the image covers the entire div
            // backgroundPosition: "center", // Centers the image within the div
            height: "245px", // Sets a height for the div
            width: "220%",
          }}
        >
          <div
            className=" w-[100%]  flex flex-row   justify-between items-center px-10 -mt-10 pb-10 h-full
          "
            style={{
              width: "100%",
              margin: "0px",
              background: "linear-gradient(to right, #6D68E0, #9216FE)",
              borderRadius: "0px 0px 16px 16px",
            }}
          >
            <div className="flex-row">
              <div className=" text-white absolute top-4 left-5 md:left-12 w-[100vw] ">
                <h2 className="font-bold text-xl pt-5">Hello Admin,</h2>
                <p>
                  Here’s you statistics for today. Hope you have a<br /> great day
                </p>
              </div>
              
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
                  className="flex bg-backgroundgray flex-wrap lg:flex-nowrap gap-3 lg:gap-0 
               space-x-1 sm:h-[min-content] p-4 pt-0 lg:p-2 justify-center
               items-center rounded-[10px]"
                >
                  <StatsCard
                    title="Total User"
                    total={42703}
                    data={userTypeData}
                    backgroundColor={'bg-white'}
                  />

                  <StatsCard
                    title="Subscribed User"
                    total={61065}
                    data={userappointmentsData}
                    backgroundColor={'bg-white'}

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
                      title={MetricCardData[1].title}
                      value={MetricCardData[1].value}
                    />
                    <MetricCard
                      title={MetricCardData[5].title}
                      value={MetricCardData[5].value}
                    />
                  </div>
                  <div className=" space-y-3">
                    <MetricCard
                      title={MetricCardData[6].title}
                      value={MetricCardData[6].value}
                    />
                    <MetricCard
                      title={MetricCardData[7].title}
                      value={MetricCardData[7].value}
                    />
                  </div>
                </div>
              </div>
              <div className=" space-y-3 pt-3 md:pt-0">
                <h2 className=" text-black lg:text-white font-semibold pl-5">
                  Expert
                </h2>
                <div
                  className="bg-white p-3 rounded-[16px] flex flex-row m-3.5  items-center space-x-3
               h-[254px] space-y-[12px] w-[min-content] "
                >
                  <div className=" space-y-3">
                    <MetricCard
                      title={MetricCardData[4].title}
                      value={MetricCardData[4].value}
                    />
                    <MetricCard
                      title={MetricCardData[1].title}
                      value={MetricCardData[1].value}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
         
        </div>
        <div className=" mt-10  flex flex-col md:flex-row md:space-x-2  justify-center m-3.5">
          {/* <BarChartComponent /> */}
          <BarChartC />
          <div className="rounded-xl border-[1px] border-border w-[100%] md:w-[50%] p-5 bg-white">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-sm font-medium">Best Sellers</h2>
              <div className="relative bg-lightgraybg">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-[140px] text-xs border rounded px-2 py-1 flex justify-between items-center bg-white"
                >
                  {timeFilter}
                  <span className="ml-2">▼</span>
                </button>
                {isDropdownOpen && (
                  <ul className="absolute right-0 mt-1 w-[140px] bg-white border rounded shadow-lg">
                    {timeOptions.map((option) => (
                      <li
                        key={option}
                        className="text-xs px-2 py-1 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          setTimeFilter(option);
                          setIsDropdownOpen(false);
                        }}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <div className="grid grid-cols-4 gap-7 mb-2 bg-white">
              <h1 className="col-span-2 text-sm font-medium">Product Name</h1>
              <h1 className="col-span-1 text-sm font-medium">Price</h1>
              <h1 className="col-span-1 text-sm font-medium">Total Sales</h1>
            </div>
            <div className="space-y-4 rounded-lg p-2 bg-lightgraybg">
              {bestSellersData.map((item, index) => (
                <Link
                  to={`/products/${item.id}`}
                  key={index}
                  className="grid grid-cols-4 gap-7 hover:bg-gray-50 transition-colors duration-150 ease-in-out"
                >
                  <h3 className="text-xs text-gray-600 col-span-2">{item.productName}</h3>
                  <p className="text-xs text-gray-600 col-span-1">{item.price}</p>
                  <p className="text-xs text-gray-600 col-span-1">{item.totalSales}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full my-6 grid xl:grid-cols-8 grid-cols-1 gap-6 p-3">
          <div className="xl:col-span-8  w-full">
            {/* transaction */}
            <div className="mt-6 bg-white rounded-xl border-[1px] border-border p-5">
              {/* table */}
              <TransactionTable
                data={orderData}

              />

            </div>
          </div>
          {/* side 2 */}
        </div>
      </div>
    </Layout>
  );
}
export default Dashboard;
