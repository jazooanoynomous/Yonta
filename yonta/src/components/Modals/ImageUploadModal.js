import React, { useRef } from 'react';

function ImageUploadModal() {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50">
      <div className="w-[243px] h-[243px] rounded-lg bg-white flex items-center justify-center relative">
        <button
          className="flex items-center justify-center w-full h-full outline-none"
          onClick={handleButtonClick}
        >
          <span className="text-4xl">📷</span>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            className="absolute inset-0 opacity-0 cursor-pointer"
            onChange={(e) => {
              // Handle file selection
              console.log(e.target.files[0]);
            }}
          />
        </button>
      </div>
    </div>
  );
}

export default ImageUploadModal;
