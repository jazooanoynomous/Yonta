import React, { useState } from "react";
import Layout from '../../Layout';
import { VendorProductListData } from "../../components/Datas";
import { useNavigate } from 'react-router-dom';
import { FaPlus } from "react-icons/fa";
import { VendorProductListTable } from "../../components/Tables";
// Reusable Card Component
const VendorInfo = () => {

    const [filterStatus, setFilterStatus] = useState('All');
    const navigate = useNavigate();

    const handleAddUserClick = () => {
        navigate('/vendorprofile'); // Navigate to the '/add-user' page
    };
    const handleRegistrationClick = () => {
        navigate('/venderbusinessdetails'); // Navigate to the '/add-user' page
    };

    return (
        <Layout>
            <div>

                <div className="flex space-x-4 mt-9">


                    <button
                        onClick={handleRegistrationClick}
                        className="text-blue border px-4 py-2 rounded-xl"
                    >
                        Register Information
                    </button>

                    <button
                        onClick={handleAddUserClick}
                        className="bg-blue text-white rounded-xl flex px-4 py-2"
                    >

                        Products
                    </button>
                </div>
                <div className="bg-white shadow-md rounded-lg p-4 mt-4">
                    <div className="flex justify-between items-center">
                        <h2 className="text-gray-700 text-lg font-semibold">Products List</h2>  {/* Reduced text size */}
                        <div className="flex space-x-4">
                            <input
                                type="text"
                                placeholder="Search product SKU"
                                className="border border-gray-300 rounded-lg p-2 text-xs"
                            />
                            <select
                                value={filterStatus}
                                onChange={(e) => setFilterStatus(e.target.value)}
                                className="border border-gray-300 rounded-lg p-2 text-xs"
                            >
                                <option value="All">Search Category</option>
                                <option value="Processing">Processing</option>
                                <option value="Shipping">Shipping</option>
                                <option value="Delivered">Delivered</option>
                            </select>
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
                            <VendorProductListTable
                                data={VendorProductListData}
                                used={false}
                            />

                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default VendorInfo