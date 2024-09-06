import React from 'react';

const GraphicHeader = () => {
  return (
    <div className="relative w-full h-[145px] overflow-hidden">
      <div className="absolute w-[1663px] h-[145px] left-[223px] top-0 bg-gradient-to-r from-[#6D68E0] to-[#9216FE] rounded-b-[16px]"></div>
      <svg className="absolute w-[2112px] h-[2156px] left-[1962px] top-[-358px] rotate-90" viewBox="0 0 2112 2156">
        <defs>
          <filter id="insetShadow">
            <feOffset dx="24" dy="32"/>
            <feGaussianBlur stdDeviation="61" result="offset-blur"/>
            <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse"/>
            <feFlood floodColor="rgba(6, 8, 89, 0.75)" floodOpacity="1" result="color"/>
            <feComposite operator="in" in="color" in2="inverse" result="shadow"/>
            <feComposite operator="over" in="shadow" in2="SourceGraphic"/>
          </filter>
        </defs>
        <ellipse cx="1056" cy="1078" rx="1056" ry="1078" fill="white" opacity="0.75" filter="url(#insetShadow)" />
        <ellipse cx="817" cy="835" rx="817" ry="835" fill="white" opacity="0.75" filter="url(#insetShadow)" />
        <ellipse cx="694" cy="709" rx="694" ry="709" fill="white" opacity="0.75" filter="url(#insetShadow)" />
        <ellipse cx="520" cy="520" rx="520" ry="520" fill="white" opacity="0.75" filter="url(#insetShadow)" />
        <ellipse cx="413" cy="413" rx="413" ry="413" fill="white" opacity="0.75" filter="url(#insetShadow)" />
      </svg>
    </div>
  );
};

export default GraphicHeader;