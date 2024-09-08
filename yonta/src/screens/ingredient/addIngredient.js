import React, { useState, useRef, useEffect } from "react";
import { FaEdit, FaTrash, FaPlus, FaSave, FaUpload } from "react-icons/fa";
import Layout from "../../Layout";
import { useLocation, useNavigate } from "react-router-dom";
import imageCompression from 'browser-image-compression';
import axios from "axios";
import { BASEURL } from "../../utils/constant";
const AddIngredient = () => {
 
  const { state } = useLocation();
  const navigate = useNavigate();
  const [ingredientData, setIngredientData] = useState({
    id:'',
    name: "",
    qty: "",
    weight: "",
    kCal: "",
    protein: "",
    fat: "",
    carbs: "",
    fiber: "",
    introduction: "",
    howDoesItWork: "",
    source: "",
    benefits: ["", "", ""],
    banners: [],
    image: null,
  });
 
  console.log("hello Idata", state);

  useEffect(() => {
    if (state && state.ingredient) {
      const { ingredient } = state;
      // Populate the form fields with the passed data
      setIngredientData({
        id: ingredient.id,
        name: ingredient.name || "",
        qty: ingredient.qty || "",
        weight: ingredient.weight || "",
        kCal: ingredient.kCal || "",
        protein: ingredient.protein || "",
        fat: ingredient.fat || "",
        carbs: ingredient.carbs || "",
        fiber: ingredient.fiber || "",
        introduction: ingredient.introduction || "",
        howDoesItWork: ingredient.howDoesItWork || "",
        source: ingredient.source || "",
        benefits: ingredient.benefits || ["", "", ""],
        banners: ingredient.banners || [],
        image: ingredient.image || null,
      });
    }
  }, [state]);
  // Handle image selection
  const handleInputChange = (e) => {
    setIngredientData({
      ...ingredientData,
      [e.target.name]: e.target.value,
    });
  };
  const handleDeleteImage = (indexToDelete) => {
    // Create a new array without the deleted image
    const updatedBanners = ingredientData.banners.filter(
      (_, index) => index !== indexToDelete
    );

    // Update the state with the new banners array
    setIngredientData({
      ...ingredientData,
      banners: updatedBanners,
    });
  };

  const shortenUrl = async (longUrl) => {
    const bitlyToken = 'YOUR_BITLY_ACCESS_TOKEN'; // Replace with your Bitly access token
    
    try {
      const response = await axios.post(
        'https://api-ssl.bitly.com/v4/shorten',
        { long_url: longUrl },
        {
          headers: {
            Authorization: `Bearer ${bitlyToken}`,
            'Content-Type': 'application/json',
          },
        }
      );
      return response.data.link; // This is the shortened URL
    } catch (error) {
      console.error('Error shortening URL:', error);
      return longUrl; // Return the original URL if there's an error
    }
  };
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        // Image compression options
        const options = {
          maxSizeMB: 1, // Set the maximum size in MB
          maxWidthOrHeight: 800, // Set the maximum width or height in pixels
          useWebWorker: true,
        };
  
        // Compress the image
        const compressedFile = await imageCompression(file, options);
  
        // Create a new FileReader to read the compressed image
        const reader = new FileReader();
        reader.onloadend = () => {
          // Update the image state to the compressed image
          setIngredientData((prevData) => ({
            ...prevData,
            image: reader.result,
          }));
        };
        reader.readAsDataURL(compressedFile);
      } catch (error) {
        console.error('Image compression failed:', error);
      }
    }
  };
  const handleSubmit = async () => {
    if (!ingredientData.id && state && state.ingredient) {
      console.error('Ingredient ID is missing.');
      return;
    }
  
    // Shorten the image URL
    const shortenedImageUrl = await shortenUrl(ingredientData.image);
  
    const formattedData = {
      name: ingredientData.name,
      image: shortenedImageUrl,
      weight: ingredientData.weight,
      qty: ingredientData.qty,
      kCal: ingredientData.kCal,
      fat: ingredientData.fat,
      protein: ingredientData.protein,
      carbs: ingredientData.carbs,
      fiber: ingredientData.fiber,
      introduction: ingredientData.introduction,
      source: ingredientData.source,
      benefits: Array.isArray(ingredientData.benefits) ? ingredientData.benefits : [],
      banners: Array.isArray(ingredientData.banners) ? ingredientData.banners : [],
      howDoesItWork: ingredientData.howDoesItWork,
    };
  
    try {
      if (state && state.ingredient) {
        await axios.put(
          `${BASEURL}ingredients/${ingredientData.id}`,
          formattedData,
          {
            headers: { VerifyMe: 'RGVlcGFrS3VzaHdhaGE5Mzk5MzY5ODU0' },
          }
        );
      } else {
        await axios.post(`${BASEURL}ingredients`, formattedData, {
          headers: { VerifyMe: 'RGVlcGFrS3VzaHdhaGE5Mzk5MzY5ODU0' },
        });
      }
      navigate('/ingredients');
    } catch (error) {
      console.error('Error submitting ingredient:', error);
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
        <div className="flex justify-start text-start mr-60 gap-6  ">
          <div className="mb-2 mt-2">
            <label
              htmlFor="image-upload"
              className="cursor-pointer bg-white flex flex-col items-center justify-center w-[243px] h-[243px] rounded-lg hover:bg-gray-100"
            >
              {/* Conditionally display image or upload icon */}
              {ingredientData.image ? (
                <img
                  src={ingredientData.image} // Display uploaded or existing image
                  alt="Selected Ingredient"
                  className="object-cover rounded-lg w-[243px] h-[243px]"
                />
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
                onChange={handleImageChange} // Update image upon selection
                className="hidden"
              />
            </label>
          </div>

          <div>
            {/* First Input Field */}
            <div className="mb-4">
              <label
                className="block text-lg font-medium mb-2"
                htmlFor="input1"
              >
                Ingredient name
              </label>
              <input
                type="text"
                value={ingredientData.name}
                id="name"
                name="name"
                placeholder="Football"
                className="block w-[488px] h-[50px] rounded-lg p-2"
                onChange={handleInputChange}
              />
            </div>

            {/* Two Input Fields */}
            <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  className="block text-lg font-medium mb-2"
                  htmlFor="input2"
                >
                  Qunatity
                </label>
                <input
                  type="text"
                  value={ingredientData.qty}
                  id="qty"
                  name="qty"
                  placeholder="Enter here"
                  className="block w-[110px] h-[50px]  rounded-lg p-2"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label
                  className="block text-lg font-medium mb-2"
                  htmlFor="input3"
                >
                  Kcal
                </label>
                <input
                  type="text"
                  id="kCal"
                  name="kCal"
                  value={ingredientData.kCal}
                  placeholder="Enter here"
                  className="block w-[110px] h-[50px] rounded-lg p-2"
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Three Input Fields */}
            <div className="mb-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label
                  className="block text-lg font-medium mb-2"
                  htmlFor="input4"
                >
                  Fats
                </label>
                <input
                  type="text"
                  value={ingredientData.fat}
                  id="fat"
                  name="fat"
                  placeholder="Enter here"
                  onChange={handleInputChange}
                  className="block w-[110px] h-[50px] rounded-lg p-2"
                />
              </div>
              <div>
                <label
                  className="block text-lg font-medium mb-2"
                  htmlFor="input5"
                >
                  Protien
                </label>
                <input
                  type="text"
                  id="protein"
                  name="protein"
                  value={ingredientData.protein}
                  placeholder="Enter here"
                  onChange={handleInputChange}
                  className="block w-[110px] h-[50px]  rounded-lg p-2"
                />
              </div>
              <div>
                <label
                  className="block text-lg font-medium mb-2"
                  htmlFor="input6"
                >
                  Carbs
                </label>
                <input
                  type="text"
                  id="carbs"
                  name="carbs"
                  placeholder="Enter here"
                  value={ingredientData.carbs}
                  onChange={handleInputChange}
                  className="block w-[110px] h-[50px] rounded-lg p-2"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2 ">
            Introduction
          </label>
          <input
            type="text"
            id="introduction"
            name="introduction"
            value={ingredientData.introduction}
            onChange={handleInputChange}
            placeholder="Enter here"
            className=" w-[751px] h-[178px] rounded-lg p-2"
          />
        </div>
        <div className="mt-4">
          <label className="block text-lg font-medium mb-2 ">Source</label>
          <input
            type="text"
            id="source"
            name="source"
            value={ingredientData.source}
            onChange={handleInputChange}
            placeholder="Enter here"
            className=" w-[351px] h-[178px] rounded-lg p-2"
          />
        </div>
        <div className="gap-4 mt-6">
          {ingredientData.benefits &&
            ingredientData.benefits.map((benefit, index) => (
              <div key={index}>
                <label
                  className="block text-lg font-medium mb-2"
                  htmlFor={`benefit${index}`}
                >
                  Benefit {index + 1}
                </label>
                <input
                  type="text"
                  name={`benefits[${index}]`}
                  id={`benefit${index}`}
                  value={benefit}
                  onChange={(e) => {
                    const updatedBenefits = [...ingredientData.benefits];
                    updatedBenefits[index] = e.target.value;
                    setIngredientData({
                      ...ingredientData,
                      benefits: updatedBenefits,
                    });
                  }}
                  placeholder="Enter benefit"
                  className="block w-[351px] h-[50px] rounded-lg p-2 mb-4"
                />
              </div>
            ))}
        </div>
        <h4>Banners</h4>

        <div className="flex gap-3">
          {/* Add new image upload input */}
          <div className="mb-2  mt-2">
            <label
              htmlFor="image-upload"
              className="cursor-pointer bg-white flex flex-col items-center justify-center w-[351px] h-[180px]  rounded-lg hover:bg-gray-100"
            >
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

          {/* Render images from the banners array */}
          {ingredientData.banners &&
            ingredientData.banners.map((banner, index) => (
              <div
                key={index}
                className="flex flex-col items-center rounded-xl bg-white shadow-md h-[175px] w-[351px] mt-2"
              >
                <img
                  src={banner}
                  alt={`Banner ${index + 1}`}
                  className="object-cover rounded-xl mb-2 h-[180px] w-[351px]"
                />
                <div className="flex space-x-2 ml-60">
                  <div className="bg-[#FB5458] p-2 rounded-lg">
                    <FaTrash
                      className="text-white cursor-pointer"
                      onClick={() => handleDeleteImage(index)}
                    />
                  </div>
                  <div className="flex bg-blue p-2 rounded-lg gap-1">
                    <FaEdit className="text-white cursor-pointer" />
                    <p className="text-white text-xs">Edit</p>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="mt-6">
          <label className="block text-lg font-medium mb-2 ">
            How Does it Work
          </label>
          <input
            type="text"
            id="howDoesItWork"
            name="howDoesItWork"
            value={ingredientData.howDoesItWork}
            placeholder="Enter here"
            className=" w-[751px] h-[259px] rounded-lg p-2"
          />
        </div>
        <div className="flex justify-end">
          <button
            className="bg-[#5A4BDA] text-white px-6 py-3 rounded-lg mb-4"
            onClick={handleSubmit}
          >
            {state && state.ingredient ? "Edit" : "Save & Upload"}
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default AddIngredient;
