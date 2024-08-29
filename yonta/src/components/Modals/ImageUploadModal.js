import React, { useState } from 'react';
import { FaCamera } from 'react-icons/fa'; // Import the camera icon

const UploadImageModal = () => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  return (
    <div className="bg-white p-4 rounded-[10px] shadow-lg w-[243px] h-[243px] relative">
      <div className="flex items-center justify-center h-48 border border-dashed rounded-md">
        {image ? (
          <img src={image} alt="Uploaded" className="object-cover h-full w-full rounded-md" />
        ) : (
          <label className="cursor-pointer flex flex-col items-center">
            <FaCamera className="text-gray-400 text-3xl mb-2" /> {/* Camera Icon */}
            <span className="text-gray-400">Upload Image</span>
            <input type="file" className="hidden" onChange={handleImageUpload} />
          </label>
        )}
      </div>
    </div>
  );
};

export default UploadImageModal;
