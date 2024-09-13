import React, { useState, useRef } from 'react';
import { FaEdit, FaTrash, FaPlus, FaSave, FaUpload } from 'react-icons/fa';
import Layout from '../../Layout';
import blueheader from '../../assets/blueheader.PNG'

const AddAdmin = () => {
    const [image, setImage] = useState(null);
    const fileInputRef = useRef(null);

    const [formData, setFormData] = useState({
        userName: '',
        emailId: '',
        password: '',
        productAccess: {
            analytics: false,
            blogs: false,
            ecommerce: false,
            couponsOffers: false,
            vendors: false
        },
        imageFile: null // Adding imageFile to the formData state
    });

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handle checkbox changes
    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            productAccess: {
                ...prevState.productAccess,
                [name]: checked
            }
        }));
    };

    // Handle image selection and preview, store image file in formData
    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const selectedImage = e.target.files[0];
            setImage(URL.createObjectURL(selectedImage)); // Preview the image
            setFormData((prevState) => ({
                ...prevState,
                imageFile: selectedImage // Store the image file in formData
            }));
        }
    };

    // Handle form submission and log the form data
    const handleSave = () => {
        const data = new FormData(); // Create FormData object for sending file + text data

        // Append text fields
        data.append('userName', formData.userName);
        data.append('emailId', formData.emailId);
        data.append('password', formData.password);

        // Append product access checkboxes
        Object.keys(formData.productAccess).forEach((key) => {
            data.append(`productAccess[${key}]`, formData.productAccess[key]);
        });

        // Append image file if present
        if (formData.imageFile) {
            data.append('imageFile', formData.imageFile);
        }

        // Log the form data (this is where you'd send it to an API)
        console.log('Form Data:', formData);
        console.log('FormData object:', data);

        // If you're submitting to an API, use something like:
        // fetch('API_URL', {
        //   method: 'POST',
        //   body: data,
        // });
    };

    return (
        <Layout>
                 <img src={blueheader} alt="Profile" className="w-[1663px] h-[150px] mr-4" />

            <div className="p-4">
                <h4 className="text-[16px] mt-2 text-blacktext font-bold pb-1">User Image</h4>
                <div className="flex justify-start text-start mr-60 gap-6">
                    <div className="mb-2 mt-2">
                        <label htmlFor="image-upload" className="cursor-pointer bg-white flex flex-col items-center justify-center w-[148px] h-[148px] rounded-[10px]">
                            {image ? (
                                <img src={image} alt="User" className="w-[148px] h-[148px] rounded-[10px] object-cover" />
                            ) : (
                                <>
                                    <FaUpload className="text-3xl text-gray-500 mb-2" />
                                    <span className="text-gray-500">Upload image</span>
                                </>
                            )}
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
                        <div className="mb-4 h-[80px] w-[363px]">
                            <h4 className="text-[16px] pb-1 text-blacktext font-bold">User Name</h4>
                            <input
                                type="text"
                                name="userName"
                                value={formData.userName}
                                onChange={handleInputChange}
                                placeholder="Enter user name"
                                className="block w-[363px] h-[50px] rounded-[10px] p-2"
                            />
                        </div>

                        <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 w-[800px] gap-[6px]">
                            <div className="mb-4 h-[80px] w-[363px]">
                                <h4 className="text-[16px] text-blacktext font-bold pb-1">Email Id</h4>
                                <input
                                    type="text"
                                    name="emailId"
                                    value={formData.emailId}
                                    onChange={handleInputChange}
                                    placeholder="Enter email"
                                    className="block w-[363px] h-[50px] rounded-[10px] p-2"
                                />
                            </div>
                            <div className="mb-4 h-[80px] w-[363px]">
                                <h4 className="text-[16px] text-blacktext font-bold pb-1">Password</h4>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    placeholder="Enter password"
                                    className="block w-[363px] h-[50px] rounded-[10px] p-2"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Product Access</label>
                    <div className="w-[517px] h-[190px] rounded-[15px] bg-white px-3 py-2">
                        {Object.entries(formData.productAccess).map(([key, value]) => (
                            <div key={key} className="flex items-center gap-2 h-[24px] mb-2">
                                <input
                                    type="checkbox"
                                    id={key}
                                    name={key}
                                    checked={value}
                                    onChange={handleCheckboxChange}
                                    className="w-[14px] h-[14px] border-[1px] border-[#5D4CFF] rounded-[4px]"
                                />
                                <label htmlFor={key} className="text-[14px] leading-[24px] font-normal text-[#030229]">
                                    {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-end gap-2 mt-6 mb-4">
                    <button
                        onClick={handleSave}
                        className="bg-textgreen text-white w-[100.44px] h-[43px] rounded-lg flex items-center justify-center"
                    >
                        <FaSave className="mr-2" />
                        Save
                    </button>
                </div>
            </div>
        </Layout>
    );
};

export default AddAdmin;
