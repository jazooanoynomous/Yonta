import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminProfile from "./adminProfile";
import { adminInfo } from "../../components/Datas";
import PlatformSettings from "./platFormSettings";
import SubAdmins from "./subAdmins";
import Layout from '../../Layout';
import { BASEURL } from "../../utils/constant";

const AdminDashboard = () => {
    const [adminData, setAdminData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAdminData = async () => {
            try {
                console.log("Fetching data from API...");

                const response = await axios.get(`${BASEURL}admin/1`, {
                    headers: {
                        VerifyMe: "RGVlcGFrS3VzaHdhaGE5Mzk5MzY5ODU0",
                    },
                });

                console.log("Response from API:", response.data);
                
                setAdminData(response.data.admin);
                console.log('admindata',adminData)
            } catch (err) {
                console.error("Failed to fetch admin data:", err);
                setError('Failed to fetch admin data. Using fallback data.');
                setAdminData(adminInfo); // Use adminInfo as fallback
            } finally {
                setLoading(false);
            }
        };

        fetchAdminData();
    }, []);

    if (loading) return <Layout><div>Loading...</div></Layout>;
    
    // Use adminInfo as fallback if API fetch failed
    const displayData = adminData ;

    return (
        <Layout>
            {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">Error:</strong>
                <span className="block sm:inline"> {error}</span>
            </div>}
            <div className="flex flex-col items-center py-10 px-3 min-h-screen">
                <div className="bg-white bg-opacity-40 py-2 rounded-lg shadow-md w-[950px] ml-12 h-[113px] border border-white">
                    <div className="flex items-center px-5 py-2">
                        <img 
                            src={displayData.profile?.imageUrl || `/images/hero.png`} 
                            alt="Profile" 
                            className="rounded-[10px] w-[80px] h-[80px] mr-4" 
                        />
                        <div>
                            <h1 className="text-2xl font-semibold text-blacktext">{displayData?.name }</h1>
                            <p className="text-blacktext text-opacity-80">{displayData?.email || 'admin@example.com'}</p>
                        </div>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 py-6 md:grid-cols-2 gap-6 w-full max-w-4xl">
                    <div>
                        <div className="bg-white w-[435px] h-[222px] p-6 rounded-[15px] mb-6">
                            <h2 className="text-[18px] font-semibold mb-4 text-blacktext">Profile Information</h2>
                            <p><strong className="text-blacktext text-[12px]">Full Name:</strong> <span className="text-greytext text-[12px]">{displayData?.name || 'Admin'}</span></p>
                            <p><strong className="text-blacktext text-[12px]">Mobile:</strong> <span className="text-greytext text-[12px]">{displayData?.phone || 'N/A'}</span></p>
                            <p><strong className="text-blacktext text-[12px]">Email:</strong> <span className="text-greytext text-[12px]">{displayData?.email || 'admin@example.com'}</span></p>
                            <p><strong className="text-blacktext text-[12px]">Location:</strong> <span className="text-greytext text-[12px]">{displayData?.location || 'N/A'}</span></p>
                        </div>
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
