import React, { useState } from 'react';
import Layout from '../Layout';
import { FaCheck, FaTimes, FaSave, FaTrash, FaEdit } from 'react-icons/fa'; // Importing the icons
import { plansData } from '../components/Datas';


function Subscription({ plans }) {
  const [showModal, setShowModal] = useState(false);
  const [planName, setPlanName] = useState('');
  const [offerTag, setOfferTag] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [isOfferActive, setIsOfferActive] = useState(false);
  const [billingCycle, setBillingCycle] = useState('');
  const [price, setPrice] = useState('');
  const [sections, setSections] = useState([]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handlePlanNameChange = (e) => setPlanName(e.target.value);
  const handleOfferTagChange = (e) => setOfferTag(e.target.value);
  const handleIsActiveChange = (e) => setIsActive(e.target.checked);
  const handleIsOfferActiveChange = (e) => setIsOfferActive(e.target.checked);
  const handleBillingCycleChange = (e) => setBillingCycle(e.target.value);
  const handlePriceChange = (e) => setPrice(e.target.value);
  const handleSectionChange = (e) => {
    const section = e.target.value;
    if (e.target.checked) {
      setSections([...sections, section]);
    } else {
      setSections(sections.filter((item) => item !== section));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted with data:', {
      planName,
      offerTag,
      isActive,
      isOfferActive,
      billingCycle,
      price,
      sections,
    });
    toggleModal(); // Close modal after submission
  };

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
          {plansData.map((plan, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center h-[422px] w-[280px]">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{plan.title}</h3>
              <h1 className="text-5xl font-bold text-indigo-600 mb-4">{plan.price}</h1>
              <p className="text-indigo-600 mb-4">/monthly</p>
              <ul className="list-none text-gray-600">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center justify-start gap-2 mb-2">
                    {plan.excluded?.includes(feature) ? (
                      <FaTimes className="text-lightred " />
                    ) : (
                      <FaCheck className="text-indigo-600" />
                    )}
                    <span className={plan.excluded?.includes(feature) ? 'text-red-500' : ''}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="flex mt-14 gap-2 ml-auto justify-end">
            <button className="bg-[#FB5458] p-2 rounded-lg flex items-center"
            //  onClick={() => handleDelete()}
            >
              <FaTrash className="text-white" />
            </button>
            <button className="bg-[#1782AF] p-2 rounded-lg flex items-center gap-1"
            //  onClick={() => handleEdit()}
            >
              <FaEdit className="text-white" />
              <span className="text-white text-xs">Edit</span>
            </button>
          </div>
            </div>
          ))}
          
        </div>

        {/* Modal for adding new plan */}
        {showModal && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4 flex flex-col relative w-[504px] h-[524px] ">
              <button
                onClick={toggleModal}
                className="absolute top-2 right-2 text-red-500 font-bold"
              >
                X
              </button>
              <form onSubmit={handleSubmit}>
                <div className='flex justify-between'>
                  <div className="mb-4">
                    <label htmlFor="planName" className="block text-sm font-bold mb-2">
                      Plan Name
                    </label>
                    <input
                      type="text"
                      id="planName"
                      value={planName}
                      onChange={handlePlanNameChange}
                      className=" rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-backgroundgray"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="offerTag" className="block text-sm font-bold mb-2">
                      Offer Tag
                    </label>
                    <input
                      type="text"
                      id="offerTag"
                      value={offerTag}
                      onChange={handleOfferTagChange}
                      className=" rounded bg-backgroundgray w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                </div>
                <div className='flex justify-between'>
                  <div className="mb-4">
                    <div className="flex items-center">
                      <label htmlFor="isActive" className="ml-2 text-gray-700 text-sm font-bold">
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
                      <label htmlFor="isActive" className="ml-2 text-gray-700 text-sm font-bold">
                        Active
                      </label>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center">
                      <label htmlFor="isOfferActive" className="ml-2 text-gray-700 text-sm font-bold">
                        InActive
                      </label>
                      <label className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                        <input
                          type="checkbox"
                          id="isOfferActive"
                          checked={isOfferActive}
                          onChange={handleIsOfferActiveChange}
                          className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                        />
                        <label
                          htmlFor="isOfferActive"
                          className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                        ></label>
                      </label>
                      <label htmlFor="isOfferActive" className="ml-2 text-gray-700 text-sm font-bold">
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
                      checked={billingCycle === 'monthly'}
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
                      checked={billingCycle === 'yearly'}
                      onChange={handleBillingCycleChange}
                      className="form-radio h-5 w-5 text-blue-600"
                    />
                    <label htmlFor="yearly" className="ml-2 text-sm font-bold">
                      Yearly
                    </label>
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="price" className="block text-sm font-bold mb-2 ">
                    Price
                  </label>
                  <input
                    type="number"
                    id="price"
                    value={price}
                    placeholder='1300'
                    onChange={handlePriceChange}
                    className=" rounded w-1/2 py-2 px-3 bg-backgroundgray leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>

                <h4 className='font-bold mb-2 text-lg'>Sections</h4>
                <div className='space-y-3'>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="yearly"
                      value="yearly"
                      checked={billingCycle === 'yearly'}
                      onChange={handleBillingCycleChange}
                      className="form-radio h-5 w-5 text-blue-600"
                    />
                    <label htmlFor="yearly" className="ml-2 text-sm font-bold">
                      All in one
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="yearly"
                      value="yearly"
                      checked={billingCycle === 'yearly'}
                      onChange={handleBillingCycleChange}
                      className="form-radio h-5 w-5 text-blue-600"
                    />
                    <label htmlFor="yearly" className="ml-2 text-sm font-bold">
                      Yoga
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="yearly"
                      value="yearly"
                      checked={billingCycle === 'yearly'}
                      onChange={handleBillingCycleChange}
                      className="form-radio h-5 w-5 text-blue-600"
                    />
                    <label htmlFor="yearly" className="ml-2 text-sm font-bold">
                      DietPlans
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="yearly"
                      value="yearly"
                      checked={billingCycle === 'yearly'}
                      onChange={handleBillingCycleChange}
                      className="form-radio h-5 w-5 text-blue-600"
                    />
                    <label htmlFor="yearly" className="ml-2 text-sm font-bold">
                      Ecommerce
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="yearly"
                      value="yearly"
                      checked={billingCycle === 'yearly'}
                      onChange={handleBillingCycleChange}
                      className="form-radio h-5 w-5 text-blue-600"
                    />
                    <label htmlFor="yearly" className="ml-2 text-sm font-bold">
                      Add workout
                    </label>
                  </div>
                </div>
                <div className="flex justify-end gap-2 mt-6 mb-4">
                  <button
                    className="bg-textgreen text-white w-[100.44px] h-[43px] rounded-lg flex items-center justify-center"
                    onClick
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
