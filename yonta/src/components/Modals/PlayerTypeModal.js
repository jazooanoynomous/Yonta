import React from 'react';

function PlayerTypeModal({ heading, imageUrl }) {
  return (
    <div className="fixed" style={{ top: '461px', left: '415px' }}>
      <div className="w-[148px] h-[334px] rounded-tl-lg bg-white opacity-0">
        {/* Heading */}
        <h3 className="text-center mt-4">{heading}</h3>
        
        {/* Image */}
        <img
          src={imageUrl}
          alt="Player"
          className="w-[124px] h-[250px] mx-auto rounded-tl-lg opacity-0"
        />

        {/* Buttons */}
        <div className="flex flex-col gap-0 mt-4">
          <button
            className="w-[87.79px] h-[24px] bg-blue-500 text-white flex items-center justify-center rounded-md opacity-0"
            style={{ gap: '4px' }}
          >
            <span className="text-xl">✏️</span>
            <span>Edit</span>
          </button>
          <button
            className="w-[87.79px] h-[24px] bg-red-500 text-white flex items-center justify-center rounded-md mt-2 opacity-0"
            style={{ gap: '4px' }}
          >
            <span className="text-xl">🗑️</span>
            <span>Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayerTypeModal;
