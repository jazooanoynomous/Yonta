import React, { useState } from "react";

const PlatformSettings = () => {
  const [vendorRegistration, setVendorRegistration] = useState(true);
  const [vendorUpdate, setVendorUpdate] = useState(true);
  const [vendorEdit, setVendorEdit] = useState(false);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-lg text-blacktext font-bold mb-4">Platform Settings</h2>
      <h5 className="text-[12px] text-greytext font-bold mb-4">Vendor</h5>
      <div className="flex flex-col space-y-2">
        <label className="flex items-center">
          <div className={`relative inline-flex items-center h-[19px] rounded-full w-[34px] ${
            vendorRegistration ? "bg-blue" : "bg-gray-300"
          }`}>
            <input
              type="checkbox"
              checked={vendorRegistration}
              onChange={() => setVendorRegistration(!vendorRegistration)}
              className="sr-only"
            />
            <span className={`inline-block w-[13px] h-[13px] transform bg-white rounded-full transition-transform ${
              vendorRegistration ? "translate-x-[17px]" : "translate-x-1"
            }`}></span>
          </div>
          <span className="text-[12px] text-greytext ml-2">Notify me when a vendor sends their registration form.</span>
        </label>
        <label className="flex items-center">
          <div className={`relative inline-flex items-center h-[19px] rounded-full w-[34px] ${
            vendorUpdate ? "bg-blue" : "bg-gray-300"
          }`}>
            <input
              type="checkbox"
              checked={vendorUpdate}
              onChange={() => setVendorUpdate(!vendorUpdate)}
              className="sr-only"
            />
            <span className={`inline-block w-[13px] h-[13px] transform bg-white rounded-full transition-transform ${
              vendorUpdate ? "translate-x-[17px]" : "translate-x-1"
            }`}></span>
          </div>
          <span className="text-[12px] text-greytext ml-2">
            Notify me when a vendor makes any update in their profile.
          </span>
        </label>
        <label className="flex items-center">
          <div className={`relative inline-flex items-center h-[19px] rounded-full w-[34px] ${
            vendorEdit ? "bg-blue" : "bg-gray-300"
          }`}>
            <input
              type="checkbox"
              checked={vendorEdit}
              onChange={() => setVendorEdit(!vendorEdit)}
              className="sr-only"
            />
            <span className={`inline-block w-[13px] h-[13px] transform bg-white rounded-full transition-transform ${
              vendorEdit ? "translate-x-[17px]" : "translate-x-1"
            }`}></span>
          </div>
          <span className="text-[12px] text-greytext ml-2">Notify me when a vendor edits or deletes any Product.</span>
        </label>
      </div>
    </div>
  );
};

export default PlatformSettings;