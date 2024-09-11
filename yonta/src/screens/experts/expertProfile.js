import React from "react";
import { useLocation } from "react-router-dom";
import Layout from "../../Layout";
import MetricCard from "../../components/metricCard";
import { AppointmentsTable } from "../../components/Tables";
import { ExpertsappointmentsData } from "../../components/Datas";
import { IMAGEURL } from "../../utils/constant";
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

const ExpertProfileScreen = () => {
  const location = useLocation();
  const expert = location.state?.expert;

  if (!expert) {
    return <div className="p-6 text-center">Expert data not found.</div>;
  }

  return (
    <Layout>
      <div className="p-6 max-w-6xl mx-auto">
      <h2 className="font-semibold text-lg p-1">Profile profile</h2>

        <div className="grid grid-cols-3 mb-6">
          <div className="col-span-1 h-[243px] w-[243px] ">
            <img
              src={`${IMAGEURL}${expert.image}`}
              alt={expert.name}
              className="w-[243px] h-[243px] rounded-lg"
            />
          </div>
          <div className="col-span-2">
            <div className="grid grid-cols-3 gap-4">
              <InputBox label="Expert name" value={expert.name} />
              <InputBox label="Mobile Number" value={expert.phone} />
              <div className="row-span-2 w-[250px] h-[220px] ">

                <h3 className="font-bold text-blue-800 mb-2">Stats</h3>
                <div className=" bg-white p-2 rounded-lg ">

                <div className="grid grid-cols-2  space-y-2 gap-1 rounded-[10px] ">
                  <div className="bg-backgroundgray w-[105px] h-[70px] px-2 shadow-md rounded-lg p-4">
                    <h2 className="text-black text-[10px]">Total Revenue</h2>
                    <h2 className="text-[18px] text-blue font-bold">
                      {expert.totalRevenue || "N/A"}
                    </h2>
                  </div>
                  <div className="bg-backgroundgray w-[105px] h-[70px] px-2 shadow-md rounded-lg p-4">
                    <h2 className="text-black text-[10px]">Monthly Revenue</h2>
                    <h2 className="text-[18px] text-blue font-bold">
                      {expert.monthlyRevenue || "N/A"}
                    </h2>
                  </div>
                  <div className="bg-backgroundgray w-[105px] h-[70px] px-2 shadow-md rounded-lg p-4">
                    <h2 className="text-black text-[10px]">Total Revenue</h2>
                    <h2 className="text-[18px] text-blue font-bold">
                      {expert.appointments || "N/A"}
                    </h2>
                  </div>
                  <div className="bg-backgroundgray w-[105px] h-[70px] px-2 shadow-md rounded-lg p-4">
                    <h2 className="text-black text-[10px]">Total Revenue</h2>
                    <h2 className="text-[18px] text-blue font-bold">
                      {expert.rating.toFixed(1) || "N/A"}
                    </h2>
                  </div>
                </div>
                </div>
              </div>
              <InputBox label="Education" value={expert.education} />
              <InputBox label="Slot Price" value={`₹ ${expert.slotPrice}`} />
              <InputBox label="Expert Category" value={expert.category} />
              <InputBox label="Location" value={expert.location} />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 mb-6">
          <InputBox
            label="Account Number"
            value={expert?.bankDetails?.accNumber}
          />
          <InputBox label="Bank Name" value={expert?.bankDetails?.bankName} />
          <InputBox label="IFSC Code" value={expert?.bankDetails?.ifscCode} />
          <InputBox
            label="Branch Name"
            value={expert?.bankDetails?.branchName}
          />
        </div>
        {expert.cert && expert.cert.length > 0 && (
          <div>
            <h3 className="font-bold mb-4">Certificates</h3>
            <div className="grid grid-cols-4 gap-4">
              {expert.cert.map((cert, index) => (
                <img
                  key={index}
                  src={`${IMAGEURL}${cert}`} // Appending IMAGEURL to each certificate path
                  alt={`Certificate ${index + 1}`}
                  className="w-[230px] h-[170px] rounded-lg border"
                />
              ))}
            </div>
          </div>
        )}
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

export default ExpertProfileScreen;
