import React from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../../Layout'
import MetricCard from '../../components/metricCard';
import { AppointmentsTable } from '../../components/Tables';
import { ExpertsappointmentsData } from '../../components/Datas';
const InputBox = ({ label, value }) => (
  <div className="mb-4">
    <label className="block font-bold mb-2">{label}</label>
    <input
      type="text"
      value={value || 'N/A'}
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
    <div className="bg-gray-100 p-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-3 mb-6">
        <div className="col-span-1 h-[243px] w-[243px] ">
          <img src={expert.profilePicture} alt={expert.name} className="w-full rounded-lg" />
        </div>
        <div className="col-span-2">
          <div className="grid grid-cols-3 gap-4">
            <InputBox label="Expert name" value={expert.name} />
            <InputBox label="Mobile Number" value={expert.mobileNumber} />
            <div className="row-span-2 w-[250px] h-[220px] bg-white p-4 rounded-lg pr-6">
              <h3 className="font-bold text-blue-800 mb-2">Stats</h3>              
              <div className="grid grid-cols-2  space-y-2 gap-1 rounded-[10px] ">

              <div className="bg-backgroundgray w-[105px] h-[70px] px-2 shadow-md rounded-lg p-4">
                <h2 className="text-black text-[10px]">Total Revenue</h2>
                <h2 className="text-[18px] text-blue font-bold">{expert.totalRevenue || 'N/A'}</h2>
               </div>
               <div className="bg-backgroundgray w-[105px] h-[70px] px-2 shadow-md rounded-lg p-4">
                <h2 className="text-black text-[10px]">Monthly Revenue</h2>
                <h2 className="text-[18px] text-blue font-bold">{expert.monthlyRevenue || 'N/A'}</h2>
               </div>
               <div className="bg-backgroundgray w-[105px] h-[70px] px-2 shadow-md rounded-lg p-4">
                <h2 className="text-black text-[10px]">Total Revenue</h2>
                <h2 className="text-[18px] text-blue font-bold">{expert.appointments || 'N/A'}</h2>
               </div>
               <div className="bg-backgroundgray w-[105px] h-[70px] px-2 shadow-md rounded-lg p-4">
                <h2 className="text-black text-[10px]">Total Revenue</h2>
                <h2 className="text-[18px] text-blue font-bold">{expert.rating.toFixed(1) || 'N/A'}</h2>
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
        <InputBox label="Expert Commission" value={expert.commission} />
        <InputBox label="Bank Name" value={expert.bankName} />
        <InputBox label="IFSC Code" value={expert.ifscCode} />
        <InputBox label="Branch Name" value={expert.branchName} />
      </div>
      {expert.certificates && (
        <div>
          <h3 className="font-bold mb-4">Certificates</h3>
          <div className="grid grid-cols-4 gap-4 ">
            {expert.certificates.map((cert, index) => (
              <img key={index} src={cert} alt={`Certificate ${index + 1}`} className="w-[230px] h-[170px] rounded-lg border" />
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