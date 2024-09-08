import React, { useState } from "react";
import Layout from '../../Layout';
import { vendorInfo, bankInfo, documents, statistics } from '../../components/vendorData'
import { orders } from "../../components/Datas";
import OrderRow from "../../components/orderRow";
import BarChartComponent from "../../components/barChart";
import { dataMonth } from "../../components/Datas";
import { products } from "../../components/Datas";
import { useNavigate } from 'react-router-dom';
import { FaPlus } from "react-icons/fa";
// Reusable Card Component
const Card = ({ title, children }) => {
    return (
        <div className="bg-white rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">{title}</h3>
            {children}
        </div>
    );
};

// Reusable Statistic Card Component
const StatisticCard = ({ label, value }) => {
    return (
        <div className="bg-white rounded-lg  p-6 text-center">
            <p className="text-gray-500">{label}</p>
            <p className="text-xl font-bold text-[#5A4BDA] ">{value}</p>
        </div>
    );
};

// Reusable Input Field Component
const InputField = ({ label, type, value, onChange }) => {
    return (
        <div className="flex flex-col">
            <label className="block font-medium text-gray-700">{label}</label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                className="mt-1 p-2 border rounded-lg"
            />
        </div>
    );
};

// Reusable File Upload Component
const UploadFile = ({ label }) => {
    return (
        <div className="flex flex-col items-center">
            <label className="block font-medium text-gray-700">{label}</label>
            <div className="border-dashed border-2 p-4 rounded-lg w-40">
                <button className="text-gray-500">Upload File</button>
            </div>
        </div>
    );
};

