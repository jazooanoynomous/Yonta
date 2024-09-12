import React from "react";
import { FaBell, FaCog } from "react-icons/fa"; // Icons for notification and settings
import { useLocation, useNavigate } from "react-router-dom";
import { MenuDatas } from "../components/Datas"; // Import your MenuDatas

function Header() {
  const location = useLocation();
  const navigate = useNavigate(); // Hook to programmatically navigate

  // Function to map the current path to the title in MenuDatas
  const getScreenName = () => {
    const currentPath = location.pathname;

    // Find the matching item in MenuDatas based on the current path
    const currentMenuItem = MenuDatas.find((menuItem) => {
      // Check main items first
      if (menuItem.path === currentPath) {
        return true;
      }
      // Check subItems if available
      if (menuItem.subItems) {
        return menuItem.subItems.some((subItem) => subItem.path === currentPath);
      }
      return false;
    });

    return currentMenuItem ? currentMenuItem.title : "Home";
  };

  return (
    <header className="w-full flex justify-between items-center px-4 py-4 bg-white">
      <div className="text-2xl font-bold text-gray-700">
        {getScreenName()}
      </div>

      <div className="flex items-center gap-4">
        <FaBell
          className="h-6 w-6 text-gray-600 cursor-pointer"
          onClick={() => navigate("/notification")} 
        />
        <FaCog
          className="h-6 w-6 text-gray-600 cursor-pointer"
          onClick={() => navigate("/settings")} 
        />

        <div className="h-8 w-8 rounded-full bg-gray-300 cursor-pointer overflow-hidden">
          <img
            src="https://via.placeholder.com/150" 
            alt="Profile"
            className="w-full h-full object-cover"
            onClick={() => navigate("/settings")} 

          />
        </div>
      </div>
    </header>
  );
}

export default Header;
