import React, { useEffect, useState } from "react";
import { FaSave, FaPlus } from "react-icons/fa";
import Layout from "../../Layout";
import { useNavigate } from "react-router-dom";
import BannerCardModel from "../../components/Modals/bannerCardModel";
import BannerModal from "../../components/Modals/bannerModel";
import axios from "axios";
import { BASEURL } from "../../utils/constant";

const Banner = () => {
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);
  const [banners, setBanners] = useState([]);
  const [uniqueAppPages, setUniqueAppPages] = useState([]);
  const [uniqueSections, setUniqueSections] = useState([]);
  const [selectedSection, setSelectedSection] = useState(null);

  
    const fetchBannerData = async () => {
      try {
        const response = await axios.get(`${BASEURL}banner`, {
          headers: {
            VerifyMe: "RGVlcGFrS3VzaHdhaGE5Mzk5MzY5ODU0",
          },
        });
        const bannerData = response.data.banners;
        setBanners(bannerData);

        // Extract unique appPages
        const appPages = [
          ...new Set(bannerData.map((banner) => banner.appPage)),
        ];
        setUniqueAppPages(appPages);

        // Extract unique sections
        const sections = [
          ...new Set(bannerData.map((banner) => banner.section)),
        ];
        setUniqueSections(sections);
      } catch (error) {
        console.error("Error fetching banner data:", error);
      }
    };
    useEffect(() => {
    fetchBannerData();
  }, []);


  const handleDeleteBanner = async (id) => {
    try {
      await axios.delete(`${BASEURL}banner/${id}`, {
        headers: {
          VerifyMe: "RGVlcGFrS3VzaHdhaGE5Mzk5MzY5ODU0",
        },
      });
      // Refresh the banner data after successful deletion
      fetchBannerData();
    } catch (error) {
      console.error("Error deleting banner:", error);
    }
  };
  const handleEditBanner = (banner) => {
    navigate(`/editbanner`, { state: { bannerData: banner } });
  };

  const handleSectionClick = (section) => {
    setSelectedSection(section === selectedSection ? null : section);
  };

  const handleAddUserClick = () => {
    setModalOpen(true);
  };

  const handleNavigateToBlog = () => {
    setModalOpen(false);
    navigate("/blogs");
  };

  const handleNavigateToIngredients = () => {
    setModalOpen(false);
    navigate("/ingredients");
  };

  const handleAddProfileClick = () => {
    navigate("/editbanner");
  };

  const filteredAppPages = selectedSection
    ? uniqueAppPages.filter((appPage) =>
        banners.some(
          (banner) =>
            banner.appPage === appPage && banner.section === selectedSection
        )
      )
    : uniqueAppPages;

  return (
    <Layout>
      <div className="min-h-screen ">
        <div className="flex justify-between">
          <h3 className="text-2xl font-bold">
            <span className="text-gray-500"> Sections</span>
          </h3>
          <button
            onClick={handleAddUserClick}
            className=" bg-blue text-white border rounded-xl flex px-4 py-2"
          >
            Add User
          </button>
        </div>

        <div className="flex space-x-4 mt-4 flex-wrap">
          {uniqueSections.map((section, index) => (
            <button
              key={index}
              className={`border rounded-xl flex px-4 py-2 mb-2 ${
                selectedSection === section ? "bg-blue text-white" : "text-blue"
              }`}
              onClick={() => handleSectionClick(section)}
            >
              {section}
            </button>
          ))}
          <button
            className="text-blue border rounded-xl flex px-4 py-2 mb-2"
            onClick={handleAddProfileClick}
          >
            add
          </button>
        </div>

        {filteredAppPages.map((appPage, index) => (
          <div key={index}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">
                <span className="text-gray-500">{appPage}</span>
              </h3>
            </div>

            <div className="flex">
              <div className="w-full pr-[24px]">
                <div className="grid grid-cols-3 gap-3">
                  {banners
                    .filter(
                      (banner) =>
                        banner.appPage === appPage &&
                        (!selectedSection || banner.section === selectedSection)
                    )
                    .map((banner) => (
                      <BannerCardModel
                        key={banner.id}
                        name={banner.name}
                        imageSrc={banner.image}
                        onDelete={() => handleDeleteBanner(banner.id)}
                        onEdit={() => handleEditBanner(banner.id)}
                      />
                    ))}
                </div>
              </div>
            </div>
            <hr className="border border-gray-300 mt-4" />
          </div>
        ))}
      </div>

      {isModalOpen && (
        <BannerModal onClose={() => setModalOpen(false)} className="w-[480px]">
          <h2 className="text-lg font-bold mb-4">Select One Option</h2>
          <div className="space-y-4 py-2">
            {/* Blog Option */}
            <div
              className="p-2 border rounded-lg cursor-pointer w-[480px] bg-backgroundgray"
              onClick={handleNavigateToBlog}
            >
              <h3 className="text-xl font-bold">Blog</h3>
              <p>Navigate to Blog Page</p>
            </div>

            {/* Ingredients Option */}
            <div
              className="p-2 border rounded-lg cursor-pointer bg-backgroundgray"
              onClick={handleNavigateToIngredients}
            >
              <h3 className="text-xl font-bold">Ingredients</h3>
              <p>Navigate to Ingredients Page</p>
            </div>
          </div>

          {/* Cancel Button */}
          <div className="flex justify-end mt-4">
            <button
              onClick={() => setModalOpen(false)}
              className="bg-green text-white px-4 py-2 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </BannerModal>
      )}
    </Layout>
  );
};

export default Banner;
