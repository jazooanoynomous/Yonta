import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaPlus } from 'react-icons/fa';

const Dropdown = ({ title, plans, handleDelete, handleEdit, toggleModal, ItemComponent }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-[685px] w-[219px] mb-4">
      {!isOpen && (
        <button onClick={toggleDropdown} className="bg-white p-2 rounded w-full flex justify-between items-center">
          <span>{title}</span>
          <FaChevronDown />
        </button>
      )}

      <div className={`mt-4 bg-white shadow-md rounded-lg p-4  transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <button onClick={toggleDropdown} className="p-2 rounded">
            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>
        </div>

        {plans.map((box, index) => (
          <ItemComponent key={index} box={box} handleDelete={handleDelete} handleEdit={handleEdit} />
        ))}

        <div className="mb-4 h-[114px] w-[191px]">
          <div
            onClick={toggleModal}
            className="p-4 border rounded-[10px] h-[40px] w-[191px] bg-[#F1F4FA] flex justify-center items-center cursor-pointer"
          >
            <FaPlus className="text-[#1782AF] w-6 h-6" />
            <span className="ml-2 text-lg text-[#1782AF]">Add New Plan</span>
          </div>
        </div>
        
      </div>
   
    </div>
  );
};

export default Dropdown;
