import React, { useState, useRef } from 'react';
import { FaEdit, FaTrash, FaPlus, FaSave, FaUpload } from 'react-icons/fa';
import Layout from '../../Layout'

const AddIngredient = () => {
    const [image, setImage] = useState(null);
    const fileInputRef = useRef(null);

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
                        <span className="text-gray-500 font-normal">Ingredient</span>
                        <span className="text-black"> &gt;Add Ingredient</span>
                    </h3>

                </div>
                <h4>Ingredient image</h4>
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
                            <label className="block text-lg font-medium mb-2" htmlFor="input1">
                                Ingredient name
                            </label>
                            <input
                                type="text"
                                id="input1"
                                placeholder='Football'
                                className="block w-[488px] h-[50px] rounded-lg p-2"
                            />
                        </div>

                        {/* Two Input Fields */}
                        <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-lg font-medium mb-2" htmlFor="input2">
                                    Qunatity
                                </label>
                                <input
                                    type="text"
                                    id="input2"
                                    placeholder='Enter here'
                                    className="block w-[110px] h-[50px]  rounded-lg p-2"
                                />
                            </div>
                            <div>
                                <label className="block text-lg font-medium mb-2" htmlFor="input3">
                                    Kcal
                                </label>
                                <input
                                    type="text"
                                    id="input3"
                                    placeholder='Enter here'
                                    className="block w-[110px] h-[50px] rounded-lg p-2"
                                />
                            </div>
                        </div>

                        {/* Three Input Fields */}
                        <div className="mb-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-lg font-medium mb-2" htmlFor="input4">
                                    Fats
                                </label>
                                <input
                                    type="text"
                                    id="input4"
                                    placeholder='Enter here'

                                    className="block w-[110px] h-[50px] rounded-lg p-2"
                                />
                            </div>
                            <div>
                                <label className="block text-lg font-medium mb-2" htmlFor="input5">
                                    Protien
                                </label>
                                <input
                                    type="text"
                                    id="input5"
                                    placeholder='Enter here'

                                    className="block w-[110px] h-[50px]  rounded-lg p-2"
                                />
                            </div>
                            <div>
                                <label className="block text-lg font-medium mb-2" htmlFor="input6">
                                    Carbs
                                </label>
                                <input
                                    type="text"
                                    id="input6"
                                    placeholder='Enter here'

                                    className="block w-[110px] h-[50px] rounded-lg p-2"
                                />
                            </div>

                        </div>
                    </div>
                </div>
                <div className='mb-4'>
                    <label className="block text-lg font-medium mb-2 ">
                        Ingredient name
                    </label>
                    <input
                        type="text"
                        id="input1"
                        placeholder='Enter here'
                        className=" w-[751px] h-[178px] rounded-lg p-2"
                    />
                </div>
                <div className='mt-4'>
                    <label className="block text-lg font-medium mb-2 ">
                        Source
                    </label>
                    <input
                        type="text"
                        id="input1"
                        placeholder='Enter here'
                        className=" w-[351px] h-[178px] rounded-lg p-2"
                    />
                </div>
                <div className='gap-4 mt-6'>
                <label className="block text-lg font-medium mb-2" htmlFor="input1">
                    Top feature & benefits
                </label>
                <input
                    type="text"
                    id="input1"
                    placeholder='Support weight management'
                    className="block w-[351px] h-[50px] rounded-lg p-2 mb-4"
                />

                <input
                    type="text"
                    id="input1"
                    placeholder='Support weight management'
                    className="block w-[351px] h-[50px] rounded-lg p-2 mb-4"
                />

                <input
                    type="text"
                    id="input1"
                    placeholder=''
                    className="block w-[351px] h-[50px] rounded-lg p-2 mb-4"
                />
                </div>
                <h4>Ingredient image</h4>

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
                <div className='mt-6'>
                    <label className="block text-lg font-medium mb-2 ">
                        Summary
                    </label>
                    <input
                        type="text"
                        id="input1"
                        placeholder='Enter here'
                        className=" w-[751px] h-[259px] rounded-lg p-2"
                    />
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

export default AddIngredient;
