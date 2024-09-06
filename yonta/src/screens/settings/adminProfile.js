import React from "react";

const AdminProfile = ({ profile }) => {
    return (
        <div className="bg-white w-[435px] h-[222px] p-6 rounded-[15px] mb-6">
            <h2 className="text-[18px] font-semibold mb-4 text-blacktext">Profile Information</h2>
            <p><strong className="text-blacktext text-[12px]">Full Name:</strong> <span className="text-greytext text-[12px]">{profile.fullName}</span></p>
            <p><strong className="text-blacktext text-[12px]">Mobile:</strong> <span className="text-greytext text-[12px]">{profile.mobile}</span></p>
            <p><strong className="text-blacktext text-[12px]">Email:</strong> <span className="text-greytext text-[12px]">{profile.email}</span></p>
            <p><strong className="text-blacktext text-[12px]">Location:</strong> <span className="text-greytext text-[12px]">{profile.location}</span></p>
        </div>
    );
};

export default AdminProfile;
