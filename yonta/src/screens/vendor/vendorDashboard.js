import React from 'react';
import Layout from '../../Layout'
import { VendorTable } from '../../components/Tables';
import { dataMonth, vendordata, vendorListdata } from '../../components/Datas';
import { VendorListTable } from '../../components/Tables';
import { FaSearch } from 'react-icons/fa';
import BarChartComponent from '../../components/barChart';
import { FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
function VendorDashboard() {
    const navigate = useNavigate();

    const handleAddUserClick = () => {
        navigate('/vendorprofile'); // Navigate to the '/add-user' page
    };

    return (
        <Layout>
            <div className="min-h-screen p-6">
                <h1 className='font-semibold mb-2 '>Vendor Summery</h1>
                {/* Header Section */}
                <div className="grid grid-cols-5 gap-4 mb-6">
                    {[
                        { title: 'Net Revenue', value: '₹ 6,26,065' },
                        { title: 'Products Live', value: 65 },
                        { title: 'Units Sold', value: 606 },
                        { title: 'Total Customers', value: 1065 },
                        { title: 'Vendors Onboard', value: 65 },
                    ].map((item, index) => (
                        <div key={index} className="p-4 bg-white rounded-lg shadow-md h-[123px]">
                            <p className="text-gray-600 text-sm mb-3">{item.title}</p>
                            <p className="text-indigo-600 text-2xl font-bold">{item.value}</p>
                        </div>
                    ))}
                </div>

                {/* Overview Section */}
                <div>

                    <BarChartComponent title="Over View" data={dataMonth} />
                </div>
                {/* Vendor Table Section */}
                <div className="p-2 bg-white rounded-lg shadow-md overflow-auto">
                    <h3 className=" text-base font-semibold">Top 5 Vendors</h3>
                    <div
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="10"
                        data-aos-offset="200"
                        className=" rounded-xl"
                    >
                        <div className="mt-0 w-full overflow-x-scroll">
                            <VendorTable
                                data={vendordata}
                                used={false}
                            />

                        </div>
                    </div>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-md overflow-auto">
                    <div className='flex justify-between '>
                        <h3 className=" text-base font-semibold">Vendor List</h3>
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
                    </div>
                    <div
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="10"
                        data-aos-offset="200"
                        className=" rounded-xl"
                    >
                        <div className="mt-0 w-full overflow-x-scroll">
                            <VendorListTable
                                data={vendorListdata}
                                used={false}
                            />

                        </div>
                    </div>
                </div>
                <div className="flex space-x-4 mt-9">


                    <button
                        onClick={handleAddUserClick}
                        className="text-blue border px-4 py-2 rounded-xl"
                    >
                        Edit Questions
                    </button>

                    <button
                        onClick={handleAddUserClick}
                        className="bg-blue text-white rounded-xl flex px-4 py-2"
                    >
                        <FaPlus className=" w-6 h-6 font-thin" />

                        Add Profile
                    </button>
                </div>
            </div>
        </Layout>
    );
}

export default VendorDashboard;