// Reusable Button Component
const Button = ({ label, onClick, color = "green" }) => {
    return (
        <button
            className={`bg-${color} text-white px-6 py-2 rounded-lg`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

// Main Vendor Page Component
const VendorProfile = () => {
    const [commission, setCommission] = useState(30);
    const [filterStatus, setFilterStatus] = useState('All');
    const [category, setCategory] = useState('Protein');
    const navigate = useNavigate();

    const handleAddUserClick = () => {
        navigate('/vendorinfo'); // Navigate to the '/add-user' page
    };


    const filteredOrders = filterStatus === 'All'
        ? orders
        : orders.filter(order => order.status === filterStatus);


    return (
        <Layout>
            <div className="max-w-screen-lg mx-auto p-6 bg-gray-100">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    {/* Vendor Information */}
                    <Card title="Vendor Information">
                        <p ><strong>Business Name:</strong><span className="text-backgroundgray"> {vendorInfo.businessName}</span></p>
                        <p><strong>Business Type:</strong> <span className="text-backgroundgray"> {vendorInfo.businessType}</span></p>
                        <p className="mt-2"><strong>Office Address:</strong><span className="text-backgroundgray">  {vendorInfo.officeAddress}</span></p>
                        <p><strong>SPOC No:</strong> <span className="text-backgroundgray"> {vendorInfo.spocNo}</span></p>
                        <p><strong>SPOC Email:</strong><span className="text-backgroundgray">  {vendorInfo.spocEmail}</span></p>
                    </Card>

                    {/* Banking Information */}
                    <Card title="Banking Information">
                        <p><strong>Account Name:</strong> <span className="text-backgroundgray">{bankInfo.accountName}</span></p>
                        <p><strong>Account Number:</strong><span className="text-backgroundgray"> {bankInfo.accountNumber}</span></p>
                        <p><strong>Bank Name:</strong> <span className="text-backgroundgray">{bankInfo.bankName}</span></p>
                        <p><strong>IFSC Code:</strong><span className="text-backgroundgray"> {bankInfo.ifscCode}</span></p>
                        <p><strong>Branch:</strong> <span className="text-backgroundgray">{bankInfo.branch}</span></p>
                    </Card>

                    {/* Documents */}
                    <Card title="Documents">
                        <div className="grid grid-cols-3 gap-4">
                            {documents.map((doc, index) => (
                                <img key={index} src={doc.src} value={doc.value} className="rounded-lg shadow-sm" />

                            ))}
                        </div>
                        <div className="mt-4 bg-backgroundgray p-2 rounded-s-2xl">
                            <button className=" text-blue-600 font-semibold">View detailed information &rarr;</button>
                        </div>
                    </Card>
                </div>

                {/* Middle Section */}
                <div className="bg-white rounded-lg p-6 mb-6 flex items-center justify-between">
                    {/* Vendor Commission Input */}
                    <InputField
                        label="Vendor Commission"
                        type="number"
                        value={commission}
                        onChange={(e) => setCommission(e.target.value)}
                    />

                    {/* Upload Sections */}
                    <div className="flex space-x-6">
                        <UploadFile label="NDA" />
                        <UploadFile label="MOU" />
                    </div>

                    {/* Save Button */}
                    <Button label="Save" onClick={() => console.log("Saved")} />
                </div>

                {/* Statistics Section */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                    {statistics.map((stat, index) => (
                        <StatisticCard key={index} label={stat.label} value={stat.value} />
                    ))}
                </div>
                <div className="bg-white shadow-md rounded-lg p-4 mt-4">
                    <div className="flex justify-between items-center">
                        <h2 className="text-gray-700 text-lg font-semibold">Orders</h2>  {/* Reduced text size */}
                        <div className="flex space-x-4">
                            <input
                                type="text"
                                placeholder="Search order ID"
                                className="border border-gray-300 rounded-lg p-2 text-xs"
                            />
                            <select
                                value={filterStatus}
                                onChange={(e) => setFilterStatus(e.target.value)}
                                className="border border-gray-300 rounded-lg p-2 text-xs"
                            >
                                <option value="All">All</option>
                                <option value="Processing">Processing</option>
                                <option value="Shipping">Shipping</option>
                                <option value="Delivered">Delivered</option>
                            </select>
                        </div>
                    </div>


                    <div className=" rounded-lg p-4">
                        <div className="grid grid-cols-9 font-semibold text-gray-600 mb-4 text-xs">
                            <div className="col-span-1">Order ID</div>
                            <div className="col-span-2">Item</div>
                            <div className="col-span-1">Customer Name</div>
                            <div className="col-span-1">Date</div>
                            <div className="col-span-1">Payment Info</div>
                            <div className="col-span-1">Price</div>
                            <div className="col-span-1">Yonta Commission</div>
                            <div className="col-span-1">Status</div>
                        </div>

                        {filteredOrders.map((order, index) => (
                            <OrderRow key={index} order={order} />
                        ))}

                        <div className="flex justify-between items-center mt-4">
                            <p className="text-gray-600 text-xs">Showing 1 to 5 of 45 entries</p>
                            <div className="flex space-x-2">
                                <button className="px-4 py-2 bg-gray-200 rounded-lg text-xs">1</button>
                                <button className="px-4 py-2 bg-gray-200 rounded-lg text-xs">2</button>
                                <button className="px-4 py-2 bg-gray-200 rounded-lg text-xs">3</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4">

                    <BarChartComponent title="Orders" data={dataMonth} />
                </div>
                <div className="bg-white w-[70%] rounded-lg p-4 mb-6">
                    <div className="flex justify-between items-center">
                        <h2 className="text-gray-700 text-lg font-semibold">Best selling</h2>
                        <div className="flex space-x-4">
                            <label className="text-gray-500 text-sm">Category:</label>
                            <select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="border border-gray-300 rounded-lg p-2 text-sm"
                            >
                                <option value="Protein">Protein</option>
                                <option value="Creatine">Creatine</option>
                                <option value="Vitamins">Vitamins</option>
                            </select>
                        </div>
                    </div>


                    <div className=" rounded-lg p-4">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="flex justify-between items-center mb-4 p-4 rounded-lg"
                            >
                                <div className="flex items-center">
                                    <div className="bg-backgroundgray py-4 px-4 rounded-2xl mr-4">
                                        <img src={product.image} alt={product.name} className="w-20 h-24" />
                                    </div>
                                    <div>
                                        <p className="text-gray-700 font-semibold text-sm">{product.name}</p>
                                        <p className="text-blue font-semibold text-lg">{product.price}</p>
                                    </div>
                                </div>
                                <div className="ml-20">
                                    <p className="text-blue text-sm">{product.unitsSold}</p>
                                </div>
                            </div>
                        ))}
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
};

export default VendorProfile;
