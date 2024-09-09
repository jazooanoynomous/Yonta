import React, { useState, useRef, useEffect } from "react";
import { FaEdit, FaTrash, FaPlus, FaSave, FaUpload } from "react-icons/fa";
import Layout from "../../Layout";
import { useLocation } from "react-router-dom";
import { BASEURL } from "../../utils/constant";
import axios from "axios";

const AddRecipes = () => {
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    catId: "",
    image: "",
    heading: "",
    cookingTime: "",
    serves: "",
    calories: "",
    fat: "",
    protein: "",
    carbs: "",
    fiber: "",
    ingredients: [{ image: "", title: "" }],
    directions: "",
  });
  const fileInputRef = useRef(null);
  const location = useLocation();
  const { recipe, isEdit } = location.state || {};
  
  useEffect(() => {
    if (isEdit && recipe) {
      setFormData({
        catId: recipe.catId || "",
        image: recipe.imageUrl || "",
        heading: recipe.name || "",
        cookingTime: recipe.duration || "",
        serves: recipe.serves || "",
        calories: recipe.calories || "",
        fat: recipe.fat || "",
        protein: recipe.protein || "",
        carbs: recipe.carbs || "",
        fiber: recipe.fiber || "",
        ingredients: recipe.ingredients || [{ image: "", title: "" }],
        directions: recipe.directions || "",
      });
    }
  }, [isEdit, recipe]);
  // Handle image selection
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
      setFormData({
        ...formData,
        image: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async () => {
    try {
      const url = isEdit
        ? `${BASEURL}healthyRecipes/${recipe.id}`
        : `${BASEURL}healthyRecipes`;

      const method = isEdit ? "PUT" : "POST";

      const response = await axios({
        method,
        url,
        data: formData,
        headers: {
          'VerifyMe': 'RGVlcGFrS3VzaHdhaGE5Mzk5MzY5ODU0', // Custom header
          'Content-Type': 'application/json', // You can add more headers if needed
        },
      })

      if (response.status === 200 || response.status === 201) {
        alert("Recipe successfully submitted!");
      }
    } catch (error) {
      console.error("Error submitting recipe:", error);
    }
  };

  return (
    <Layout>
      <div className="p-4 ">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold">
            {isEdit ? "Edit Recipe" : "Add Recipe"}
          </h3>
        </div>
        <h4>Ingredient image</h4>
        <div className="flex justify-start text-start  gap-6  ">
          {/* Image Picker with Icon */}
          <div className="mb-2  mt-2">
            <label
              htmlFor="image-upload"
              className="cursor-pointer bg-white flex flex-col items-center justify-center w-[243px] h-[243px] rounded-lg hover:bg-gray-100"
            >
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
              <label
                className="block text-lg font-medium mb-2"
                htmlFor="input1"
              >
                Ingredient name
              </label>
              <input
                type="text"
                name="heading"
                value={formData.heading}
                onChange={handleInputChange}
                placeholder="Recipe name"
              />
            </div>

            {/* Two Input Fields */}
            <div className="mb-4 grid grid-cols-1 sm:grid-cols-3">
              <div>
                <label
                  className="block text-lg font-medium mb-2"
                  htmlFor="input2"
                >
                  Services
                </label>
                <div className="flex gap-4 mr-8">
                  <p className="mt-4 text-sm">mint:</p>
                  <input
                    type="number"
                    name="cookingTime"
                    value={formData.cookingTime}
                    onChange={handleInputChange}
                    placeholder=" cooking Time"
                    className="block w-[60px] h-[50px]  rounded-lg p-2"
                  />

                  <p className="mt-4 text-sm">hr:</p>

                  <input
                    type="number"
                    name="cookingTime"
                    value={formData.cookingTime}
                    onChange={handleInputChange}
                    placeholder=" cooking Time"
                    className="block w-[60px] h-[50px]  rounded-lg p-2"
                  />
                </div>
              </div>
              <div>
                <label
                  className="block text-lg font-medium mb-2"
                  htmlFor="input2"
                >
                  Serves
                </label>
                <input
                  type="number"
                  name="serves"
                  value={formData.serves}
                  onChange={handleInputChange}
                  placeholder=" 1/2"
                  className="block w-[110px] h-[50px]  rounded-lg p-2"
                />
              </div>
              <div>
                <label
                  className="block text-lg font-medium mb-2"
                  htmlFor="input3"
                >
                  Calories
                </label>
                <input
                 type="number"
                 name="calories"
                 value={formData.calories}
                 onChange={handleInputChange}
                 placeholder=" Calories Amount"
                  className="block w-[110px] h-[50px] rounded-lg p-2"
                />
              </div>
            </div>

            {/* Three Input Fields */}
            <div className="mb-4 grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div>
                <label
                  className="block text-lg font-medium mb-2"
                  htmlFor="input4"
                >
                  Fats
                </label>
                <input
                  type="number"
                  name="fat"
                  value={formData.fat}
                  onChange={handleInputChange}
                  placeholder=" 1/2"
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
                  type="Protein"
                  name="protein"
                  value={formData.protein}
                  onChange={handleInputChange}
                  placeholder=" 1/2"
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
                  type="number"
                  name="carbs"
                  value={formData.carbs}
                  onChange={handleInputChange}
                  placeholder=" 1/2"
                  className="block w-[110px] h-[50px] rounded-lg p-2"
                />
              </div>
              <div>
                <label
                  className="block text-lg font-medium mb-2"
                  htmlFor="input6"
                >
                  Fiber
                </label>
                <input
                 type="number"
                 name="fiber"
                 value={formData.fiber}
                 onChange={handleInputChange}
                 placeholder=" Enter Fiber"
                  className="block w-[110px] h-[50px] rounded-lg p-2"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 max-w-6xl rounded-xl bg-white w-[500px] h-[155px] ">
          <div className="flex justify-between">
            <h4 className="text-lg font-semibold mb-4">Ingredients</h4>
            <div className="flex w-14 h-8 bg-blue p-2 rounded-lg gap-1">
              <FaEdit className="text-white cursor-pointer" />
              <p className="text-white text-xs">Edit</p>
            </div>
          </div>
          {/* Grid of images with their names below */}
          {/* <div className="grid grid-cols-6 gap-4  ">
            {formData.image.map((image, index) => (
              <div key={index} className="text-center">
                <div className="h-[60px] w-[60px] rounded-lg flex items-center justify-center overflow-hidden">
                  <img
                    src={image.src}
                    alt={`image-${index}`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="mt-2 text-sm">{image.name}</p>
              </div>
            ))}
          </div> */}
        </div>

        <div className="mt-6">
          <label className="block text-lg font-medium mb-2 ">Directions</label>
          <input
            type="text"
            name="directions"
            value={formData.directions}
            onChange={handleInputChange}
            placeholder=" Directions to cook"
            className=" w-[751px] h-[259px] rounded-lg p-2"
          />
        </div>
        <div className="flex justify-end">
        <button 
        className="bg-buttonblue rounded-[10px] h-10 w-30 px-2 text-white "
        onClick={handleSubmit}>
                        {isEdit ? 'Update Recipe' : 'Save & Upload'}
                    </button>
        </div>
      </div>
    </Layout>
  );
};

export default AddRecipes;
