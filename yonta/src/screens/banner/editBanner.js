import React, { useState } from "react";
import { FaUpload } from "react-icons/fa";
import Layout from '../../Layout'
const EditBanner = () => {
    const [bannerName, setBannerName] = useState('');
    const [vendor, setVendor] = useState('');
    const [section, setSection] = useState('');
    const [page, setPage] = useState('');
    const [subPage, setSubPage] = useState('');
    const [redirectOption, setRedirectOption] = useState({ product: false, page: false });

    const handleUploadImage = () => {
        // Handle image upload
    };

    return (
        <Layout>
            <div className="p-8 bg-gray-50 min-h-screen">
                <div className="flex justify-between mb-6">
                    <h2 className="text-xl font-bold">Banner Image</h2>
                    <button className="bg-blue text-white px-4 py-2 rounded-lg">+ Add New</button>
                </div>

                <div className="bg-white shadow-md p-6 rounded-lg">
                    {/* Banner Image Upload */}
                    <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-1 flex flex-col items-center border-dashed border-2 border-gray-300 rounded-lg p-4">
                            <div
                                className="w-[345px] h-[180px]  flex justify-center items-center cursor-pointer"
                                onClick={handleUploadImage}
                            >
                                <FaUpload className="text-gray-400 text-3xl" />
                                <span className=" ml-2">Upload image</span>
                            </div>
                        </div>

                        {/* Banner Name and Vendor Hosting */}
                        <div className="col-span-2 grid grid-cols-2 gap-4">
                            {/* Banner Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Banner Name</label>
                                <input
                                    type="text"
                                    value={bannerName}
                                    onChange={(e) => setBannerName(e.target.value)}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                                    placeholder="Football"
                                />
                            </div>

                            {/* Vendor Hosting */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Vendor Hosting</label>
                                <select
                                    value={vendor}
                                    onChange={(e) => setVendor(e.target.value)}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                                >
                                    <option>Select Vendor</option>
                                    <option>Vendor 1</option>
                                    <option>Vendor 2</option>
                                </select>
                            </div>
                            
                        </div>
                        
                    </div>

                    {/* Redirect Options */}
                    <div className="mt-4 flex space-x-4">
                        <div>
                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    checked={redirectOption.product}
                                    onChange={() =>
                                        setRedirectOption((prev) => ({
                                            ...prev,
                                            product: !prev.product,
                                        }))
                                    }
                                />
                                <span>Redirect to product</span>
                            </label>
                        </div>
                        <div>
                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    checked={redirectOption.page}
                                    onChange={() =>
                                        setRedirectOption((prev) => ({
                                            ...prev,
                                            page: !prev.page,
                                        }))
                                    }
                                />
                                <span>Redirect to Page</span>
                            </label>
                        </div>
                    </div>

                    {/* Link Selection */}
                    <div className="mt-4 grid grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Link</label>
                            <select
                                value={section}
                                onChange={(e) => setSection(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                            >
                                <option>Select Section</option>
                                <option>Section 1</option>
                                <option>Section 2</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Page</label>
                            <select
                                value={page}
                                onChange={(e) => setPage(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                            >
                                <option>Select Page</option>
                                <option>Page 1</option>
                                <option>Page 2</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Sub Page</label>
                            <select
                                value={subPage}
                                onChange={(e) => setSubPage(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                            >
                                <option>Select Sub Page</option>
                                <option>Sub Page 1</option>
                                <option>Sub Page 2</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="mt-6 p-6 ">
                    <h2 className="text-lg font-bold">Stats</h2>
                    <p className="mt-2 text-gray-500 justify-center text-center self-center">Stats will be generated after 2 days</p>
                </div>
            </div>
        </Layout>
    );
};

export default EditBanner;
