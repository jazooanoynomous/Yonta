import React, { useState } from 'react';
import { FaCamera } from 'react-icons/fa'; // Import the camera icon

const UploadImageModal = ({ onImageUpload }) => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImage(imageUrl);
    if (onImageUpload) {
      onImageUpload(file); // Pass the file to the parent component
    }
  };

  return (
    <div className="bg-white p-4 rounded-[10px] shadow-lg w-[243px] h-[243px] relative">
      <div className="flex items-center justify-center h-48 rounded-[10px]">
        {image ? (
          <img src={image} alt="Uploaded" className="object-cover h-full w-full rounded-md" />
        ) : (
          <label className="cursor-pointer flex flex-col items-center">
            <FaCamera className="text-gray-400 text-3xl mb-2" /> {/* Camera Icon */}
            <span className="text-text text-[16px]">Upload Image</span>
            <span className='text-text text-[12px]'>PNG, JPEG</span>
            <span className='text-text text-[12px]'>148×148</span>
            <input type="file" className="hidden" onChange={handleImageUpload} />
          </label>
        )}
      </div>
    </div>
  );
};

export default UploadImageModal;
