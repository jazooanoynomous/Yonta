import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header'; // Import the Header component

function Index({ children }) {
  return (
    <div className="bg-dry xl:h-screen flex-colo">
      <div className="grid xl:grid-cols-12 w-full 2xl:max-w-[2000px]">
        <div className="col-span-2 xl:block hidden">
          <Sidebar />
        </div>
        <div className="col-span-10 xl:h-screen overflow-y-scroll relative">
          <Header /> {/* Include the Header component */}
          <div className="px-4">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Index;
