import React, { useState, useRef } from 'react';
import { FaEdit, FaTrash, FaPlus, FaSave, FaUpload } from 'react-icons/fa';
import Layout from '../../Layout'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa';

const AddBlog = () => {
    const [image, setImage] = useState(null);
    const fileInputRef = useRef(null);
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    // Handle image selection
    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImage(URL.createObjectURL(e.target.files[0]));
        }
    };


    return (
        <Layout>
            <div className="p-4 ">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold">
                        <span className="text-gray-500 font-normal">Blog</span>
                        <span className="text-black"> &gt;Add Blog</span>
                    </h3>

                </div>
                <div className='flex justify-start text-start mr-60 gap-6  '>
                    {/* Image Picker with Icon */}
                    <div className="mb-2  mt-2">
                        <label htmlFor="image-upload" className="cursor-pointer bg-white flex flex-col items-center justify-center w-[243px] h-[243px] rounded-lg hover:bg-gray-100">
                            <FaUpload className="text-3xl text-gray-500 mb-2" />
                            <span className="text-gray-500">Upload image</span>
                            <input
                                id="image-upload"
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="hidden"
                            />
                        </label>
                    </div>
                    <div>

                        {/* First Input Field */}
                        <div className="mb-4">
                            <label className="block  font-semibold mb-2" htmlFor="input1">
                                Heading
                            </label>
                            <input
                                type="text"
                                id="input1"
                                placeholder='Football'
                                className="block w-[488px] h-[50px] rounded-lg p-2"
                            />
                        </div>

                        {/* Two Input Fields */}
                        <label className="block  font-semibold " htmlFor="input3">
                                    Date
                                </label>
                        <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    value={selectedDate ? selectedDate.toLocaleDateString() : ''}
                                    placeholder="Select date"
                                    className="border border-gray-300 rounded-lg py-2 px-3 w-full"
                                    readOnly
                                />
                                <div className="absolute right-3">
                                    <FaCalendarAlt className="text-gray-500 cursor-pointer" />
                                </div>
                                <DatePicker
                                    selected={selectedDate}
                                    onChange={handleDateChange}
                                    className="absolute opacity-0"
                                    popperPlacement="bottom-end"
                                    dateFormat="dd/MM/yyyy"
                                />
                            </div>
                           

                        </div>
                    </div>
                </div>
                <h4 className='mt-4 font-semibold'>Author Details</h4>

                <div className='flex justify-start text-start mr-60 gap-6  '>
                    {/* Image Picker with Icon */}
                    <div className="mb-2  mt-2">
                        <label htmlFor="image-upload" className="cursor-pointer bg-white flex flex-col items-center justify-center w-[140px] h-[140px] rounded-lg hover:bg-gray-100">
                            <FaUpload className="text-3xl text-gray-500 mb-2" />
                            <span className="text-gray-500">Upload image</span>
                            <input
                                id="image-upload"
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="hidden"
                            />
                        </label>
                    </div>
                    <div>

                        {/* First Input Field */}
                        <div className="mb-4">
                            <label className="block font-semibold mb-2" htmlFor="input1">
                                Author Name
                            </label>
                            <input
                                type="text"
                                id="input1"
                                placeholder='Football'
                                className="block w-[188px] h-[50px] rounded-lg p-2"
                            />
                        </div>
                        </div>
                        </div>
                <div className='mb-4 mt-4'>
                    <label className="block font-semibold mb-2 ">
                        Content
                    </label>
                    <input
                        type="text"
                        id="input1"
                        placeholder='Enter here'
                        className=" w-[751px] h-[178px] rounded-lg p-2"
                    />
                </div>
               
                <h4 className='mt-4 font-semibold'>Banners</h4>

                <div className='flex gap-3'>
                    <div className="mb-2  mt-2">
                        <label htmlFor="image-upload" className="cursor-pointer bg-white flex flex-col items-center justify-center w-[351px] h-[180px]  rounded-lg hover:bg-gray-100">
                            <FaPlus className="text-3xl text-gray-500 mb-2" />
                            <span className="text-gray-500">Add more</span>
                            <input
                                id="image-upload"
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="hidden"
                            />
                        </label>
                    </div>
                    <div
                        className="flex flex-col items-center rounded-xl bg-white shadow-md h-[175px] w-[351px] mt-2"
                    >
                        <img
                            src="/images/hero.png"

                            className="object-cover rounded-xl mb-2 h-[180px] w-[351px]"
                        />
                        <div className="flex space-x-2 ml-60">
                            <div className="bg-[#FB5458] p-2 rounded-lg" >
                                <FaTrash className="text-white cursor-pointer" />
                            </div>
                            <div className="flex bg-blue p-2 rounded-lg gap-1">
                                <FaEdit className="text-white cursor-pointer" />
                                <p className='text-white text-xs'>Edit</p>
                            </div>
                        </div>
                    </div>
                </div>
               
                <div className="flex justify-end">
                    <button className="bg-[#5A4BDA] text-white px-6 py-3 rounded-lg mb-4">
                        Save & Upload
                    </button>
                </div>
            </div>
        </Layout>
    );
};

export default AddBlog;
