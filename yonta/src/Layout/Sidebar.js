import React from "react";
import { MenuDatas } from "../components/Datas";
import { Link } from "react-router-dom";

function Sidebar() {
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
      className=" xl:shadow-lg py-6 px-4 xl:h-screen xl:overflow-y-auto w-full
    bg-white"
    >
      <Link to="/">
        <img
          src="/images/logo.png"
          alt="logo"
          className="w-[146px]] h-[34px] my-[34px] object-contain"
        />
      </Link>
      <div className="flex-col gap-2   h-[21px] w-[200px]">
        {MenuDatas.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            className={`
            ${currentPath(item.path) === item.path ? "bg-menubg" : ""}
            flex gap-4 transitions group items-center w-full p-4 rounded-[6px]`}
          >
            <item.icon
              className={`h-[20px] w-[20px] ${
                currentPath(item.path) === item.path
                  ? "text-bluetext"
                  : "text-greytext"
              }`}
            />
            <p
              className={`text-[16px] font-medium group-hover:text-subMain ${
                currentPath(item.path) === item.path
                  ? "text-bluetext"
                  : "text-greytext"
              }`}
            >
              {item.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
