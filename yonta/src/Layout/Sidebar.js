import React, { useState } from "react";
import { MenuDatas } from "../components/Datas";
import { Link } from "react-router-dom";
import { FiChevronDown, FiChevronRight } from "react-icons/fi"; // Icons for the dropdown

function Sidebar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  // Handle dropdown toggle
  const handleDropdown = (index) => {
    if (openDropdown === index) {
      setOpenDropdown(null); // Close if already open
    } else {
      setOpenDropdown(index); // Open the clicked dropdown
    }
  };

  // active link
  const currentPath = (path) => {
    const currentPath =
      window.location.pathname.split("/")[1] === path.split("/")[1];
    if (currentPath) {
      return path;
    }
    return null;
  };

  return (
    <div
      className=" xl:shadow-lg px-4 xl:h-screen xl:overflow-y-auto w-full
    bg-white scrollbar-hide" // added hide-scrollbar class
    >
      <Link to="/">
        <img
          src="/images/logo.png"
          alt="logo"
          className="w-[146px] h-[34px] my-[34px] object-contain"
        />
      </Link>
      <div className="flex-col gap-2 w-[200px]">
        {MenuDatas.map((item, index) => (
          <div key={index} className="mb-2 text-sm">
            <Link
              to={item.subItems ? "#" : item.path}
              className={`flex gap-4 items-center w-full p-2 rounded-[6px] 
                ${currentPath(item.path) === item.path ? "bg-menubg" : ""}`}
              onClick={() => item.subItems && handleDropdown(index)}
            >
              <item.icon
                className={`h-[20px] w-[20px] ${
                  currentPath(item.path) === item.path
                    ? "text-bluetext"
                    : "text-greytext"
                }`}
              />
              <p
                className={`text-[16px] font-medium ${
                  currentPath(item.path) === item.path
                    ? "text-bluetext"
                    : "text-greytext"
                }`}
              >
                {item.title}
              </p>
              {item.subItems && (
                <span className="ml-auto">
                  {openDropdown === index ? (
                    <FiChevronDown className="text-bluetext" />
                  ) : (
                    <FiChevronRight className="text-greytext" />
                  )}
                </span>
              )}
            </Link>
            {item.subItems && openDropdown === index && (
              <div className="pl-6">
                {item.subItems.map((subItem, subIndex) => (
                  <Link
                    key={subIndex}
                    to={subItem.path}
                    className={`block py-2 px-4 rounded-[6px] 
                      ${currentPath(subItem.path) === subItem.path ? "bg-menubg" : ""}`}
                  >
                    <p
                      className={`text-[14px] font-medium ${
                        currentPath(subItem.path) === subItem.path
                          ? "text-bluetext"
                          : "text-greytext"
                      }`}
                    >
                      {subItem.title}
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
