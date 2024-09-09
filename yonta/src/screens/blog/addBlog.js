import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import {
  FaEdit,
  FaTrash,
  FaPlus,
  FaSave,
  FaUpload,
  FaCalendarAlt,
} from "react-icons/fa";
import Layout from "../../Layout";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLocation, useNavigate } from "react-router-dom";
import { BASEURL, IMAGEURL } from "../../utils/constant";

const AddBlog = () => {
  const [image, setImage] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [heading, setHeading] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [authorImage, setAuthorImage] = useState("");

  const [content, setContent] = useState("");
  const [banners, setBanners] = useState([]);
  const fileInputRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { category, isEdit } = location.state || {};

  useEffect(() => {
    if (isEdit && category) {
      // Set form fields for edit
      setHeading(category.title || "");
      setAuthorName(category.author || "");
      setAuthorImage(
        category.authorImage ? `${IMAGEURL}${category.authorImage}` : ""
      );
      setContent(category.content || "");
      setSelectedDate(new Date(category.date) || null);
      setImage(category.image ? `${IMAGEURL}${category.image}` : null);
      setBanners(category.banners || []);
    }
  }, [isEdit, category]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (e.target.id === "image-upload") {
        setImage(URL.createObjectURL(file));
        setImageFile(file);
      } else if (e.target.id === "author-image-upload") {
        setAuthorImage(URL.createObjectURL(file));
        setAuthorImageFile(file);
      } else if (e.target.id === "banner-upload") {
        setBanners((prevBanners) => [
          ...prevBanners,
          URL.createObjectURL(file),
        ]);
        setBannerFiles((prevFiles) => [...prevFiles, file]);
      }
    }
  };
  const [authorImageFile, setAuthorImageFile] = useState(null);
  const [bannerFiles, setBannerFiles] = useState([]);
  const [imageFile, setImageFile] = useState(null);

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("heading", heading);
    formData.append("authorName", authorName);
    formData.append("content", content);
    formData.append("date", selectedDate ? selectedDate.toISOString() : "");
    if (imageFile) {
      formData.append("image", imageFile);
    }
    if (authorImageFile) {
      formData.append("authorImage", authorImageFile);
    }
    bannerFiles.forEach((file, index) => {
      formData.append(`banners[${index}]`, file);
    });

    try {
      const url = isEdit ? `${BASEURL}blog/${category.id}` : `${BASEURL}blog`;
        console.log('helloo',url);
        
      const method = isEdit ? "PATCH" : "POST";

      const response = await axios({
        method,
        url,
        data: formData,
        headers: {
          VerifyMe: "RGVlcGFrS3VzaHdhaGE5Mzk5MzY5ODU0", // Custom header
          "Content-Type": "multipart/form-data", // For form-data submissions
        },
      });

      if (response.status === 200 || response.status === 201) {
        alert("Blog successfully submitted!");
        navigate("/blog"); // Redirect after submission if needed
      }
    } catch (error) {
      console.error("Error submitting blog:", error);
    }
  };

  return (
    <Layout>
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold">
            <span className="text-gray-500 font-normal">Blog</span>
            <span className="text-black"> &gt; Add Blog</span>
          </h3>
        </div>
        <div className="flex justify-start text-start mr-60 gap-6">
          {/* Image Picker with Icon */}
          <div className="mb-2 mt-2">
            {image ? (
              // Display the image preview if available
              <img
                src={image}
                alt="Preview"
                className="w-[243px] h-[243px] object-cover rounded-lg"
              />
            ) : (
              // Show the upload input if no image is available
              <label
                htmlFor="image-upload"
                className="cursor-pointer bg-white flex flex-col items-center justify-center w-[243px] h-[243px] rounded-lg hover:bg-gray-100"
              >
                <FaUpload className="text-3xl text-gray-500 mb-2" />
                <span className="text-gray-500">Upload blog image</span>
                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            )}
          </div>

          <div>
            {/* Heading Input Field */}
            <div className="mb-4">
              <label className="block font-semibold mb-2" htmlFor="heading">
                Heading
              </label>
              <input
                type="text"
                id="heading"
                value={heading}
                onChange={(e) => setHeading(e.target.value)}
                placeholder="Enter heading"
                className="block w-[488px] h-[50px] rounded-lg p-2"
              />
            </div>

            {/* Date Picker */}
            <label className="block font-semibold" htmlFor="date">
              Date
            </label>
            <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={selectedDate ? selectedDate.toLocaleDateString() : ""}
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
        <h4 className="mt-4 font-semibold">Author Details</h4>

        <div className="flex justify-start text-start mr-60 gap-6">
          {/* Author Image Picker with Icon */}
          <div className="mb-2 mt-2">
            {authorImage ? (
              // Display the author image preview if available
              <img
                src={authorImage}
                alt="Author Preview"
                className="w-[140px] h-[140px] object-cover rounded-lg"
              />
            ) : (
              // Show the upload input if no author image is available
              <label
                htmlFor="author-image-upload"
                className="cursor-pointer bg-white flex flex-col items-center justify-center w-[140px] h-[140px] rounded-lg hover:bg-gray-100"
              >
                <FaUpload className="text-3xl text-gray-500 mb-2" />
                <span className="text-gray-500">Upload author image</span>
                <input
                  id="author-image-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            )}
          </div>

          <div>
            {/* Author Name Input Field */}
            <div className="mb-4">
              <label className="block font-semibold mb-2" htmlFor="author-name">
                Author Name
              </label>
              <input
                type="text"
                id="author-name"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                placeholder="Enter author name"
                className="block w-[188px] h-[50px] rounded-lg p-2"
              />
            </div>
          </div>
        </div>

        {/* Content Input Field */}
        <div className="mb-4 mt-4">
          <label className="block font-semibold mb-2">Content</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter content here"
            className="w-[751px] h-[178px] rounded-lg p-2"
          />
        </div>

        <h4 className="mt-4 font-semibold">Banners</h4>

        <div className="flex gap-3">
          <div className="mb-2 mt-2">
            <label
              htmlFor="banner-upload"
              className="cursor-pointer bg-white flex flex-col items-center justify-center w-[351px] h-[180px] rounded-lg hover:bg-gray-100"
            >
              <FaPlus className="text-3xl text-gray-500 mb-2" />
              <span className="text-gray-500">Add more</span>
              <input
                id="banner-upload"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          </div>

          <>
            {banners.map((banner, index) => (
              <div key={index} className="relative w-[351px] h-[180px]">
                <img
                  src={`${IMAGEURL}${banner}`}
                  alt={`Banner Preview ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute bottom-0 right-0 flex gap-1 p-1 bg-opacity-70 bg-white rounded-tr-lg rounded-bl-lg">
                  <div className="bg-[#FB5458] p-1 rounded-lg">
                    <FaTrash className="text-white cursor-pointer" />
                  </div>
                  <div className="flex bg-blue p-1 rounded-lg gap-1">
                    <FaEdit className="text-white cursor-pointer" />
                    <p className="text-white text-xs">Edit</p>
                  </div>
                </div>
              </div>
            ))}
          </>
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            className="bg-[#5A4BDA] text-white px-6 py-3 rounded-lg mb-4"
          >
            Save & Upload
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default AddBlog;
