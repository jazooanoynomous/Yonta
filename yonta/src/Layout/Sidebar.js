import React from 'react';
import { MenuDatas } from '../components/Datas';
import { Link } from 'react-router-dom';

function Sidebar() {
  // active link
  const currentPath = (path) => {
    const currentPath =
      window.location.pathname.split('/')[1] === path.split('/')[1];
    if (currentPath) {
      return path;
    }
    return null;
  };

  return (
<div className="bg-white xl:shadow-lg py-6 px-4 xl:h-screen xl:overflow-y-auto w-full">
    <Link to="/">
        <img
          src="/images/logo.png"
          alt="logo"
          className="w-2/4 h-12 ml-4 object-contain"
        />
      </Link>
      <div className="flex-colo gap-2 mt-2">
        {MenuDatas.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            className={`
            ${currentPath(item.path) === item.path ? 'bg-blue' : ''}
            flex gap-4 transitions group items-center w-full p-4 rounded-l`}
          >
            <item.icon
              className={`h-[20px] w-[20px] text-subMain`}
            />
            <p
              className={`text-[16px] font-medium group-hover:text-subMain ${
                currentPath(item.path) === item.path
                  ? 'text-subMain'
                  : 'text-gray-500'
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
