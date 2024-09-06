import React from "react";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";

const SubAdmins = ({ subAdmins }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleAddClick = () => {
    navigate('/settings/addadmin'); // Navigate to the new route
  };

  return (
    <div className="bg-white p-2 w-[490px] h-[378px] rounded-[10px]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Sub Admins</h2>
        <button
          className="text-blue px-4 h-[21px] text-[14px] py-2 rounded-lg"
          onClick={handleAddClick} // Add click handler
        >
          + Add New
        </button>
      </div>

      <div className="flex justify-between items-center py-2 border-b border-gray-200 mb-2">
        <span className="text-[12px] font-medium text-greytext w-1/3">User</span>
        <span className="text-[12px] font-medium text-greytext w-1/3 text-center">Product</span>
        <span className="text-[12px] font-medium text-greytext w-1/3 text-right">Action</span>
      </div>

      <div className="overflow-y-auto h-[290px]">
        {subAdmins.map((admin, index) => (
          <div
            key={index}
            className="flex justify-between items-center py-2"
          >
            <div className="flex items-center w-1/3">
              <img
                src={`/images/hero.png`}
                alt="Profile"
                className="rounded-full w-10 h-10 mr-4"
              />
              <div>
                <p className="font-medium text-[14px] text-blacktext">
                  {admin.name}
                </p>
                <p className="text-[12px] text-greytext">{admin.email}</p>
              </div>
            </div>
            <div className="text-[12px] text-greytext w-1/3 text-center">{admin.product}</div>
            <div className="flex justify-end gap-[4px] w-1/3">
              <button
                className="flex items-center justify-center bg-[#FB5458] rounded-[6px] w-[27.78px] h-[24px] p-[7px_10px]"
                //   onClick={onDelete}
              >
                <FaTrash className="w-[7.78px] h-[10px] text-white" />
              </button>
              <button
                className="flex items-center justify-center bg-[#1782AF] rounded-[6px] w-[56.01px] h-[24px] p-[7px_10px]"
                //   onClick={onEdit}
              >
                <FaEdit className="w-[10.01px] h-[10px] text-white mr-2" />
                <span className="text-[10px] font-normal leading-[100%] tracking-[-0.01em] text-white">
                  Edit
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubAdmins;
