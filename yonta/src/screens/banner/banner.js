import React, { useState } from "react";
import { FaSave, FaPlus } from "react-icons/fa";
import Layout from '../../Layout';
import { useNavigate } from "react-router-dom";
import BannerCardModel from "../../components/Modals/bannerCardModel";
import BannerModal from "../../components/Modals/bannerModel";
const Banner = () => {
    const navigate = useNavigate();
    const [isModalOpen, setModalOpen] = useState(false);

    const handleAddUserClick = () => {
        setModalOpen(true); // Open the modal when "Add User" is clicked
    };

    const handleNavigateToBlog = () => {
        setModalOpen(false); // Close the modal
        navigate('/blogs'); // Navigate to Blog page
    };

    const handleNavigateToIngredients = () => {
        setModalOpen(false); // Close the modal
        navigate('/ingredients'); // Navigate to Ingredients page
    };
    const handleAddProfileClick = () => {
        navigate('/editbanner'); // Navigate to Ingredients page
    };

    return (
        <Layout>
            <div className="min-h-screen ">
                <div className="flex justify-between">
                    <h3 className="text-2xl font-bold">
                        <span className="text-gray-500"> Sections</span>
                    </h3>
                    <button
                        onClick={handleAddUserClick}
                        className=" bg-blue text-white border rounded-xl flex px-4 py-2"
                    >
                        Add User
                    </button>
                </div>

                <div className="flex space-x-4 mt-4">
                    <button className="bg-blue text-white border px-4 py-2 rounded-xl">
                        Ecommerce
                    </button>

                    <button className="text-blue border rounded-xl flex px-4 py-2"
                                            onClick={handleAddProfileClick}
>

                        User
                    </button>
                </div>

                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">
                        <span className="text-gray-500"> Blog Page</span>
                    </h3>
                </div>

                {/* Main Content */}
                <div className="flex ">
                    <div className="w-full pr-[24px] ">
                        <div className="grid grid-cols-3 gap-3  ">
                            <BannerCardModel title="Thigh" imageSrc="images/Image (1).png" />
                            <BannerCardModel title="Thigh" imageSrc="images/Image (1).png" />
                            <BannerCardModel title="Thigh" imageSrc="images/Image (1).png" />
                            <BannerCardModel title="Thigh" imageSrc="images/Image (1).png" />
                            <BannerCardModel title="Thigh" imageSrc="images/Image (1).png" />
                        </div>
                    </div>
                </div>
                <hr className="border border-gray-300 mt-4" />
            </div>

            {/* Ingredients Section */}
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">
                    <span className="text-gray-500"> Ingredients</span>
                </h3>
            </div>

            <div className="flex ">
                <div className="w-full pr-[24px] ">
                    <div className="grid grid-cols-3 gap-3  ">
                        <BannerCardModel title="Thigh" imageSrc="images/Image (1).png" />
                        <BannerCardModel title="Thigh" imageSrc="images/Image (1).png" />
                        <BannerCardModel title="Thigh" imageSrc="images/Image (1).png" />
                    </div>
                </div>
            </div>
            <hr className="border border-gray-300 mt-4" />

            {/* Modal for Add User */}
            {isModalOpen && (
                <BannerModal onClose={() => setModalOpen(false)} className="w-[480px]">
                    <h2 className="text-lg font-bold mb-4">Select One Option</h2>
                    <div className="space-y-4 py-2">
                        {/* Blog Option */}
                        <div
                            className="p-2 border rounded-lg cursor-pointer w-[480px] bg-backgroundgray"
                            onClick={handleNavigateToBlog}
                        >
                            <h3 className="text-xl font-bold">Blog</h3>
                            <p>Navigate to Blog Page</p>
                        </div>

                        {/* Ingredients Option */}
                        <div
                            className="p-2 border rounded-lg cursor-pointer bg-backgroundgray"
                            onClick={handleNavigateToIngredients}
                        >
                            <h3 className="text-xl font-bold">Ingredients</h3>
                            <p>Navigate to Ingredients Page</p>
                        </div>
                    </div>

                    {/* Cancel Button */}
                    <div className="flex justify-end mt-4">
                        <button
                            onClick={() => setModalOpen(false)}
                            className="bg-green text-white px-4 py-2 rounded-lg"
                        >
                            Cancel
                        </button>
                    </div>
                </BannerModal>
            )}

        </Layout>
    );
};

export default Banner;
