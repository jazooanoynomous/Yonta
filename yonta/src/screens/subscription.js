import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import { FaCheck, FaTimes, FaSave, FaTrash, FaEdit } from "react-icons/fa"; // Importing the icons
import { BASEURL } from "../utils/constant";
import axios from "axios";
import { toast } from "react-toastify";
function Subscription({ plans }) {
  const [showModal, setShowModal] = useState(false);
  const [planName, setPlanName] = useState("");
  const [offerTag, setOfferTag] = useState("");
  const [isActive, setIsActive] = useState();
  const [billingCycle, setBillingCycle] = useState("");
  const [price, setPrice] = useState("");
  const [sections, setSections] = useState([]);
  const [editPlanId, setEditPlanId] = useState(null); // For editing
  const [subscriptionData, setsubscriptionData] = useState([]); // State to store the user data
  const [loading, setLoading] = useState(true); // State to manage loading

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handlePlanNameChange = (e) => setPlanName(e.target.value);
  const handleOfferTagChange = (e) => setOfferTag(e.target.value);
  const handleIsActiveChange = (e) => setIsActive(e.target.checked);
  const handleBillingCycleChange = (e) => setBillingCycle(e.target.value);
  const handlePriceChange = (e) => setPrice(e.target.value);
  const handleSectionChange = (index, checked) => {
    const updatedSections = [...sections];

    // Update the status of the section at the specified index
    if (updatedSections[index]) {
      updatedSections[index].status = checked;
      setSections(updatedSections);
    }
  };

  const parseSections = (sectionsData) => {
    // Check if sectionsData is a string
    if (typeof sectionsData === 'string') {
      // First, replace escaped quotes and extra slashes if present
      const cleanedSections = sectionsData.replace(/\\/g, '').replace(/^"(.*)"$/, '$1'); // Removes surrounding quotes and slashes

      // Try parsing the cleaned string
      try {
        return JSON.parse(cleanedSections);
      } catch (error) {
        console.error("Error parsing sections:", error);
        return []; // Return an empty array if parsing fails
      }
    }

    // If sectionsData is already an object (correct format), return it as is
    return sectionsData;
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedPlan = {
      name: planName,
      offerTag,
      monthlyPrice: billingCycle === "monthly" ? price : null,
      yearlyPrice: billingCycle === "yearly" ? price : null,
      sections: JSON.stringify(sections),  // Correctly stringify sections here
      status: isActive ? "active" : "inactive",
    };

    try {
      // If editPlanId is provided, use PUT, otherwise use POST for new subscription
      if (editPlanId) {
        await axios.put(`${BASEURL}subscription/${editPlanId}`, updatedPlan, {
          headers: {
            VerifyMe: "RGVlcGFrS3VzaHdhaGE5Mzk5MzY5ODU0",
          },
        });
        toast.success("Successfully updated");
      } else {
        await axios.post(`${BASEURL}subscription`, updatedPlan, {
          headers: {
            VerifyMe: "RGVlcGFrS3VzaHdhaGE5Mzk5MzY5ODU0",
          },
        });
        toast.success("Successfully created");
      }

      // Optionally refetch subscription data to ensure UI is up-to-date
      fetchsubscriptionData();

      // Close the modal
      toggleModal();
    } catch (error) {
      console.error("Error submitting plan:", error);
      // Show error notification
      toast.error(`Failed to ${editPlanId ? "update" : "create"} plan`);
    }
  };


  const handleEdit = (plan) => {
    setPlanName(plan.name);
    setOfferTag(plan.offerTag);
    setIsActive(plan.status === "active");
    setBillingCycle(plan.monthlyPrice ? "monthly" : "yearly");
    setPrice(plan.monthlyPrice || plan.yearlyPrice);

    try {
      // Check if the sections string is double-escaped and fix it
      let sectionsData = plan.sections;
      if (sectionsData.startsWith("\"") && sectionsData.endsWith("\"")) {
        // Remove the outer quotes
        sectionsData = sectionsData.slice(1, -1);
        // Replace escaped quotes and backslashes
        sectionsData = sectionsData.replace(/\\"/g, '"').replace(/\\\\/g, '\\');
      }

      const parsedSections = JSON.parse(sectionsData || "[]");
      setSections(Array.isArray(parsedSections) ? parsedSections : []);
    } catch (error) {
      console.error("Error parsing sections:", error);
      setSections([]);
    }

    setEditPlanId(plan.id); // Set plan ID for PUT request
    toggleModal();
  };



  const fetchsubscriptionData = async () => {
    try {
      const response = await axios.get(`${BASEURL}subscription`, {
        headers: {
          VerifyMe: "RGVlcGFrS3VzaHdhaGE5Mzk5MzY5ODU0", // Add your custom header here
        },
      });
      setsubscriptionData(response.data.subscriptions || []); // Set the user data in state
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false); // Stop the loading state
    }
  };
  const handleDelete = async (id) => {
    try {
      // Send delete request with custom header
      await axios.delete(`${BASEURL}subscription/${id}`, {
        headers: {
          VerifyMe: "RGVlcGFrS3VzaHdhaGE5Mzk5MzY5ODU0",
        },
      });

      // Show success notification
      toast.success("Successfully deleted");

      // Remove the deleted subscription from state
      setsubscriptionData(subscriptionData.filter((sub) => sub.id !== id));

      // Optionally refetch subscription data to ensure UI is up-to-date
      fetchsubscriptionData(); // Ensure you have this function to refresh the data
    } catch (error) {
      console.error("Error deleting plan:", error);
      // Show error notification
      toast.error("Failed to delete");
    }
  };

  useEffect(() => {
    fetchsubscriptionData(); // Fetch the user data when the component mounts
  }, []);
  console.log("subscription data", subscriptionData);

  return (
    <Layout>
      <div className="container mx-auto px-4">
        <div className="flex justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Plans</h2>
          <button
            className="bg-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={toggleModal}
          >
            + Add New
          </button>
        </div>

        {/* Plans listing */}
        <div className="grid grid-cols-3 gap-4">
          {subscriptionData.map(subscription => {
            const sections = parseSections(subscription.sections);


            // Debugging
            console.log("Parsed sections:", sections);
            return (
              <div
                key={subscription.id}
                className="bg-white rounded-lg shadow-md p-6 text-center h-[422px] w-[280px]"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {subscription.name}
                </h3>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Whole Year${subscription.yearlyPrice}
                </h3>
                <h1 className="text-5xl font-bold text-indigo-600 mb-4">{`$${subscription.monthlyPrice}`}</h1>
                <p className="text-indigo-600 mb-4">/monthly</p>
                <ul className="list-none text-gray-600">
                  {sections.length > 0 ? (
                    sections.map((section, idx) => (
                      <li key={idx} className="flex items-center justify-start gap-2 mb-2">
                        {section.status ? (
                          <FaCheck className="text-indigo-600" />
                        ) : (
                          <FaTimes className="text-lightred" />
                        )}
                        <span className={section.status ? "" : "text-red-500"}>
                          {section.name}
                        </span>
                      </li>
                    ))
                  ) : (
                    <p>No sections available</p>
                  )}
                </ul>


                <div className="flex gap-2 ml-auto justify-end">
                  <button
                    className="bg-[#FB5458] p-2 rounded-lg flex items-center"
                    onClick={() => handleDelete(subscription.id)}
                  >
                    <FaTrash className="text-white" />
                  </button>
                  <button
                    className="bg-[#1782AF] p-2 rounded-lg flex items-center gap-1"
                    onClick={() => handleEdit(subscription)}
                  >
                    <FaEdit className="text-white" />
                    <span className="text-white text-xs">Edit</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for adding new plan */}
        {showModal && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4 flex flex-col relative w-[504px] h-[524px]">
              <button
                onClick={toggleModal}
                className="absolute top-2 right-2 text-red-500 font-bold"
              >
                X
              </button>
              <form onSubmit={handleSubmit}>
                {/* Form Fields Here */}
                <div className="flex justify-between">
                  <div className="mb-4">
                    <label
                      htmlFor="planName"
                      className="block text-sm font-bold mb-2"
                    >
                      Plan Name
                    </label>
                    <input
                      type="text"
                      id="planName"
                      value={planName}
                      onChange={handlePlanNameChange}
                      className="rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-backgroundgray"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="offerTag"
                      className="block text-sm font-bold mb-2"
                    >
                      Offer Tag
                    </label>
                    <input
                      type="text"
                      id="offerTag"
                      value={offerTag}
                      onChange={handleOfferTagChange}
                      className="rounded bg-backgroundgray w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="mb-4">
                    <div className="flex items-center">
                      <label
                        htmlFor="isActive"
                        className="ml-2 text-gray-700 text-sm font-bold"
                      >
                        InActive
                      </label>
                      <label className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                        <input
                          type="checkbox"
                          id="isActive"
                          checked={isActive}
                          onChange={handleIsActiveChange}
                          className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                        />
                        <label
                          htmlFor="isActive"
                          className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                        ></label>
                      </label>
                      <label
                        htmlFor="isActive"
                        className="ml-2 text-gray-700 text-sm font-bold"
                      >
                        Active
                      </label>
                    </div>
                  </div>
                </div>

                <div className="mb-4 flex gap-4">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="monthly"
                      value="monthly"
                      checked={billingCycle === "monthly"}
                      onChange={handleBillingCycleChange}
                      className="form-radio h-5 w-5 text-blue-600"
                    />
                    <label htmlFor="monthly" className="ml-2 text-sm font-bold">
                      Monthly
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="yearly"
                      value="yearly"
                      checked={billingCycle === "yearly"}
                      onChange={handleBillingCycleChange}
                      className="form-radio h-5 w-5 text-blue-600"
                    />
                    <label htmlFor="yearly" className="ml-2 text-sm font-bold">
                      Yearly
                    </label>
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="price"
                    className="block text-sm font-bold mb-2"
                  >
                    Price
                  </label>
                  <input
                    type="number"
                    id="price"
                    value={price}
                    placeholder="1300"
                    onChange={handlePriceChange}
                    className="rounded w-1/2 py-2 px-3 bg-backgroundgray leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <h4 className="font-bold mb-2 text-lg">Sections</h4>
                <div className="space-y-3">
                  {sections.map((section, idx) => (
                    <div key={idx} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`section-${idx}`}
                        checked={section.status}
                        onChange={(e) =>
                          handleSectionChange(idx, e.target.checked)
                        }
                        className="form-checkbox h-5 w-5 text-blue-600"
                      />
                      <label
                        htmlFor={`section-${idx}`}
                        className="ml-2 text-sm font-bold"
                      >
                        {section.name}
                      </label>
                    </div>
                  ))}
                </div>
                <div className="flex justify-end gap-2 mt-6 mb-4">
                  <button
                    className="bg-textgreen text-white w-[100.44px] h-[43px] rounded-lg flex items-center justify-center"
                    type="submit"
                  >
                    <FaSave className="mr-2" />
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Subscription;
