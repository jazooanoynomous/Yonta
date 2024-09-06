import React from "react";
import { adminInfo } from "../../components/Datas";
import AdminProfile from "./adminProfile";
import PlatformSettings from "./platFormSettings";
import SubAdmins from "./subAdmins";
import Layout from '../../Layout';

const AdminDashboard = () => {
    return (
        <Layout>
        <div className="flex flex-col items-center py-10 px-3 bg-gray-100 min-h-screen">
        <div className="bg-white bg-opacity-40 py-2 rounded-lg shadow-md w-[950px] ml-12  h-[113px] border border-white"
    >
    <div className="flex items-center px-5 py-2">
        <img src={`/images/hero.png`} alt="Profile" className="rounded-[10px] w-[80px] h-[80px] mr-4" />
        <div>
            <h1 className="text-2xl font-semibold text-blacktext">{adminInfo.profile.fullName}</h1>
            <p className="text-blacktext text-opacity-80">{adminInfo.profile.email}</p>
        </div>
    </div>
</div>

            <div className="grid grid-cols-1  py-6 md:grid-cols-2 gap-6 w-full max-w-4xl">
                <div>
                    <AdminProfile profile={adminInfo.profile} />
                    <PlatformSettings />
                </div>
                <div>
                    <SubAdmins subAdmins={adminInfo.subAdmins} />
                </div>
            </div>
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg mt-6">Save</button>
        </div>
        </Layout>
    );
};

export default AdminDashboard;
