import React, { useState, useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import Layout from "../../Layout";
import axios from "axios";
import { BASEURL } from "../../utils/constant";

const EditBanner = () => {
  const location = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  const [bannerName, setBannerName] = useState("");
  const [bannerImage, setBannerImage] = useState("");
  const [vendor, setVendor] = useState("");
  const [section, setSection] = useState("");
  const [page, setPage] = useState("");
  const [subPage, setSubPage] = useState("");
  const [redirectOption, setRedirectOption] = useState({
    product: false,
    page: false,
  });
  const [imageUrl, setImageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const bannerData = location.state?.bannerData;
    if (bannerData) {
      setBannerName(bannerData.name || "");
      setVendor(bannerData.vendor || "");
      setSection(bannerData.section || "");
      setPage(bannerData.page || "");
      setSubPage(bannerData.subPage || "");
      setRedirectOption({
        product: bannerData.redirectToProduct || false,
        page: bannerData.redirectToPage || false,
      });
      setImageUrl(bannerData.imageUrl || "");
    }
  }, [location.state]);

  const handleSave = async () => {
    setIsLoading(true);
    setError("");

    const bannerData = {
      id,
      appPage: "Activity Page",
      name: bannerName,
      image: imageUrl ? `/uploads/${imageUrl}` : "", // Adjust the image URL here
      vendor,
      section,
      page,
      subPage,
      redirectToProduct: redirectOption.product,
      redirectToPage: redirectOption.page,
    };

    try {
      const response = await axios.post(`${BASEURL}banner`, bannerData, {
        headers: {
          'VerifyMe': 'RGVlcGFrS3VzaHdhaGE5Mzk5MzY5ODU0',
        }
      });
      console.log("Banner saved successfully:", response.data);
      navigate("/banner");
    } catch (err) {
      console.error("Error saving banner:", err);
      setError("Failed to save banner. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  function handleChange(e) {
    console.log(e.target.files);
    setImageUrl(URL.createObjectURL(e.target.files[0]));
}

  return (
    <Layout>
      <div className="p-8 bg-gray-50 min-h-screen">
        <div className="flex justify-between mb-6">
          <h2 className="text-xl font-bold">Banner Image</h2>
          <button
            className="bg-blue text-white px-4 py-2 rounded-lg"
            onClick={handleSave}
          >
            Save
          </button>
        </div>

        <div className="bg-white shadow-md p-6 rounded-lg">
          {/* Banner Image Display */}
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-1 flex flex-col items-center border-dashed border-2 border-gray-300 rounded-lg p-4">
              <div className="w-[345px] h-[180px] flex justify-center items-center">
              <input type="file" onChange={handleChange} />
              <img src={imageUrl} />
              </div>
              <label className="mt-2 text-blue-500">Upload Image</label>
            </div>

            <div className="col-span-2 grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Banner Name
                </label>
                <input
                  type="text"
                  value={bannerName}
                  onChange={(e) => setBannerName(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                  placeholder="Enter banner name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Vendor Hosting
                </label>
                <select
                  value={vendor}
                  onChange={(e) => setVendor(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                >
                  <option value="">Select Vendor</option>
                  <option value="Vendor 1">Vendor 1</option>
                  <option value="Vendor 2">Vendor 2</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mt-4 flex space-x-4">
            <div>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={redirectOption.product}
                  onChange={() =>
                    setRedirectOption((prev) => ( {
                      ...prev,
                      product: !prev.product,
                    }))
                  }
                />
                <span>Redirect to product</span>
              </label>
            </div>
            <div>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={redirectOption.page}
                  onChange={() =>
                    setRedirectOption((prev) => ({ ...prev, page: !prev.page }))
                  }
                />
                <span>Redirect to Page</span>
              </label>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Link
              </label>
              <select
                value={section}
                onChange={(e) => setSection(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
              >
                <option value="">Select Section</option>
                <option value="Section 1">Section 1</option>
                <option value="Section 2">Section 2</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Page
              </label>
              <select
                value={page}
                onChange={(e) => setPage(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
              >
                <option value="">Select Page</option>
                <option value="Page 1">Page 1</option>
                <option value="Page 2">Page 2</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Sub Page
              </label>
              <select
                value={subPage}
                onChange={(e) => setSubPage(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
              >
                <option value="">Select Sub Page</option>
                <option value="Sub Page 1">Sub Page 1</option>
                <option value="Sub Page 2">Sub Page 2</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-6 p-6">
          <h2 className="text-lg font-bold">Stats</h2>
          <p className="mt-2 text-gray-500 text-center">
            Stats will be generated after 2 days
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default EditBanner;