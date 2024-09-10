import React from 'react'
import Layout from '../../Layout'
import { useNavigate } from 'react-router-dom';
function VendorBusinessdetails() {
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
                        className="bg-blue text-white border px-4 py-2 rounded-xl"
                    >
                        Register Information
                    </button>

                    <button
                        onClick={handleAddUserClick}
                        className=" text-blue border rounded-xl flex px-4 py-2"
                    >

                        Products
                    </button>
                </div>
                <h1 className='text-indigo-700 text-lg font-bold mt-4 '> Business details</h1>
                <div className='flex gap-4'>
                    <div className='py-4'>
                        <label className="block text-lg font-medium mb-2" htmlFor="input1">
                            businessName
                        </label>
                        <input
                            type="text"
                            id="input1"
                            placeholder='Football'
                            className="block w-[340px] h-[50px] rounded-lg p-2"
                        />
                    </div>
                    <div className='py-4'>
                        <label className="block text-lg font-medium mb-2" htmlFor="input1">
                            businessType
                        </label>
                        <input
                            type="text"
                            id="input1"
                            placeholder='Football'
                            className="block w-[340px] h-[50px] rounded-lg p-2"
                        />
                    </div>
                </div>
                <div className='flex gap-4'>
                    <div>
                        <label className="block text-lg font-medium mb-2" htmlFor="input1">
                            Registered office adress
                        </label>
                        <input
                            type="text"
                            id="input1"
                            placeholder='Football'
                            className="block w-[340px] h-[140px] rounded-lg p-2"
                        />
                    </div>
                    <div>
                        <div>
                            <label className="block text-lg font-medium mb-2" htmlFor="input1">
                                City
                            </label>
                            <input
                                type="text"
                                id="input1"
                                placeholder='Football'
                                className="block w-[340px] h-[50px] rounded-lg p-2"
                            />
                        </div>
                        <div>
                            <label className="block text-lg font-medium mb-2" htmlFor="input1">
                                Postal/Zipcode

                            </label>
                            <input
                                type="text"
                                id="input1"
                                placeholder='Football'
                                className="block w-[340px] h-[50px] rounded-lg p-2"
                            />
                        </div>

                    </div>
                    <div>
                        <div>
                            <label className="block text-lg font-medium mb-2" htmlFor="input1">
                                state
                            </label>
                            <input
                                type="text"
                                id="input1"
                                placeholder='Football'
                                className="block w-[340px] h-[50px] rounded-lg p-2"
                            />
                        </div>
                        <div>
                            <label className="block text-lg font-medium mb-2" htmlFor="input1">
                                Country                            </label>
                            <input
                                type="text"
                                id="input1"
                                placeholder='Football'
                                className="block w-[340px] h-[50px] rounded-lg p-2"
                            />
                        </div>

                    </div>

                </div>

                <hr className="flex-1 border-gray-300 mt-8" />
                <div>
                    <h1 className='text-indigo-700 text-lg font-bold mt-4 '> Warehouse office address</h1>
                    <div className='flex gap-4'>
                        <div className='py-4'>
                            <label className="block text-lg font-medium mb-2" htmlFor="input1">
                                businessName
                            </label>
                            <input
                                type="text"
                                id="input1"
                                placeholder='Football'
                                className="block w-[340px] h-[50px] rounded-lg p-2"
                            />
                        </div>
                        <div className='py-4'>
                            <label className="block text-lg font-medium mb-2" htmlFor="input1">
                                businessType
                            </label>
                            <input
                                type="text"
                                id="input1"
                                placeholder='Football'
                                className="block w-[340px] h-[50px] rounded-lg p-2"
                            />
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <div>
                            <label className="block text-lg font-medium mb-2" htmlFor="input1">
                                Registered office adress
                            </label>
                            <input
                                type="text"
                                id="input1"
                                placeholder='Football'
                                className="block w-[340px] h-[140px] rounded-lg p-2"
                            />
                        </div>
                        <div>
                            <div>
                                <label className="block text-lg font-medium mb-2" htmlFor="input1">
                                    City
                                </label>
                                <input
                                    type="text"
                                    id="input1"
                                    placeholder='Football'
                                    className="block w-[340px] h-[50px] rounded-lg p-2"
                                />
                            </div>
                            <div>
                                <label className="block text-lg font-medium mb-2" htmlFor="input1">
                                    Postal/Zipcode

                                </label>
                                <input
                                    type="text"
                                    id="input1"
                                    placeholder='Football'
                                    className="block w-[340px] h-[50px] rounded-lg p-2"
                                />
                            </div>

                        </div>
                        <div>
                            <div>
                                <label className="block text-lg font-medium mb-2" htmlFor="input1">
                                    state
                                </label>
                                <input
                                    type="text"
                                    id="input1"
                                    placeholder='Football'
                                    className="block w-[340px] h-[50px] rounded-lg p-2"
                                />
                            </div>
                            <div>
                                <label className="block text-lg font-medium mb-2" htmlFor="input1">
                                    Country                            </label>
                                <input
                                    type="text"
                                    id="input1"
                                    placeholder='Football'
                                    className="block w-[340px] h-[50px] rounded-lg p-2"
                                />
                            </div>

                        </div>

                    </div>

                    <hr className="flex-1 border-gray-300 mt-8" />
                </div>
                <h1 className='text-indigo-700 text-lg font-bold mt-4 '> Warehouse office address</h1>
                <div className="flex items-center mt-6 mb-6">
                    <p className="font-medium">SPOC</p>
                    <hr className="flex-1 border-gray-300 ml-4" />
                </div>
                <div>
                    <div className='py-4'>
                        <label className="block text-lg font-medium mb-2" htmlFor="input1">
                            FullName
                        </label>
                        <input
                            type="text"
                            id="input1"
                            placeholder='Football'
                            className="block w-[340px] h-[50px] rounded-lg p-2"
                        />
                    </div>
                    <div className='flex gap-4'>
                        <div className='py-4'>
                            <label className="block text-lg font-medium mb-2" htmlFor="input1">
                                Mobile
                            </label>
                            <input
                                type="text"
                                id="input1"
                                placeholder='Football'
                                className="block w-[340px] h-[50px] rounded-lg p-2"
                            />
                        </div>
                        <div className='py-4'>
                            <label className="block text-lg font-medium mb-2" htmlFor="input1">
                                Email
                            </label>
                            <input
                                type="text"
                                id="input1"
                                placeholder='Football'
                                className="block w-[340px] h-[50px] rounded-lg p-2"
                            />
                        </div>
                    </div>
                </div>
                <h1 className='text-indigo-700 text-lg font-bold mt-4 '> Warehouse office address</h1>
                <div className="flex items-center mt-6 mb-6">
                    <p className="font-medium">SPOC</p>
                    <hr className="flex-1 border-gray-300 ml-4" />
                </div>
                <div>
                    <div className='py-4'>
                        <label className="block text-lg font-medium mb-2" htmlFor="input1">
                            FullName
                        </label>
                        <input
                            type="text"
                            id="input1"
                            placeholder='Football'
                            className="block w-[340px] h-[50px] rounded-lg p-2"
                        />
                    </div>
                    <div className='flex gap-4'>
                        <div className='py-4'>
                            <label className="block text-lg font-medium mb-2" htmlFor="input1">
                                Mobile
                            </label>
                            <input
                                type="text"
                                id="input1"
                                placeholder='Football'
                                className="block w-[340px] h-[50px] rounded-lg p-2"
                            />
                        </div>
                        <div className='py-4'>
                            <label className="block text-lg font-medium mb-2" htmlFor="input1">
                                Email
                            </label>
                            <input
                                type="text"
                                id="input1"
                                placeholder='Football'
                                className="block w-[340px] h-[50px] rounded-lg p-2"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex items-center mt-6 mb-6">
                    <p className="font-medium">Warehouse</p>
                    <hr className="flex-1 border-gray-300 ml-4" />
                </div>
                <div>
                    <div className='py-4'>
                        <label className="block text-lg font-medium mb-2" htmlFor="input1">
                            FullName
                        </label>
                        <input
                            type="text"
                            id="input1"
                            placeholder='Football'
                            className="block w-[340px] h-[50px] rounded-lg p-2"
                        />
                    </div>
                    <div className='flex gap-4'>
                        <div className='py-4'>
                            <label className="block text-lg font-medium mb-2" htmlFor="input1">
                                Mobile
                            </label>
                            <input
                                type="text"
                                id="input1"
                                placeholder='Football'
                                className="block w-[340px] h-[50px] rounded-lg p-2"
                            />
                        </div>
                        <div className='py-4'>
                            <label className="block text-lg font-medium mb-2" htmlFor="input1">
                                Email
                            </label>
                            <input
                                type="text"
                                id="input1"
                                placeholder='Football'
                                className="block w-[340px] h-[50px] rounded-lg p-2"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex items-center mt-6 mb-6">
                    <p className="font-medium">Account</p>
                    <hr className="flex-1 border-gray-300 ml-4" />
                </div>
                <div>
                    <div className='py-4'>
                        <label className="block text-lg font-medium mb-2" htmlFor="input1">
                            FullName
                        </label>
                        <input
                            type="text"
                            id="input1"
                            placeholder='Football'
                            className="block w-[340px] h-[50px] rounded-lg p-2"
                        />
                    </div>
                    <div className='flex gap-4'>
                        <div className='py-4'>
                            <label className="block text-lg font-medium mb-2" htmlFor="input1">
                                Mobile
                            </label>
                            <input
                                type="text"
                                id="input1"
                                placeholder='Football'
                                className="block w-[340px] h-[50px] rounded-lg p-2"
                            />
                        </div>
                        <div className='py-4'>
                            <label className="block text-lg font-medium mb-2" htmlFor="input1">
                                Email
                            </label>
                            <input
                                type="text"
                                id="input1"
                                placeholder='Football'
                                className="block w-[340px] h-[50px] rounded-lg p-2"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex items-center mt-6 mb-6">
                    <p className="font-medium">Escalation-1</p>
                    <hr className="flex-1 border-gray-300 ml-4" />
                </div>
                <div>
                    <div className='py-4'>
                        <label className="block text-lg font-medium mb-2" htmlFor="input1">
                            FullName
                        </label>
                        <input
                            type="text"
                            id="input1"
                            placeholder='Football'
                            className="block w-[340px] h-[50px] rounded-lg p-2"
                        />
                    </div>
                    <div className='flex gap-4'>
                        <div className='py-4'>
                            <label className="block text-lg font-medium mb-2" htmlFor="input1">
                                Mobile
                            </label>
                            <input
                                type="text"
                                id="input1"
                                placeholder='Football'
                                className="block w-[340px] h-[50px] rounded-lg p-2"
                            />
                        </div>
                        <div className='py-4'>
                            <label className="block text-lg font-medium mb-2" htmlFor="input1">
                                Email
                            </label>
                            <input
                                type="text"
                                id="input1"
                                placeholder='Football'
                                className="block w-[340px] h-[50px] rounded-lg p-2"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex items-center mt-6 mb-6">
                    <p className="font-medium">Escalation-2</p>
                    <hr className="flex-1 border-gray-300 ml-4" />
                </div>
                <div>
                    <div className='py-4'>
                        <label className="block text-lg font-medium mb-2" htmlFor="input1">
                            FullName
                        </label>
                        <input
                            type="text"
                            id="input1"
                            placeholder='Football'
                            className="block w-[340px] h-[50px] rounded-lg p-2"
                        />
                    </div>
                    <div className='flex gap-4'>
                        <div className='py-4'>
                            <label className="block text-lg font-medium mb-2" htmlFor="input1">
                                Mobile
                            </label>
                            <input
                                type="text"
                                id="input1"
                                placeholder='Football'
                                className="block w-[340px] h-[50px] rounded-lg p-2"
                            />
                        </div>
                        <div className='py-4'>
                            <label className="block text-lg font-medium mb-2" htmlFor="input1">
                                Email
                            </label>
                            <input
                                type="text"
                                id="input1"
                                placeholder='Football'
                                className="block w-[340px] h-[50px] rounded-lg p-2"
                            />
                        </div>
                    </div>
                </div>
                <hr className="flex-1 border-gray-300 mt-4 mb-4" />

                <h1 className='text-indigo-700 text-lg font-bold mt-4 '> Company OverView</h1>

                <div>
                    <label className="block text-lg font-medium mb-2 mt-4" htmlFor="input1">
                        General Details of Services
                    </label>
                    <input
                        type="text"
                        id="input1"
                        placeholder='Football'
                        className="block w-[640px] h-[160px] rounded-lg p-2"
                    />
                </div>

                <div className='flex gap-4'>
                    <div className='py-4'>
                        <label className="block text-lg font-medium mb-2" htmlFor="input1">
                            Establishment Date
                        </label>
                        <input
                            type="text"
                            id="input1"
                            placeholder='Enter here'
                            className="block w-[340px] h-[50px] rounded-lg p-2"
                        />
                    </div>

                    <div className="relative w-[330px] h-[30px] mt-4 rounded-xl">
                        <label className="block text-lg font-medium mb-2" htmlFor="input1">
                            MSME Certificate upload
                        </label>
                        <input
                            type="file"
                            accept=".pdf"
                            id="pdf-file-picker"

                            className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                        <button
                            htmlFor="pdf-file-picker"
                            className="flex items-center justify-center w-full h-[50px] border-gray-300 rounded px-4 py-2 bg-white text-gray-400"
                            onClick={() => document.getElementById('pdf-file-picker').click()}
                        >Upload PDF File
                        </button>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <div className='py-4'>
                        <label className="block text-lg font-medium mb-2" htmlFor="input1">
                            FSSAI No
                        </label>
                        <input
                            type="text"
                            id="input1"
                            placeholder='Enter here'
                            className="block w-[340px] h-[50px] rounded-lg p-2"
                        />
                    </div>

                    <div className="relative w-[330px] h-[30px] mt-4 rounded-xl">
                        <label className="block text-lg font-medium mb-2" htmlFor="input1">
                            FSSAI Lience
                        </label>
                        <input
                            type="file"
                            accept=".pdf"
                            id="pdf-file-picker"
                            placeholder='Football'

                            className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                        <button
                            htmlFor="pdf-file-picker"
                            className="flex items-center justify-center w-full h-[50px] border-gray-300 rounded px-4 py-2 bg-white text-gray-400"
                            onClick={() => document.getElementById('pdf-file-picker').click()}
                        >Upload PDF File
                        </button>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <div className='py-4'>
                        <label className="block text-lg font-medium mb-2" htmlFor="input1">
                            GST No
                        </label>
                        <input
                            type="text"
                            id="input1"
                            placeholder='enter here'
                            className="block w-[340px] h-[50px] rounded-lg p-2"
                        />
                    </div>

                    <div className="relative w-[330px] h-[30px] mt-4 rounded-xl">
                        <label className="block text-lg font-medium mb-2" htmlFor="input1">
                            GST upload
                        </label>
                        <input
                            type="file"
                            accept=".pdf"
                            id="pdf-file-picker"
                            placeholder='Football'

                            className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                        <button
                            htmlFor="pdf-file-picker"
                            className="flex items-center justify-center w-full h-[50px] border-gray-300 rounded px-4 py-2 bg-white text-gray-400"
                            onClick={() => document.getElementById('pdf-file-picker').click()}
                        >Upload PDF File
                        </button>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <div className='py-4'>
                        <label className="block text-lg font-medium mb-2" htmlFor="input1">
                            Owner Name
                        </label>
                        <input
                            type="text"
                            id="input1"
                            placeholder='enter here'
                            className="block w-[340px] h-[50px] rounded-lg p-2"
                        />
                    </div>

                    <div className="relative w-[330px] h-[30px] mt-4 rounded-xl">
                        <label className="block text-lg font-medium mb-2" htmlFor="input1">
                            Owner PAN
                        </label>
                        <input
                            type="file"
                            accept=".pdf"
                            id="pdf-file-picker"
                            placeholder='Football'

                            className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                        <button
                            htmlFor="pdf-file-picker"
                            className="flex items-center justify-center w-full h-[50px] border-gray-300 rounded px-4 py-2 bg-white text-gray-400"
                            onClick={() => document.getElementById('pdf-file-picker').click()}
                        >Upload PDF File
                        </button>
                    </div>
                </div>
                <div className='flex gap-4'>
                    <div className='py-4'>
                        <label className="block text-lg font-medium mb-2" htmlFor="input1">
                            Pan No
                        </label>
                        <input
                            type="text"
                            id="input1"
                            placeholder='Enter here'
                            className="block w-[340px] h-[50px] rounded-lg p-2"
                        />
                    </div>

                    <div className="relative w-[330px] h-[30px] mt-4 rounded-xl">
                        <label className="block text-lg font-medium mb-2" htmlFor="input1">
                            Pan upload
                        </label>
                        <input
                            type="file"
                            accept=".pdf"
                            id="pdf-file-picker"
                            placeholder='Football'

                            className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                        <button
                            htmlFor="pdf-file-picker"
                            className="flex items-center justify-center w-full h-[50px] border-gray-300 rounded px-4 py-2 bg-white text-gray-400"
                            onClick={() => document.getElementById('pdf-file-picker').click()}
                        >Upload PDF File
                        </button>
                    </div>

                </div>
                <div className='flex gap-4'>
                    <div className="relative w-[330px] h-[30px] mt-4 rounded-xl">
                        <label className="block text-lg font-medium mb-2" htmlFor="input1">
                            Owner Aadhar
                        </label>
                        <input
                            type="file"
                            accept=".pdf"
                            id="pdf-file-picker"
                            placeholder='Football'

                            className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                        <button
                            htmlFor="pdf-file-picker"
                            className="flex items-center justify-center w-full h-[50px] border-gray-300 rounded px-4 py-2 bg-white text-gray-400"
                            onClick={() => document.getElementById('pdf-file-picker').click()}
                        >Upload PDF File
                        </button>
                    </div>

                    <div className="relative w-[330px] h-[30px] mt-4 rounded-xl">
                        <label className="block text-lg font-medium mb-2" htmlFor="input1">
                            Certificate of Incorporation
                        </label>
                        <input
                            type="file"
                            accept=".pdf"
                            id="pdf-file-picker"
                            placeholder='Football'

                            className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                        <button
                            htmlFor="pdf-file-picker"
                            className="flex items-center justify-center w-full h-[50px] border-gray-300 rounded px-4 py-2 bg-white text-gray-400"
                            onClick={() => document.getElementById('pdf-file-picker').click()}
                        >Upload PDF File
                        </button>
                    </div>
                </div>
                {/* <div className='mt-4'>

                    <hr className="flex-1 border-gray-300 mt-4 mb-4" />

                </div> */}
                <div className='flex gap-4 mt-24'>

                    <div className='py-4'>
                        <label className="block text-lg font-medium mb-2" htmlFor="input1">
                            Account Name
                        </label>
                        <input
                            type="text"
                            id="input1"
                            placeholder='Ente here'
                            className="block w-[340px] h-[50px] rounded-lg p-2"
                        />
                    </div>
                    <div className='py-4'>
                        <label className="block text-lg font-medium mb-2" htmlFor="input1">
                            Account Number
                        </label>
                        <input
                            type="text"
                            id="input1"
                            placeholder='Enter here'
                            className="block w-[340px] h-[50px] rounded-lg p-2"
                        />
                    </div>
                </div>
                <div className='flex gap-4'>
                    <div className='py-4'>
                        <label className="block text-lg font-medium mb-2" htmlFor="input1">
                            Bank Name
                        </label>
                        <input
                            type="text"
                            id="input1"
                            placeholder='Enter here'
                            className="block w-[340px] h-[50px] rounded-lg p-2"
                        />
                    </div>
                    <div className='py-4'>
                        <label className="block text-lg font-medium mb-2" htmlFor="input1">
                            IFSC Code
                        </label>
                        <input
                            type="text"
                            id="input1"
                            placeholder='Enter here'
                            className="block w-[340px] h-[50px] rounded-lg p-2"
                        />
                    </div>
                </div>
                <div className='py-4'>
                    <label className="block text-lg font-medium mb-2" htmlFor="input1">
                        Branch
                    </label>
                    <input
                        type="text"
                        id="input1"
                        placeholder='Enter here'
                        className="block w-[340px] h-[50px] rounded-lg p-2"
                    />
                </div>
                <div className='flex gap-4'>

                    <div className="relative w-[330px] h-[30px] mt-4 rounded-xl">
                        <label className="block text-lg font-medium mb-2" htmlFor="input1">
                            Upload Cancel cheque
                        </label>
                        <input
                            type="file"
                            accept=".pdf"
                            id="pdf-file-picker"
                            placeholder='Football'

                            className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                        <button
                            htmlFor="pdf-file-picker"
                            className="flex items-center justify-center w-full h-[50px] border-gray-300 rounded px-4 py-2 bg-white text-gray-400"
                            onClick={() => document.getElementById('pdf-file-picker').click()}
                        >Upload PDF File
                        </button>
                        </div>

                        <div className="relative w-[330px] h-[30px] mt-4 rounded-xl">
                            <label className="block text-lg font-medium mb-2" htmlFor="input1">
                                Upload Signature
                            </label>
                            <input
                                type="file"
                                accept=".pdf"
                                id="pdf-file-picker"
                                placeholder='Football'

                                className="absolute inset-0 opacity-0 cursor-pointer"
                            />
                            <button
                                htmlFor="pdf-file-picker"
                                className="flex items-center justify-center w-full h-[50px] border-gray-300 rounded px-4 py-2 bg-white text-gray-400"
                                onClick={() => document.getElementById('pdf-file-picker').click()}
                            >Upload PDF File
                            </button>
                        </div>
                    </div>
                </div>
        </Layout>
    )
}

export default VendorBusinessdetails