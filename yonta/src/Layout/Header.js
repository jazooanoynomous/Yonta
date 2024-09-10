import React, { useState } from "react";
import { MenuDatas } from "../components/Datas"; // Ensure this file exports a valid MenuDatas structure
import { Link } from "react-router-dom";
import Header from "./Header"; // Import the Header component

function Sidebar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedMenu, setSelectedMenu] = useState(null);

  // Check current path to highlight active link
  const currentPath = (path) => {
    return window.location.pathname.split("/")[1] === path.split("/")[1];
  };

  // Toggle dropdown for submenus
  const handleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  // Handle menu item click
  const handleMenuClick = (item) => {
    console.log("Menu item clicked:", item); // Debug output
    setSelectedMenu(item);
    if (item.subMenu) {
      handleDropdown(MenuDatas.indexOf(item));
    }
  };

  return (
    <div className="flex">
      <div className="xl:shadow-lg py-6 px-4 xl:h-screen xl:overflow-y-auto w-full bg-white">
        <Link to="/">
          <img
            src="/images/logo.png"
            alt="logo"
            className="w-[146px] h-[34px] my-[34px] object-contain"
          />
        </Link>
        <div className="flex-col gap-2 h-[21px] w-[200px]">
          {MenuDatas.map((item, index) => (
            <div key={index}>
              <Link
                to={item.path || "/"} // Fallback to home if no path
                className={`
                  ${currentPath(item.path) ? "bg-menubg" : ""}
                  flex gap-4 transition group items-center w-full p-4 rounded-[6px]`}
                onClick={() => handleMenuClick(item)}
              >
                {item.icon && (
                  <item.icon
                    className={`h-[20px] w-[20px] ${
                      currentPath(item.path)
                        ? "text-bluetext"
                        : "text-greytext"
                    }`}
                  />
                )}
                <p
                  className={`text-[16px] font-medium group-hover:text-subMain ${
                    currentPath(item.path)
                      ? "text-bluetext"
                      : "text-greytext"
                  }`}
                >
                  {item.title || "No Title"} {/* Fallback if title is missing */}
                </p>
                {item.subMenu && (
                  <span className={`ml-auto transition-transform ${
                    openDropdown === index ? "rotate-180" : ""
                  }`}>
                    ▼
                  </span>
                )}
              </Link>

              {/* Dropdown for submenu */}
              {item.subMenu && openDropdown === index && (
                <div className="ml-6 mt-2">
                  {item.subMenu.map((subItem, subIndex) => (
                    <Link
                      to={subItem.path || "/"} // Fallback to home if no path
                      key={subIndex}
                      className={`flex gap-4 transition group items-center w-full p-3 rounded-[6px] ${
                        currentPath(subItem.path) ? "bg-submenubg" : ""
                      }`}
                    >
                      {subItem.icon && (
                        <subItem.icon
                          className={`h-[16px] w-[16px] ${
                            currentPath(subItem.path)
                              ? "text-bluetext"
                              : "text-greytext"
                          }`}
                        />
                      )}
                      <p
                        className={`text-[14px] font-medium group-hover:text-subMain ${
                          currentPath(subItem.path)
                            ? "text-bluetext"
                            : "text-greytext"
                        }`}
                      >
                        {subItem.title || "No Title"} {/* Fallback if title is missing */}
                      </p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Render the Header component and pass the selectedMenu */}
      <Header selectedMenu={selectedMenu} />
    </div>
  );
}

export default Sidebar;
