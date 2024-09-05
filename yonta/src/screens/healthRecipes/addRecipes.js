import React, { useState, useRef } from 'react';
import { FaEdit, FaTrash, FaPlus, FaSave, FaUpload } from 'react-icons/fa';
import Layout from '../../Layout'

const AddRecipes = () => {
    const [image, setImage] = useState(null);
    const fileInputRef = useRef(null);

    // Handle image selection
    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImage(URL.createObjectURL(e.target.files[0]));
        }
    };
    const images = [
        { src: '/images/pngwing 4.png', name: 'Egg' },
        { src: '/images/pngwing 5.png', name: 'Lemon' },
        { src: '/images/pngwing 6.png', name: 'Milk' },
        { src: '/images/pngwing 7.png', name: 'Bread' },
        { src: '/images/pngwing 8.png', name: 'Tamato' },
        { src: '/images/pngwing9.png', name: 'Avacado' },
    ];

    return (
        <Layout>
            <div className="p-4 ">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold">
                        <span className="text-gray-500 font-normal">HealthyRecipes</span>
                        <span className="text-black"> &gt;Add healthyRecipes</span>
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
                                    Services
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
                                    Calories
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
                        <div className="mb-4 grid grid-cols-1 sm:grid-cols-4 gap-4">
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
                            <div>
                                <label className="block text-lg font-medium mb-2" htmlFor="input6">
                                    Fiber
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

                <div className="p-4 max-w-6xl rounded-xl bg-white w-[500px] h-[155px] ">
                    <div className='flex justify-between'>
                        <h4 className="text-lg font-semibold mb-4">Ingredients</h4>
                        <div className="flex w-14 h-8 bg-blue p-2 rounded-lg gap-1">
                            <FaEdit className="text-white cursor-pointer" />
                            <p className='text-white text-xs'>Edit</p>
                        </div>
                    </div>
                    {/* Grid of images with their names below */}
                    <div className="grid grid-cols-6 gap-4  ">
                        {images.map((image, index) => (
                            <div key={index} className="text-center">
                                <div className="h-[60px] w-[60px] rounded-lg flex items-center justify-center overflow-hidden">
                                    <img src={image.src} alt={`image-${index}`} className="h-full w-full object-cover" />
                                </div>
                                <p className="mt-2 text-sm">{image.name}</p>
                            </div>
                        ))}
                    </div>
                </div>


                <div className='mt-6'>
                    <label className="block text-lg font-medium mb-2 ">
                        Directions
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

export default AddRecipes;
